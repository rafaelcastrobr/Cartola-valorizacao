import { $result, $input } from './module/$local.js';
import { media } from './module/media.js';
import { carregaElemento } from './module/carregaElemento.js';

/*
carregado o valor da ultima pontuaçao///
carregar proximos valores
aplicar o foreach
*/


let requestURL = 'https://raw.githubusercontent.com/rafaelcastrobr/Cartola-valorizacao/newCartola/assets/json/rodada2.json';
//let requestURL = '../../Cartola-Valorizacao/assets/json/rodada2.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();


function inicioProgram() {

  if ($input.value.length === 0) {
    $result.innerHTML = '';

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Digite um nome!'
    })

  } else {

    Swal.fire({
      icon: 'success',
      title: 'Buscando..',
      showConfirmButton: false,
      timer: 1100
    });

    let cartola = request.response;
    $result.innerHTML = '';
    media(cartola);
    carregaElemento(cartola);
  };

}




document.querySelector('.rodada-btn').addEventListener('click', () => {
  inicioProgram();
})


document.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    inicioProgram();
  }
})










//https://raw.githubusercontent.com/rafaelcastrobr/Cartola-valorizacao/newCartola/assets/json/rodada2.json