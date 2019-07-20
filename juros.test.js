const juros = require("./juros");

test("jurosSimples", () => {
  const C = 100;
  const i = 0.1;
  const t = 1;
  const jurosEsperados = 10;
  const jurosCalc = juros.jurosSimples(C, i, t);
  expect(jurosCalc).toBe(jurosEsperados);
});

test("montanteSimples", () => {
  const C = 100;
  const i = 0.1;
  const t = 1;
  const montanteEsperados = 110;
  const jurosSimples = jest.fn();
  jurosSimples.mockImplementation(() => 10);
  const montanteSimples = juros.pure.montanteSimples({ jurosSimples });
  const montante = montanteSimples(C, i, t);
  console.log("montante", montante);
  expect(jurosSimples.mock.calls[0]).toEqual([C, i, t]);
  expect(montante).toBe(montanteEsperados);
});

test("montanteJurosCompostos", () => {
  const C = 1000;
  const i = 0.1;
  const t = 1;
  const jurosEsperados = 1100;
  const jurosCalc = juros.montanteJurosCompostos(C, i, t);
  expect(jurosCalc).toBe(jurosEsperados);
});

test("jurosCompostos", () => {
  const C = 1000;
  const i = 0.1;
  const t = 1;
  const montanteJurosCompostos = jest.fn();
  montanteJurosCompostos.mockImplementation(() => 1100);

  const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos });
  const jurosCalc = jurosCompostos(C, i, t);

  expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t]);
  expect(jurosCalc).toBe(100);
});
