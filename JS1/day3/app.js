threePrompt();

function threePrompt(){
    var num1 = parseInt(prompt("Enter a number..."));
    var num2 = parseInt(prompt("Enter Another number..."));
    var num3 = parseInt(prompt("One more number..."));

    var threeNumbers = [num1, num2, num3];
    for(i = 0; i < threeNumbers.length; i++){
        if(isNaN(threeNumbers[i])){
            alert("Numbers Only Please!");
        }else if(threeNumbers[i] % 2 == 0){
                console.log(threeNumbers[i]+" is even.");
            }else{
                console.log(threeNumbers[i]+" is odd.");
            }
    }}

//    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
//        alert("Numbers Only Please!")
//    }else{
//        //
//        if(num1 % 2 == 0){
//            console.log("First number is even.");
//        }else{
//            console.log("First number is odd.");
//        }
//        //
//        if(num2 % 2 == 0){
//            console.log("Second number is even.");
//        }
//        else{
//            console.log("Second number is odd.");
//        }
//        //
//        if(num3 % 2 == 0){
//            console.log("Third number is even.");
//        }
//        else{
//            console.log("Third number is odd.");
//        }
//
//    }
//}
