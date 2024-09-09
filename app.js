function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Não há resultados para a pesquisa. Por favor, verifique se você digitou algo.</p>";
        return;
    }

    let campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of info) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${titulo}</a>
                </h2>
                <p class="descricao-meta">${descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        section.innerHTML = "<p>Não há resultados para a pesquisa.</p>";
        return;
    }

    section.innerHTML = resultados;
};