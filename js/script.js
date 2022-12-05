// 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
// 2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.

const mainElement = document.querySelector("main");

const hElement = document.createElement('h1')

const student = {
    name : 'Claudio',
    surname : 'Emmolo',
    age : 19
}

for (let key in student){
    hElement.append(' ', key, ' => ' , student[key])
    mainElement.append(hElement);
}