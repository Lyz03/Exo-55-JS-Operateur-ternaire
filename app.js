let firstP = document.getElementById('first_p');
let span1 = document.getElementById('span_1').innerHTML;
let span2 = document.getElementById('span_2').innerHTML;
let span3 = document.getElementById('span_3');

let result = document.getElementById('resultat');

result = (parseInt(span1) + parseInt(span2)) === 10 ? result.innerText = "le résultat est 10" :
    result.innerText = "le résultat n'est pas 10";

if ((parseInt(span1) + parseInt(span2)) - 10 < 0) {
    firstP.innerText = 'Le résultat est strictement inférieure à 0'
}

firstP.style.backgroundColor = 'lightgray';
span3.style.color = 'blue';

