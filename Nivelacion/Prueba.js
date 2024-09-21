//Javascripst -> Lenguaje no Tipado
//
//F1 

//Tipo datos
// Primitivos y no primitivos

console.log(typeof "String");
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined); //No existe
console.log(typeof BigInt(5)); // se usa para calculos exactos - no se puede utilizar Math
console.log(typeof Symbol);

//No Primitivos
console.log(typeof Function);
console.log(typeof Object()); //{}
console.log(typeof null);
console.log(typeof Array());

//Tipos de variable


var VariableFea = 5; //Declarando
variableFea = 18; //Asignando
variableFea = 15;

const contante = "Constante";
var variable = "variable tiende a ser mas global";
let especifidad = "Es mucho mas especifica";

//var: Reasignable y Redeclarable
var almuerzo = "Bandeja Paisa";
var almuerzo = "Changua";
almuerzo = "Corrientazo";

//Let: No redeclarable pero si reasignable
let pizza = "Pizza Hawaina";
pizza = "Pizza Champiñones";

//Const: No redeclarable, no reasignable
const sopa = "Ajiaco";
//URL de una API, API KEY, Token , Contraseñas, Id^s, etc

//Estructura de Control
// ** Bloque: Se ejecuta segun una condiciones
let puedeEntrar = false
let puedeEntrar2 = true
if(puedeEntrar) {
    console.log("Haz algo");
}   else if (puedoEntrar2){
    console.log("Haz algo en condicional anidada");
} else {
    console.log("No haz nada");
}

//variable de iteraccion

//For: Ciclo contralado y numericos
for(let i = 0; i <10; i++){
    console.log(i);
}

//WHILE: ciclo no sea tan controlado 
while(false){
    //Mucha logica, desconocimiento cuantoas lo va hacer
}

//SWITCH: Control de una variable que puede tener muchos valores
let action = 'ADD';
switch(action) {
    case 'ADD':
        console.log('Agrega algo');
        break;
        case 'SUBTRAC':
            console.log('Resta algo');
            break;
            default:
                console.log('No se que hacer');
}


// Compuertas Logicas y Operadores

// IF: Condicional
// AND: Ampersand &&
console.log(true && false);
// OR: Pipes ||
console.log(true || false);
// NOT: Exclamation!
console.log(!true);

// Operadores de comparacion
// Igualdad de valor
console.log(5 == 5); //Operadores de igualdad true
console.log(5 != 5); //Operador de diferencia false
console.log('5' === 5); true 

//Igualdad de valor y Tipo
console.log('5' === 5); false
console.log('5' !== 4); true

console.log(5>5); false
console.log(5>=4); true

console.log(5<6); true
console.log(5 <=6); true

// Valores Folsys
// son variable que si evaluan como Booleanos, JS nos retorno false
console.log(!!undefined); false
console.log(!!null); false
console.log(!!""); false
console.log(!!NaN); false
console.log(!![]);
console.log(!!{});

let algunaVariable = "Variable"
function API(){
    return null;
}
function modificable(){
    algunaVariable = API();
    return !!algunaVariable;
}
console.log(modificala())

//FUNCIONES 
// son bloque de codigo que pueden ser Llamados
// Puedo  reutilizar,modularizar y centralizar  
// caracteristicas : Parametros

// Funciones feas
//funcion declaracion
function sumar(a,b) {
    return a + b;
}
console.log(sumar(5,5)); 

//Arrow Functions
//funcion de Expresion
const restar = (a,b) => {
    return a - b;
}
console.log(restar(9,5));

//Reasignables . Redeclarables 
function sumar(a,b){
    return a * b;
}

function Canasta()  {
    return arguments;
};
console.log(Canasta('Guayaba','Manzana','Banana','Melocoton'));