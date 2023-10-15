// const output = document.querySelector("#output");
// const button = document.querySelector("#set-alarm");

/// Wrapping setTimeout() ///

// Set alarm function
// function setAlarm() {
//     // Set timeout for 1 second (1000 milliseconds)
//     setTimeout(() => {
//         // Display alarm message
//         output.textContent = "Alarm! Wake up! Testing!! Testing!!!";
//     }, 1000);
// }



/// The Promise() constructor ///

// function alarm(person, delay) {
//     // Return a new promise
//     return new Promise((resolve, reject) => {
//         // Check if delay is negative
//         if (delay < 0) {
//             // Throw an error if delay is negative
//             throw new Error("Alarm delay must no be negative...")
//         }
//         // Set a timeout to resolve the promise
//         setTimeout(() => {
//             // Resolve the promise with a message
//             resolve(`Alarm! Wake up! Testing!! Testing!!!, ${person}!`)
//         }, delay);
//     });
// }

// button.addEventListener("click", setAlarm);

////////////////////////////////////////////////////////////////////////////////////////////

/// Using the alarm() API ///
// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#set-alarm");
// const output = document.querySelector("#output");

// // Function to set alarm
// function setAlarm() {
//     // Get values from input fields
//     const name = document.getElementById('name').value;
//     const delay = document.getElementById('delay').value;
   
//     // Call alarm function with name and delay values
//     alarm(name, delay)
//        .then((message) => {
//          // Display success message
//          document.getElementById('output').textContent = message;
//        })
//        .catch((error) => {
//          // Display error message
//          document.getElementById('output').textContent = `Couldn't set alarm: ${error}`;
//        });
//    }

///////////////////////////////////////////////////////////////////////////////////////////////////

/// Using async and await with the alarm() API ///

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// Function to set alarm
function alarm(person, delay) {
    // Return a new promise
    return new Promise((resolve, reject) => {
       // Check if delay is negative
       if (delay < 0) {
         // Throw an error if delay is negative
         throw new Error("Alarm delay must not be negative");
       }
       // Set a timeout to resolve the promise
       setTimeout(() => {
         // Resolve the promise with a message
         resolve(`Wake up, ${person}!`);
       }, delay);
    });
   }

button.addEventListener("click", async () => {
  try {
    // Await alarm function with name and delay values
    const message = await alarm(name.value, delay.value);
    // Set output text to alarm message
    output.textContent = message;
  } catch (error) {
    // Handle error and set output text to error message
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});