'use strict';
import jsondata from './List.json' assert{type:"json"};

const blue_t = document.createElement("img");
blue_t.setAttribute('src', './imgs/blue_t.png')
const blue_p = document.createElement("img");
blue_p.setAttribute('src', './imgs/blue_p.png')
const blue_s = document.createElement("img");
blue_s.setAttribute('src', './imgs/blue_s.png')
const yellow_t = document.createElement("img");
yellow_t.setAttribute('src', './imgs/yellow_t.png')
const yellow_p = document.createElement("img");
yellow_p.setAttribute('src', './imgs/yellow_p.png')
const yellow_s = document.createElement("img");
yellow_s.setAttribute('src', './imgs/yellow_s.png')
const pink_t = document.createElement("img");
pink_t.setAttribute('src', './imgs/pink_t.png')
const pink_p = document.createElement("img");
pink_p.setAttribute('src', './imgs/pink_p.png')
const pink_s = document.createElement("img");
pink_s.setAttribute('src', './imgs/pink_s.png')


function imgselect(arr) {
    if (arr.cloth === "p" && arr.color === "blue") {
        return blue_p;
    }
    else if (arr.cloth === "t" && arr.color === "blue") {
        return blue_t;
    }
    else if (arr.cloth === "s" && arr.color === "blue") {
        return blue_s;
    }
    else if (arr.cloth === "p" && arr.color === "yellow") {
        return yellow_p;
    }
    else if (arr.cloth === "t" && arr.color === "yellow") {
        return yellow_t;
    }
    else if (arr.cloth === "s" && arr.color === "yellow") {
        return yellow_s;
    }
    else if (arr.cloth === "p" && arr.color === "pink") {
        return pink_p;
    }
    else if (arr.cloth === "t" && arr.color === "pink") {
        return pink_t;
    }
    else if (arr.cloth === "s" && arr.color === "pink") {
        return pink_s;
    }
}


const filter_t = document.getElementById("t");
const filter_p = document.getElementById("p");
const filter_s = document.getElementById("s");
const filter_blue = document.getElementById("blue");
const filter_yellow = document.getElementById("yellow");
const filter_pink = document.getElementById("pink");
const ul = document.getElementById("scrolls");



const div_one = document.createElement("div");
div_one.setAttribute("class", "element");
const li_one = document.createElement("li");
li_one.appendChild(div_one);
const element = document.getElementsByClassName("element");

for (let i = 0; i < jsondata.cloths.length; i++) {
    ul.appendChild(li_one.cloneNode(true));
    element[i].appendChild(imgselect(jsondata.cloths[i]).cloneNode());
}

filter_t.addEventListener("click", () => {
    const result = jsondata.cloths.filter((list) => list.cloth === 't');
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < result.length; i++) {
        ul.appendChild(li_one.cloneNode(true));
        element[i].appendChild(imgselect(result[i]).cloneNode());
    }
    
})

filter_p.addEventListener("click", () => {
    const result = jsondata.cloths.filter((list) => list.cloth === 'p');
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < result.length; i++) {
        ul.appendChild(li_one.cloneNode(true));
        element[i].appendChild(imgselect(result[i]).cloneNode());
    }


})

filter_s.addEventListener("click", () => {
    const result = jsondata.cloths.filter((list) => list.cloth === 's');
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < result.length; i++) {
        ul.appendChild(li_one.cloneNode(true));
        element[i].appendChild(imgselect(result[i]).cloneNode());
    }


})

filter_blue.addEventListener("click", () => {
    const result = jsondata.cloths.filter((list) => list.color === 'blue');
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < result.length; i++) {
        ul.appendChild(li_one.cloneNode(true));
        element[i].appendChild(imgselect(result[i]).cloneNode());
    }


})

filter_yellow.addEventListener("click", () => {
    const result = jsondata.cloths.filter((list) => list.color === 'yellow');
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < result.length; i++) {
        ul.appendChild(li_one.cloneNode(true));
        element[i].appendChild(imgselect(result[i]).cloneNode());
    }


})

filter_pink.addEventListener("click", () => {
    const result = jsondata.cloths.filter((list) => list.color === 'pink');
    while(ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let i = 0; i < result.length; i++) {
        ul.appendChild(li_one.cloneNode(true));
        element[i].appendChild(imgselect(result[i]).cloneNode());
    }


})