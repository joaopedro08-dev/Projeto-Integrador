const instalarArquivo = () => {
    alert("Estamos preparando o arquivo para você!");
}

const reiniciarMensagem = () => {
    document.getElementById("info_message").textContent = "";
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

const mostrarInfo = (area) => {
    let mensagem = "";
    switch (area) {
        case "Braço esquerdo":
        case "Braço direito":
            mensagem = "Os anabolizantes podem fazer os músculos dos braços, como bíceps e tríceps, crescerem bem rápido. Porém, o crescimento acelerado pode causar estrias na pele.";
            break;
        case "Peito":
            mensagem = "No peito, os anabolizantes aumentam bastante os músculos peitorais. Um efeito colateral comum em homens é a ginecomastia, que é o crescimento do tecido mamário.";
            break;
        case "Pernas":
            mensagem = "Nas pernas, como quadríceps, isquiotibiais e panturrilhas, os anabolizantes também promovem ganho muscular. Assim como nos braços, estrias podem aparecer devido ao crescimento rápido.";
            break;
        default:
            mensagem = `Não temos informações específicas sobre a área: ${area}.`;
            break;
    }
    document.getElementById("info_message").textContent = mensagem;
}

const mostrarEfeitos = (orgao) => {
    let mensagem = "";
    switch (orgao) {
        case "Coração":
            mensagem = "No coração, os anabolizantes podem elevar a pressão arterial, alterar o colesterol, engrossar as paredes do coração e aumentar o risco de infarto ou AVC.";
            break;
        case "Fígado":
            mensagem = "No fígado, especialmente com anabolizantes orais, há risco de toxicidade, que pode levar a problemas como hepatite medicamentosa ou, em casos raros, tumores no fígado.";
            break;
        case "Cabeça":
            mensagem = "Na cabeça, os anabolizantes podem causar acne severa na pele e, em homens predispostos, acelerar a queda de cabelo. Psicologicamente, é comum sentir mudanças de humor, irritação ou até agressividade.";
            break;
        default:
            mensagem = `Não temos informações específicas sobre os efeitos dos anabolizantes no(a) ${orgao}.`;
            break;
    }
    document.getElementById("info_message").textContent = mensagem;
}