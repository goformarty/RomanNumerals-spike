function convertToRoman(userNumber) {
  var arabic = parseInt(userNumber);
  if (arabic%1 !== 0) {
    return "not an integer";
  };
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var roman = "";

  for (var i = 0; i< symbols.length; i++) {
      	while (arabic>= decimals[i]) {
      		roman += symbols[i];
      		arabic -= decimals[i];
      	}
      }
	return roman;
};
