document.addEventListener("DOMContentLoaded", function () {
    const calcularButton = document.getElementById("calcular");
    const resultadoRotulo = document.getElementById("resultado-rotulo");
    const resultadoAlca = document.getElementById("resultado-alca");
    const resultadoEmbaladora = document.getElementById("resultado-embaladora");
    const resultadoPaletizadora = document.getElementById("resultado-paletizadora");

    calcularButton.addEventListener("click", function () {
        const quantiaRotuloInput = document.getElementById("rotulo");
        const quantiaAlcaInput = document.getElementById("alca");
        const quantiaPlasticoEmbaladoraInput = document.getElementById("plastico-embaladora");
        const quantiaPlasticoPaletizadoraInput = document.getElementById("plastico-paletizadora");

        const quantiaRotulo = parseInt(quantiaRotuloInput.value);
        const quantiaAlca = parseInt(quantiaAlcaInput.value);
        const quantiaPlasticoEmbaladora = parseFloat(quantiaPlasticoEmbaladoraInput.value);
        const quantiaPlasticoPaletizadora = parseFloat(quantiaPlasticoPaletizadoraInput.value);

        // Verifique se algum dos campos está vazio
        if (
            isNaN(quantiaRotulo) ||
            isNaN(quantiaAlca) ||
            isNaN(quantiaPlasticoEmbaladora) ||
            isNaN(quantiaPlasticoPaletizadora)
        ) {
            alert("Por favor, preencha todos os campos com valores numéricos.");
            return;
        }

        const resultadoRotuloValue = quantiaRotulo * 2500;
        const resultadoAlcaValue = quantiaAlca * 7143;
        const resultadoEmbaladoraValue = quantiaPlasticoEmbaladora * 27.07;
        const resultadoPaletizadoraValue = quantiaPlasticoPaletizadora * 16.91;

        resultadoRotulo.textContent = `Rótulo: ${resultadoRotuloValue}`;
        resultadoAlca.textContent = `Alça: ${resultadoAlcaValue}`;
        resultadoEmbaladora.textContent = `Plástico Embaladora: ${resultadoEmbaladoraValue}`;
        resultadoPaletizadora.textContent = `Plástico Paletizadora: ${resultadoPaletizadoraValue}`;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const calcularDiferencaButton = document.getElementById("calcular-diferenca");
    const dataInicialInput = document.getElementById("data-inicial");
    const dataFinalInput = document.getElementById("data-final");
    const resultadoDiferenca = document.getElementById("resultado-diferenca");

    calcularDiferencaButton.addEventListener("click", function () {
        const dataInicial = new Date(dataInicialInput.value);
        const dataFinal = new Date(dataFinalInput.value);

        if (!isNaN(dataInicial.getTime()) && !isNaN(dataFinal.getTime())) {
            if (dataFinal >= dataInicial) {
                const umDiaEmMilissegundos = 24 * 60 * 60 * 1000; // Um dia em milissegundos
                const diferencaEmMilissegundos = dataFinal - dataInicial;
                const diferencaEmDias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);

                resultadoDiferenca.textContent = `Diferença em dias: ${diferencaEmDias} dias`;
            } else {
                resultadoDiferenca.textContent = "A data final não pode ser anterior à data inicial.";
            }
        } else {
            resultadoDiferenca.textContent = "Por favor, insira datas válidas.";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLink = document.getElementById("menu-link");

    menuToggle.addEventListener("click", function () {
        const menuHamburger = menuToggle.parentElement;
        if (menuHamburger.classList.contains("menu-open")) {
            menuHamburger.classList.remove("menu-open");
        } else {
            menuHamburger.classList.add("menu-open");
        }
    });

    // Fechar o menu se o usuário clicar em qualquer lugar fora dele
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !menuLink.contains(event.target)) {
            const menuHamburger = menuToggle.parentElement;
            menuHamburger.classList.remove("menu-open");
        }
    });
});