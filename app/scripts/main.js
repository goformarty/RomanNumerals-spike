var calculate = document.getElementById('calculate');
var roman = document.getElementById('roman');

calculate.onclick = function(){
  var userInput = document.getElementById('userInput').value;
  roman.value = convertToRoman(userInput);
};
