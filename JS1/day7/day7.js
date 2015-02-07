/*
var h1 = document.getElementById("myHdr");
console.log(h1);

var hasClass = h1.hasAttribute("class");
console.log("The h1 tag has a class attribute: ", hasClass);

h1.setAttribute("rel", "something");
console.log(h1);

h1.removeAttribute("rel");

var a = document.createElement("a");
console.log(a);

a.textContent = "I'm a link to google";
console.log(a);

a.setAttribute("href", "http://www.google.com");
console.log(a);

a.href = "http://www.google.com";

document.body.appendChild(a);

h1.appendChild(a);

//document.body.removeChild(a);

setTimeout(function () {
    document.body.removeChild(a);
}, 2000);