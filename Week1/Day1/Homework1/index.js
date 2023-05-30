let textEl = document.getElementById("text")
let radioEl = document.getElementById("radio")
let checkEl = document.getElementById("check")
let buttonEl = document.getElementById("button")


function clearFields() {
    textEl.value = ""
    radioEl.checked = false
    checkEl.checked = false
    buttonEl.textContent = "Success!"
    window.location.reload()
}