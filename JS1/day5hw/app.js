var movieReq = prompt("Which movie do you want? :" + "\n" + "\n"
                                                    + "The Dark Knight" + "\n"
                                                    + "Star Wars" + "\n"
                                                    + "Pulp Fiction" + "\n"
                                                    + "Predator" + "\n"
                                                    + "Saving Private Ryan" + "\n"
                                                    + "Prometheus" + "\n"
                                                    + "The Shining" + "\n"
                                                    + "Alien" + "\n"
                                                    + "Raiders of the Lost Ark" + "\n"
                                                    + "Sling Blade" + "\n"
                                                    );

var movies = [["The Dark Knight", 153, 2008],
                ["Star Wars", 121, 1977],
                ["Pulp Fiction", 154, 1994],
                ["Predator", 107, 1987],
                ["Saving Private Ryan", 169, 1998],
                ["Prometheus", 124, 2012],
                ["The Shining", 144, 1980],
                ["Alien", 117, 1979],
                ["Raiders of the Lost Ark", 115, 1981],
                ["Sling Blade", 135, 1996],
];

/*
function capitalize(str){
    return str[0].toUpperCase()+str.slice(1);
}

for(var i = 0; i < movies.length; i++){

    var movie = movies[i];

    var capTitle = capitalize(movie[0]);
    movie[0] = capTitle;
}
*/


/*
var numOfMovies = prompt("How many movies?");
var movieGroup = [];

for(var i = 0; i < numOfMovies; i++){

    var movieArray = [];

    movieArray.push(prompt("Title"));
    movieArray.push(prompt("Time"));
    movieArray.push(prompt("Year"));

    movieGroup.push(movieArray);
}

console.log(movieGroup);
var inTitle = prompt("Title");
var inTime = prompt("Time");
var inYear = prompt("Year");

*/





    var movieSets = [];

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        movieSets.push(movieInfo.apply({}, movie));
    }
    /*
     for (var i = 0; i < movieSets.length; i++) {
     var movie = movieSets[i];
     console.log("Title: "+movie.title, "- Run time: "+movie.time, "- Year: "+movie.year);
     }*/

    function movieInfo(title, time, year) {

        var movie = {
            title: title,
            time: time,
            year: year
        }
        return (movie);
    }

    for (var j = 0; j < movies.length; j++) {
        var movie = movieSets[j];

        if (movieReq.toUpperCase() === movie.title.toUpperCase()) {

            alert(movie.title + " was released in " + movie.year + " and has a running time of " + movie.time + " minutes.");
        }
    }

