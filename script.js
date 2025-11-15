<<<<<<< HEAD
// Floating Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const floatingMenu = document.querySelector('.floating-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const menuOverlay = document.querySelector('.menu-overlay');

// Toggle menu on button click
if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        floatingMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Toggle between bars and times icon
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            if (floatingMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        }
    });
}

// Close menu when clicking overlay
if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});

// Smooth scrolling for menu links
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and contact cards
const projectCards = document.querySelectorAll('.project-card');
const contactCards = document.querySelectorAll('.contact-card');
const statCards = document.querySelectorAll('.stat-card');

[...projectCards, ...contactCards, ...statCards].forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add stagger effect to project cards
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Add stagger effect to contact cards
contactCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Update contact links with actual URLs (placeholder - update with real links)
const updateContactLinks = () => {
    // These are placeholders - update with actual links when available
    const contactCards = document.querySelectorAll('.contact-card');
    
    // You can update these URLs when you have them:
    // contactCards[0].href = 'https://twitch.tv/troythedecoyx';
    // contactCards[1].href = 'https://twitter.com/troythedecoyx';
    // contactCards[2].href = 'https://discord.gg/your-server';
    // contactCards[3].href = 'mailto:hello@troythedecoyx.com';
};

// Add active state to menu links based on scroll position
const sections = document.querySelectorAll('section[id]');

const updateActiveMenu = () => {
    const scrollY = window.pageYOffset + 200; // Offset for better UX
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.menu-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', updateActiveMenu);

// Close menu when clicking outside (on document)
document.addEventListener('click', (e) => {
    if (floatingMenu && !floatingMenu.contains(e.target) && floatingMenu.classList.contains('active')) {
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
});

// Specs Toggle Functionality
const pcSpecsBtn = document.getElementById('pcSpecsBtn');
const peripheralsBtn = document.getElementById('peripheralsBtn');
const pcSpecsList = document.getElementById('pcSpecsList');
const peripheralsList = document.getElementById('peripheralsList');
const specsTitle = document.getElementById('specsTitle');
const specsIcon = document.querySelector('.specs-category-header .specs-icon');

const toggleSpecs = (target) => {
    // Remove active class from all buttons and lists
    pcSpecsBtn.classList.remove('active');
    peripheralsBtn.classList.remove('active');
    pcSpecsList.classList.remove('active');
    peripheralsList.classList.remove('active');
    
    if (target === 'pcSpecs') {
        pcSpecsBtn.classList.add('active');
        pcSpecsList.classList.add('active');
        specsTitle.textContent = 'PC Specs';
        if (specsIcon) {
            specsIcon.innerHTML = '<i class="fas fa-microchip"></i>';
        }
    } else {
        peripheralsBtn.classList.add('active');
        peripheralsList.classList.add('active');
        specsTitle.textContent = 'Peripherals';
        if (specsIcon) {
            specsIcon.innerHTML = '<i class="fas fa-gamepad"></i>';
        }
    }
};

if (pcSpecsBtn && peripheralsBtn) {
    pcSpecsBtn.addEventListener('click', () => toggleSpecs('pcSpecs'));
    peripheralsBtn.addEventListener('click', () => toggleSpecs('peripherals'));
}

// Hide menu when footer is visible (best practice)
const adjustMenuForFooter = () => {
    const footer = document.querySelector('.footer');
    const floatingMenu = document.querySelector('.floating-menu');
    
    if (!footer || !floatingMenu) return;
    
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const threshold = 200; // Hide menu when footer is within 200px of viewport
    
    // If footer is approaching viewport, hide menu
    if (footerTop < windowHeight + threshold && footerTop > -threshold) {
        floatingMenu.classList.add('footer-visible');
        
        // Auto-close menu if it's open
        if (floatingMenu.classList.contains('active')) {
            floatingMenu.classList.remove('active');
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.classList.remove('active');
                const menuIcon = menuToggle.querySelector('.menu-icon');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        }
    } else {
        floatingMenu.classList.remove('footer-visible');
    }
};

// NYE Countdown - 6:00 PM Nashville Time (Central Time)
function updateNYECountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Create date for December 31st at 6:00 PM Central Time (Nashville)
    // December 31st is always in winter, so it's CST (UTC-6)
    // 6 PM CST = 18:00 CST
    // CST is UTC-6, so 18:00 CST = 18:00 + 6 = 24:00 UTC = 00:00 UTC next day
    // So December 31st at 6 PM CST = January 1st at 00:00 UTC
    
    // Create this year's December 31st at 6 PM CST
    // December 31st at 6 PM CST = January 1st at 00:00 UTC (same year)
    // So for currentYear, Dec 31 6 PM CST = Jan 1 next year 00:00 UTC
    let nye = new Date(Date.UTC(currentYear, 11, 31, 18 + 6, 0, 0)); // Dec 31 24:00 UTC = Jan 1 00:00 UTC = Dec 31 6 PM CST
    
    // If this year's NYE has passed, target next year
    if(now > nye) {
        nye = new Date(Date.UTC(currentYear + 1, 11, 31, 18 + 6, 0, 0)); // Next year's Dec 31 6 PM CST
    }
    
    const diff = nye - now;
    
    if(diff <= 0) {
        // NYE has arrived!
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Vescucci Credits Card Toggle
const footerCredits = document.querySelector('.footer-credits');
const creditsHeader = document.querySelector('.credits-header');

if (footerCredits && creditsHeader) {
    creditsHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        footerCredits.classList.toggle('active');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!footerCredits.contains(e.target)) {
            footerCredits.classList.remove('active');
        }
    });
    
    // Prevent closing when clicking inside the card
    const creditsCard = document.querySelector('.credits-hover-card');
    if (creditsCard) {
        creditsCard.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Prevent text copying
document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
});

