
/*
*******************************************
Truthy Falsey values
*******************************************
*/

// False is either: undefined, null, 0, '', or NaN


//  variable will be set to zero

var height = 0;

if (height){
    console.log("height is " + height);
} else {
    console.log("height is false - " + height);
}

//  now the variable will be undefined

var x;

if (x){
    console.log("x is " + x);
} else {
    console.log("x is false - " + x);
}

// now test for either true or zero
// height set to 0 above

if (height || (height=== 0)){
    console.log("height is true and is " + height);
} else {
    console.log("height is false - " + height);
}

if (height || (height== 0)){
    console.log("height is truthey and is " + height);
} else {
    console.log("height is false - " + height);
}

// now set to 0 but as a string
height = "0";
if (height || (height == 0)){
    console.log("height is truthey and is " + height);
} else {
    console.log("height is false - " + height);
}


