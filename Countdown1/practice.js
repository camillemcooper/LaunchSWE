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

const addBook = (title, author) => bookList.push({title: title, author: author});

const removeBook = (index) => bookList.splice(index);

const listAuthors = () => console.log(bookList);

//testing
//console.log(bookList);
//addBook("Peanuts", "Charles Schulz");
//console.log(bookList);
//removeBook(1);
//console.log(bookList);
//listAuthors();


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const plusOrMinus = (num) => (Math.sign(num) == 1) ? "positive" : "negative";

//testing
//console.log(plusOrMinus(3));
//console.log(plusOrMinus(-3));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

const whatDay = (day) => {switch(day) {
  case "Monday":
  console.log("yikes");
  case "Wednesday":
  console.log("big yikes");
  case "Friday":
  console.log("still yikes");
}
};

//testing
//whatDay("Monday");

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumUp = (num) => {
var ans=1; 
for (var i = 2; i <= num; i++) {
  ans = ans + i; 
} return ans;

};

//testing
//console.log(sumUp(7));

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const cToF = (temp) => {
  const ftemp = (temp * (9/5)) + 32;
  if (ftemp > 65) {
    return "The temperature in Fahrenheight is " + ftemp + ". Wear a T-Shirt!"
  } else {
    return "The temperature in Fahrenheight is " + ftemp + ". Wear a Jacket!"
  }
};

//testing
//console.log(cToF(27));
//console.log(cToF(0));

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const trcount = (arr) => {
  count = 0;
  const isTruthy = (item) => {
    if (item) {
        count++;
    }
  };
  arr.forEach(isTruthy);
  return count;
};

//testing
//console.log(trcount(exampleArray));

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

const attn2 = () => {
  const getGrade = (gpa) => {
    if (gpa >= 3) {
      return "A";
    } else if (gpa >= 2) {
      return "B";
    } else if (gpa >= 1) {
      return "C";
    } else {
      return "D";
    }
  };
  return attendance.map(student => student2 = {fullname: student.firstName + student.lastName, grade: getGrade(student.gpa)});
};

//testing
//console.log(attn2());

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

  const everyNumber = (num) => {

    const onesPlace = (num) => {
      if (num == 9) {
        return "nine";
      } else if (num == 8) {
        return "eight";
      } else if (num == 7) {
        return "seven";
      } else if (num == 6) {
        return "six";
      } else if (num == 5) {
        return "five";
      } else if (num == 4) {
        return "four";
      } else if (num == 3) {
        return "three";
      } else if (num == 2) {
        return "two";
      } else if (num == 1) {
        return "one"
      } else if (num == 0) {
        return "";
      }
    };

    const tensPlace = (num) => {
        if (num == 9) {
          return "ninety";
        } else if (num == 8) {
          return "eighty";
        } else if (num == 7) {
          return "seventy";
        } else if (num == 6) {
          return "sixty";
        } else if (num == 5) {
          return "fifty";
        } else if (num == 4) {
          return "fourty";
        } else if (num == 3) {
          return "thirty";
        } else if (num == 2) {
          return "twenty";
        }
    };

    const toEng = (val) => {
      if (val == 100) {
        return "onehundred"
      } else if (val == 0) {
        return "zero";
      } else if (val == 19) {
        return "nineteen";
      } else if (val == 18) {
        return "eighteen";
      } else if (val == 17) {
        return "seventeen";
      } else if (val == 16) {
        return "sixteen";
      } else if (val == 15) {
        return "fifteen";
      } else if (val == 14) {
        return "fourteen";
      } else if (val == 13) {
        return "thirteen";
      } else if (val == 12) {
        return "twelve";
      } else if (val == 11) {
        return "eleven";
      } else if (val == 10) {
        return "ten";
      } else if (val > 19) {
        return tensPlace(Math.floor(val/10)) + onesPlace(val%10);
      } else {
        return onesPlace(val);
      }
    };

    current = num;

    engl = "";

    steps = [];

    steps.push(current);
//debugging
//     console.log(steps);
//     console.log(current);
//     console.log(engl);
// //2
// console.log("-------------RUN 1--------------");
//     engl = toEng(current);
//     console.log(engl);
//     steps.push(engl.length);
//     current = engl.length;
//     console.log(steps);
//     console.log(current);
// //3
// console.log("-------------RUN 2--------------");
//     engl = toEng(current);
//     console.log(engl);
//     steps.push(engl.length);
//     current = engl.length;
//     console.log(steps);
//     console.log(current);
// //4
// console.log("-------------RUN 3--------------");
//     engl = toEng(current);
//     console.log(engl);
//     steps.push(engl.length);
//     current = engl.length;
//     console.log(steps);
//     console.log(current);
// //5
// console.log("-------------RUN 4--------------");
//     engl = toEng(current);
//     console.log(engl);
//     steps.push(engl.length);
//     current = engl.length;
//     console.log(steps);
//     console.log(current);

    while (current != 4) {
     engl = toEng(current);
     steps.push(engl.length);
     current = engl.length;
    };
    
    return steps;
    

  };

  //testing
  console.log(everyNumber(11));
  console.log(everyNumber(252));
  console.log(everyNumber(19));
