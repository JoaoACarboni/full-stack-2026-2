const inputCep = document.querySelector("#cep");

    function limparCampos() {
      document.querySelector("#rua").value = "";
      document.querySelector("#bairro").value = "";
      document.querySelector("#cidade").value = "";
      document.querySelector("#estado").value = "";
      document.querySelector("#ibge").value = "";
    }

    inputCep.addEventListener("blur", function () {
      const cep = inputCep.value.replace(/\D/g, "");

     // Verifica tamanho do CEP (8 dígitos)
      if (cep.length !== 8) {
        return;
      }

      const url = `https://viacep.com.br/ws/${cep}/json/`;

      fetch(url)
        .then(function (resposta) {
          return resposta.json(); 
        })
        .then(function (dados) {
          // Trata se o CEP não existe
          if (dados.erro) {
            alert("CEP não encontrado. Verifique o número digitado.");
            limparCampos();
            return;
          }

          document.querySelector("#rua").value = dados.logradouro;
          document.querySelector("#bairro").value = dados.bairro;
          document.querySelector("#cidade").value = dados.localidade;
          document.querySelector("#estado").value = dados.uf;
          document.querySelector("#ibge").value = dados.ibge;
        })
        .catch(function (erro) {
          console.error("Erro ao buscar o CEP:", erro);
        });
    });