// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
// // 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.


const mainElement = document.querySelector("main");

const hElement = document.createElement('h1');

const studentList = [
    {
       name : 'Giggi',
       surname : 'Giggetto',
       age : 25
    },
    {
        name : 'Francesco',
        surmane : 'Franceschi',
        age : 20
    },
    {
        name : 'Vincenzo',
        surmane : 'Vincenti',
        age : 50
    }
];

const student = {
    name : 'Claudio',
    surname : 'Emmolo',
    age : 19
}

for (let key in student){
    hElement.append(' ', key, ' => ' , student[key])
    mainElement.append(hElement);
}

for ( let i = 0 ; i<studentList.length ; i++){
    console.log (studentList[i]);
}