"use strict";
// 2). Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
// Store the person's name in a variable
const person = "Haider";
console.log("Lowercase:", person.toLowerCase());
console.log("Uppercase:", person.toUpperCase());
console.log("TitleCase", person.charAt(0).toUpperCase() + person.slice(1).toLowerCase());
