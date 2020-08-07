//Task 1
let x = 0;
let y = 1;

console.log(x);
console.log(y);

//part 2 of task 1

let X = x + 3;
let Y = y + X;

console.log(X);
console.log(Y);

//Task 2
let resultx = 1 + 1 * 2;
let resulty = (1 + 1) * 2;
let resultz = 1 + ( 1 * 2 );
let resulta =  1 + 1 * 2 / 2;
let resultb =  (1 + 1 * 2 ) /  2;

console.log(resultx);
console.log(resulty);
console.log(resultz);
console.log(resulta);
console.log(resultb);

//Task 3
const always = 65;
let numOne = 6;
let numTwo = 45;

let sum = numOne + numTwo ;

if (sum === always || numOne === always || numTwo === always){
    console.log("true");
}else{
    console.log("false");
};

//Task 4
const alwaysTrue = 3;
let InputOne = 3;
let InputTwo = 0;

let Newsum = InputOne + InputTwo ;

if (InputOne === alwaysTrue && Newsum === alwaysTrue ){
    console.log("true");
}else if (InputTwo === alwaysNow && Newsum === alwaysTrue ){
    console.log("true");
}else {
    console.log("false");
};

//Task 5
function calculateTriangleArea(sideone, sidetwo, sidethree) {

    let triangle = (sideone+sidetwo+sidethree)/2;
    let area = Math.sqrt(triangle*(triangle - sideone)*(triangle-sidetwo)*(triangle-sidethree));

    console.log(area);

}
calculateTriangleArea(2,4,4);

//Task 6
let num = [4,5,1,3];
console.log(Math.max.apply(null, num));

//Task 7

//Task 8
function timeConverter(n) {
    var number = 133;
    var hours = (number / 60);
    var remainhours = Math.floor(hours);
    var minutes = (hours - remainhours) * 60;
    var remainingminutes = Math.round(minutes);
    return number + " minutes = " + remainhours + " hour(s) and " + remainingminutes + " minute(s).";
    }
    
    console.log(timeConverter(200));
//Task 9

//Task 10
let multiples = function (n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    document.write(sum);
};


multiples(1000);

console.log(sum);