// Author: Dmitriy Tkachenko
// main javascript file
"use strict";

window.onload = function() {
    build_layout();
}

/* form page layout */
function build_layout(){
    //grab body and create nav menu
    var body = document.body;
    var nav_menu = document.createElement("nav");
    //populate nav bar with links
    //home page link
    var link = document.createElement("a");
    var txt = document.createTextNode("Home");
    link.appendChild(txt);
    link.setAttribute("id", "Home");
    nav_menu.appendChild(link);
    //programs page link
    link = document.createElement("a");
    txt = document.createTextNode("Programs");
    link.appendChild(txt);
    link.setAttribute("id", "Programs");
    nav_menu.appendChild(link);
    //about page link
    link = document.createElement("a");
    txt = document.createTextNode("About");
    link.appendChild(txt);
    link.setAttribute("id", "About");
    nav_menu.appendChild(link);
    //add nav menu to body
    body.appendChild(nav_menu);
    //add container to empty and refill based on desired page
    var container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);
    initial_page();
}

//builds the initial home page
function initial_page(){
    var container = document.getElementById("container");
    container.innerHTML = "";
    //build heading
    var heading = document.createElement("h1")
    var txt = document.createTextNode("Home");
    heading.appendChild(txt);
    container.appendChild(heading);
    //build line and break
    var br = document.createElement("br");
    container.appendChild(br);
}

//loads title and content depending on what link was clicked
$(document).on("click", "a", function(){
    var container = document.getElementById("container");
    container.innerHTML = "";
    //build heading
    var heading = document.createElement("h1");
    var txt = document.createTextNode($(this).attr('id'));
    heading.appendChild(txt);
    container.appendChild(heading);
    //build line and break
    var br = document.createElement("br");
    container.appendChild(br);
});
