var numArr = [];
var symArr = [];
var numArrPos = 0;
var symArrPos = 0;
var numOfNums = 0;
var numOrSym = true; // Number is true, symbol is false
var locNums = [];
var enableDec = true;
var numAfterEql = false;
var totalChars = 0;
function numIO(num){
    if (numAfterEql){
        clearOut();
        numAfterEql = false;
        numArrPos = 1;
    }
    if (totalChars < 27){
        if (numOfNums < 9){
            symArrPos++;
            if (numOrSym){
                locNums.push(num);
                numOfNums++; 
                totalChars++;
            }
            let intArrNum = locNums.join('');
            numArr.push(''); numArr.push('');
            numArr[numArrPos] = (intArrNum.toString());
        display();     
        }
    }
}

function symIO(sym) {
    if (totalChars < 27){
        if (numArr[0]){
            symArr[symArrPos] = (sym.toString());
            symArr.push('');
            numArrPos++;
            locNums = []
            numOfNums = 0;
            totalChars++;
            enableDec = true;
            display();
        }
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
            }
            internalArr[oddNum] = symArr[syms].toString();
            oddNum += 2;
        }
    }
    let mainString = internalArr.join(' ')
    let intOut  = eval(mainString);
    console.log(typeof(intOut))
    numArrPos = 0;
    numAfterEql = true;
    clearOut();
    numArr.push(intOut.toString());
    if (intOut > 999999999){
        display(true, true, intOut, false);
    } else if (intOut < 1){
        display(false, true, intOut, true);
    } else{
        display(false, true, 0, false);
    }
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
function display(big, eql, numb, smol){
    let displayArr = [];
    let evenNum = 0;
    let oddNum = 1;
    let notZero = true;
    for(nums in numArr){
        if (numArr[nums] != ''){
            if (big && eql){
                if (numb == Infinity){
                    document.getElementById('output').value = 'There is no spoon...';
                    notZero = false;
                    break;
                } else{
                    displayArr[evenNum] = Number(numArr[nums]).toExponential(9);
                evenNum = 0;
                oddNum = 1;
                }
            } else if (eql){
                let decSplit = numArr[nums].split('.');
                decSplit[0] = Number(decSplit[0]).toLocaleString();
                displayArr[evenNum] = decSplit.join('.');
                evenNum += 2;
            } else if (smol){
                displayArr[evenNum] = numArr[nums].toExponential(9)
                evenNum += 2;
            }
            else{
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
    if (notZero){
        document.getElementById('output').value = outStr
    }
}
function on(){
    alert('I\'m surpirised you did not reload.'); document.getElementById('main').style.visibility = 'visible';
}
function off(){
  alert('You know this is an online calculator right?');
  document.getElementById('main').style.visibility = 'hidden'; setTimeout(on,10000);
}
