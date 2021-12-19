function add (a,b) {
    return a + b ;
}

//!curring is a technice that takes N arguments and convert it to a function with 1 argument

function add (a) {
    return function(b) {
        return a + b ;
    }
}

const add1 = add(1);
add1(5) //add1 gets an argument and adds 1 to it

//so what we will get is 
add(1)(5) //add(1,5)

//! with arrow function

const add2 = a => b => a + b; // (A,b) => a + b