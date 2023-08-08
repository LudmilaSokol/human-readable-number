module.exports = function toReadable (number) {
  let result = '';
  let units = ''; //единицы
  let tens = ''; //десятки
  let hundreds = ''; //сотни

  //первая цифра (сотни)
    switch (Math.floor (number / 100)) {
      case 1 : hundreds = 'one hundred';  break;
      case 2 : hundreds = 'two hundred';  break;
      case 3 : hundreds = 'three hundred';  break;
      case 4 : hundreds = 'four hundred'; break;
      case 5 : hundreds = 'five hundred'; break;
      case 6 : hundreds = 'six hundred'; break;
      case 7 : hundreds = 'seven hundred'; break;
      case 8 : hundreds = 'eight hundred'; break;
      case 9 : hundreds = 'nine hundred'; break;
    }
    //десятки
    switch (Math.floor (number % 100 / 10)) {
      case 2 : tens = 'twenty'; break;
      case 3 : tens = 'thirty'; break;
      case 4 : tens = 'forty'; break;
      case 5 : tens = 'fifty'; break;
      case 6 : tens = 'sixty'; break;
      case 7 : tens = 'seventy'; break;
      case 8 : tens = 'eighty'; break;
      case 9 : tens = 'ninety'; break;
      case 1 : {
        switch (number % 10) {
          case 0 : tens = 'ten'; break;
          case 1 : tens = 'eleven'; break;
          case 2 : tens = 'twelve'; break;
          case 3 : tens = 'thirteen'; break;
          case 4 : tens = 'fourteen'; break;
          case 5 : tens = 'fifteen'; break;
          case 6 : tens = 'sixteen'; break;
          case 7 : tens = 'seventeen'; break;
          case 8 : tens = 'eighteen'; break;
          case 9 : tens = 'nineteen'; break;
        }
      }; break;
    }
   // единицы
    if (Math.floor (number % 100 / 10) !== 1) {
      switch (number % 10) {
        case 0 : {
          if (Math.floor(number / 10) !== 0) {
            units = '';
          } else {units = "zero"
        }  break;}
        case 1 : units = 'one'; break;
        case 2 : units = 'two'; break;
        case 3 : units = 'three'; break;
        case 4 : units = 'four'; break;
        case 5 : units = 'five'; break;
        case 6 : units = 'six'; break;
        case 7 : units = 'seven'; break;
        case 8 : units = 'eight'; break;
        case 9 : units = 'nine'; break;
      }
    }
  if (tens === '') {
		result = `${hundreds} ${units}`.trim();
	} else {
		result = `${hundreds} ${tens} ${units}`.trim();
	}
  return result;
}
