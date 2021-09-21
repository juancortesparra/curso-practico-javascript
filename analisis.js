// Helpers.
function esPar(numerito) {
  return (numerito % 2 === 0);
}
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Calculadora de mediana.
function medianaSalarios(list) {
  const mitad = parseInt(list.length / 2, 10);

  if (esPar(list.length)) {
    const personMitad1 = list[mitad - 1];
    const personMitad2 = list[mitad];

    const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
    return mediana;
  } else {
    const personMitad = list[mitad];
    return personMitad;
 }
}

// Mediana general.
const salariosEngl = England.map(
  function (person) {
 return person.salary;
  }
);

const salariosEnglSorted = salariosEngl.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);
const medianaGeneralEngl = medianaSalarios(salariosEnglSorted);
// Mediana del top 10%.

const spliceStart = (salariosEnglSorted.length * 90) / 100;
const spliceCount = salariosEnglSorted.length - spliceStart;

const salariosEnglTop10 = salariosEnglSorted.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Engl = medianaSalarios(salariosEnglTop10);

console.log({
  medianaGeneralEngl,
  medianaTop10Engl,
});
