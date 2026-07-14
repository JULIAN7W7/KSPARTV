// ========================================
// CONFIGURATION OBJECT
// ========================================
const CONFIG = {
    // App Info
    appName: 'KSPARTV-JULI',
    appDescription: 'Servicio de entretenimiento premium. Todo tu contenido favorito en un solo lugar.',
    
    // Colors
    colors: {
        primary: '#0071e3',
        secondary: '#764ba2',
        accent: '#2997ff'
    },
    
    // WhatsApp
    whatsapp: {
        number: '573227147600',
        message: '¡Hola! Me interesa su servicio.\n\n• 📱 Quiero más información\n• 🔧 Me gustaría recibir ayuda personalizada\n• 👤 Estoy listo para empezar'
    },
    
    // Intro Text
    introTexts: [
        'Bienvenido.',
        '¿Cansado de pagar suscripciones mensuales?',
        'Diferentes aplicaciones...',
        'Diferentes pagos...',
        '¿Buscando todo en un solo lugar?',
        'Déjame presentarte...'
    ],
    
    // Benefits
    benefits: [
        {
            icon: '💰',
            title: 'Ahorra Dinero',
            description: 'Ahorra dinero comparado con múltiples suscripciones mensuales.'
        },
        {
            icon: '📱',
            title: 'Todo en Un Lugar',
            description: 'Todo organizado en una ubicación conveniente.'
        },
        {
            icon: '⚡',
            title: 'Experiencia Rápida',
            description: 'Streaming ultrarrápido con mínimo buffering.'
        },
        {
            icon: '✨',
            title: 'Calidad Premium',
            description: 'Interfaz de alta calidad y contenido cristalino.'
        }
    ],
    
    // Comparison Numbers
    comparisonNumbers: [
        { value: 12, label: 'Suscripciones Mensuales' },
        { value: 1, label: 'Nuestro Servicio' },
        { value: 85, label: '% Ahorro' }
    ],
    
    // Pricing Information
    pricing: {
        title: 'Precios',
        subtitle: 'Elige la opción que mejor se adapte a tu TV',
        androidTV: {
            title: 'TV con Android',
            price: '110.000$',
            period: 'por año',
            description: 'Si tu TV es AndroidTV o Google TV (tiene Android como base)'
        },
        withDevice: {
            title: 'TV sin Android',
            price: '290.000$',
            period: '¡Solo el primer año!',
            description: 'Incluye dispositivo (180.000$) + suscripción anual (110.000$)',
            note: 'Nosotros proporcionamos el dispositivo. Después del primer año solo pagas 110.000$ anuales'
        },
        note: 'Todo un año de entretenimiento premium. En comparación con otras plataformas, esta es la mejor opción para tu bolsillo.'
    },
    
    // Content Highlights
    highlights: [
        { icon: '📺', text: 'Miles de canales en vivo' },
        { icon: '🎬', text: 'Extensa biblioteca de películas' },
        { icon: '📺', text: 'Colección de series de TV' },
        { icon: '⚽', text: 'Cobertura deportiva' },
        { icon: '🎭', text: 'Centro de entretenimiento' },
        { icon: '👶', text: 'Contenido infantil' },
        { icon: '🌍', text: 'Contenido internacional' },
        { icon: '🎵', text: 'Canales de música' }
    ],
    
    // Features
    features: [
        { icon: '⚡', name: 'Rápido', description: 'Ultrarrápido' },
        { icon: '🎯', name: 'Fácil de usar', description: 'Interfaz intuitiva' },
        { icon: '🔄', name: 'Siempre actualizado', description: 'Contenido fresco' },
        { icon: '📺', name: 'Calidad HD', description: 'Cristalino' },
        { icon: '📱', name: 'Multi-dispositivo', description: 'Mira en cualquier lugar' },
        { icon: '❤️', name: 'Lista de favoritos', description: 'Guarda contenido' },
        { icon: '🔍', name: 'Búsqueda', description: 'Encuentra cualquier cosa' },
        { icon: '🌙', name: 'Modo oscuro', description: 'Fácil para los ojos' }
    ],
    
    // Statistics
    statistics: [
        { value: 50000, label: 'Usuarios Felices' },
        { value: 1000000, label: 'Horas de Entretenimiento' },
        { value: 50, label: 'Categorías Disponibles' },
        { value: 98, label: '% Tasa de Satisfacción' }
    ],
    
    // Testimonials
    testimonials: [
        {
            name: 'Juan García',
            rating: 5,
            comment: 'Este servicio ha cambiado completamente cómo veo entretenimiento. La calidad es increíble y el precio es inmejorable.'
        },
        {
            name: 'María López',
            rating: 5,
            comment: 'Finalmente, todo lo que necesito en un solo lugar. No más cambiar entre aplicaciones. ¡Muy recomendado!'
        },
        {
            name: 'Carlos Rodríguez',
            rating: 5,
            comment: 'La interfaz es muy limpia y fácil de usar. A toda mi familia le encanta. ¡La mejor decisión que tomamos!'
        },
        {
            name: 'Ana Martínez',
            rating: 5,
            comment: 'Al principio estaba escéptico, pero esto superó todas mis expectativas. La variedad de contenido es increíble.'
        },
        {
            name: 'Pedro Sánchez',
            rating: 5,
            comment: 'El servicio al cliente es excelente y la calidad de streaming es de primera. ¡Vale cada centavo!'
        },
        {
            name: 'Laura Fernández',
            rating: 5,
            comment: 'Me ahorró mucho dinero comparado con mis suscripciones anteriores. ¡A los niños también les encanta el contenido!'
        }
    ],
    
    // FAQ
    faq: [
        {
            question: '¿Cómo funciona?',
            answer: 'Simplemente regístrate, elige tu plan y comienza a disfrutar entretenimiento ilimitado en todos tus dispositivos.'
        },
        {
            question: '¿Es fácil de usar?',
            answer: '¡Absolutamente! Nuestra interfaz está diseñada para ser intuitiva y fácil de usar. Te guiaremos en cada paso.'
        },
        {
            question: '¿Puedo usarlo en múltiples dispositivos?',
            answer: '¡Sí! Puedes acceder a tu cuenta en múltiples dispositivos incluyendo teléfonos, tabletas, computadoras y TVs inteligentes.'
        },
        {
            question: '¿Con qué frecuencia se actualiza el contenido?',
            answer: 'Actualizamos nuestra biblioteca de contenido regularmente con nuevas películas, programas de TV y canales en vivo para mantenerlo fresco.'
        },
        {
            question: '¿Qué métodos de pago aceptan?',
            answer: 'Aceptamos todas las principales tarjetas de crédito, débito y varios métodos de pago digitales para tu comodidad.'
        }
    ],
    
    // CTA
    cta: {
        title: '¿Listo para Comenzar?',
        description: 'Únete a miles de usuarios satisfechos y comienza a disfrutar del entretenimiento premium hoy.',
        buttonText: 'Comprar Ya'
    },
    
    // Footer
    footer: {
        text: 'KSPARTV-JULI'
    },
    
    // Animation Settings
    animations: {
        introDelay: 1500,
        textDuration: 2000,
        textPause: 1000,
        particleCount: 30,
        whatsappBounceInterval: 10000
    }
};

