/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const createCards = (json) => {
  const outputContainer = document.getElementById('output');

  json.forEach((car) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const brandElement = document.createElement('h1');
    brandElement.textContent = car.brand;
    cardElement.appendChild(brandElement);

    const modelsElement = document.createElement('ul');
    car.models.forEach((model) => {
      const listItemElement = document.createElement('li');
      listItemElement.textContent = model;
      modelsElement.appendChild(listItemElement);
    });
    cardElement.appendChild(modelsElement);

    outputContainer.appendChild(cardElement);
  });
};

async function getCarsData() {
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  createCards(json);
}

getCarsData();
