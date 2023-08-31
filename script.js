const site = document.getElementById("site")
const search = document.getElementById('search')

const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');
const but3 = document.getElementById('but3');
const but4 = document.getElementById('but4');
const but5 = document.getElementById('but5');
const but6 = document.getElementById('but6');
const but7 = document.getElementById('but7');
const but8 = document.getElementById('but8');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');

var Url1 = "https://stackoverflow.com/";
var Url2 = "https://reddit.com/";
var Url3 = "https://facebook.com/";
var Url4 = "https://old.reddit.com/r/minecraft";
var Url5 = "https://tumblr.com/";
var Url6 = "https://linked.in";
var Url7 = "https://github.com/";
var Url8 = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";

img1.src = "Icons/" + getType(Url1) + ".png"
img2.src = "Icons/" + getType(Url2) + ".png"
img3.src = "Icons/" + getType(Url3) + ".png"
img4.src = "Icons/" + getType(Url4) + ".png"
img5.src = "Icons/" + getType(Url5) + ".png"
img6.src = "Icons/" + getType(Url6) + ".png"
img7.src = "Icons/" + getType(Url7) + ".png"
img8.src = "Icons/" + getType(Url8) + ".png"

function getType(URL)
{
  if (URL.includes("old.reddit.com/r/") && !URL.includes("comments"))
    return "old.subreddit";
  else if (URL.includes("old.reddit.com") && URL.includes("comments"))
    return "old.post.reddit";
  else if (URL.includes("old.reddit.com"))
    return "old.reddit";
  else if (URL.includes("reddit.com/r/") && !URL.includes("comments"))
    return "subreddit";
  else if (URL.includes("reddit.com") && URL.includes("comments"))
    return "post.reddit";
  else if (URL.includes("reddit.com") || URL.includes("redd.it"))
    return "reddit";
  else if (URL.includes("github.com") && URL.split("/").length > 4)
    return URL.split("/");
  else if (URL.includes("github.com"))
    return "github";
  else if (URL.includes("github.io"))
    return "io.github";
  else if (URL.includes("youtube.com") && URL.includes("&list="))
    return "playlist.youtube";
  else if (URL.includes("youtu.be") || URL.includes("youtube.com/watch"))
    return "video.youtube"
  else if (URL.includes("youtube."))
    return "youtube";
  else if (URL.includes("wikipedia.org"))
    return "wikipedia";
  else if (URL.includes("facebook.com" || URL.includes("fb.me")))
    return "facebook";
  else if (URL.includes("stackoverflow.com"))
    return "stackoverflow";
  else if (URL.includes("linked.in") || URL.includes("linkedin.com"))
    return "linkedin";
  else if (URL.includes("tumblr.com"))
    return "tumblr";
  else if (URL.includes("archiveofourown.org"))
    return "ao3";
  else
    return "misc" + getName(URL).charAt(0);
}

function getName(URL) {
  const withoutwww = URL.replace("www.", "").replace("old.", "");
  if (URL.split(".")[0].split("//")[1].charAt(0).toUpperCase() + URL.split(".")[0].split("//")[1].slice(1) == "Www")
    return withoutwww.split(".")[0].split("//")[1].charAt(0).toUpperCase() + withoutwww.split(".")[0].split("//")[1].slice(1)
  else
    return URL.split(".")[0].split("//")[1].charAt(0).toUpperCase() + URL.split(".")[0].split("//")[1].slice(1)
}



function Hover1(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url1)
}
function Hover2(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url2)
}
function Hover3(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url3)
}
function Hover4(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url4)
}
function Hover5(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url5)
}
function Hover6(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url6)
}
function Hover7(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url7)
}
function Hover8(){
    site.style.color = "yellow";
    site.innerHTML = getName(Url8)
}


function schimbaImagine() {
        var logo = document.getElementById("logo");
        var numbah = Math.random();
        
        if (numbah <= 0.01) {
            logo.src = "minceraft.png";
            logo.alt = "minceraft";
        }
    }
function Cautare(){
    search.value == '' || search.value == null ? console.log("") : window.location.replace('https://www.google.com/search?q=' + search.value); 
}

function Norocos(){
    search.value == '' || search.value == null ? console.log("") : window.location.replace('https://www.google.com/search?q=' + search.value + "&btnI");
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    Cautare();
  }
}

function Open1(){
  window.location.replace(Url1);
}
function Open2(){
  window.location.replace(Url2);
}
function Open3(){
  window.location.replace(Url3);
}
function Open4(){
  window.location.replace(Url4);
}
function Open5(){
  window.location.replace(Url5);
}
function Open6(){
  window.location.replace(Url6);
}
function Open7(){
  window.location.replace(Url7);
}
function Open8(){
  window.location.replace(Url8);
}
search.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
      Cautare();
  }
});
schimbaImagine();