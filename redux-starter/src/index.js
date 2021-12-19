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