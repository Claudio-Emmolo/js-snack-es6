/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */

const peopleList = [
    {
        name : 'Giggi',
        surname : 'Giggetto',
        age : 18
    },
    {
        name : 'Pippo',
        surname : 'Pippetto',
        age : 30
    },
    {
        name : 'Elisabetta',
        surname : 'Betta',
        age : 30
    },
    {
        name : 'Franco',
        surname : 'Franchetto',
        age : 10
    },
    {
        name : 'Claudio',
        surname : 'Claudietto',
        age : 20
    },
    {
        name : 'Marco',
        surname : 'Marchetto',
        age : 5
    },
    {
        name : 'Filippo',
        surname : 'Filipetto',
        age : 5
    },
    {
        name : 'Alex',
        surname : 'Alexetto',
        age : 54
    },
    {
        name : 'Maria',
        surname : 'Maretto',
        age : 25
    },
    {
        name : 'Giulia',
        surname : 'Giulietta',
        age : 16
    },
];

const carDriving = peopleList.map((person) => {
    if (person.age >= 18){
        return person.name + " " + person.surname + ' - Può guidare';
    } else {
        return person.name + " " + person.surname + ' - Non può guidare';

    }
});

console.log(carDriving);