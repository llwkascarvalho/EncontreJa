function pesquisar() {
  let section = document.getElementById("resultado-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Ops! Você precisa digitar um lugar.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";

  for (let dado of dados) {
    let nome = dado.nome.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.join(" ").toLowerCase();
    if (
      nome.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      resultados += `
        <div class="item-resultado">
            <h2>${dado.nome}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta"> ${dado.localizacao}</p>
            <p class="descricao-meta"> ${dado.horarioFuncionamento}</p>
            <a href=${dado.horarioFuncionamento} target="_blank">Clique aqui para saber mais</a>
        </div>
        `;
    }
  }

  if (!resultados) {
    resultados = "<p>Não foi possível encontrar um lugar</p>";
  }
  section.innerHTML = resultados;
}
