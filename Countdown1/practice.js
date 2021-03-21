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
const addBook= (newBook,list)=> {return list.push(newBook)}
const removeBook= (newBook,list)=>{
  const index= list.indexOf(newBook)
  return list.splice(index,1)
}
const listBooks = (bookList)=>{
  for(var i=0; i< bookList.length;i++){
      console.log(bookList.title)
  }
}
console.log("Before "+ bookList)
addBook({title:"Hi"},bookList)
removeBook({tittle:"Hi"},bookList)
console.log("After"+ bookList)


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */
const posOrNeg= (num)=>{ return num%2==0? "This is an even number": "This is an odd number"}

//console.log (posOrNeg(1))

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
  const day ="Monday"
  switch(day) {
    case "Monday":
      console.log("Good luck with the week!")
      break;
    case "Tuesday":
      console.log("Yay its Tuesday")
      break;
    case "Wendsday":
      console.log("Hump Day!")
      break;
    case "Thursday":
      console.log("Almost there!")
      break;
    case "Friday":
      console.log("Its Friday! time to relax")
      break;

    default:
      console.log("Yay its the weekend!")
  }


/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */
  const sumUp = (num)=>{
    let sum= 0
    for(var i=1;i<num+1;i++){
      sum+=i
    }
    return sum
  }
  console.log(sumUp(7))
/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */
  const cToF=(tempC)=>{
    const tempF= (tempC*1.8)+32
    if(tempF<60){
      console.log("It's pretty code outside. Wear something warm")
    }
    else{
      console.log("It's not too bad out side dress for warmish weather!")
    }
  }

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const countTruthy= (array)=>{
  let sum= 0
  array.forEach(element=> {
    if(element==true||element==""|element==''||elemment=="0"||element>=1){
      sum+=1
    }
  })
  console.log("Number of Truthy Values:", sum)
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

const createGradebook=(array)=>{
  let list = array.map((element)=>{
      let letter= "F"
      if (element.gpa >= 1.0) {
        letter="D"
      } 
      if(element.gpa >= 2.0){
        letter="C"
      }
      if(element.gpa >= 3.0){
        letter="B"
      }
      if(element.gpa >= 4.0){
        letter="A"
      }
      

      const student ={
        fullName: element.firstName + " "+ element.lastName,
        averageGrade: letter

      }
      return student
  })
  console.log(list)
}
//createGradebook(attendance)

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */


const equalsFour=(num) =>{
  let path= []
  path.push(num)
  while(num!=4){
    
     //check unique cases 1-19 and all multiples of 10 to 100
      if(num == 1 || num==2 || num==6 || num==10) num=3
      else if (num==4 || num==5 || num==9) num=4
      else if ( num==3 || num==7 || num==8) num=5
      else if (num== 11 || num==12) num=6
      else if (num==13 || num==14 ||num==18|| num==19) num=8
      else if (num== 15 ||num== 16) num=7
      else if (num==17) num=9
      else if (num==100) num=10
      else{ //if none of the above apply
        const firstDigit= Math.floor(num/10)
        const secondDigit= num % 10
        //Handles first Digit
        if (firstDigit== 4||firstDigit==5||firstDigit==6) num= 5
        else if (firstDigit= 2||firstDigit==3||firstDigit==8||firstDigit==9) num=6
        else num=7
        //Handles Second Digit
        if (secondDigit== 1||secondDigit==2||secondDigit==6) num+= 3
        else if (secondDigit== 4||secondDigit==5||secondDigit==9) num+=4
        else if (secondDigit == 3||secondDigit==7||secondDigit==8) num+=5

    }
    path.push(num)
   }
   console.log(path)
  }
  //equalsFour(11)