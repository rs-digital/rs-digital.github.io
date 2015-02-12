//slides generator set 2

for(var j = 2; j < 19; j++){

    var img = document.createElement("img");
    img.setAttribute("src", "img/gd/"+j+".jpg");

    var div = document.createElement("div");
    div.setAttribute("class", "item");

    div.appendChild(img);

    var wrap = document.getElementById("slides2");

    wrap.appendChild(div);
}

//slides generator set 2

for(var j = 2; j < 24; j++){

    var img = document.createElement("img");
    img.setAttribute("src", "img/photos/"+j+".jpg");

    var div = document.createElement("div");
    div.setAttribute("class", "item");

    div.appendChild(img);

    var wrap = document.getElementById("slides3");

    wrap.appendChild(div);
}

//slides generator set 2

for(var j = 2; j < 25; j++){

    var img = document.createElement("img");
    img.setAttribute("src", "img/illus/"+j+".jpg");

    var div = document.createElement("div");
    div.setAttribute("class", "item");

    div.appendChild(img);

    var wrap = document.getElementById("slides4");

    wrap.appendChild(div);
}



//<li data-target="#carousel-example-generic2" data-slide-to="1"></li>

//indicator set 2
for(var i = 0; i < 17; i++){

    var li = document.createElement("li");
    li.setAttribute("data-target", "#carousel-example-generic2");
    li.setAttribute("data-slide-to", i);

    var ol = document.getElementById("indicatorSet2");
    ol.appendChild(li);
}


//indicator set 3
for(var i = 0; i < 22; i++){

    var li = document.createElement("li");
    li.setAttribute("data-target", "#carousel-example-generic3");
    li.setAttribute("data-slide-to", i);

    var ol = document.getElementById("indicatorSet3");
    ol.appendChild(li);
}


//indicator set 4
for(var i = 0; i < 23; i++){

    var li = document.createElement("li");
    li.setAttribute("data-target", "#carousel-example-generic4");
    li.setAttribute("data-slide-to", i);

    var ol = document.getElementById("indicatorSet4");
    ol.appendChild(li);
}











