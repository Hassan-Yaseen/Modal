let open_btn=document.querySelector(".btn");
let close_btn=document.querySelector(".close-btn");
let mainpage=document.querySelector(".banner");
let overlay=document.querySelector(".model-overlay");
overlay.classList.add("hide1");
overlay.classList.add("hide2");
open_btn.addEventListener("click",()=>{
    overlay.classList.remove("hide1");
    overlay.classList.remove("hide2");
    overlay.classList.add("show");
    mainpage.classList.add("hide2");
})
close_btn.addEventListener("click",()=>{
    overlay.classList.remove("show");
    mainpage.classList.remove("hide2");
    overlay.classList.add("hide1");
    overlay.classList.add("hide2");
})