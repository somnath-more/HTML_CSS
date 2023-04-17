/*An arrow function takes two arguments firstName and lastName 
and returns a 2 letter string that represents the first letter 
of both the arguments. For the arguments Roger and Waters,
  the function returns ‘RW’*/ 
const Func = (firstName,lastName) => 
{ return firstName.charAt(0) + lastName.charAt(0); }
console.log(Func("More", "Somnath"));
console.log(Func("Roger", "Waters"));