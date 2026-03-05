---
layout: default
title: Challenge 01 — Source Recon
---
<style>
:root {
  --bg: #0d1117;
  --bg2: #161b22;
  --bg3: #1c2128;
  --border: #30363d;
  --accent: #39ff14;
  --accent2: #00d4ff;
  --text: #e6edf3;
  --muted: #8b949e;
  --red: #ff3333;
  --yellow: #ffbe0b;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Space Mono', monospace;
  background: var(--bg);
  color: var(--text);
}

.safety-ribbon {
  background: #ff6b00;
  color: #000;
  text-align: center;
  padding: 8px;
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 3px;
  animation: ribbon-pulse 3s ease-in-out infinite;
}
@keyframes ribbon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.challenge-wrap {
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px 60px;
}

.challenge-header {
  text-align: center;
  margin-bottom: 36px;
}
.challenge-header .tag {
  display: inline-block;
  background: var(--bg3);
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 0.7em;
  letter-spacing: 3px;
  padding: 4px 12px;
  border-radius: 2px;
  margin-bottom: 16px;
}
.challenge-header h1 {
  font-size: 1.8em;
  font-weight: 700;
  color: var(--accent);
  text-shadow: 0 0 30px rgba(57,255,20,0.3);
  letter-spacing: 2px;
  margin-bottom: 8px;
}
.challenge-header p {
  color: var(--muted);
  font-size: 0.85em;
}

.card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 20px;
}

.card h2 {
  font-size: 0.85em;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 12px;
  text-transform: uppercase;
}

.card p, .card li {
  color: var(--text);
  font-size: 0.85em;
  line-height: 1.7;
}

.card ul {
  padding-left: 20px;
  margin-top: 8px;
}

.card li {
  margin-bottom: 6px;
}

code {
  background: var(--bg3);
  border: 1px solid var(--border);
  color: var(--accent);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Space Mono', monospace;
  font-size: 0.9em;
}

.input-area {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;
}

.pw-input {
  flex: 1;
  min-width: 200px;
  background: var(--bg3);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 12px 16px;
  font-family: 'Space Mono', monospace;
  font-size: 0.9em;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.pw-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 8px rgba(57,255,20,0.2);
}
.pw-input::placeholder { color: var(--muted); }

.btn {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
  padding: 12px 22px;
  font-family: 'Space Mono', monospace;
  font-size: 0.85em;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s, box-shadow 0.2s;
}
.btn:hover {
  background: rgba(57,255,20,0.08);
  box-shadow: 0 0 12px rgba(57,255,20,0.25);
}

.btn-muted {
  border-color: var(--muted);
  color: var(--muted);
}
.btn-muted:hover {
  background: rgba(139,148,158,0.08);
  box-shadow: none;
  color: var(--text);
}

.attempt-counter {
  font-size: 0.75em;
  color: var(--muted);
  margin-top: 10px;
}

.hint-section {
  margin-top: 16px;
}

