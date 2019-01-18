var numArr = [];
var symArr = [];
var numArrPos = 0;
var symArrPos = 0;
var numOfNums = 0;
var numOrSym = true; // Number is true, symbol is false
var locNums = [];
var enableDec = true;
var numAfterEql = false;
function numIO(num){
    if (numAfterEql){
        clearOut();
        numAfterEql = false;
    }
    if (numOfNums < 9){
        symArrPos++;
        if (numOrSym){
            locNums.push(num);
            numOfNums++; 
        }
        let intArrNum = locNums.join('');
        numArr.push(''); numArr.push('');
        numArr[numArrPos] = (intArrNum.toString());
        display();     
    }
}

function symIO(sym) {
    if (numArr[0]){
        symArr[symArrPos] = (sym.toString());
        symArr.push('');
        numArrPos++;
        locNums = []
        numOfNums = 0;
        enableDec = true;
        display();
    }
}
function decIO(){
    if (enableDec){
        locNums.push('.');
        let intArrNum = locNums.join('');
        numArr[numArrPos] = (intArrNum.toString());
        enableDec = false;
        display();
    }
}
function percent(){
    if (numArr[0]){
        numArr[numArrPos] = (numArr[numArrPos] / 100).toString();
        display();
    }
}
function negate(){
    if (numArr[0]){
        numArr[numArrPos] = (numArr[numArrPos] * (-1)).toString();
        display();
    }
}
function equalizer(){
    let internalArr = [];
    let evenNum = 0;
    let oddNum = 1;
    let divByZero = false;
    for(nums in numArr){
        if (numArr[nums] != '' && numArr[nums] != null){
            internalArr[evenNum] = numArr[nums].toString();
            evenNum += 2;
        }
    }
    for(syms in symArr){
        if (symArr[syms] != '' && symArr[syms] != null){
            if (symArr[syms] == '/' && numArr.includes('0')){
                divByZero = true;
            } else{
                internalArr[oddNum] = symArr[syms].toString();
                oddNum += 2;
            }
        }
    }
    let mainString = internalArr.join('')
    let intOut  = eval(mainString);
    if (divByZero){
        divZeroStr = "Do not divide by zero."
        numArr.push(divZeroStr.toString());
    } else{
        numArr.push(intOut.toString());
        clearOut();
        if (intOut > 999999999){
            display(true, true);
        } else{
            display(false, true);
        }
    }
    numArrPos = 1;
    numAfterEql = true;
}
function clearOut(){
    numArr = [];
    symArr = [];
    locNums = [];
    symArrPos = 0;
    numArrPos = 0;
    numOfNums = 0;
    numOrSym = true;
    numAfterEql = false;
    document.getElementById('output').value = 0
}
function display(big, eql){
    let displayArr = [];
    let evenNum = 0;
    let oddNum = 1;
    for(nums in numArr){
        if (numArr[nums] != ''){
            if (big){
                displayArr[evenNum] = Number(numArr[nums]).toExponential(9);
                console.log(displayArr);
                evenNum = 0;
                oddNum = 1;
            } else{
                let decSplit = numArr[nums].split('.');
                decSplit[0] = Number(decSplit[0]).toLocaleString();
                displayArr[evenNum] = decSplit.join('.');
                evenNum += 2;
            }
            
        } 
    }
    for(syms in symArr){
        if (symArr[syms] != '' && symArr[syms] != null){
            displayArr[oddNum] = symArr[syms].toString();
            oddNum += 2;
        }
    }
    let outStr = displayArr.join(' ')
    document.getElementById('output').value = outStr
}
function on(){
    alert('I\'m surpirised you did not reload.'); document.getElementById('main').style.visibility = 'visible';
}
function off(){
  alert('You know this is an online calculator right?');
  document.getElementById('main').style.visibility = 'hidden'; setTimeout(on,10000);
}
