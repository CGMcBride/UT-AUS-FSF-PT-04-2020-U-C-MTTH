var pTags = document.querySelectorAll("p");
var divTags = document.querySelectorAll("div");
var aTags = document.querySelectorAll("a");
var imgEl = document.querySelectorAll("img");
var changeP = document.querySelector("#change2");
let antonioIsRight = prompt("Are you right?");
// console.log(pTags);
if (antonioIsRight) {
  pTags[0].setAttribute("class", "red");
}

pTags[1].setAttribute("class", "blue");
pTags[0].setAttribute("style", "font-size: 65px;");

divTags[1].setAttribute(
  "class",
  `${divTags[1].className} change1 ${5 + 7} whateverAfter`
);
divTags[1].setAttribute("class", divTags[1].className + " change1");
// changeP.setAttribute("style", "color:blue; border:2px solid black;");
// aTags[0].setAttribute("href", "https://github.com");
// imgEl[0].setAttribute("src", "images/image_1.jpg");
// imgEl[0].setAttribute("style", "width:500px; height:200px;");

for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
}
