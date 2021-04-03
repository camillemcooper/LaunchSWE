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

const addBook = (t, a) => {
  bookList.push({title: t, author: a})
};

addBook("Brave New World", "Aldous Huxley");

const removeBook = (t) => {
  for (var i = 0; i < bookList.length; i++) {
    if (bookList[i].title == t){
      delete bookList[i];
      return;
    }
  }
  console.log("book was not found");
};

removeBook("Ulysses");

const printBooks = () => {
  bookList.forEach((item) => {
    console.log(item.title);
  });
};

printBooks();
console.log();
/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

  posNeg = (num) => {return (num>0?"Number is positive":"Number is negative");};
  console.log("Is -52 a positive number?");
  console.log(posNeg(-52));
  console.log();

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
const messageOfDay = (day) => {
  switch(day) {
  case "Monday":
    console.log("good luck with the start of the week");
    break;
  case "Tuesday":
    console.log("it's still way too early in the week");
    break;
  case "Wednesday":
    console.log("ay we are halfway there");
    break;
  case "Thursday":
    console.log("just need to push through");
    break;
  case "Friday":
    console.log("it's basically the weekend");
    break;
  case "Saturday":
    console.log("i shall relax now");
    break;
  case "Sunday":
    console.log("i go to finish my work");
    break;
  default:
    console.log("invalid day entered");
  }
};
messageOfDay("Saturday");
console.log();

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const sumUp = (end) => {
  let sum = 0;
  for (i = 1; i <= end; i++){
    sum += i;
  }
  return sum;
};

console.log(sumUp(7));
console.log();

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const clothes = (tempInC) =>{
  let tempInF = tempInC * 9 /5 + 32;
  console.log("It is " + tempInF + " degrees Fahrenheit")
    if(tempInF < 40){
      console.log("wear long sleeved clothes and gloves");
    }
    else if(tempInF < 60){
      console.log("wear long sleeved clothes");
    }
    else if (tempInF < 80){
      console.log("wear short sleeved clothes");
    }
    else if (tempInF < 100){
      console.log("wear short sleeved clothes and go to the pool");
    }
    else{
      console.log("stay inside, its too hot");
    }
}
clothes(10);
console.log()


/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const numOfTruthy = (arr) => {
  var total = 0;
  arr.forEach(val => {
    if(val){
      total++;
    }
  });
  return total;
};

console.log(numOfTruthy(exampleArray));
console.log();

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

const grade = (person) => {
  const gpa = person["gpa"];
  switch(true){
    case (gpa > 3.7):
      return {firstName: person["firstName"], lastName: person["lastName"],averageGrade: "A"};
    case (gpa > 2.3):
      return {firstName: person["firstName"], lastName: person["lastName"], averageGrade: "B"};
    case (gpa > 1.7):
      return {firstName: person["firstName"], lastName: person["lastName"], averageGrade: "C"};;
    case (gpa > 0.7):
      return {firstName: person["firstName"], lastName: person["lastName"], averageGrade: "D"};
    default:
      return {firstName: person["firstName"], lastName: person["lastName"], averageGrade: "F"};
  }
}
console.log(attendance.map(grade));
console.log();

// const newAttendance = (att) => {
//   return att.map(obj => {
//     return ({fullName: obj.firstName + " " + obj.lastName, averageGrade: });
// };


/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
const findPathTo4 = (val) => {
  let ret = [];
  ret.push(val);
  while (val != 4){
    val = calcNextVal(val);
    ret.push(val);
  }
  return ret;
}

const calcNextVal = (val) => {
  if(val.toString().length == 1){
    return ones[val].length;
  }
  else if (val.toString().length == 2 && val < 20){
    return teens[val-10].length;
  }
  else if (val.toString().length == 2){
    return tens[parseInt(val.toString()[0])].length + calcNextVal(parseInt(val.toString()[1]));
  }
  else if (val.toString().length == 3){
    const hundredsPlace = val.toString()[0];
    //console.log(hundredsPlace, parseInt(val.toString().slice(1)));
    return ones[parseInt(hundredsPlace)].length + 7 + calcNextVal(parseInt(val.toString().slice(1)));
  }
  else{
    //console.log(val);
    console.log("Can't handle a number this large")
  }
}
  
console.log(findPathTo4(11));
console.log(findPathTo4(252));