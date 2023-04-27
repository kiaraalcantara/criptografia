function criptografar() {
    // Pega a mensagem digitada pelo usuário
    var mensagem = document.getElementById("mensagem").value; //recupera o valor digitado pelo usuário no campo de entrada com o ID "mensagem" e armazena-o em uma variável chamada mensagem.
  
    // Desloca as letras 3 posições para a direita na tabela ASCII
    var mensagemDeslocada = "";
    for (var i = 0; i < mensagem.length; i++) {
      var codigoAscii = mensagem.charCodeAt(i);
      if (codigoAscii >= 65 && codigoAscii <= 90) { // Letra maiúscula
        mensagemDeslocada += String.fromCharCode((codigoAscii - 65 + 3) % 26 + 65);
      } else if (codigoAscii >= 97 && codigoAscii <= 122) { // Letra minúscula
        mensagemDeslocada += String.fromCharCode((codigoAscii - 97 + 3) % 26 + 97);
      } else { // Outro caractere
        mensagemDeslocada += mensagem[i];
      }
    }
  
    // Inverte a mensagem
    var mensagemInvertida = mensagemDeslocada.split("").reverse().join("");
  
    // Desloca os caracteres da metade em diante uma posição para a esquerda na tabela ASCII
    var mensagemCriptografada = "";
    for (var i = 0; i < mensagemInvertida.length; i++) {
      var codigoAscii = mensagemInvertida.charCodeAt(i);
      if (i < mensagemInvertida.length / 2) {
        mensagemCriptografada += mensagemInvertida[i];
      } else if (codigoAscii >= 33 && codigoAscii <= 126) { // Caractere imprimível na tabela ASCII
        mensagemCriptografada += String.fromCharCode(codigoAscii - 1);
      } else { // Outro caractere
        mensagemCriptografada += mensagemInvertida[i];
      }
    }
  
    // Exibe a mensagem criptografada na página
    document.getElementById("resultado").innerHTML = "Mensagem criptografada: " + mensagemCriptografada;
  }
  