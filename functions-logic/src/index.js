// function sayHello () {
//     return "Hello World"
// }

// function greet(fnMessage) {  //! finction that accepts another func as a parameter
//     console.log(fnMessage());
// }

// greet(sayHello) //! calling the func above

// let fn = sayHello();
// fn()    //!this is the same as calling the dfunction below
// sayHello()

// !=================================

import {compose, pipe} from 'lodash/fb' 

let input = "         JavaScript        ";
let output = "<div>" + input.trim()   + "</div>";

const transform = compose(wrapInDiv, toLowerCase, trim) //!heigher order dun that accepts punch of funcs as arguments and return a func as companision of that functions
transform(input) //! we call the functions above as the order we need below "from right to left"

//! to fix the direction of calling the functions from below we use "pipe"

transform = pipe(trim, toLowerCase, wrapInDiv)

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrapInSpan = str => `<span>${str}</span>`; //! the to code lines above looks simillar so we can do somthing about
// ================================================
const wrap = (type,str) => `<type>${str}</type>`
//! with curring technic the above code line will become

wrap = type => str => `<type>${str}</type>`

transform = pipe(trim, toLowerCase, wrap('div'))
// ================================================


const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));




// !=================== arrays ================
const numbers = [1, 2 , 3]

// adding
const added = [...numbers, 4] // adding 4 to the end of the new array
const added = [4, ...numbers] // adding 4 to the beginning of the array

const index = numbers.indexOf(2) // finds the position of 2 in the array
const added = [...numbers.slice(0, index)] // new array with the elements from 0 till the index above(not included 2)
const added = [...numbers.slice(0, index) , 4 ,...numbers.slice(index)]//pushes 4 before 2 and then return the rest of numbers from 2 

//!removing

const removed = numbers.filter(n=> n !== 2);// returns new array dosne't include 2
//! updating

const updated = numbers.map(n => (n=== 2 ? 20 : n)) // updates 2 with 20
