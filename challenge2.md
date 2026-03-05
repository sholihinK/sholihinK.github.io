---
layout: default
title: Challenge 02 — Cipher Ops
---
<style>
@import url('https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap');

:root {
  --bg:      #0a0e1a;
  --bg2:     #0f1428;
  --bg3:     #141830;
  --cyan:    #00f5ff;
  --magenta: #ff006e;
  --yellow:  #ffbe0b;
  --green:   #39ff14;
  --red:     #ff3333;
  --text:    #e8eaf0;
  --muted:   #6b7280;
  --orange:  #ff6b00;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Satoshi', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

.safety-ribbon {
  background: var(--orange);
  color: #000;
  text-align: center;
  padding: 8px;
  font-size: 0.75em;
  font-weight: 700;
  letter-spacing: 3px;
  animation: ribbon-pulse 3s ease-in-out infinite;
  position: relative;
  z-index: 10;
}
@keyframes ribbon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.challenge-wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 40px 20px 60px;
  position: relative;
  z-index: 1;
}

.challenge-header {
  text-align: center;
  margin-bottom: 36px;
}
.challenge-header .tag {
  display: inline-block;
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.4);
  color: var(--cyan);
  font-size: 0.7em;
  letter-spacing: 3px;
  padding: 4px 12px;
  border-radius: 2px;
  margin-bottom: 16px;
  font-family: 'Courier New', monospace;
}
.challenge-header h1 {
  font-family: 'Clash Display', sans-serif;
  font-size: 1.9em;
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(0,245,255,0.3);
  letter-spacing: 2px;
  margin-bottom: 6px;
}
.challenge-header p { color: var(--muted); font-size: 0.88em; }

.card {
  background: var(--bg2);
  border: 1px solid rgba(0,245,255,0.2);
  border-left: 3px solid var(--cyan);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 20px;
}
.card.accent2 { border-left-color: var(--cyan); }
.card.orange { border-left-color: var(--orange); }
.card.yellow { border-left-color: var(--yellow); }

.card h2 {
  font-family: 'Courier New', monospace;
  font-size: 0.8em;
  letter-spacing: 2px;
  color: var(--cyan);
  margin-bottom: 14px;
  text-transform: uppercase;
}
.card.orange h2 { color: var(--orange); }
.card.yellow h2 { color: var(--yellow); }

.card p, .card li {
  color: var(--text);
  font-size: 0.88em;
  line-height: 1.7;
}
.card ul { padding-left: 18px; margin-top: 8px; }
.card li { margin-bottom: 5px; }

/* Intercept box */
.intercept {
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.3);
  border-radius: 4px;
  padding: 14px 18px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  color: var(--cyan);
  margin: 14px 0;
  word-break: break-all;
  letter-spacing: 1px;
}
.intercept-label {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  color: var(--muted);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

/* Tabs */
.tabs {
  display: flex;
  border-bottom: 1px solid rgba(0,245,255,0.15);
  margin-bottom: 0;
  gap: 2px;
}
.tab-btn {
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--muted);
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  letter-spacing: 1px;
  padding: 10px 18px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
  text-transform: uppercase;
}
.tab-btn:hover { color: var(--text); }
.tab-btn.active {
  color: var(--cyan);
  border-bottom-color: var(--cyan);
}

