class Animal {
    constructor(name, numLegs, type) {
        this.name = name;
        this.numLegs = numLegs;
        this.type = type;

        Animal.count++
    }

    static count = 0;

    eat(food) {
        console.log(`${this.name} eats ${food}`)
        // console.log(this.numLegs, this.type)
    }

    static getTypes(...animals) {
        return animals.map(animal => animal.type);
    }
}

let houseCat = new Animal('house cat', 4, 'mammal');
let snake = new Animal('snake', 0, 'reptile');

console.log(houseCat);
console.log(snake);

houseCat.eat('tuna');
console.log(Animal.count)
console.log(Animal.getTypes(houseCat, snake))

class Feline extends Animal {
    constructor(name, size) {
        super(name, 4, 'mammal');
        this.size = size;
    }

    roar() {
        console.log('Roar!');
    }

    eat() {
        console.log(`${this.name} stalks it's prey.`)
    }
}

let tiger = new Feline('tiger', 'big');
console.log(tiger);
tiger.roar();
// houseCat.roar();
houseCat.eat('tuna');
tiger.eat();

console.log(houseCat instanceof Feline);
console.log(houseCat instanceof Animal);

class Tiger extends Feline {
    constructor(name, color) {
        super(name, 'big')
        this.color = color;
    }
}

class Book {
    constructor(title, author, genre, pages, cover, published) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.cover = cover;
        this.published = published;

        Book.books++
    }

    static books = 0;

    updateInfo(title, author, genre, pages, cover, published) {
        if (title) this.title = title;
        if (author) this.author = author;
        if (genre) this.genre = genre;
        if (pages) this.pages = pages;
        if (cover) this.cover = cover;
        if (published) this.published = published;

        return this;
    }
}

let im = new Book('Invisible Monster', 'Chuck Palahniuk', 'drama');
let sapiens = new Book('Sapiens', 'Yuval Noah Harari');
let pvf = new Book('Power vs Force', 'David Hawkins', 'self-development');
let gfd = new Book('Github for Dummies', 'Dr. Sarah Guthals');
let coe = new Book('City of Ember', 'Jeanne DuPrau');

console.log(im, sapiens, pvf, gfd, coe)
console.log(Book.books);

console.log(im.updateInfo('Invisible Monsters'));
