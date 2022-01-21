import { $result, $input } from './$local.js';






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

      let value = [];

      let atletaImg = atletas[i]['foto'];
      let atletaImgAtualizado = atletaImg.replace('FORMATO', '140x140')


      let clubeId = atletas[i]['clube_id'];
      let clubeImg = clubes[clubeId]['escudos']['60x60'];

      let posicaoId = atletas[i]['posicao_id'];
      let posicaoNome = posicoes[posicaoId]['nome']


      const p = document.createElement('p');
      p.innerHTML += `<p><img src="${clubeImg}" style="width: 40px;"> 
      <img src="${atletaImgAtualizado}" style="width: 70px;"> 
      ${atletas[i]['apelido']} - ${posicaoNome}</p>`


      setTimeout(() => {
        $result.appendChild(p);
        $input.value = ``;
      }, 1200);

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
      }, 1400);
    }
  }

}

export { carregaElemento };