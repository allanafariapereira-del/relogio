const passos = document.querySelectorAll('.passo');
const botoes = document.querySelectorAll('.btn-proximo');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const proximo = botao.getAttribute('data-proximo');

        document.querySelector('.passo.ativo').classList.remove('ativo');

        document.getElementById(`passo-${proximo}`).classList.add('ativo');
    });
});