/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const form = document.querySelector('form');
const search = document.querySelector('#search');
const output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const kg = parseFloat(search.value);

  if (!isNaN(kg)) {
    const lb = (kg * 2.2046).toFixed(2);
    const g = (kg / 0.001).toFixed(2);
    const oz = (kg * 35.274).toFixed(2);

    output.innerHTML = `<p>${kg} kg is equal to:</p>
                        <ul>
                          <li>${lb} lb</li>
                          <li>${g} g</li>
                          <li>${oz} oz</li>
                        </ul>`;
  } else {
    output.innerHTML =
      '<p>Please enter a valid number for weight in kilograms.</p>';
  }
});
