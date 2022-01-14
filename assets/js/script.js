
(function auto () {
  
  
  axios('.')
      .then(resposta => carregaElementos(resposta.data))
  
  function carregaElementos(json) {
    
    console.log('json: ', json);
  
  }

  carregaElementos()
})