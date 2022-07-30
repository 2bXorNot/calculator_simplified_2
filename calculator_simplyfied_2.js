console.log('test_cal_2');

let a = '';
console.log(a);
let c = [];
console.log(c);
let symbol = '';
let totalAmount;
let symbolSub = '';

let numberOne = 1;
function numberOneButton() {
    if(a !== numberOne) {
        a += numberOne
    } else {
        a = numberOne;
    };
    console.log(a);
};
let numberTwo = 2;
function numberTwoButton(){
    if(a !== numberTwo) {
        a += Number(numberTwo);
    } else {
        a = Number(numberTwo);
    };
    console.log(a);
};
let numberThree = 3;
function numberThreeButton(){
    if(a !== numberThree) {
        a += Number(numberThree);
    } else {
        a = Number(numberThree);
    };
    console.log(a);
};
let numberFour = 4;
function numberFourButton(){
    if(a !== numberFour) {
        a += Number(numberFour);
    } else {
        a = Number(numberFour);
    };
    console.log(a);
};
let numberFive = 5;
function numberFiveButton(){
    if(a !== numberFive) {
        a += Number(numberFive);
    } else {
        a = Number(numberFive);
    };
    console.log(a);
};
let numberSix = 6;
function numberSixButton(){
    if(a !== numberSix) {
        a += Number(numberSix);
    } else {
        a = Number(numberSix);
    };
    console.log(a);
};
let numberSeven = 7;
function numberSevenButton(){
    if(a !== numberSeven) {
        a += Number(numberSeven);
    } else {
        a = Number(numberSeven);
    };
    console.log(a);
};
let numberEight = 8;
function numberEightButton(){
    if(a !== numberEight) {
        a += Number(numberEight);
    } else {
        a = Number(numberEight);
    };
    console.log(a);
};
let numberNine = 9;
function numberNineButton(){
    if(a !== numberNine) {
        a += Number(numberNine);
    } else {
        a = Number(numberNine);
    };
    console.log(a);
};
let numberZero = 0;
function numberZeroButton(){
    if(a !== numberZero) {
        a += Number(numberZero);
    } else {
        a = Number(numberZero);
    };
    console.log(a);
};

function addButton() {
    symbol = '+';
    console.log(symbol);
    symbolSub = 'addition'; // the varial=ble in this possition let's a second number be added to the total; however, if I click on the button before the first digits, there's  an error
    if(a !== '' && symbol === '+') { // a is not empty, thus it is pushed into c. Then a is cleared and symbol is +
        
        console.log(symbolSub);
        c.push(Number(a));
        a = '';
        console.log(symbol);
        if(a === '' && symbol === '+') { // when equals clears a, a symbol is chosen so it can do a process with the "number on the screen"
            symbol = '+';
            totalAmount = c.reduce((total, amount) => total + amount);
            clearArr();
            c.push(totalAmount);
            console.log(totalAmount);
            console.log(symbol);  
        };        
    };
};

function subtractButton() {
    symbol = '-';
    console.log(symbol);
    symbolSub = 'minus';
    if(a !== '' && symbol === '-') { // a is not empty, thus it is pushed into c. Then a is cleared and symbol is +
        
        console.log(symbolSub);
        c.push(Number(a));
        a = '';
        console.log(symbol);
        if(a === '' && symbol === '-') { // when equals clears a, a symbol is chosen so it can do a process with the "number on the screen"
            symbol = '-';
            totalAmount = c.reduce((total, amount) => total - amount);
            clearArr();
            c.push(totalAmount);
            console.log(totalAmount);
            console.log(symbol);
        };
    };           
    
};
function multiplyButton() {
    symbol = '*';
    console.log(symbol);
    symbolSub = 'multiplication';
    if(a !== '' && symbol === '*') { // a is not empty, thus it is pushed into c. Then a is cleared and symbol is +
        
        console.log(symbolSub);
        c.push(Number(a));
        a = '';
        console.log(symbol);
        if(a === '' && symbol === '*') { // when equals clears a, a symbol is chosen so it can do a process with the "number on the screen"
            totalAmount = c.reduce((total, amount) => total * amount);
            clearArr();
            c.push(totalAmount);
            console.log(totalAmount);
            console.log(symbol);
        };
    };
};
function divideButton() {
    symbol = '/'
    console.log(symbol);
    symbolSub = 'division';
    if(a !== '' && symbol === '/') { // a is not empty, thus it is pushed into c. Then a is cleared and symbol is +
        
        console.log(symbolSub);
        c.push(Number(a));
        a = '';
        console.log(symbol);
        if(a === '' && symbol === '/') { // when equals clears a, a symbol is chosen so it can do a process with the "number on the screen"
            totalAmount = c.reduce((total, amount) => total / amount);
            clearArr();
            c.push(totalAmount);
            console.log(totalAmount);
            console.log(symbol);
        };
    };
};

function equalsButton() {
    if((a !== '' && symbolSub === 'addition')) {
        c.push(Number(a));
        console.log(symbol);
        totalAmount = c.reduce((total, amount) => total + amount);
        clearArr();
        c.push(totalAmount);        
        console.log(totalAmount);
        symbolSub = '';
    };
    if((a !== '' && symbolSub === 'minus')) {
        c.push(Number(a));
        console.log(symbol);
        totalAmount = c.reduce((total, amount) => total - amount);
        clearArr();
        c.push(totalAmount);        
        console.log(totalAmount);
        symbolSub = '';         
    };
    if(( a !== '' && symbolSub === 'multiplication')) {
        c.push(Number(a));
        console.log(symbol);
        totalAmount = c.reduce((total, amount) => total * amount);
        clearArr();
        c.push(totalAmount);        
        console.log(totalAmount);         
    };
    if((a !== '' && symbolSub === 'division')) {
        c.push(Number(a));
        console.log(symbol);
        totalAmount = c.reduce((total, amount) => total / amount);
        clearArr();
        c.push(totalAmount);        
        console.log(totalAmount);         
    }; 
};

function clearArr() {
    for(let i = c.length; i > 0; i--) {
        c.shift()
    };
    a = '';
    symbol = '';
    console.log(a);
    console.log(symbol);
};  












