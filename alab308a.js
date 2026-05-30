//Part 1
let counter = 0;
increaseCounter(counter);

function increaseCounter(c) {
    try {
        // Start recursion
        increaseCounter(++counter);

    } catch (error) {
        // Print the error message
        console.log("Error:", error.message, "\nMaximum call stack size:", counter);
    }
}

/////////////////////////////////////////////////////
//Part 3
let primeList = [];
let output = document.getElementById("output");
const numb = 10000;
getNumberOfPrime(numb);

function getNumberOfPrime(n) {
    try {
        if (n > 1) {
            primeList.push(2);

            for (let i = 3; i < n; i += 2) {
                if(isPrime(i)){
                    primeList.push(i);
                }
            }
        }
    } catch (err) {
        console.log("Error is: ", err);
    } finally {
        output.textContent = `The prime number between 1 to ${n} are ${primeList}`;
        //console.log(primeList);
    }

}

function isPrime(num) {
    // Check divisors up to the square root of num
    const limit = Math.sqrt(num);
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}    

/*
Declare a global counter variable.
Create a simple function that increments the variable, and then calls itself recursively.
Surround the initial function call in a try/catch block.
Within the catch, log the error and the value of the counter variable.

Write a function that takes a parameter n and adds a list of all prime numbers 
between one and n to your HTML element. 
n=10 , loop 2 - 9 ---> result list all the prime numbers [2, 3, 5, 7]
Once complete, use the alert() method to alert the user that the calculation is finished.

*/