
//Union in js
function printValues(values: string[] | string) {
  if (Array.isArray(values)) {
    console.log(values.join(",+ "));
  } else {
    console.log(values);
  }
}

printValues(["hello", "world"]); // Output: "hello, world"
printValues("hello");            // Output: "hello"


/*Generics in TypeScript allow you to write reusable and flexible code
 that can work with a variety of data types. Generics are a way to define
  functions, classes, and interfaces that can work with any type of data,
   without specifying the type upfront.*/

  function reverse<T>(arr: T[]): T[] {
    return arr.reverse();
  }
  
  let nums = [1, 2, 3, 4];
  let reversedNums = reverse(nums); // [4, 3, 2, 1]
console.log(reversedNums);
  let fruits = ["apple", "banana", "cherry"];
  let reversedFruits = reverse(fruits); // ["cherry", "banana", "apple"]
  console.log(reversedFruits);



 /* To learn the type of a variable, use typeof:

Type	Predicate
string	typeof s === "string"
string	typeof n === "string"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)*/

//generics using interaface
interface Point {
  x: string;
  y: string;
}
 
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
 

// logs "12, 26"
const point = { x: "sachin", y: "hello" };
logPoint(point);

//through classes and objects
class VirtualPoint {
  a: number;
  b: number;
 
  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
//logPoint(newVPoint); // logs "13, 56"

/////
// //Private Public and Protected

// class Person {
//   public name: string;
//   private age: number;
//   protected gender: string;

//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   public sayHello(): void {
//     console.log(`Hello, my name is ${this.name}`);
//   }

//   private getAge(): number {
//     return this.age;
//   }

//   protected getGender(): string {
//     return this.gender;
//   }
// }

// let person = new Person('John', 30, 'Male');
// person.name = 'Jane';    // OK, name is public
// person.age = 40;         // Error, age is private
// person.gender = 'Female' // Error, gender is protected
// person.sayHello();       // OK, sayHello is public
// person.getAge();         // Error, getAge is private
// person.getGender();      // Error, getGender is protected

//
// //Decorators
