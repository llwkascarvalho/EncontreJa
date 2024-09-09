let section = document.getElementById("resultado-pesquisa")

let resultados = ""

for (let dado of dados){
    resultados += `
        <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta"> ${dado.localizacao}</p>
            <p class="descricao-meta"> ${dado.horarioFuncionamento}</p>
            <a href=${dado.horarioFuncionamento} target="_blank">Clique aqui para saber mais</a>
        </div>
    `
}

section.innerHTML = resultados