//var name = "Jack";
//var age = 23;
//
//var message = "Hi, my name is " + name + " and I am " + age + " years old!";
//
//console.log(message);

//var firstName = "John";
//var lastName = "JacobJingleHeimerSmith";
//var dateOfBirth = "10-09-82";
//var age = 23;
//var profileImgUrl = "http://coolpicks.com/johnjacob.jpg"
//
//var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!";
//
//console.log(loginWelcomeMessage);

//var sum = 10 + 15;
//var sub = 15 - 10;
//var mul = 10 * 3;
//var div = 10 / 3;
//var mod = 10 % 3;
//
//var msg = "10 / 3 = 3 with a remainder of " + mod
//
//var result = 10 * ((5 + 3) - 4);
//
//console.log(result);

//var myAccountBalance = 300;
//var nikeSBShoes = 799.23;
//var coupon = 500;

// == equal to
// ===
// <= less than or equal
// >= greater than or equal
// !== not equal to

//var val1 = 23;
//var val2 = "23";
//
//if (val1 === val2) {
//    console.log("These ar he same!");
//} else {
//    console.log("One of these in not like the other...")
//}

//if (nikeSBShoes <= myAccountBalance) {
//    myAccountBalance -= nikeSBShoes // same as myAccountBalance = myAccountBalance - nikeSBShoes   
//    console.log("We just bought some dope shoes!");
//    console.log("Account Balance: " + myAccountBalance);
//} else if (nikeSBShoes-coupon <= myAccountBalance) {
//    console.log("We just bought some dope shoes with a coupon!");
//    myAccountBalance -= nikeSBShoes - coupon;
//    console.log("Account Balance: " + myAccountBalance);
//} else {
//    console.log("You too broke for shoes bra!");
//}

//if (1 === 1 && 2 === 2 || "joe" === "joe") {
//    console.log("These are both true!");
//}
//
//if (true && false) {
//    console.log("These are the same!");
//}
//
//if (1 === 3 || "joe" === "joe") {
//    console.log("One of these are true!")   
//}
//
//var cat1 = 5;
//var cat2 = 10;
//var cat3 = 1;
//var cat3DisabledHandicap = true;
//
//if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap) {
//    console.log("Cat 1 is the cutest!");
//} else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap) {
//    console.log("Cat 2 is the cutest!")
//} else if((cat3 > cat1 && cat3 > cat2) || cat3DisabledHandicap) {
//    console.log("Cat 3 is the cutest!")
//}

//var studentNames = ["Timmy","Janessa","Arun"]; // arrays can store Strings
//
//var balances = [50.45, 4000.12, -300.50]; // numbers
//
//var person  ["John", 12, "USA", true]; // or mixed types, not recommended
//
//var naughtyList = [];
//
//var badKid = studentNames[0];
//
//naughtyList.push(studentNames[0]); //copy from inside an array
//
//var index = naughtyList.indexOf("Timmy"); //return the index of Timmy
//
//
//
//
//console.log(studentNames);
//console.log(naughtyList);
//console.log(badKid + " is a bad kid!");
//console.log(index);
//
//if (index > -1) {
//    naughtyList.splice(index, 1); //remove 1 item from index (cutting from index, 1 item)
//}
//
//
//
//console.log(naughtyList);

//var total = 10;
//for (var x = 0; x < total; x++) {
//    //Iterate until told not to
//    console.log(x);
//}

//var studentNames = ["John","Jacob","Jingle","Heimer","Smith"];
//
//for (var index = 0; index < studentNames.length; index++) {
//    console.log(studentNames[index]);
//}



//var lenght1 = 15;
//var width1 = 10;
//var area1 = lenght1 * width1;
//
//var lenght2 = 12;
//var width2 = 14;
//var area2 = lenght2 * width2;
//
//console.log(area1);
//console.log(area2);


//function area (lenght, width) {
//    return lenght * width    
//}
//
//var rectanglesAreas = []
//rectanglesAreas.push(area(10,15));
//rectanglesAreas.push(area(14,2));
//rectanglesAreas.push(area(4,5));
//
//
//console.log(rectanglesAreas);
//
//
//var bankBalance = 500;
//
//function makeTransaction(priceOfSale,) {
//    if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Sucessful");
//    } else {
//        console.log("Insufficient Funds");
//    }
//    
//}
//
//console.log(bankBalance);
//makeTransaction(79.00);
//
//console.log(bankBalance);
//makeTransaction(2.32);
//
//console.log(bankBalance);
//makeTransaction(10.45);
//
//console.log(bankBalance);
//makeTransaction(450.00);
//
//var transaction = function(priceOfSale) {
//        if (priceOfSale <= bankBalance) {
//        bankBalance -= priceOfSale;
//        console.log("Purchase Sucessful");
//    } else {
//        console.log("Insufficient Funds");
//    }    
//}
//
//transaction(10);
//
//var printCostumerName = function(first,last) {
//    console.log("First Name: " + first + " Last Name: " + last);
//}
//
//var applyForCreditCard = function(creditScore, soul) {
//    //call some function to process application
//}
//
//var bankOperations =[]
//
//bankOperations.push(transaction);
//bankOperations.push(printCostumerName);
//bankOperations.push(applyForCreditCard);
//
//bankOperations[1]("Fernando", "Bomber");
//
//console.log(bankOperations[0](50.00));



var student0 = { //JS object creation
    firstName: "Jayne",
    lastName: "Loo",
    age: 8,
    greeting: function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old."
    }
};

console.log(student0.greeting());

//Creates a new empty object

var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;

// Another way to create an object

var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bobo";
student2.age = 5;


var students = [];
students.push(student0);
students.push(student1);
students.push(student2);


for (var index = 0; index < students.length; index++) {
    console.log(students[index]);
}


//console.log(student.firstName);
//console.log(student.lastName);
//console.log(student["firstName"]); // another way to access attrib.
//console.log(student["lastName"]);


// also can be written like 
// var student = {firstName: "John",lastName: "Parker",age: 7};













