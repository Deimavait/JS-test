/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  return {
    sum: function (a, b) {
      return a + b;
    },
    subtraction: function (a, b) {
      return a - b;
    },
    multiplication: function (a, b) {
      return a * b;
    },
    division: function (a, b) {
      return a / b;
    },
  };
}
console.log(Calculator().sum(6, 3));
console.log(Calculator().subtraction(6, 3));
console.log(Calculator().multiplication(6, 3));
console.log(Calculator().division(6, 3));
