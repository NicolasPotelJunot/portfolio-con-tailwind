const buttonMenu = document.querySelector("#button-menu")
const ulnav = document.querySelector("#ul-nav")

buttonMenu.addEventListener("click", () => {
    mostrar()

})

const mostrar = () =>{
    ulnav.classList.toggle("hidden");

}

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
  
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener("click", function() {
      this.classList.toggle("is-active");
    }, false);
  });
}


const container = document.querySelector("#container-contact")
const form = document.querySelector("#form-contact")

form.addEventListener('submit', ()=>{
  readyMenssage()
})

const readyMenssage = () =>{
  container.innerHTML = "Te estaré respondiendo a la brevedad."
}

