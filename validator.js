const validator = {
  isValid(creditCardNumber) {
    let reverseNumber;
    for (let i = 1; i <= 9; i++) {
      const reversa = creditCardNumber.split("").reverse();
      reverseNumber = reversa;
    }
    const arrayMultiplicar = [];
    for (let j = 0; j < reverseNumber.length; j++) {
      if (j % 2 === 1) {
        const multiplicar = parseInt(reverseNumber[j] * 2); //parse
        if (multiplicar > 9) {
          const numDoble = multiplicar;
          const num1 = numDoble.toString().charAt(0);
          const parte1 = parseInt(num1);
          const num2 = numDoble.toString().charAt(1);
          const parte2 = parseInt(num2);
          const suma = parte1 + parte2;
          arrayMultiplicar.push(suma);
        } else {
          arrayMultiplicar.push(multiplicar);
        }
      } else if (j % 2 === 0) {
        const noMultiplicar = parseInt(reverseNumber[j]); //parse
        arrayMultiplicar.push(noMultiplicar);
      }
    }
    const total = function (n1, n2) {
      return n1 + n2;
    };
    const resultado = arrayMultiplicar.reduce(total);
    //console.log("La suma da " + arrayMultiplicar.reduce(total));
    if (resultado % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify(creditCardNumber) {
    return creditCardNumber.replace(/.(?=.{4})/g, "#");
  }
};

export default validator;
