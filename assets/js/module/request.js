
//let requestURL = 'https://raw.githubusercontent.com/rafaelcastrobr/Cartola-valorizacao/newCartola/assets/json/rodada2.json';
let requestURL = '../assets/json/rodada2.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = () => {
  let cartola = request.response;
  carregaElemento(cartola)
}



/*


let inp = document.querySelector('.inp'); //local digitado
let result = document.querySelector('.result'); //local resultado

//onkeyup é chamado quando solta a tecla e escreve no result
inp.onkeyup = () => { 
  console.log('input', inp.value)
  result.innerHTML = inp.value
}

*/
