/************************************
Variables and data types
************************************/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

var job = 'Teacher';
console.log(job);

// Variables naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/

/************************************
Variables mutation and type coercion
************************************/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
Basic operators
************************************/

/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/************************************
Operator Precedence
************************************/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x ++;
console.log(x);
*/

/************************************
CODING CHALLENGE 1
************************************/

/*
// Variables set up
var heightMark = 1.75;
var massMark = 82;

var heightJohn = 2;
var massJohn = 90;

// BMI Calculations
var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

// Boolean calculation
var bmiCompare = bmiMark > bmiJohn;
console.log(bmiCompare);

// Final output
console.log('Is Mark\'s BMI higher than John\'s? ' + bmiCompare);
*/

/************************************
If / else statements
************************************/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}


// Variables set up
var heightMark = 2.75;
var massMark = 82;

var heightJohn = 2;
var massJohn = 90;

// BMI Calculations
var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
  console.log('Mark\'s BMI is higher than John\'s BMI');
} else {
  console.log('John\'s BMI is higher than Mark\'s BMI');
}
*/


/************************************
Boolean logic
************************************/
 /*
var firstName = 'John';
var age = 20;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if ( age >= 13 && age < 20) { // Between 13 and 20 === age >=13 AND age <20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age <30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/