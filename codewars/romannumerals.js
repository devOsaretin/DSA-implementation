class RomanNumerals {
  constructor() {
    this.symbol = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      DM: 900,
      M: 1000,
    };

    this.numbers = [1000, 900, 500, 400, 100, 90, 50, 10, 9, 5, 4, 1];
  }

  getObjectKey(obj, val) {
    return Object.keys(obj).find((key) => obj[key] === val);
  }

  toRoman(num) {
    let accumulator = "";
    let i = 0;
    while (num > 0) {
      if (this.numbers[i] > num) {
        i++;
      } else {
        accumulator += this.getObjectKey(this.symbol, this.numbers[i]);
        num -= this.numbers[i];
      }
    }

    return accumulator;
  }

  fromRoman(string) {
    if (string.length === 0) return;
    let accumulator = 0;
    let single;
    let double;
    let roman = string.toUpperCase();
    for (let i = 0; i < roman.length; i++) {
      double = this.symbol[roman[i] + roman[i + 1]];
      single = this.symbol[roman[i]];

      if (double) {
        accumulator += double;
        i++;
      } else if (single) {
        accumulator += single;
      }
    }
    return accumulator;
  }
}

const romanNumerals = new RomanNumerals();
console.log(romanNumerals.toRoman(2008));

console.log(romanNumerals.fromRoman("MMVIII"));

//other solution
var RomanNumerals = {
  fromRoman: function (roman) {
    var map = {
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    var value = 0;
    for (var i = 0; i < roman.length; i++) {
      var two = map[roman[i] + roman[i + 1]],
        one = map[roman[i]];
      if (two != null) {
        value += two;
        i++;
      } else if (one != null) value += one;
    }
    return value;
  },
  toRoman: function (value) {
    var map = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    var roman = "";
    while (value > 0) {
      for (var r in map) {
        if (map[r] <= value) {
          roman += r;
          value -= map[r];
          break;
        }
      }
    }
    return roman;
  },
};
