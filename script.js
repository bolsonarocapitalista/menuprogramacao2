function mostrarDisciplina(disciplinaId) {
    const secoes = document.querySelectorAll('.disciplina');
    secoes.forEach(secao => secao.classList.add('hidden'));
    document.getElementById(disciplinaId).classList.remove('hidden');
  }
  
  // Scroll suave para navegação interna
  document.querySelectorAll('.nav-interna a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  