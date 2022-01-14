import { $result, $input } from './module/$local.js'

//let requestURL = 'https://raw.githubusercontent.com/rafaelcastrobr/Cartola-valorizacao/newCartola/assets/json/rodada2.json';
let requestURL = '../assets/json/rodada2.json'
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

document.querySelector('.rodada-btn').addEventListener('click', () => {

  let cartola = request.response;
  $result.innerHTML = '';
  carregaElemento(cartola);

})



function carregaElemento(cartola) {
  const atleta = cartola['atletas'];
  const clube = cartola['clubes'];
  const posicao = cartola['posicoes']


  for (let i = 0; i <= atleta.length; i++) {
    if (($input.value).toLowerCase() == atleta[i]['apelido'].toLowerCase()) {
      
      
      let atletaImg = atleta[i]['foto'];
      let atletaImgAtualizado = atletaImg.replace('FORMATO', '140x140')
      
      
      let clubeId = atleta[i]['clube_id'];
      let clubeImg = clube[clubeId]['escudos']['60x60'];
      
      let posicaoId = atleta[i]['posicao_id'];
      let posicaoNome = posicao[posicaoId]['nome']

      
      const imgAtleta = document.createElement('img');
      imgAtleta.src = atletaImgAtualizado;
        imgAtleta.style = 'width: 70px'

        const imgClube = document.createElement('img');
        imgClube.src = clubeImg;
        imgClube.style = 'width: 40px';

        const div = document.createElement('div');
        const p = document.createElement('p');
        p.insertAdjacentElement('afterbegin', imgAtleta);
        p.insertAdjacentElement('afterbegin', imgClube)

        p.innerHTML += `${atleta[i]['apelido']} - ${posicaoNome}`;
        div.appendChild(p)

        Swal.fire({
          icon: 'success',
          title: 'Buscando..',
          showConfirmButton: false,
          timer: 1500
        })


        setTimeout(() => {
          
          $result.appendChild(div);
        
        $input.value = ``;
      }, 1600);
    }
  }
}





//https://raw.githubusercontent.com/rafaelcastrobr/Cartola-valorizacao/newCartola/assets/json/rodada2.json