.hint-item {
  background: var(--bg3);
  border: 1px solid var(--yellow);
  border-radius: 4px;
  padding: 12px 16px;
  margin-top: 10px;
  font-size: 0.82em;
  color: var(--yellow);
  display: none;
  animation: fade-in 0.3s ease;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

.error-msg {
  color: var(--red);
  font-size: 0.8em;
  margin-top: 10px;
  display: none;
}

/* Flag reveal */
.flag-card {
  display: none;
  background: var(--bg3);
  border: 1px solid var(--accent);
  box-shadow: 0 0 30px rgba(57,255,20,0.15);
  border-radius: 6px;
  padding: 28px;
  text-align: center;
  animation: flag-appear 0.5s ease;
}
@keyframes flag-appear {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.flag-card h2 {
  color: var(--accent);
  font-size: 1em;
  letter-spacing: 2px;
  margin-bottom: 16px;
}
.flag-value {
  background: var(--bg);
  border: 1px dashed var(--accent);
  color: var(--accent);
  padding: 14px 20px;
  border-radius: 4px;
  font-size: 0.95em;
  letter-spacing: 1px;
  margin-bottom: 16px;
  word-break: break-all;
}
.flag-card p {
  color: var(--muted);
  font-size: 0.8em;
  line-height: 1.6;
}

.post-success {
  display: none;
  margin-top: 20px;
}
.post-success .card {
  border-left-color: var(--red);
}
.post-success .card h2 {
  color: var(--red);
}

.info-card {
  border-left-color: var(--accent2);
}
.info-card h2 {
  color: var(--accent2) !important;
}
</style>

<div class="safety-ribbon">// TRAINING EXERCISE — EDUCATIONAL PURPOSES ONLY //</div>

<div class="challenge-wrap">
  <div class="challenge-header">
    <div class="tag">CHALLENGE 01</div>
    <h1>SOURCE RECON</h1>
    <p>A developer made a critical mistake. Can you find it?</p>
  </div>

  <div class="card">
    <h2>// Mission Brief</h2>
    <p>An intern pushed credentials directly into the front-end codebase. Your job is to perform a source code recon and recover the hardcoded password.</p>
    <p style="margin-top:10px;">Use your browser's built-in developer tools — the evidence is hiding in plain sight.</p>
  </div>

  <div class="card">
    <h2>// Submit Credentials</h2>
    <p>Enter the password you recovered from the source:</p>
    <div class="input-area">
      <input type="text" id="pwInput" class="pw-input" placeholder="recovered_password_here" autocomplete="off">
      <button class="btn" onclick="checkPassword()">SUBMIT</button>
    </div>
    <div class="attempt-counter" id="attemptCounter">Attempts: 0 / —</div>
    <div class="error-msg" id="errorMsg">Incorrect. Check the source code more carefully.</div>

    <div class="hint-section">
      <button class="btn btn-muted" id="hintBtn" onclick="showNextHint()" style="margin-top:14px;font-size:0.78em;">
        REQUEST HINT [0/3]
      </button>
      <div class="hint-item" id="hint1">
        HINT 1: Every webpage is made of code. Right-click anywhere and select "View Page Source" (or press <code>Ctrl+U</code>). Look for HTML comments — they start with <code>&lt;!--</code>.
      </div>
      <div class="hint-item" id="hint2">
        HINT 2: Source code isn't just HTML. This page runs JavaScript. Open the browser DevTools (<code>F12</code>), go to the Sources or Debugger tab, and examine the script.
      </div>
      <div class="hint-item" id="hint3">
        HINT 3: Open the Console tab in DevTools (<code>F12</code>). The developer left debug output there. Check what's been logged.
      </div>
    </div>
  </div>

  <div class="flag-card" id="flagCard">
    <h2>// ACCESS GRANTED</h2>
    <div class="flag-value">FLAG{s0urc3_c0d3_1s_n0t_a_s3cr3t}</div>
    <p>You recovered the hardcoded credential. Mission complete.</p>
  </div>

  <div class="post-success" id="postSuccess">
    <div class="card">
      <h2>// Why This Is Critical</h2>
      <p>You just demonstrated a <strong>CWE-798: Use of Hard-coded Credentials</strong> vulnerability. Here's why this matters in the real world:</p>
      <ul style="margin-top:10px;">
        <li>Browser source code is public — every user can read it</li>
        <li>Git history preserves secrets even after deletion</li>
        <li>Automated scanners (like <code>truffleHog</code>, <code>gitleaks</code>) find these in seconds</li>
        <li>Real breaches have exposed millions of records this way</li>
      </ul>
      <p style="margin-top:10px;color:var(--muted);">Fix: Store secrets server-side. Use environment variables. Never ship credentials in client-side code.</p>
    </div>
  </div>

  <div class="card info-card">
    <h2>// Real-World Examples</h2>
    <ul>
      <li>Mobile apps shipped with AWS keys in compiled code (accessible via reverse engineering)</li>
      <li>GitHub repos with <code>.env</code> files committed by accident — found by bots within minutes</li>
      <li>WordPress themes with hardcoded DB credentials in PHP files served publicly</li>
      <li>IoT firmware images with admin passwords compiled in — same across all devices</li>
    </ul>
  </div>
</div>

<!-- TODO: Remove before prod — password is cyberdetective2024 -->

<script>
// WARNING: Hardcoded secrets in client-side code are visible to everyone.
// This is intentional for this training challenge — do NOT do this in production.
const secretPassword = "cyberdetective2024";

let attempts = 0;
let hintsShown = 0;

function checkPassword() {
  const input = document.getElementById('pwInput').value.trim();
  const errorMsg = document.getElementById('errorMsg');
  const counter = document.getElementById('attemptCounter');

  if (!input) return;

  attempts++;
  counter.textContent = `Attempts: ${attempts}`;

  if (input === secretPassword) {
    errorMsg.style.display = 'none';
    document.getElementById('flagCard').style.display = 'block';
    document.getElementById('postSuccess').style.display = 'block';
    document.getElementById('flagCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    errorMsg.style.display = 'block';
    // Auto-show hint after 3 failed attempts
    if (attempts === 3 && hintsShown === 0) {
      showNextHint();
    }
  }
}

function showNextHint() {
  if (hintsShown >= 3) return;
  hintsShown++;
  document.getElementById('hint' + hintsShown).style.display = 'block';
  const btn = document.getElementById('hintBtn');
  if (hintsShown < 3) {
    btn.textContent = `REQUEST HINT [${hintsShown}/3]`;
  } else {
    btn.textContent = 'ALL HINTS REVEALED [3/3]';
    btn.disabled = true;
    btn.style.opacity = '0.5';
    btn.style.cursor = 'default';
  }
}

document.getElementById('pwInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') checkPassword();
});

// Intentionally visible — part of the challenge
console.log('%c[DEBUG] Auth module loaded', 'color: #39ff14; font-family: monospace');
console.log('%c[DEBUG] secretPassword = "' + secretPassword + '"', 'color: #ff3333; font-family: monospace');
console.log('%c[WARNING] Hardcoded credentials detected in source. This is CWE-798.', 'color: #ffbe0b; font-family: monospace');
</script>
