function toggleCart() {
  var cartContainer = document.getElementById("cart-container");
  var currentRight = parseInt(getComputedStyle(cartContainer).right);

  // Toggle entre mostrar e ocultar o carrinho
  cartContainer.style.right = currentRight === 0 ? "-300px" : "0";
}







// Array para armazenar os itens no carrinho
var carrinhoDeCompras = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(item) {
  // Procura pelo item no carrinho
  var index = carrinhoDeCompras.findIndex((element) => element.item === item);

  // Se o item já estiver no carrinho, incrementa a quantidade
  if (index !== -1) {
    carrinhoDeCompras[index].quantidade++;
  } else {
    // Caso contrário, adiciona o item ao carrinho com quantidade 1
    carrinhoDeCompras.push({ item: item, quantidade: 1 });
  }

  // Atualiza o carrinho na página
  atualizarCarrinho();
}











// Função para remover um item do carrinho
function removerDoCarrinho(index) {
  // Remove o item do carrinho
  carrinhoDeCompras.splice(index, 1);

  // Atualiza o carrinho na página
  atualizarCarrinho();
}












// Função para atualizar o carrinho na página
function atualizarCarrinho() {
  // Obtém o elemento HTML do carrinho
  var carrinhoElemento = document.getElementById("carrinho");

  // Inicializa o conteúdo do carrinho
  carrinhoElemento.innerHTML = "Carrinho de Compras: ";

  // Itera sobre os itens no carrinho e exibe na página
  for (var i = 0; i < carrinhoDeCompras.length; i++) {
    carrinhoElemento.innerHTML +=
      '<div class="item-no-carrinho">' +
      carrinhoDeCompras[i].quantidade +
      "x " +
      carrinhoDeCompras[i].item +
      ' <button class="remover-botao" onclick="removerDoCarrinho(' +
      i +
      ')">Remover</button></div>';
  }
}













function limparCarrinho() {
  // Limpa o array de itens no carrinho
  carrinhoDeCompras = [];

  // Atualiza o carrinho na página
  atualizarCarrinho();
}













function obterConteudoFormatado() {
  var conteudoFormatado = "Pedido:\n";

  for (var i = 0; i < carrinhoDeCompras.length; i++) {
    conteudoFormatado += carrinhoDeCompras[i].quantidade +
      'x - ' + carrinhoDeCompras[i].item + '\n';
  }

  return conteudoFormatado;
}














// Função para exibir o conteúdo do carrinho no WhatsApp
function exibirConteudoCarrinhoNoWhatsApp() {
  // Obtém o conteúdo do carrinho formatado
  var conteudoFormatado = obterConteudoFormatado();

  // Codifica o conteúdo formatado para uso em URL
  var conteudoCodificado = encodeURIComponent(conteudoFormatado);

  // Constrói a URL do WhatsApp com o conteúdo
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=5511931461350&text=" + conteudoCodificado;

  // Abre a URL no navegador (você pode ajustar conforme necessário)
  window.open(urlWhatsApp, '_blank');
}
















/* Função para obter o conteúdo do carrinho como uma string
function obterConteudoCarrinho() {
  var conteudo = "Pedido: <br> \n";

  for (var i = 0; i < carrinhoDeCompras.length; i++) {
    //conteudo += carrinhoDeCompras[i].item + " X " + carrinhoDeCompras[i].quantidade + "\n";
    conteudo += carrinhoDeCompras[i].quantidade + "x -" + "\n" + carrinhoDeCompras[i].item + '<br>' ;
  }

  return conteudo;
}*/


/*function exibirConteudoCarrinhoNoWhatsApp() {
  // Obtém o conteúdo do carrinho
  var conteudo = obterConteudoCarrinho();

  // Codifica o conteúdo para uso em URL
  var conteudoCodificado = encodeURIComponent(conteudo);

  // Constrói a URL do WhatsApp com o conteúdo
  var urlWhatsApp = "https://api.whatsapp.com/send?phone=5511931461350&text=" + conteudoCodificado;

  // Abre a URL no navegador (você pode ajustar conforme necessário)
  window.open(urlWhatsApp, '_blank');
}*/






// Função para exibir o conteúdo do carrinho na tela
function exibirConteudoCarrinho() {
  var pedi = document.getElementById("pedido");
  // Obtém o conteúdo do carrinho
  var conteudo = obterConteudoFormatado();

  // Exibe o conteúdo em um alerta (você pode ajustar conforme necessário)
  pedi.innerHTML = conteudo;


  /*var final = 
  var URL = `https://api.whatsapp.com/send?phone=5511931461350&text=` = encodeURIComponent(final)
  urlwhats.innerHTML = URL*/
}

//var resultfinal = (res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}<strong>`);
//var URL = `https://api.whatsapp.com/send?phone=5511931461350&text=` + encodeURIComponent(resultfinal);
//url.innerHTML = URL;
