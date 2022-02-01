const calcular = document.getElementById('calcular');

function imc () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'Magreza';
        }else if (valorIMC < 24.9) {
            classificacao = 'Normal';
        }else if (valorIMC < 30){
            classificacao = 'Sobrepeso';
        }else {
            classificacao = 'Obesidade';
        }

        resultado.textContent = `Seu IMC é ${valorIMC}kg/m2 e classificado como ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }

}

calcular.addEventListener('click', imc);