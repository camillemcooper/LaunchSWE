/* Do all of these using proper ES6 syntax

Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList (done)
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */


const addEntry = (entry) =>{
  bookList.push(entry)
}

const removeEntry = (bookName) =>{
  bookList = bookList.filter((book) => book.title !== bookName)
}

const listBooks = ()=>{
  bookList.forEach((book) => console.log(`${book.title} by ${book.author}`))
}


let bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

console.log("1 to 3: \n")
addEntry({title: "Adriel's Life Story", author:"Adriel Kim"})
removeEntry("Moby Dick")
listBooks()


const getSign = (number)=>{return number > 0 ? 'Number is positive' : 'Number is negative' };
/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
console.log("4: \n")

console.log(getSign(-10))
console.log(getSign(100))


const switchDay = (day) => {
  switch(day){
    case "Monday":
      return "Good luck"
    case "Tuesday":
      return "Saliva testing time!"
    case "Wednesday":
      return "Halfway through!"
    case "Thursday":
      return "So close!"
    case "Friday":
      return "Exhale. You made it!"
    case "Saturday":
      return "Five hours of launch countdown, YAY!"
    case "Sunday":
      return "Time for church!"
  }
}
/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
console.log("5: \n")
console.log(switchDay("Saturday"))
console.log(switchDay("Sunday"))

const sumUpTo = (num) => {
  
  let sum = 0;
  for(let i = 0;i<= num;i++){
    sum += i;
  }
  return sum
}
/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
console.log("6: \n")

console.log(sumUpTo(7))

const convertTemp =(cTemp) =>{
    let fTemp = (9/5)*cTemp + 32;
    if (fTemp < 45){
      return "Brrrr, wear a jacket!"
    }
    else if(fTemp < 60){
      return "A light sweater is all that is needed"
    }
    else if (fTemp < 70){
      return "Shorts and a t-shirt is fine"
    }
    else{
      return "Just go out naked!"
    }

}

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
console.log("7: \n")

console.log(convertTemp(26))
console.log(convertTemp(18))
console.log(convertTemp(0))



//test this one out
const countTruthy =(arr)=>{
  let truthyCount = 0;
  arr.forEach((value) => {
    if (value){
      truthyCount += 1
    }
  })
  return truthyCount
}
/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

console.log("8: \n")
console.log("Truthy count: " + countTruthy(exampleArray))

//test this one.
const convertGrades = (attendance) =>{
  return attendance.map((person)=>{
    let gpa = person.gpa
    let letter_gpa;

    if (gpa < 1)
      letter_gpa = "D"
    else if(gpa < 2)
      letter_gpa = "C"
    else if(gpa < 3)
      letter_gpa = "B"
    else 
      letter_gpa = "A"

    return {fullName: `${person.firstName} ${person.lastName}`, averageGrade: letter_gpa}
  })

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

console.log("9: \n")
console.log(convertGrades(attendance))

const equalsFourPuzzle = (num) =>{

  const processNumToWord = (number) =>{
    const numWords = require('num-words')
    let numToWord = numWords(number).split(" ").join("").split("and").join("")
    return numToWord
  }

  let pathToFour = [num]
  let amountInWords = processNumToWord(num)

  while(num !== 4){
    num = amountInWords.length
    amountInWords = processNumToWord(num)
    
    pathToFour.push(num)
  }
  return pathToFour
  
  

}

console.log("10: \n")
console.log(equalsFourPuzzle(252))
/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
