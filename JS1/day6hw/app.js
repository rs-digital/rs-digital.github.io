/*
function Bank(){
    this.balance = 100;
}

Bank.prototype = {
    credit: function (cred){
        this.balance = this.balance + cred;
    }
}

Bank.prototype = {
    debit: function (deb){
        this.balance = this.balance - deb;
    }
}

var myBank = new Bank();

for(var i = 0; i < 3; i++) {
    var cred = prompt("How much do you want to credit to your account?");
    myBank.credit(cred);
}

for(var j = 0; j < 2; j++){
    var deb = prompt("How much do you want to debit from your account?");
    myBank.debit(deb);
}


console.log(myBank.balance);

*/


//constructor
var Bank = function(){
    this.balance = 100;
}

//debit or credit function
function doDebitCredit(numLoops, action, desc){
    for (i = 0; i < numLoops; i++){
        var promptVal = prompt(desc);
        action.call(myBank, promptVal);
    }
}

//prototypes
Bank.prototype.credit = function () {
    this.balance = this.balance + cred;
}

Bank.prototype.debit = function () {
    this.balance = this.balance - deb;
}

//new object
var myBank = new Bank();


alert("Your balance is $" + myBank.balance);

//




    var type = prompt("Would you like to 'credit' or 'debit' a $ amount?"),
        add = "credit",
        sub = "debit";

    if (type.toUpperCase() === add.toUpperCase()) {

        for (var i = 0; i < 1; i++) {
            var cred = parseInt(prompt("How much do you want to credit to your account?"));
            myBank.credit();
        }
    } else if (type.toUpperCase() === sub.toUpperCase()) {

        for (var j = 0; j < 1; j++) {
            var deb = parseInt(prompt("How much do you want to debit from your account?"));
            myBank.debit();
        }
    } else {
        alert("That is not an option.");
    }





