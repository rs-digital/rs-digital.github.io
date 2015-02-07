
for(var i = 0; i <= 100; i++){

    if(isMultipleFive(i) && isMultipleThree(i) == true){
        console.log("fizzbuzz");
    }else if(isMultipleThree(i) == true) {
        console.log("fizz");
    }else if(isMultipleFive(i) == true){
        console.log("buzz");
    }else{
        console.log(i);
    }
}

function isMultipleThree(num){

    if(num % 3 == 0){
        return(true);
    }else{
        return(false);
    }
}

function isMultipleFive(num){

    if(num % 5 == 0){
        return(true);
    }else{
        return(false);
    }
}