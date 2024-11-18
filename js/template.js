// Variáveis globais
let total = 0;
let itemCount = 1;
let items = []; // Armazenar itens em um array

// Função para adicionar item
document.getElementById("form-adicionar").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os valores dos campos
    const descricao = document.getElementById("descricao").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const precoUnitario = parseFloat(document.getElementById("preco-unitario").value.replace("R$", "").replace(",", "."));
    const totalItem = quantidade * precoUnitario;

    // Atualiza o total
    total += totalItem;
    document.getElementById("total-valor").innerText = total.toFixed(2);

    // Cria o item e adiciona ao array
    const item = {
        id: itemCount++, // Incrementa o id do item
        descricao: descricao,
        quantidade: quantidade,
        precoUnitario: precoUnitario,
        totalItem: totalItem
    };
    items.push(item);

    // Atualiza a tabela (sem a coluna de remover)
    atualizarTabela();

    // Limpa os campos do formulário
    document.getElementById("descricao").value = '';
    document.getElementById("quantidade").value = '';
    document.getElementById("preco-unitario").value = '';
});

// Função para atualizar a tabela
function atualizarTabela() {
    const tabela = document.getElementById("itens-tabela");
    tabela.innerHTML = ''; // Limpa a tabela

    // Adiciona os itens à tabela
    items.forEach(item => {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", item.id); // Atribui o ID ao atributo "data-id"
        tr.innerHTML = `
            <td>${item.id}</td>
            <td>${item.descricao}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${item.precoUnitario.toFixed(2)}</td>
            <td>R$ ${item.totalItem.toFixed(2)}</td>
        `;

        // Adiciona o evento de clique para remover item
        tr.addEventListener("click", function() {
            removerItem(item.id);
        });

        tabela.appendChild(tr);
    });
}

// Função para remover item
function removerItem(id) {
    // Remove o item do array
    items = items.filter(item => item.id !== id);

    // Atualiza o total
    total = items.reduce((acc, item) => acc + item.totalItem, 0);
    document.getElementById("total-valor").innerText = total.toFixed(2);

    // Atualiza a tabela
    atualizarTabela();
}

// Função para gerar o PDF
document.getElementById("gerar-pdf").addEventListener("click", function() {
    const element = document.getElementById("orcamento");
    const button = document.getElementById("gerar-pdf");
    const addItemsSection = document.querySelector(".adicionar-itens");

    // Oculta o botão e a seção de "Adicionar Itens"
    button.style.display = 'none';
    addItemsSection.style.display = 'none';

    const options = {
        margin: 10, // Margens em mm
        filename: 'orcamento.pdf',
        image: { type: 'jpeg', quality: 1.0 }, // Qualidade máxima para imagens
        html2canvas: { scale: 3 }, // Aumenta a resolução da captura
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
        .set(options)
        .from(element)
        .save()
        .finally(() => {
            // Exibe o botão e a seção de "Adicionar Itens" novamente
            button.style.display = 'block';
            addItemsSection.style.display = 'block';
        });
});
