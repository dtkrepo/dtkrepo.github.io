// Author: Dmitriy Tkachenko
// main javascript file
"use strict";

window.onload = function() {
    construction_page();
}

//builds the construction page
function construction_page(){
    var body = document.body;
    //build heading
    var heading = document.createElement("h1")
    heading.setAttribute("id", "construction");
    var txt = document.createTextNode("Under Construction");
    heading.appendChild(txt);
    body.appendChild(heading);
    //build line and break
    var line = document.createElement("hr");
    body.appendChild(line);
    var br = document.createElement("br");
    body.appendChild(br);
    //add invert button
    var i_button = document.createElement("button");
    txt = document.createTextNode("Invert");
    i_button.appendChild(txt);
    i_button.setAttribute("id","color_button");
    i_button.setAttribute("type","button");
    i_button.setAttribute("onclick","invert()");
    body.appendChild(i_button);
}

//switches the color of the heading and background
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
