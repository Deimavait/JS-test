/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const state = document.getElementById('btn__state');

const btn = document.getElementById('btn__element');

let counter = 0;

btn.addEventListener('click', (e) => {
  e.preventDefault();

  state.textContent = ++counter;
});
