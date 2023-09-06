/*  Calculator
    Based on the functioning of a real Standard Calculator

    - Using Object to work as RAM to store numbers, operator and signs 
    - Using eval() as an ALU
    - Using Calculator.display() to work as a Pseudo Renderer which tells us what to print according to memory
*/

class Calculator {
    constructor() {
        this.init()
        this.maxSize = 13
    }
    init() {
        this.memory = {
            firstNumber: "0",
            operator: '',
            secondNumber: "0",
            firstNegative: false,
            secondNegative: false
        }

        // 0 means entering first number and 1 means entering second number | Changes on Operator usage except "="
        this.state = 0
    }

    display() {
        if (this.state === 0) {
            return (this.memory.firstNegative ? "-" : "") + this.memory.firstNumber
        }
        if (this.state === 1 && this.memory.secondNumber === "") {
            return `${(this.memory.firstNegative ? "-" : "") + this.memory.firstNumber} ${this.memory.operator}`
        }
        return `${(this.memory.firstNegative ? "-" : "") + this.memory.firstNumber} ${this.memory.operator} ${(this.memory.secondNegative ? "-" : "") + this.memory.secondNumber}`
    }

    enterNumber(val) {

        if (this.state === 0) {

            if (val === 0 && this.memory.firstNumber === "0") return this
            if (this.memory.firstNumber.length > 9) return this

            if (this.memory.firstNumber === "0")
                this.memory.firstNumber = val

            else
                this.memory.firstNumber += val

        }
        else {

            if (val === 0 && this.memory.secondNumber === "0") return this
            if (this.memory.secondNumber.length > 9) return this

            if (this.memory.secondNumber === "0")
                this.memory.secondNumber = val

            else
                this.memory.secondNumber += val
        }

        return this


    }

    enterOperation(operand) {
        if (this.memory.operator === "" || this.memory.secondNumber === "0") {
            this.memory.operator = operand
        }
        else {
            this.evaluate()
            this.memory.operator = operand
        }
        this.state = 1
        return this
    }

    enterDecimal() {
        if (this.state === 0) {
            if (this.memory.firstNumber.includes(".")) return
            else this.memory.firstNumber += "."
        }
        else {
            if (this.memory.secondNumber.includes(".")) return
            else this.memory.secondNumber += "."
        }

        return this
    }



    changeSign() {
        if (this.state === 0) {
            this.memory.firstNegative = !this.memory.firstNegative
        }
        else {
            this.memory.secondNegative = !this.memory.secondNegative
        }

        return this
    }

    evaluate() {
        if (this.memory.operator === "") return
        let entry = this.display()

        // Eval function acts ALU
        const solution = eval(entry)

        this.memory.firstNumber = String(Math.abs(solution))



        if (this.memory.firstNumber.length > this.maxSize &&
            (!this.memory.firstNumber.includes(".")) ||
            (this.memory.firstNumber.includes(".") && this.memory.firstNumber.indexOf(".") >= this.maxSize)) {

            this.memory.firstNumber = "Number Overflow. Clear All"
        }
        else {
            this.memory.firstNumber = this.memory.firstNumber.slice(0, this.maxSize)
        }

        // Pseudo Memory Reset

        this.memory.operator = ""
        this.memory.secondNumber = "0"
        this.state = 0
        this.memory.firstNegative = solution < 0
        this.memory.secondNegative = false

        return this
    }

    clearEntry() {
        if (this.state === 0) {
            this.memory.firstNumber = "0"
            this.memory.firstNegative = 0
        }
        else {
            this.memory.secondNumber = "0"
            this.memory.secondNegative = 0
        }
        return this
    }
    allClear() {
        this.init()
    }
}

export default Calculator