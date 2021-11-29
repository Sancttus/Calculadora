"use strict";

function calcular(tipo, valor) {
  if (tipo === 'sinal') {
    if (valor === 'c') {
      // limpa o visor
      document.getElementById('visor').value = "";
    } //funções dos sinais


    if (valor == '+' || valor == '-' || valor == '*' || valor == '/' || valor == '.') {
      document.getElementById('visor').value += valor;
    }

    if (valor === '=') {
      //eval para transforma a string  
      var valor_campo = eval(document.getElementById('visor').value);
      document.getElementById('visor').value = valor_campo;
    }
  } else if (tipo === 'numero') {
    document.getElementById('visor').value += valor;
  }
}