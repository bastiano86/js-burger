/*

1- dai un nome al panino

2- fissa un prezzo base

3- dai un valore uguale a tutti gli ingedienti

4- calcola una somma per tutte le volte che si fa check su gli ingredienti

5- chiedi un codice sconto

6- verifica se è presente nell'array dei codici sonto

7- somma tutto e stampa il prezzo finale

*/



let nomeBurger = document.getElementById('nome-panino');
console.log(nomeBurger);

let bottone = document.getElementById('bottone');
console.log(bottone);

bottone.addEventListener('click', function() {
    if (nomeBurger.value.length === 0){
        alert('scrivi un nome per il panino');
    }   else { 
        var prezzoBase = 10;
        
        let ingredientiAgg = document.getElementsByClassName('ing-check');
        console.log(ingredientiAgg);

        for (let i = 0; i < ingredientiAgg.length; i++) {
            let ingredienteAtt = ingredientiAgg[i];
            console.log(ingredienteAtt);

            if (ingredienteAtt.checked) {
                prezzoBase += 7.5;
            }
        }
        console.log(prezzoBase);
        document.getElementById("final-price").innerHTML = (prezzoBase);
    } 
});


