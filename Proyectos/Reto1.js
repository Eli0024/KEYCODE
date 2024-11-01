const simbolosPorLetra = {
    "?": "A", 
    "[": "E", 
    "\\": "I", 
    "~": "O", 
    "+": "U", 
    "¬": "ó", 
    "(": " ", 
    ")": " ", 
    "]": "N", 
    "¿": "Y", 
    "`": "C", 
    "=": "T", 
    "^": "M", 
    "-": "H",
    "*": "P",
    "/": "L",
    "{": "S",
    ";": "F",
    "$": "R",
    "_": "Z",
    "%": "B",
    "#": "V",
    "}": "Q",
    "!": "J",
    "¡": "D",
};

function desencriptarSimbolos(texto) {
    let resultado = '';
    let simboloActual = '';

    for (let i = 0; i < texto.length; i++) {
        simboloActual += texto[i];

        
        if (simbolosPorLetra[simboloActual]) {
            resultado += simbolosPorLetra[simboloActual];
            simboloActual = ''; 
        }

        
        if (i < texto.length - 1 && texto[i] === '(' && texto[i + 1] === ')') {
            resultado += ' ';
            i++; 
            simboloActual = ''; 
        }
    }

    return resultado;
}

const mensajeEncriptado = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";
const mensajeDesencriptado = desencriptarSimbolos(mensajeEncriptado);

console.log("Mensaje desencriptado:", mensajeDesencriptado);