// Prevent context menu (right-click)
document.addEventListener('contextmenu', (e) => {
    // Allow context menu on input fields and textareas
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return;
    }
    e.preventDefault();
    return false;
});

// Prevent drag and drop
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

// Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (view source)
document.addEventListener('keydown', (e) => {
    // Allow these shortcuts in input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return;
    }
    
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateContactLinks();
    updateActiveMenu();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
    
    // Initialize and update NYE countdown
    updateNYECountdown();
    setInterval(updateNYECountdown, 1000);
    
    // Adjust menu for footer on scroll
    window.addEventListener('scroll', adjustMenuForFooter);
    window.addEventListener('resize', adjustMenuForFooter);
    adjustMenuForFooter(); // Initial check
});
=======
// Floating Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const floatingMenu = document.querySelector('.floating-menu');
const menuLinks = document.querySelectorAll('.menu-link');
const menuOverlay = document.querySelector('.menu-overlay');

// Toggle menu on button click
if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        floatingMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Toggle between bars and times icon
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            if (floatingMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        }
    });
}

// Close menu when clicking overlay
if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
}

// Close menu when clicking a link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});

// Smooth scrolling for menu links
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and contact cards
const projectCards = document.querySelectorAll('.project-card');
const contactCards = document.querySelectorAll('.contact-card');
const statCards = document.querySelectorAll('.stat-card');

[...projectCards, ...contactCards, ...statCards].forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add stagger effect to project cards
projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Add stagger effect to contact cards
contactCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Update contact links with actual URLs (placeholder - update with real links)
const updateContactLinks = () => {
    // These are placeholders - update with actual links when available
    const contactCards = document.querySelectorAll('.contact-card');
    
    // You can update these URLs when you have them:
    // contactCards[0].href = 'https://twitch.tv/troythedecoyx';
    // contactCards[1].href = 'https://twitter.com/troythedecoyx';
    // contactCards[2].href = 'https://discord.gg/your-server';
    // contactCards[3].href = 'mailto:hello@troythedecoyx.com';
};

// Add active state to menu links based on scroll position
const sections = document.querySelectorAll('section[id]');

