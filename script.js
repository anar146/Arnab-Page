document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. DATA CONFIGURATION (With Custom Colors)
       ========================================= */

    const coreSkills = [
        { name: "HTML5", icon: "devicon-html5-plain", color: "#e34f26" },
        { name: "CSS3", icon: "devicon-css3-plain", color: "#264de4" },
        { name: "JavaScript", icon: "devicon-javascript-plain", color: "#f0db4f" },
        { name: "Python", icon: "devicon-python-plain", color: "#306998" },
        { name: "Flutter", icon: "devicon-flutter-plain", color: "#02569b" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain", color: "#563d7c" },
        { name: "Tailwind", icon: "devicon-tailwindcss-original", color: "#38bdf8" }
    ];

    const toolsSkills = [
        { name: "Git", icon: "devicon-git-plain", color: "#f1502f" },
        { name: "GitHub", icon: "devicon-github-original", color: "#ffffff" },
        { name: "Docker", icon: "devicon-docker-plain", color: "#2496ed" },
        { name: "Vibe Coder", icon: "bi bi-stars", isSpecial: true, desc: "AI Assisted", color: "#bc13fe" }
    ];

    const projectsData = [
        {
            title: "ByteRun",
            subtitle: "Compiler with AI",
            desc: "A powerful online code compiler built with Django and integrated with Gemini AI for code analysis.",
            mainIcon: "bi bi-terminal-fill",
            iconColor: "#3b82f6",
            color: "#3b82f6", // Custom Glow
            techStack: ["devicon-python-plain", "devicon-django-plain"],
            liveLink: "#",
            gitLink: "#"
        },
        {
            title: "Melodic-Cafe",
            subtitle: "Music Library",
            desc: "A custom-built music web application providing a unique and personal music library experience.",
            mainIcon: "bi bi-music-note-beamed",
            color: "#00f3ff", // Cyan Glow
            techStack: ["devicon-html5-plain", "devicon-javascript-plain"],
            liveLink: "https://melodic.lovestoblog.com/",
            gitLink: "https://github.com/anar291/Melodic-Cafe.git"
        },
        {
            title: "GenZ Clock",
            subtitle: "Digital Time",
            desc: "A digital clock with a vibe. Simple, aesthetic, and built for the modern web.",
            mainIcon: "bi bi-clock-history",
            color: "#4cd137", // Green Glow
            techStack: ["devicon-html5-plain", "devicon-css3-plain"],
            liveLink: "https://genzclock.nichesite.org/",
            gitLink: "https://github.com/anar291/Genz-Clock.git"
        },
        {
            title: "Dating Site",
            subtitle: "UI Concept",
            desc: "A responsive dating website concept focusing on clean aesthetics and user interaction.",
            mainIcon: "bi bi-heart-fill",
            color: "#ff4b4b", // Red Glow
            techStack: ["devicon-html5-plain", "devicon-css3-plain"],
            liveLink: "https://dating.nichesite.org/",
            gitLink: "https://github.com/anar291/Dating-Site.git"
        }
    ];

    const achievementsData = [
        { title: "Hackathon", desc: "Innovate 2025", icon: "bi bi-trophy", color: "#ffd700" },
        { title: "Top 10%", desc: "Batch of 2028", icon: "bi bi-award", color: "#c0c0c0" }
    ];


    /* =========================================
       2. RENDER FUNCTIONS (Injecting Colors)
       ========================================= */

    function renderSimpleCards(data, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = data.map(item => {
            const extraText = item.isSpecial 
                ? `<p style="font-size: 0.8rem; margin:0; color: #fff;">${item.desc}</p>` 
                : (item.desc ? `<p style="font-size:0.8rem; margin:0; color:#94a3b8;">${item.desc}</p>` : '');

            // Inject the --card-glow variable here
            return `
            <div class="flip-card" style="--card-glow: ${item.color}">
                <div class="flip-card-inner">
                    <div class="flip-card-front"><i class="${item.icon}"></i></div>
                    <div class="flip-card-back">
                        <h3 style="color: ${item.color}">${item.name || item.title}</h3>
                        ${extraText}
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projects-container');
        if (!container) return;

        container.innerHTML = projectsData.map(project => {
            const techIcons = project.techStack.map(icon => `<i class="${icon}"></i>`).join('');
            const iconStyle = project.iconColor ? `style="color: ${project.iconColor};"` : '';

            // Inject the --card-glow variable here
            return `
            <div class="flip-card project-card-flip" style="--card-glow: ${project.color}">
                <div class="flip-card-inner">
                    <div class="flip-card-front project-front-face">
                        <i class="${project.mainIcon}" ${iconStyle}></i>
                        <h3>${project.title}</h3>
                        <span>${project.subtitle}</span>
                    </div>
                    <div class="flip-card-back project-card">
                        <h3 style="color:${project.color}">${project.title}</h3>
                        <p>${project.desc}</p>
                        <div class="project-skills">
                            ${techIcons}
                        </div>
                        <div class="project-links">
                            <a href="${project.liveLink}" target="_blank">Demo <i class="bi bi-box-arrow-up-right"></i></a>
                            <a href="${project.gitLink}" target="_blank">Code <i class="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');
    }

    // Call Render Functions
    renderSimpleCards(coreSkills, 'core-skills-container');
    renderSimpleCards(toolsSkills, 'tools-skills-container');
    renderSimpleCards(achievementsData, 'achievements-container');
    renderProjects();


    /* =========================================
       3. INTERACTIVE EFFECTS
       ========================================= */

    // Typing Effect
    const typingText = document.querySelector(".dynamic-text");
    const roles = ["CS Student", "Python Dev", "Web Creator", "AI Enthusiast"];
    let roleIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true; typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    type();

    // Mobile Menu Logic
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    const menuIcon = menuToggle.querySelector('i');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('is-open');
        const isOpen = nav.classList.contains('is-open');
        menuIcon.classList.remove(isOpen ? 'bi-list' : 'bi-x-lg');
        menuIcon.classList.add(isOpen ? 'bi-x-lg' : 'bi-list');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            menuIcon.classList.replace('bi-x-lg', 'bi-list');
            document.body.style.overflow = '';
        });
    });

    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    });
    document.querySelectorAll('.hidden-fade').forEach(el => observer.observe(el));

    /* =========================================
       4. CLICK TO FLIP LOGIC
       ========================================= */
    
    // Select all cards
    const allCards = document.querySelectorAll('.flip-card');

    allCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Prevent flipping when clicking links
    document.querySelectorAll('.project-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});
