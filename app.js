let section = document.getElementById("resultado-pesquisa")

for (let dado of dados){
    section.innerHTML += `
        <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta"> ${dado.localizacao}</p>
            <p class="descricao-meta"> ${dado.horarioFuncionamento}</p>
            <a href=${dado.horarioFuncionamento} target="_blank">Clique aqui para saber mais</a>
        </div>
    `
}