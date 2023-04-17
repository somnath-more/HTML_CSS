//In JavaScript, custom objects are objects that you define yourself, using a constructor function or an object literal
var car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
  
    getCarInfo: function() {
      return this.year + " " + this.make + " " + this.model;
    }
  };
  
  console.log(car.getCarInfo()); // logs "2020 Toyota Camry"
//   function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
  
//     this.getFullName = function() {
//       return this.firstName + " " + this.lastName;
//     };
//   }
  
//   var person1 = new Person("John", "Doe");
//   console.log(person1.getFullName()); // logs "John Doe"
    