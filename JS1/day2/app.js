



function clickMe(){

    var firstName = prompt("What is your first name?");
        if(firstName == "Ryan") {
            alert("Congratulations, you might be you. One more step to go...");
            var lastName = prompt("Ok, What is your last name?");

            if (lastName == "Schmidt") {
                var myConf = confirm("Hello "+firstName+" "+lastName+". You may enter...");
                //alert(myConf);
            } else {
                wrongAlert();
            }
        }
        else
            {
                var lastName = prompt("Well since you don't know your first name, what is your last name?");
                if (lastName == "Schmidt") {
                    alert("Whew, that was a close one! Come on in!");
                } else {
                    wrongAlert();
                }
            }

        }

function wrongAlert(){
    alert("Sorry, you're the wrong person!");
}




