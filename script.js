function loadDBLPData() {
    // Defina a URL do endpoint da API DBLP com seus parâmetros de consulta
    const query = 'aprendizado de máquina'; // Substitua pela sua consulta desejada
    const apiUrl = `https://dblp.org/search/api/?q=${query}&format=json`;

    // Faça uma solicitação HTTP para a API DBLP
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('A resposta da rede não foi bem-sucedida');
        }
        return response.json();
    })
    .then(data => {
        // Manipule os dados recebidos da API
        exibirDadosDBLP(data);
    })
    .catch(error => {
        console.error('Houve um problema com a operação de busca:', error);
    });
}

function exibirDadosDBLP(data) {
    const dblpDataElement = document.getElementById('dblpData');
    
    // Itere pelos resultados e exiba-os conforme necessário
    let resultHtml = '<h2>Resultados:</h2>';
    for (const entry of data.result.hits.hit) {
        resultHtml += `
            <p>Título: ${entry.info.title}</p>
            <p>Autores: ${entry.info.authors}</p>
            <p>Ano: ${entry.info.year}</p>
            <p>URL: <a href="${entry.info.url}" target="_blank">${entry.info.url}</a></p>
            <hr>
        `;
    }
    
    dblpDataElement.innerHTML = resultHtml;
}