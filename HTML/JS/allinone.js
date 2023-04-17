// Note that there's no function name before the parentheses
const avg = (...args) => {
    let sum = 0;
    for (const item of args) {
      sum += item;
    }
    return sum / args.length;
  };
  
  // You can omit the `return` when simply returning an expression
  const sum = (a, b, c) => a + b + c;

  //Arrow functions
  let x = [1, 2, 3, 4]

x.map((val) => val * 2) // [2, 4, 6, 8]
x.filter((val) => val % 2 == 0) // [2, 4]
x.reduce((acc, val) => acc + val, 0) // 10