// Codigo del cuadrado
console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Codigo del triangulo
console.group('Triangulos');

function alturaTriangulo(ladoa, ladob, base) {
  if (ladoa != ladob) {
    console.error('Los lados a y b son iguales');
    const altura = Math.sqrt(ladoa ** 2 - base ** 2 / 4);
    return altura;
 }
  else {
    alert('Error: El triangulo debe tener menos de dos lados iguales');
  }
}
function alturaTrianguloIsosceles(trianguloGrandeladoA, trianguloGrandeLadoB) 
{
  if (trianguloGrandeladoA != trianguloGrandeLadoB) {
    console.error('Los lados a y b no son iguales');
  } else {
    let trianguloPequenoLadoA;
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeladoA;
    const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;
    const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);
    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
// 'Los lados del triangulo miden: '
// + ladoTriangulo1
// + "cm, "
// + ladoTriangulo2
// + "cm, "
// + baseTriangulo
// + 'cm',
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm" );

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log('El perimetro del triangulo es: ' + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Codigo del circulo
// console.group('Circulo');

// Radio
// const radioCirculo = 4;
// console.log('El radio del circulo es: ' + radioCirculo + 'cm');

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
// const diametroCirculo = radioCirculo * 2;
// console.log('El diametro del circulo es: ' + diametroCirculo + 'cm');

// PI
const PI = Math.PI;
console.log('PI es: ' + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// const perimetroCirculo = diametroCirculo * PI;
// console.log('El perimetro del circulo es: ' + perimetroCirculo + 'cm');

// Area

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log('El Area del circulo es: ' + areaCirculo + 'cm^2');

console.groupEnd();

// Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}