.tab-panel {
  display: none;
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.12);
  border-top: none;
  border-radius: 0 0 6px 6px;
  padding: 20px;
  animation: slide-up 0.2s ease;
}
.tab-panel.active { display: block; }
@keyframes slide-up {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Form elements */
label {
  display: block;
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 6px;
  margin-top: 14px;
}
textarea, input[type="text"] {
  width: 100%;
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--text);
  padding: 10px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  border-radius: 4px;
  resize: vertical;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
textarea { min-height: 80px; }
textarea:focus, input[type="text"]:focus {
  border-color: rgba(0,245,255,0.4);
  box-shadow: 0 0 0 2px rgba(0,245,255,0.08);
}
textarea::placeholder, input::placeholder { color: var(--muted); }

.output-box {
  background: var(--bg);
  border: 1px solid rgba(0,245,255,0.15);
  border-radius: 4px;
  padding: 12px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  color: var(--cyan);
  min-height: 44px;
  margin-top: 6px;
  word-break: break-all;
  white-space: pre-wrap;
}

/* Slider */
.slider-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 10px 0;
}
.slider-row input[type="range"] {
  flex: 1;
  min-width: 0;
  height: 6px;
  -webkit-appearance: none;
  appearance: none;
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.15);
  border-radius: 3px;
  padding: 0;
}
.slider-row input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px; height: 18px;
  background: var(--cyan);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(0,245,255,0.4);
}
.slider-row input[type="range"]::-moz-range-thumb {
  width: 18px; height: 18px;
  background: var(--cyan);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
.shift-display {
  color: var(--cyan);
  font-family: 'Courier New', monospace;
  font-weight: 700;
  font-size: 1.1em;
  min-width: 28px;
  text-align: center;
}

/* Buttons */
.btn-row { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
.btn {
  background: transparent;
  border: 2px solid var(--cyan);
  color: var(--cyan);
  padding: 8px 18px;
  font-family: 'Satoshi', sans-serif;
  font-size: 0.82em;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  text-transform: uppercase;
}
.btn:hover {
  background: rgba(0,245,255,0.1);
  box-shadow: 0 0 12px rgba(0,245,255,0.25);
  transform: translateY(-2px);
}
.btn.muted {
  border: 1px solid rgba(0,245,255,0.3);
  color: var(--muted);
}
.btn.muted:hover {
  border-color: var(--cyan);
  color: var(--cyan);
  background: rgba(0,245,255,0.06);
  box-shadow: none;
  transform: none;
}
.btn.cyan {
  border-color: var(--cyan);
  color: var(--cyan);
}
.btn.cyan:hover {
  background: rgba(0,245,255,0.1);
  box-shadow: 0 0 12px rgba(0,245,255,0.2);
}
.btn.orange-btn {
  border-color: var(--orange);
  color: var(--orange);
}
.btn.orange-btn:hover {
  background: rgba(255,107,0,0.1);
  box-shadow: 0 0 10px rgba(255,107,0,0.2);
}

/* Hint box */
.hint-box {
  background: var(--bg);
  border: 1px solid rgba(255,190,11,0.4);
  border-radius: 4px;
  padding: 12px 16px;
  margin-top: 12px;
  font-size: 0.84em;
  color: var(--yellow);
  display: none;
}

/* Hard mode progress tracker */
.progress-tracker {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 14px 0;
}
.progress-step {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.82em;
  color: var(--muted);
  padding: 8px 12px;
  background: var(--bg);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  transition: color 0.2s, border-color 0.2s;
  font-family: 'Courier New', monospace;
}
.progress-step.done {
  color: var(--cyan);
  border-color: rgba(0,245,255,0.3);
}
.step-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  flex-shrink: 0;
  transition: background 0.2s, box-shadow 0.2s;
}
.progress-step.done .step-dot {
  background: var(--cyan);
  box-shadow: 0 0 8px rgba(0,245,255,0.5);
}

/* Decode chain */
.chain {
  background: var(--bg);
  border: 1px solid rgba(0,245,255,0.12);
  border-radius: 4px;
  padding: 14px;
  margin-top: 10px;
  font-size: 0.8em;
  display: none;
}
.chain.visible { display: block; }
.chain-step {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  font-family: 'Courier New', monospace;
}
.chain-step:last-child { margin-bottom: 0; }
.chain-arrow { color: var(--muted); flex-shrink: 0; margin-top: 2px; }
.chain-label { color: var(--muted); font-size: 0.85em; margin-bottom: 2px; }
.chain-val { color: var(--cyan); word-break: break-all; }

/* Submit section */
.submit-area { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.submit-area input { flex: 1; min-width: 200px; min-height: auto; }

.error-msg {
  color: var(--red);
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  margin-top: 8px;
  display: none;
}

/* Flag / success */
.flag-card {
  display: none;
  background: linear-gradient(135deg, rgba(0,245,255,0.08), rgba(255,0,110,0.05));
  border: 2px solid var(--cyan);
  box-shadow: 0 0 30px rgba(0,245,255,0.12), inset 0 0 40px rgba(0,245,255,0.04);
  border-radius: 12px;
  padding: 28px;
  text-align: center;
  animation: flag-appear 0.5s ease;
  margin-top: 16px;
}
@keyframes flag-appear {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.flag-card h2 {
  font-family: 'Clash Display', sans-serif;
  font-size: 0.9em;
  letter-spacing: 2px;
  color: var(--cyan);
  margin-bottom: 12px;
}
.flag-value {
  background: var(--bg);
  border: 1px dashed rgba(0,245,255,0.5);
  color: var(--cyan);
  padding: 12px 18px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  letter-spacing: 1px;
  margin-bottom: 12px;
  word-break: break-all;
}
.flag-badge {
  display: inline-block;
  background: var(--bg3);
  border: 1px solid rgba(255,0,110,0.4);
  color: var(--magenta);
  padding: 6px 16px;
  border-radius: 20px;
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  letter-spacing: 2px;
}

/* Canvas confetti */
#confetti-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 9999;
  display: none;
}

/* Note */
.note {
  font-size: 0.78em;
  color: var(--muted);
  margin-top: 8px;
  border-left: 2px solid rgba(0,245,255,0.2);
  padding-left: 10px;
  font-family: 'Courier New', monospace;
}
</style>

<canvas id="confetti-canvas"></canvas>
<div class="safety-ribbon">// TRAINING EXERCISE — CHALLENGE 02 — EDUCATIONAL PURPOSES ONLY //</div>

<div class="challenge-wrap">
  <div class="challenge-header">
    <div class="tag">CHALLENGE 02</div>
    <h1>CIPHER OPS</h1>
    <p>Agency 7 — Intercept Analysis Console</p>
  </div>

  <!-- Mission Brief -->
  <div class="card">
    <h2>// Operation Night Owl — Intercept 17B</h2>
    <p>SIGINT picked up an encoded burst transmission from a hostile actor. Payload appears encoded in multiple layers. Decode and report the directive using the Cipher Lab below.</p>
    <div class="intercept-label" style="margin-top:16px;">Primary Intercept</div>
    <div class="intercept">SU5JVElBVEVQUk9UT0NPTDIy</div>
    <p class="note">Single layer. Decode this and enter it below as your primary answer.</p>
  </div>

  <!-- Hard Mode -->
  <div class="card orange">
    <h2>// Alternate Intercept — Classified</h2>
    <p>Advanced challenge. This intercept uses multiple encoding layers — a different answer than the primary mission.</p>
    <div class="intercept-label" style="margin-top:14px;color:var(--orange);">Classified Intercept</div>
    <div class="intercept" style="border-color:var(--orange);color:var(--yellow);">RlVFY254cTNuek1qbmFwalpRcD0=</div>

    <div class="btn-row">
      <button class="btn orange-btn" onclick="toggleHardHint()">REVEAL DECODE CHAIN</button>
    </div>

    <div class="hint-box" id="hardHint" style="border-color:var(--orange);color:var(--text);">
      <strong style="color:var(--orange);">Decoding Steps:</strong>
      <ol style="padding-left:18px;margin-top:8px;line-height:2;">
        <li>Base64 decode the intercept</li>
        <li>Apply ROT13 to the result</li>
        <li>Base64 decode again</li>
        <li>Apply Caesar shift (you'll need to find the right shift)</li>
      </ol>
      <p style="margin-top:8px;color:var(--muted);">Use the Cipher Lab tools below to work through each step.</p>
    </div>

    <!-- Decode chain visualizer -->
    <div style="margin-top:14px;">
      <button class="btn muted" onclick="runChain()">RUN DECODE CHAIN</button>
      <div class="chain" id="decodeChain">
        <div class="chain-step">
          <div class="chain-arrow">1.</div>
          <div>
            <div class="chain-label">Base64 decode</div>
            <div class="chain-val" id="ch1">—</div>
          </div>
        </div>
        <div class="chain-step">
          <div class="chain-arrow">2.</div>
          <div>
            <div class="chain-label">ROT13</div>
            <div class="chain-val" id="ch2">—</div>
          </div>
        </div>
        <div class="chain-step">
          <div class="chain-arrow">3.</div>
          <div>
            <div class="chain-label">Base64 decode</div>
            <div class="chain-val" id="ch3">—</div>
          </div>
        </div>
        <div class="chain-step">
          <div class="chain-arrow">4.</div>
          <div>
            <div class="chain-label">Caesar shift (find the right one — try shifts in the lab)</div>
            <div class="chain-val" id="ch4" style="color:var(--yellow);">Determine the correct shift using the Caesar tool below</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hard mode progress tracker -->
    <div style="margin-top:16px;">
      <div style="font-size:0.74em;color:var(--muted);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">Mission Progress</div>
      <div class="progress-tracker" id="progressTracker">
        <div class="progress-step" id="step1"><div class="step-dot"></div>Base64 decode the intercept</div>
        <div class="progress-step" id="step2"><div class="step-dot"></div>Apply ROT13</div>
        <div class="progress-step" id="step3"><div class="step-dot"></div>Base64 decode again</div>
        <div class="progress-step" id="step4"><div class="step-dot"></div>Apply Caesar shift to get final answer</div>
      </div>
    </div>
  </div>

  <!-- Cipher Lab -->
  <div class="card accent2">
    <h2>// Cipher Lab</h2>

    <div class="tabs">
      <button class="tab-btn active" data-tab="base64">Base64</button>
      <button class="tab-btn" data-tab="caesar">Caesar</button>
      <button class="tab-btn" data-tab="rot13">ROT13</button>
    </div>

    <!-- Base64 -->
    <div class="tab-panel active" id="base64-panel">
      <label>Input</label>
      <textarea id="b64In" placeholder="Paste text here..."></textarea>
      <div class="btn-row">
        <button class="btn" onclick="b64Encode()">ENCODE</button>
        <button class="btn cyan" onclick="b64Decode()">DECODE</button>
      </div>
      <label>Output</label>
      <div class="output-box" id="b64Out">—</div>
      <p class="note">Base64 is encoding, not encryption — it makes binary data printable but adds no secrecy.</p>
    </div>

    <!-- Caesar -->
    <div class="tab-panel" id="caesar-panel">
      <label>Input</label>
      <textarea id="caesarIn" placeholder="Paste text here..."></textarea>
      <label>Shift</label>
      <div class="slider-row">
        <input type="range" id="caesarSlider" min="0" max="25" value="0" oninput="document.getElementById('shiftDisp').textContent=this.value">
        <span class="shift-display" id="shiftDisp">0</span>
      </div>
      <div class="btn-row">
        <button class="btn" onclick="caesarEnc()">ENCODE (shift right)</button>
        <button class="btn cyan" onclick="caesarDec()">DECODE (shift left)</button>
      </div>
      <label>Output</label>
      <div class="output-box" id="caesarOut">—</div>
      <p class="note">A shift of 13 is ROT13. Decoding reverses the shift direction.</p>
    </div>

    <!-- ROT13 -->
    <div class="tab-panel" id="rot13-panel">
      <label>Input</label>
      <textarea id="rot13In" placeholder="Paste text here..."></textarea>
      <div class="btn-row">
        <button class="btn" onclick="doROT13()">APPLY ROT13</button>
      </div>
      <label>Output</label>
      <div class="output-box" id="rot13Out">—</div>
      <p class="note">ROT13 is self-inverse — applying it twice gives back the original text.</p>
    </div>
  </div>

  <!-- Submit -->
  <div class="card">
    <h2>// Report to HQ</h2>
    <p>Enter the decoded directive. Primary mission and hard mode have different answers.</p>
    <div class="submit-area">
      <input type="text" id="answerInput" placeholder="Decoded message..." autocomplete="off">
      <button class="btn" onclick="checkAnswer()">TRANSMIT</button>
    </div>
    <div class="error-msg" id="errorMsg">Incorrect. Verify your decode steps and try again, agent.</div>

    <div class="flag-card" id="flagCard">
      <h2 id="flagTitle">// TRANSMISSION VERIFIED</h2>
      <div class="flag-value" id="flagValue">FLAG{c1ph3r_0ps_m1ss10n_c0mpl3t3}</div>
      <div class="flag-badge" id="flagBadge">STATUS: CLEARED — CIPHER APPRENTICE</div>
    </div>
  </div>

  <!-- Debrief -->
  <div class="card yellow">
    <h2>// Mission Debrief</h2>
    <ul>
      <li>A cipher scrambles text using a rule and key — without the key, decoding is hard</li>
      <li>Base64 is encoding for representation, not secrecy</li>
      <li>Layering multiple encodings is called "security through obscurity" — it's weak on its own</li>
      <li>Modern cryptography uses strong mathematics (AES, RSA) not simple character shifts</li>
      <li>Always analyze in a safe sandbox — never run code from untrusted sources</li>
    </ul>
  </div>
</div>

<script>
// ---- Tab system ----
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(target + '-panel').classList.add('active');
  });
});

