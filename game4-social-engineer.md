---
layout: default
title: Game 04 — Social Engineer
---
<style>
/* ═══════════════════════════════════════════
   SOCIAL ENGINEER — Operative Dossier
   Palette: Charcoal, electric purple, gold
   ═══════════════════════════════════════════ */

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

:root {
  --bg:        #0d0d14;
  --bg2:       #13131e;
  --bg3:       #1a1a2e;
  --purple:    #7b2fff;
  --purple-d:  rgba(123,47,255,0.15);
  --gold:      #ffd700;
  --gold-d:    rgba(255,215,0,0.12);
  --white:     #f0f0f8;
  --muted:     #5a5a72;
  --success:   #00e676;
  --danger:    #ff1744;
  --mono:      'Space Mono', monospace;
  --serif:     'Cinzel', serif;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--mono);
  background: var(--bg);
  color: var(--white);
  min-height: 100vh;
}

/* Subtle grid */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(123,47,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(123,47,255,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
  z-index: 0;
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

/* ─── Auth Overlay (intro) ─── */
.auth-overlay {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  text-align: center;
}
.auth-logo {
  font-family: var(--serif);
  font-size: clamp(1.4em, 6vw, 2.2em);
  color: var(--gold);
  letter-spacing: 4px;
  margin-bottom: 8px;
  text-shadow: 0 0 30px rgba(255,215,0,0.3);
}
.auth-sub {
  font-size: 0.7em;
  color: var(--muted);
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.auth-box {
  border: 1px solid rgba(123,47,255,0.4);
  border-radius: 8px;
  padding: 24px 20px;
  background: var(--bg2);
  max-width: 380px;
  width: 100%;
}
.auth-box p { font-size: 0.8em; color: var(--muted); line-height: 1.7; margin-bottom: 20px; }
.auth-box strong { color: var(--white); }
.accept-btn {
  background: var(--purple);
  color: var(--white);
  border: none;
  padding: 16px;
  width: 100%;
  font-family: var(--mono);
  font-size: 0.85em;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 4px;
  min-height: 52px;
  transition: opacity 0.2s, box-shadow 0.2s;
  -webkit-tap-highlight-color: transparent;
}
@media (hover: hover) { .accept-btn:hover { opacity: 0.9; box-shadow: 0 0 20px rgba(123,47,255,0.4); } }
.accept-btn:active { opacity: 0.8; }
.decline-btn {
  background: transparent;
  color: var(--muted);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 12px;
  width: 100%;
  font-family: var(--mono);
  font-size: 0.75em;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 8px;
  min-height: 48px;
  -webkit-tap-highlight-color: transparent;
}

/* ─── Wrap ─── */
.game-wrap {
  max-width: 740px;
  margin: 0 auto;
  padding: 24px 16px 80px;
  position: relative;
  z-index: 1;
}

/* ─── Header ─── */
.game-header {
  text-align: center;
  margin-bottom: 28px;
}
.game-tag {
  font-family: var(--mono);
  font-size: 0.65em;
  color: var(--purple);
  letter-spacing: 3px;
  display: block;
  margin-bottom: 10px;
}
.game-header h1 {
  font-family: var(--serif);
  font-size: clamp(1.8em, 7vw, 3em);
  font-weight: 700;
  color: var(--white);
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.game-header h1 em { color: var(--gold); font-style: normal; }
.game-header .tagline { font-size: 0.72em; color: var(--muted); letter-spacing: 1px; margin-bottom: 20px; }

/* ─── Mission Progress ─── */
.mission-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-bottom: 24px;
}
@media (max-width: 480px) { .mission-nav { grid-template-columns: repeat(2, 1fr); } }
.mn-item {
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  padding: 8px 6px;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 1px;
  color: var(--muted);
  transition: all 0.3s;
}
.mn-item.active { color: var(--purple); border-color: rgba(123,47,255,0.4); background: var(--purple-d); }
.mn-item.done   { color: var(--success); border-color: rgba(0,230,118,0.3); }

/* ─── Mission / Phase ─── */
.mission { display: none; }
.mission.active { display: block; animation: mis-in 0.4s ease; }
.phase { display: none; }
.phase.active { display: block; animation: mis-in 0.3s ease; }
@keyframes mis-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Dossier Card ─── */
.dossier {
  background: var(--bg2);
  border: 1px solid rgba(123,47,255,0.25);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
}
.dos-header {
  background: rgba(123,47,255,0.08);
  padding: 12px 18px;
  border-bottom: 1px solid rgba(123,47,255,0.15);
  display: flex;
  align-items: center;
  gap: 10px;
}
.dos-classified {
  font-family: var(--serif);
  font-size: 0.65em;
  background: var(--gold);
  color: #000;
  padding: 2px 8px;
  letter-spacing: 2px;
  border-radius: 2px;
  font-weight: 700;
}
.dos-title { font-size: 0.78em; color: var(--gold); letter-spacing: 2px; }
.dos-body { padding: 16px 18px; }
.dos-body p { font-size: 0.82em; line-height: 1.8; color: var(--white); }
.dos-body p + p { margin-top: 8px; }
.dos-body strong { color: var(--gold); }
.dos-body .target-info {
  display: flex; flex-direction: column; gap: 6px;
  background: var(--bg3);
  border-radius: 4px;
  padding: 12px 14px;
  margin-top: 12px;
  font-size: 0.78em;
}
.ti-row { display: flex; gap: 10px; flex-wrap: wrap; }
.ti-key { color: var(--muted); min-width: 90px; }
.ti-val { color: var(--white); }

/* Raj speech */
.raj-speech {
  background: var(--bg3);
  border-left: 3px solid var(--purple);
  border-radius: 0 6px 6px 0;
  padding: 14px 18px;
  margin-bottom: 16px;
  font-size: 0.82em;
  line-height: 1.8;
}
.raj-name { font-size: 0.68em; color: var(--purple); letter-spacing: 2px; margin-bottom: 6px; }

/* ─── Phone Call UI (Mission 1) ─── */
.phone-ui {
  background: #111;
  border-radius: 24px;
  padding: 24px 16px;
  max-width: 300px;
  margin: 0 auto 20px;
  border: 6px solid #222;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  text-align: center;
}
.phone-status { font-size: 0.68em; color: #666; letter-spacing: 2px; margin-bottom: 16px; }
.phone-caller { font-size: 1em; color: var(--white); font-weight: 700; margin-bottom: 4px; }
.phone-sub    { font-size: 0.72em; color: #555; margin-bottom: 20px; }
.phone-timer  { font-size: 1.4em; color: var(--success); margin-bottom: 20px; font-family: var(--serif); }
.phone-btn-row { display: flex; justify-content: space-around; }
.phone-btn {
  width: 56px; height: 56px;
  border-radius: 50%;
  border: none;
  font-size: 1.4em;
  cursor: default;
  display: flex; align-items: center; justify-content: center;
}
.phone-btn.end   { background: var(--danger); }
.phone-btn.mute  { background: #333; }

/* Dialog options */
.dialog-stage {
  background: var(--bg2);
  border: 1px solid rgba(123,47,255,0.2);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 14px;
}
.ds-speaker {
  font-size: 0.68em;
  letter-spacing: 2px;
  color: var(--muted);
  margin-bottom: 8px;
}
.ds-npc-line {
  font-size: 0.85em;
  line-height: 1.7;
  background: var(--bg3);
  border-radius: 4px;
  padding: 10px 14px;
  margin-bottom: 12px;
  border-left: 2px solid var(--muted);
  color: var(--white);
}
.ds-opts { display: flex; flex-direction: column; gap: 8px; }
.ds-opt {
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 5px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 0.8em;
  line-height: 1.5;
  transition: border-color 0.2s, background 0.2s;
  min-height: 48px;
  display: flex; align-items: center; gap: 8px;
  -webkit-tap-highlight-color: transparent;
}
@media (hover: hover) { .ds-opt:hover { border-color: rgba(123,47,255,0.4); background: var(--purple-d); } }
.ds-opt:active { transform: scale(0.99); }
.ds-opt.chosen-good { border-color: var(--success); background: rgba(0,230,118,0.06); color: var(--success); }
.ds-opt.chosen-bad  { border-color: var(--danger); background: rgba(255,23,68,0.06); color: var(--danger); }
.ds-opt.reveal-good { border-color: rgba(0,230,118,0.4); color: rgba(0,230,118,0.6); }

.ds-result {
  display: none;
  background: rgba(123,47,255,0.07);
  border: 1px solid rgba(123,47,255,0.2);
  border-radius: 4px;
  padding: 12px 14px;
  font-size: 0.8em;
  line-height: 1.7;
  margin-top: 10px;
  color: var(--white);
}
.ds-result .score { color: var(--gold); margin-top: 6px; display: block; }

/* ─── Email Builder (Mission 2) ─── */
.email-builder {
  background: var(--bg2);
  border: 1px solid rgba(123,47,255,0.2);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
}
.eb-section {
  padding: 12px 16px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.eb-section:last-child { border-bottom: none; }
.eb-label { font-size: 0.65em; color: var(--gold); letter-spacing: 2px; margin-bottom: 8px; display: block; }
.eb-opts  { display: flex; flex-direction: column; gap: 6px; }
.eb-opt {
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 0.78em;
  line-height: 1.5;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
}
@media (hover: hover) { .eb-opt:hover { border-color: rgba(123,47,255,0.4); } }
.eb-opt.selected-good { border-color: var(--success); background: rgba(0,230,118,0.07); color: var(--success); }
.eb-opt.selected-ok   { border-color: var(--gold); background: rgba(255,215,0,0.05); color: var(--gold); }
.eb-opt.selected-bad  { border-color: var(--danger); background: rgba(255,23,68,0.05); color: var(--danger); opacity: 0.7; }

/* Email preview */
.email-preview {
  display: none;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
  animation: mis-in 0.4s ease;
  color: #111;
}
.ep-header {
  background: #e0e0e0;
  padding: 12px 16px;
  font-family: Arial, sans-serif;
  font-size: 0.82em;
  border-bottom: 1px solid #ccc;
}
.ep-field { display: flex; gap: 8px; margin-bottom: 3px; }
.ep-key  { color: #666; font-weight: 700; min-width: 60px; }
.ep-body {
  padding: 16px;
  font-family: Arial, sans-serif;
  font-size: 0.85em;
  line-height: 1.7;
}
.ep-result {
  display: none;
  background: var(--bg2);
  border: 1px solid rgba(123,47,255,0.2);
  border-radius: 6px;
  padding: 16px 18px;
  margin: 12px 0;
  font-size: 0.82em;
  line-height: 1.7;
  animation: mis-in 0.35s ease;
}
.ep-result .score-label { font-size: 0.7em; color: var(--muted); letter-spacing: 2px; margin-bottom: 8px; }
.ep-result .score-val   { font-size: 1.3em; color: var(--gold); font-family: var(--serif); margin-bottom: 12px; }

/* ─── Tailgating Panels (Mission 3) ─── */
.tg-panel {
  display: none;
  background: var(--bg2);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 14px;
  animation: mis-in 0.35s ease;
}
.tg-panel.active { display: block; }
.tg-scene {
  background: linear-gradient(135deg, #1a1a2e, #0d0d14);
  height: 100px;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.8em;
  gap: 16px;
  border-bottom: 1px solid rgba(255,215,0,0.1);
  position: relative;
}
.tg-scene .scene-label {
  position: absolute;
  bottom: 6px; right: 10px;
  font-size: 0.28em;
  color: var(--muted);
  letter-spacing: 1px;
}
.tg-situation {
  padding: 14px 16px;
  font-size: 0.82em;
  line-height: 1.7;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.tg-choices { padding: 12px 14px; display: flex; flex-direction: column; gap: 8px; }
.tg-choice {
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 5px;
  padding: 13px 16px;
  cursor: pointer;
  font-size: 0.8em;
  line-height: 1.5;
  min-height: 52px;
  display: flex; align-items: center; gap: 10px;
  transition: border-color 0.2s, background 0.2s;
  -webkit-tap-highlight-color: transparent;
}
@media (hover: hover) { .tg-choice:hover { border-color: rgba(255,215,0,0.3); } }
.tg-choice:active { transform: scale(0.99); }
.tg-choice.correct { border-color: var(--success); background: rgba(0,230,118,0.06); color: var(--success); }
.tg-choice.wrong   { border-color: var(--danger); background: rgba(255,23,68,0.06); color: var(--danger); animation: shake 0.4s ease; }
@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)} }

.tg-feedback {
  display: none;
  padding: 12px 16px;
  font-size: 0.8em;
  line-height: 1.6;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.tg-feedback.good { color: var(--success); }
.tg-feedback.bad  { color: var(--danger); }

/* ─── QR Mission (Mission 4) ─── */
.qr-arena {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 16px 0;
}
.qr-card {
  background: var(--bg2);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  flex: 1;
  min-width: 140px;
  max-width: 200px;
  transition: border-color 0.3s;
}
.qr-card.fake { border-color: rgba(123,47,255,0.4); }
.qr-card.real { border-color: rgba(0,230,118,0.2); }
.qr-code {
  width: 80px; height: 80px;
  background: var(--white);
  border-radius: 4px;
  margin: 0 auto 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 2em;
  position: relative;
  overflow: hidden;
}
.qr-code.tampered::after {
  content: '✕';
  position: absolute;
  inset: 0;
  background: rgba(123,47,255,0.85);
  display: flex; align-items: center; justify-content: center;
  color: var(--white);
  font-size: 2em;
  font-family: var(--serif);
  animation: tamper-in 0.5s ease;
}
@keyframes tamper-in { from{opacity:0;transform:scale(0.7)} to{opacity:1;transform:scale(1)} }
.qr-url { font-size: 0.68em; color: var(--muted); word-break: break-all; margin-bottom: 8px; }
.qr-label { font-size: 0.72em; letter-spacing: 1px; }
.qr-label.ok   { color: var(--success); }
.qr-label.bad  { color: var(--purple); }

.victim-scan {
  display: none;
  margin: 16px 0;
  animation: mis-in 0.4s ease;
}
.vs-title { font-size: 0.7em; color: var(--gold); letter-spacing: 2px; margin-bottom: 10px; }
.vs-item {
  background: var(--bg2);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 6px;
  padding: 14px 16px;
  margin-bottom: 8px;
  font-size: 0.8em;
  line-height: 1.7;
  animation: mis-in 0.4s ease;
}
.vs-item .vs-name { color: var(--gold); margin-bottom: 4px; }
.vs-item .vs-outcome.captured { color: var(--danger); }
.vs-item .vs-outcome.defended { color: var(--success); }
.vs-item .vs-outcome.partial  { color: var(--gold); }

.harvest-dashboard {
  display: none;
  background: #050505;
  border: 1px solid rgba(123,47,255,0.3);
  border-radius: 6px;
  padding: 16px;
  font-family: var(--mono);
  font-size: 0.78em;
  margin: 16px 0;
  animation: mis-in 0.4s ease;
}
.hd-title { color: var(--purple); letter-spacing: 2px; font-size: 0.7em; margin-bottom: 10px; }
.hd-row { display: flex; gap: 10px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.04); flex-wrap: wrap; }
.hd-row:last-child { border-bottom: none; }
.hd-key { color: var(--muted); min-width: 80px; }
.hd-val { color: var(--white); }
.hd-val.captured { color: var(--danger); }
.hd-val.safe { color: var(--success); }

/* ─── Scorecard ─── */
.scorecard {
  display: none;
  background: var(--bg2);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  animation: mis-in 0.5s ease;
}
.sc-header {
  background: rgba(255,215,0,0.06);
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255,215,0,0.1);
  font-family: var(--serif);
  font-size: 0.85em;
  color: var(--gold);
  letter-spacing: 2px;
}
.sc-row {
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8em;
  flex-wrap: wrap;
}
.sc-row:last-child { border-bottom: none; }
.sc-mission { color: var(--muted); flex: 1; min-width: 140px; }
.sc-result { font-weight: 700; }
.sc-result.succeeded { color: var(--success); }
.sc-result.defended  { color: var(--gold); }

/* ─── Flag Card ─── */
.flag-card {
  display: none;
  border: 2px solid var(--purple);
  border-radius: 8px;
  padding: 28px 20px;
  text-align: center;
  background: var(--purple-d);
  box-shadow: 0 0 50px rgba(123,47,255,0.15);
  animation: flag-in 0.6s ease;
}
@keyframes flag-in { from{opacity:0;transform:scale(0.9)} to{opacity:1;transform:scale(1)} }
.flag-card h2 { font-family: var(--serif); font-size: 1.1em; letter-spacing: 4px; color: var(--gold); margin-bottom: 6px; text-shadow: 0 0 20px rgba(255,215,0,0.4); }
.flag-subtitle { font-size: 0.72em; color: var(--muted); margin-bottom: 20px; line-height: 1.6; }
.flag-value {
  background: var(--bg);
  border: 1px dashed rgba(123,47,255,0.5);
  color: var(--gold);
  padding: 14px;
  border-radius: 3px;
  font-size: clamp(0.7em, 3vw, 0.88em);
  letter-spacing: 1px;
  word-break: break-all;
  margin-bottom: 16px;
}
.flag-badge { display: inline-block; border: 1px solid rgba(0,230,118,0.4); color: var(--success); padding: 5px 14px; border-radius: 20px; font-size: 0.7em; letter-spacing: 2px; margin-bottom: 20px; }
.debrief-box { background: var(--bg3); border-radius: 6px; padding: 16px 18px; text-align: left; }
.db-title { font-size: 0.68em; color: var(--gold); letter-spacing: 2px; margin-bottom: 10px; }
.db-item { font-size: 0.78em; color: var(--white); margin-bottom: 6px; padding-left: 4px; line-height: 1.6; }
.db-item::before { content: '→ '; color: var(--purple); }

/* ─── Generic btn ─── */
.btn {
  background: transparent;
  border: 1px solid var(--purple);
  color: var(--purple);
  padding: 14px 20px;
  font-family: var(--mono);
  font-size: 0.78em;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 3px;
  min-height: 48px;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 10px;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.2s, box-shadow 0.2s;
}
@media (hover: hover) { .btn:hover { background: var(--purple-d); box-shadow: 0 0 14px rgba(123,47,255,0.2); } }
.btn:active { transform: scale(0.98); }
.btn.gold  { border-color: var(--gold); color: var(--gold); }
@media (hover: hover) { .btn.gold:hover { background: var(--gold-d); } }
.btn.disabled { opacity: 0.3; pointer-events: none; }

/* Canvas */
#confetti-canvas { position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:9999; display:none; }
</style>

<canvas id="confetti-canvas"></canvas>
<div class="safety-ribbon">// AUTHORIZED SIMULATION — EDUCATIONAL PURPOSES ONLY // NOT FOR REAL USE //</div>

<!-- Auth Overlay -->
<div class="auth-overlay" id="auth-overlay">
  <div class="auth-logo">CYBERTRUST SG</div>
  <div class="auth-sub">AUTHORIZED PENETRATION TESTING DIVISION</div>
  <div class="auth-box">
    <p>
      <strong>MISSION BRIEFING — OPERATIVE SASHA</strong><br><br>
      You are authorized to conduct a social engineering penetration test on AuraBank SG. All targets have consented to this test.<br><br>
      In real life: social engineering without written authorization is a criminal offence under Singapore's <strong>Computer Misuse Act (Cap. 50A)</strong>. This simulation is for education only.
    </p>
    <button class="accept-btn" onclick="acceptMission()">✓ I UNDERSTAND — ACCEPT MISSION</button>
    <button class="decline-btn" onclick="declineMission()">← Decline (exit)</button>
  </div>
</div>

<div class="game-wrap" id="game-wrap" style="display:none;">

  <div class="game-header">
    <span class="game-tag">GAME 04 — RED TEAM OPS</span>
    <h1>SOCIAL <em>ENGINEER</em></h1>
    <p class="tagline">AuraBank SG · Authorized Pentest · Operative: Sasha</p>
  </div>

  <div class="mission-nav">
    <div class="mn-item active" id="mn1">M1 · VISHING</div>
    <div class="mn-item" id="mn2">M2 · PHISH</div>
    <div class="mn-item" id="mn3">M3 · TAILGATE</div>
    <div class="mn-item" id="mn4">M4 · QR SWAP</div>
  </div>

  <!-- ══════════════════════════════════
       MISSION 1 — VISHING
  ══════════════════════════════════ -->
  <div id="m1" class="mission active">

    <div class="dossier">
      <div class="dos-header">
        <span class="dos-classified">CLASSIFIED</span>
        <span class="dos-title">MISSION 01 — VISHING</span>
      </div>
      <div class="dos-body">
        <p>Your target is AuraBank's IT Helpdesk. You need them to reset an account password without proper verification.</p>
        <p><strong>Cover identity:</strong> New employee "Shan Lim" from Finance. Started last Monday.</p>
        <div class="target-info">
          <div class="ti-row"><span class="ti-key">Target:</span><span class="ti-val">AuraBank IT Helpdesk (+65 6XXX XXXX)</span></div>
          <div class="ti-row"><span class="ti-key">Objective:</span><span class="ti-val">Get password reset without ID verification</span></div>
          <div class="ti-row"><span class="ti-key">Tools:</span><span class="ti-val">Phone · Pretexting · Social proof</span></div>
        </div>
      </div>
    </div>

    <div class="raj-speech">
      <div class="raj-name">// RAJ — SUPERVISOR</div>
      "Three stages. Choose what Sasha says at each point. The more specific and confident you sound, the more likely the helpdesk complies. Watch how easy this is — and think about why."
    </div>

    <div class="phone-ui">
      <div class="phone-status">CALLING...</div>
      <div class="phone-caller">AuraBank IT Helpdesk</div>
      <div class="phone-sub">+65 6823 XXXX</div>
      <div class="phone-timer" id="call-timer">0:00</div>
      <div class="phone-btn-row">
        <div class="phone-btn mute">🔇</div>
        <div class="phone-btn end">📵</div>
      </div>
    </div>

    <!-- Dialog Stage A -->
    <div class="dialog-stage" id="ds-a">
      <div class="ds-speaker">HELPDESK AGENT:</div>
      <div class="ds-npc-line">"IT support, how can I help you today?"</div>
      <div class="ds-speaker">YOUR OPENING LINE:</div>
      <div class="ds-opts">
        <div class="ds-opt" onclick="dialogAnswer('a', 1, 'bad')">💬 "Hello I need a password reset." <span style="color:var(--muted); font-size:0.85em;">(Blunt, no context)</span></div>
        <div class="ds-opt" onclick="dialogAnswer('a', 2, 'good')">💬 "Hi, this is Shan from Finance — started last Monday? I'm locked out of the portal and my manager David Lee is waiting on a budget report I'm supposed to submit by 3pm." <span style="color:var(--muted); font-size:0.85em;">(Specific + urgent)</span></div>
        <div class="ds-opt" onclick="dialogAnswer('a', 3, 'ok')">💬 "Hi, I'm a new employee and my computer isn't working." <span style="color:var(--muted); font-size:0.85em;">(Vague)</span></div>
      </div>
      <div class="ds-result" id="dsr-a"></div>
    </div>

    <!-- Dialog Stage B (hidden) -->
    <div class="dialog-stage" id="ds-b" style="display:none;">
      <div class="ds-speaker">HELPDESK AGENT:</div>
      <div class="ds-npc-line">"Okay, can I get your employee ID to verify you?"</div>
      <div class="ds-speaker">YOUR RESPONSE:</div>
      <div class="ds-opts">
        <div class="ds-opt" onclick="dialogAnswer('b', 1, 'good')">💬 "Oh, HR said they'd send it next week — I'm still being onboarded. I've got my NRIC if that helps? David Lee in Finance can vouch for me." <span style="color:var(--muted); font-size:0.85em;">(Plausible excuse + name-drop)</span></div>
        <div class="ds-opt" onclick="dialogAnswer('b', 2, 'ok')">💬 "It's EMP-2026-441." <span style="color:var(--muted); font-size:0.85em;">(Made up — risky if they check)</span></div>
        <div class="ds-opt" onclick="dialogAnswer('b', 3, 'bad')">💬 *Hang up.* <span style="color:var(--muted); font-size:0.85em;">(Abort mission)</span></div>
      </div>
      <div class="ds-result" id="dsr-b"></div>
    </div>

    <!-- Dialog Stage C (hidden) -->
    <div class="dialog-stage" id="ds-c" style="display:none;">
      <div class="ds-speaker">HELPDESK AGENT:</div>
      <div class="ds-npc-line">"Alright, I'll send the password reset link to your registered email."</div>
      <div class="ds-speaker">YOUR RESPONSE:</div>
      <div class="ds-opts">
        <div class="ds-opt" onclick="dialogAnswer('c', 1, 'good')">💬 "Actually — my work email isn't set up yet. It's part of the onboarding issue. Can you reset it directly or text the link to my personal number? It's really urgent." <span style="color:var(--muted); font-size:0.85em;">(Pivot to bypass email verification)</span></div>
        <div class="ds-opt" onclick="dialogAnswer('c', 2, 'bad')">💬 "Okay, I'll check with HR first." <span style="color:var(--muted); font-size:0.85em;">(Correct user behaviour — attack fails)</span></div>
      </div>
      <div class="ds-result" id="dsr-c"></div>
    </div>

    <button class="btn gold disabled" id="m1-next" onclick="goMission(2)">▶ MISSION 2: SPEAR PHISHING →</button>
  </div>


  <!-- ══════════════════════════════════
       MISSION 2 — EMAIL BUILDER
  ══════════════════════════════════ -->
  <div id="m2" class="mission">

    <div class="dossier">
      <div class="dos-header">
        <span class="dos-classified">CLASSIFIED</span>
        <span class="dos-title">MISSION 02 — SPEAR PHISHING</span>
      </div>
      <div class="dos-body">
        <p>AuraBank's Finance team lead Lin Weilin has admin access to the payments system. A generic phishing email failed last week — their training filter caught it. This time, make it targeted.</p>
        <div class="target-info">
          <div class="ti-row"><span class="ti-key">Target:</span><span class="ti-val">Lin Weilin, Finance Team Lead</span></div>
          <div class="ti-row"><span class="ti-key">OSINT:</span><span class="ti-val">LinkedIn: "Leading AuraBank Jurong Branch launch Q1 2026"</span></div>
          <div class="ti-row"><span class="ti-key">Manager:</span><span class="ti-val">David Lee (VP Finance)</span></div>
          <div class="ti-row"><span class="ti-key">Meeting:</span><span class="ti-val">3pm budget review (seen on LinkedIn)</span></div>
        </div>
      </div>
    </div>

    <div class="raj-speech">
      <div class="raj-name">// RAJ — SUPERVISOR</div>
      "Build the most convincing spear phishing email you can. For each component, pick the option that Lin is most likely to open and act on — then see why it works."
    </div>

    <div class="email-builder">
      <!-- Sender -->
      <div class="eb-section">
        <span class="eb-label">SENDER NAME & EMAIL</span>
        <div class="eb-opts">
          <div class="eb-opt" data-cat="sender" data-score="3" onclick="selectEmailPart(this,'sender',3,'David Lee (VP Finance) &lt;d.lee@aura-bank-sg.com&gt;')">👤 David Lee (VP Finance) &lt;d.lee@aura-bank-sg.com&gt; <strong style="color:var(--success)">— Manager impersonation</strong></div>
          <div class="eb-opt" data-cat="sender" data-score="1" onclick="selectEmailPart(this,'sender',1,'AuraBank Security &lt;no-reply@aurabank-secure.com&gt;')">📧 AuraBank Security &lt;no-reply@aurabank-secure.com&gt;</div>
          <div class="eb-opt" data-cat="sender" data-score="0" onclick="selectEmailPart(this,'sender',0,'unknown123@yahoo.com')">❌ unknown123@yahoo.com — <span style="color:var(--danger)">obvious red flag</span></div>
        </div>
      </div>
      <!-- Subject -->
      <div class="eb-section">
        <span class="eb-label">SUBJECT LINE</span>
        <div class="eb-opts">
          <div class="eb-opt" data-cat="subject" data-score="3" onclick="selectEmailPart(this,'subject',3,'Re: AuraBank Jurong Branch Q1 Budget — Action Required Before Your 3pm')">📌 Re: AuraBank Jurong Branch Q1 Budget — Action Required Before Your 3pm <strong style="color:var(--success)">— Specific project + timing</strong></div>
          <div class="eb-opt" data-cat="subject" data-score="1" onclick="selectEmailPart(this,'subject',1,'Urgent: Security Alert for Your Account')">⚠ Urgent: Security Alert for Your Account</div>
          <div class="eb-opt" data-cat="subject" data-score="0" onclick="selectEmailPart(this,'subject',0,'Click here — you won a prize!')">🎁 Click here — you won a prize! — <span style="color:var(--danger)">obvious red flag</span></div>
        </div>
      </div>
      <!-- Opening -->
      <div class="eb-section">
        <span class="eb-label">OPENING LINE</span>
        <div class="eb-opts">
          <div class="eb-opt" data-cat="opening" data-score="3" onclick="selectEmailPart(this,'opening',3,'Hi Lin, following up on our Jurong Branch discussion this morning.')">💬 "Hi Lin, following up on our Jurong Branch discussion this morning." <strong style="color:var(--success)">— Familiar, references real project</strong></div>
          <div class="eb-opt" data-cat="opening" data-score="1" onclick="selectEmailPart(this,'opening',1,'Dear Finance Team Member,')">📝 "Dear Finance Team Member,"</div>
          <div class="eb-opt" data-cat="opening" data-score="0" onclick="selectEmailPart(this,'opening',0,'Dear User,')">❓ "Dear User," — <span style="color:var(--danger)">generic, suspicious</span></div>
        </div>
      </div>
      <!-- Attachment -->
      <div class="eb-section">
        <span class="eb-label">ATTACHMENT</span>
        <div class="eb-opts">
          <div class="eb-opt" data-cat="attach" data-score="3" onclick="selectEmailPart(this,'attach',3,'AuraBank_JurongBranch_Q1Budget_v3_FINAL.xlsx')">📊 AuraBank_JurongBranch_Q1Budget_v3_FINAL.xlsx <strong style="color:var(--success)">— Contextual, plausible</strong></div>
          <div class="eb-opt" data-cat="attach" data-score="1" onclick="selectEmailPart(this,'attach',1,'SecurityUpdate.pdf')">📄 SecurityUpdate.pdf</div>
          <div class="eb-opt" data-cat="attach" data-score="0" onclick="selectEmailPart(this,'attach',0,'invoice.exe')">⚠ invoice.exe — <span style="color:var(--danger)">immediately suspicious</span></div>
        </div>
      </div>
    </div>

    <button class="btn disabled" id="preview-btn" onclick="showEmailPreview()">▶ PREVIEW EMAIL & SCORE →</button>

    <!-- Preview -->
    <div class="email-preview" id="email-preview">
      <div class="ep-header">
        <div class="ep-field"><span class="ep-key">FROM:</span><span id="prev-from">—</span></div>
        <div class="ep-field"><span class="ep-key">TO:</span><span>lin.weilin@aurabank.com.sg</span></div>
        <div class="ep-field"><span class="ep-key">SUBJ:</span><span id="prev-subj">—</span></div>
        <div class="ep-field"><span class="ep-key">ATTACH:</span><span id="prev-attach">—</span></div>
      </div>
      <div class="ep-body">
        <span id="prev-opening">—</span><br><br>
        Please review the attached document before your 3pm meeting. I've updated the Q1 figures. Let me know if anything looks off.<br><br>
        Best,<br>David Lee | VP Finance | AuraBank SG
      </div>
    </div>

    <div class="ep-result" id="email-result"></div>

    <button class="btn gold disabled" id="m2-next" onclick="goMission(3)">▶ MISSION 3: TAILGATING →</button>
  </div>


  <!-- ══════════════════════════════════
       MISSION 3 — TAILGATING
  ══════════════════════════════════ -->
  <div id="m3" class="mission">

    <div class="dossier">
      <div class="dos-header">
        <span class="dos-classified">CLASSIFIED</span>
        <span class="dos-title">MISSION 03 — TAILGATING</span>
      </div>
      <div class="dos-body">
        <p>AuraBank's server room is badge-access only. You have a fake ID lanyard and a box of "IT equipment." Get inside without triggering an alert.</p>
        <p><strong>Rule:</strong> Every wrong move may alert the guard. Think like a social engineer.</p>
      </div>
    </div>

    <div class="raj-speech">
      <div class="raj-name">// RAJ — SUPERVISOR</div>
      "Three situations. One right move each. Read the room — social engineering exploits politeness and authority, not force."
    </div>

    <!-- Panel 1 -->
    <div class="tg-panel active" id="tgp-1">
      <div class="tg-scene">🏢<span>📦📦📦</span> <span class="scene-label">AURABANK LOBBY — MAIN ENTRANCE</span></div>
      <div class="tg-situation">You approach the badge reader with your arms full of boxes. The security guard is watching from his desk.</div>
      <div class="tg-choices">
        <div class="tg-choice" onclick="tailgate(1, 1, true)">📦 Struggle visibly with the boxes near the badge reader. Wait for the guard to offer help.</div>
        <div class="tg-choice" onclick="tailgate(1, 2, false)">🗣️ Walk up and ask the guard directly: "Can you let me in? My hands are full."</div>
        <div class="tg-choice" onclick="tailgate(1, 3, false)">🪪 Try to badge in (you don't have a badge).</div>
      </div>
      <div class="tg-feedback good" id="tgf-1-1">✓ The guard walks over and holds the door open. You didn't ask — he <em>offered</em>. That's social engineering: make the target feel like they're helping, not being exploited.</div>
      <div class="tg-feedback bad"  id="tgf-1-2">✗ Asking directly draws attention. The guard asks "Do you have a badge?" and the mission is compromised.</div>
      <div class="tg-feedback bad"  id="tgf-1-3">✗ The badge reader rejects you. Guard is now suspicious. Mission compromised.</div>
      <div id="tg-next-1" style="display:none; padding:10px 14px;">
        <button class="btn" onclick="nextTGPanel(1)">▶ NEXT →</button>
      </div>
    </div>

    <!-- Panel 2 -->
    <div class="tg-panel" id="tgp-2">
      <div class="tg-scene">🚪<span>👮</span> <span class="scene-label">AURABANK LOBBY — WITH GUARD</span></div>
      <div class="tg-situation">The guard holds the door. He glances at your lanyard and asks: "What department are you from?"</div>
      <div class="tg-choices">
        <div class="tg-choice" onclick="tailgate(2, 1, true)">🔧 "IT. Routine maintenance on the UPS units in server room 2. Should be quick."</div>
        <div class="tg-choice" onclick="tailgate(2, 2, false)">👔 "I'm here to see the CEO."</div>
        <div class="tg-choice" onclick="tailgate(2, 3, false)">📦 "Just dropping off a delivery."</div>
      </div>
      <div class="tg-feedback good" id="tgf-2-1">✓ Specific + boring + plausible. "IT maintenance" sounds routine and below the guard's pay grade to verify. You're inside.</div>
      <div class="tg-feedback bad"  id="tgf-2-2">✗ CEO visits require pre-authorization. The guard calls up. Mission compromised.</div>
      <div class="tg-feedback bad"  id="tgf-2-3">✗ Deliveries go to reception. The guard redirects you. Mission compromised.</div>
      <div id="tg-next-2" style="display:none; padding:10px 14px;">
        <button class="btn" onclick="nextTGPanel(2)">▶ NEXT →</button>
      </div>
    </div>

    <!-- Panel 3 -->
    <div class="tg-panel" id="tgp-3">
      <div class="tg-scene">🏛️<span>👤</span><span>👀</span> <span class="scene-label">AURABANK CORRIDOR</span></div>
      <div class="tg-situation">You're inside. An AuraBank employee walks past and makes eye contact. They don't recognize you.</div>
      <div class="tg-choices">
        <div class="tg-choice" onclick="tailgate(3, 1, true)">📱 Walk confidently, eyes on your phone, like you belong here.</div>
        <div class="tg-choice" onclick="tailgate(3, 2, false)">👀 Slow down and look around to find the server room.</div>
        <div class="tg-choice" onclick="tailgate(3, 3, false)">🙋 Introduce yourself to the employee as the new IT contractor.</div>
      </div>
      <div class="tg-feedback good" id="tgf-3-1">✓ Confidence is the best disguise. People rarely challenge someone who looks like they know exactly where they're going.</div>
      <div class="tg-feedback bad"  id="tgf-3-2">✗ Loitering triggers the employee's suspicion. They call security. Mission compromised.</div>
      <div class="tg-feedback bad"  id="tgf-3-3">✗ The employee doesn't recognize you and flags security to verify your credentials. Mission compromised.</div>
      <div id="tg-next-3" style="display:none; padding:10px 14px;">
        <button class="btn gold disabled" id="m3-next-btn" onclick="goMission(4)">▶ MISSION 4: QR CODE SWAP →</button>
      </div>
    </div>
  </div>


  <!-- ══════════════════════════════════
       MISSION 4 — QR CODE SWAP
  ══════════════════════════════════ -->
  <div id="m4" class="mission">

    <div class="dossier">
      <div class="dos-header">
        <span class="dos-classified">CLASSIFIED</span>
        <span class="dos-title">MISSION 04 — QR CODE SWAP</span>
      </div>
      <div class="dos-body">
        <p>AuraBank's conference room has a QR code on display for "AuraBank Guest WiFi." Replace it with yours — a fake login page that harvests credentials.</p>
        <p>Watch what happens when 3 employees scan it.</p>
      </div>
    </div>

    <div class="raj-speech">
      <div class="raj-name">// RAJ — SUPERVISOR</div>
      "In real pen tests, we swap QR codes with stickers. Takes 3 seconds. Nobody notices — because nobody reads QR URLs before scanning."
    </div>

    <!-- QR Cards -->
    <div id="qr-phase-1">
      <div class="qr-arena">
        <div class="qr-card real" id="qr-real">
          <div class="qr-code">📶</div>
          <div class="qr-url">aurabank-guest-wifi.sg/connect</div>
          <div class="qr-label ok">✓ LEGITIMATE</div>
        </div>
        <div class="qr-card fake" id="qr-fake">
          <div class="qr-code" id="qr-fake-code">⬛</div>
          <div class="qr-url">aura-bank-sg.com/wifi-login</div>
          <div class="qr-label bad">← YOUR QR CODE</div>
        </div>
      </div>
      <button class="btn" id="swap-btn" onclick="swapQR()">🔄 SWAP THE QR CODE</button>
    </div>

    <!-- After swap -->
    <div id="qr-phase-2" style="display:none;">
      <div class="victim-scan" id="victim-scan">
        <div class="vs-title">// SCANNING EMPLOYEES — LIVE FEED</div>
        <!-- populated by JS -->
      </div>

      <div class="harvest-dashboard" id="harvest-db">
        <div class="hd-title">CREDENTIAL HARVEST DASHBOARD</div>
        <!-- populated by JS -->
      </div>

      <button class="btn gold disabled" id="m4-next" onclick="showFinalDebrief()">▶ SEE FINAL DEBRIEF →</button>
    </div>
  </div>


  <!-- ══════════════════════════════════
       FINAL DEBRIEF
  ══════════════════════════════════ -->
  <div id="m-final" class="mission">

    <div class="scorecard" id="scorecard">
      <div class="sc-header">PENTEST SCORECARD — AURABANK SG</div>
      <div class="sc-row">
        <span class="sc-mission">Mission 1 — Vishing</span>
        <span class="sc-result succeeded" id="sc1">Password reset obtained</span>
      </div>
      <div class="sc-row">
        <span class="sc-mission">Mission 2 — Spear Phishing</span>
        <span class="sc-result" id="sc2">—</span>
      </div>
      <div class="sc-row">
        <span class="sc-mission">Mission 3 — Tailgating</span>
        <span class="sc-result" id="sc3">—</span>
      </div>
      <div class="sc-row">
        <span class="sc-mission">Mission 4 — QR Code Swap</span>
        <span class="sc-result succeeded" id="sc4">2 credentials harvested</span>
      </div>
    </div>

    <div class="raj-speech">
      <div class="raj-name">// RAJ — FINAL DEBRIEF</div>
      "Every attack you just ran — we documented it and handed it to AuraBank's security team. They're patching all four gaps this week. <strong>That's what red teamers do.</strong> We find holes so real attackers can't use them."
    </div>

    <div class="flag-card" id="flag-card" style="display:block;">
      <h2>// PENTEST COMPLETE</h2>
      <p class="flag-subtitle">You completed all 4 social engineering missions. AuraBank has been briefed. Defences are being updated.</p>
      <div class="flag-value">FLAG{s0c14l_3ng1n33r_r3d_t34m_sg}</div>
      <div class="flag-badge">CERTIFIED RED TEAM OPERATIVE — CYBERTRUST SG</div>
      <div class="debrief-box">
        <div class="db-title">// KEY LESSONS</div>
        <div class="db-item">Vishing works because helpdesks are trained to be helpful — not suspicious</div>
        <div class="db-item">Spear phishing targets a specific person — personalization makes it 3x more effective</div>
        <div class="db-item">Tailgating exploits politeness — the fix is challenge culture and turnstile gates</div>
        <div class="db-item">QR codes hide their destination — always check the URL after scanning, before entering any data</div>
        <div class="db-item">Social engineering requires zero technical skill — the human is always the weakest link</div>
        <div class="db-item">Defence: Verify + Verify + Verify. If in doubt, don't.</div>
      </div>
      <br>
      <a href="/game3-ransomware-zero" style="display:block;">
        <button class="btn" style="border-color:var(--muted); color:var(--muted); width:100%; margin-bottom:8px;">← REPLAY GAME 3: RANSOMWARE ZERO</button>
      </a>
      <a href="/" style="display:block;">
        <button class="btn gold" style="width:100%;">← BACK TO HOME</button>
      </a>
    </div>
  </div>

</div><!-- /game-wrap -->

<script>
// ══════════════════════════════════
//  AUTH
// ══════════════════════════════════
function acceptMission() {
  document.getElementById('auth-overlay').style.display = 'none';
  document.getElementById('game-wrap').style.display = 'block';
  startCallTimer();
}
function declineMission() {
  document.getElementById('auth-overlay').innerHTML = '<p style="font-family:var(--mono); color:var(--muted); text-align:center; padding:40px;">Mission declined. Smart choice — never accept unauthorized social engineering requests.</p>';
}

// ══════════════════════════════════
//  CALL TIMER
// ══════════════════════════════════
let callSecs = 0, callInterval;
function startCallTimer() {
  callInterval = setInterval(() => {
    callSecs++;
    const m = Math.floor(callSecs/60), s = callSecs%60;
    const el = document.getElementById('call-timer');
    if (el) el.textContent = m + ':' + String(s).padStart(2,'0');
  }, 1000);
}

// ══════════════════════════════════
//  MISSION NAV
// ══════════════════════════════════
const missionScores = { m1: null, m2: null, m3: null, m4: null };

function goMission(n) {
  document.querySelectorAll('.mission').forEach(m => m.classList.remove('active'));
  document.getElementById('m' + n).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  ['mn1','mn2','mn3','mn4'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.remove('active','done');
    if (i + 1 < n) el.classList.add('done');
    else if (i + 1 === n) el.classList.add('active');
  });
}

// ══════════════════════════════════
//  MISSION 1 — DIALOG TREE
// ══════════════════════════════════
const dialogState = { a: null, b: null, c: null };
let dialogScore = 0;

const dialogFeedback = {
  a: {
    good: '✓ Excellent. You gave a name, department, manager, deadline, and urgency in one sentence. The helpdesk now has a mental image of a real person — even though you invented all of it.',
    ok:   '→ Okay start, but vague. The helpdesk will ask more questions. Less efficient.',
    bad:  '✗ Too abrupt. No context = more suspicion. The helpdesk may ask for verification immediately.',
  },
  b: {
    good: '✓ Smart. You pre-empted the ID question with a believable excuse (new employee, onboarding). Name-dropping "David Lee" adds social proof without needing verification.',
    ok:   '→ Making up an ID is risky — if they verify it, you\'re caught. Use the onboarding excuse instead.',
    bad:  '✗ Hanging up fails the mission. Never abort unless you\'re certain you\'ve been caught.',
  },
  c: {
    good: '✓ Pivoting away from email verification is the key move. The helpdesk — wanting to be helpful — may text or call back instead, bypassing the email check entirely.',
    bad:  '→ The mission ends here — but this is actually the right thing for a real employee to do. Saying "I\'ll check with HR" is the correct security behaviour.',
  },
};

function dialogAnswer(stage, opt, type) {
  if (dialogState[stage] !== null) return;
  dialogState[stage] = type;

  const container = document.getElementById('ds-' + stage);
  const opts = container.querySelectorAll('.ds-opt');
  opts.forEach((o, i) => {
    o.style.pointerEvents = 'none';
    o.style.opacity = '0.5';
  });
  opts[opt-1].classList.add(type === 'good' ? 'chosen-good' : type === 'bad' ? 'chosen-bad' : 'chosen-good');
  opts[opt-1].style.opacity = '1';

  if (type === 'good') dialogScore++;

  const result = document.getElementById('dsr-' + stage);
  result.textContent = dialogFeedback[stage][type];
  result.style.display = 'block';

  // Show next stage
  setTimeout(() => {
    if (stage === 'a') { document.getElementById('ds-b').style.display = 'block'; document.getElementById('ds-b').scrollIntoView({behavior:'smooth',block:'center'}); }
    else if (stage === 'b') { document.getElementById('ds-c').style.display = 'block'; document.getElementById('ds-c').scrollIntoView({behavior:'smooth',block:'center'}); }
    else if (stage === 'c') {
      clearInterval(callInterval);
      missionScores.m1 = dialogScore;
      setTimeout(() => document.getElementById('m1-next').classList.remove('disabled'), 500);
    }
  }, 900);
}

// ══════════════════════════════════
//  MISSION 2 — EMAIL BUILDER
// ══════════════════════════════════
const emailParts = { sender: null, subject: null, opening: null, attach: null };
const emailScores = { sender: 0, subject: 0, opening: 0, attach: 0 };
const emailTexts  = { sender: '', subject: '', opening: '', attach: '' };

function selectEmailPart(el, cat, score, text) {
  // Clear previous selection in category
  document.querySelectorAll(`[data-cat="${cat}"]`).forEach(o => {
    o.classList.remove('selected-good', 'selected-ok', 'selected-bad');
    o.style.opacity = '1';
  });

  const cls = score >= 3 ? 'selected-good' : score >= 1 ? 'selected-ok' : 'selected-bad';
  el.classList.add(cls);
  emailParts[cat] = score;
  emailScores[cat] = score;
  emailTexts[cat] = text;

  // Enable preview when all 4 selected
  if (Object.values(emailParts).every(v => v !== null)) {
    document.getElementById('preview-btn').classList.remove('disabled');
  }
}

function showEmailPreview() {
  document.getElementById('prev-from').textContent = emailTexts.sender || '—';
  document.getElementById('prev-subj').textContent = emailTexts.subject || '—';
  document.getElementById('prev-opening').textContent = (emailTexts.opening || '—').replace(/<[^>]*>/g,'');
  document.getElementById('prev-attach').textContent = emailTexts.attach || '—';
  document.getElementById('email-preview').style.display = 'block';

  const total = Object.values(emailScores).reduce((a,b) => a+b, 0);
  const max = 12;
  const pct = Math.round((total / max) * 100);

  const result = document.getElementById('email-result');
  let verdict, advice;
  if (pct >= 80) {
    verdict = '🎯 HIGHLY TARGETED — Lin would very likely open this';
    advice = 'You used manager impersonation, a real project name, personal timing, and a plausible attachment. This email passes most spam filters because it doesn\'t look like spam.';
    missionScores.m2 = 'High-conviction phish';
  } else if (pct >= 50) {
    verdict = '⚠ MODERATELY CONVINCING — 50/50 chance';
    advice = 'Some elements are targeted but others are generic. A security-aware employee might pause on the details.';
    missionScores.m2 = 'Moderate phish';
  } else {
    verdict = '✗ LOW QUALITY — Likely caught by spam filter';
    advice = 'Too generic. Real phishing defences would flag this. Spear phishing requires research and specificity.';
    missionScores.m2 = 'Low-quality phish';
  }

  result.style.display = 'block';
  result.innerHTML = `
    <div class="score-label">PHISH SCORE</div>
    <div class="score-val">${pct}% — ${verdict}</div>
    <p>${advice}</p>
    <p style="margin-top:8px; color:var(--muted);">The fix: Never use real project names in your email subject — it tells phishers your current priorities. Set LinkedIn to private for work projects.</p>
  `;

  setTimeout(() => document.getElementById('m2-next').classList.remove('disabled'), 600);
}

// ══════════════════════════════════
//  MISSION 3 — TAILGATING
// ══════════════════════════════════
const tgAnswered = { 1: false, 2: false, 3: false };
let tgScore = 0;

function tailgate(panel, opt, correct) {
  if (tgAnswered[panel]) return;
  tgAnswered[panel] = true;
  if (correct) tgScore++;

  const choices = document.querySelectorAll(`#tgp-${panel} .tg-choice`);
  choices.forEach(c => { c.style.pointerEvents = 'none'; c.style.opacity = '0.5'; });
  choices[opt - 1].classList.add(correct ? 'correct' : 'wrong');
  choices[opt - 1].style.opacity = '1';

  const fb = document.getElementById(`tgf-${panel}-${opt}`);
  fb.style.display = 'block';
  document.getElementById(`tg-next-${panel}`).style.display = 'block';
}

function nextTGPanel(panel) {
  const next = panel + 1;
  document.getElementById(`tgp-${panel}`).classList.remove('active');
  if (next <= 3) {
    document.getElementById(`tgp-${next}`).classList.add('active');
    document.getElementById(`tgp-${next}`).scrollIntoView({behavior:'smooth',block:'start'});
    if (next === 3 && tgAnswered[3]) document.getElementById('m3-next-btn').classList.remove('disabled');
  }
  if (panel === 2) missionScores.m3 = tgScore + '/3 panels correct';
}

// Extra: unlock M3 next after panel 3 is answered
const origTG = tailgate;

// ══════════════════════════════════
//  MISSION 4 — QR SWAP
// ══════════════════════════════════
let qrSwapped = false;

function swapQR() {
  if (qrSwapped) return;
  qrSwapped = true;
  document.getElementById('swap-btn').textContent = '✓ QR CODE SWAPPED';
  document.getElementById('swap-btn').disabled = true;
  document.getElementById('swap-btn').style.opacity = '0.5';

  // Tamper animation
  document.getElementById('qr-fake-code').classList.add('tampered');
  const realCard = document.getElementById('qr-real');
  realCard.querySelector('.qr-label').textContent = '✗ REPLACED BY FAKE';
  realCard.querySelector('.qr-label').className = 'qr-label bad';

  setTimeout(() => showVictimScan(), 1000);
}

const victims = [
  { name: 'Sarah Tan (HR Manager)', action: 'Scanned → entered email + password', outcome: 'CREDENTIAL CAPTURED', type: 'captured', data: ['sarah.tan@aurabank.com.sg', 'Password: ••••••••'] },
  { name: 'Ravi Kumar (IT Engineer)', action: 'Scanned → checked URL → exited without entering data', outcome: 'DEFENDED ✓', type: 'defended', data: ['No data entered'] },
  { name: 'Michelle Ong (Teller)', action: 'Scanned → entered work email (uses SSO, no password typed)', outcome: 'EMAIL HARVESTED', type: 'partial', data: ['michelle.ong@aurabank.com.sg'] },
];

function showVictimScan() {
  document.getElementById('qr-phase-2').style.display = 'block';
  const scan = document.getElementById('victim-scan');
  scan.style.display = 'block';

  victims.forEach((v, i) => {
    setTimeout(() => {
      const item = document.createElement('div');
      item.className = 'vs-item';
      item.innerHTML = `
        <div class="vs-name">${v.name}</div>
        <div>${v.action}</div>
        <div class="vs-outcome ${v.type}" style="margin-top:4px; font-weight:700;">${v.outcome}</div>
      `;
      scan.appendChild(item);

      if (i === victims.length - 1) {
        setTimeout(showHarvestDashboard, 800);
      }
    }, (i + 1) * 1200);
  });
}

function showHarvestDashboard() {
  const db = document.getElementById('harvest-db');
  db.style.display = 'block';

  const rows = [
    { key: 'sarah.tan', val: 'Email + Password', cls: 'captured' },
    { key: 'ravi.kumar', val: 'Nothing (defended)', cls: 'safe' },
    { key: 'michelle.ong', val: 'Email address only', cls: '' },
  ];

  db.innerHTML = `<div class="hd-title">CREDENTIAL HARVEST DASHBOARD</div>`;
  rows.forEach(r => {
    const row = document.createElement('div');
    row.className = 'hd-row';
    row.innerHTML = `<span class="hd-key">${r.key}:</span><span class="hd-val ${r.cls}">${r.val}</span>`;
    db.appendChild(row);
  });

  missionScores.m4 = '2 of 3 employees compromised';
  setTimeout(() => document.getElementById('m4-next').classList.remove('disabled'), 600);
}

function showFinalDebrief() {
  // Update scorecard
  document.getElementById('sc2').textContent = missionScores.m2 || '—';
  document.getElementById('sc2').className = 'sc-result ' + ((missionScores.m2||'').includes('High') ? 'succeeded' : 'defended');
  document.getElementById('sc3').textContent = missionScores.m3 || '—';
  document.getElementById('sc3').className = 'sc-result succeeded';

  document.getElementById('scorecard').style.display = 'block';
  document.querySelectorAll('.mission').forEach(m => m.classList.remove('active'));
  document.getElementById('m-final').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  ['mn1','mn2','mn3','mn4'].forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove('active');
    el.classList.add('done');
  });

  launchConfetti();
}

// Panel 3 tailgate: also enable next btn after answering
const _tg = tailgate;
window.tailgate = function(panel, opt, correct) {
  _tg(panel, opt, correct);
  if (panel === 3) {
    setTimeout(() => document.getElementById('m3-next-btn').classList.remove('disabled'), 500);
  }
};

// ══════════════════════════════════
//  CONFETTI
// ══════════════════════════════════
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#7b2fff','#ffd700','#00e676','#ff1744','#ffffff'];
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
