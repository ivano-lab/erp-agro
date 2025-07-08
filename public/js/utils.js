function ExibirNomePagina() {
  const titulo = document.title;
  const elementoTitulo = document.getElementById('page-title');
  if (elementoTitulo) { 
    elementoTitulo.textContent = titulo;
  }
}

window.addEventListener('DOMContentLoaded', ExibirNomePagina);