/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

//(1)
const addBook = (title, author) => {}
  let newBook = {title: title, author: author};
  bookList.push(newBook);
}

//(2)
const removeBook = (title, author, array) => { 
  let removable = {title: title, author: author}; 
  bookList.forEach(book => {
    if (removable === book) { 
      bookList.delete[book];
    }
  });
}

//(3) 
const listAuthors = () => { 
  bookList.forEach(book => { 
    console.log(book.author);
  });
}

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const posNeg = x => {
  return x > 0 ? "Positive" : "Negative"
}

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
const day = 1;
switch (day) {
  case 1: 
    console.log("boo, mondays are the worst");
    break;
  case 2: 
    console.log("Yay, Tuesday!"); 
    break; 
  case 3: 
    console.log("Humpdayyy");
    break;
  case 4: 
    console.log("Yee yee");
    break; 
  case 5: 
    console.log( "It's almost the weekend!");
    break;
  case 6: 
    console.log("Woohoo I can sleep in");
    break; 
  case 7: 
    console.log("grind time"); 
    break; 
  default: 
    console.log("I don't even know what day it is.");
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumUp = (num) => {
  let sum = 0; 
  for (let i = 1; i <= num; i += 1) { 
    sum += i;
  }
  return sum;
}

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const cToF = (tempC) => { 
  let tempF = (tempC * 1.8000) + 32.00; 
  if (tempF >= 80) { 
    console.log("nothing!");
  }
  else if (tempF < 80 && tempF >= 60) { 
    console.log("Shorts and a t shirt");
  }
  else if (tempF < 60 && tempF >= 40) { 
    console.log("some pants, and a jacket or sweater"); 
  }
  else { 
    console.log("don't go outside!");
  }
}

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */
const trueOrNo = (array) => { 
  let truthyCount = 0;
  array.forEach(thing => { 
    if (thing) { truthyCount += 1 }
  });
  console.log(truthyCount);
}

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
  and an averageGrade field representing the letter grade that corresponds to their GPA */

const studentInfo = attendance.map(student => { 
  let fullName = student.firstName + " " + student.lastName; 
  let letterGrade; 
  if (student.gpa > 3.7) { 
    letterGrade = "A";
  }
  else if (student.gpa <= 3.7 && student.gpa > 3.3) { 
    letterGrade = "A-";
  }
  else if (student.gpa <= 3.3 && student.gpa > 3.0) { 
    letterGrade = "B+";
  }
  else if (student.gpa <= 3.0 && student.gpa > 2.7) { 
    letterGrade = "B";
  }
  else if (student.gpa <= 2.7 && student.gpa > 2.3) { 
    letterGrade = "B-";
  }
  else if (student.gpa <- 2.0 && student.gpa > 1.7) { 
    letterGrade = "C+";
  }
  else if (student.gpa <= 1.7 && student.gpa > 1.3) { 
    letterGrade = "C-";
  }
  else if (student.gpa <= 1.3 && student.gpa > 1.0) { 
    letterGrade = "D+";
  }
  else if (student.gpa <= 1.0 && student.gpa > 0.0) { 
    letterGrade = "D";
  }
  else { 
    letterGrade = "F";
  }

  const newArray = array.map(student => { 
    return {fullName, letterGrade};
  });

  return newArray;
})

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

//
