//1. Write a program that prints all prime numbers in given range. Take sub from 1-100.
const start = 1;
const end = 100;
const primeNumbers = [];
function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
for (var i = start; i <= end; i++) {
  if (isPrime(i)) primeNumbers.push(i);
}
console.log(primeNumbers);
