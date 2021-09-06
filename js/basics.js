var x = 20;
console.log(x);
console.log(typeof x);

//ctrl+alt+n - to run


//creating an object
var student={
    name: "Jhon",
    age: 34,
};
console.log(student.name);

//creating an array
var colors = ["Red" , "Blue" , "Green"];
console.log(colors[0]);

for(var i=0 ; i < colors.length; i++){
    console.log(colors[i]);
}

colors.push("Black");
console.log(colors);

colors.pop();
console.log(colors);

//function

var y = 10;
console.log(y);
function add(x,y){
    return x+y;
};
console.log(add(x,y));

function square(x){
    return x*x;
};
console.log(square(5));

//global level variables
var a = 50;
const b = 40;
function sub(x){
    let a=100;
    return x-a;
};
console.log(sub(200)); //100

console.log(a);//50

const emp={
    name: "Raj",
  age: 30,
};

console.log(emp);

emp.name="Ravi";
console.log(emp);

const shapes = ["Triangle", "square"];
console.log(shapes);
shapes[0] = "Circle";
console.log(shapes);
//shapes = ["circle", "rectangle"]; // invalid



// Spread Operator(...) - helps to copy array elements to new array
let newColors = [...colors];
console.log(colors);
console.log(newColors);

// Adding new color while copying existing colors
newColors = [...colors, "violet", "purple"];
console.log(newColors);
newColors = ["Brown", ...colors];
console.log(newColors);
newColors = ["Yellow", ...colors, "Pink"];
console.log(newColors);

console.log(typeof newColors);
//console.log(typeof student);
console.log(typeof add);

// Object destructuring - helps to assign object property values to new variables

var student = {
  name: "Jhon",
  age: 34,
  address: {
    stName: "Ramnagar",
    city: "Chennai",
  },
};
/*
const n = student.name;
const a = student.age;
const sName = student.address.stName;
console.log(n); 
*/

const { name: n, age } = student;
console.log(n);
console.log(age);

// Arrow function

const ad = (x, y) => x + y;
console.log(ad(10, 20));

const sq = (x) => x * x;
console.log(sq(10));

// map & filter

const numbers = [10, 50, 100];
const result = numbers.map((number) => sq(number));
console.log(result);

const res = numbers.filter((number) => number > 50);
console.log(res);

console.log(typeof res);
console.log(typeof ad);



