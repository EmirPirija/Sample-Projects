var guestName = prompt("What is your name?");

var guestList = ["Angela", "Jack", "Pan", "James", "Lara", "Jason"];

if (guestList.includes(guestName)) {
    alert("Welcome")
} else {
    alert("Sorry, you are not on the list")
}
