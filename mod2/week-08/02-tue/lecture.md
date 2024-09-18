# Test Driven Development

Test Driven Development is the methodology that you write test specs in order to test for functionality and overall code quality. Then you write code to meet those test specs, and then refactor code as needed.

### The Three Lights of TDD

- Red - Write tests that then "fail". This means you have working test specs that need code to pass
- Green - Write code to pass the test specs
- Blue - Refactor the code, as needed, to clean up the syntax/performance while still being green


### Testing Frameworks

There are a bunch of frameworks and libraries to choose from. Common JavaScript testing frameworks and libraries are:

- Mocha
- Chai
- Jest
- Cypress
- Playwright


We will be using Mocha, Chai, and a few other supporting packages to write these tests.

### Mocha and Chai

We can begin by ensuring that our project has `mocha` and `chai` installed. Note: Chai has had some breaking updates that no longer support ES5 importing syntax, so we will need to be sure to install an older version.

```
npm install mocha && npm install chai@4.3.0
```

Once we have these installed, we can make a `test` or `tests` folder, and attach it to the `package.json` scripts we have for testing.

Lastly, we can create some testing files. It is good practice to include `spec` in the name of the file. Example: `01-helloWorld-spec.js`

### Writing A Tests

Mocha tests are built following this structure:

1. Import needed packages
2. Import needed functionality from files (these may not exist yet)
3. Create a testing block using `describe`
4. Create a testing point using `it`
5. Create test expectations to ensure functionality output is as expected

At App Academy, and a lot of other companies, we use AAA testing. This stands for:

Arrage - Organize code so that variables are at the top, demos in the middle, and assertions at the bottom
Act - Create demos, and create outputs using the tested function
Assert - Check to see if the expected result matches the actual result


Here is a test file that will check if a function returns "Hello World" or not.

```js
const chai = require("chai");
const expect = chai.expect;

const sayHelloWorld = require('../01-helloWorld.js');

describe("Function sayHelloWorld", ()=> {
    it("Returns a string", ()=> {
        const expectedResult = "Hello World";
        const testResult = sayHelloWorld();

        expect(typeof testResult === typeof expectedResult).to.eql(true);
    });
    it("Returns the correct text", () => {
        const goodResult = "Hello World";
        const badResult = "hello world";
        const actualResult = sayHelloWorld();

        expect(goodResult).to.eql("Hello World");
        expect(actualResult).to.not.be.eql(badResult);
        expect(actualResult).to.be.eql(goodResult);
    });
})

```



# Classes Recapped pt 2

## Inheritance

Inheritance refers to the idea that a class can grab the blueprints from another class. This is similar to using a spread operator within an Object to give it the key-value pairs of the inner object.

We use inheritance to avoid repetitive code (WET), and in order to ensure functionality can stay consistent across multiple Objects of similar types.


```js

class Person {
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(this.name);
    }
}

class Developer extends Person {
    constructor(name, languages = []){
        super(name);
        this.languages = languages;
    }
}

const anthony = new Developer("Anthony", ["JavaScript", "Python"]);


```

Notice in this example, I created a class called `Person`. It has the property of "name". A `Developer` may also need a name, but instead of recreating the variables and methods related to a Person, I can reuse this. This makes sense because a Person does not have to be a developer, but a developer has to be a person. It makes sense that a Developer can do everything a person can do, but not every personc an do what a developer does.

This means I can do:

```js
anthony.sayName(); // "Anthony"

```
Although `anthony` is not a "Person" so to speak, it is a "Developer" which also extends the functionality of the Person class. This means that `anthony` in this example is both a Person and a Developer.
