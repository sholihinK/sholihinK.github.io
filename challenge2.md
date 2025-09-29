<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agency 7 — Cipher Ops</title>
    <style>
        /* CSS Variables */
        :root {
            --bg-primary: #0a0a0a;
            --bg-secondary: #1a1a1a;
            --bg-card: #141414;
            --text-primary: #e0e0e0;
            --text-secondary: #b0b0b0;
            --accent-green: #00ff41;
            --accent-green-dim: rgba(0, 255, 65, 0.3);
            --border-color: #333;
            --danger-red: #ff4444;
            --warning-orange: #ff8800;
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
                radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0);
            background-size: 20px 20px;
        }

        /* Safety Banners */
        .safety-banner {
            background: var(--danger-red);
            color: white;
            text-align: center;
            padding: 12px 20px;
            font-weight: bold;
            font-family: var(--font-mono);
            font-size: 14px;
            position: sticky;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(255, 68, 68, 0.3);
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
        }

        /* Training Ribbon */
        .training-ribbon {
            position: fixed;
            top: 60px;
            right: -40px;
            background: var(--warning-orange);
            color: black;
            padding: 8px 50px;
            font-family: var(--font-mono);
            font-size: 12px;
            font-weight: bold;
            transform: rotate(45deg);
            z-index: 999;
            box-shadow: 0 2px 10px rgba(255, 136, 0, 0.3);
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
            border-bottom: 2px solid var(--accent-green);
        }

        .header__title {
            font-family: var(--font-mono);
            font-size: 2.5rem;
            color: var(--accent-green);
            margin-bottom: 10px;
            text-shadow: 0 0 10px var(--accent-green-dim);
        }

        .header__subtitle {
            font-family: var(--font-mono);
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 0;
        }

        /* Cards */
        .card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .card__title {
            font-family: var(--font-mono);
            color: var(--accent-green);
            margin-bottom: 15px;
            font-size: 1.4rem;
        }

        /* Terminal Boxes */
        .terminal-box {
            background: var(--bg-primary);
            border: 1px solid var(--accent-green);
            border-radius: 4px;
            padding: 15px;
            font-family: var(--font-mono);
            color: var(--accent-green);
            margin: 10px 0;
            word-break: break-all;
            box-shadow: inset 0 0 10px var(--accent-green-dim);
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
            background: var(--accent-green);
            color: black;
            border: none;
            padding: 12px 24px;
            font-family: var(--font-mono);
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 5px;
        }

        .btn:hover {
            background: var(--text-primary);
            box-shadow: 0 0 15px var(--accent-green-dim);
        }

        .btn--secondary {
            background: transparent;
            color: var(--accent-green);
            border: 1px solid var(--accent-green);
        }

        .btn--secondary:hover {
            background: var(--accent-green);
            color: black;
        }

        /* Tabs */
        .tabs {
            display: flex;
            border-bottom: 1px solid var(--border-color);
            margin-bottom: 20px;
        }

        .tab {
            background: transparent;
            border: none;
            padding: 15px 25px;
            color: var(--text-secondary);
            font-family: var(--font-mono);
            cursor: pointer;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .tab.active {
            color: var(--accent-green);
            border-bottom-color: var(--accent-green);
        }

        .tab:hover {
            color: var(--text-primary);
        }

        .tab-panel {
            display: none;
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
        }

        .input-text {
            width: 100%;
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            color: var(--text-primary);
            padding: 12px;
            font-family: var(--font-mono);
            border-radius: 4px;
            resize: vertical;
            min-height: 100px;
        }

        .input-text:focus {
            outline: none;
            border-color: var(--accent-green);
            box-shadow: 0 0 10px var(--accent-green-dim);
        }

        /* Slider */
        .slider-container {
            margin: 20px 0;
        }

        .slider {
            width: 100%;
            margin: 10px 0;
        }

        .slider-value {
            font-family: var(--font-mono);
            color: var(--accent-green);
            font-weight: bold;
        }

        /* Hard Mode */
        .hard-mode {
            margin-top: 20px;
            padding: 20px;
            border: 1px solid var(--warning-orange);
            border-radius: 8px;
            background: rgba(255, 136, 0, 0.1);
        }

        .hard-mode-label {
            font-family: var(--font-mono);
            color: var(--warning-orange);
            font-weight: bold;
            margin-bottom: 10px;
        }

        .hint-text {
            font-size: 0.9rem;
            color: var(--text-secondary);
            font-style: italic;
        }

        /* Success Animation */
        .success-animation {
            text-align: center;
            padding: 30px;
            background: rgba(0, 255, 65, 0.1);
            border: 2px solid var(--accent-green);
            border-radius: 8px;
            margin: 20px 0;
        }

        .stamp {
            font-family: var(--font-mono);
            font-size: 2rem;
            color: var(--accent-green);
            text-shadow: 0 0 20px var(--accent-green);
            animation: pulse 2s infinite;
        }

        .badge {
            font-family: var(--font-mono);
            background: var(--accent-green);
            color: black;
            padding: 10px 20px;
            border-radius: 20px;
            margin-top: 15px;
            display: inline-block;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
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
            width: 10px;
            height: 10px;
            background: var(--accent-green);
            animation: confetti-fall 3s linear infinite;
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
                background: white;
                color: black;
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
            <p class="header__subtitle">Intercept Analysis Console</p>
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
                    <p class="hint-text">SIGINT suggests multiple encryption layers. Start with Base64, then try combinations.</p>
                    <div class="terminal-box">Q3RNMkczR2JHM1FLR0RRdUZ1SXBsQVBm</div>
                    <button class="btn btn--secondary" id="showHint">Show Decoding Hint</button>
                    <div class="hint-text hidden" id="hintText">
                        <strong>Decoding Process:</strong><br>
                        1. Base64 decode<br>
                        2. Caesar shift -7<br>
                        3. Base64 decode again<br>
                        4. Caesar shift -13<br>
                        Result should be the same as the primary mission.
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
                <p>Enter the decoded directive exactly to complete the mission.</p>
                
                <div class="input-group">
                    <label for="successInput">Success Phrase:</label>
                    <input type="text" class="input-text" id="successInput" placeholder="Enter the decoded message..." style="min-height: auto;">
                </div>
                
                <button class="btn" onclick="checkSuccess()">Submit Report</button>
                
                <div class="hidden" id="successAnimation">
                    <div class="success-animation">
                        <div class="stamp">CONFIDENTIAL — VERIFIED</div>
                        <div class="badge">Status: Cleared — Cipher Apprentice</div>
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

                for (let i = 0; i < 50; i++) {
                    const piece = document.createElement('div');
                    piece.className = 'confetti-piece';
                    piece.style.left = Math.random() * 100 + '%';
                    piece.style.animationDelay = Math.random() * 3 + 's';
                    piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
                    confetti.appendChild(piece);
                }

                setTimeout(() => {
                    document.body.removeChild(confetti);
                }, 5000);
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
            const successPhrase = 'InitiateProtocol22';
            
            if (input === successPhrase) {
                document.getElementById('successAnimation').classList.remove('hidden');
                app.showConfetti();
            } else {
                alert('Incorrect phrase. Keep trying, agent!');
            }
        }
    </script>
</body>
</html>
