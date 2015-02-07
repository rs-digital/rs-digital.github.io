startEnd();

/* Create a program that will:
-Prompt the user for a starting number
-Prompt the user for an ending number
-These numbers will become the start and end points for our loop. If either number is not a number,
    alert to the user that only numbers can be entered. (no further action should take place, if / else
    will be handy here)
-Parse the start and stop points into numbers and store them in variables you can use later
-Ensure that the start number is smaller than the stop number, otherwise stop execution (if / else)
-Create a loop (for or while, you choose) that will loop starting at the starting number, and end on the ending number.
    For each loop, log to the console if the number is even or odd (remember our % operator :) */

function startEnd(){

    var startNum = parseInt(prompt("Enter a starting number..."));
    var endNum = parseInt(prompt("Now enter an ending number LARGER than the last one."));

    if (isNaN(startNum) || isNaN(endNum)) {

        alert("One of those IS NOT a number!!!");
        document.write("FAIL." + "<br>" + "RELOAD PAGE.");

    }else{
        if(startNum < endNum) {

            for(var i = startNum; i <= endNum; i++) {

                if (i % 2 == 0) {
                    console.log(i + " is even.");
                    document.write(i + " is even." + "<br>");
                }else{
                    console.log(i + " is odd.");
                    document.write(i + " is odd." + "<br>");
                    }
                }
            }else{
                alert("Your second number was too SMALL!!!");
                document.write("FAIL." + "<br>" + "RELOAD PAGE.");
            }
        }
    }