// ---- Cipher utilities ----
function caesarShift(text, shift) {
  return text.split('').map(c => {
    if (/[a-zA-Z]/.test(c)) {
      const base = c >= 'a' ? 97 : 65;
      return String.fromCharCode(((c.charCodeAt(0) - base + shift + 26) % 26) + base);
    }
    return c;
  }).join('');
}

function rot13(text) { return caesarShift(text, 13); }

function safeDecode(str) {
  try { return atob(str.trim()); } catch { return 'ERROR: Invalid Base64'; }
}

function safeEncode(str) {
  try { return btoa(str); } catch { return 'ERROR: Cannot encode'; }
}

// ---- Base64 tab ----
function b64Encode() {
  const v = document.getElementById('b64In').value;
  document.getElementById('b64Out').textContent = v ? safeEncode(v) : '—';
}
function b64Decode() {
  const v = document.getElementById('b64In').value;
  if (!v) return;
  const r = safeDecode(v);
  document.getElementById('b64Out').textContent = r;
  // Track hard mode step 1/3
  const intercept = 'RlVFY254cTNuek1qbmFwalpRcD0=';
  if (v.trim() === intercept) markStep(1);
  const step2val = safeDecode(intercept);
  if (v.trim() === rot13(step2val)) markStep(3);
}

