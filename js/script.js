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
animateParticles();
 
// ===== TYPED EFFECT =====
const roles = ['Web', 'FullStack', 'Ux Designer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedRole');
 
function typeEffect() {
    const current = roles[roleIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
 
    let speed = isDeleting ? 50 : 100;
 
    if (!isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
    }
 
    setTimeout(typeEffect, speed);
}
typeEffect();
 
// ===== HEADER SCROLL =====
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
 
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    header.classList.toggle('scrolled', scrollY > 50);
    backToTop.classList.toggle('show', scrollY > 500);
});
 
backToTop.addEventListener('click', () => {
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
 
// ==================== DADOS DOS VIDEOS DO SHOWCASE ====================
const videosShowcase = [
    { src: "video/video5.mp4",  poster: "img/Natural Disaster Watch.jpg", orientation: "landscape" },
    { src: "video/video5.mp4",   poster: "img/Kimetsu Memory.jpg",         orientation: "landscape" },
    { src: "video/video1.mp4",  poster: "img/AllGames.jpg",               orientation: "landscape" },
    { src: "video/video5.mp4",  poster: "img/DataShow.jpg",               orientation: "landscape" },
    { src: "video/video4.mp4",       poster: "img/poster/celular1.jpg",           orientation: "portrait"  },
    { src: "video/video3.mp4",   poster: "img/Sistema de Hospedagem.jpg",  orientation: "portrait"  },

];
 
const SLOT_DEFS = [
    { cls: "vid-slot-main",       orientation: "landscape", badge: true  },
    { cls: "vid-slot-portrait-r", orientation: "portrait",  badge: false },
    { cls: "vid-slot-portrait-l", orientation: "portrait",  badge: false },
];
 
// ==================== SHOWCASE MANAGER ====================
class ShowcaseManager {
    constructor() {
        this.container = document.getElementById('floating-videos');
        if (!this.container) return;
        this.landscape = videosShowcase.filter(v => v.orientation === 'landscape');
        this.portrait = videosShowcase.filter(v => v.orientation === 'portrait');
        this.currentSet = 0;
        this.slots = [];
        this.dots = [];
        this.cycleTimer = null;
        this.build();
        this.startCycle();
        this.setupVisibility();
    }
 
    build() {
        const stage = document.createElement('div');
        stage.className = 'showcase-stage';
        const glow = document.createElement('div');
        glow.className = 'showcase-glow';
        stage.appendChild(glow);
 
        SLOT_DEFS.forEach(def => {
            const slot = document.createElement('div');
            slot.className = `vid-slot ${def.cls}`;
            if (def.badge) {
                const badge = document.createElement('span');
                badge.className = 'vid-badge';
                badge.textContent = '\u25CF ao vivo';
                slot.appendChild(badge);
            }
            const video = document.createElement('video');
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = 'none';
            video.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
            slot.appendChild(video);
            stage.appendChild(slot);
            this.slots.push({ el: slot, video, orientation: def.orientation });
        });
 
        const counter = document.createElement('div');
        counter.className = 'showcase-counter';
        const totalSets = Math.max(this.landscape.length, this.portrait.length || 1);
        const dotCount = Math.min(totalSets, 8);
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'showcase-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => this.goTo(i));
            counter.appendChild(dot);
            this.dots.push(dot);
        }
 
        this.container.innerHTML = '';
        this.container.appendChild(stage);
        this.container.appendChild(counter);
        this.loadSet(0);
    }
 
    loadSet(setIdx) {
        this.dots.forEach((d, i) => d.classList.toggle('active', i === setIdx));
        let lCount = 0, pCount = 0;
        this.slots.forEach(({ el, video, orientation }) => {
            let pool, vidIdx;
            if (orientation === 'landscape') {
                pool = this.landscape;
                vidIdx = (setIdx + lCount) % pool.length;
                lCount++;
            } else {
                pool = this.portrait.length > 0 ? this.portrait : this.landscape;
                vidIdx = (setIdx + pCount) % pool.length;
                pCount++;
            }
            const vidData = pool[vidIdx];
            if (!vidData) return;
            el.style.opacity = '0';
            setTimeout(() => {
                if (video.src !== new URL(vidData.src, window.location.href).href) {
                    video.poster = vidData.poster || '';
                    video.src = vidData.src;
                    video.load();
                    const play = () => video.play().catch(() => {});
                    if ('requestIdleCallback' in window) requestIdleCallback(play, { timeout: 800 });
                    else setTimeout(play, 100);
                }
                el.style.opacity = '1';
            }, 350);
        });
    }
 
    goTo(idx) {
        this.currentSet = idx;
        this.loadSet(idx);
        clearInterval(this.cycleTimer);
        this.startCycle();
    }
 
    startCycle() {
        this.cycleTimer = setInterval(() => {
            const total = this.dots.length || 1;
            this.currentSet = (this.currentSet + 1) % total;
            this.loadSet(this.currentSet);
        }, 7000);
    }
 
    setupVisibility() {
        if (!('IntersectionObserver' in window)) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                this.slots.forEach(({ video }) => {
                    entry.isIntersecting ? video.play().catch(() => {}) : video.pause();
                });
            });
        }, { threshold: 0.1 });
        obs.observe(this.container);
    }
}
 
// ==================== DADOS DOS PROJETOS ====================
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
 
// ==================== LAZY LOAD VIDEOS ====================
class VideoLazyLoader {
    constructor() {
        this.videos = document.querySelectorAll('.projeto-video');
        this.loaded = new Set();
        this.init();
    }
    init() {
        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.load(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '50px', threshold: 0.01 });
            this.videos.forEach(v => obs.observe(v));
        } else {
            this.videos.forEach(v => this.load(v));
        }
    }
    load(video) {
        if (this.loaded.has(video)) return;
        const src = video.dataset.src;
        if (!src) return;
        const attach = () => {
            if (this.loaded.has(video)) return;
            const source = document.createElement('source');
            source.src = src;
            source.type = 'video/mp4';
            video.appendChild(source);
            this.loaded.add(video);
        };
        'requestIdleCallback' in window
            ? requestIdleCallback(attach, { timeout: 2000 })
            : setTimeout(attach, 0);
    }
}
 
// ==================== PLAY ON HOVER ====================
class VideoHoverPlay {
    constructor() {
        document.querySelectorAll('.projeto-video').forEach(video => {
            const card = video.closest('.card-projeto');
            if (!card) return;
            card.addEventListener('mouseenter', () => { if (video.readyState >= 2) video.play().catch(() => {}); });
            card.addEventListener('mouseleave', () => video.pause());
        });
    }
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
    new ShowcaseManager();
    new CertificateCarousel();
    setTimeout(() => {
        new VideoLazyLoader();
        new VideoHoverPlay();
    }, 100);
});
 
window.addEventListener('scroll', () => {}, { passive: true });