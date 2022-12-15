// DEBUGGING 🐞
// read through the code and discuss what's happening
// try to understand what the code's expected behavior is
// set up and run debugger
// document our findings as we go (comments and breakpoints)


function add(numb1, numb2) {
  // should be a value not string
  // let num1 = String(numb1);
  let num1 = numb1;
  return num1 + numb2;
}

// is operator parameter useful here?
function multiply(num1, operator, num2) {
  // user return, and use multiply oporator 
  // also using if condition to make use of operator parameter
  if (operator === "*") {
    return num1 * num2;
  }
}

function hasPets(hasPet, firstName, lastName) {
  // this is throwing false because a string doesn't STRICTLY equal a boolean. 
  // if (hasPet === "true") {
    if (hasPet){
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    // currently trying to run code after a return - change the order so it's returning that code
      // return;
      // firstName + " " + lastName + " " + "has no pets";
    return firstName + " " + lastName + " " + "has no pets";
  }
}

let myAccountNumbers = {
  // String won't be usable in calculations
  // account1: "220",
  account1: 220,
  account2: 144,
  account3: 12,
  account4: 1443,
};

function addsBalanceOfAccounts() {
  //this is using the incorrect method to acces 'account 1' value. In fact, using bracket notation is non-standard in this case. So, switch these below to dot notation to access values. 
  // additionally, change what's being used to access it to the key that we want to target. 
  // and finally, if this function is supposed to add JUST TWO accounts, then rename it ideally
  // let firstAccount = myAccountNumbers[1];
  let firstAccount = myAccountNumbers.account2;
  let secondAccount = myAccountNumbers.account3;
  return firstAccount + secondAccount;
}

// Change ll of the below so that answers are being returned
function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    //return;
    return answer;
  }
  if (operator === "-") {
    let answer = firstNumber - secondNumber;
   // return;
   return answer;
  }
  if (operator === "*") {
    let answer = firstNumber * secondNumber;
    //return;
    return answer;
  }
  if (operator === "/") {
    let answer = firstNumber / secondNumber;
    //return;
    return answer;

  } else {
    let answer = "Invalid inputs. Try again!";
    // needs to be returning the answer, so change the placement here 
    //return;
    // answer;
    return answer;
  }
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
