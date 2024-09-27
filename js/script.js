let eamilReg = document.getElementById("emailReg");
let formReg = document.getElementById("formReg");
let emailInvalid = document.getElementById("emailValidatorText")
let nav = document.querySelector("nav");

console.log(emailInvalid)

formReg.addEventListener("submit", e=> {
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regexEmail.test(emailReg.value)) {
        emailInvalid.classList.remove("d-none")
        emailInvalid.classList.add("d-inline")
    }
})


window.addEventListener("scroll", function(){
    if(window.scrollY > 100) {
        nav.classList.add("bg-nav-dark" , "shadow");
    } else {
        nav.classList.remove("bg-nav-dark",  "shadow")
    }
})