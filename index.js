// Author: Dmitriy Tkachenko
// main javascript file
"use strict";

window.onload = function() {
    build_layout();
}

/* build page layout */
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
    txt = document.createTextNode("Projects");
    link.appendChild(txt);
    link.setAttribute("id", "Projects");
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
    //clear container
    container.innerHTML = "";
    //build heading
    var heading = document.createElement("h1")
    var txt = document.createTextNode("Home");
    heading.appendChild(txt);
    container.appendChild(heading);
    load_home_content(container);
}

function load_home_content(container){
    //build paragraph
    var para = document.createElement("p")
    var content = "Welcome to my GitHub page. You can check out a short description of my projects in the programs tab. The about tabs has some info about myself and this page.";
    //add the string to the container
    var txt = document.createTextNode(content);
    para.appendChild(txt);
    container.appendChild(para);
}

function load_projects_content(container){
    //build paragraph
    var para = document.createElement("p")
    var list = document.createElement("ul");
    var item1 = document.createElement("li");
    var item1_content = document.createTextNode("Sudoku (JavaFX Application)");
    item1.appendChild(item1_content);
    list.appendChild(item1);
    var item2 = document.createElement("li");
    var item2_content = document.createTextNode("GitHub Page (HTML/CSS/Javascript)");
    item2.appendChild(item2_content);
    list.appendChild(item2);
    //add the string to the container
    para.appendChild(list);
    container.appendChild(para);
}

function load_about_content(container){
    //build paragraph
    var para = document.createElement("p")
    var content = "Computer Science Major graduating with a B.S. in March 2018. This GitHub page is an easy way to have a publically accessible example of my work.";
    //add the string to the container
    var txt = document.createTextNode(content);
    para.appendChild(txt);
    container.appendChild(para);
    
}

//loads title and content depending on what link was clicked
$(document).on("click", "a", function(){
    //grab & clear container
    var container = document.getElementById("container");
    container.innerHTML = "";
    //build heading
    var heading = document.createElement("h1");
    var requested_content = $(this).attr('id');
    var txt = document.createTextNode(requested_content);
    heading.appendChild(txt);
    container.appendChild(heading);
    //fill string based on requested page
    if (requested_content === "Home"){
        load_home_content(container);
    }
    else if (requested_content === "Projects"){
        load_projects_content(container);
    }
    else{
        load_about_content(container);
    }
});
