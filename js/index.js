import sub, { Person, add } from "./person"; // default & named export
import Student from "./student"; // default

//
const person = new Person("Ravi", 30);
console.log(person.name);
console.log(person.age);
person.talk();

console.log("***********");
const std1 = new Student("Ram", 20, 5);
console.log(std1.age);
std1.talk();
std1.read();
console.log(std1.name);
console.log(std1.std);
