let reset = document.querySelector("#reset")
let tenglik = document.querySelector("#tenglik")
let del = document.querySelector("#del")
let result = document.querySelector("#result")
let firstNum = document.querySelector('#firstNum')
let symbol = document.querySelector('#symbol')
let secondNum = document.querySelector('#secondNum')
let button = document.querySelectorAll('#btn')
let symboll = document.querySelectorAll("#symbol")
let nuqta = document.querySelector("#comma")
button.forEach((item) => {
    item.addEventListener('click', () => {
        result.value += item.innerHTML
    })
})
symboll.forEach((item) => {
    item.addEventListener('click', () => {
        symbol.innerHTML = item.innerHTML
        firstNum.innerText = result.value
        result.value = ""
    })
})
del.addEventListener('click', () => {
    let newStr = result.value.slice(0, -1);
    result.value = newStr
});
tenglik.addEventListener('click', () => {
    secondNum.innerHTML = result.value
    if (symbol.innerHTML == "+") {
        result.value = (+firstNum.innerText) + +secondNum.innerHTML
    }
    else if (symbol.innerHTML == "-") {
        result.value = (+firstNum.innerText) - (secondNum.innerHTML)
    }
    else if (symbol.innerHTML == "X") {
        result.value = (firstNum.innerText) * (secondNum.innerHTML)
    }
    else if (symbol.innerText == "/") {
        result.value = (firstNum.innerText) / (secondNum.innerHTML)
    }
})
reset.addEventListener('click', () => {
    secondNum.innerHTML = "SN"
    result.value = ""
    firstNum.innerHTML = "FN"
    symbol.innerText = "sym"
})









