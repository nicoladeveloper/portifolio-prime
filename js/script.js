const projetos = [
    {
        nome: "Nome: (Natural Disaster Watch) Python Fastapi, Javascript, Html, Css",
        descricao: "O Natural Disaster Watch é um sistema de monitoramento e prevenção de desastres Naturais em tempo real(com otimização de cache) de eventos naturais ativos ao redor do mundo.Ele utiliza a API EONET(Earth Observatory Natural Event Tracker) da NASA como fonte de dados.",
        linkDemo: "https://www.linkedin.com/posts/nicolas-oliveira-8b12a02b5_esg-prevenaexaetodedesastres-inteligenciaartificial-activity-7392403251909922816-Q3WY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuu1wUBxI2lVX7dnMt4qduKorbjn_pquy0",
        linkRepo: "https://github.com/nicoladeveloper/Natural-Disaster-Watch", 
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
        nome: "Nome: (DataShow), Python + OpenIA",
        descricao: "Esse projeto serve para automatizar a leitura e unificação de dados de diferentes formatos em um único DataFrame (tabela_total) e gerar um grafico de faturamento das colunas escolhidas pelo usuário. Ideal para análises com muitos arquivos em uma pasta.",
        linkDemo: "https://github.com/nicoladeveloper/DataShow/blob/main/README.md", 
        linkRepo: "https://github.com/nicoladeveloper/DataShow/blob/main/README.md",
        imagemUrl: "img/DataShow.jpg" 
    },
       {
        nome: "Nome: (AllGames) Html, Css, JavaScript",
        descricao: "Interface visual e interativa e funcional sobre diferentes consoles , com foco em design atrativo e funcionalidade. Esse projeto é uma página web de jogos, com Cabeçalho visual e Uma imagem de destaque (logo). Um menu de navegação com links para diferentes páginas funcionais de consoles",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7359367075640786946/", 
        linkRepo: "https://github.com/nicoladeveloper/AllGames/blob/main/README.md",
        imagemUrl: "img/AllGames.jpg" 
    },
        {
         nome: "Nome: (SQL search)",
         descricao: "Executar o arquivo Script Filmes.sql em seu banco de dados SQL Server, presente na pasta Scripts deste repositórioe realizar 12 consultas ao banco de dados, cada uma retornando um tipo de informação. O seu banco de dados está modelado da seguinte maneira: Filmes, Atores, Generos, ElencoFilmetor, FilmesGenero",
         linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7366233123585454080/", 
         linkRepo: "https://github.com/nicoladeveloper/Filmes-SQL-server",
         imagemUrl: "img/Sql projeto.jpeg" 
    },
        {
         nome: "Nome: (Hosting System) C# .NET",
         descricao: "Sistema de hospedagem, que é usado para realizar uma reserva em um hotel. O programa cálcula corretamente os valores dos métodos da classe Reserva, que traz a quantidade de hóspedes e o valor da diária, concedendo um desconto de 10% para caso a reserva seja para um período maior que 10 dias.",
         linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7365168540716335104/", 
         linkRepo: "https://github.com/nicoladeveloper/Sistema-de-Hopedagem",
         imagemUrl: "img/Sistema de Hospedagem.jpg"
    },
        {
         nome: "Nome: (Cellular System) C# .NET",
         descricao: "Sistema em .NET, do tipo console, mapeando uma classe abstrata e classes específicas para dois tipos de celulares: Nokia e iPhone. A classe Smartphont é abstrata, não permitindo instanciar e servindo apenas como modelo. A classe Nokia e Iphone são classes filhas de Smartphone. O método InstalarAplicativo é sobrescrito na classe Nokia e iPhone, pois ambos possuem diferentes maneiras de instalar um aplicativo.",
         linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7365585051461312512/", 
         linkRepo: "https://github.com/nicoladeveloper/Sistema-Celulares-Poo",
         imagemUrl: "img/Sistema de Celulares.jpg"
    },
        
        {
         nome: "Nome: (Random Password) Python, Random",
         descricao: "Este projeto é um Gerador de Senhas simples implementado em Python, que permite ao usuário criar senhas personalizadas com base em critérios de composição e tamanho definidos. O principal objetivo é fornecer uma ferramenta rápida e customizável para criar senhas fortes e aleatórias de acordo com as necessidades específicas do usuário, promovendo assim uma melhor segurança de contas e dados.",
         linkDemo: "https://www.linkedin.com/posts/nicolas-oliveira-8b12a02b5_novoprojeto-python-tech-activity-7360882449997828096-RH7N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuu1wUBxI2lVX7dnMt4qduKorbjn_pquy0", 
         linkRepo: "https://github.com/nicoladeveloper/AppideasBr/tree/main",
         imagemUrl: "img/AppIdeas.jpg"
    },
        {
         nome: "Nome: (Zip code search) Javascript, HtML, Css",
         descricao: "Valida a entrada do usuário no campo #cep, permitindo apenas números. Quando o botão é clicado (função buscarCep): Faz uma requisição à API ViaCEP. Se o CEP for encontrado: Mostra logradouro, bairro, cidade e estado. Se for inválido ou não encontrado: Mostra uma mensagem de erro. Em caso de erro de rede, exibe uma mensagem adequada no console e na tela.",
         linkDemo: "https://github.com/nicoladeveloper/ViaCepProjeto/blob/main/README.md", 
         linkRepo: "https://github.com/nicoladeveloper/ViaCepProjeto/blob/main/script.js",
         imagemUrl: "img/ViaCep.jpg"
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

function iniciarCarrosselArrastavelCertificados() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const btnAnterior = document.getElementById('btn-anterior-certificado');
    const btnProximo = document.getElementById('btn-proximo-certificado');
    let isDragging = false;
    let startX;
    let scrollLeft;

    carouselWrapper.addEventListener('mousedown', (e) => {
        isDragging = true;
        carouselWrapper.classList.add('active');
        startX = e.pageX - carouselWrapper.offsetLeft;
        scrollLeft = carouselWrapper.scrollLeft;
    });

    carouselWrapper.addEventListener('mouseleave', () => {
        isDragging = false;
        carouselWrapper.classList.remove('active');
    });

    carouselWrapper.addEventListener('mouseup', () => {
        isDragging = false;
        carouselWrapper.classList.remove('active');
    });

    carouselWrapper.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselWrapper.offsetLeft;
        const walk = (x - startX) * 2; 
        carouselWrapper.scrollLeft = scrollLeft - walk;
    });

    carouselWrapper.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - carouselWrapper.offsetLeft;
        scrollLeft = carouselWrapper.scrollLeft;
    });

    carouselWrapper.addEventListener('touchend', () => {
        isDragging = false;
    });

    carouselWrapper.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - carouselWrapper.offsetLeft;
        const walk = (x - startX) * 2; 
        carouselWrapper.scrollLeft = scrollLeft - walk;
    });
    
    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            const item = document.querySelector('.certificado-item');
            if (item) {
                const scrollAmount = item.offsetWidth + 30; 
                carouselWrapper.scrollBy({
                    left: -scrollAmount, 
                    behavior: 'smooth'
                });
            }
        });
    }

    if (btnProximo) {
        btnProximo.addEventListener('click', () => {
            const item = document.querySelector('.certificado-item');
            if (item) {
                const scrollAmount = item.offsetWidth + 30; 
                carouselWrapper.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();

    const btnAdicionarProjeto = document.getElementById('btn-adicionar-projeto');
    if (btnAdicionarProjeto) {
        btnAdicionarProjeto.addEventListener('click', () => {
            alert("Para adicionar um projeto de verdade, modifique o array 'projetos' no script.js e recarregue a página!");
        });
    }

    iniciarCarrosselArrastavelCertificados();

    // 🎥 Lazy load dos vídeos
    const videos = document.querySelectorAll(".bg-video");

    videos.forEach(video => {
        const source = video.querySelector("source");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    source.src = source.dataset.src;
                    video.load();
                    video.play();
                    observer.unobserve(video);
                }
            });
        });

        observer.observe(video);
        const textos = document.querySelectorAll(".animar-texto");

        textos.forEach((el, index) => {
        setTimeout(() => {
        el.classList.add("ativo");
    }, index * 300); // delay em sequência
});
    });
});