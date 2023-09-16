"use strict";
// 16). Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//    Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//    Print your list to make sure you actually have an empty list at the end of your program.
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
console.log("The Dinner Table Is Late So I Can Only Invite Two persons");
console.log(Guest.pop(), "Sorry! I Can't Invite Not You");
console.log(Guest.pop(), "Sorry! I Can't Invite Not You");
console.log(Guest.pop(), "Sorry! I Can't Invite Not You");
console.log(Guest.pop(), "Sorry! I Can't Invite Not You");
console.log(Guest[0], "You Are Still Invited For Dinner");
console.log(Guest[1], "You Are Still Invited For Dinner");
Guest.pop();
Guest.pop();
console.log(Guest);
