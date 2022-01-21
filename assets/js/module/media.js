import { $inputCoeficiente } from './$local.js';

function media(cartola) {
  const { atletas } = cartola;

  atletas.forEach(atleta => {
    pontos(atleta['pontos_num']);

  });

}
const pt = [];
function pontos(ponto) {
  pt.push(ponto);
  return pt
}


function simJogou() {

  const cartola = media(cartola);

  var coeficientePt = parseFloat(document.getElementById("coeficiente-pt").value);
  var prJogador = parseFloat(document.getElementById("pr-jogador").value); // preco
  var ptRodadaDois = parseFloat(document.getElementById("pt-rodada-dois").value);
  var ptRodadaUm = parseFloat(document.getElementById("pt-rodada-um").value);

  var resultadoA = ((+$inputCoeficiente.value * prJogador + ptRodadaDois) - 2 * ptRodadaUm) / 14;

  document.getElementById("resultado-final").innerHTML = resultadoA.toFixed(2);

  console.log(+$inputCoeficiente.value);

}



function naoJogou() {
  var coeficientePt = parseFloat(document.getElementById("coeficiente-pt-a").value);
  var prJogador = parseFloat(document.getElementById("pr-jogador-b").value);
  var ptRodadaUm = parseFloat(document.getElementById("pt-rodada-um-b").value);

  var resultadoA = ((coeficientePt * prJogador) - 4 * ptRodadaUm) / 7;

  document.getElementById("resultado-final-b").innerHTML = resultadoA.toFixed(2);

  console.log(coeficientePt);
}

export { media, pontos }