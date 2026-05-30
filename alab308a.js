//Part 1
let counter = 0;
increaseCounter(counter);

function increaseCounter(c) {
    try {
        // Start recursion
        increaseCounter(++counter);

    } catch (error) {
        // Print the error message
        console.log("Error:", error.message,"\nMaximum call stack size:", counter);
    }
}

/////////////////////////////////////////////////////
//Part 3
let primeList = [];
//let output = document.getElementById(output);

function getNumberOfPrime(n) {
    for (let i = 1; i < n; i++) {
        if (i == 2) {
            primeList.push(i);
            break;
        }
        if (i % 2 == 0) {

        }
    }

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