const updateActiveMenu = () => {
    const scrollY = window.pageYOffset + 200; // Offset for better UX
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.menu-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            menuLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', updateActiveMenu);

// Close menu when clicking outside (on document)
document.addEventListener('click', (e) => {
    if (floatingMenu && !floatingMenu.contains(e.target) && floatingMenu.classList.contains('active')) {
        floatingMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const menuIcon = menuToggle.querySelector('.menu-icon');
        if (menuIcon) {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    }
});

// Specs Toggle Functionality
const pcSpecsBtn = document.getElementById('pcSpecsBtn');
const peripheralsBtn = document.getElementById('peripheralsBtn');
const pcSpecsList = document.getElementById('pcSpecsList');
const peripheralsList = document.getElementById('peripheralsList');
const specsTitle = document.getElementById('specsTitle');
const specsIcon = document.querySelector('.specs-category-header .specs-icon');

const toggleSpecs = (target) => {
    // Remove active class from all buttons and lists
    pcSpecsBtn.classList.remove('active');
    peripheralsBtn.classList.remove('active');
    pcSpecsList.classList.remove('active');
    peripheralsList.classList.remove('active');
    
    if (target === 'pcSpecs') {
        pcSpecsBtn.classList.add('active');
        pcSpecsList.classList.add('active');
        specsTitle.textContent = 'PC Specs';
        if (specsIcon) {
            specsIcon.innerHTML = '<i class="fas fa-microchip"></i>';
        }
    } else {
        peripheralsBtn.classList.add('active');
        peripheralsList.classList.add('active');
        specsTitle.textContent = 'Peripherals';
        if (specsIcon) {
            specsIcon.innerHTML = '<i class="fas fa-gamepad"></i>';
        }
    }
};

if (pcSpecsBtn && peripheralsBtn) {
    pcSpecsBtn.addEventListener('click', () => toggleSpecs('pcSpecs'));
    peripheralsBtn.addEventListener('click', () => toggleSpecs('peripherals'));
}

// Hide menu when footer is visible (best practice)
const adjustMenuForFooter = () => {
    const footer = document.querySelector('.footer');
    const floatingMenu = document.querySelector('.floating-menu');
    
    if (!footer || !floatingMenu) return;
    
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const threshold = 200; // Hide menu when footer is within 200px of viewport
    
    // If footer is approaching viewport, hide menu
    if (footerTop < windowHeight + threshold && footerTop > -threshold) {
        floatingMenu.classList.add('footer-visible');
        
        // Auto-close menu if it's open
        if (floatingMenu.classList.contains('active')) {
            floatingMenu.classList.remove('active');
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.classList.remove('active');
                const menuIcon = menuToggle.querySelector('.menu-icon');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        }
    } else {
        floatingMenu.classList.remove('footer-visible');
    }
};

// NYE Countdown - 6:00 PM Nashville Time (Central Time)
function updateNYECountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Create date for December 31st at 6:00 PM Central Time (Nashville)
    // December 31st is always in winter, so it's CST (UTC-6)
    // 6 PM CST = 18:00 CST
    // CST is UTC-6, so 18:00 CST = 18:00 + 6 = 24:00 UTC = 00:00 UTC next day
    // So December 31st at 6 PM CST = January 1st at 00:00 UTC
    
    // Create this year's December 31st at 6 PM CST
    // December 31st at 6 PM CST = January 1st at 00:00 UTC (same year)
    // So for currentYear, Dec 31 6 PM CST = Jan 1 next year 00:00 UTC
    let nye = new Date(Date.UTC(currentYear, 11, 31, 18 + 6, 0, 0)); // Dec 31 24:00 UTC = Jan 1 00:00 UTC = Dec 31 6 PM CST
    
    // If this year's NYE has passed, target next year
    if(now > nye) {
        nye = new Date(Date.UTC(currentYear + 1, 11, 31, 18 + 6, 0, 0)); // Next year's Dec 31 6 PM CST
    }
    
    const diff = nye - now;
    
    if(diff <= 0) {
        // NYE has arrived!
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Vescucci Credits Card Toggle
const footerCredits = document.querySelector('.footer-credits');
const creditsHeader = document.querySelector('.credits-header');

if (footerCredits && creditsHeader) {
    creditsHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        footerCredits.classList.toggle('active');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!footerCredits.contains(e.target)) {
            footerCredits.classList.remove('active');
        }
    });
    
    // Prevent closing when clicking inside the card
    const creditsCard = document.querySelector('.credits-hover-card');
    if (creditsCard) {
        creditsCard.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Prevent text copying
document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
});

document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
});

// Prevent context menu (right-click)
document.addEventListener('contextmenu', (e) => {
    // Allow context menu on input fields and textareas
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return;
    }
    e.preventDefault();
    return false;
});

// Prevent drag and drop
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
});

// Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (view source)
document.addEventListener('keydown', (e) => {
    // Allow these shortcuts in input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        return;
    }
    
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }
    
    // Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateContactLinks();
    updateActiveMenu();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
    
    // Initialize and update NYE countdown
    updateNYECountdown();
    setInterval(updateNYECountdown, 1000);
    
    // Adjust menu for footer on scroll
    window.addEventListener('scroll', adjustMenuForFooter);
    window.addEventListener('resize', adjustMenuForFooter);
    adjustMenuForFooter(); // Initial check
});
>>>>>>> 17d0a8c8857f9398271cf3f28c951d4f12ecedb2
