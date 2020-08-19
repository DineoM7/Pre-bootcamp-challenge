//Task 1
var x = 0;
var y = 1;

window.alert(x);
window.alert(y);

//part 2 of task 1

var X = x + 3;
var Y = y + X;

alert(X);
alert(Y);

//Task 2
var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + ( 1 * 2 );
var a =  1 + 1 * 2 / 2;
var b =  (1 + 1 * 2 ) /  2;

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);

//Task 4
function test(x, y) 
{
  return ((x == 3 || y == 3) || (x + y == 3));
}
console.log(test(3, 3))
console.log(test(33, 20))

//Task 3
function testTwo(x, y) 
{
  return ((x == 65 || y == 65) || (x + y == 65));
}
console.log(testTwo(65, 65))
console.log(testTwo(20, 20))

//Task 5
function triangleArea(a, b, c) {
    let triangle = (a + b + c) / 2;
    let area = Math.sqrt(triangle * (triangle - a) * (triangle - b) * (triangle - c));
    console.log(area);
}
 
triangleArea(3, 6, 3.5);

//Task 6
function maxNum(num1, num2, num3){
    var possibleMax = 0;
    if(num1 < num2 && num3 < num2) {
        possibleMax = num2;
    } else if(num3 < num1){
        possibleMax = num1;
    } else {
        possibleMax = num3;    
    }
    return possibleMax;
}
var array = [];
for(var i = 0; i < 3; i++) {
    array[i] = prompt("Enter a number");
}
console.log(maxNum.apply(this, array));

//Task 7
function cToF(celsius) 
{
  const cTemperature = celsius;
  const cToFahr = cTemperature * 9 / 5 + 32;
  const result = `${cTemperature}\xB0C is ${cToFahr} \xB0F.`;
    console.log(result);
}

function fToC(fahrenheit) 
{
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    console.log(message);
} 
cToF(26);
fToC(95);

//Task 8
function timeConvert(n) {
    var time = n;
    var hours = (time / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return time + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(90));
    
//Task 9
var sum = 0;
for (var i = 0; i < 1000; i++)
{
    if (i % 3 === 0 || i % 5 === 0)
    {
       sum += i;
    }
}
console.log(sum);

//Task 10
function vowelCount(string)
{
  var vowelList = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < string.length ; x++)
  {
    if (vowelList.indexOf(string[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowelCount("My name is Dineo Motingoe OR Miss Dee!"));

//Task 11
function countCommonCharacters(string1,string2){
    var count = 0;
    while(string1.length && s2.length){
        if(string2.includes(string1.charAt(0))){
            count++;
            string2 = string2.replace(string1.charAt(0),"");
            string1 = string1.slice(1);
        }
        else {
            string1 = string1.slice(1);
        }
    }
    return count;
}

console.log(countCommonCharacters("Dineo Motingoe","Lady Montague"));