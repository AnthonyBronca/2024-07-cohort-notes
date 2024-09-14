const Employee = require("./employee.js");
const Manager = require("./manager.js");

let hobbes   = new Manager('Hobbes', 1000000, 'Founder');
let calvin   = new Manager('Calvin', 130000, 'Director', hobbes);
let susie    = new Manager('Susie', 100000, 'TA Manager', calvin);
let lily     = new Employee('Lily', 90000, 'TA', susie);
let clifford = new Employee('Clifford', 90000, 'TA', susie);

console.log(hobbes.calculateBonus(0.05))   // 70_500
console.log(calvin.calculateBonus(0.05))   // 20_500
console.log(susie.calculateBonus(0.05))    // 14_000
console.log(lily.calculateBonus(0.05))     //  4_500
console.log(clifford.calculateBonus(0.05)) //  4_500