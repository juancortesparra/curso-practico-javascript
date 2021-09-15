const lista1 = [
  1,
  2,
  3,
  4,
  5,
  6,
  4,
  5,
  6,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
     if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
       lista1Count[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
    return elementoA[1] - elementoB[1];
  }
);

const moda = lista1Array[lista1Array.length - 1];

//Promedio Ponderado para sacar la media de un estudiante de sus notas

const notes = [
  {
    course: "aviation",
    note: 10,
    credit: 2,
  },
  {
    course: "programing",
    note: 8,
    credit: 5,
  },
  {
    course: "AI",
    note: 7,
    credit: 5,
  },
];
// Aqui multiplicamos cada nota con sus creditos
const notesWithCredit = notes.map(function(noteObject) {
  return noteObject.note * noteObject.credit;
});

// Aqui sumamos todos los elementos de la multiplicacion

const sumOfNotesWithCredit = notesWithCredit.reduce(
  function(sum = 0, newVal) {
    return sum + newVal;
  }
);
// Sumar todos los pesos (creditos)
const credits = notes.map(function(noteObject) {
  return noteObject.credit
});
const sumOfCredits = credits.reduce(
  function (sum = 0,newVal) {
    return sum + newVal;
  }
);

// Dividir ambas variables (sumas)
const promedio promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
