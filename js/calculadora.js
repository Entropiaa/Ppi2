function custoFix(){
    Swal.fire({
        title: "Custos fixos",
        text: "Custos fixos são aqueles que não variam com a quantidade de produtos produzidos. Exemplo: Aluguel do estabelecimento",
        imageUrl: "./img/image2.png",
        imageWidth: 270,
        imageHeight: 250,
        imageAlt: "Custom image"
    });
}

function custoVariaveel(){
    Swal.fire({
        title: "Custos Variáveis",
        text: "Custos variáveis são aqueles que mudam conforme a quantidade de produtos produzidos. Eles aumentam ou diminuem com o volume de produção. Exemplo: Tecidos",
        imageUrl:  "./img/image.png",
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: "Custom image"
    });
}

function salarioDesejado(){
    Swal.fire({
        title: "Salário Desejado",
        text: "Para definir o valor da sua hora baseada apenas no salário desejado, divida o valor que você quer receber pelo número de horas que pretende trabalhar no mês. Por exemplo, se deseja ganhar R$2000 e trabalha 160 horas mensais, o valor da sua hora será R$2000 ÷ 160 = R$12,50.",
        imageUrl:  "./img/image3.png",
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: "Custom image"
    });
}

function horasTrabalhadas(){
    Swal.fire({
        title: "Horas trabalhadas",
        text: "Para artesãs, o valor da hora trabalhada ajuda a definir preços justos e garantir retorno financeiro. Para calculá-lo, estabeleça quanto quer ganhar no mês e divida pelo total de horas que pretende trabalhar. Esse valor cobre seu tempo, habilidade e esforço.",
        imageUrl:  "./img/image4.png",
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: "Custom image"
    });
}

function custoProducaoo(){
    Swal.fire({
        title: "Custo de produção",
        text: "Para definir o preço de venda, calcule o custo de produção de cada peça somando custos fixos e variáveis.",
        imageUrl:  "./img/image5.png",
        imageWidth: 270,
        imageHeight: 250,
        imageAlt: "Custom image"
    });
}

function timeProducao(){
    Swal.fire({
        title: "Tempo de produção",
        text: "O tempo de produção artesanal é o período necessário para fabricar um produto manualmente, usando técnicas tradicionais e menos automação. Esse tempo tende a ser maior devido à complexidade do processo, ao uso de materiais específicos e à habilidade do artesão. O tempo de produção influencia o valor e a exclusividade do produto.",
        imageUrl:  "./img/image6.png",
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: "Custom image"
    });
}



var custoFixo = 0
var custoVariavel = 0
var salario = 0
var horaDeTrabalho = 0
var custoProducao = 0
var tempoProducao = 0


document.getElementById("custoFixo").addEventListener("input", function (e) {
    custoFixo = parseFloat(e.target.value) || 0; // Atualiza a variável
});

document.getElementById("custoVariavel").addEventListener("input", function (e) {
    custoVariavel = parseFloat(e.target.value) || 0;
});

document.getElementById("salarioDesejado").addEventListener("input", function (e) {
    salario = parseFloat(e.target.value) || 0;
});

document.getElementById("horasTrabalhadas").addEventListener("input", function (e) {
    horaDeTrabalho = parseFloat(e.target.value) || 0;
});

document.getElementById("custoProducao").addEventListener("input", function (e) {
    custoProducao = parseFloat(e.target.value) || 0;
});
document.getElementById("tempoProducao").addEventListener("input", function (e) {
    tempoProducao = parseFloat(e.target.value) || 0;
});


function calcular() {
    // Valida o cálculo da hora para evitar divisão por zero
    var calculoHora = horaDeTrabalho > 0 ? (custoFixo + custoVariavel + salario) / horaDeTrabalho : 0;

    // Se calculoHora for 0, o preço do produto será apenas o custo de produção
    var calculoProduto = calculoHora > 0 ? custoProducao + (calculoHora * tempoProducao) : custoProducao;

    // Atualiza o valor da hora no DOM
    if (!isNaN(calculoHora) && calculoHora > 0) {
        document.getElementById('precoHora').innerText = `R$ ${calculoHora.toFixed(2)}`;
        console.log("Calculo realizado e atualizado na pagina"+'['+ calculoHora +']')
    } else {
        document.getElementById('precoHora').innerText = "R$0.00";
        console.log("Calculo realizado e retornado 0")
    }

    // Atualiza o preço do produto no DOM
    if (!isNaN(calculoProduto) && calculoProduto > 0) {
        document.getElementById('precoProduto').innerText = `R$ ${calculoProduto.toFixed(2)}`;
        console.log("Calculo realizado e atualizado na pagina"+'['+ calculoProduto +']')
    } else {
        document.getElementById('precoProduto').innerText = "R$0.00";
        console.log("Calculo realizado e retornado 0")
    }
}