// ---- Caesar tab ----
function caesarEnc() {
  const v = document.getElementById('caesarIn').value;
  const s = parseInt(document.getElementById('caesarSlider').value);
  document.getElementById('caesarOut').textContent = v ? caesarShift(v, s) : '—';
}
function caesarDec() {
  const v = document.getElementById('caesarIn').value;
  const s = parseInt(document.getElementById('caesarSlider').value);
  if (!v) return;
  const r = caesarShift(v, -s);
  document.getElementById('caesarOut').textContent = r;
  // Check if this produces the hard-mode answer
  if (r.trim() === 'CodeBreaker007') markStep(4);
}

// ---- ROT13 tab ----
function doROT13() {
  const v = document.getElementById('rot13In').value;
  if (!v) return;
  const r = rot13(v);
  document.getElementById('rot13Out').textContent = r;
  // Track hard mode step 2
  const step1val = safeDecode('RlVFY254cTNuek1qbmFwalpRcD0=');
  if (v.trim() === step1val) markStep(2);
}

// ---- Hard mode hint/chain ----
function toggleHardHint() {
  const el = document.getElementById('hardHint');
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}

function runChain() {
  const intercept = 'RlVFY254cTNuek1qbmFwalpRcD0=';
  const s1 = safeDecode(intercept);
  const s2 = rot13(s1);
  const s3 = safeDecode(s2);

  document.getElementById('ch1').textContent = s1;
  document.getElementById('ch2').textContent = s2;
  document.getElementById('ch3').textContent = s3;
  document.getElementById('decodeChain').classList.add('visible');

  // Mark first 3 steps as done automatically from chain
  markStep(1); markStep(2); markStep(3);
}

