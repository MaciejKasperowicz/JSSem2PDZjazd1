//4) Write a class that prints the list of the first n Fibonacci numbers.
//The first two Fibonacci numbers are 1 and 1.
//The n+1-st Fibonacci number can be computed
//by adding the n-th and the n-1-th Fibonacci number.
//The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class FibonacciNumbers {
  constructor() {
    this.a = 1;
    this.b = 0;
    this.temp;
  }

  showFibonacciNumbers(n) {
    console.log(this.b);
    console.log(this.a);
    console.log(this.a + this.b);

    while (n > 2) {
      this.temp = this.a;

      this.a = this.a + this.b;
      this.b = this.temp;
      // fibonacciNumbers.push(a);
      console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);
      n--;
    }
  }
}

const numbers = new FibonacciNumbers();
numbers.showFibonacciNumbers(7);
