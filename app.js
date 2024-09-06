console.log(info);
console.log(info[2].titulo);

let section = document.getElementById("resultados-pesquisa");
console.log(section);

for (let dado of info) {

section.innerHTML += `
    <div class="item-resultado">
        <h2>
            <a href="#">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
    </div>
`;

};