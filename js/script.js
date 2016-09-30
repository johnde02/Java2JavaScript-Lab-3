" use strict ";

function PhoneBook(){ };

var phoneBook = [];

function phoneBookEntry(name, numbers) {
  this.name = name;
  this.numbers = [];
}

function showAddEntry() {
  var output = "";
  var name = prompt("Enter full name");
  var numNumbers = prompt("How many phone numbers do you want to add?");
  var numbers = [];
  for(var i = 1; i <= numNumbers; i++) {
    var number = prompt("Enter phone number #" + i);
    numbers.push(number);
  }
  var entry = new phoneBookEntry(name, numbers);
  phoneBook.push(entry);
  output += name + "has been added to the phone book";
  display.innerHTML = output;

};

function showAddNumber() {
  var output = "";
  var name = prompt("Enter the full name of the person whose record you'd like to add a number to.");
  var newNumber = prompt("Please enter the number you would like to add.");
  for(var i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name == name) {
      phoneBook[i].numbers.push(newNumber);
      output += "This number has been added."
    } else { output += "Sorry, that record could not be found."}
  }
  display.innerHTML = output;
};

function showRemoveEntry() {
  var output = "";
  var remove = prompt("Enter name to remove");
  for(var i = 0; i < phoneBook.length; i++) {
    if(phoneBook[i].name == remove) {
      phoneBook.splice(i,1);
      output += remove + "has been removed from the phoneBook"
    } else {
      output += "Sorry, that record could not be found."
    }
  }
  display.innerHTML = output;
};

function showRemoveNumber(){
  var output = "";
  var name = prompt ("Enter the name on the entry you'd like to edit.")
  for (var i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name == name){
       for(var j = 0; j < phoneBookEntry.numbers.length; j++) {
         output += name + phoneBookEntry.numbers[j];
       }
    }
  }
  display.innerHTML = output;
  var removeNum = prompt("Enter the number you wish to remove.")
  for (var k = 0; k < phoneBookEntry.numbers.length; k++) {
    if (phoneBookEntry.numbers[k] == removeNum) {
      phoneBookEntry.numbers.splice(k,1);
      output += removeNum + "has been removed from that Entry.";
    } else { output += "Sorry, could not find that number to remove."}
  }
  display.innerHTML = output;
};

function showLookup() {
  var lookup = prompt("Enter name to lookup");
};

function showReverseLookup() {
  var reverseLookUp = prompt("Enter number to lookup");
};

function listAllNames() {
  phoneBook.toString();
};

function listAllEntries() {
  //phoneBook.numbers.toString(); // Cannot read property "toString" undefined
};


var display = document.getElementById("display");
