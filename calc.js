var evalStr = ""
var lastChar = true
function parseNum(num){
  if (lastChar){
    document.getElementById('output').innerHTML = (document.getElementById('output').innerHTML + num)
  } else {
    document.getElementById('output').innerHTML = (num)
  }
  evalStr = evalStr + num
}
function parseSym(sym){
  console.log("parsing operation")
  if (lastChar){
    console.log(evalStr)
    document.getElementById('output').innerHTML = (sym)
    lastChar = false
    evalStr = evalStr + sym
  } else {
    console.log("The user must be entering multiple operations in a row!")
  }
}
function equals(){
  document.getElementById('output').innerHTML = eval(evalStr)
  evalStr = ""
}
