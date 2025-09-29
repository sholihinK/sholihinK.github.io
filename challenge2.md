<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agency 7 — Cipher Ops</title>
    <style>
        /* Cyberpunk CSS Variables */
        :root {
            --bg-primary: #0d0221;
            --bg-secondary: #1a0933;
            --bg-card: #2d1b4e;
            --text-primary: #e0d4f7;
            --text-secondary: #b794f6;
            --accent-primary: #ff00ff;
            --accent-secondary: #00ffff;
            --accent-glow: rgba(255, 0, 255, 0.4);
            --accent-cyan-glow: rgba(0, 255, 255, 0.3);
            --border-color: #6b46c1;
            --danger-red: #ff3366;
            --warning-orange: #ff6b35;
            --success-green: #00ff88;
            --font-mono: 'Courier New', 'Monaco', monospace;
            --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Reset and Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-sans);
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
            background-image: 
                radial-gradient(circle at 1px 1px, rgba(255,0,255,0.15) 1px, transparent 0),
                linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
            background-size: 25px 25px, 100% 100%;
        }

        /* Glowing border animation */
        @keyframes glow-border {
            0%, 100% { box-shadow: 0 0 20px var(--accent-glow); }
            50% { box-shadow: 0 0 35px var(--accent-cyan-glow), 0 0 20px var(--accent-glow); }
        }

        /* Safety Banners */
        .safety-banner {
            background: linear-gradient(45deg, var(--danger-red), #ff1744);
            color: white;
            text-align: center;
            padding: 12px 20px;
            font-weight: bold;
            font-family: var(--font-mono);
            font-size: 14px;
            position: sticky;
            z-index: 1000;
            box-shadow: 0 2px 15px rgba(255, 51, 102, 0.4);
            animation: glow-border 3s ease-in-out infinite;
        }

        .safety-banner--top {
            top: 0;
        }

        .safety-banner--bottom {
            bottom: 0;
        }

        .safety-icon {
            margin: 0 10px;
            font-size: 16px;
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }

        /* Training Ribbon */
        .training-ribbon {
            position: fixed;
            top: 60px;
            right: -40px;
            background: linear-gradient(45deg, var(--warning-orange), #ff8f00);
            color: black;
            padding: 8px 50px;
            font-family: var(--font-mono);
            font-size: 12px;
            font-weight: bold;
            transform: rotate(45deg);
            z-index: 999;
            box-shadow: 0 2px 15px rgba(255, 107, 53, 0.4);
        }

        /* Layout */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header */
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px 0;
            border-bottom: 2px solid var(--accent-primary);
            position: relative;
        }

        .header::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 200px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent-secondary), transparent);
            animation: glow-border 2s ease-in-out infinite;
        }

        .header__title {
            font-family: var(--font-mono);
            font-size: 2.5rem;
            background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
            text-shadow: 0 0 20px var(--accent-glow);
        }

        .header__subtitle {
            font-family: var(--font-mono);
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 0;
        }

        /* Cards */
        .card {
            background: linear-gradient(145deg, var(--bg-card), var(--bg-secondary));
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(107, 70, 193, 0.2);
            position: relative;
            overflow: hidden;
        }

        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary));
            opacity: 0.7;
        }

        .card__title {
            font-family: var(--font-mono);
            background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 15px;
            font-size: 1.4rem;
            text-shadow: 0 0 10px var(--accent-glow);
        }

        /* Terminal Boxes */
        .terminal-box {
            background: var(--bg-primary);
            border: 1px solid var(--accent-primary);
            border-radius: 8px;
            padding: 15px;
            font-family: var(--font-mono);
            color: var(--accent-secondary);
            margin: 10px 0;
            word-break: break-all;
            box-shadow: 
                inset 0 0 15px rgba(255, 0, 255, 0.1),
                0 0 20px rgba(0, 255, 255, 0.2);
            position: relative;
        }

        .terminal-box::before {
            content: '> ';
            color: var(--accent-primary);
            font-weight: bold;
        }

        .ciphertext-label {
            font-family: var(--font-mono);
            color: var(--text-secondary);
            font-size: 0.9rem;
            display: block;
            margin-bottom: 5px;
        }

        /* Buttons */
        .btn {
            background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
            color: white;
            border: none;
            padding: 12px 24px;
            font-family: var(--font-mono);
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
            width: 300px;
            height: 300px;
        }

        .btn:hover {
            box-shadow: 0 0 25px var(--accent-glow);
            transform: translateY(-2px);
        }

        .btn--secondary {
            background: transparent;
            color: var(--accent-primary);
            border: 2px solid var(--accent-primary);
        }

        .btn--secondary:hover {
            background: var(--accent-primary);
            color: white;
            box-shadow: 0 0 25px var(--accent-glow);
        }

        /* Tabs */
        .tabs {
            display: flex;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 20px;
            background: rgba(107, 70, 193, 0.1);
            border-radius: 8px 8px 0 0;
        }

        .tab {
            background: transparent;
            border: none;
            padding: 15px 25px;
            color: var(--text-secondary);
            font-family: var(--font-mono);
            cursor: pointer;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .tab.active {
            color: var(--accent-primary);
            border-bottom-color: var(--accent-primary);
            background: rgba(255, 0, 255, 0.1);
            box-shadow: 0 0 15px var(--accent-glow);
        }

        .tab:hover {
            color: var(--accent-secondary);
            background: rgba(0, 255, 255, 0.1);
        }

        .tab-panel {
            display: none;
            background: rgba(45, 27, 78, 0.3);
            padding: 20px;
            border-radius: 0 0 8px 8px;
        }

        .tab-panel.active {
            display: block;
        }

        /* Form Elements */
        .input-group {
            margin-bottom: 20px;
        }

        .input-group label {
            display: block;
            margin-bottom: 8px;
            font-family: var(--font-mono);
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .input-text {
            width: 100%;
            background: var(--bg-primary);
            border: 2px solid var(--border-color);
            color: var(--text-primary);
            padding: 12px;
            font-family: var(--font-mono);
            border-radius: 6px;
            resize: vertical;
            min-height: 100px;
            transition: all 0.3s ease;
        }

        .input-text:focus {
            outline: none;
            border-color: var(--accent-primary);
            box-shadow: 0 0 20px var(--accent-glow);
            background: rgba(255, 0, 255, 0.05);
        }

        /* Slider */
        .slider-container {
            margin: 20px 0;
        }

        .slider {
            width: 100%;
            margin: 10px 0;
            -webkit-appearance: none;
            background: var(--bg-primary);
            border-radius: 5px;
            height: 8px;
            border: 1px solid var(--border-color);
        }

        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
            cursor: pointer;
            box-shadow: 0 0 10px var(--accent-glow);
        }

        .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
            cursor: pointer;
            border: none;
            box-shadow: 0 0 10px var(--accent-glow);
        }

        .slider-value {
            font-family: var(--font-mono);
            color: var(--accent-primary);
            font-weight: bold;
            font-size: 1.2rem;
        }

        /* Hard Mode */
        .hard-mode {
            margin-top: 20px;
            padding: 20px;
            border: 2px solid var(--warning-orange);
            border-radius: 8px;
            background: linear-gradient(145deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05));
            position: relative;
        }

        .hard-mode::before {
            content: 'CLASSIFIED';
            position: absolute;
            top: -12px;
            left: 20px;
            background: var(--warning-orange);
            color: black;
            padding: 4px 12px;
            font-family: var(--font-mono);
            font-size: 12px;
            font-weight: bold;
            border-radius: 4px;
        }

        .hard-mode-label {
            font-family: var(--font-mono);
            color: var(--warning-orange);
            font-weight: bold;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .hint-text {
            font-size: 0.9rem;
            color: var(--text-secondary);
            font-style: italic;
            background: rgba(183, 148, 246, 0.1);
            padding: 10px;
            border-radius: 6px;
            border-left: 3px solid var(--accent-secondary);
        }

        /* Success Animation */
        .success-animation {
            text-align: center;
            padding: 30px;
            background: linear-gradient(145deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 255, 0.1));
            border: 2px solid var(--success-green);
            border-radius: 12px;
            margin: 20px 0;
            position: relative;
            overflow: hidden;
        }

        .success-animation::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            animation: sweep 2s ease-in-out infinite;
        }

        @keyframes sweep {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .stamp {
            font-family: var(--font-mono);
            font-size: 2rem;
            background: linear-gradient(45deg, var(--success-green), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: pulse-glow 2s ease-in-out infinite;
            position: relative;
            z-index: 1;
        }

        @keyframes pulse-glow {
            0%, 100% { 
                filter: drop-shadow(0 0 10px var(--success-green));
                transform: scale(1);
            }
            50% { 
                filter: drop-shadow(0 0 25px var(--success-green));
                transform: scale(1.05);
            }
        }

        .badge {
            font-family: var(--font-mono);
            background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            margin-top: 15px;
            display: inline-block;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 20px var(--accent-glow);
            position: relative;
            z-index: 1;
        }

        /* Confetti */
        .confetti {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1000;
        }

        .confetti-piece {
            position: absolute;
            width: 8px;
            height: 8px;
            animation: confetti-fall 3s linear infinite;
        }

        .confetti-piece:nth-child(odd) {
            background: var(--accent-primary);
            border-radius: 50%;
        }

        .confetti-piece:nth-child(even) {
            background: var(--accent-secondary);
        }

        @keyframes confetti-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }

        /* Cyber grid effect */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(255,0,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,0,255,0.03) 1px, transparent 1px);
            background-size: 50px 50px;
            pointer-events: none;
            z-index: -1;
        }

        /* Utility Classes */
        .hidden {
            display: none !important;
        }

        .text-center {
            text-align: center;
        }

        .margin-top {
            margin-top: 20px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .header__title {
                font-size: 2rem;
            }
            
            .container {
                padding: 15px;
            }
            
            .tabs {
                flex-wrap: wrap;
            }
            
            .tab {
                flex: 1;
                min-width: 100px;
            }
        }

        /* Print Styles */
        @media print {
            body {
                background: white !important;
                color: black !important;
            }
            
            .safety-banner,
            .training-ribbon {
                display: none;
            }
            
            .card {
                border: 1px solid black;
                box-shadow: none;
            }
            
            .terminal-box {
                border: 1px solid black;
                background: #f5f5f5;
                color: black;
            }
            
            .btn {
                background: #333 !important;
                color: white !important;
            }
        }
    </style>
