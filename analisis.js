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

function esPar(numerito) {
  return (numerito % 2 === 0);
}
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function medianaSalarios(list) {
  const mitad = parseInt(list.length / 2);

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

console.log(
  medianaSalarios(salariosEnglSorted)
);