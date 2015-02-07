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
h1.setAttribute("style", "text-shadow: 2px 2px black; background-color: #006699; padding: 20px");

//sets an id attribute to the ul
ul.setAttribute("id", "movies");


//loop creates a list, sets each movie title to each li, then appends the li to the ul
for(var i = 0; i < movieSets.length; i++) {

    var li = document.createElement("li");
    var a = document.createElement("a");

    a.textContent = movieSets[i].title;
    a.setAttribute("style", "color: white");
    li.setAttribute("style", "padding: 8px; text-shadow: 2px 2px #000033; font-weight: bold; font-size: 20px");
    a.href = "www.google.com/#q="+movieSets[i].title+" movie";

    li.appendChild(a);
    ul.appendChild(li);

    console.log(li);
}

document.body.appendChild(h1);

//appends the ul to html body
document.body.appendChild(ul);

document.body.setAttribute("style", "background-color: #33CCCC; color: white; font-family: arial; padding: 20px");


