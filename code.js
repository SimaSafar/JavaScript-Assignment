// A const is a variable which cannot be re-assigned. Below you have a `const`
// variable called `fruit` which is assigned the value "Apple".
// We will change the fruit by first assigning to a new let variable.

const fruit = "Apple";
let newFruit = fruit;

// Re-assigning the fruit variable to "Orange"
newFruit = "Orange";

// To complete this task, you should see "The fruit is Orange" in the console.
console.log("The fruit is", newFruit);



// JavaScript supports the following math operators:
//
//   Add: +
//   Subtract: -
//   Multiply: *
//   Divide: /
//
// For each task below, add a line beneath the task with your answer.

let age = 28.5; // My age
let currentYear = 2024; //current year

// Task 1: Inside of a console.log(), add 3.5 to your age:
console.log("Age plus 3.5:", age + 3.5);

// Task 2: Inside of a console.log(), take the current year and subtract 1969:
console.log("Current year minus 1969:", currentYear - 1969);

// Task 3: Inside of a console.log(), divide 65 by 240:
console.log("65 divided by 240:", 65 / 240);

// Task 4: Inside of a console.log(), multiply 0.2708 by 100:
console.log("0.2708 multiplied by 100:", 0.2708 * 100);




// You can invoke these methods by using a . and then the method name
// followed by parenthesis.

// Task 1: Use console.log to print your name in uppercase
console.log("Sima Safar".toUpperCase()); // Sima Safar is my name

// Task 2: Remove the whitespace around the string in the console.log() below.
console.log("    Remove whitespace   ".trim());

// Task 3: Find a function in the documentation to count the number of characters in a
//         string and update the console.log() below to print the number instead of the string:
console.log("How many characters long is this string?".length);

// Task: Below is a variable which stores the speed a car is travelling. Write an if statement
// below the variable which prints "Slow down!" if the car is travelling above 100, or
// prints "Carry on" if it's travelling below 100.

const carSpeed = 70;

if (carSpeed > 100) {
    console.log("Slow down!");
} else {
    console.log("Carry on");
}




// Conditional statements require an assertion inside the parenthesis to determine
// whether the code block (between { and }) should be run. If the assertion equates to
// `true`, then the code is run. Otherwise it is not, and if the conditional statement has
// an `else` clause, then that block of code is run instead.


// Task 1: Below is a variable which stores the word count of a blog post I'm writing.
//         Write an if-statement which logs (console.log) "Get writing!" if the number is 0.
const wordCount = 0;

if (wordCount === 0) {
    console.log("Get writing!");
}

// Task 2: Use the "and" logical operator (&&) to chain two assertions together. Below are two
//         variables; one which stores the current temperature, and one which stores whether
//         someone has gone for a run today. Write an if-statement which prints "Go for a run!"
//         if the current temperature is greater than 10, and the goneForARun is false.
const currentTemperature = 15;
const goneForARun = false;

if (currentTemperature > 10 && !goneForARun) {
    console.log("Go for a run!");
}

// Task 3: Using .length to get the length of a string and the `name` variable below,
//         write an "else if" statement which prints the following:
//         * "You have a long name!" if the length of the name is greater than 10 characters long
//         * "You have a short name!" if the length of the name is less than 5 characters long
//         * "You have a medium length name!" if neither of the other two assertions is true
const name = "Sima";

if (name.length > 10) {
    console.log("You have a long name!");
} else if (name.length < 5) {
    console.log("You have a short name!");
} else {
    console.log("You have a medium length name!");
}




// Functions are a way to store a re-usable snippet of code in a block which can
// be run later. For example, this function would print the current time when invoked:
const printCurrentTime = () => {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString();
  }
  
  // Task 1: Invoke the printCurrentTime function inside a console.log():
  console.log(printCurrentTime());
  
  // Task 2: Write a function which, when invoked, prints your name. Then invoke it twice.
  const printMyName = () => {
    console.log("Sima Safar");
  }
  
  printMyName();
  printMyName();
  
  // Task 3: Write a function called `printGreeting`. When invoked using the examples
  // below, it should print "Hello Bob" or "Hello Sue":
  // printGreeting("Bob") // This should print "Hello Bob"
  // printGreeting("Sue") // This should print "Hello Sue"

  const printGreeting = (name) => {
    console.log(`Hello ${name}`);
  }
  
  printGreeting("Bob");
  printGreeting("Sue");
  
  // Task 4: Write a function called `multiply` which multiplies two numbers together and returns the value
  // so that it can be stored in a variable. See the example below to see how it should work.
  
  const multiply = (a, b) => {
    return a * b;
  }
  
  const first = multiply(13, 13);
  console.log(first);
  
  const second = multiply(100, 13);
  console.log(second);
  
  // Task 5: Write a function called `warmEnough` which takes the current temperature as an argument and returns
  // `true` if it is greater than 10 and false otherwise. Comment out the code below to invoke the
  // function. It should print "Go for a run!"
  
  const warmEnough = (temperature) => {
    return temperature > 10;
  }
  
  if (warmEnough(15)) {
    console.log("Go for a run!");
  }
  