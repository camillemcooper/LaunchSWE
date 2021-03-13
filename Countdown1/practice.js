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
  bookList.push({title, author})
}

const removeBook = (title, author) => {
  const index = bookList.findIndex(element => {
    element === {title, author};
  })
  if (index > -1) {
    bookList.splice(index, 1);
  }
 
}

const listBooks = () => {
  bookList.forEach(book => {console.log(book.title)})
}


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

const posOrNeg = num => num > 0 ? "positive" : "negative"


/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
  let day = "Saturday";
  switch(day){
    case "Monday":
    case "Wednesday":
    case "Friday":
      console.log("good luck")
      break;
    case "Tuesday":
    case "Thursday":
      console.log("hello")
      break;
    case "Saturday":
    case "Sunday":
      console.log("Weekend!")
      break;
    default:
      console.log("Not a day")
      break;
  }
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

  const sum = num => {
    let total = 0;
    for(let i = 1; i <= num; i++){
      total += i;
    }
    return total
  }
/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
const cToF = temp => {
  let far = temp * (9/5) + 32;
  if(far < 32){
    console.log("wear sweatshirt and pants")
  }else if (far < 60){
    console.log("wear pants and longsleeve")
  } else {
    console.log("wear t shirt and shorts")
  }
}

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const truthy = arr => {
  let sum = 0
  arr.forEach(x => {
    x ? sum++ : null
  })
  console.log(sum)
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

let newAttendance = attendance.map(person => {
  let letter = "";
  let gpa = person.gpa
  if(gpa === 4.0){
    letter = "A+"
  } else if(gpa >= 3.7){
    letter = "A"
  } else if(gpa >= 3.4){
    letter = "A-"
  } else if (gpa >= 3.3){
    letter = "B+"
  }else if (gpa >= 3.0){
    letter = "B"
  }else if (gpa >= 2.7){
    letter = "B-"
  }else if (gpa >= 2.3){
    letter = "C+"
  }else if (gpa >= 2.0){
    letter = "C"
  }else if (gpa >= 1.7){
    letter = "C-"
  }
  else if (gpa >= 1.3){
    letter = "D+"
  }
  else if (gpa >= 1.0){
    letter = "D"
  } else {
    letter = "F"
  }
  return {fullName: person.firstName + " " + person.lastName, averageGPA: letter}
})


/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

  const equals4 = num => {
    let arr = []
    
    let singleDigit = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let doubleDigit = ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    let hundred = "hundred"

  
    while(num !== 4){
      let word = ""
      let digit = 1;
      arr.push(num)
      while(num > 0){
        console.log(num)
        let temp = num % 10;
        switch(digit){
          case 1:
            word+=singleDigit[temp]
            break;
          case 2:
            word += doubleDigit[temp]
            break;
          case 3:
            word += hundred
            break;
        }
        num = parseInt(num / 10)
      }
      num = word.length
    }
    arr.push(4)
    return arr
  }