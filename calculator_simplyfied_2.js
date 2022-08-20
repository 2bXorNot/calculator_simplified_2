console.log('test_2_');

let c = [];
console.log(c);
let a = '';
console.log(a);
let operationSymbol = '';
let operationSymbolSub = '';
let totalAmount;
let decimal = '.';
let p = '';
let p3 = '';
let o = '';
let turnOn = 'on';
let decimalOnOff = ''

function operacion(val) {
    p = 'period2'; p3 = 'p32';
    if(p === 'period2' && turnOn === 'off') {o += val; console.log(o); a = '';};
    if(p === 'period2' && turnOn === 'on') { a += val; console.log(a);};
    if(p === 'period2' && turnOn === 'off' && a !== '') {o += val; a = '';};
};

//

let numberOne = '1';function numberOneButton() {a = ''; operacion(numberOne);};
let numberTwo = '2';function numberTwoButton(){a = '';operacion(numberTwo);};
let numberThree = '3';function numberThreeButton(){a = '';operacion(numberThree);};
let numberFour = '4';function numberFourButton(){a = '';operacion(numberFour);};
let numberFive = '5';function numberFiveButton(){a = '';operacion(numberFive);};
let numberSix = '6';function numberSixButton(){a = '';operacion(numberSix);};
let numberSeven = '7';function numberSevenButton(){a = '';operacion(numberSeven);};
let numberEight = '8';function numberEightButton(){a = '';operacion(numberEight);};
let numberNine = '9';function numberNineButton(){a = '';operacion(numberNine);};
let numberZero = '0';function numberZeroButton(){a = '';operacion(numberZero);}; 

function addButton() {
    operationSymbol = '+';console.log(operationSymbol); operationSymbolSub = 'addition';
    
    if(p === 'period2' && a !== '' && turnOn === 'off' && operationSymbolSub === 'addition') { // a number has been chosen, thus the value period2, a is a number, turnOn is still off, addButton has been clicked
        console.log(o);
        c.push(Number(o)); // o, at this moment is ONLY pointing to digits(s) w/ a decimal. Number before decimal pushed
        console.log(a);
        a = '';
        p = '';
        o = '';
        turnOn = 'on'; // turn has become on, so this means when a number is clicked, without pediodButton being click, a whole number is chosen
    };
    
    decimalPlusNumberCondition();

    if((a !== '' &&  operationSymbolSub === 'addition') || (a === '' &&  operationSymbolSub === 'addition') && turnOn === 'on' /* && if off, in to the next conditional */ ) { // a is not empty, thus it is pushed into c. Then a is cleared and operationSymbol is +
        //console.log(operationSymbolSub);
        c.push(Number(a));
        c.push(Number(o));
        a = '';
        //console.log(operationSymbol);
        if(a === '' && operationSymbol === '+' && turnOn === 'on') { // when equals clears a, a operationSymbol is chosen so it can do a process with the "number on the screen"
            totalAmount = c.reduce((total, amount) => total + amount);
            clearArr();
            c.push(totalAmount);
            console.log(Number(totalAmount.toFixed(3)));
        }; 
    }; 
};

function subtractButton() {
    operationSymbol = '-';console.log(operationSymbol); operationSymbolSub = 'minus';
    
    if(p === 'period2' && a !== '' && turnOn === 'off' && operationSymbolSub === 'minus') { // a number has been chosen, thus the value period2, a is a number, turnOn is still off, addButton has been clicked
        console.log(o);
        c.push(Number(o)); // o, at this moment is ONLY pointing to digits(s) w/ a decimal. Number before decimal pushed
        console.log(a);
        a = '';
        p = '';
        o = '';
        turnOn = 'on'; // turn has become on, so this means when a number is clicked, without pediodButton being click, a whole number is chosen
    };
    
    decimalPlusNumberCondition();

    if((a !== '' &&  operationSymbolSub === 'minus') || (a === '' &&  operationSymbolSub === 'minus') && turnOn === 'on' /* && if off, in to the next conditional */ ) { // a is not empty, thus it is pushed into c. Then a is cleared and operationSymbol is +
        c.push(Number(a));
        a = '';
        if(a === '' && operationSymbol === '-' && turnOn === 'on') { // when equals clears a, a operationSymbol is chosen so it can do a process with the "number on the screen"
            totalAmount = c.reduce((total, amount) => total - amount);
            clearArr();
            c.push(totalAmount);
            console.log(Number(totalAmount.toFixed(3)));
        };
    }; 
};

