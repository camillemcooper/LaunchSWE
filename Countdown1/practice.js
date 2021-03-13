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

const addBook = (title, author) => {
    const book = { title: title, author: author };
    bookList.push(book);
}

const removeBook = (title) => {
    const removeIndex = bookList.findIndex(book => {
        return book.title === title;
    });
    bookList.splice(removeIndex, 1);
}

const listBooks = (isTitle) => {
    if (isTitle) {
        bookList.forEach(books => console.log(books.title));
    } else {
        bookList.forEach(books => console.log(books.author));
    }
    
}

console.log("Q1-3:");
addBook("Hello", "World");
removeBook("Don Quixote");
listBooks(true);

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const checkSign = (n) => (n > 0 ? "positive" : n < 0 ? "negative" : "zero");
console.log("Q4: " + checkSign(-10));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

console.log("Q5:");
const day = 'Saturday';

switch (day) {
    case 'Monday':
        console.log("Good luck!");
        break;
    case 'Tuesday':
        console.log("Tacos yum");
        break;
    case 'Wednesday':
        console.log("Hump day :O");
        break;
    case 'Thursday':
        console.log("Throwback!");
        break;
    case 'Friday':
        console.log("You made it!");
        break;
    case 'Saturday':
        console.log("The bois");
        break;
    case 'Sunday':
        console.log("HW grind :(");
        break;
    default:
        console.log("Quack this is not a day in the week smh");
        break;
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log("Q6: " + sumUp(7));

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const checkTemp = (cTemp) => {
    fTemp = cTemp * (9 / 5) + 32;
    return fTemp > 81 ? "very hot summer clothes" : fTemp > 50 ? "nice and cool fall clothes" : "warm and fuzzy winter clothes";
}
console.log("Q7: " + checkTemp(27));

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];
const checkTruthy = (arr) => {
    let count = 0;
    arr.forEach(item => {
        if (item) count++;
    });
    return count;
}
console.log("Q8: " + checkTruthy(exampleArray));

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

const letterGrade = attendance.map(student => {
    const fullName = student.firstName + student.lastName;
    const averageGrade = student.gpa > 3.3 ? 'A' : student.gpa > 2.3 ? 'B' : student.gpa > 1.3 ? 'C' : student.gpa > 0 ? 'D' : 'F';
    const newStudent = { fullName: fullName, averageGrade: averageGrade };
    return newStudent;
})

console.log("Q9: ");
letterGrade.forEach(student => console.log(student.fullName + " " + student.averageGrade));

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
console.log("Q10: ");
const convertNumToLetters = (num) => {
    if (num === 100) return "one hundred";
    const tenth = Math.floor(num/10);
    const digit = num % 10;
    if (digit === 0) {
        if (tenth === 9) {
            return "ninety";
        } else if (tenth === 8) {
            return "eighty";
        } else if (tenth === 7) {
            return "seventy";
        } else if (tenth === 6) {
            return "sixty";
        } else if (tenth === 5) {
            return "fifty";
        } else if (tenth === 4) {
            return "fourty";
        } else if (tenth === 3) {
            return "thirty";
        } else if (tenth === 2) {
            return "twenty";
        } else if (tenth === 1) {
            return "ten";
        } else {
            return "zero";
        }
    } else if (tenth === 0) {
        return helpConvertSingle(digit);
    } else if (tenth === 1) {
        if (digit === 9) {
            return "nineteen";
        } else if (digit === 8) {
            return "eighteen";
        } else if (digit === 7) {
            return "seventeen";
        } else if (digit === 6) {
            return "sixteen";
        } else if (digit === 5) {
            return "fifteen";
        } else if (digit === 4) {
            return "fourteen";
        } else if (digit === 3) {
            return "thirteen";
        } else if (digit === 2) {
            return "twelve";
        } else {
            return "eleven";
        }
    } else if (tenth === 9) {
        return "ninety" + helpConvertSingle(digit);
    } else if (tenth === 8) {
        return "eighty" + helpConvertSingle(digit);
    } else if (tenth === 7) {
        return "seventy" + helpConvertSingle(digit);
    } else if (tenth === 6) {
        return "sixty" + helpConvertSingle(digit);
    } else if (tenth === 5) {
        return "fifty" + helpConvertSingle(digit);
    } else if (tenth === 4) {
        return "fourty" + helpConvertSingle(digit);
    } else if (tenth === 3) {
        return "thirty" + helpConvertSingle(digit);
    } else if (tenth === 2) {
        return "twenty" + helpConvertSingle(digit);
    } else {
        return "Reee";
    }
};

const helpConvertSingle = (digit) => {
    if (digit === 9) {
        return "nine";
    } else if (digit === 8) {
        return "eight";
    } else if (digit === 7) {
        return "seven";
    } else if (digit === 6) {
        return "six";
    } else if (digit === 5) {
        return "five";
    } else if (digit === 4) {
        return "four";
    } else if (digit === 3) {
        return "three";
    } else if (digit === 2) {
        return "two";
    } else if (digit === 1) {
        return "one";
    } else {
        return "";
    }
}
//console.log(convertNumToLetters(6));

const ToFourFunc = (num) => {
    console.log(num);
    while (num !== 4) {
        const str = convertNumToLetters(num);
        num = str.length;
        console.log(num);
    }
}
ToFourFunc(74);