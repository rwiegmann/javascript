console.log("Hello world!");

// ********************************************************
//   EXAMPLE 1
// ********************************************************

var firstName = 'John';
var civilStatus = 'Single';
// isMarried = true;


if (civilStatus === 'Married') {
    console.log(firstName + " is married");
}else {
    console.log(firstName + " is NOT married.");
}

// ********************************************************
//   EXAMPLE 2
// ********************************************************

isMarried = true;
if (isMarried){
    console.log(firstName + " is, in fact, married.")
} else{
    console.log(firstName + " is not married");
}

// ********************************************************
//   EXAMPLE 3 TERNARY OPERATOR => IF/ELSE SHORTENED
// ********************************************************

firstName = "Bob";
var age = 14;

age >= 18 ? console.log(firstName + " can drink beer.") // the ? operator acts like an IF
: console.log(firstName + " can not drink beer!");      // and the : operator acts like an else

// ********************************************************
//   EXAMPLE 4 MULTIPLE CONDITIONS  && both must be true || acts as OR - 1 must be true
// ********************************************************

var occupation = "doctor";
lastName = "Rockefeller";

if ((occupation === "doctor") && (lastName === "Rockefeller")){
    console.log(lastName + " ... "+ occupation + " ... " + "VERY rich man");
}
else if ((occupation === "doctor") || (lastName === "Rockefeller")){
    console.log(lastName + " ... "+ occupation + " ... " + "rich man");
}
else {
    console.log(lastName + " ... "+ occupation + " ... " + "Poor man");
}

// ********************************************************
//   EXAMPLE 5 MULTIPLE CONDITIONS  MORE IF/ELSE SHORTENED (TERNARY)
// ********************************************************

firstName = "Jacob";
var age = 22;
var drinkOfChioce = age >= 18 ? 'beer' : 'juice';

console.log(firstName + " can drink " + drinkOfChioce);

// ********************************************************
//   EXAMPLE 5 MULTIPLE CONDITIONS  USING SWITCH
// ********************************************************

var job = 'doctor';

switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + " is a(n) " + job);
        break;
    case 'doctor':
        console.log(firstName + " is a " + job + ". He helps those that are sick.");
        break;
    default:
        console.log(firstName + " does something else.");
        break;
}















