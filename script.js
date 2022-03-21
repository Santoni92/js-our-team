console.log('JS OK!');

//struttura dati che rappresenta il singolo membro del team
const wayneBarnett = {
    nome: "Wayne",
    ruolo: "founder",
    img: "img/wayne-barnett-founder-ceo.jpg"  /*"C:/Users/Utente/Desktop/BooleanProject/js-our-team/img/wayne-barnett-founder-ceo.jpg"*/
};

const angelaCarrol = {
    nome: "Angela",
    ruolo: "chief editor",
    img: "img/wayne-barnett-founder-console.jpg"
};

const walterGordon = {
    nome: "Walter",
    ruolo: "office manager",
    img: "img/wayne-barnett-founder-console.jpg"
};

const angelaLopez = {
    nome: "Angela",
    ruolo: "social media manager",
    img: "img/wayne-barnett-founder-console.jpg"
};




const team = [wayneBarnett,angelaCarrol,walterGordon,angelaLopez];  //array di oggetti

console.log(team);

for(let key in wayneBarnett)
{
    console.log(wayneBarnett[key]);
}

//Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.


const card = document.createElement('div');

const nome = document.createElement('h3');
nome.innerText = wayneBarnett.nome;

const ruolo = document.createElement('p');
ruolo.innerText = wayneBarnett.ruolo;

const img = document.createElement('img');
img.setAttribute('src',wayneBarnett.img);

document.querySelector('.team-container').appendChild(card);
card.appendChild(img);
card.appendChild(nome);
card.appendChild(ruolo);







