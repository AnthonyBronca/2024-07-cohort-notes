# Context

When we talk about the JavaScript `this` keyword, it is referring to the context in which the item is being called. For example, if we have an object:

```js
const myObj = {
    name: "anthony"
    sayName(){
        console.log(this.sayName())
    }
}

myObj.sayName(); // prints: "anthony"
```

The `this` keyword allows us to key into the object that context belongs to.

## Losing Context

When we are working with keying into objects using the `this` keyword, it is possible to lose context. Imagine you are talking to someone and trying to explain something without establishing a context. It can cause confusion int he conversation, or even break the conversation.

Person A: "Hey it is so tasty"
Person B: "What is?"
Person A: "This thing I am eating"
Person B: "What thing? I can't see you. We are on the phone."
Person A: "You never listen to me... I told you at the start of the call."
Person B: "Oh it must have cut out."

-> The context has been lost.

Now imagine the same conversation but with context established

Person A: "Hey this pbj is so tasty"
Person B: "Oh yeah? What does it taste like"
Person A: "It has a bit of a nutty taste, but is still very creamy and soft. It almost melts"

Notice how in English we can use `it` once we establish context of what we were talking about. This is the same thing that `this` and Context establishment can do.
This conversation may sound... confusing.. if we didn't establish and retain context after we mentioned "pbj"

In JavaScript, we can lose context when the code forgets what it was talking about. Ususally when we we use references.

```js
class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`${this.name} is my name`);
    }
}

const anthony = new Person("anthony");

anthony.sayName(); // prints "anthony is my name";
const sayAnthonyName = anthony.sayName;

sayAnthonyName(); // loses context ->  TypeError: Cannot read properties of undefined (reading 'name')

```

We lost context because the `this` is referring to the reference. The thing we talked about was `anthony.sayName()`, but we did not retain a memory of that context within the reference.

## Retaining Context

How do we retain context then? We can use `call`, `bind` and `apply` to retain context. We can also use `fat arrows`.

### Call and Apply

We can use `call` and `apply` to bind the the OUTPUT of a function.



### Bind

We can use `bind` to attach `context` to a function and retain it throughout the lifecycle of that reference.
We use `bind` when we want to have `context` to a FUNCTION


```js
class Car {
    constructor(name){
        this.name = name;
    }

    static revEngine(){
        console.log("Rev engine")
    }

    carEngineRoar(name){
        console.log(`${name}'s engine roars`)
    }
}


class Bicycle {
    constructor(name){
        this.name = name;
    }

    pedalBike(min){
        console.log(` ${this.name} is pedaling for: ${min} minutes`);
    }
}

const ferrari = new Car("Ferrari");
const mountBike = new Bicycle("Mountain Bike");

mountBike.pedalBike.apply(ferrari, [5]); // Apply takes an array of arguments
mountBike.pedalBike.call(ferrari, 5); //call takes in any number of arguments


```

In this example, we have two classes. If we wanted to use the functionality that exists on one class, using the context that belongs to another class WITHOUT having to extend, we can utilize `apply` and `call`. Note that `apply` takes in the context we want to use for the function, and an array of arguments that may need to be passed in to the method. `call` takes in the context we want to use for the function, and any number of arguments.

```js

class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`${this.name} is my name`);
    }
}

const anthony = new Person("anthony");
const sayAnthonyName = anthony.sayName.bind(anthony);

sayAnthonyName(); // "anthony is my name"

```


### Fat Arrow Context

Fat arrows create a wrap around the context of a function. This means that it can retain its context without needing to use `bind`.

```js
class Bicycle {
    constructor(name){
        this.name = name;
    }

    pedalBike(min){
        console.log(` ${this.name} is pedaling for: ${min} minutes`);
    }

    sayName = () => {
        console.log(this.name)
    }
}

const ferrari = new Car("Ferrari");
const mountBike = new Bicycle("Mountain Bike");

mountBike.pedalBike.apply(ferrari, [5]); // Apply takes an array of arguments
mountBike.pedalBike.call(ferrari, 5); //call takes in any number of arguments

const mtnName = mountBike.sayName;

mtnName(); // prints: "Mountain Bike"

```



### Closing Out
So when will we see these context usages? When we have test specs, we sometimes want to create context of the functionality. This is especially true if you want to store the method/return of a method into a variable for easy calling, but don't want to lose context. When we use the `expect` functionality in tests, `expect` will take whatever we give it and try to invoke it. For example:

```js

describe("This is Place Holder", ()=> {
    it("Another placeholder", ()=> {
        const ferrari = new Car("Ferrari");

        expect(ferrari.sayName.bind(ferrari)).to.eql("ferrari"); // this will work
        expect(()=> ferrari.sayName()).to.eql("ferrari"); // will also work.
    })
})


```

The reason the `fat arrow` example will work, is because we are passing the `annonymous` function to the `expect` functionality. The `expect` function will then invoke the `annonymous` function which will then invoke the `ferrari.sayName()` functionality, which will retain context using the `fat arrow`.

The reason we would lose context without these work arounds is because the function invokation within the `expect` call would use the context of the `expect` scope, and then that would not be able to be passed in to the `eql` functionality, thus throwing an error.