// ========================================
// DEVICE DETECTION
// ========================================
const DeviceDetection = {
    isAndroid: /Android/i.test(navigator.userAgent),
    isiPhone: /iPhone/i.test(navigator.userAgent),
    isTablet: /iPad|Android(?!.*Mobile)|Tablet/i.test(navigator.userAgent),
    isDesktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isLowEnd: false,
    
    detect() {
        // Check for low-end device
        const hardwareConcurrency = navigator.hardwareConcurrency || 4;
        const deviceMemory = navigator.deviceMemory || 4;
        
        this.isLowEnd = hardwareConcurrency <= 2 || deviceMemory <= 2;
        
        // Apply performance optimizations for low-end devices
        if (this.isLowEnd) {
            document.body.classList.add('reduced-blur');
            document.body.classList.add('reduced-particles');
            CONFIG.animations.particleCount = 10;
        }
        
        return this;
    }
};

// ========================================
// PERFORMANCE MONITOR
// ========================================
const PerformanceMonitor = {
    fps: 60,
    lastTime: performance.now(),
    frameCount: 0,
    isStruggling: false,
    
    init() {
        this.measureFPS();
        setInterval(() => this.checkPerformance(), 5000);
    },
    
    measureFPS() {
        const now = performance.now();
        this.frameCount++;
        
        if (now - this.lastTime >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastTime = now;
        }
        
        requestAnimationFrame(() => this.measureFPS());
    },
    
    checkPerformance() {
        if (this.fps < 30 && !this.isStruggling) {
            this.isStruggling = true;
            document.body.classList.add('reduced-blur');
            document.body.classList.add('reduced-particles');
        } else if (this.fps > 50 && this.isStruggling) {
            this.isStruggling = false;
            document.body.classList.remove('reduced-blur');
            document.body.classList.remove('reduced-particles');
        }
    }
};

