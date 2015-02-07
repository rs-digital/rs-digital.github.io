function movieCap() {

    var movies = [];

    var movie1 = movies.push(prompt("Enter a movie title 1"));
    var movie2 = movies.push(prompt("Enter a movie title 2"));
    var movie3 = movies.push(prompt("Enter a movie title 3"));

    var capitalize = function capitalize(str) {

        var mPieces = str.split(" ");

        for(var i = 0; i < mPieces.length; i++) {

            var mWord = mPieces[i].charAt(0).toUpperCase();
            mPieces[i] = mWord + mPieces[i].substr(1);
        }
        return mPieces.join(" ");

        //
        for(var j = 0; j < movies.length; j++){
            var movie = movies[j];
            movies[i] = capitalize(movie);
        }

    };

    console.log(capitalize(movies));

}

