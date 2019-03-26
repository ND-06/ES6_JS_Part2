// DESTRUCTURING

// ES5

/*var john = ['John', 26];
var name = john[0];
var age = john[1];
*/
// ES6

// With destructuring, we can destructure a data structure

const [name, age] = ['John', 26];

// it s gonna create a constant called name and a constant
// called year , and then values John and 26 will
// be stored in theses constants

console.log(name);
console.log(age);

// This also works with objects

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const[age2, retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);


// Arrays 

const boxes = document.querySelectorAll('.box');

//returns a node list

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 
    'dodgerblue';
});


// ES6


/*So boxesArray six and now we have a new method
which is called from so all we have to do is say Array.from
and then boxes and what this is gonna do is to
simply transform this node list that we have in
boxes to an array and it's as simple as that.
And so now we can say boxes array six for each
and now I'm gonna use the arrow function, okay.
So I want the current element and I wanna change its style.
To dodger blue and I hope it's correct this time.
And yeah, it works and since this is actually so short
and simple, we can even take this from here
and do it like this and so we went from all of this
code here to doing the same thing in just one line of code.
*/

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// or even shorter

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5

for(var i = 0; i < boxesArr5.length; i++) {
  if(boxesArr5[i].className === 'boxblue') {
    continue;  
  }  
  boxesArr5[i].textContent = 'I changed to blue!';
}

/*
In ES6,
we now have a new loop and this new loop
combines the easy to use for each with the for loop.
And this new loop is called the for off.
Instead of for, it's called for off.
So then take out this code and write it the ES6 way.
And here is how the for off loop works.
So for and then in here we can create a new
variable, constant for example.
And then such as we do in the for each method,
we can define our current element.
And we can call this whatever we want.
We can say current of element or whatever we want.
And we say that this is an element of the boxes array six.
And that's it, so this is a simple loop,
*/

// ES6 - FOR OF LOOP - very easy 
// and we can use continue or break statement inside the loop
// in map method, it was not possible

/*for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
      continue;
  }
  cur.textContent = 'I Changed to Blue';  
}*/

// Another example

/*const ages = [42,54,56,59,65,70,72,75];
for (cur of ages) {
  if (cur >= 60) {
    console.log(cur);
  }
  else if (cur <= 60) {
    console.log(`You have only ${cur} years, you are too young !`);
  }
};*/

// or 

/*const ages = [42,54,56,59,65,70,72,75];
for (cur of ages) {
  if (cur <= 60) {
    continue;
  }
  else if (cur >= 60) {
    console.log(cur);
  }
};*/


const friends = ['John', 'Jacky', 'Pedro', 'Jonas', 'Jenny'];

for (cur of friends) {
  if (cur.includes('J')) {
    continue;
  }  
  else if (cur.includes('P')) {
    console.log(`Heeey thats my friend ${cur} !`);
  };
}

/*Alright, and just to finish there are also
two new and very useful array methods
that allow us to find elements in an array.
So up until this point, we only had the index off method,
right but now they're a couple of new ones.
So suppose that we have a group of children
and we know that only one of them is a full age.
So let's now find out who and how old that person is.
So again, we start with ES5 and let's say the ages
of these children were 12, 17, eight, 21, 14 and 11.
That's not quite 11, okay.
So the ES5 way, we would first have to
create a blue and array to determine whether
each element of the array is younger or older than 18.
And we could then use the index off to determine
the element that we want.
So let's use the map method to create an array
which true or false values like this.
So full age which I'm gonna abbreviate as full
and then ages.map, okay and I want the current, of course.
And all we need to do here is to return if the current
element is older or equal to 18 years*/

// ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
  return cur >= 18;
});

console.log(full);

// But now we need to find out the position of the true element in the array
// we use the index of method

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// in ES6
// return the index for the element in which this expression returns the value true
console.log(ages.findIndex(cur => cur >= 18));
// and if we just want to retrieve the element, not only the index
console.log(ages.find(cur => cur >= 18));


// SPREAD OPERATOR

