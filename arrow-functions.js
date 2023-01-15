/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     return a + b;
// }
// let sum = addTwoNumbers(3,5);
// console.log(sum);

// Arrow Function With Parameters
/* const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum); */

// Single Line Arrow Function With Parameters
const addTwoNumbers = (a, b) =>  a + b;
let sum = addTwoNumbers(3,5);
console.log(sum);
// Implicit Returns

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multiple string!
        check it out on the output terminal!
    </p>`
)
console.log(returnMultipleLines());
