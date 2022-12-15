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
  if (hasPet === "true") {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    return;
    firstName + " " + lastName + " " + "has no pets";
  }
}

let myAccountNumbers = {
  account1: "220",
  account2: 144,
  account3: 12,
  account4: 1443,
};

function addsBalanceOfAccounts() {
  let firstAccount = myAccountNumbers[1];
  let secondAccount = myAccountNumbers["account3"];
  return firstAccount + secondAccount;
}

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    return;
  }
  if (operator === "-") {
    let answer = firstNumber - secondNumber;
    return;
  }
  if (operator === "*") {
    let answer = firstNumber * secondNumber;
    return;
  }
  if (operator === "/") {
    let answer = firstNumber / secondNumber;
    return;
  } else {
    let answer = "Invalid inputs. Try again!";
    return;
    answer;
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
