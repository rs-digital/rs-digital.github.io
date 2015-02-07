function movieCap() {
    var movies = [];

    movies.push(prompt("Enter a movie title 1"));
    movies.push(prompt("Enter a movie title 2"));
    movies.push(prompt("Enter a movie title 3"));
    movies.push(prompt("Enter a movie title 4"));
    movies.push(prompt("Enter a movie title 5"));

    for (var j = 0; j < movies.length; j++) {

        var capitalizeList = function capitalizeList(movies) {


            var capitalize = function capitalize(str) {

                var mPieces = str.split(" ");

                for (var i = 0; i < mPieces.length; i++) {

                    var mWord = mPieces[i].charAt(0).toUpperCase();
                    mPieces[i] = mWord + mPieces[i].substr(1);
                }
                return mPieces.join(" ");
            }
            return capitalize(movies[j]);
        }

    }

    console.log(capitalizeList(movies));
}

