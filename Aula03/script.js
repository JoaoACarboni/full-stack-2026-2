// Variável para armazenar o nome
let nomeAluno = "";


// Vetor para armazenar as 4 notas
let notas = [0, 0, 0, 0];


// Formulário
const form = document.getElementById("formAluno");


// Campo do nome
const nomeInput = document.getElementById("nome");


// Campos das notas
const notaInputs = [

    document.getElementById("nota1"),

    document.getElementById("nota2"),

    document.getElementById("nota3"),

    document.getElementById("nota4")

];


// Campo que mostra a média
const mediaElemento =
    document.getElementById("media");


// Função para calcular a média
function calcularMedia() {

    let soma = 0;

    for (let i = 0; i < notas.length; i++) {

        soma += notas[i];

    }

    return soma / notas.length;
}


// Quando alguma nota for alterada
notaInputs.forEach((input, index) => {

    input.addEventListener("input", function () {

        // Salva a nota no vetor
        notas[index] = Number(input.value);


        // Verifica se todas foram preenchidas
        const todasPreenchidas =
            notaInputs.every(
                nota => nota.value !== ""
            );


        // Calcula a média automaticamente
        if (todasPreenchidas) {

            const media = calcularMedia();

            mediaElemento.textContent =
                media.toFixed(2);

        } else {

            mediaElemento.textContent = "-";

        }

    });

});


// Quando o formulário for enviado
form.addEventListener("submit", function (event) {

    // Impede o comportamento padrão
    event.preventDefault();


    // Salva o nome
    nomeAluno = nomeInput.value.trim();


    // Verifica o nome
    if (nomeAluno === "") {

        alert("Digite o nome do aluno.");

        return;

    }


    // Verifica se todas as notas foram preenchidas
    const todasPreenchidas =
        notaInputs.every(
            nota => nota.value !== ""
        );


    if (!todasPreenchidas) {

        alert("Preencha todas as notas.");

        return;

    }


    // Salva as notas no vetor
    notaInputs.forEach((input, index) => {

        notas[index] = Number(input.value);

    });


    // Calcula a média
    const media = calcularMedia();


    // Salva os dados
    sessionStorage.setItem(
        "nome",
        nomeAluno
    );

    sessionStorage.setItem(
        "media",
        media
    );


    // Vai para a página de resultado
    window.location.href =
        "resultado.html";

});