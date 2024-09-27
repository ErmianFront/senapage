let nav = document.querySelector("nav");

window.addEventListener("scroll", function(){
    if(window.scrollY > 100) {
        nav.classList.add("bg-nav-dark" , "shadow");
    } else {
        nav.classList.remove("bg-nav-dark",  "shadow")
    }
})