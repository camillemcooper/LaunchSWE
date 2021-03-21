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
// (1) 
const addBook = (titleadd, authoradd) => {
  bookList.push({title: titleadd, author: authoradd});
};

// (2)
const removeBook = (titletoRemove) => {
  for (let i = 0; i < bookList.length; i++){
    if (titletoRemove == bookList[i].title){ 
        bookList.splice(i,1);
    } ;
  };
};

// (3)
const lstItems = (toList="book") => {
  if (toList=="book") {
    for (let i = 0; i < bookList.length;i++){
      console.log(bookList[i].title);
    };
  } else {
    for (let i = 0; i < bookList.length;i++){
      console.log(bookList[i].author);
    };
  };
};


/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
  number is positive or negative using a ternary operator (assume the number will never be zero) */

  const numSign = (number) => {
    let ans = number>0 ? console.log(number + " is positive") : console.log(number + " is negative");
  }

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
  the week it is
  i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

  const dayofWeek = day => {
    switch (day) {
      case 'Monday':
        console.log("Start of another stressful week");
        break;
      case 'Tuesday':
        console.log('Hello');
        break;
      case 'Wednesday':
        console.log("on Wednesdays we wear pink");
        break;
      case 'Thursday':
        console.log("survivor hour");
        break;
      case 'Friday':
        console.log("You made it");
        break;
      case 'Saturday':
        console.log("Finally relax");
        break;
      case 'Sunday':
        console.log("Last minute hw");
        break;
    };
  };

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
  number from 1 up to that number
  ex. sumUp(7) = 28 */

const sumUp = (num) => {
  let total = 0;
  for (let i = 0; i < num+1; i++){
    total += i;
  };
  return total;
}

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
  me what I should wear accordingly */

const weather = (degreesCel) => {
  let ans = (degreesCel *9/5) + 35;
  if (ans >=70) {
    console.log("its warm outside, no jacket needed")
  } else {
    console.log("yeah it might be a little chilly...a sweater or winter jacket should suffice")
  }
}
/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
  using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const amountofTruthy = (array) => {
  let totalFalse =0;
  array.forEach((element) => {
    if (element==false || element ==null || element == undefined || element ==0 || element == NaN || element ==''|| element== "") {
      totalFalse +=1;
    }
  })
  let totalTruthy = array.length - totalFalse;
  console.log(totalTruthy)
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

const nameGrade = attendance.map(item => {
  let container = {};
  container.fullName = item.firstName + " " + item.lastName;
  if (item.gpa === 4.0) {
    container.grade = "A";
  } else if (item.gpa<4.0&&item.gpa>=3.0){
    container.grade = "B";
  } else if (item.gpa<3.0&&item.gpa>=2.0){
    container.grade =  "D";
  } else if (item.gpa<2.0&&item.gpa>=1.0){
    container.grade =  "D";
  } else {
    container.grade =  "F";
  }
  return container;
})

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
  an array of the path you took to make it equal four
  ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
  For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

  const equalsFour = (num) => {
    let previousNum = num;
    let currentNum = 0;
    let finalArray = [];
    let flooredAns = 0;
    let modAns = 0;
    finalArray.push(num);
    while (previousNum !=4){
      flooredAns = Math.floor(previousNum/10);
      if (flooredAns ==9 || flooredAns ==8 || flooredAns ==2) {
        currentNum+=6;
      } else if (flooredAns ==7 ){
        currentNum+=7;
      } else if (flooredAns ==6 || flooredAns ==5 || flooredAns ==4|| flooredAns ==3 ) {
        currentNum+=5;
      } else if ( flooredAns ==1){
        if (previousNum == 19 || previousNum == 14 || previousNum == 13 ){
          currentNum+= 8
        } else if (previousNum == 18 || previousNum == 17){
          currentNum+= 7
        } else if (previousNum == 11 || previousNum == 12){
          currentNum+= 6
        }
      } else {
        currentNum+=0;
      }
      modAns = previousNum % 10;
      if (previousNum < 10 || previousNum > 19){
         if (modAns == 9 || modAns == 5 || modAns == 4 ){
        currentNum +=4;
      } else if (modAns == 8 || modAns == 7 || modAns == 3){
        currentNum +=5;
      } else {
        currentNum +=3;
      }
      }
      finalArray.push(currentNum);
      previousNum = currentNum;
      currentNum = 0;
    }
    console.log(finalArray);
  }