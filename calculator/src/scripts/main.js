import Calculator from "./calculator.js"

let calculator = new Calculator()

const NUMBERS = document.querySelectorAll(".number")
const OPERATORS = document.querySelectorAll(".operator")
const CHANGE_SIGN = document.querySelector(".changeSign")
const DECIMAL = document.querySelector(".decimal")
const EVALUATE = document.querySelector(".evaluate")
const ALL_CLEAR = document.querySelector(".allClear")
const CE = document.querySelector(".clearEvent")

const display = document.querySelector(".calc-display")

function updateDisplay() {
    display.textContent = calculator.display()
}

NUMBERS.forEach(number => {
    number.addEventListener("click", () => {
        calculator.enterNumber(number.dataset.value)
        updateDisplay()
    })
})

OPERATORS.forEach(operator => {
    operator.addEventListener("click", () => {
        calculator.enterOperation(operator.dataset.value)
        updateDisplay()

    })
})
CHANGE_SIGN.addEventListener("click", () => {
    calculator.changeSign()
    updateDisplay()

})
DECIMAL.addEventListener("click", () => {
    calculator.enterDecimal()
    updateDisplay()

})
EVALUATE.addEventListener("click", () => {
    calculator.evaluate()
    updateDisplay()

})
ALL_CLEAR.addEventListener("click", () => {
    calculator.allClear()
    updateDisplay()

})
CE.addEventListener("click", () => {
    calculator.clearEntry()
    updateDisplay()

})

window.addEventListener("keydown",(event)=>{
    switch (event.key) {
        case "/":
        case "*":
        case "-":
        case "+":
        case "0":
        case "9":
        case "8":
        case "7":
        case "6":
        case "5":
        case "4":
        case "3":
        case "2":
        case "1":
            document.querySelector(`button[data-value="${event.key}"]`).click()
            break;
        case ".":
            DECIMAL.click()
            break
        case "Enter":
        case "Space":
            EVALUATE.click();
            break;
        
        case "Delete":
        case "Escape":
            ALL_CLEAR.click()
            break;
        case "Backspace":
            CE.click();
            break;
        case "Shift":
            CHANGE_SIGN.click()
            break;
    }
})