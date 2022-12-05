/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */

const veicleList = [
    {
        marca : 'Alfa Romeo',
        modello : 'gt350',
        alimentazione : 'benzina'
    },
    
    {
        marca: 'Ford',
        modello : 'Ford Fiesta',
        alimentazione : 'diesel'
    },
    {
        marca : 'ferrari',
        modello : 'ferrari sport',
        alimentazione : 'benzina'
    },
    {
        marca : 'Lamborghini',
        modello: 'Urus',
        alimentazione : 'metano'
    },
    {
        marca : 'testa',
        modello : 'S2',
        alimentazione : 'elettrico'
    },
    {
        marca : 'toyota',
        modello : 'mk2',
        alimentazione : 'diesel'
    },
    {
        marca : 'Ford',
        modello : 'eco Sport',
        alimentazione : 'diesel'
    },
    {
        marca : 'BMW',
        modello : 'Sport m2',
        alimentazione : 'benzina'
    },
    {
        marca : 'Toyota',
        modello : 'GpToy2',
        alimentazione : 'gpl'
    },
    {
        marca : 'Maserati',
        modello : 'Super Lusso 1',
        alimentazione : 'gpl'
    }
];

const benzina = [];

const diesel = [];

const otherAlimentation = [];

for (let i = 0 ; i < veicleList.length ; i++){

        if (veicleList[i]['alimentazione'] === 'benzina'){
            benzina.push(veicleList[i]);
        } else if (veicleList[i]['alimentazione'] === 'diesel'){
            diesel.push(veicleList[i]);
        } else{
            otherAlimentation.push(veicleList[i]);
        }

}

console.log (benzina)
console.log(diesel);
console.log(otherAlimentation);