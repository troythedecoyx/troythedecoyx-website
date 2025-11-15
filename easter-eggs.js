// Easter Eggs & Achievements System - Terminal Only
(function() {
    'use strict';
    
    // Achievement System
    const achievements = {
        list: {
            'first_command': {
                name: 'First Steps',
                description: 'Run your first terminal command',
                icon: '🚀',
                unlocked: false
            },
            'matrix': {
                name: 'Enter the Matrix',
                description: 'Activate Matrix mode',
                icon: '💚',
                unlocked: false
            },
            'deception': {
                name: 'Rainbow Mode',
                description: 'Activate rainbow mode',
                icon: '🌈',
                unlocked: false
            },
            'whoami': {
                name: 'Identity Crisis',
                description: 'Discover who you are',
                icon: '👤',
                unlocked: false
            },
            'help': {
                name: 'Help Seeker',
                description: 'Ask for help',
                icon: '❓',
                unlocked: false
            },
            'ls': {
                name: 'File Explorer',
                description: 'List directory contents',
                icon: '📁',
                unlocked: false
            },
            'clear': {
                name: 'Clean Slate',
                description: 'Clear the terminal',
                icon: '🧹',
                unlocked: false
            },
            'konami': {
                name: 'Konami Master',
                description: 'Enter the Konami code',
                icon: '🎮',
                unlocked: false
            },
            'backwards': {
                name: 'Backwards Thinker',
                description: 'Type the name backwards',
                icon: '🔤',
                unlocked: false
            },
            'secret': {
                name: 'Secret Finder',
                description: 'Discover a secret command',
                icon: '🔍',
                unlocked: false
            },
            'all_achievements': {
                name: 'Achievement Hunter',
                description: 'Unlock all achievements',
                icon: '🏆',
                unlocked: false
            },
            'confetti': {
                name: 'Party Time',
                description: 'Trigger confetti celebration',
                icon: '🎉',
                unlocked: false
            },
            'dance': {
                name: 'Dance Party',
                description: 'Make everything dance',
                icon: '💃',
                unlocked: false
            },
            'circle': {
                name: 'Circle Drawer',
                description: 'Draw a perfect circle',
                icon: '⭕',
                unlocked: false
            },
            'patience': {
                name: 'Patient Explorer',
                description: 'Stay on page for 5 minutes',
                icon: '⏱️',
                unlocked: false
            }
        },
        
        init: function() {
            // Load achievements from localStorage
            const saved = localStorage.getItem('deception_achievements');
            if(saved) {
                try {
                    const parsed = JSON.parse(saved);
                    Object.keys(parsed).forEach(key => {
                        if(this.list[key]) {
                            this.list[key].unlocked = parsed[key];
                        }
                    });
                } catch(e) {
                    console.error('Failed to load achievements:', e);
                }
            }
        },
        
        unlock: function(id) {
            if(!this.list[id] || this.list[id].unlocked) return false;
            
            this.list[id].unlocked = true;
            this.save();
            
            // Show achievement notification
            _0xeffect.show(`🏆 Achievement Unlocked!`, `${this.list[id].icon} ${this.list[id].name}`);
            
            // Check if all achievements unlocked
            const allUnlocked = Object.values(this.list).every(a => a.unlocked || a.id === 'all_achievements');
            if(allUnlocked && !this.list['all_achievements'].unlocked) {
                this.unlock('all_achievements');
            }
            
            return true;
        },
        
        save: function() {
            const toSave = {};
            Object.keys(this.list).forEach(key => {
                toSave[key] = this.list[key].unlocked;
            });
            localStorage.setItem('deception_achievements', JSON.stringify(toSave));
        },
        
        getUnlocked: function() {
            return Object.values(this.list).filter(a => a.unlocked);
        },
        
        getProgress: function() {
            const total = Object.keys(this.list).length;
            const unlocked = this.getUnlocked().length;
            return { unlocked, total, percentage: Math.round((unlocked / total) * 100) };
        }
    };
    
    // Initialize achievements
    achievements.init();
    
    // Check for patience achievement
    setTimeout(() => {
        achievements.unlock('patience');
    }, 300000); // 5 minutes
    
    // Easter egg effects - Top right corner
    const _0xeffect = {
        show: function(msg, type) {
            const el = document.createElement('div');
            el.style.cssText = 'position:fixed;top:2rem;right:2rem;background:rgba(15,23,42,0.95);border:2px solid #6366f1;border-radius:1rem;padding:1.5rem;z-index:99998;color:#fff;font-family:Audiowide,cursive;box-shadow:0 20px 60px rgba(99,102,241,0.5);backdrop-filter:blur(20px);max-width:400px;transform:translateY(0);opacity:1;transition:all 0.3s ease;';
            el.innerHTML = `<h3 style="color:#6366f1;margin-bottom:0.5rem;font-size:1.1rem;">${msg}</h3><p style="color:#94a3b8;font-size:0.9rem;margin:0;">${type || 'Easter Egg Found!'}</p>`;
            document.body.appendChild(el);
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(-20px)';
                setTimeout(() => el.remove(), 500);
            }, 3000);
        },
        confetti: function() {
            achievements.unlock('confetti');
            for(let i=0;i<50;i++) {
                const c = document.createElement('div');
                c.style.cssText = `position:fixed;width:10px;height:10px;background:#${Math.floor(Math.random()*16777215).toString(16)};left:${Math.random()*100}%;top:-10px;z-index:99998;border-radius:50%;`;
                document.body.appendChild(c);
                const anim = c.animate([
                    {transform: 'translateY(0) rotate(0deg)', opacity: 1},
                    {transform: `translateY(${window.innerHeight+100}px) rotate(360deg)`, opacity: 0}
                ], {duration: 2000 + Math.random()*1000, delay: Math.random()*500});
                anim.onfinish = () => c.remove();
            }
        },
        rainbow: function() {
            document.body.style.animation = 'rainbow 2s linear infinite';
            const style = document.createElement('style');
            style.textContent = '@keyframes rainbow{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}';
            document.head.appendChild(style);
            setTimeout(() => {
                document.body.style.animation = '';
                style.remove();
            }, 5000);
        },
        dance: function() {
            achievements.unlock('dance');
            _0xeffect.show('💃 Dance Mode!', 'Everything is dancing!');
            document.body.style.animation = 'dance 0.5s ease-in-out infinite';
            const style = document.createElement('style');
            style.textContent = '@keyframes dance{0%,100%{transform:rotate(0deg)}25%{transform:rotate(-2deg)}75%{transform:rotate(2deg)}}';
            document.head.appendChild(style);
            setTimeout(() => {
                document.body.style.animation = '';
                style.remove();
            }, 5000);
        },
        circle: function() {
            achievements.unlock('circle');
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const circle = document.createElement('div');
            circle.style.cssText = `position:fixed;left:${centerX}px;top:${centerY}px;width:100px;height:100px;border:3px solid #6366f1;border-radius:50%;pointer-events:none;z-index:99997;transform:translate(-50%,-50%);animation:circlePulse 2s ease-out forwards;`;
            const style = document.createElement('style');
            style.textContent = '@keyframes circlePulse{0%{transform:translate(-50%,-50%) scale(0);opacity:1}100%{transform:translate(-50%,-50%) scale(3);opacity:0}}';
            document.head.appendChild(style);
            document.body.appendChild(circle);
            setTimeout(() => {circle.remove(); style.remove();}, 2000);
            _0xeffect.show('⭕ Circle Drawn!', 'Perfect circle created!');
        }
    };
    
    // Terminal Interface
    const terminal = {
        container: null,
        body: null,
        input: null,
        trigger: null,
        history: [],
        historyIndex: -1,
        commands: {},
        commandCount: 0,
        
        init: function() {
            this.container = document.getElementById('terminalContainer');
            this.body = document.getElementById('terminalBody');
            this.input = document.getElementById('terminalInput');
            this.trigger = document.getElementById('terminalTrigger');
            
            if(!this.container || !this.trigger) return;
            
            // Show terminal on trigger click
            this.trigger.addEventListener('click', () => this.toggle());
            
            // Close button
            const closeBtn = this.container.querySelector('.terminal-btn-close');
            if(closeBtn) {
                closeBtn.addEventListener('click', () => this.hide());
            }
            
            // Input handling
            if(this.input) {
                this.input.addEventListener('keydown', (e) => {
                    if(e.key === 'Enter') {
                        this.execute(this.input.value);
                        this.input.value = '';
                    } else if(e.key === 'ArrowUp') {
                        e.preventDefault();
                        if(this.historyIndex > 0) {
                            this.historyIndex--;
                            this.input.value = this.history[this.historyIndex];
                        }
                    } else if(e.key === 'ArrowDown') {
                        e.preventDefault();
                        if(this.historyIndex < this.history.length - 1) {
                            this.historyIndex++;
                            this.input.value = this.history[this.historyIndex] || '';
                        }
                    } else if(e.key === 'Escape') {
                        this.hide();
                    }
                });
            }
            
            // Register commands
            this.registerCommands();
        },
        
        toggle: function() {
            if(this.container.classList.contains('active')) {
                this.hide();
            } else {
                this.show();
            }
        },
        
        show: function() {
            this.container.classList.add('active');
            if(this.input) {
                setTimeout(() => this.input.focus(), 100);
            }
            // Only show initialization message if terminal is empty
            if(!this.body || this.body.children.length <= 1) {
                this.addLine('Terminal initialized. Type "help" for available commands.');
            }
        },
        
        hide: function() {
            this.container.classList.remove('active');
        },
        
        addLine: function(text, isCommand = false) {
            if(!this.body) return;
            const line = document.createElement('div');
            line.className = 'terminal-line';
            if(isCommand) {
                line.innerHTML = `<span class="terminal-prompt">user@deception-hq:~$</span>${text}`;
            } else {
                line.innerHTML = text;
            }
            this.body.appendChild(line);
            this.body.scrollTop = this.body.scrollHeight;
        },
        
        execute: function(cmd) {
            if(!cmd.trim()) return;
            
            const command = cmd.trim().toLowerCase();
            this.addLine(cmd, true);
            this.history.push(cmd);
            this.historyIndex = this.history.length;
            this.commandCount++;
            
            // First command achievement
            if(this.commandCount === 1) {
                achievements.unlock('first_command');
            }
            
            if(this.commands[command]) {
                this.commands[command]();
            } else {
                // Check for typed easter eggs
                this.checkEasterEggs(cmd);
            }
            
            // Auto-hide terminal after command
            const keepOpenCommands = ['help', 'whoami', 'ls', 'clear', 'achievements', 'stats'];
            if(!keepOpenCommands.includes(command) && command !== 'exit') {
                setTimeout(() => {
                    this.hide();
                }, 500);
            }
        },
        
        checkEasterEggs: function(cmd) {
            const lowerCmd = cmd.toLowerCase().trim();
            
            // Matrix
            if(lowerCmd.includes('matrix')) {
                achievements.unlock('matrix');
                this.addLine('Initializing Matrix protocol...');
                setTimeout(() => {
                    _0xeffect.show('💚 Matrix Mode!', 'Welcome to the Matrix...');
                    this.createMatrixEffect();
                }, 500);
                return;
            }
            
            // Deception
            if(lowerCmd.includes('deception')) {
                achievements.unlock('deception');
                _0xeffect.rainbow();
                _0xeffect.show('🌈 Secret Phrase Found!', 'The site is now rainbow mode!');
                this.addLine('Deception HQ activated. Rainbow mode enabled.');
                return;
            }
            
            // Name backwards
            if(lowerCmd.includes('xyeocedhtyort')) {
                achievements.unlock('backwards');
                _0xeffect.show('🔤 Backwards Name!', 'Identity confirmed backwards.');
                this.addLine('User identity verified (backwards).');
                return;
            }
            
            // Konami code (typed)
            if(lowerCmd.includes('up up down down left right left right b a') || 
               lowerCmd.includes('↑↑↓↓←→←→ba')) {
                achievements.unlock('konami');
                _0xeffect.confetti();
                _0xeffect.show('🎮 Konami Code!', 'You entered the Konami code!');
                this.addLine('Konami code activated!');
                return;
            }
            
            // Secret commands
            const secrets = {
                'confetti': () => {
                    _0xeffect.confetti();
                    this.addLine('Confetti celebration activated!');
                },
                'dance': () => {
                    _0xeffect.dance();
                    this.addLine('Dance mode activated!');
                },
                'circle': () => {
                    _0xeffect.circle();
                    this.addLine('Circle drawn!');
                },
                'secret': () => {
                    achievements.unlock('secret');
                    _0xeffect.show('🔍 Secret Found!', 'You discovered a secret command!');
                    this.addLine('Secret command discovered. Try: confetti, dance, circle');
                }
            };
            
            if(secrets[lowerCmd]) {
                secrets[lowerCmd]();
                return;
            }
            
            // Unknown command
            this.addLine(`Command not found: ${cmd}. Type "help" for available commands.`);
        },
        
        createMatrixEffect: function() {
            // Fade out all content
            const contentFade = document.createElement('div');
            contentFade.id = 'matrixContentFade';
            contentFade.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:99995;pointer-events:none;transition:opacity 0.5s ease;opacity:1;';
            document.body.appendChild(contentFade);
            
            // Make all sections fade
            const sections = document.querySelectorAll('section, .hero-content, .about-content, .projects-grid, .contact-grid, .footer-content');
            sections.forEach(section => {
                section.style.transition = 'opacity 0.5s ease';
                section.style.opacity = '0.2';
            });
            
            // Create matrix canvas
            const canvas = document.createElement('canvas');
            canvas.id = 'matrixCanvas';
            canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99996;pointer-events:none;opacity:1;';
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            document.body.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#a855f7'; // Purple color
            ctx.font = '14px monospace';
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
            const columns = Math.floor(canvas.width / 20);
            const drops = Array(columns).fill(1);
            
            function draw() {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#a855f7'; // Purple color
                drops.forEach((drop, i) => {
                    const text = chars[Math.floor(Math.random() * chars.length)];
                    ctx.fillText(text, i * 20, drop * 20);
                    if(drop * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                    drops[i]++;
                });
            }
            
            const interval = setInterval(draw, 50);
            
            setTimeout(() => {
                clearInterval(interval);
                canvas.remove();
                contentFade.style.opacity = '0';
                setTimeout(() => {
                    contentFade.remove();
                    // Restore content opacity
                    sections.forEach(section => {
                        section.style.opacity = '1';
                    });
                }, 500);
            }, 10000);
        },
        
        registerCommands: function() {
            this.commands = {
                help: () => {
                    achievements.unlock('help');
                    this.addLine('Available commands:');
                    this.addLine('  help - Show this help message');
                    this.addLine('  clear - Clear terminal');
                    this.addLine('  whoami - Display user info');
                    this.addLine('  ls - List files (not really)');
                    this.addLine('  achievements - View your achievements');
                    this.addLine('  stats - View statistics');
                    this.addLine('  matrix - Enter the Matrix');
                    this.addLine('  deception - Activate rainbow mode');
                    this.addLine('  confetti - Celebrate with confetti');
                    this.addLine('  dance - Make everything dance');
                    this.addLine('  circle - Draw a perfect circle');
                    this.addLine('  exit - Close terminal');
                    this.addLine('');
                    this.addLine('Easter eggs: Try typing "matrix", "deception", or "xyeocedhtyort"');
                },
                clear: () => {
                    achievements.unlock('clear');
                    if(this.body) this.body.innerHTML = '';
                },
                whoami: () => {
                    achievements.unlock('whoami');
                    this.addLine('user@deception-hq');
                    this.addLine('You are a visitor exploring the terminal.');
                    this.addLine('Welcome to Deception HQ!');
                },
                ls: () => {
                    achievements.unlock('ls');
                    this.addLine('total 0');
                    this.addLine('drwxr-xr-x  2 user user 4096 Jan  1 00:00 .');
                    this.addLine('drwxr-xr-x  3 user user 4096 Jan  1 00:00 ..');
                    this.addLine('-rw-r--r--  1 user user    0 Jan  1 00:00 easter_eggs.txt');
                    this.addLine('-rw-r--r--  1 user user    0 Jan  1 00:00 achievements.json');
                },
                achievements: () => {
                    const progress = achievements.getProgress();
                    const unlocked = achievements.getUnlocked();
                    
                    this.addLine(`Achievements: ${progress.unlocked}/${progress.total} (${progress.percentage}%)`);
                    this.addLine('');
                    
                    if(unlocked.length === 0) {
                        this.addLine('No achievements unlocked yet. Keep exploring!');
                    } else {
                        unlocked.forEach(ach => {
                            this.addLine(`  ${ach.icon} ${ach.name} - ${ach.description}`);
                        });
                    }
                    
                    this.addLine('');
                    this.addLine('Locked achievements:');
                    Object.values(achievements.list).forEach(ach => {
                        if(!ach.unlocked) {
                            this.addLine(`  🔒 ${ach.name} - ${ach.description}`);
                        }
                    });
                },
                stats: () => {
                    const progress = achievements.getProgress();
                    this.addLine('Terminal Statistics:');
                    this.addLine(`  Commands executed: ${this.commandCount}`);
                    this.addLine(`  Achievements unlocked: ${progress.unlocked}/${progress.total}`);
                    this.addLine(`  Progress: ${progress.percentage}%`);
                    this.addLine(`  Commands in history: ${this.history.length}`);
                },
                exit: () => {
                    this.addLine('Closing terminal...');
                    setTimeout(() => this.hide(), 500);
                }
            };
        }
    };
    
    // Initialize terminal on load
    setTimeout(() => {
        terminal.init();
    }, 1000);
    
})();
