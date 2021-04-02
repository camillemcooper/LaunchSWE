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

const newEntry = (title, author) => bookList.push({title, author})

const removeEntry = (title) => {
  for(let i = 0; i < bookList.length; i++){
    if(title == bookList[i].title){
      bookList.splice(i, 1);
    };
  };
};

const listEntries = (booksOrAuthors ="books") => {
  if(booksOrAuthors == "books"){
    for(let i = 0; i < bookList.length; i++){
      console.log(bookList[i].title);
    };
  }
  else{
    for(let i = 0; i < bookList.length; i++){
      console.log(bookList[i].author);
    };
  };
};

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const positiveOrNegative = (input) => input > 0 ? "positive" : "negative";

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

const dayOutput = (day) => {
  switch(day){
    case 'Monday':
      console.log("Monday Night Football");
      break;
    case 'Tuesday':
      console.log("Taco Tuesday");
      break;
    case 'Wednesday':
      console.log("It is Wednesday my dudes");
      break;
    case 'Thursday':
      console.log("Taco Thursday?");
      break;
    case 'Friday':
      console.log("Gotta get down on Friday");
      break;
    case 'Saturday':
      console.log("Saturday Night Live");
      break;
    case 'Sunday':
      console.log("The day before Monday");
      break;
  };
};

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (input) => {
  let sum = 0;
  for(let i = 1; i < input+1; i++){
    sum += i;
  };
  return sum;
};

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const whatToWear = (celsiusInput) => {
  let fahrenheit = (celsiusInput*(9/5))+32;
  console.log(fahrenheit < 60 ? "Wear a jacket" : "Do not wear a jacket");
};

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthyCount = (input) => {
  let falsyCount = 0;
  input.forEach((item) => {
    if(item == false || item == 0 || item == -0 || item == 0n || item == null || item == undefined || item == NaN){
      falsyCount++;
    };
  })
  console.log(input.length-falsyCount);
};

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

const letterGradesFromGPA = attendance.map(item => {
  let output={};
  output.fullName=item.firstName+" "+item.lastName;
  if(item.gpa < 1){
    output.averageGrade="F";
  }
  else if(item.gpa < 2){
    output.averageGrade="D";
  }
  else if(item.gpa < 3){
    output.averageGrade="C";
  }
  else if(item.gpa < 4){
    output.averageGrade="B";
  }
  else{
    output.averageGrade="A";
  };
  return output;
});
    

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

const fourPuzzle = (input) => {
  const lessThanTwenty = ['', "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten","Eleven", 
                    "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ['', "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
  let output = [input];
  let tempNum = input;
  let nextNum = 0;
  while(tempNum != 4){
    if(tempNum < 20){
      tempNum = lessThanTwenty[tempNum].length;
      output.push(tempNum);
    }
    else if(tempNum >= 20){
      let t = parseInt(tempNum/10);
      let o = parseInt(tempNum%10);
      tempNum = (lessThanTwenty[o].length) + (tens[t].length);
      output.push(tempNum);
    };
  };
  return output;
};
    
