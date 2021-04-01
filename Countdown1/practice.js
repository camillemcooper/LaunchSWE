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

let addBook = (book) => bookList.push(book)

let removeBook = (bookTitle) => {
  for(i = 0; i < bookList.length; i++) {
    if(bookList[i].title === bookTitle){
      bookList.splice(i, 1)
    }
  }
}

let list = (choice) => {
  if(choice === 'title') {
    for(i = 0; i < bookList.length; i++){
      console.log(bookList[i].title)
    } 
  } else if (choice === 'author') {
    for(i = 0; i < bookList.length; i++) {
      console.log(bookList[i].author)
    }
  } else {
    console.log('undefined input')
  }
}


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

  let posOrNeg = (num) => {return (num>0) ? 'positive' : 'negative'}

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

let day = 'monday'

switch (day) {
  case 'monday':
    console.log("it is monday")
    break;
  case 'tuesday':
    console.log("it is tuesday")
    break;
  case 'wednesday':
    console.log("it is wednesday")
    break;
  case 'thursday':
    console.log("it is thursday")
    break;
  case 'friday':
    console.log("it is friday")
    break;
    
}

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  let sumUp = (num) => {
    let sum = 0;
    for(i = 0; i <= num; i++) {
      sum += i;
    }
    return sum;
  }


/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

let tempChange = (temp) => {
  let fah = temp * (9/5) + 32
  if(fah >= 70){
    console.log("its gonna be " + fah + " degrees so wear a t-shirt and shorts")
  } else {
    console.log("its gonna be " + fah + " degrees you should bundle up")
  }
}


/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

let numTruthy = (arr) => {
  let num = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i])
      num+= 1;
  }
  return num;
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

let newAttendace = attendance.map(func =>{
  let obj = {fullName: 'name', gpa: ''}
  obj.fullName = func.firstName + " " + func.lastName
  obj.gpa = func.gpa
  return obj
} 
  
)



/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let eqFour = (num) => {
  if(num <= 9) {
    return dg[num]
  }
  if(num %10 === 0) {
    return tw[num/10]
  }
}




