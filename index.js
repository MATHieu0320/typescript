"use strict";
// //////////VARIABLES
// let num = 24
// let num2:number;
// let numorstring: number|stringgit psu
// num = false
// num2 = "dd"
let array = ["chien", "chat", "lyon"];
let tableau = [];
let tableau2 = [];
console.log(array);
tableau.push(false);
let client = {
    pseudo: "marc",
    age: 24,
    message: ""
};
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
    }
}
const prince = new Singer(46, "prince");
console.log(prince);
function saymyname(name) {
    console.log(`bonjour +  ${name}`);
}
const age = (age, size) => {
    if (size) {
        console.log(`la taille est de ${size} cm et il est agé de ${age}  ans `);
    }
    else {
        console.log(` il est agé de ${age}  ans `);
    }
};
age("14", 45);
