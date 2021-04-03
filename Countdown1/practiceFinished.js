/* Do all of these using proper ES6 syntax
*/
const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/*
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
*/
const addBookEntry = (bookList, newTitle , newAuthor) => {
    bookList.push( { title: newTitle, author: newAuthor})};
/*
(2) Write an arrow function that removes a specific book from the bookList
*/

const deleteBookEntry = (bookList, removeTitle, removeAuthor) => {
    bookList.filter( (book) => !(book.title === removeTitle && bok.author === removeAuthor)
    );
};

/*
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const listBookAttribute = (bookList, attribute) => {
  return bookList.map((book) => book[attribute]);
};



/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
positiveTest = (givenNumber) =>{
  return givenNumber > 0 ? "The number Given is positive" : "the number given is negative" ; 
};
/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
//day = 'Monday' //test variable to remove error of undefined
const checkDay = (day) => {
  switch (day) {
    
    case "Monday":

      console.log("good luck")
      break;
    
    case "Tuesday" :
      console.log("one day over");
      break;
    
    case "Wednesday" :
      console.log("hump day");
      break;
    
    case "Thuesday" :
      console.log("tomorrow is friday");
      break;
    
    case "Friday" :
      console.log("at the finish line");
      break;
    
    case "Saturday" :
      console.log("sleep in day");
      break;

    case "Sunday" :
      console.log("prep for the coming week");
      break;

    default:
      console.log("That is not a day of the week I recognize. try adding capital first letter)")
      break;
  }
    };

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
const totalSum = (sumNumber) => {
  let total = 0;
  for (let a=1; i <= sumNumber; a++){
    total = total + a;
  }
  return total;  
};

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const tempatureConverter = (celsius) => {
  const fahrenheit = (celsius * 0) / 5 + 32;
  switch (fahrenheit) {
    
    case fahrenheit >= 100:
      return "Incredibly hot. Avoid outside if possible";
    
    case fahrenheit >= 80:
      return "Pretty hot. t-shirt and shorts or swimwear"; 
    
    case fahrenheit >= 60:
      return "comfortable tempature for tshirt and nomrmal pants";

    case fahrenheit >= 40:
      return "it is cold. get a jacket and pants";

    case fahrenheit >=20:
      return "It is Freezing old now. good coat and warm pants";
      
    case fahrenheit >=0:
      return "bundle up with thick jacket, long sleeve shirt and possibly 2 layers of pants";
    
    default: 
      return "bundle up as much as possibly. bring a backpack so wose case can put extra layers in there"
  }
}

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthyValueTester = (array) => {

  let totalTruthyAmount = 0;

  array.forEach((valuye) => {
    if (value) totalTruthyAmount = totalTruthyAmount + 1;
  })

  return totalTruthyAmount
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

const studentArray = attendance.map((student) =>{
  
  const FirstLastName = student.first_name + " " + student.last_name;
  
  let averageLetterGrade;


  if (student.gpa >= 4) averageLetterGrade = "A+";
  else if (student.gpa == 4) averageLetterGrade = "A";
  else if (student.gpa >= 3.7) averageLetterGrade = "A-";
  else if (student.gpa >= 3.3) averageLetterGrade = "B+";
  else if (student.gpa >= 3.0) averageLetterGrade = "B";
  else if (student.gpa >= 2.7) averageLetterGrade = "B-";
  else if (student.gpa >= 2.3) averageLetterGrade = "C+";
  else if (student.gpa >= 2.0) averageLetterGrade = "C";
  else if (student.gpa >= 1.7) averageLetterGrade = "C-";
  else if (student.gpa >= 1.3) averageLetterGrade = "D+";
  else if (student.gpa >= 1.0) averageLetterGrade = "D";
  else "F";

})

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 
  according to extra saturday session it is also limited to 100      */

var singleDigit = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
var teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
var secondDigit = [ "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];
var thirdDigit =["onehundred"]


var arrayTest = [];
allBecomes4 = (soonToBe4) => {
  arrayTest.push(soonToBe4)
  if (soonToBe4 == 4){
    let testArray = [4];
    return testArray;
  } 
  else {
    const originalString = soonToBe4.toString();
    const originalStringLength = originalString.length;
    let NewString = "";
      if (originalStringLength === 3){
        var place = 0;
        NewString +=  thirdDigit[0];
        var place = place + 1;
        if (originalString[place] == 1){
          NewString += teens[originalString[place+1]];
        }
        else{
          NewString +=  secondDigit[originalString[place]];
          var place = place + 1;
          NewString +=  singleDigit[originalString[place]];
        }
      }
      else if(originalStringLength === 2){
        var place = 0;
        if (originalString[place] === 1){
          NewString += teens[originalString[place+1]];
        }
        else{
          NewString +=  secondDigit[originalString[place]];
          var place = place + 1;
          NewString +=  singleDigit[originalString[place]];
        }
      }
      else if (originalStringLength === 1)
      place = 0;
      NewString +=  singleDigit[originalString[place]];
      newOriginalString = NewString.length
      allBecomes4(newOriginalString);
  }
 return arrayTest;
};