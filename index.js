// Author: Dmitriy Tkachenko
// main javascript file
"use strict";

//initializes various elements of the page
//nothing built yet
//window.onload = function() {}

function invert(){
    var temp = getComputedStyle(document.body, null).getPropertyValue("background-color");
    if (temp != "rgb(0, 0, 0)"){
        document.body.style.backgroundColor = "rgb(0, 0, 0)";
        document.getElementById("construction").style.color = "rgb(255, 127, 0)";
    }
    else{
        document.body.style.backgroundColor = "rgb(255, 127, 0)";
        document.getElementById("construction").style.color = "rgb(0, 0, 0)";
        
    }
}
