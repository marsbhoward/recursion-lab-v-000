// Code your solution here!
function printString(string){
  console.log(string[0]);
  if (string.length > 1) {
    let subString = string.substring(1, string.length);
    printString(subString);
  } else {
    return true;
  }
}

function reverseString(string){
  let array string.split("")
  array = array.reverse()
  console.log(string[0])
  if (string.length >1){
  let subString = string.subString(1,string.length)  
  }
  else{
    return string
  }
}