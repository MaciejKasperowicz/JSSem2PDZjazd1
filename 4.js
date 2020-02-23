//4) Write a class that prints the list of the first n Fibonacci numbers.
//The first two Fibonacci numbers are 1 and 1.
//The n+1-st Fibonacci number can be computed
//by adding the n-th and the n-1-th Fibonacci number.
//The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class fibonacciNumbers {
  constructor() {
    a = 1;
    b = 0;
    temp;
  }
}

const fibonacci = function(n) {
  let a = 1;
  let b = 0;
  let temp;
  // const fibonacciNumbers = [];
  console.log(b);
  console.log(a);
  console.log(a + b);
  while (n > 2) {
    temp = a;

    a = a + b;
    b = temp;
    // fibonacciNumbers.push(a);
    console.log(`${a} + ${b} = ${a + b}`);
    n--;
  }
  // console.log(fibonacciNumbers);
};
fibonacci(10);
