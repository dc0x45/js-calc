var evalArr = ['','','']; var lastNum = true; var lastSym = false; var lastEql = false; currNum = 0; firstSym = false; var nonLoc = []; var numNums = 0;
function parseNum(num){
  if (numNums < 9) {
    if (lastEql){
      clearOut(); lastEql = false; currNum = 0;
    }
    if (lastNum){
      nonLoc.push(num);
      let outNum = Number(nonLoc.join('')).toLocaleString();
      document.getElementById('output').value = (outNum);
      lastSym = true; numNums++;
    } else {
      nonLoc.push(num);
      let outNum = Number(nonLoc.join('')).toLocaleString();
      document.getElementById('output').value = (outNum);
      lastSym = true; lastNum = true; numNums++;
    }
  evalArr[currNum] = evalArr[currNum] + num;
  }
}
function parseDec(){
  if (lastSym){
    if (lastNum){
      nonLoc.push('.');
      document.getElementById('output').value = document.getElementById('output').value + '.';
      evalArr[currNum] = evalArr[currNum] + '.';
      lastSym = true; numNums++;
    } else {
      nonLoc.push('.');
      document.getElementById('output').value = document.getElementById('output').value + '.';
      evalArr[currNum] = evalArr[currNum] + '.';
      lastSym = true; lastNum = true; numNums++;
    }
  }
}
function parseSym(sym){
  if (lastSym){
    if (firstSym){
      document.getElementById('output').value = (sym); nonLoc = []; numNums = 0;
      lastSym = false; lastNum = false; lastEql = false; evalArr[1] = evalArr[1] + sym; currNum++; firstSym = true;
    } else if(firstSym === false){
      equals()
      console.log(evalArr)
      document.getElementById('output').value = (sym); nonLoc = []; numNums = 0;
      lastSym = false; lastNum = false; lastEql = false; evalArr[1] = evalArr[1] + sym; currNum++; firstSym = false;
    }
  }
}
function equals(){
  let evalStr = eval(evalArr.join(''))
  if (evalStr > 999999999){
    evalStr = evalStr.toExponential(9);
  }
  document.getElementById('output').value = evalStr.toLocaleString();
  evalArr = ['','','']; evalArr[0] = evalArr[0] + eval(evalStr); currNum = 1; evalStr = ''; lastNum = false; lastEql = true;
}
function negate(){
  if (lastSym){
  document.getElementById('output').value = (document.getElementById('output').value * -1).toLocaleString();
  console.log(currNum);
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
  evalArr = ['','','']; lastNum = true; lastSym = false; currNum = 0; nonLoc = []; numNums = 0;
}