</head>
<body>
    <!-- Safety Banner Top -->
    <div class="safety-banner safety-banner--top">
        <span class="safety-icon">⚠️</span>
        Training Simulation: Never paste commands from websites in real life.
        <span class="safety-icon">⚠️</span>
    </div>

    <!-- Training Use Ribbon -->
    <div class="training-ribbon">FOR TRAINING USE ONLY</div>

    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1 class="header__title">Agency 7 — Cipher Ops</h1>
            <p class="header__subtitle">Cyberpunk Intercept Analysis Console</p>
        </header>

        <!-- Mission Brief Section -->
        <section class="mission-brief">
            <div class="card">
                <h2 class="card__title">Operation Night Owl — Intercept 17B</h2>
                <p class="mission-description">
                    Signals picked up a short burst transmission from a hostile actor embedded near the frontline. 
                    The payload appears to be encoded in multiple layers. Your task: decode and report the directive.
                </p>
                
                <div class="ciphertext-block">
                    <label class="ciphertext-label">Primary Intercept:</label>
                    <div class="terminal-box" id="primaryCiphertext">SU5JVElBVEVQUk9UT0NPTDIy</div>
                </div>

                <button class="btn btn--secondary" id="toggleHardMode">
                    Show Alternate Intercept
                </button>

                <div class="hard-mode hidden" id="hardModeSection">
                    <div class="hard-mode-label">Hard Mode Challenge (Multi-Layer)</div>
                    <p class="hint-text">SIGINT suggests multiple encryption layers. This intercept has a different solution than the primary mission!</p>
                    <div class="terminal-box">RlVFY254cTNuek1qbmFwalpRcD0=</div>
                    <button class="btn btn--secondary" id="showHint">Show Decoding Hint</button>
                    <div class="hint-text hidden" id="hintText">
                        <strong>Decoding Process:</strong><br>
                        1. Base64 decode<br>
                        2. ROT13 reverse (Caesar -13)<br>
                        3. Base64 decode again<br>
                        4. Caesar shift -5<br>
                        Result will be different from primary mission!
                    </div>
                </div>
            </div>
        </section>

        <!-- Cipher Lab Section -->
        <section class="cipher-lab">
            <div class="card">
                <h2 class="card__title">Cipher Lab</h2>
                
                <div class="tabs">
                    <button class="tab active" data-tab="base64">Base64</button>
                    <button class="tab" data-tab="caesar">Caesar Cipher</button>
                    <button class="tab" data-tab="rot13">ROT13</button>
                </div>

                <!-- Base64 Tab -->
                <div class="tab-panel active" id="base64-panel">
                    <div class="input-group">
                        <label for="base64Input">Input Text:</label>
                        <textarea class="input-text" id="base64Input" placeholder="Enter text to encode/decode..."></textarea>
                    </div>
                    <div>
                        <button class="btn" onclick="base64Encode()">Encode</button>
                        <button class="btn" onclick="base64Decode()">Decode</button>
                    </div>
                    <div class="input-group margin-top">
                        <label>Output:</label>
                        <div class="terminal-box" id="base64Output">Output will appear here...</div>
                    </div>
                    <p class="hint-text">Encoding is not encryption; Base64 changes how data looks, not how secure it is.</p>
                </div>

                <!-- Caesar Cipher Tab -->
                <div class="tab-panel" id="caesar-panel">
                    <div class="input-group">
                        <label for="caesarInput">Input Text:</label>
                        <textarea class="input-text" id="caesarInput" placeholder="Enter text to encode/decode..."></textarea>
                    </div>
                    <div class="slider-container">
                        <label>Shift Value: <span class="slider-value" id="shiftValue">0</span></label>
                        <input type="range" class="slider" id="caesarShift" min="0" max="25" value="0">
                    </div>
                    <div>
                        <button class="btn" onclick="caesarEncode()">Encode</button>
                        <button class="btn" onclick="caesarDecode()">Decode</button>
                    </div>
                    <div class="input-group margin-top">
                        <label>Output:</label>
                        <div class="terminal-box" id="caesarOutput">Output will appear here...</div>
                    </div>
                </div>

                <!-- ROT13 Tab -->
                <div class="tab-panel" id="rot13-panel">
                    <div class="input-group">
                        <label for="rot13Input">Input Text:</label>
                        <textarea class="input-text" id="rot13Input" placeholder="Enter text to apply ROT13..."></textarea>
                    </div>
                    <div>
                        <button class="btn" onclick="applyROT13()">Apply ROT13</button>
                    </div>
                    <div class="input-group margin-top">
                        <label>Output:</label>
                        <div class="terminal-box" id="rot13Output">Output will appear here...</div>
                    </div>
                    <p class="hint-text">ROT13: A Caesar shift of 13. Applying it twice restores the original text.</p>
                </div>
            </div>
        </section>

        <!-- Success Gate Section -->
        <section class="success-gate">
            <div class="card">
                <h2 class="card__title">Report to HQ — Success Phrase</h2>
                <p>Enter the decoded directive exactly to complete the mission. Each difficulty level has a different answer!</p>
                
                <div class="input-group">
                    <label for="successInput">Success Phrase:</label>
                    <input type="text" class="input-text" id="successInput" placeholder="Enter the decoded message..." style="min-height: auto;">
                </div>
                
                <button class="btn" onclick="checkSuccess()">Submit Report</button>
                
                <div class="hidden" id="successAnimation">
                    <div class="success-animation">
                        <div class="stamp">CLASSIFIED — DECODED</div>
                        <div class="badge">Status: Elite — Cyber Agent</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Debrief Section -->
        <section class="debrief">
            <div class="card">
                <h2 class="card__title">Mission Debrief</h2>
                <ul>
                    <li>A cipher uses a rule and a key to scramble text.</li>
                    <li>Base64 is encoding for representation, not secrecy.</li>
                    <li>Keys matter: without the key, decoding is difficult.</li>
                    <li>Modern cryptography uses strong math and keys; simple ciphers teach the basics.</li>
                    <li>Multi-layer encryption increases security exponentially.</li>
                </ul>
                <p class="hint-text margin-top">
                    <strong>Safety Note:</strong> In real life, do not copy or run commands found on web pages. 
                    Decode and analyze safely; never execute.
                </p>
            </div>
        </section>
    </div>

    <!-- Safety Banner Bottom -->
    <div class="safety-banner safety-banner--bottom">
        <span class="safety-icon">⚠️</span>
        Training Simulation: Never paste commands from websites in real life.
        <span class="safety-icon">⚠️</span>
    </div>

    <script>
        class SpyCipherApp {
            constructor() {
                this.init();
            }

            init() {
                this.setupTabs();
                this.setupEventListeners();
            }

            // Tab System
            setupTabs() {
                const tabs = document.querySelectorAll('.tab');
                const panels = document.querySelectorAll('.tab-panel');

                tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const targetTab = tab.dataset.tab;
                        
                        // Remove active from all tabs and panels
                        tabs.forEach(t => t.classList.remove('active'));
                        panels.forEach(p => p.classList.remove('active'));
                        
                        // Add active to clicked tab and corresponding panel
                        tab.classList.add('active');
                        document.getElementById(targetTab + '-panel').classList.add('active');
                    });
                });
            }

            // Event Listeners
            setupEventListeners() {
                // Hard mode toggle
                document.getElementById('toggleHardMode').addEventListener('click', () => {
                    const hardModeSection = document.getElementById('hardModeSection');
                    hardModeSection.classList.toggle('hidden');
                });

                // Hint toggle
                document.getElementById('showHint').addEventListener('click', () => {
                    const hintText = document.getElementById('hintText');
                    hintText.classList.toggle('hidden');
                });

                // Caesar shift slider
                const shiftSlider = document.getElementById('caesarShift');
                const shiftValue = document.getElementById('shiftValue');
                shiftSlider.addEventListener('input', () => {
                    shiftValue.textContent = shiftSlider.value;
                });
            }

            // Caesar Cipher Function
            caesarShift(text, shift) {
                return text.split('').map(char => {
                    if (char.match(/[a-z]/i)) {
                        const ascii = char.charCodeAt(0);
                        const isUpperCase = ascii >= 65 && ascii <= 90;
                        const offset = isUpperCase ? 65 : 97;
                        return String.fromCharCode((ascii - offset + shift + 26) % 26 + offset);
                    }
                    return char;
                }).join('');
            }

            // Show Confetti
            showConfetti() {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                document.body.appendChild(confetti);

                for (let i = 0; i < 75; i++) {
                    const piece = document.createElement('div');
                    piece.className = 'confetti-piece';
                    piece.style.left = Math.random() * 100 + '%';
                    piece.style.animationDelay = Math.random() * 3 + 's';
                    piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    confetti.appendChild(piece);
                }

                setTimeout(() => {
                    document.body.removeChild(confetti);
                }, 6000);
            }
        }

        // Initialize the app
        const app = new SpyCipherApp();

        // Cipher Functions
        function base64Encode() {
            const input = document.getElementById('base64Input').value;
            if (!input) return;
            try {
                const encoded = btoa(input);
                document.getElementById('base64Output').textContent = encoded;
            } catch (e) {
                document.getElementById('base64Output').textContent = 'Error: Invalid input for encoding';
            }
        }

        function base64Decode() {
            const input = document.getElementById('base64Input').value;
            if (!input) return;
            try {
                const decoded = atob(input);
                document.getElementById('base64Output').textContent = decoded;
            } catch (e) {
                document.getElementById('base64Output').textContent = 'Error: Invalid Base64 input';
            }
        }

        function caesarEncode() {
            const input = document.getElementById('caesarInput').value;
            const shift = parseInt(document.getElementById('caesarShift').value);
            if (!input) return;
            
            const result = app.caesarShift(input, shift);
            document.getElementById('caesarOutput').textContent = result;
        }

        function caesarDecode() {
            const input = document.getElementById('caesarInput').value;
            const shift = parseInt(document.getElementById('caesarShift').value);
            if (!input) return;
            
            const result = app.caesarShift(input, -shift);
            document.getElementById('caesarOutput').textContent = result;
        }

        function applyROT13() {
            const input = document.getElementById('rot13Input').value;
            if (!input) return;
            
            const result = app.caesarShift(input, 13);
            document.getElementById('rot13Output').textContent = result;
        }

        function checkSuccess() {
            const input = document.getElementById('successInput').value.trim();
            const primaryPhrase = 'InitiateProtocol22';
            const hardModePhrase = 'CodeBreaker007';
            
            if (input === primaryPhrase || input === hardModePhrase) {
                document.getElementById('successAnimation').classList.remove('hidden');
                app.showConfetti();
                
                // Show different messages based on which phrase was entered
                const stamp = document.querySelector('.stamp');
                const badge = document.querySelector('.badge');
                
                if (input === hardModePhrase) {
                    stamp.textContent = 'CLASSIFIED — ELITE DECODED';
                    badge.textContent = 'Status: Master — Cipher Elite';
                } else {
                    stamp.textContent = 'CONFIDENTIAL — VERIFIED';
                    badge.textContent = 'Status: Cleared — Cipher Apprentice';
                }
            } else {
                alert('Incorrect phrase. Keep trying, agent! Remember: each difficulty has a different answer.');
            }
        }
    </script>
</body>
</html>
