let op1 = 0;
let op2 = 0;
let total = 0;
let oper;
let newValue = true;

function insertaValor(valor) {
  let salida = document.getElementById("salida");
  if (newValue === false) {
    salida.innerHTML = salida.innerHTML + valor;
  } else {
    salida.innerHTML = valor;
    newValue = false;
  }
}

function calculos(valor) {
  let salida = document.getElementById("salida");

  if (valor === "=") {
    op2 = parseInt(salida.innerHTML);

    switch (oper) {
      case "+":
        total = op1 + op2;
        break;
      case "-":
        total = op1 - op2;
        break;
      case "*":
        total = op1 * op2;
        break;
      case "/":
        total = op1 / op2;
        break;
    }
    op1 = op2 = 0;
    oper = "";
  } else {
    switch (oper) {
      case "+":
        op1 = op1 + parseInt(salida.innerHTML);
        break;
      case "-":
        op1 = op1 - parseInt(salida.innerHTML);
        break;
      case "*":
        op1 = op1 * parseInt(salida.innerHTML);
        break;
      case "/":
        op1 = op1 / parseInt(salida.innerHTML);
        break;
      default:
        op1 = parseInt(salida.innerHTML);
    }
    oper = valor;
    salida.innerHTML = "";
    total = op1;
    newValue = true;
  }

  salida.innerHTML = total;
}

document.addEventListener(
  "click",
  function (e) {
    if (/bNum/.test(e.target.className)) {
      insertaValor(e.target.innerHTML);
    }
  },
  false
);

document.addEventListener(
  "click",
  function (e) {
    if (/bOper/.test(e.target.className)) {
      calculos(e.target.innerHTML);
    }
  },
  false
);

document.addEventListener(
  "click",
  function (e) {
    if (/bClear/.test(e.target.className)) {
      oper = "";
      document.getElementById("salida").innerHTML = op1 = op2 = total = 0;
      newValue = true;
    }
  },
  false
);
