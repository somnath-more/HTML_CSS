function outerFunction() {
    var message = "Hello";
  
    function innerFunction() {
      console.log(message);
    }
  
    return innerFunction;
  }
  
  var myFunction = outerFunction();
  myFunction(); // logs "Hello"
  //its remembering functions its executed still