// ========================================
// LOADING SCREEN
// ========================================
const LoadingScreen = {
    element: document.getElementById('loadingScreen'),
    
    init() {
        setTimeout(() => {
            this.element.classList.add('hidden');
            CinematicIntro.init();
        }, 1000);
    }
};

// ========================================
// CINEMATIC INTRO
// ========================================
const CinematicIntro = {
    element: document.getElementById('cinematicIntro'),
    textElement: document.getElementById('introText'),
    skipBtn: document.getElementById('skipIntroBtn'),
    currentIndex: 0,
    isFirstVisit: !localStorage.getItem('hasVisited'),
    
    init() {
        if (this.isFirstVisit) {
            localStorage.setItem('hasVisited', 'true');
            this.showSkipButton();
            this.playSequence();
        } else {
            this.showSkipButton();
            this.skipBtn.classList.add('visible');
            this.playSequence();
        }
        
        this.skipBtn.addEventListener('click', () => this.skip());
    },
    
    showSkipButton() {
        setTimeout(() => {
            if (!this.isFirstVisit) {
                this.skipBtn.classList.add('visible');
            }
        }, 500);
    },
    
    async playSequence() {
        for (let i = 0; i < CONFIG.introTexts.length; i++) {
            this.currentIndex = i;
            await this.showText(CONFIG.introTexts[i]);
            await this.wait(CONFIG.animations.textPause);
            await this.hideText();
        }
        
        await this.wait(500);
        this.finish();
    },
    
    showText(text) {
        return new Promise(resolve => {
            this.textElement.textContent = text;
            this.textElement.classList.add('visible');
            setTimeout(resolve, CONFIG.animations.textDuration);
        });
    },
    
    hideText() {
        return new Promise(resolve => {
            this.textElement.classList.remove('visible');
            setTimeout(resolve, 500);
        });
    },
    
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    
    skip() {
        this.textElement.classList.remove('visible');
        this.finish();
    },
    
    finish() {
        this.element.classList.add('hidden');
        MainContent.show();
        WhatsAppButton.show();
    }
};

// ========================================
// MAIN CONTENT
// ========================================
const MainContent = {
    element: document.getElementById('mainContent'),
    
    show() {
        this.element.classList.add('visible');
        ScrollAnimations.init();
    }
};

// ========================================
// PARTICLES
// ========================================
const Particles = {
    container: document.getElementById('particles'),
    
    init() {
        const count = CONFIG.animations.particleCount;
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            this.container.appendChild(particle);
        }
    }
};

// ========================================
// CUSTOM CURSOR - REMOVED
// ========================================

// ========================================
// NAVIGATION
// ========================================
const Navigation = {
    element: document.getElementById('navbar'),
    lastScrollY: 0,
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    
    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile menu toggle
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
        
        // Close mobile menu when clicking on a link
        const navbarLinks = document.querySelectorAll('.navbar-link');
        navbarLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar')) {
                this.closeMobileMenu();
            }
        });
    },
    
    handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
            this.element.classList.add('hidden');
        } else {
            this.element.classList.remove('hidden');
        }
        
        this.lastScrollY = currentScrollY;
    },
    
    toggleMobileMenu() {
        const navbarNav = document.querySelector('.navbar-nav');
        navbarNav.classList.toggle('active');
    },
    
    closeMobileMenu() {
        const navbarNav = document.querySelector('.navbar-nav');
        if (navbarNav) {
            navbarNav.classList.remove('active');
        }
    }
};

