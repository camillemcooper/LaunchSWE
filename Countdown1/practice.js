/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

(bookTitle, bookAuthor) => {
	let book = {title: bookTitle, author: bookAuthor};
	bookList.push(book);
};

(bookTitle, bookAuthor) => {
	for (i = 0; i < bookList.length; i++) {
		if (bookList[i].title == bookTitle && bookList[i].author == bookAuthor) {
			bookList.splice(i,1);
		}
	}
};

getTitles => {
	if (getTitles) {
		Arrays.forEach(function(t) => console.log(t.title));
	} else {
		Arrays.forEach(function(t) => console.log(t.author))
	}
};

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

num => (num < 0) ? "negative" : "positive";

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

  switch(day) {
  	case "Monday": 
  		console.log("good luck");
  		break;
  	case "Tuesday":
  		console.log("tacos");
  		break;
  	case "Wednesday":
  		console.log("hump day");
  		break;
  	case "Thursday":
  		console.log("almost Friday");
  		break;
  	case "Friday":
  		console.log("party");
  		break;
  }

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  num => {
  	let sum = 0;
  	for (i = 1; i <= num; i++) {
  		sum += i;
  	}
  	return sum;
  }

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

  tempC => {
  	let tempF = 1.8*tempC + 32;
  	if (tempF > 70) {
  		console.log("shorts");
  	} else if (tempF > 50) {
  		console.log("light jacket");
  	} else if (tempF > 30) {
  		console.log("sweatpants and a jacket");
  	} else {
  		console.log("winter coat");
  	}
  }

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

var count = 0;
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
function findTruthy(array) {
	array.forEach(countTruthy);
	return count;
}

function countTruthy(item) {
	if (item) {
		count++;
	}
}

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

array => {
	let result = array.map(getInfo(obj));
	return result;
}

function getInfo(obj) {
	let name = obj.firstName + obj.lastName;
	let avgGrade = "-";
	if (obj.gpa > 3) {
		avgGrade = "A";
	} else if (obj.gpa > 2) {
		avgGrade = "B";
	} else if (obj.gpa > 1) {
		avgGrade = "C";
	} else {
		avgGrade = "D";
	}
	let summary = {fullName: name, averageGrade: avgGrade};
	return summary;
}

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

function getPath(num) {
	let path = [];
	digits = num;
	while (digits != 4) {
		let word = convert(digits);
		digits = word.length;
		path.add(digits);
	}
	return path;
}

/* Returns word verison of num. Source: https://gist.github.com/ForbesLindesay/5467742 */
function convert(num){
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety'];

  var numString = num.toString();

  if (num < 0) throw new Error('Negative numbers are not supported.');

  if (num === 0) return 'zero';

  //the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  //100 and more
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0')
      return ones[numString[0]] + ' hundred';
    else
      return ones[numString[0]] + ' hundred and ' + convert(+(numString[1] + numString[2]));
  }

  if (numString.length === 4) {
    var end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return ones[numString[0]] + ' thousand';
    if (end < 100) return ones[numString[0]] + ' thousand and ' + convert(end);
    return ones[numString[0]] + ' thousand ' + convert(end);
  }
}