// ---- Progress tracker ----
function markStep(n) {
  document.getElementById('step' + n).classList.add('done');
}

// ---- Answer check ----
const PRIMARY = 'INITIATEPROTOCOL22';
const HARD = 'CodeBreaker007';

function checkAnswer() {
  const input = document.getElementById('answerInput').value.trim();
  const err = document.getElementById('errorMsg');
  const card = document.getElementById('flagCard');

  if (input === PRIMARY || input === HARD) {
    err.style.display = 'none';
    card.style.display = 'block';
    const isHard = input === HARD;

    document.getElementById('flagTitle').textContent = isHard
      ? '// CLASSIFIED TRANSMISSION VERIFIED'
      : '// TRANSMISSION VERIFIED';
    document.getElementById('flagValue').textContent = isHard
      ? 'FLAG{3l1t3_c1ph3r_4g3nt_mult1l4y3r}'
      : 'FLAG{c1ph3r_0ps_m1ss10n_c0mpl3t3}';
    document.getElementById('flagBadge').textContent = isHard
      ? 'STATUS: MASTER — CIPHER ELITE'
      : 'STATUS: CLEARED — CIPHER APPRENTICE';

    if (isHard) markStep(4);
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    launchConfetti();
  } else {
    err.style.display = 'block';
  }
}

document.getElementById('answerInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') checkAnswer();
});

// ---- Canvas confetti ----
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#00f5ff', '#ff006e', '#ffbe0b', '#39ff14', '#ffffff'];
  const pieces = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    w: Math.random() * 8 + 4,
    h: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      p.y += p.speed;
      p.angle += p.spin;
      if (p.y < canvas.height + 20) alive = true;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (alive && frame < 200) requestAnimationFrame(draw);
    else canvas.style.display = 'none';
  }
  draw();
}
</script>
