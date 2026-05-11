var n1 = 0;
var n2 = 0;

// ── MENÚ ──────────────────────────────
function iniciar() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('app').style.display  = 'block';
}

function volverMenu() {
    borrar();
    document.getElementById('app').style.display  = 'none';
    document.getElementById('menu').style.display = 'flex';
}

// ── SLIDERS ───────────────────────────
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

num1.oninput = () => {
    document.getElementById('vnum1').textContent = num1.value;
    n1 = parseFloat(num1.value);
};

num2.oninput = () => {
    document.getElementById('vnum2').textContent = num2.value;
    n2 = parseFloat(num2.value);
};

// ── OPERACIONES ───────────────────────
const suma = () => {
    document.getElementById('res').innerHTML = n1 + n2;
};

const resta = () => {
    document.getElementById('res').innerHTML = n1 - n2;
};

const multiplicacion = () => {
    document.getElementById('res').innerHTML = n1 * n2;
};

const division = () => {
    if (n2 === 0) {
        document.getElementById('res').innerHTML = 'Error: división entre 0';
        return;
    }
    document.getElementById('res').innerHTML = (n1 / n2).toFixed(2);
};

const borrar = () => {
    document.getElementById('vnum1').textContent = '1';
    document.getElementById('vnum2').textContent = '1';
    document.getElementById('res').innerHTML = 'RESULTADO';
    num1.value = 1;
    num2.value = 1;
    n1 = 0;
    n2 = 0;
};
