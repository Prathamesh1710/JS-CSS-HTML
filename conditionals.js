var age = 10;

/* if, else if, and else statement */
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age > 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

/* switch statement */
var day = "Sunday";
switch(day) {
    case "Monday":
        console.log("Its Monday");
        break;
    case "Tuesday":
        console.log("Its Tuesday");
        break;
    case "Wednesday":
        console.log("Its Wednesday");
        break;
    case "Thursday":
        console.log("Its Thursday");
        break;
    case "Friday":
        console.log("Its Friday");
        break;
    case "Saturday":
        console.log("Its Saturday");
        break;
    case "Sunday":
        console.log("Its Sunday");
        break;
}
