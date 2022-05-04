// show and hide password

let showPassIcon = document.querySelector("#show-hide-icon")
let hidePassIcon = document.querySelector(".fa-eye-slash")
let passInput = document.querySelector("#password")

passInput.addEventListener('input', ()=>{
  if (passInput.value.length > 0) {
    showPassIcon.style = "display: block"
  }else{
    showPassIcon.style = "display: none"
  }
})

showPassIcon.addEventListener('click', ()=>{
  if (passInput.type === "text") {
    showPassIcon.classList += ".fa-solid fa-eye"
    passInput.type = "password"
  }else{
    showPassIcon.classList += ".fa-solid fa-eye-slash"
    passInput.type = "text"
  }
})

