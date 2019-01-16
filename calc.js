var evalArr = ['','','']; var lastNum = true; var lastSym = false; var lastEql = false; currNum = 0; firstSym = true; var nonLoc = []; var numNums = 0; var decimalExt = false; var afterDecArr = [];
function parseNum(num){
  if (numNums < 9){
    if (lastEql){
      clearOut(); lastEql = false; currNum = 0;
    }
    if (lastNum){
      if (decimalExt){
        let beforeDec = Number(nonLoc.join('')).toLocaleString();
        afterDecArr.push(num);
        let afterDec = afterDecArr.join('');
        document.getElementById('output').value = (beforeDec+'.'+afterDec); lastSym = true; numNums++;
      } else{
        nonLoc.push(num);
        let outNum = Number(nonLoc.join('')).toLocaleString();
        document.getElementById('output').value = (outNum); lastSym = true; numNums++;
      }
    } else{
      nonLoc.push(num);
      let outNum = nonLoc.join('').toLocaleString();
      document.getElementById('output').value = (outNum); lastSym = true; lastNum = true; numNums++;
    }
  evalArr[currNum] = evalArr[currNum] + num;
  }
}
function parseDec(){
  if (numNums < 9){
    if (decimalExt == false){
      if (lastSym){
        if (lastNum){
          decimalExt = true;
          document.getElementById('output').value = document.getElementById('output').value + '.'; 
          evalArr[currNum] = evalArr[currNum] + '.'; lastSym = false; numNums++;
        } else{
          decimalExt = true;
          document.getElementById('output').value = document.getElementById('output').value + '.'; 
          evalArr[currNum] = evalArr[currNum] + '.'; lastSym = false; lastNum = true; numNums++;
        }
      }
    }
  }
}
function parseSym(sym){
  if (lastSym){
    if (firstSym){
      document.getElementById('output').value = (sym); nonLoc = []; numNums = 0;
      lastNum = false; lastEql = false; evalArr[1] = sym; currNum++;
    } else if(firstSym === false){
      equals();
      document.getElementById('output').value = (sym); nonLoc = []; numNums = 0;
      lastNum = false; lastEql = false; evalArr[1] = sym; currNum++;
    }
  }
}
function equals(){
  if (eval(evalArr[0]) == 0 || eval(evalArr[2]) == 0){
    if (evalArr[1] == '/'){
      alert('Do not divide by zero!'); clearOut();
    }
  }
  let evalStr = eval(evalArr.join(''));
  if (evalStr > 999999999){
    evalStr = evalStr.toExponential(9);
  }
  document.getElementById('output').value = evalStr.toLocaleString();
  evalArr = ['','','']; evalArr[0] = evalArr[0] + eval(evalStr); currNum = 1; evalStr = ''; lastNum = false; lastEql = true; firstSym = false;
}
function negate(){
  if (lastSym){
  document.getElementById('output').value = (document.getElementById('output').value * -1).toLocaleString();
  evalArr[currNum] = (evalArr[currNum] * -1);
  }
}
function percent(){
  if (lastSym){
    document.getElementById('output').value = (document.getElementById('output').value / 100);
    evalArr[currNum] = (evalArr[currNum] / 100);
  }
}
function clearOut(){
  document.getElementById('output').value = 0;
  evalArr = ['','','']; lastNum = true; lastSym = false; currNum = 0; nonLoc = []; numNums = 0; decimalExt = false; afterDecArr = [];
}
function on(){
    alert('I\'m surpirised you did not reload.'); document.getElementById('main').style.visibility = 'visible';
}
function off(){
  alert('You know this is an online calculator right?');
  document.getElementById('main').style.visibility = 'hidden'; setTimeout(on,5000);
}
