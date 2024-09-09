function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "Não há resultados para a pesquisa. Por favor, verifique se você digitou algo.";
        return;
    }

    let campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of info) {
        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)) {
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
            `;
        }
    }

    section.innerHTML = resultados;
};