
const projetos = [
    {
        nome: "Nome: (Natural Disaster Watch) Python Fastapi, Javascript, Html, Css",
        descricao: "O Natural Disaster Watch é um sistema de monitoramento e prevenção de desastres Naturais em tempo real(com otimização de cache) de eventos naturais ativos ao redor do mundo.Ele utiliza a API EONET(Earth Observatory Natural Event Tracker) da NASA como fonte de dados.",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7392403251909922816/",
        linkRepo: "https://github.com/nicoladeveloper/Natural-Disaster-Watch", // Substitua pelo seu link
        imagemUrl: "img/Natural Disaster Watch.jpg" 
    },
    {
        nome: "Nome: (Kimetsu Memory) Html, Css, JavaScript",
        descricao: "Kimetsu Memory é um jogo da memória interativo desenvolvido com HTML, CSS e JavaScript puro, inspirado no anime Demon Slayer: Kimetsu no Yaiba. O objetivo é encontrar todos os pares de cartas correspondentes com personagens icônicos da série.",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7374461185842384897/", 
        linkRepo: "https://github.com/nicoladeveloper/Kimetsu-Memory",
        imagemUrl: "img/Kimetsu Memory.jpg" 
    },
    {
        nome: "Nome: (DataShow)",
        descricao: "Esse projeto serve para automatizar a leitura e unificação de dados de diferentes formatos em um único DataFrame (tabela_total) e gerar um grafico de faturamento das colunas escolhidas pelo usuário. Ideal para análises com muitos arquivos em uma pasta.",
        linkDemo: "https://github.com/nicoladeveloper/DataShow/blob/main/README.md", 
        linkRepo: "https://github.com/nicoladeveloper/DataShow/blob/main/README.md",
        imagemUrl: "img/DataShow.jpg" 
    },
       {
        nome: "Nome: (AllGames)",
        descricao: "Interface visual e interativa e funcional sobre diferentes consoles , com foco em design atrativo e funcionalidade. Esse projeto é uma página web de jogos, com Cabeçalho visual e Uma imagem de destaque (logo). Um menu de navegação com links para diferentes páginas funcionais de consoles",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7359367075640786946/", 
        linkRepo: "https://github.com/nicoladeveloper/AllGames/blob/main/README.md",
        imagemUrl: "img/AllGames.jpg" 
    }
];

const containerProjetos = document.getElementById('lista-projetos');


function renderizarProjetos() {
    containerProjetos.innerHTML = ''; 
    
    if (projetos.length === 0) {
        containerProjetos.innerHTML = '<p style="text-align: center;">Nenhum projeto adicionado ainda. Adicione ao array "projetos" no script.js!</p>';
        return;
    }

    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card-projeto';
        
        card.innerHTML = `
            <img src="${projeto.imagemUrl}" alt="Thumbnail do ${projeto.nome}" class="projeto-thumbnail">
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <div class="links-projeto">
                <a href="${projeto.linkDemo}" target="_blank">▶️ Demo</a> | 
                <a href="${projeto.linkRepo}" target="_blank">📚 GitHub</a>
            </div>
        `;
        containerProjetos.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();
    
    document.getElementById('btn-adicionar-projeto').addEventListener('click', () => {
        alert("Para adicionar um projeto de verdade, modifique o array 'projetos' no script.js e recarregue a página! (Ou implemente um formulário aqui)");
    });
});

