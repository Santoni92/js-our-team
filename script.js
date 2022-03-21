console.log('JS OK!');

//struttura dati che rappresenta il singolo membro del team
const wayneBarnett = {
    nome: "Wayne",
    ruolo: "founder",
    img: "img/wayne-barnett-founder-console.jpg"
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


const team = [wayneBarnett,angelaCarrol,walterGordon];

console.log(team);

for(let key in wayneBarnett)
{
    console.log(wayneBarnett[key]);
}
