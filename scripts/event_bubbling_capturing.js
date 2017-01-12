var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var div3 = document.querySelector("#div3");

div1.addEventListener("click", function (event) {
    console.log("you clicked on div 1");
}, false);


div2.addEventListener("click", function (event) {
    console.log("you clicked on div 2");
}, true);

div3.addEventListener("click", function (event) {
    console.log("you clicked on div 3");
}, true);