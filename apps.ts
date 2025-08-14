const toNumber = (value: string): number => {
    return parseFloat(value);
};

function calculate(num1: number, num2: number, operation: string): number {
    let result: number;
    switch (operation) {
        case "sum":
            result = num1 + num2;
            break;
            case "subtract":
            result = num1 - num2;
            break;
            case "multiply":
            result = num1 * num2;
            break;
            case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } 
            else {
                alert("cannot divise by zero");
                result = NaN;
            }
            break;
            default:
                result = NaN;
    }
    return result;
}

document.getElementById("calculateBtn")?.addEventListener("click", () => {
    const num1String = (document.getElementById("num1") as HTMLInputElement).value;
    const num2String = (document.getElementById("num2") as HTMLInputElement).value;
    const operation =  (document.getElementById("operation") as HTMLSelectElement).value;
    const num1 = toNumber(num1String);
    const num2 = toNumber(num2String);
    const result = calculate(num1, num2, operation);
    const resultElement = document.getElementById("result") as HTMLSpanElement;
    if (isNaN(result)) {
        resultElement.innerHTML = "Error";
    }
    else {
        resultElement.innerHTML = result.toString();
    }
});