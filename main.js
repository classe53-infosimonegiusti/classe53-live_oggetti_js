let palla = {
    diametro: 10,
    'colori': ['blu', 'rosso', 'giallo'],
    'tipo': 'palla da biliardo',
    "tipo impiego": 'gioco indoor',
};

let colori = palla.colori;
//console.log(colori);

for (let i = 0; i < colori.length; i++) {
    console.log(colori[i]);
}

/*
for (let key in palla) {
    let test = palla[key];
    for (let i = 0; i < test.length; i++) {
        console.log(test[i]);
    }
}
*/





/*
console.log(palla);

console.log(palla.colore);

console.log(palla['colore']);
*/

//console.log(palla.tipo impiego); // sto sbagliando!

//console.log(palla["tipo impiego"]);

//palla.diametro = 20;
//console.log(palla.tipo_impiego);
/*
palla.prezzo = 30;
console.log(palla.prezzo);

console.log(palla);

for (let chiave in palla) {
    //palla.chiave equivale a palla['chiave'];
    console.log("Per il nome: " + chiave + " il valore è: " + palla[chiave]);
}

console.log(palla.tipo);
console.log(palla['tipo']);
*/