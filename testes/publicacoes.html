---
---

@import "{{ site.theme }}";

# Publicações

<script>
function loadDBLPData() {
          // Defina a URL da API DBLP com seus parâmetros de consulta
          const query = 'Wellington Wagner Ferreira Sarmento'; // Substitua pela sua consulta desejada
          const apiUrl = `https://dblp.org/search/api/?q=${query}&format=jsonp`;

          // Crie um elemento de script dinamicamente para carregar os dados usando JSONP
          const scriptElement = document.createElement('script');
          scriptElement.src = apiUrl;
          document.body.appendChild(scriptElement);

          // JSONP chamará a função 'dblpCallback' quando os dados estiverem prontos
          window.dblpCallback = function(data) {
              // Manipule os dados recebidos da API
              exibirDadosDBLP(data);
          };
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
</script>
