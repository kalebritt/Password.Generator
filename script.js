//defined variables for choices
var pressOk;
var num;
var lowerLett;
var upperLett;
var sym;

//available numbers to chose from
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//available letters to choose from
letters = [
  "a",
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//available symbols to choose from
symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//convert to upperSpace
upperSpaceConversion = [];

//to be concatenated
var selector;

//converstion to upperCase
var upperCase = function (numeral) {
  return numeral.toUpperCase();
};

letters2 = letters.map(upperCase);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  word = writePassword();
  document.getElementsById("#password").placeholder = writePassword;
});

// Write password to the #password input
function writePassword() {
  pressOk = prompt("Choose between 8 and 128 characters, please.");

  //if 'ok' is not pressed
  if (!pressOk) {
    prompt("No funny business, buddy.");
  } else if (pressOk < 8 || pressOk > 128) {
    pressOk = prompt("Try again, friendo.");
  } else {
    num = confirm("Would you like numbers?");
    lowerLett = confirm("Would you like small letters?");
    upperLett = confirm("What about big letters?");
    sym = confirm("And symbols (!@#$)?");
  }
  //four 'cancels'
  if (!num && !lowerLett && !upperLett && !sym) {
    selector = alert("What are you trying to pull?");
    //four 'pressOks'
  } else if (num && lowerLett && upperLett && sym) {
    selector = symbols.concat(numbers, letters, letters2);
    //three 'pressOks'
  } else if (num && lowerLett && upperLett) {
    selector = numbers.concat(letters, letters2);
  } else if (sym && num && lowerLett) {
    selector = symbols.concat(numbers, letters);
  } else if (sym && num && upperLett) {
    selector = symbols.concat(numbers, letters2);
  } else if (sym && lowerLett && upperLett) {
    selector = symbols.concat(letters, letters2);
  }

  //two 'pressOks'
  else if (num && lowerLett) {
    selector = numbers.concat(letters);
  } else if (num && upperLett) {
    selector = numbers.concat(letters2);
  } else if (num && sym) {
    selector = numbers.concat(symbols);
  } else if (upperLett && lowerLett) {
    selector = letters.concat(letters2);
  } else if (upperLett && sym) {
    selector = letters2.concat(symbols);
  } else if (lowerLett && sym) {
    selector = letters.concat(symbols);
  }

  //one 'pressOk'
  else if (num) {
    selector = numbers;
  } else if (sym) {
    selector = symbols;
  } else if (lowerLett) {
    selector = letters;
  } else if (upperLett) {
    selector = upper.concat(letters2);
  }

  //work on generating password -- struggle!
  var password = generatePassword();
  for (var i = 0; i < pressOk; i++) {
    var selections = selector[Math.floor(Math.random() * selector.length)];
    password.push(selections);
  }

  document.addEventListener("#password").textContent;
}
var copy = document.querySelector("#password");
copy.addEventListener("click", function () {
  copyPassword();
});
passwordText.addEventListener("click", function () {
  var passwordText = document.querySelector("#card");
  passwordText.value = password;
  generatePassword();
  document.getElementById("#password");
  alert("Finally!");
});
