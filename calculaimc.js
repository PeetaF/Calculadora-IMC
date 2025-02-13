let peso;
let altura;
let imc;
let resultado;
let imcArredondado;
let alturaNova;



function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;

    altura = document.getElementById('altura').value;

    erroPeso.textContent = "";
    erroAltura.textContent = "";
    erroPeso.style.display = "none";
    erroAltura.style.display = "none";

    let valido = true;

    if (!peso) {
        erroPeso.textContent = "Por favor, insira seu peso.";
        erroPeso.style.display = "inline";
        valido = false;
    } else if (isNaN(peso)) {
        erroPeso.textContent = "Por favor, insira apenas números.";
        erroPeso.style.display = "inline";
        valido = false;
    } else if (parseFloat(peso) <= 0) {
        erroPeso.textContent = "O peso deve ser maior que zero.";
        erroPeso.style.display = "inline";
        valido = false;
    }

    if (!altura) {
        erroAltura.textContent = "Por favor, insira sua altura.";
        erroAltura.style.display = "inline";
        valido = false;
    } else if (isNaN(altura)) {
        erroAltura.textContent = "Por favor, insira apenas números.";
        erroAltura.style.display = "inline";
        valido = false;
    } else if (parseFloat(altura) <= 0) {
        erroAltura.textContent = "A altura deve ser maior que zero.";
        erroAltura.style.display = "inline";
        valido = false;
    }

    if (!valido) {
        return;
    }
    alturaNova = altura / 100
    imc = peso / (alturaNova * alturaNova);
    imcArredondado = imc.toFixed(2);

    resultado = document.getElementById('resultado');
    

    if(imc < 17){
        resultado.innerHTML = " <br/> Seu resultado foi: " + imcArredondado + "<br/> Cuidado você está muito abaixo do peso !"
    } else if (imc >= 17 && imc <= 18.49){
        resultado.innerHTML = " <br/> Seu resultado foi: " + imcArredondado + "<br/> Cuidado você está um pouco abaixo do peso !"
    }else if (imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = " <br/> Seu resultado foi: " + imcArredondado + "<br/> Parabéns você está no peso ideal !"
    }else{
        resultado.innerHTML = " <br/> Seu resultado foi: " + imcArredondado + "<br/> Cuidado você está acima do peso !"
    }

    document.getElementById('peso') = '';
    document.getElementById('altura') = '';
}