// ========================================
// SCROLL PROGRESS
// ========================================
const ScrollProgress = {
    element: document.getElementById('scrollProgress'),
    
    init() {
        window.addEventListener('scroll', () => this.update());
    },
    
    update() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        
        this.element.style.width = progress + '%';
    }
};

// ========================================
// SCROLL ANIMATIONS
// ========================================
const ScrollAnimations = {
    elements: [],
    
    init() {
        this.elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        this.elements.forEach(el => observer.observe(el));
    }
};

// ========================================
// CONTENT GENERATORS
// ========================================
const ContentGenerators = {
    generateBenefits() {
        const grid = document.getElementById('benefitsGrid');
        grid.innerHTML = CONFIG.benefits.map((benefit, index) => `
            <div class="benefit-card scroll-animate" style="transition-delay: ${index * 100}ms">
                <div class="benefit-icon">${benefit.icon}</div>
                <h3 class="benefit-title">${benefit.title}</h3>
                <p class="benefit-description">${benefit.description}</p>
            </div>
        `).join('');
    },
    
    generateComparisonNumbers() {
        const container = document.getElementById('comparisonNumbers');
        container.innerHTML = CONFIG.comparisonNumbers.map(num => `
            <div class="comparison-number">
                <div class="comparison-value">${num.value}</div>
                <div class="comparison-label">${num.label}</div>
            </div>
        `).join('');
    },
    
    generateHighlights() {
        const grid = document.getElementById('highlightsGrid');
        grid.innerHTML = CONFIG.highlights.map((highlight, index) => `
            <div class="highlight-card scroll-animate" style="transition-delay: ${index * 50}ms">
                <div class="highlight-icon">${highlight.icon}</div>
                <span class="highlight-text">${highlight.text}</span>
            </div>
        `).join('');
    },
    
    generateFeatures() {
        const grid = document.getElementById('featuresGrid');
        grid.innerHTML = CONFIG.features.map((feature, index) => `
            <div class="feature-item scroll-animate" style="transition-delay: ${index * 50}ms">
                <div class="feature-icon-wrapper">
                    <span class="feature-icon">${feature.icon}</span>
                </div>
                <h3 class="feature-name">${feature.name}</h3>
                <p class="feature-description">${feature.description}</p>
            </div>
        `).join('');
    },
    
    generateStatistics() {
        const grid = document.getElementById('statisticsGrid');
        grid.innerHTML = CONFIG.statistics.map((stat, index) => `
            <div class="stat-item" data-target="${stat.value}">
                <div class="stat-number">0</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    },
    
    generateTestimonials() {
        const track = document.getElementById('testimonialsTrack');
        track.innerHTML = CONFIG.testimonials.map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <div class="testimonial-header">
                        <div class="testimonial-avatar">${testimonial.name.charAt(0)}</div>
                        <div class="testimonial-info">
                            <div class="testimonial-name">${testimonial.name}</div>
                            <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}</div>
                        </div>
                    </div>
                    <p class="testimonial-comment">"${testimonial.comment}"</p>
                </div>
            </div>
        `).join('');
        
        // Generate dots
        const dotsContainer = document.getElementById('testimonialsDots');
        const dotCount = Math.ceil(CONFIG.testimonials.length / 3);
        dotsContainer.innerHTML = Array.from({ length: dotCount }, (_, i) => `
            <div class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
        `).join('');
    },
    
    generateFAQ() {
        const list = document.getElementById('faqList');
        list.innerHTML = CONFIG.faq.map((item, index) => `
            <div class="faq-item">
                <button class="faq-question" aria-expanded="false">
                    ${item.question}
                    <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">${item.answer}</div>
                </div>
            </div>
        `).join('');
    },
    
    generatePricing() {
        const container = document.getElementById('pricingSection');
        if (!container) return;
        
        container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title" id="pricingTitle">${CONFIG.pricing.title}</h2>
                <p class="section-subtitle" id="pricingSubtitle">${CONFIG.pricing.subtitle}</p>
            </div>
            <div class="pricing-grid">
                <div class="pricing-card scroll-animate">
                    <div class="pricing-icon">📺</div>
                    <h3 class="pricing-card-title">${CONFIG.pricing.androidTV.title}</h3>
                    <div class="pricing-price">
                        <span class="pricing-amount">${CONFIG.pricing.androidTV.price}</span>
                        <span class="pricing-period">${CONFIG.pricing.androidTV.period}</span>
                    </div>
                    <p class="pricing-description">${CONFIG.pricing.androidTV.description}</p>
                </div>
                <div class="pricing-card scroll-animate" style="transition-delay: 100ms">
                    <div class="pricing-icon">📦</div>
                    <h3 class="pricing-card-title">${CONFIG.pricing.withDevice.title}</h3>
                    <div class="pricing-price">
                        <span class="pricing-amount">${CONFIG.pricing.withDevice.price}</span>
                        <span class="pricing-period">${CONFIG.pricing.withDevice.period}</span>
                    </div>
                    <p class="pricing-description">${CONFIG.pricing.withDevice.description}</p>
                    <p class="pricing-note">${CONFIG.pricing.withDevice.note}</p>
                </div>
            </div>
            <p class="pricing-note-text">${CONFIG.pricing.note}</p>
        `;
    },
    
    updateTextContent() {
        document.getElementById('navbarLogo').textContent = CONFIG.appName;
        document.getElementById('heroTitle').textContent = CONFIG.appName;
        document.getElementById('heroDescription').textContent = CONFIG.appDescription;
        document.getElementById('benefitsTitle').textContent = '¿Por Qué Elegirnos';
        document.getElementById('benefitsSubtitle').textContent = 'Descubre los beneficios de nuestro servicio premium';
        document.getElementById('highlightsTitle').textContent = 'Biblioteca de Contenido';
        document.getElementById('highlightsSubtitle').textContent = 'Explora nuestra extensa colección';
        document.getElementById('featuresTitle').textContent = 'Características';
        document.getElementById('featuresSubtitle').textContent = 'Todo lo que necesitas para la mejor experiencia';
        document.getElementById('testimonialsTitle').textContent = 'Lo Que Dicen Nuestros Usuarios';
        document.getElementById('testimonialsSubtitle').textContent = 'Reseñas reales de usuarios reales';
        document.getElementById('faqTitle').textContent = 'Preguntas Frecuentes';
        document.getElementById('faqSubtitle').textContent = 'Encuentra respuestas a preguntas comunes';
        document.getElementById('ctaTitle').textContent = CONFIG.cta.title;
        document.getElementById('ctaDescription').textContent = CONFIG.cta.description;
        document.getElementById('ctaButton').textContent = CONFIG.cta.buttonText;
        document.getElementById('footerText').textContent = CONFIG.footer.text;
    }
};

// ========================================
// ANIMATED STATISTICS
// ========================================
const AnimatedStatistics = {
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        document.querySelectorAll('.stat-item').forEach(item => {
            observer.observe(item);
        });
    },
    
    animate(element) {
        const target = parseInt(element.dataset.target);
        const numberElement = element.querySelector('.stat-number');
        const duration = 2000;
        const startTime = performance.now();
        
        const updateNumber = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);
            
            // Format number
            if (target >= 1000) {
                numberElement.textContent = (current / 1000).toFixed(1) + 'K+';
            } else {
                numberElement.textContent = current + (target === 98 ? '%' : '+');
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };
        
        requestAnimationFrame(updateNumber);
    }
};

// ========================================
// TESTIMONIALS CAROUSEL
// ========================================
const TestimonialsCarousel = {
    track: document.getElementById('testimonialsTrack'),
    prevBtn: document.getElementById('testimonialPrev'),
    nextBtn: document.getElementById('testimonialNext'),
    dots: document.querySelectorAll('.testimonial-dot'),
    currentIndex: 0,
    totalSlides: Math.ceil(CONFIG.testimonials.length / 3),
    autoPlayInterval: null,
    isPaused: false,
    touchStartX: 0,
    touchEndX: 0,
    
    init() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goTo(index));
        });
        
        // Touch support
        this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e));
        
        // Pause on hover
        const carousel = document.getElementById('testimonialsCarousel');
        carousel.addEventListener('mouseenter', () => this.pause());
        carousel.addEventListener('mouseleave', () => this.resume());
        
        // Start autoplay
        this.startAutoPlay();
    },
    
    goTo(index) {
        this.currentIndex = index;
        const translateX = -(index * 100);
        this.track.style.transform = `translate3d(${translateX}%, 0, 0)`;
        
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    },
    
    prev() {
        const newIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.totalSlides - 1;
        this.goTo(newIndex);
    },
    
    next() {
        const newIndex = this.currentIndex < this.totalSlides - 1 ? this.currentIndex + 1 : 0;
        this.goTo(newIndex);
    },
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            if (!this.isPaused) {
                this.next();
            }
        }, 5000);
    },
    
    pause() {
        this.isPaused = true;
    },
    
    resume() {
        this.isPaused = false;
    },
    
    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    },
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    },
    
    handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;
        const threshold = 50;
        
        if (diff > threshold) {
            this.next();
        } else if (diff < -threshold) {
            this.prev();
        }
    }
};

// ========================================
// FAQ ACCORDION
// ========================================
const FAQAccordion = {
    init() {
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', (e) => this.toggle(e));
        });
    },
    
    toggle(e) {
        const button = e.currentTarget;
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.faq-item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
        }
    }
};

// ========================================
// WHATSAPP BUTTON
// ========================================
const WhatsAppButton = {
    element: document.getElementById('whatsappButton'),
    bounceInterval: null,
    
    init() {
        const url = `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`;
        this.element.href = url;
    },
    
    show() {
        this.element.classList.add('visible');
        this.startBounce();
    },
    
    startBounce() {
        this.bounceInterval = setInterval(() => {
            this.element.classList.add('bounce');
            setTimeout(() => {
                this.element.classList.remove('bounce');
            }, 600);
        }, CONFIG.animations.whatsappBounceInterval);
    }
};

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
const ButtonRipple = {
    init() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', (e) => this.createRipple(e));
        });
    },
    
    createRipple(e) {
        const button = e.currentTarget;
        button.classList.add('ripple');
        
        setTimeout(() => {
            button.classList.remove('ripple');
        }, 600);
    }
};

// ========================================
// SMOOTH SCROLL
// ========================================
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
};

// ========================================
// TERMS MODAL
// ========================================
const TermsModal = {
    modal: document.getElementById('termsModal'),
    closeBtn: document.getElementById('closeTermsModal'),
    acceptBtn: document.getElementById('acceptTerms'),
    declineBtn: document.getElementById('declineTerms'),
    
    init() {
        // Show modal when CTA button is clicked
        const ctaButton = document.getElementById('ctaButton');
        if (ctaButton) {
            ctaButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.show();
            });
        }
        
        // Close button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.hide());
        }
        
        // Accept button
        if (this.acceptBtn) {
            this.acceptBtn.addEventListener('click', () => this.accept());
        }
        
        // Decline button
        if (this.declineBtn) {
            this.declineBtn.addEventListener('click', () => this.hide());
        }
        
        // Close on overlay click
        if (this.modal) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.hide();
                }
            });
        }
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hide();
            }
        });
    },
    
    show() {
        this.modal.classList.add('visible');
        document.body.style.overflow = 'hidden';
    },
    
    hide() {
        this.modal.classList.remove('visible');
        document.body.style.overflow = '';
    },
    
    accept() {
        this.hide();
        // Redirect to purchase form
        window.location.href = 'purchase.html';
    }
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize device detection
    DeviceDetection.detect();
    
    // Initialize performance monitor
    PerformanceMonitor.init();
    
    // Initialize particles
    Particles.init();
    
    // Generate content
    ContentGenerators.updateTextContent();
    ContentGenerators.generateBenefits();
    ContentGenerators.generateComparisonNumbers();
    ContentGenerators.generateHighlights();
    ContentGenerators.generateFeatures();
    ContentGenerators.generateStatistics();
    ContentGenerators.generateTestimonials();
    ContentGenerators.generateFAQ();
    ContentGenerators.generatePricing();
    
    // Initialize components
    Navigation.init();
    ScrollProgress.init();
    AnimatedStatistics.init();
    TestimonialsCarousel.init();
    FAQAccordion.init();
    WhatsAppButton.init();
    ButtonRipple.init();
    SmoothScroll.init();
    TermsModal.init();
    
    // Start loading screen
    LoadingScreen.init();
});
