function intAndFloat(num1, num2, num3){

    let res = num1 + num2 + num3;

    res % 1 === 0 ? res += ' - Integer': res += ' - Float';
    console.log(res);
}
intAndFloat(9, 100, 1.1);