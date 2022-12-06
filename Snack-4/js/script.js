// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI

const animalsList = [
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'pulcino', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'elefante', famiglia: 'elefanidi', classe: 'mammiferi' },
  { nome: 'coniglio', famiglia: 'conifanidi', classe: 'mammiferi' },
  { nome: 'aquila', famiglia: 'aquirealanidi', classe: 'uccelli' },
  { nome: 'coniglio', famiglia: 'conifanidi', classe: 'mammiferi' },
  { nome: 'scogliattolo', famiglia: 'scoglifanidi', classe: 'mammiferi' },
  { nome: 'bisonte', famiglia: 'bisofanidi', classe: 'mammiferi' },
]


const mammiferoList = animalsList.filter((animal) =>{
    if (animal.classe === 'mammiferi'){
        return true;
    }
    return false;
});

const mammiferiUppercase = mammiferoList.map((mammifero) =>{
    mammifero.nome = mammifero.nome.charAt(0) + mammifero.nome.substring(1).toUpperCase();
    return mammifero;
});

console.log (mammiferoList);
console.log (mammiferiUppercase);