function addFourAges (a,b,c,d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
// apply method takes the array ages and then call this function addfourages
console.log(sum2);

// THERE IS A BETTER WAY TO MAKE THIS IN ES6 WITH THE SPREAD OPERATOR

//ES6

const sum3 = addFourAges(...ages);
// ... is exactly the same than writing 18, 30, 12, 21 ( elements inside the array)
// this is the spread operator
console.log(sum3);
// so instead using apply, we can simply use the spread operator. ( ... + name of the array)

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Anne'];

/*const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);*/

//this spread operator (...) allows us to take out elements from familysmith
// and family miller and inject these elements inside big family array
// we can join 2 arrays or more easily
// and we can also add another element inside ours spreads operator like this

const bigFamily = [...familySmith, 'Nat', ...familyMiller];
console.log(bigFamily);

// WE CAN USE SPREAD OPERATOR NOT ONLY FOR ARRAY but also for others data structures ( like node list ))

const h = document.querySelector('h1');
const boxes6 = document.querySelectorAll('.box');

// we can put them in one structure it will be easier to manipulate

const all = [h, ...boxes6];

Array.from(all).forEach(cur => cur.style.color = 'purple');
// Here we can convert this node list into array with this simple method from

// Rest Parameters

/*So, rest parameters allow us to pass
an arbitrary number of arguments into a function,
and to use these arguments in that function.
So in the last lecture, we've been looking
at the spread operator, right?
Now rest parameters look exactly the same,
but they are very different.
So they use the same notation with the three dots,
but actually rest parameters are the exact opposite
of the spread operator.
And that's because the spread operator
takes an array, and basically,
transforms it into single values,
while the rest parameters receive
a couple of single values
and transforms them into an array
when we call a function with multiple parameters.*/

// ES5

/*function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log((2016-cur) >= 18);
  });
}

isFullAge5(1990, 1999, 1965);
// Arguments is like an array but its not really an array , so we have 
// to convert in into array with prototype.slice.call method.


//ES6

/*And so, what this is gonna do
is as soon as we call the function,
it will transform the arguments,
for example, these three arguments or these five.
It will transform them into an array
and then pass it into this function.
And we can then access that years array
automatically in a function
and use it as we did before.*/
// this is the rest parameters operator

function isFullAge6(...years) {
  years.forEach(cur => console.log ((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2015, 1992);

// this is very handy cause we dont have to use the slice method
// to transform into array , this ... operator converts automatically
// parameters into array

/*So the big difference between the spread operator
and the rest parameters
is actually the place in which we use each of them.
So the spread operator is used in the function call.
While the rest operator is used in the function declaration
to accept an arbitrary number of arguments.*/


function isFullAge5(limit) {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function(cur) {
    console.log((2016-cur) >= limit);
  });
}

isFullAge5(21, 1990, 1999, 1965);

// ES6
// if we want to add a limit as parameters , in es6 it is easy !

function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log ((2016 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965, 2015, 1992);




// Default Parameters

// => Defaults Parameters in ES5

/*function SmithPerson (firstName, yearOfBirth, lastName, nationality) {
  if (lastName === undefined) {
    lastName = 'Smith';
  }
  else {
    lastName = lastName;
  }
  if (nationality === undefined) {
    nationality = 'American';
  }
  else {
    nationality = nationality;
  }
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var john = new SmithPerson ('John', 1990);
var emily = new SmithPerson ('Emily', 1983, 'Diaz', 'Spanish');
*/

/*JavaScript actually allows us to call any function
without specifying all of the arguments.
In this case, we only specify first name and year of birth,
but leave the last name and nationality empty.
What JavaScript does, in this case,
is that it simply assigns undefined to these two parameters,
so they will be undefined, and we're gonna make use of that
in a second.*/

// We can set default parameters with if/else statements for parameters undefined

// Default Parameters in ES6


function SmithPerson (firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
};

var john = new SmithPerson ('John', 1990);
var emily = new SmithPerson ('Emily', 1983, 'Diaz', 'Spanish');





// Map / ES6

// Map with a M , NEVER with a minus M if we want to use this new feature of ES6
// we can use string , number , or event booleans as key, inside this kind of Map data structure

const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript Version ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correctAnswer :-)');
question.set(false, 'Wrong, please try again !');

console.log(question.get('question'));
// console.log(question.size);
// we can delete one of element inside by typing this kind of if/else statement

/*if (question.has(4)) {
  question.delete(4);
};

// we can also delete all content inside our map , with clear method.

question.clear();*/

// SET , GET,  DELETE, AND CLEAR are the main methods linked with Map But Map is also iterable
// thats means that we can loop through Map ( with objects we cannot loop inside them !)

// we can use forEach method ( with value and key as parameters)

/*question.forEach((value, key) => 
  console.log(`This is ${key} and it's set to ${value}`));
*/
// we can also use a for of method , like for arrays

/*for (let [key, value] of question.entries()) {
  console.log(`This is ${key} and it's set to ${value}`);
}*/

/*Now what if we wanted to access not only
the key, but also the value?
In this case we would once again have to use destructuring
and so this is yet another case of the destructuring.
So instead of simply using the questions variable,
like here, like I did here, we use question.entries.
So just like this, and what this does here
is to return all entries of our questions map,
and we can then use destructuring to store the key
and values in two separate values, such as we did before.
So remember, destructuring is using these brackets,
and so we simply say key and value.
So once more, using the entries method here on the question
is gonna return all the key-value pairs,
and we can then use destructuring,
such as we did before with arrays,
and store the keys and the values in two separate variables
that we can then use here inside of this for-of loop.*/

/*So let's now, instead of printing all of the elements
in our map, let's use this to only print
our four answers here, okay?
And the way that we do this, is to say
that we only want to print the value if the key is a number.
So that's the beauty of having
this custom data type here for the key.
So remember, in maps, the key cannot only be strings,
but also like numbers or Booleans like down here,
and so we can use that to our advantage right now.
So we can say that if the type of the key is number,
*/

for (let [key, value] of question.entries()) {
  if (typeof(key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
};

// no need to write an if else statement with this kind of data structure

const ans = parseInt(prompt('Write the correct answer !'));
console.log(question.get(ans === question.get('correct')))