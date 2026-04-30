const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
 
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
 
class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 166, 35, ${this.opacity})`;
        ctx.fill();
    }
}
 
for (let i = 0; i < 40; i++) particles.push(new Particle());
 
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(245, 166, 35, ${0.03 * (1 - dist / 100)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}

 
 
// ===== HEADER SCROLL =====
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
 
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 50);
    backToTop.classList.toggle('show', scrollY > 500);
});
 
if (backToTop) backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
 
// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
 
revealElements.forEach(el => revealObserver.observe(el));
 
// ===== NUMBER COUNTER =====
const statNums = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const count = parseInt(target.getAttribute('data-count'));
            let current = 0;
            const increment = count / 40;
            const timer = setInterval(() => {
                current += increment;
                if (current >= count) {
                    target.textContent = count;
                    clearInterval(timer);
                } else {
                    target.textContent = Math.floor(current);
                }
            }, 40);
            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });
 
statNums.forEach(el => counterObserver.observe(el));

const projetos = [
     {
        nome: "MaxTenis",
        descricao: "Plataforma de E-commerce moderna e responsiva para a venda de tênis premium com animações avançadas e experiência de usuário excepcional..",
        linkDemo: "https://github.com/nicoladeveloper/DataShow/blob/main/README.md",
        linkRepo: "https://github.com/nicoladeveloper/DataShow/blob/main/README.md",
        video: "video/datashow.mp4",
        imagem: "img/projetos/maxtenis.jpg",
        tags: ["html", "css", "JavaScript"]
    },
    {
        nome: "NovaBarber",
        descricao: "Site de barbearia premium com design moderno, animações fluidas e sistema de agendamento.",
        linkDemo: "https://www.linkedin.com/posts/nicolas-oliveira-8b12a02b5_esg-prevenaexaetodedesastres-inteligenciaartificial-activity-7392403251909922816-Q3WY",
        linkRepo: "https://github.com/nicoladeveloper/Natural-Disaster-Watch",
        video: "video/disaster.mp4",
        imagem: "img/projetos/novabarber.jpg",
        tags: ["Angular", "html", "Css ", "JavaScript"                  ]
    },
    {
        nome: "C6BANK", 
        descricao: "Uma landing page moderna e interativa do C6 Bank com efeitos 3D avançados e animações fluidas. Showcase completo de serviços bancários: contas, cartões, investimentos e experiências..",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7374461185842384897/",
        linkRepo: "https://github.com/nicoladeveloper/C6BANK/blob/main/index.html",
        video: "video/kimetsu.mp4",
        imagem: "img/projetos/C6Bank.jpg",
        tags: ["JavaScript", "CSS", "HTML"]
    },
   
    {
        nome: "AllGames",
        descricao: "Interface visual e interativa sobre diferentes consoles com design atrativo e navegacao funcional.",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7359367075640786946/",
        linkRepo: "https://github.com/nicoladeveloper/AllGames/blob/main/README.md",
        video: "video/allgames.mp4",
        imagem: "img/AllGames.jpg",
        tags: ["HTML", "CSS", "UI/UX"]
    },
    {
        nome: "SQL Search",
        descricao: "Consultas avancadas em banco de dados SQL Server retornando diferentes tipos de informacao.",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7366233123585454080/",
        linkRepo: "https://github.com/nicoladeveloper/Filmes-SQL-server",
        video: "video/sql.mp4",
        imagem: "img/Sql projeto.jpeg",
        tags: ["SQL Server", "Database"]
    },
    {
        nome: "Hosting System",
        descricao: "Sistema de hospedagem em C# .NET para reservas de hotel com calculo de desconto automatico.",
        linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7365168540716335104/",
        linkRepo: "https://github.com/nicoladeveloper/Sistema-de-Hopedagem",
        video: "video/hosting.mp4",
        imagem: "img/Sistema de Hospedagem.jpg",
        tags: ["C#", ".NET", "OOP"]
    }
];
 
// ==================== RENDERIZAR PROJETOS ====================
function renderizarProjetos() {
    const container = document.getElementById('lista-projetos');
    if (!container) return;
    container.innerHTML = '';
 
    projetos.forEach(projeto => {
        const card = document.createElement('div');
        card.className = 'card-projeto reveal';
 
        const tagsHtml = (projeto.tags || []).map(t =>
            `<span style="font-size:0.7rem;padding:3px 8px;background:rgba(245,166,35,0.08);border:1px solid rgba(245,166,35,0.12);border-radius:20px;color:#f5a623;font-weight:500;">${t}</span>`
        ).join('');
 
        card.innerHTML = `
            <div class="projeto-media">
                <video preload="none" muted loop playsInline
                    poster="${projeto.imagem}"
                    class="projeto-video"
                    data-src="${projeto.video}">
                </video>
            </div>
            <div class="card-projeto-content">
                <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">${tagsHtml}</div>
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <div class="links-projeto">
                    <a href="${projeto.linkDemo}" target="_blank" rel="noopener noreferrer"><i class="fas fa-play"></i> Demo</a>
                    <a href="${projeto.linkRepo}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                </div>
            </div>
        `;
 
        container.appendChild(card);
    });
 
    // Re-observe for scroll reveal
    document.querySelectorAll('.card-projeto.reveal').forEach(el => revealObserver.observe(el));
}
 

 
// ==================== CAROUSEL ====================
class CertificateCarousel {
    constructor() {
        this.wrapper = document.querySelector('.carousel-wrapper');
        this.btnPrev = document.getElementById('btn-anterior-certificado');
        this.btnNext = document.getElementById('btn-proximo-certificado');
        this.isDragging = false;
        this.startX = 0;
        this.scrollLeft = 0;
        if (this.wrapper) this.init();
    }
    init() {
        this.wrapper.addEventListener('mousedown', e => { this.isDragging = true; this.startX = e.pageX - this.wrapper.offsetLeft; this.scrollLeft = this.wrapper.scrollLeft; }, { passive: false });
        this.wrapper.addEventListener('mouseleave', () => { this.isDragging = false; });
        this.wrapper.addEventListener('mouseup', () => { this.isDragging = false; });
        this.wrapper.addEventListener('mousemove', e => { if (!this.isDragging) return; const x = e.pageX - this.wrapper.offsetLeft; this.wrapper.scrollLeft = this.scrollLeft - (x - this.startX) * 2; }, { passive: true });
        this.wrapper.addEventListener('touchstart', e => { this.isDragging = true; this.startX = e.touches[0].pageX - this.wrapper.offsetLeft; this.scrollLeft = this.wrapper.scrollLeft; }, { passive: true });
        this.wrapper.addEventListener('touchend', () => { this.isDragging = false; }, { passive: true });
        this.wrapper.addEventListener('touchmove', e => { if (!this.isDragging) return; const x = e.touches[0].pageX - this.wrapper.offsetLeft; this.wrapper.scrollLeft = this.scrollLeft - (x - this.startX) * 2; }, { passive: true });
        this.btnPrev?.addEventListener('click', () => this.wrapper.scrollBy({ left: -350, behavior: 'smooth' }));
        this.btnNext?.addEventListener('click', () => this.wrapper.scrollBy({ left: 350, behavior: 'smooth' }));
    }
}
 
// ==================== MENU HAMBURGER ====================
function setupMenuHamburguer() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;
 
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('aberto');
        hamburger.classList.toggle('aberto', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
 
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('aberto');
            hamburger.classList.remove('aberto');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}
 
// ==================== SMOOTH SCROLL ====================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}
 
// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();
    setupMenuHamburguer();
    setupSmoothScroll();
    new CertificateCarousel();
    animateParticles();
});
 
window.addEventListener('scroll', () => {}, { passive: true });
// ==================== RADAR CHART ====================
function drawRadarChart() {
    const canvas = document.getElementById('radarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = canvas.width / 2, cy = canvas.height / 2, radius = 73;
    const skills = [
        { label: 'Frontend', value: 0.92 },
        { label: 'Angular', value: 0.85 },
        { label: 'UI/UX', value: 0.83 },
        { label: 'JS/CSS', value: 0.90 },
        { label: 'LandPage', value: 0.95 },
        { label: 'Design', value: 0.80 },
    ];
    const total = skills.length;
    const angleStep = (Math.PI * 2) / total;
    function getPoint(i, r) {
        const angle = -Math.PI / 2 + i * angleStep;
        return { x: cx + Math.cos(angle) * r, y: cy + Math.sin(angle) * r };
    }
    let progress = 0;
    function animate() {
        progress = Math.min(progress + 0.04, 1);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        [0.25,0.5,0.75,1].forEach(frac => {
            ctx.beginPath();
            for (let i = 0; i < total; i++) {
                const p = getPoint(i, radius * frac);
                i === 0 ? ctx.moveTo(p.x,p.y) : ctx.lineTo(p.x,p.y);
            }
            ctx.closePath();
            ctx.strokeStyle='rgba(79,70,229,0.18)'; ctx.lineWidth=1; ctx.stroke();
        });
        for (let i=0; i<total; i++) {
            const p = getPoint(i,radius);
            ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(p.x,p.y);
            ctx.strokeStyle='rgba(79,70,229,0.15)'; ctx.lineWidth=1; ctx.stroke();
        }
        ctx.beginPath();
        for (let i=0; i<total; i++) {
            const p = getPoint(i, radius * skills[i].value * progress);
            i===0 ? ctx.moveTo(p.x,p.y) : ctx.lineTo(p.x,p.y);
        }
        ctx.closePath();
        const grad = ctx.createRadialGradient(cx,cy,0,cx,cy,radius);
        grad.addColorStop(0,'rgba(99,102,241,0.5)'); grad.addColorStop(1,'rgba(79,70,229,0.15)');
        ctx.fillStyle=grad; ctx.fill();
        ctx.strokeStyle='#6366f1'; ctx.lineWidth=2; ctx.stroke();
        for (let i=0; i<total; i++) {
            const p = getPoint(i, radius * skills[i].value * progress);
            ctx.beginPath(); ctx.arc(p.x,p.y,4,0,Math.PI*2);
            ctx.fillStyle='#818cf8'; ctx.fill();
            ctx.strokeStyle='#fff'; ctx.lineWidth=1.5; ctx.stroke();
        }
        ctx.font='600 9px Inter,sans-serif';
        ctx.fillStyle='rgba(148,163,184,0.9)';  
        ctx.textAlign='center'; ctx.textBaseline='middle';
        for (let i=0; i<total; i++) {
            const lp = getPoint(i, radius+18);
            ctx.fillText(skills[i].label, lp.x, lp.y);
        }
        if (progress < 1) requestAnimationFrame(animate);
    }
    animate();
}

const aboutSection = document.getElementById('sobre-mim');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { drawRadarChart(); aboutObserver.disconnect(); }
        });
    }, { threshold: 0.3 });
    aboutObserver.observe(aboutSection);
}