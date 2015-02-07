function movieInfo(title, time, year) {
//movie object
    var movie = {
        title: title,
        time: time,
        year: year
    }
    return (movie);
}

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
////

//add movie to list
var addMovie = prompt("Would you like to add a movie to the list? ('yes' or 'no')");


if(addMovie === 'yes') {

    var moviePush = prompt("Type the name of the movie.");
    //push movie into movies
    movies.push([moviePush, 0, 0]);
}
else if(addMovie === 'no'){

}else{alert("That is not an option.")
}



///
var movieSets = [];

for (var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    movieSets.push(movieInfo.apply({}, movie));
}

for(var i = 0; i < movieSets.length; i++) {
    var movie = movieSets[i];
}

///////////////////////////////////////

//creates an unordered list element to the html document
var ul = document.createElement("ul");

var h1 = document.createElement("h1");
h1.textContent = "My Favorite Movie List";
h1.setAttribute("style", "text-shadow: -2px -2px white; background-color: #666699; padding: 20px; text-align: center; border-radius; border-style: outset; border-width: 5px: 10px; color: black");

//sets an id attribute to the ul
ul.setAttribute("id", "movies");
ul.setAttribute("style", "text-align: center; width: 250px; border-radius: 10px; list-style-type: upper-roman; color: gray");


//loop creates a list, sets each movie title to each li, then appends the li to the ul
for(var i = 0; i < movieSets.length; i++) {

    //gradient color scheme
    var colorTxt = 666600+i*9;
    var colorBg =  666699-i*9;

    var li = document.createElement("li");
    var a = document.createElement("a");

    a.textContent = movieSets[i].title;
    a.setAttribute("style", "color: #"+colorTxt+"");
    li.setAttribute("style", "font-family: arial; padding: 8px; text-shadow: 2px 2px black; font-size: 20px; background-color: #"+colorBg+"; border-radius: 10px; border-style: outset; border-width: 5px");
    a.href = "http://www.google.com/#q="+movieSets[i].title+" movie";

    li.appendChild(a);
    ul.appendChild(li);

    console.log(li);
}

document.body.appendChild(h1);

//appends the ul to html body
document.body.appendChild(ul);

document.body.setAttribute("style", "background-color: black; color: white; font-family: impact; padding: 20px");


