/* Addition */

function addition( n: number, m: number ): number {
    let add = n + m;
    console.log(`${n} + ${m} = ${add}`);
    return add;
}

/* Reduced function multiplication */

let multiplication: ( n: number, m: number ) => number;
multiplication = (n, m) => {
    let result = n * m;
    console.log(`${n} * ${m} = ${result}`);
    return result;
};

multiplication(4, 5);

/* Using 'callBack' in a function */

let substraction: (n: number, m: number, callBack: (result: number) => void) => void;
substraction = (n, m, callBack) => callBack(n - m);

substraction(10, 5, function(result){
    console.log(`Result =  ${result}`);
})