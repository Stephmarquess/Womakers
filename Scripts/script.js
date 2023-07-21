function abrirJanela() {
    const janela = document.getElementById('projetos');
    janela.classList.add('abrir');


janela.addEventListener('click', (e) => {
    if(e.target.id == 'fechar' || e.target.id === 'projetos' ) {
        janela.classList.remove('abrir')
        }
    });
}

//QUIZ

function abrirQuiz() {
    const janelaquiz = document.getElementById('quiz');
    janelaquiz.classList.add('abrir');


janelaquiz.addEventListener('click', (e) => {
    if(e.target.id == 'fecharquiz' || e.target.id === 'quiz' ) {
        janelaquiz.classList.remove('abrir')
        }
    });
}
