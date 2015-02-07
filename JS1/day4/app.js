//fivehundo();

function fivehundo() {
    var someArray = [];

    for(var i = 1; i <= 500; i++){
        someArray.push(i);
    }

    console.log(someArray);

    for(var j = 1, len = someArray.length; j <= len; j++){

        someArray.pop();
    }
    console.log(someArray.length);
}