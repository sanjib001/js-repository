const username = document.querySelector("#username")
const password = document.querySelector("#password")
const email = document.querySelector("#email")
//const submit = document.querySelector("submit")

const handleInput = (event) =>{
    console.log(event.target.value)
    console.log("hello")
    console.log(event.target.name)
}
username.addEventListener("input", handleInput )
password.addEventListener("input", handleInput)
email.addEventListener("input", handleInput)
// submit.addEventListener("click", )

