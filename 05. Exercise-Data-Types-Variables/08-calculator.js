function calculator(a, op, b){

    let result;
    switch (op) 
    {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '/': result = a / b; break;
        case '*': result = a * b; break;
    }
    console.log(result.toFixed(2));
}
calculator(5,
    '+',
    10
    );