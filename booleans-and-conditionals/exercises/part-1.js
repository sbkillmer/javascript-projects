// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight = 'red blinking';
let spaceSuitsOn = true;
let shutteCabinReady = true;
let crewStatus = spaceSuitsOn && shutteCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:
// I predict "engines are off" will print as the first two conditions aren't met

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

// I predicted correctly