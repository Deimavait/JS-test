/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const createCards = (json) => {
  const outputContainer = document.getElementById('output');
  const element = document.getElementById('message');
  element.remove();
  json.forEach((user) => {
    const btn = document.getElementById('btn').addEventListener('click', () => {
      const card = document.createElement('div');
      card.classList.add('card');
      outputContainer.appendChild(card);

      const cardDataLogin = document.createElement('p');
      cardDataLogin.textContent = user.login;
      card.appendChild(cardDataLogin);
      const cardDataAvatar = document.createElement('img');
      cardDataAvatar.src = user.avatar_url;
      //   cardDataAvatar.textContent = user.avatar_url;
      card.appendChild(cardDataAvatar);
    });
  });
};

async function getUsers() {
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  createCards(json);
}

getUsers();