function multiplyButton() {
    operationSymbol = '*';console.log(operationSymbol); operationSymbolSub = 'multiply';
    
    if(p === 'period2' && a !== '' && turnOn === 'off' && operationSymbolSub === 'multiply') { // a number has been chosen, thus the value period2, a is a number, turnOn is still off, addButton has been clicked
        console.log(o);
        c.push(Number(o)); // o, at this moment is ONLY pointing to digits(s) w/ a decimal. Number before decimal pushed        
        console.log(a);
        a = '';
        p = '';
        o = '';
        console.log(o);
        turnOn = 'on'; // turn has become on, so this means when a number is clicked, without pediodButton being click, a whole number is chosen
        console.log(turnOn);
    };

    if(p === 'period2' && a === '' && turnOn === 'off') {
        c.push(Number(o)); // decimal before number is pushed into the array, because         
        console.log(o);
        totalAmount = c.reduce((total, amount) => total * amount);
        clearArr();
        c.push(totalAmount);
        console.log(Number(totalAmount.toFixed(3)));
        a = '';
        o = '';
        turnOn = 'on';
    };
    
    if(a !== '' &&  operationSymbolSub === 'multiply' && turnOn === 'on' /* && if off, in to the next conditional */ ) { // a is not empty, thus it is pushed into c. Then a is cleared and operationSymbol is +
        c.push(Number(a));
        a = '';
        if(a === '' && operationSymbol === '*' && turnOn === 'on') { // when equals clears a, a operationSymbol is chosen so it can do a process with the "number on the screen"            
            totalAmount = c.reduce((total, amount) => total * amount);
            clearArr();
            c.push(totalAmount);
            console.log(Number(totalAmount.toFixed(3)));
            console.log(a);
        };
    }; 
};

function divideButton() {
    operationSymbol = '÷';console.log(operationSymbol); operationSymbolSub = 'divide';
    
    if(p === 'period2' && a !== '' && turnOn === 'off' && operationSymbolSub === 'divide') { // a number has been chosen, thus the value period2, a is a number, turnOn is still off, addButton has been clicked
        console.log(o);
        c.push(Number(o)); // o, at this moment is ONLY pointing to digits(s) w/ a decimal. Number before decimal pushed
        console.log(a);
        a = '';
        p = '';
        o = '';
        turnOn = 'on'; // turn has become on, so this means when a number is clicked, without pediodButton being click, a whole number is chosen
    };
    
    if(p === 'period2' && a === '' && turnOn === 'off') {
        c.push(Number(o)); // decimal before number is pushed into the array, because         
        console.log(o);
        totalAmount = c.reduce((total, amount) => total / amount);
        clearArr();
        c.push(totalAmount);
        console.log(Number(totalAmount.toFixed(2)));
        a = '';
        o = '';
        turnOn = 'on';
    };

    if(a !== '' &&  operationSymbolSub === 'divide' && turnOn === 'on' /* && if off, in to the next conditional */ ) { // a is not empty, thus it is pushed into c. Then a is cleared and operationSymbol is +
        c.push(Number(a));
        a = '';
        //console.log(operationSymbol);
        if(a === '' && operationSymbol === '÷' && turnOn === 'on') { // when equals clears a, a operationSymbol is chosen so it can do a process with the "number on the screen"
            totalAmount = c.reduce((total, amount) => total / amount);
            clearArr();
            c.push(totalAmount);
            console.log(Number(totalAmount.toFixed(3)));
        };
    };
};

