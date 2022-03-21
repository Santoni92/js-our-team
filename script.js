console.log('JS OK!');

//struttura dati che rappresenta il singolo membro del team
const wayneBarnett = {
    nome: "Wayne",
    ruolo: "founder",
    img: "img/wayne-barnett-founder-ceo.jpg"  
};

const angelaCarrol = {
    nome: "Angela",
    ruolo: "chief editor",
    img: "img/angela-caroll-chief-editor.jpg"
};

const walterGordon = {
    nome: "Walter",
    ruolo: "office manager",
    img: "img/walter-gordon-office-manager.jpg"
};

const angelaLopez = {
    nome: "Angela",
    ruolo: "social media manager",
    img: "img/angela-lopez-social-media-manager.jpg"
};

const scottEstrada = {
    nome: "Scott",
    ruolo: "developer",
    img: "img/scott-estrada-developer.jpg"
};

const barbaraRamos = {
    nome: "barbara",
    ruolo: "graphic designer",
    img: "img/barbara-ramos-graphic-designer.jpg"
};



const team = [wayneBarnett,angelaCarrol,walterGordon,angelaLopez,scottEstrada,barbaraRamos];  //array di oggetti

console.log(team);

for(let key in wayneBarnett)
{
    console.log(wayneBarnett[key]);
}

//Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

//const card = document.createElement('div');
const teamCard = [];
const cardImage = [];    //creo un array per salvarmi i riferimenti ai vari div che conterranno l'immagine,il nome ed la professione di ciascun membro del team
const cardText = [];
const nome = [];    //array per salvarmi i riferimenti ai vari h3 dei nomi
const ruolo = [];   //array per salvarmi i riferimenti ai vari p in cui ci sarà scritta la professione
const img = [];     //array per salvarmi i riferimenti alle varie immagini 

for(let i = 0; i < team.length;i++)
{
    teamCard.push(document.createElement('div'));
    cardImage.push(document.createElement('div'));   //inserisco i riferimenti  nell'array dei riferimenti ai vari div contenenti le informazioni dei membri dei team
    cardText.push(document.createElement('div'));
    nome.push(document.createElement('h3'));
    ruolo.push(document.createElement('p'));
    img.push(document.createElement('img'));
}

for(let i = 0; i < team.length;i++)
{
    document.querySelector('.team-container').appendChild(teamCard[i]);
    teamCard[i].classList.add('team-card');
    teamCard[i].appendChild(cardImage[i]);
    cardImage[i].classList.add('card-image');
    teamCard[i].appendChild(cardText[i]);
    cardText[i].classList.add('card-text');

}

for(let i = 0; i < team.length;i++)
{
    nome[i].innerText = team[i].nome;
    ruolo[i].innerText = team[i].ruolo;
    img[i].setAttribute('src',team[i].img);
}

for(let i = 0; i < team.length; i++)
{
    cardImage[i].appendChild(img[i]);
    cardText[i].appendChild(nome[i]);
    cardText[i].appendChild(ruolo[i]);

}


/*const nome = document.createElement('h3');
nome.innerText = wayneBarnett.nome;

const ruolo = document.createElement('p');
ruolo.innerText = wayneBarnett.ruolo;

const img = document.createElement('img');
img.setAttribute('src',wayneBarnett.img);

document.querySelector('.team-container').appendChild(card);
card.appendChild(img);
card.appendChild(nome);
card.appendChild(ruolo);
*/






