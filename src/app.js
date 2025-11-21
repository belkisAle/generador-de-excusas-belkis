import "bootstrap";
import "./style.css";


window.onload = function() {

let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch ', 'while I was praying '];

function RandomExcuses(text) {
  let RandomExcuses = Math.floor(Math.random() * text.length);
  return text[RandomExcuses];}

let oracion= RandomExcuses(who)+RandomExcuses(action)+RandomExcuses(what)+RandomExcuses(when)
console.log (oracion)

let excuse
excuse= document.getElementById("excuse");
excuse.innerHTML=oracion;
console.log(excuse.innerHTML);
}
  




