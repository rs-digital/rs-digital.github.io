sumOfNum();

function sumOfNum(){

    var num1 = prompt("Please enter any number.");
    var num1chk = parseInt(num1);

    if(isNaN(num1chk) == false){
        var num2 = prompt("Great job! Enter another number.");
            var num2chk = parseInt(num2);
        if(isNaN(num2chk) == false){
            var sum = num1chk + num2chk;
            console.log(sum);
        }
        else if(!num2){
        }
        else {
             notANum();
        }

    }else if(!num1){
    }
    else {
        notANum();
    }

}

//If the input is not a number
function notANum(){
    alert ("That's not a number!");
    sumOfNum();
}
