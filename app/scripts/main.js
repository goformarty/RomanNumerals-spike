var userInput = document.getElementById('userInput').value;
var calculate = document.getElementById('calculate');
var roman = document.getElementById('roman');

calculate.onclick = function(){
  roman.value = convertToRoman();
};
