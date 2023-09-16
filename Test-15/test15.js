"use strict";
// 15). More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let Guest = ["Ali", "Kamil", "Ahmed"];
console.log(Guest[0], ",I Would Like If You Join Me For Dinner");
console.log(Guest[1], ",I Would Like If You Join Me For Dinner");
console.log(Guest[2], ",I Would Like If You Join Me For Dinner");
console.log("Oooh!", Guest[0], "Is Not Coming For The Dinner");
Guest[0] = "Haider";
console.log(Guest[0], ",I Would Like If You Join Me For Dinner");
console.log(Guest[1], ",I Would Like If You Join Me For Dinner");
console.log(Guest[2], ",I Would Like If You Join Me For Dinner");
console.log("I'm Adding New Guests Because I Found A Bigger Table");
Guest.unshift("Arslan");
let middle = Math.floor(Guest.length / 2);
Guest.splice(middle, 0, "Hamza");
console.log(Guest);
Guest.push("Abdullah");
console.log(Guest);
for (var i = 0; i <= 5; i++) {
    console.log(Guest[i], ",I Would Like If You Join Me For Dinner");
}
