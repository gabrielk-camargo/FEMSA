document.addEventListener("DOMContentLoaded", function () {
  const calcularButton = document.getElementById("calcular");
  const imprimirButton = document.getElementById("imprimir");
  const resultadoRotulo = document.getElementById("resultado-rotulo");
  const resultadoAlca = document.getElementById("resultado-alca");
  const resultadoEmbaladora = document.getElementById("resultado-embaladora");
  const resultadoPaletizadora = document.getElementById(
    "resultado-paletizadora"
  );

  calcularButton.addEventListener("click", function () {
    const quantiaRotuloInput = document.getElementById("rotulo");
    const quantiaAlcaInput = document.getElementById("alca");
    const quantiaPlasticoEmbaladoraInput = document.getElementById(
      "plastico-embaladora"
    );
    const quantiaPlasticoPaletizadoraInput = document.getElementById(
      "plastico-paletizadora"
    );

    const quantiaRotulo = parseInt(quantiaRotuloInput.value);
    const quantiaAlca = parseInt(quantiaAlcaInput.value);
    const quantiaPlasticoEmbaladora = parseFloat(
      quantiaPlasticoEmbaladoraInput.value
    );
    const quantiaPlasticoPaletizadora = parseFloat(
      quantiaPlasticoPaletizadoraInput.value
    );

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
    const resultadoEmbaladoraValue = (quantiaPlasticoEmbaladora * 27.07).toFixed(2);
    const resultadoPaletizadoraValue = (quantiaPlasticoPaletizadora * 16.91).toFixed(2);

    resultadoRotulo.textContent = `Rótulo: ${resultadoRotuloValue}`;
    resultadoAlca.textContent = `Alça: ${resultadoAlcaValue}`;
    resultadoEmbaladora.textContent = `Plástico Embaladora: ${resultadoEmbaladoraValue}`;
    resultadoPaletizadora.textContent = `Plástico Paletizadora: ${resultadoPaletizadoraValue}`;

    // Exibir uma caixa de diálogo de confirmação
    const imprimirResultados = confirm("Deseja imprimir os resultados?");

    if (imprimirResultados) {
      // Definir o nome do arquivo ao salvar a impressão

      const nomeDoArquivo = `${getDataFormatada()}_linha_5_material`;
      function getDataFormatada() {
        const dataAtual = new Date();
        const dia = String(dataAtual.getDate()).padStart(2, "0");
        const mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Lembre-se de que os meses são base 0 (janeiro é 0)
        const ano = dataAtual.getFullYear();
        return `${dia}/${mes}/${ano}`;
      }

      // Abra a caixa de diálogo de impressão do navegador
      const win = window.open("", "_blank");
      win.document.write(`
                <html>
                <head>
                    <title>${nomeDoArquivo}</title>
                </head>
                <body>
                    <pre>
                     
                      <img  style="width: 200px;" src="femsa-logo.png" alt="logo femsa" />

                        Quantia:

                        Rótulo: ${quantiaRotulo} Und
                        Alça: ${quantiaAlca} Und
                        Bulbina Embaladora: ${quantiaPlasticoEmbaladora} Kg
                        Bulbina Paletizadora: ${quantiaPlasticoPaletizadora} Kg
                        
                       Total:
                       
                        Rótulo: ${resultadoRotuloValue} Und
                        Alça: ${resultadoAlcaValue} Und
                        Plástico Embaladora: ${resultadoEmbaladoraValue} Kg
                        Plástico Paletizadora: ${resultadoPaletizadoraValue} Kg
                    </pre>
                </body>
                </html>
            `);
      win.document.close();
      win.print();
      win.close();
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