function equalsButton() {

    if((a !== '' && operationSymbolSub === 'addition') || (a == '' && operationSymbolSub === 'addition')) {
        c.push(Number(a));
        c.push(Number(o));
        //console.log(operationSymbol);
        totalAmount = c.reduce((total, amount) => total + amount);
        clearArr();
        c.push(totalAmount);
        console.log((Number(totalAmount.toFixed(3))));
        operationSymbolSub = '';
    };
    if((a !== '' && operationSymbolSub === 'minus') || (a == '' && operationSymbolSub === 'minus')) {
        c.push(Number(a));
        c.push(Number(o));
        //console.log(operationSymbol);
        totalAmount = c.reduce((total, amount) => total - amount);
        clearArr();
        c.push(totalAmount);        
        console.log(Number(totalAmount.toFixed(3)));
        operationSymbolSub = '';
    };

// Multiplication

    if((a !== '' && operationSymbolSub === 'multiply') /* || (a === '' && operationSymbolSub === 'multiply') */) { // Unlike in + or -, x and ÷ need an extra logic for # + decimal
        //c.push(Number(o));
        c.push(Number(a));
        //console.log(operationSymbol);
        totalAmount = c.reduce((total, amount) => total * amount); // WO: .# x .# is yielding 0 and the opposite is working: e.g. .7 x 8 = 5.6
        clearArr();
        c.push(totalAmount);        
        console.log(Number(totalAmount.toFixed(2)));
        operationSymbolSub = '';
    };
    
    if((a === '' && operationSymbolSub === 'multiply' && turnOn === 'off')) { // attempting: creating a second logic for x with decimal RESULT: Working. NEED to test if still works when mixing operations
        c.push(Number(o));
        totalAmount = c.reduce((total, amount) => total * amount); // WO: .# x .# is yielding 0 and the opposite is working: e.g. .7 x 8 = 5.6
        clearArr();
        c.push(totalAmount);        
        console.log(Number(totalAmount.toFixed(2)));
        operationSymbolSub = '';
    };

// Division

    if((a !== '' && operationSymbolSub === 'divide')) {
        c.push(Number(a));        
        //console.log(operationSymbol);
        totalAmount = c.reduce((total, amount) => total / amount); // WO: whole number ÷ .# is yielding Infinity; .# ÷ .# is yielding Infinity
        clearArr();
        c.push(Number(totalAmount)); 
        console.log(Number(totalAmount.toFixed(3)));  
    };
    if((a === '' && operationSymbolSub === 'divide' && turnOn === 'off')) { // attempting
        c.push(Number(o));
        totalAmount = c.reduce((total, amount) => total / amount); // WO: .# x .# is yielding 0 and the opposite is working: e.g. .7 x 8 = 5.6
        clearArr();
        c.push(totalAmount);        
        console.log(Number(totalAmount.toFixed(2)));
    };
};

function periodButton() {
    console.log(decimal);
    p = 'period1';    
    turnOn = 'off';
    decimalOnOff = 'on';
    if(p === 'period1' && turnOn === 'off') { /* decimal then number(s)*/o = decimal; console.log(o);};   
        if(p === 'period1' && turnOn === 'off' && p3 === 'p32') { // number(s) then decimal. p3 === 'p32' is activated when the button of a number is pressed. a is a numner. a/number concatenated with '.'
        o = a + decimal;
        console.log(o);
        };
};

function decimalPlusNumberCondition() {if(p === 'period2' && a === '' && turnOn === 'off') {c.push(Number(o)); /* decimal before number is pushed into the array */console.log(o);a = '';o = '';turnOn = 'on'};};

function clearArr() {
    for(let i = c.length; i > 0; i--) {c.shift();};
    a = '';
    o = '';
    operationSymbol = '';
    p = '';
}; 

