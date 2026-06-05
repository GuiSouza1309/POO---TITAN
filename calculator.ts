class Calculator {
    currentInput: number;
    operator: string;
    previousInput: number;

    constructor() {
        this.currentInput = 0;
        this.operator = "";
        this.previousInput = 0;
    }

    appendNumber(num: number): void {
        this.currentInput = Number(String(this.currentInput) + String(num));
    }

    setOperator(op: string): void {
        this.previousInput = this.currentInput;
        this.operator = op;
        this.currentInput = 0;
    }

    calculate(): number {
        let result: number;
        switch (this.operator) {
            case "+":
                result = this.previousInput + this.currentInput;
                break;
            case "-":
                result = this.previousInput - this.currentInput;
                break;
            case "*":
                result = this.previousInput * this.currentInput;
                break;
            case "/":
                if (this.currentInput === 0) {
                    throw new Error("Divisão por zero")
                }
                result = this.previousInput / this.currentInput;
                break;
            default:
                result = 0;
        }
        this.currentInput = result;
        return result;
    }
}

const calc = new Calculator()


calc.appendNumber(10)
calc.setOperator("+")
calc.appendNumber(5)
console.log(calc.calculate()) 

const calc2 = new Calculator()
calc2.appendNumber(20)
calc2.setOperator("*")
calc2.appendNumber(3)
console.log(calc2.calculate())

const calc3 = new Calculator()
calc3.appendNumber(15)
calc3.setOperator("/")
calc3.appendNumber(3)
console.log(calc3.calculate())

const calc4 = new Calculator()
calc4.appendNumber(10)
calc4.setOperator("-")
calc4.appendNumber(4)
console.log(calc4.calculate())