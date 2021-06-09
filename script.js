
function resultA() {

  var prJogador = parseFloat(document.getElementById("pr-jogador").value);
  var ptRodadaDois = parseFloat(document.getElementById("pt-rodada-dois").value);
  var ptRodadaUm = parseFloat(document.getElementById("pt-rodada-um").value);

  var resultadoA = ((4.9 * prJogador + ptRodadaDois) - 2 * ptRodadaUm) / 14;

  document.getElementById("resultado-final").innerHTML = resultadoA.toFixed(2);

}



function result() {

  var prJogador = parseFloat(document.getElementById("pr-jogador-b").value);
  var ptRodadaUm = parseFloat(document.getElementById("pt-rodada-um-b").value);

  var resultadoA = ((4.9 * prJogador - 4) * ptRodadaUm) / 7;

  document.getElementById("resultado-final-b").innerHTML = resultadoA.toFixed(2);

  console.log(prJogador);
  console.log(ptRodadaUm);
}