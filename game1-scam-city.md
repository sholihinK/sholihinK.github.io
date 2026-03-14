---
layout: default
title: Game 01 — Scam City
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

* { box-sizing: border-box; }

body {
  font-family: 'Satoshi', sans-serif;
  background: var(--bg);
  color: var(--text);
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,245,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,245,255,0.025) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

/* ─── Safety Ribbon ─── */
.safety-ribbon {
  background: var(--orange);
  color: #000;
  text-align: center;
  padding: 10px 8px;
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 3px;
  position: sticky;
  top: 0;
  z-index: 100;
  animation: ribbon-pulse 3s ease-in-out infinite;
}
@keyframes ribbon-pulse { 0%,100%{opacity:1} 50%{opacity:0.75} }

/* ─── Game Wrap ─── */
.game-wrap {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px 80px;
  position: relative;
  z-index: 1;
}

/* ─── Game Header ─── */
.game-header {
  text-align: center;
  margin-bottom: 28px;
}
.game-tag {
  display: inline-block;
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.4);
  color: var(--cyan);
  font-size: 0.68em;
  letter-spacing: 3px;
  padding: 4px 12px;
  border-radius: 2px;
  margin-bottom: 12px;
  font-family: 'Courier New', monospace;
}
.game-header h1 {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(1.6em, 6vw, 2.4em);
  font-weight: 700;
  color: var(--cyan);
  text-shadow: 0 0 30px rgba(0,245,255,0.4);
  letter-spacing: 3px;
  margin-bottom: 6px;
}
.game-header .subtitle {
  color: var(--muted);
  font-size: 0.85em;
  margin-bottom: 20px;
}

/* ─── Chapter Progress ─── */
.chapter-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 8px;
}
.cp-dot {
  width: 48px; height: 32px;
  border-radius: 4px;
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--muted);
  font-family: 'Courier New', monospace;
  font-size: 0.65em;
  letter-spacing: 1px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
}
.cp-dot.active {
  background: rgba(0,245,255,0.1);
  border-color: var(--cyan);
  color: var(--cyan);
  box-shadow: 0 0 10px rgba(0,245,255,0.2);
}
.cp-dot.done {
  background: rgba(0,245,255,0.05);
  border-color: rgba(0,245,255,0.4);
  color: var(--cyan);
}
.cp-line {
  width: 24px; height: 1px;
  background: rgba(255,255,255,0.12);
}

