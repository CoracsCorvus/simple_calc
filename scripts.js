function calculate() {
    const num1 = parseFloat((document.getElementById('num1')).value);
    console.log(document.getElementById('num1').value);
    
    const num2 = parseFloat((document.getElementById('num2')).value);
    const operation =document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = 'Input error';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Деление на 0!';
            break;
        default:
            result = 'Неизвестная операция';
    }
    document.getElementById('result').textContent = typeof result === 'number' ? result.toFixed(3) : result;
}