const jurosSimples = (C, i, t) => C * i * t;

/*
Exercício 2: montante com juros simples

Crie uma nova função que dado as mesmas variáveis do exercício anterior, retorne o montate totcal C + juros simples
*/
const montanteSimples = ({ jurosSimples }) => (C, i, t) =>
  C + jurosSimples(C, i, t);

/*
Exercício 3: montaten com juros compostos

crie uma funcção montanteJurosComposto que recebe C (capital), i(juros em decimal) e t(tempo) e retorne o montante para o perído, dado pela fórmula: M = C (1 + i)^t
*/

const montanteJurosCompostos = (C, i, t) => C * Math.pow(1 + i, t);

/*
Exercício 4: juros compostos

O exercício anterios já retorna o montate(capital + juros). Crie uma funcão em juros.js que retorne somento os juros.
*/

const jurosCompostos = ({ montanteJurosCompostos }) => (C, i, t) =>
  montanteJurosCompostos(C, i, t) - C;

module.exports = {
  jurosSimples,
  montanteSimples: montanteSimples({ jurosSimples }),
  montanteJurosCompostos,
  jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
  pure: {
    montanteSimples,
    jurosCompostos
  }
};