/* ─── Chapter ─── */
.chapter { display: none; }
.chapter.active {
  display: block;
  animation: chapter-in 0.4s ease;
}
@keyframes chapter-in {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Story Card ─── */
.story-card {
  background: var(--bg2);
  border: 1px solid rgba(0,245,255,0.15);
  border-left: 3px solid var(--magenta);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 20px;
}
.story-meta {
  font-family: 'Courier New', monospace;
  font-size: 0.68em;
  letter-spacing: 2px;
  color: var(--magenta);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.story-card p {
  color: var(--text);
  font-size: 0.9em;
  line-height: 1.8;
}
.story-card p + p { margin-top: 8px; }
.story-card strong { color: var(--cyan); }

/* ─── Card (generic) ─── */
.card {
  background: var(--bg2);
  border: 1px solid rgba(0,245,255,0.2);
  border-left: 3px solid var(--cyan);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.card h2 {
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  letter-spacing: 2px;
  color: var(--cyan);
  margin-bottom: 12px;
  text-transform: uppercase;
}
.card p, .card li {
  color: var(--text);
  font-size: 0.88em;
  line-height: 1.7;
}
.card ul { padding-left: 18px; margin-top: 8px; }
.card li { margin-bottom: 5px; }
.card.yellow { border-left-color: var(--yellow); }
.card.yellow h2 { color: var(--yellow); }
.card.red { border-left-color: var(--red); }
.card.red h2 { color: var(--red); }
.card.green { border-left-color: var(--green); }
.card.green h2 { color: var(--green); }

/* ─── Instruction Label ─── */
.instruct {
  font-family: 'Courier New', monospace;
  font-size: 0.75em;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.instruct::before {
  content: '▶';
  color: var(--cyan);
  font-size: 0.8em;
}

/* ─── Message Cards (Chapter 1) ─── */
.messages-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}
.message-card {
  background: var(--bg2);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.1s;
  min-height: 48px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}
.message-card:active { transform: scale(0.98); }
@media (hover: hover) {
  .message-card:hover {
    border-color: rgba(0,245,255,0.3);
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  }
}
.message-card.correct {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0,245,255,0.2);
  background: rgba(0,245,255,0.05);
}
.message-card.wrong {
  border-color: var(--red);
  box-shadow: 0 0 12px rgba(255,51,51,0.15);
  animation: shake 0.4s ease;
}
@keyframes shake {
  0%,100%{transform:translateX(0)} 20%{transform:translateX(-6px)} 40%{transform:translateX(6px)} 60%{transform:translateX(-4px)} 80%{transform:translateX(4px)}
}
.msg-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.app-badge {
  font-family: 'Courier New', monospace;
  font-size: 0.65em;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 8px;
  border-radius: 3px;
  min-height: 20px;
}
.app-badge.wa  { background: rgba(37,211,102,0.15); color: #25d366; border: 1px solid rgba(37,211,102,0.3); }
.app-badge.sms { background: rgba(107,114,128,0.15); color: var(--muted); border: 1px solid rgba(107,114,128,0.3); }
.app-badge.tg  { background: rgba(0,136,204,0.15); color: #0088cc; border: 1px solid rgba(0,136,204,0.3); }
.msg-sender {
  font-size: 0.78em;
  color: var(--muted);
  font-family: 'Courier New', monospace;
}
.msg-time {
  margin-left: auto;
  font-size: 0.7em;
  color: var(--muted);
  font-family: 'Courier New', monospace;
}
.msg-body {
  font-size: 0.88em;
  color: var(--text);
  line-height: 1.6;
}
.msg-url {
  display: inline-block;
  margin-top: 4px;
  color: var(--cyan);
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  text-decoration: underline;
  word-break: break-all;
}
.msg-feedback {
  display: none;
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 0.82em;
  line-height: 1.6;
}
.msg-feedback.correct { background: rgba(0,245,255,0.08); color: var(--cyan); border: 1px solid rgba(0,245,255,0.2); }
.msg-feedback.wrong   { background: rgba(255,51,51,0.07);  color: var(--red); border: 1px solid rgba(255,51,51,0.2); }

/* ─── URL Comparison (Chapter 1 Forensic) ─── */
.url-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 16px 0;
}
@media (max-width: 500px) {
  .url-compare { grid-template-columns: 1fr; }
}
.url-card {
  background: var(--bg3);
  border-radius: 8px;
  overflow: hidden;
}
.url-titlebar {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.url-dot { width: 8px; height: 8px; border-radius: 50%; }
.url-dot.r { background: #ff5f56; }
.url-dot.y { background: #ffbd2e; }
.url-dot.g { background: #27c93f; }
.url-bar {
  background: rgba(0,0,0,0.3);
  border-radius: 4px;
  padding: 4px 10px;
  margin: 0 12px 0 4px;
  flex: 1;
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  display: flex;
  align-items: center;
  gap: 4px;
}
.url-lock { font-size: 0.9em; }
.url-lock.ok  { color: #27c93f; }
.url-lock.bad { color: var(--red); }
.url-bar span { color: var(--muted); }
.url-bar .url-good { color: var(--green); }
.url-bar .url-bad  { color: var(--red); background: rgba(255,51,51,0.15); padding: 0 2px; border-radius: 2px; }
.url-label {
  padding: 10px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.url-label.safe { color: var(--green); }
.url-label.fake { color: var(--red); }

/* ─── Timer Bar (Chapter 2) ─── */
.timer-wrap {
  margin-bottom: 20px;
}
.timer-label {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  color: var(--muted);
  letter-spacing: 2px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
}
.timer-label span { color: var(--yellow); }
.timer-track {
  height: 8px;
  background: var(--bg3);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}
.timer-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--cyan), var(--magenta));
  border-radius: 4px;
  transition: width 0.1s linear, background 0.5s;
}
.timer-fill.urgent { background: linear-gradient(90deg, var(--yellow), var(--red)); }

/* ─── Warning Choice Cards (Chapter 2) ─── */
.warning-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}
.warning-card {
  background: var(--bg2);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 16px 18px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-height: 64px;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.1s;
  -webkit-tap-highlight-color: transparent;
}
.warning-card:active { transform: scale(0.98); }
@media (hover: hover) {
  .warning-card:hover {
    border-color: rgba(0,245,255,0.3);
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  }
}
.warning-card.correct {
  border-color: var(--cyan);
  background: rgba(0,245,255,0.06);
  box-shadow: 0 0 16px rgba(0,245,255,0.15);
}
.warning-card.wrong {
  border-color: var(--red);
  background: rgba(255,51,51,0.05);
  animation: shake 0.4s ease;
}
.wc-icon {
  font-size: 1.4em;
  flex-shrink: 0;
  margin-top: 2px;
}
.wc-text { font-size: 0.9em; line-height: 1.6; color: var(--text); }
.wc-feedback {
  display: none;
  font-size: 0.8em;
  margin-top: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  line-height: 1.5;
}
.wc-feedback.correct { background: rgba(0,245,255,0.08); color: var(--cyan); }
.wc-feedback.wrong   { background: rgba(255,51,51,0.08); color: #ff8888; }

/* ─── Checkout Inspector (Chapter 2 Forensic) ─── */
.browser-mock {
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  overflow: hidden;
  margin: 16px 0;
}
.browser-chrome {
  background: var(--bg2);
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  gap: 8px;
}
.bc-dots { display: flex; gap: 5px; }
.bc-dot { width: 9px; height: 9px; border-radius: 50%; }
.bc-dot.r { background: #ff5f56; }
.bc-dot.y { background: #ffbd2e; }
.bc-dot.g { background: #27c93f; }
.bc-urlbar {
  flex: 1;
  background: rgba(0,0,0,0.3);
  border-radius: 4px;
  padding: 5px 10px;
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: outline 0.15s;
  position: relative;
}
.bc-urlbar.flagged { outline: 2px solid var(--red); color: var(--red); }
.browser-body {
  padding: 20px;
}
.fake-logo {
  font-family: 'Clash Display', sans-serif;
  font-size: 1.1em;
  color: #f0a500;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.fake-product {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.fake-product-img {
  width: 72px; height: 72px;
  background: var(--bg3);
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
  font-size: 2em;
  flex-shrink: 0;
}
.fake-product-info { flex: 1; min-width: 140px; }
.fake-product-name { font-size: 0.9em; margin-bottom: 4px; }
.fake-product-price { color: var(--yellow); font-size: 1.1em; font-weight: 700; }
.fake-otp-section {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 14px;
}
.fake-otp-label {
  font-size: 0.8em;
  color: var(--muted);
  margin-bottom: 8px;
  cursor: pointer;
  position: relative;
}
.fake-otp-label.flagged { color: var(--red); outline: 2px solid var(--red); outline-offset: 3px; border-radius: 2px; }
.fake-otp-input-row {
  display: flex; gap: 8px;
}
.fake-otp-input {
  flex: 1;
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 0.85em;
  color: var(--muted);
  pointer-events: none;
}
.fake-submit {
  background: #f0a500;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 0.85em;
  font-weight: 700;
  cursor: pointer;
  pointer-events: none;
  white-space: nowrap;
}

/* Hotspot */
.hotspot {
  position: absolute;
  width: 32px; height: 32px;
  border-radius: 50%;
  background: rgba(255,190,11,0.3);
  border: 2px solid var(--yellow);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  animation: hotspot-pulse 1.5s ease-in-out infinite;
  z-index: 10;
  min-width: 48px; min-height: 48px;
  margin: -24px -24px;
  -webkit-tap-highlight-color: transparent;
}
@keyframes hotspot-pulse {
  0%,100%{ box-shadow: 0 0 0 0 rgba(255,190,11,0.4); }
  50%{ box-shadow: 0 0 0 8px rgba(255,190,11,0); }
}
.hotspot.found {
  background: rgba(255,51,51,0.2);
  border-color: var(--red);
  animation: none;
}
.hotspot-label {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--bg);
  border: 1px solid var(--red);
  color: var(--red);
  font-size: 0.72em;
  font-family: 'Courier New', monospace;
  padding: 6px 10px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 20;
  width: max-content;
  max-width: 180px;
  white-space: normal;
  text-align: center;
}
.hotspot.found .hotspot-label { display: block; }
.hotspot-num {
  color: var(--yellow);
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
  font-weight: 700;
}

/* Flag counter */
.flag-counter {
  font-family: 'Courier New', monospace;
  font-size: 0.8em;
  color: var(--muted);
  text-align: center;
  margin: 12px 0;
  transition: color 0.3s;
}
.flag-counter.complete { color: var(--cyan); }

/* ─── EXIF Table (Chapter 3) ─── */
.exif-photo-card {
  background: var(--bg2);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}
.exif-photo-mock {
  height: 140px;
  background: linear-gradient(135deg, #1a1f3a, #0f1428);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
}
.exif-photo-mock::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,245,255,0.04), rgba(255,0,110,0.04));
}
.photo-icon { font-size: 2.5em; }
.photo-caption {
  font-size: 0.78em;
  color: var(--muted);
  font-style: italic;
}
.photo-meta-bar {
  background: rgba(0,0,0,0.4);
  padding: 8px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
  color: var(--muted);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4px;
}
.ig-caption {
  padding: 12px 16px;
  font-size: 0.88em;
  line-height: 1.6;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.ig-caption .ig-user { color: var(--cyan); font-weight: 700; }

.exif-table {
  display: none;
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.2);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
  animation: chapter-in 0.4s ease;
}
.exif-table table { width: 100%; border-collapse: collapse; }
.exif-table th {
  background: rgba(0,245,255,0.07);
  padding: 10px 16px;
  text-align: left;
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
  letter-spacing: 2px;
  color: var(--cyan);
  text-transform: uppercase;
}
.exif-table td {
  padding: 10px 16px;
  font-family: 'Courier New', monospace;
  font-size: 0.82em;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.exif-table td:first-child { color: var(--muted); width: 40%; }
.exif-table td:last-child  { color: var(--cyan); }
.exif-table td.flag-gps    { color: var(--red); }
.exif-table tr.highlight td { background: rgba(255,51,51,0.05); }

/* ─── Victim Counter ─── */
.victim-screen {
  display: none;
  text-align: center;
  padding: 24px;
  background: var(--bg2);
  border: 1px solid rgba(255,51,51,0.3);
  border-radius: 12px;
  margin-bottom: 16px;
  animation: chapter-in 0.4s ease;
}
.victim-number {
  font-family: 'Clash Display', sans-serif;
  font-size: clamp(2.5em, 10vw, 4em);
  color: var(--red);
  text-shadow: 0 0 30px rgba(255,51,51,0.4);
  margin: 8px 0;
}
.victim-label { font-size: 0.8em; color: var(--muted); font-family: 'Courier New', monospace; letter-spacing: 2px; }
.victim-card {
  display: none;
  background: rgba(255,51,51,0.07);
  border: 1px solid rgba(255,51,51,0.3);
  border-radius: 8px;
  padding: 14px;
  margin-top: 14px;
  text-align: left;
  animation: chapter-in 0.4s ease;
}
.victim-name { font-size: 0.88em; color: var(--text); margin-bottom: 4px; }
.victim-loss { color: var(--red); font-family: 'Courier New', monospace; font-size: 0.9em; font-weight: 700; }

/* ─── Officer Tham reveal ─── */
.officer-reveal {
  display: none;
  background: var(--bg2);
  border: 2px solid var(--yellow);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  animation: chapter-in 0.5s ease;
}
.officer-reveal .officer-name {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  letter-spacing: 2px;
  color: var(--yellow);
  margin-bottom: 8px;
}
.officer-reveal p { font-size: 0.9em; line-height: 1.7; }

/* ─── Location Options ─── */
.location-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 16px 0;
}
.location-card {
  background: var(--bg2);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 16px 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 56px;
  font-size: 0.9em;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.1s;
  -webkit-tap-highlight-color: transparent;
}
.location-card:active { transform: scale(0.98); }
@media (hover: hover) {
  .location-card:hover {
    border-color: rgba(0,245,255,0.3);
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
}
.location-card.correct {
  border-color: var(--cyan);
  background: rgba(0,245,255,0.06);
  box-shadow: 0 0 16px rgba(0,245,255,0.15);
}
.location-card.wrong {
  border-color: var(--red);
  animation: shake 0.4s ease;
}
.loc-icon { font-size: 1.3em; flex-shrink: 0; }

/* ─── Lesson Card ─── */
.lesson-card {
  display: none;
  background: linear-gradient(135deg, rgba(255,0,110,0.07), rgba(0,245,255,0.04));
  border: 1px solid rgba(255,0,110,0.3);
  border-left: 3px solid var(--magenta);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
  animation: chapter-in 0.4s ease;
}
.lesson-card .lesson-title {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  letter-spacing: 2px;
  color: var(--magenta);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.lesson-card p {
  font-size: 0.9em;
  line-height: 1.7;
  color: var(--text);
}
.lesson-card ul { padding-left: 18px; margin-top: 8px; }
.lesson-card li { font-size: 0.88em; line-height: 1.7; color: var(--text); margin-bottom: 4px; }

/* ─── Buttons ─── */
.btn {
  background: transparent;
  border: 2px solid var(--cyan);
  color: var(--cyan);
  padding: 14px 24px;
  font-family: 'Satoshi', sans-serif;
  font-size: 0.88em;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
  min-height: 48px;
  width: 100%;
  display: block;
  text-align: center;
  margin-top: 8px;
  -webkit-tap-highlight-color: transparent;
}
@media (hover: hover) {
  .btn:hover {
    background: rgba(0,245,255,0.1);
    box-shadow: 0 0 16px rgba(0,245,255,0.25);
    transform: translateY(-2px);
  }
}
.btn:active { transform: scale(0.98); }
.btn.magenta {
  border-color: var(--magenta);
  color: var(--magenta);
}
@media (hover: hover) {
  .btn.magenta:hover {
    background: rgba(255,0,110,0.08);
    box-shadow: 0 0 14px rgba(255,0,110,0.2);
  }
}
.btn.disabled { opacity: 0.4; pointer-events: none; }
.btn-row { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
.btn-row .btn { flex: 1; min-width: 140px; width: auto; }

/* ─── Post-credits Tease ─── */
.tg-tease {
  display: none;
  background: var(--bg2);
  border: 1px solid rgba(0,136,204,0.4);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  animation: chapter-in 0.5s ease;
}
.tg-tease-header {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 10px;
}
.tg-icon { font-size: 1.2em; }
.tg-name { font-family: 'Courier New', monospace; font-size: 0.75em; color: #0088cc; letter-spacing: 1px; }
.tg-msg  { font-size: 0.88em; line-height: 1.6; color: var(--muted); font-style: italic; }
.tg-sender { color: var(--red); font-family: 'Courier New', monospace; font-size: 0.8em; }

/* ─── Flag Card ─── */
.flag-card {
  display: none;
  background: linear-gradient(135deg, rgba(0,245,255,0.08), rgba(255,0,110,0.05));
  border: 2px solid var(--cyan);
  box-shadow: 0 0 40px rgba(0,245,255,0.12), inset 0 0 40px rgba(0,245,255,0.04);
  border-radius: 12px;
  padding: 28px 24px;
  text-align: center;
  animation: flag-appear 0.6s ease;
}
@keyframes flag-appear {
  from { opacity: 0; transform: scale(0.88) translateY(24px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.flag-card h2 {
  font-family: 'Clash Display', sans-serif;
  font-size: 1em;
  letter-spacing: 3px;
  color: var(--cyan);
  margin-bottom: 6px;
}
.flag-card .subtitle { color: var(--muted); font-size: 0.8em; margin-bottom: 20px; }
.flag-value {
  background: var(--bg);
  border: 1px dashed rgba(0,245,255,0.5);
  color: var(--cyan);
  padding: 14px 16px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: clamp(0.78em, 3vw, 0.92em);
  letter-spacing: 1px;
  margin-bottom: 16px;
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
  font-size: 0.75em;
  letter-spacing: 2px;
  margin-bottom: 20px;
}
.debrief-list {
  text-align: left;
  background: var(--bg2);
  border-radius: 8px;
  padding: 16px 20px;
  margin-top: 16px;
}
.debrief-list h3 {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  letter-spacing: 2px;
  color: var(--cyan);
  margin-bottom: 10px;
  text-transform: uppercase;
}
.debrief-list li {
  font-size: 0.85em;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 4px;
  padding-left: 4px;
}
.debrief-list li::before { content: '✓ '; color: var(--green); }

/* Canvas confetti */
#confetti-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 9999;
  display: none;
}

/* Phase sections within chapters */
.phase { display: none; }
.phase.active {
  display: block;
  animation: chapter-in 0.35s ease;
}

/* Divider */
.divider {
  border: none;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin: 20px 0;
}
</style>

<canvas id="confetti-canvas"></canvas>
<div class="safety-ribbon">// TRAINING EXERCISE — EDUCATIONAL PURPOSES ONLY //</div>

<div class="game-wrap">

  <!-- ═══ GAME HEADER ═══ -->
  <div class="game-header">
    <div class="game-tag">GAME 01 — SCAM CITY</div>
    <h1>SCAM CITY</h1>
    <p class="subtitle">Year 2026 · Telok Ayer, Singapore · N-Levels in 5 days</p>
    <div class="chapter-progress">
      <div class="cp-dot active" id="cp1">CH.1</div>
      <div class="cp-line"></div>
      <div class="cp-dot" id="cp2">CH.2</div>
      <div class="cp-line"></div>
      <div class="cp-dot" id="cp3">CH.3</div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════
       CHAPTER 1 — YOUR PHONE IS BUZZING
  ══════════════════════════════════════════ -->
  <div id="ch1" class="chapter active">

    <!-- Story Intro -->
    <div class="story-card">
      <div class="story-meta">Chapter 1 — Your Phone Is Buzzing</div>
      <p>You're <strong>Ryo</strong>, on the MRT. N-Levels in 5 days. Three messages arrive at once.</p>
      <p>One of them is trying to steal something from you.</p>
    </div>

    <!-- Phase 1A: Message Selection -->
    <div id="ch1-messages" class="phase active">
      <p class="instruct">Tap the message that is definitely a scam</p>

      <div class="messages-grid">

        <!-- Message 1: WhatsApp -->
        <div class="message-card" id="msg1" onclick="tapMessage(1)">
          <div class="msg-header">
            <div class="app-badge wa">WhatsApp</div>
            <div class="msg-sender">Unknown (+65 8XXX XXXX)</div>
            <div class="msg-time">10:42 AM</div>
          </div>
          <div class="msg-body">
            Hi Ryo, your MOE Edusave bursary application needs verification. Click here to confirm your details:<br>
            <span class="msg-url">moe-sg-verify.com/bursary</span>
          </div>
          <div class="msg-feedback correct" id="msg1-feedback">
            ✓ Correct. <strong>moe-sg-verify.com</strong> is not a government domain. All Singapore government sites use <strong>.gov.sg</strong>. This URL is a classic phishing domain designed to look official.
          </div>
          <div class="msg-feedback wrong" id="msg1-wrong" style="display:none"></div>
        </div>

        <!-- Message 2: SMS -->
        <div class="message-card" id="msg2" onclick="tapMessage(2)">
          <div class="msg-header">
            <div class="app-badge sms">SMS</div>
            <div class="msg-sender">+65 3XXX XXXX</div>
            <div class="msg-time">10:43 AM</div>
          </div>
          <div class="msg-body">
            [SINGPASS] Your account has been flagged. Re-verify your identity immediately to avoid suspension:<br>
            <span class="msg-url">singpass-secure.sg/verify</span>
          </div>
          <div class="msg-feedback wrong" id="msg2-feedback">
            This is also a scam — but not the most obvious one. SingPass never uses .sg-only domains without .gov.sg. The correct answer was the WhatsApp message, where the fake domain is easiest to spot at a glance.
          </div>
        </div>

        <!-- Message 3: Telegram -->
        <div class="message-card" id="msg3" onclick="tapMessage(3)">
          <div class="msg-header">
            <div class="app-badge tg">Telegram</div>
            <div class="msg-sender">Meridian Admin Bot</div>
            <div class="msg-time">10:44 AM</div>
          </div>
          <div class="msg-body">
            ⚠️ ACTION REQUIRED: To confirm your N-Level registration, please upload a photo of your NRIC to this chat before 5pm today.
          </div>
          <div class="msg-feedback wrong" id="msg3-feedback">
            This is also a scam — NRIC uploads via Telegram are never legitimate. But the most obvious red flag is in the WhatsApp message, where you can clearly see a fake .com domain impersonating a .gov.sg site.
          </div>
        </div>

      </div>

      <button class="btn disabled" id="ch1-next-btn" onclick="showCh1Forensic()">▶ ANALYSE THE URL →</button>
    </div>

    <!-- Phase 1B: URL Forensic Viewer -->
    <div id="ch1-forensic" class="phase">
      <div class="card">
        <h2>// URL Forensics — Spot the Difference</h2>
        <p>Let's zoom in on why <code>moe-sg-verify.com</code> is dangerous. Compare the two URLs:</p>
      </div>

      <div class="url-compare">
        <div class="url-card">
          <div class="url-titlebar">
            <div class="url-dot r"></div><div class="url-dot y"></div><div class="url-dot g"></div>
            <div class="url-bar">
              <span class="url-lock ok">🔒</span>
              <span class="url-good">moe.gov.sg</span>
            </div>
          </div>
          <div class="url-label safe">✓ Official Government Domain</div>
        </div>
        <div class="url-card">
          <div class="url-titlebar">
            <div class="url-dot r"></div><div class="url-dot y"></div><div class="url-dot g"></div>
            <div class="url-bar">
              <span class="url-lock bad">⚠</span>
              <span class="url-bad">moe-sg-verify.com</span>
            </div>
          </div>
          <div class="url-label fake">✗ Fake — Not a .gov.sg Domain</div>
        </div>
      </div>

      <div class="card">
        <h2>// What to Look For</h2>
        <ul>
          <li>Singapore government sites always end in <strong>.gov.sg</strong></li>
          <li>Scammers use <strong>hyphens</strong> and <strong>extra words</strong> to fake legitimacy</li>
          <li><code>moe-sg-verify.com</code> is a .com domain — anyone can buy it for $1</li>
          <li>Always check the <strong>full domain</strong>, not just the first word</li>
        </ul>
      </div>

      <button class="btn" onclick="showCh1Lesson()">▶ SEE THE LESSON →</button>
    </div>

    <!-- Phase 1C: Lesson -->
    <div id="ch1-lesson" class="phase">
      <div class="lesson-card" style="display:block;">
        <div class="lesson-title">// Lesson — Phishing & Smishing</div>
        <p><strong>Government agencies in Singapore will NEVER ask for your NRIC, password, or OTP via WhatsApp, SMS, or Telegram.</strong></p>
        <ul style="margin-top:10px;">
          <li>Always verify the sender's domain — look for <strong>.gov.sg</strong></li>
          <li>Smishing = SMS phishing. Scammers spoof sender IDs to look real</li>
          <li>When in doubt — go directly to the official site, don't tap the link</li>
          <li>Report scams at <strong>ScamShield</strong> or call <strong>1800-722-6688</strong></li>
        </ul>
      </div>

      <button class="btn" onclick="goChapter(2)">▶ CHAPTER 2: DARREN'S BIG DEAL →</button>
    </div>

  </div><!-- /ch1 -->


  <!-- ══════════════════════════════════════════
       CHAPTER 2 — DARREN'S BIG DEAL
  ══════════════════════════════════════════ -->
  <div id="ch2" class="chapter">

    <div class="story-card">
      <div class="story-meta">Chapter 2 — Darren's Big Deal</div>
      <p>Your best friend <strong>Darren</strong> just messaged you. He found a PS6 on Carousell for $180.</p>
      <p>The seller sent him a "Carousell Protected Checkout" link and is asking for his OTP to "verify identity."</p>
      <p style="color:var(--red); margin-top:8px;"><strong>⚠ Darren is about to share his OTP. You have 15 seconds to warn him correctly.</strong></p>
    </div>

    <!-- Phase 2A: Timer + Warning Choice -->
    <div id="ch2-timer-phase" class="phase active">
      <div class="timer-wrap">
        <div class="timer-label">
          <span>TIME REMAINING</span>
          <span id="timer-display">15s</span>
        </div>
        <div class="timer-track">
          <div class="timer-fill" id="timer-fill"></div>
        </div>
      </div>

      <p class="instruct">Which warning do you send Darren?</p>

      <div class="warning-grid">
        <div class="warning-card" id="wc1" onclick="tapWarning(1)">
          <div class="wc-icon">🛑</div>
          <div>
            <div class="wc-text">Don't share the OTP! No legitimate platform ever asks for it. OTPs are private — sharing it means the scammer can steal your money NOW.</div>
            <div class="wc-feedback correct" id="wc1-feedback">✓ Correct. This is the ONLY right answer. OTPs must never be shared with anyone — not sellers, not platforms, not even bank staff.</div>
          </div>
        </div>
        <div class="warning-card" id="wc2" onclick="tapWarning(2)">
          <div class="wc-icon">⭐</div>
          <div>
            <div class="wc-text">Check the seller's ratings and reviews first before paying.</div>
            <div class="wc-feedback wrong" id="wc2-feedback">Not urgent enough. Darren is about to share his OTP right now — good reviews don't protect against OTP theft. The platform itself is fake.</div>
          </div>
        </div>
        <div class="warning-card" id="wc3" onclick="tapWarning(3)">
          <div class="wc-icon">📞</div>
          <div>
            <div class="wc-text">Call Carousell support to verify if this checkout is real.</div>
            <div class="wc-feedback wrong" id="wc3-feedback">Wrong — there's no time, and calling won't help if Darren shares the OTP in the meantime. Speed and the right message matter here.</div>
          </div>
        </div>
      </div>

      <div id="ch2-expired-msg" style="display:none;" class="lesson-card">
        <div class="lesson-title">// Too Slow — Darren Shared the OTP</div>
        <p>Darren's account was charged $2,400. The scammer drained his PayNow-linked account in seconds.</p>
        <p style="margin-top:8px;">This is how OTP theft works — it happens faster than you think. Let's examine how the fake page fooled him.</p>
      </div>

      <button class="btn disabled" id="ch2-forensic-btn" onclick="showCh2Forensic()">▶ EXAMINE THE FAKE CHECKOUT PAGE →</button>
    </div>

    <!-- Phase 2B: Checkout Inspector -->
    <div id="ch2-forensic" class="phase">
      <div class="card">
        <h2>// Forensics — Spot the Red Flags</h2>
        <p>This is the fake checkout page the scammer sent Darren. Tap the <strong>3 red flags</strong> hidden in the page.</p>
      </div>

      <div class="flag-counter" id="flag-counter">Red flags found: <strong id="flag-count">0</strong> / 3</div>

      <div class="browser-mock" style="position:relative;">
        <!-- Hotspot 1: URL bar -->
        <div style="position:relative;">
          <div class="browser-chrome">
            <div class="bc-dots">
              <div class="bc-dot r"></div><div class="bc-dot y"></div><div class="bc-dot g"></div>
            </div>
            <div class="bc-urlbar" id="hs1-trigger" onclick="findFlag(1)" style="cursor:pointer;">
              <span>⚠</span>
              <span>carousell-checkout.pages.dev</span>
            </div>
          </div>
          <!-- Hotspot 1 indicator -->
          <div class="hotspot" id="hs1" onclick="findFlag(1)" style="position:absolute; right:60px; top:8px; z-index:10;">
            <span class="hotspot-num">1</span>
            <div class="hotspot-label">Fake URL — real Carousell uses carousell.sg, not pages.dev</div>
          </div>
        </div>

        <div class="browser-body" style="position:relative;">
          <div class="fake-logo">🛒 Carouse11 Checkout</div>

          <div class="fake-product">
            <div class="fake-product-img">🎮</div>
            <div class="fake-product-info">
              <div class="fake-product-name">PlayStation 6 Console (New)</div>
              <div class="fake-product-price">SGD $180.00</div>
            </div>
          </div>

          <div class="fake-otp-section" style="position:relative;">
            <!-- Hotspot 2: Grammar error -->
            <div class="fake-otp-label" id="hs2-trigger" onclick="findFlag(2)" style="cursor:pointer; position:relative;">
              Enter Your OTP to Verify Identety
              <div class="hotspot" id="hs2" onclick="findFlag(2)" style="position:absolute; right:-10px; top:-10px; z-index:10;">
                <span class="hotspot-num">2</span>
                <div class="hotspot-label">Spelling error — "Identety" instead of "Identity". Legitimate platforms don't have typos.</div>
              </div>
            </div>
            <div class="fake-otp-input-row">
              <div class="fake-otp-input">Enter OTP received via SMS</div>
              <button class="fake-submit" style="position:relative;">
                Verify
                <!-- Hotspot 3: No padlock / HTTP -->
                <div class="hotspot" id="hs3" onclick="findFlag(3)" style="position:absolute; right:-60px; top:-20px; z-index:10;">
                  <span class="hotspot-num">3</span>
                  <div class="hotspot-label">No HTTPS padlock — real checkout pages are always secure (🔒)</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button class="btn disabled" id="ch2-lesson-btn" onclick="showCh2Lesson()">▶ SEE THE LESSON →</button>
    </div>

    <!-- Phase 2C: Lesson -->
    <div id="ch2-lesson" class="phase">
      <div class="lesson-card" style="display:block;">
        <div class="lesson-title">// Lesson — OTP Theft & Social Engineering</div>
        <p><strong>OTPs are like your ATM PIN. No legitimate service will ever ask you to share one.</strong></p>
        <ul style="margin-top:10px;">
          <li>OTP = One-Time Password. It only works for seconds and grants direct account access</li>
          <li>Scammers create fake "secure checkout" pages to trick buyers</li>
          <li>Red flags on fake pages: wrong URL, typos, no HTTPS padlock, urgency pressure</li>
          <li>On Carousell: all real transactions happen <strong>in-app</strong>, not via external links</li>
          <li>Darren's $2,400 loss could have been prevented by this one rule</li>
        </ul>
      </div>

      <button class="btn" onclick="goChapter(3)">▶ CHAPTER 3: THE FLIP →</button>
    </div>

  </div><!-- /ch2 -->


  <!-- ══════════════════════════════════════════
       CHAPTER 3 — THE FLIP
  ══════════════════════════════════════════ -->
  <div id="ch3" class="chapter">

    <div class="story-card">
      <div class="story-meta">Chapter 3 — The Flip</div>
      <p>You've been tracing the scams to a Telegram group called <strong>SG Easy Money</strong>, run by <strong>ADMIN_SG</strong>.</p>
      <p>To get evidence, you went undercover. You're inside the group. They've given you a message to send.</p>
      <p style="color:var(--yellow); margin-top:8px;"><strong>⚠ For 30 seconds, you are the threat actor.</strong></p>
    </div>

    <!-- Phase 3A: Undercover -->
    <div id="ch3-undercover" class="phase active">
      <div class="card">
        <h2>// Undercover — Telegram Group: SG Easy Money</h2>
        <p>ADMIN_SG has given you a scam message to send. Tap SEND to see what happens.</p>
        <div style="background:var(--bg3); border-radius:8px; padding:14px; margin:14px 0; font-size:0.88em; line-height:1.7; border: 1px solid rgba(255,255,255,0.07);">
          ⚠️ URGENT: Your SingPass account activity is suspicious. Verify immediately to avoid suspension:<br>
          <span style="color:var(--cyan); font-family:'Courier New',monospace;">singpass-sg-verify.com/urgent</span><br>
          <span style="color:var(--muted); font-size:0.85em;">Reply STOP to opt out.</span>
        </div>
        <button class="btn magenta" id="send-btn" onclick="sendScamMsg()">📤 SEND MESSAGE</button>
      </div>

      <div class="victim-screen" id="victim-screen">
        <div class="victim-label">MESSAGES SENT TO</div>
        <div class="victim-number" id="victim-count">0</div>
        <div class="victim-label">TARGETS IN THE LAST 10 SECONDS</div>
        <div class="victim-card" id="victim-card">
          <div class="victim-name">🔴 One of your targets: <strong>Parent of Zack Tan, Bukit Batok</strong></div>
          <div class="victim-loss">$3,200 lost via PayNow — account emptied in 4 minutes</div>
        </div>
      </div>

      <div class="officer-reveal" id="officer-reveal">
        <div class="officer-name">// SPF Officer Tham — Cybercrime Division</div>
        <p>"Ryo. The group was already under surveillance. Every message you saw has been logged. I need you to cooperate — we can trace ADMIN_SG, but we need the photo he sent yesterday. It has location data in it."</p>
      </div>

      <button class="btn disabled" id="ch3-exif-btn" onclick="showCh3Exif()">▶ EXTRACT PHOTO METADATA →</button>
    </div>

    <!-- Phase 3B: EXIF Extraction -->
    <div id="ch3-exif" class="phase">
      <div class="card">
        <h2>// EXIF Forensics — ADMIN_SG's Photo</h2>
        <p>ADMIN_SG posted this photo in the group yesterday. He didn't know photos contain hidden location data.</p>
      </div>

      <div class="exif-photo-card">
        <div class="exif-photo-mock">
          <div class="photo-icon">🏚️</div>
          <div class="photo-caption">Photo sent by ADMIN_SG in SG Easy Money group</div>
        </div>
        <div class="photo-meta-bar">
          <span>admin_sg_pic.jpg</span>
          <span>4.2 MB · JPEG</span>
          <span>Posted 2026-03-01</span>
        </div>
        <div class="ig-caption">
          <span class="ig-user">@admin_sg_real</span> just checking in 😎 business good lah
        </div>
      </div>

      <button class="btn" id="extract-btn" onclick="extractExif()">🔍 EXTRACT METADATA</button>

      <div class="exif-table" id="exif-table">
        <table>
          <tr><th>Field</th><th>Value</th></tr>
          <tr><td>File Name</td><td>admin_sg_pic.jpg</td></tr>
          <tr><td>Device</td><td>Redmi Note 12</td></tr>
          <tr><td>Timestamp</td><td>2026-03-01 02:14:33</td></tr>
          <tr><td>Software</td><td>Xiaomi Camera v5.2</td></tr>
          <tr class="highlight"><td>GPS Latitude</td><td class="flag-gps">1.4927° N ⚠</td></tr>
          <tr class="highlight"><td>GPS Longitude</td><td class="flag-gps">103.7554° E ⚠</td></tr>
          <tr><td>GPS Altitude</td><td>18m above sea level</td></tr>
          <tr><td>Flash</td><td>Off (no flash)</td></tr>
        </table>
      </div>

      <div id="location-question" style="display:none;" class="card" style="margin-top:16px;">
        <h2>// Match the GPS Coordinates</h2>
        <p>Coordinates <code>1.4927° N, 103.7554° E</code> point to which location?</p>
      </div>

      <div class="location-grid" id="location-options" style="display:none;">
        <div class="location-card" onclick="tapLocation(1)">
          <span class="loc-icon">🏙️</span>
          <span>Orchard Road, Singapore (Central)</span>
        </div>
        <div class="location-card" id="loc2" onclick="tapLocation(2)">
          <span class="loc-icon">🏚️</span>
          <span>Jalan Ah Fook, Johor Bahru, Malaysia</span>
        </div>
        <div class="location-card" onclick="tapLocation(3)">
          <span class="loc-icon">⛴️</span>
          <span>Batam Ferry Terminal, Indonesia</span>
        </div>
      </div>

      <button class="btn disabled" id="ch3-lesson-btn" onclick="showCh3Lesson()">▶ SEE THE LESSON →</button>
    </div>

    <!-- Phase 3C: Lesson + Post-Credits -->
    <div id="ch3-lesson" class="phase">
      <div class="lesson-card" style="display:block;">
        <div class="lesson-title">// Lesson — Digital Footprints Are Real</div>
        <p><strong>Scam syndicate participation is a criminal offence under Singapore's Computer Misuse Act.</strong></p>
        <ul style="margin-top:10px;">
          <li>Every photo you take has GPS coordinates embedded in the EXIF data by default</li>
          <li>EXIF = Exchangeable Image File Format — metadata stored inside image files</li>
          <li>SPF's cybercrime unit uses EXIF, IP logs, and Telegram metadata to locate suspects</li>
          <li>Money mule involvement (receiving and forwarding scam money) = criminal charge</li>
          <li>Turn off "Location" in your camera app if you don't want GPS in your photos</li>
        </ul>
      </div>

      <!-- Post-credits tease -->
      <div class="tg-tease" id="tg-tease">
        <div class="tg-tease-header">
          <span class="tg-icon">✈️</span>
          <span class="tg-name">TELEGRAM — ENCRYPTED MESSAGE</span>
        </div>
        <p class="tg-msg">
          The scam syndicate isn't just running smishing campaigns.<br>
          A new encrypted message, origin unknown:<br><br>
          <em>"SkyTech data exfiltrated. svc_backup still active. No one suspects."</em><br><br>
          <span class="tg-sender">— signed: gh0st_r00t</span>
        </p>
      </div>

      <div class="flag-card" id="flag-card">
        <h2>// MISSION COMPLETE</h2>
        <p class="subtitle">You helped Officer Tham locate the syndicate. ADMIN_SG has been reported to SPF.</p>
        <div class="flag-value">FLAG{sc4m_c1ty_cyber_guard14n_sg}</div>
        <div class="flag-badge">CYBER GUARDIAN — SCAM CITY CLEARED</div>
        <div class="debrief-list">
          <h3>// What You Learned</h3>
          <ul>
            <li>Identify phishing domains — check for .gov.sg</li>
            <li>OTPs must never be shared — not with sellers, bots, or "support"</li>
            <li>Fake checkout pages have tells: wrong URL, typos, no HTTPS</li>
            <li>Photos leak GPS location via EXIF metadata</li>
            <li>Scam syndicate participation is illegal under the Computer Misuse Act</li>
          </ul>
        </div>
        <br>
        <a href="/game2-shadow-analyst" style="display:block;">
          <button class="btn" style="width:100%; border-color:var(--magenta); color:var(--magenta);">▶ PLAY GAME 2: SHADOW ANALYST →</button>
        </a>
      </div>
    </div>

  </div><!-- /ch3 -->

</div><!-- /game-wrap -->

<script>
// ── State ──
const gs = {
  ch1Done: false,
  ch1CorrectTapped: false,
  ch2Done: false,
  ch2TimerRunning: false,
  ch2TimerInterval: null,
  ch2TimeLeft: 15,
  ch2FlagsFound: 0,
  ch2WarningTapped: false,
  ch3Done: false,
  ch3VictimInterval: null,
  ch3ExifDone: false,
  ch3LocationDone: false,
};

// ── Chapter Progress ──
function goChapter(n) {
  document.querySelectorAll('.chapter').forEach(c => c.classList.remove('active'));
  document.getElementById('ch' + n).classList.add('active');
  document.getElementById('ch' + n).scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Update progress dots
  ['cp1','cp2','cp3'].forEach((id, i) => {
    const dot = document.getElementById(id);
    dot.classList.remove('active','done');
    if (i + 1 < n) dot.classList.add('done');
    else if (i + 1 === n) dot.classList.add('active');
  });

  if (n === 2) startCh2Timer();
}

// ── CHAPTER 1 ──
function tapMessage(n) {
  if (gs.ch1Done) return;
  gs.ch1Done = true;

  const card = document.getElementById('msg' + n);

  if (n === 1) {
    // Correct
    card.classList.add('correct');
    document.getElementById('msg1-feedback').style.display = 'block';
    gs.ch1CorrectTapped = true;
  } else {
    // Wrong — show explanation, then still allow advancing
    card.classList.add('wrong');
    document.getElementById('msg' + n + '-feedback').style.display = 'block';
    // Also highlight the correct one after 1.2s
    setTimeout(() => {
      document.getElementById('msg1').classList.add('correct');
      document.getElementById('msg1-feedback').style.display = 'block';
    }, 1200);
  }

  // Enable the next button after brief pause
  setTimeout(() => {
    const btn = document.getElementById('ch1-next-btn');
    btn.classList.remove('disabled');
  }, 800);
}

function showCh1Forensic() {
  document.getElementById('ch1-messages').classList.remove('active');
  document.getElementById('ch1-forensic').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showCh1Lesson() {
  document.getElementById('ch1-forensic').classList.remove('active');
  document.getElementById('ch1-lesson').classList.add('active');
}

// ── CHAPTER 2 ──
function startCh2Timer() {
  gs.ch2TimeLeft = 15;
  gs.ch2TimerRunning = true;
  updateTimerDisplay();

  gs.ch2TimerInterval = setInterval(() => {
    gs.ch2TimeLeft -= 0.1;
    updateTimerDisplay();
    if (gs.ch2TimeLeft <= 0) {
      clearInterval(gs.ch2TimerInterval);
      gs.ch2TimerRunning = false;
      timerExpired();
    }
  }, 100);
}

function updateTimerDisplay() {
  const pct = (gs.ch2TimeLeft / 15) * 100;
  const fill = document.getElementById('timer-fill');
  const disp = document.getElementById('timer-display');
  fill.style.width = pct + '%';
  disp.textContent = Math.ceil(gs.ch2TimeLeft) + 's';
  if (pct < 30) fill.classList.add('urgent');
  else fill.classList.remove('urgent');
}

function timerExpired() {
  if (gs.ch2WarningTapped) return;
  document.getElementById('ch2-expired-msg').style.display = 'block';
  document.getElementById('ch2-forensic-btn').classList.remove('disabled');
}

function tapWarning(n) {
  if (gs.ch2WarningTapped) return;
  gs.ch2WarningTapped = true;

  clearInterval(gs.ch2TimerInterval);
  gs.ch2TimerRunning = false;

  const card = document.getElementById('wc' + n);
  const fill = document.getElementById('timer-fill');

  if (n === 1) {
    card.classList.add('correct');
    document.getElementById('wc1-feedback').style.display = 'block';
    fill.style.background = 'var(--green)';
  } else {
    card.classList.add('wrong');
    document.getElementById('wc' + n + '-feedback').style.display = 'block';
    fill.style.background = 'var(--red)';
    // Show correct after delay
    setTimeout(() => {
      document.getElementById('wc1').classList.add('correct');
      document.getElementById('wc1-feedback').style.display = 'block';
    }, 1000);
  }

  setTimeout(() => {
    document.getElementById('ch2-forensic-btn').classList.remove('disabled');
  }, 700);
}

function showCh2Forensic() {
  document.getElementById('ch2-timer-phase').classList.remove('active');
  document.getElementById('ch2-forensic').classList.add('active');
}

function findFlag(n) {
  const hs = document.getElementById('hs' + n);
  if (hs.classList.contains('found')) return;
  hs.classList.add('found');
  gs.ch2FlagsFound++;

  const counter = document.getElementById('flag-count');
  counter.textContent = gs.ch2FlagsFound;

  const flagCounter = document.getElementById('flag-counter');
  if (gs.ch2FlagsFound >= 3) {
    flagCounter.classList.add('complete');
    flagCounter.innerHTML = 'Red flags found: <strong>3 / 3</strong> — All identified! ✓';
    setTimeout(() => {
      document.getElementById('ch2-lesson-btn').classList.remove('disabled');
    }, 500);
  }
}

function showCh2Lesson() {
  document.getElementById('ch2-forensic').classList.remove('active');
  document.getElementById('ch2-lesson').classList.add('active');
}

// ── CHAPTER 3 ──
let victimCount = 0;
function sendScamMsg() {
  if (gs.ch3VictimInterval) return;
  document.getElementById('send-btn').disabled = true;
  document.getElementById('send-btn').textContent = '📤 MESSAGE SENT...';
  document.getElementById('victim-screen').style.display = 'block';

  gs.ch3VictimInterval = setInterval(() => {
    victimCount += Math.floor(Math.random() * 4) + 1;
    document.getElementById('victim-count').textContent = victimCount;
  }, 200);

  setTimeout(() => {
    clearInterval(gs.ch3VictimInterval);
    document.getElementById('victim-card').style.display = 'block';
  }, 2500);

  setTimeout(() => {
    document.getElementById('officer-reveal').style.display = 'block';
    document.getElementById('officer-reveal').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 4000);

  setTimeout(() => {
    document.getElementById('ch3-exif-btn').classList.remove('disabled');
  }, 4500);
}

function showCh3Exif() {
  document.getElementById('ch3-undercover').classList.remove('active');
  document.getElementById('ch3-exif').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function extractExif() {
  if (gs.ch3ExifDone) return;
  gs.ch3ExifDone = true;
  document.getElementById('extract-btn').textContent = '✓ METADATA EXTRACTED';
  document.getElementById('extract-btn').disabled = true;
  document.getElementById('exif-table').style.display = 'block';
  setTimeout(() => {
    document.getElementById('location-question').style.display = 'block';
    document.getElementById('location-options').style.display = 'flex';
    document.getElementById('location-options').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 800);
}

function tapLocation(n) {
  if (gs.ch3LocationDone) return;
  gs.ch3LocationDone = true;

  const cards = document.querySelectorAll('.location-card');
  if (n === 2) {
    cards[1].classList.add('correct');
    setTimeout(() => {
      document.getElementById('ch3-lesson-btn').classList.remove('disabled');
    }, 600);
  } else {
    cards[n - 1].classList.add('wrong');
    setTimeout(() => {
      cards[1].classList.add('correct');
      document.getElementById('ch3-lesson-btn').classList.remove('disabled');
    }, 900);
  }
}

function showCh3Lesson() {
  document.getElementById('ch3-exif').classList.remove('active');
  document.getElementById('ch3-lesson').classList.add('active');

  // Show post-credits tease
  setTimeout(() => {
    document.getElementById('tg-tease').style.display = 'block';
  }, 800);

  // Show flag
  setTimeout(() => {
    const fc = document.getElementById('flag-card');
    fc.style.display = 'block';
    fc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    launchConfetti();
  }, 2200);
}

// ── Confetti ──
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = 'block';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#00f5ff','#ff006e','#ffbe0b','#39ff14','#ffffff'];
  const pieces = Array.from({ length: 70 }, () => ({
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
