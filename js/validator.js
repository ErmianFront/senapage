let eamilReg = document.getElementById("emailReg");
let formReg = document.getElementById("formReg");
let emailInvalid = document.getElementById("emailValidatorText")

formReg.addEventListener("submit", e=> {
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!regexEmail.test(emailReg.value)) {
        emailInvalid.classList.remove("d-none")
        emailInvalid.classList.add("d-inline")
    }
})