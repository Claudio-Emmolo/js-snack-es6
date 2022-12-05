/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchineList = [
    {
        tipoligia : 'Romana',
        peso : 10,
        size : 1.50
    },
    {
        tipoligia : 'Siciliana',
        peso : 80,
        size : 6.50
    },
    {
        tipoligia : 'Africana',
        peso : 0.99,
        size : 1.90
    },
    {
        tipoligia : 'Francese',
        peso : 0.10,
        size : 0.20
    },
    {
        tipoligia : 'Inglese',
        peso : 8.10,
        size : 5.20
    },
    {
        tipoligia : 'Milanese',
        peso : 20,
        size : 1.20
    },
    {
        tipoligia : 'Norvegese',
        peso : 3,
        size : 1.23
    },
    {
        tipoligia : 'Pugliese',
        peso : 20,
        size : 5.23
    },
    {
        tipoligia : 'Napoletana',
        peso : 8,
        size : 2.23
    },
    {
        tipoligia : 'Americana',
        peso : 100,
        size : 10.23
    },
];

let calc = 0;

for (let i = 0 ; i < zucchineList.length ; i++){
    calc += zucchineList[i]['peso'];
}

console.log('Le zucchine pesano in totale: ' + calc.toFixed(2) + 'Kg');