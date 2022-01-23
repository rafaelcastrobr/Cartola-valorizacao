import { $result, $input, locals } from './$local.js';
//import { media } from './media.js'
import { $inputCoeficiente } from './$local.js';






function carregaElemento(cartola) {
  const { atletas, clubes, posicoes } = cartola;


  for (let i = 0; i <= atletas.length; i++) {

    const nomeDigitado = ($input.value).toLowerCase();
    const nomeDigitadoSemAcento = nomeDigitado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const nomeBuscado = atletas[i]['apelido'].toLowerCase();
    const nomeBuscadoSemAcento = nomeBuscado.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const nomeBuscadoSeparado = nomeBuscadoSemAcento.split(' ');

    if (nomeDigitado === nomeBuscado ||
      nomeDigitadoSemAcento === nomeBuscadoSemAcento.split(' ')['0'] ||
      nomeDigitadoSemAcento === nomeBuscadoSemAcento.split(' ')['1'] ||
      nomeDigitado === nomeBuscadoSemAcento ||
      nomeDigitado === nomeBuscadoSeparado['0'] ||
      nomeDigitado === nomeBuscadoSeparado['1']) {


      let atletaImg = atletas[i]['foto'];
      let atletaImgAtualizado = atletaImg.replace('FORMATO', '140x140')


      let clubeId = atletas[i]['clube_id'];
      let clubeImg = clubes[clubeId]['escudos']['60x60'];

      let posicaoId = atletas[i]['posicao_id'];
      let posicaoNome = posicoes[posicaoId]['nome'];

      let pontosSegundaRodada = atletas[i]['pontos_num'];
      let pontosMedia = atletas[i]['media_num'];

      const pontosPrimeiraRodada = function ptPrimeiraRodada() {
        return ((+pontosMedia * 2) - +pontosSegundaRodada)
      }

      let precoJogador = atletas[i]['preco_num'];
      let resultado;



      const p = document.createElement('p');
      if (+(atletas[i]['jogos_num']) === 2) {
        resultado = (((+$inputCoeficiente.value * +precoJogador + +pontosSegundaRodada) - 2 * pontosPrimeiraRodada()) / 14).toFixed(2);

        p.innerHTML += `<p><img src="${clubeImg}" style="width: 40px;"> 
        <img src="${atletaImgAtualizado}" style="width: 70px;"> 
        ${atletas[i]['apelido']} - ${posicaoNome} <span style="color:green;">${resultado}</span></p>`;


      } else if (+(atletas[i]['jogos_num']) === 1) {
        resultado = (((+$inputCoeficiente.value * +precoJogador) - 4 * pontosPrimeiraRodada()) / 7).toFixed(2);

        p.innerHTML += `<p><img src="${clubeImg}" style="width: 40px;"> 
        <img src="${atletaImgAtualizado}" style="width: 70px;"> 
        ${atletas[i]['apelido']} - ${posicaoNome} <span style="color:red;">${resultado}</span></p>`;

      } else {
        resultado = `Não jogou`
      }


      setTimeout(() => {
        $result.appendChild(p);
        $input.value = ``;
      }, 1400);

    } else {
      setTimeout(() => {
        if ($result.textContent.length === 0) {
          $result.innerHTML = 'Não encontrado!'

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })

          Toast.fire({
            icon: 'error',
            title: 'Não encontrado!'
          })

        }
      }, 1600);
    }
  }
}


export { carregaElemento };

