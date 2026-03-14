---
layout: default
title: Game 02 — Shadow Analyst
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
.game-header { text-align: center; margin-bottom: 28px; }
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
.game-header .subtitle { color: var(--muted); font-size: 0.85em; margin-bottom: 20px; }

/* ─── Case Progress ─── */
.case-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-bottom: 8px;
}
.cp-dot {
  height: 32px;
  padding: 0 14px;
  border-radius: 4px;
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--muted);
  font-family: 'Courier New', monospace;
  font-size: 0.65em;
  letter-spacing: 1px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
  white-space: nowrap;
}
.cp-dot.active { background: rgba(0,245,255,0.1); border-color: var(--cyan); color: var(--cyan); box-shadow: 0 0 10px rgba(0,245,255,0.2); }
.cp-dot.done   { background: rgba(0,245,255,0.05); border-color: rgba(0,245,255,0.4); color: var(--cyan); }
.cp-line { width: 20px; height: 1px; background: rgba(255,255,255,0.12); }

/* ─── Case/Phase ─── */
.case-block { display: none; }
.case-block.active { display: block; animation: fade-in 0.4s ease; }
.phase { display: none; }
.phase.active { display: block; animation: fade-in 0.35s ease; }
@keyframes fade-in {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Story / Brief Cards ─── */
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
.story-card p { color: var(--text); font-size: 0.9em; line-height: 1.8; }
.story-card p + p { margin-top: 8px; }
.story-card strong { color: var(--cyan); }

.priya-card {
  background: var(--bg2);
  border: 1px solid rgba(255,190,11,0.2);
  border-left: 3px solid var(--yellow);
  border-radius: 8px;
  padding: 18px 22px;
  margin-bottom: 16px;
}
.priya-label {
  font-family: 'Courier New', monospace;
  font-size: 0.68em;
  letter-spacing: 2px;
  color: var(--yellow);
  margin-bottom: 8px;
}
.priya-card p { font-size: 0.9em; line-height: 1.7; font-style: italic; }

/* ─── Generic Card ─── */
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
.card p, .card li { color: var(--text); font-size: 0.88em; line-height: 1.7; }
.card ul { padding-left: 18px; margin-top: 8px; }
.card li { margin-bottom: 5px; }
.card.yellow { border-left-color: var(--yellow); }
.card.yellow h2 { color: var(--yellow); }
.card.red { border-left-color: var(--red); }
.card.red h2 { color: var(--red); }
.card.green { border-left-color: var(--green); }
.card.magenta { border-left-color: var(--magenta); }
.card.magenta h2 { color: var(--magenta); }

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
.instruct::before { content: '▶'; color: var(--cyan); font-size: 0.8em; }

/* ─── Log Filter Tool ─── */
.filter-toolbar {
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.15);
  border-radius: 8px 8px 0 0;
  padding: 14px 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
}
.filter-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 130px;
}
.filter-group label {
  font-family: 'Courier New', monospace;
  font-size: 0.68em;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
}
.filter-group select {
  background: var(--bg2);
  border: 1px solid rgba(0,245,255,0.2);
  color: var(--text);
  padding: 10px 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.82em;
  border-radius: 4px;
  min-height: 48px;
  cursor: pointer;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
}
.filter-group select:focus {
  border-color: var(--cyan);
  box-shadow: 0 0 0 2px rgba(0,245,255,0.08);
}

/* ─── Log Table ─── */
.log-table-wrap {
  overflow-x: auto;
  border: 1px solid rgba(0,245,255,0.15);
  border-top: none;
  border-radius: 0 0 8px 8px;
  margin-bottom: 16px;
  -webkit-overflow-scrolling: touch;
}
.log-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 480px;
}
.log-table th {
  background: rgba(0,245,255,0.06);
  padding: 10px 14px;
  text-align: left;
  font-family: 'Courier New', monospace;
  font-size: 0.68em;
  letter-spacing: 2px;
  color: var(--cyan);
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0,245,255,0.1);
  white-space: nowrap;
}
.log-table td {
  padding: 11px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  white-space: nowrap;
}
.log-table tr:last-child td { border-bottom: none; }
.log-table .status-ok   { color: var(--muted); }
.log-table .status-susp { color: var(--yellow); }
.log-table .status-crit { color: var(--cyan); font-weight: 700; }
.log-row-clickable {
  cursor: pointer;
  transition: background 0.15s;
}
.log-row-clickable:active { background: rgba(0,245,255,0.04); }
@media (hover: hover) {
  .log-row-clickable:hover { background: rgba(0,245,255,0.04); }
}
.log-row-clickable.selected { background: rgba(0,245,255,0.08); outline: 1px solid rgba(0,245,255,0.3); }
.log-row-highlight { background: rgba(255,190,11,0.05); }

/* ─── HIBP-style Breach Report ─── */
.breach-card {
  background: var(--bg3);
  border: 1px solid rgba(255,51,51,0.3);
  border-left: 3px solid var(--red);
  border-radius: 8px;
  padding: 18px 20px;
  margin-bottom: 16px;
}
.breach-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.breach-badge {
  background: rgba(255,51,51,0.15);
  color: var(--red);
  padding: 4px 10px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
  letter-spacing: 1px;
  font-weight: 700;
}
.breach-site { font-weight: 700; font-size: 0.95em; }
.breach-details { display: flex; flex-direction: column; gap: 6px; }
.breach-row {
  display: flex;
  gap: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  flex-wrap: wrap;
}
.breach-key { color: var(--muted); min-width: 100px; }
.breach-val { color: var(--text); }
.breach-val.danger { color: var(--red); }

/* ─── Hash Cracker ─── */
.hash-cracker {
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.2);
  border-radius: 8px;
  padding: 18px 20px;
  margin-bottom: 16px;
}
.hc-label {
  font-family: 'Courier New', monospace;
  font-size: 0.68em;
  letter-spacing: 2px;
  color: var(--cyan);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.hc-hash {
  background: var(--bg);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  padding: 10px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  color: var(--yellow);
  word-break: break-all;
  margin-bottom: 12px;
}
.hc-meta {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  color: var(--muted);
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.hc-meta span { background: var(--bg2); padding: 3px 8px; border-radius: 3px; }
.hc-progress {
  height: 6px;
  background: var(--bg2);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 10px;
}
.hc-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--cyan), var(--magenta));
  border-radius: 3px;
  transition: width 0.05s linear;
}
.hc-result {
  display: none;
  animation: fade-in 0.4s ease;
}
.hc-cracked-label {
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
  color: var(--muted);
  letter-spacing: 1px;
  margin-bottom: 4px;
}
.hc-cracked-val {
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  color: var(--green);
  font-weight: 700;
  margin-bottom: 8px;
}
.hc-stats {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.hc-stats span { color: var(--cyan); }

/* ─── Evidence Locker ─── */
.evidence-locker {
  background: var(--bg2);
  border: 1px solid rgba(0,245,255,0.15);
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  cursor: pointer;
  background: rgba(0,245,255,0.04);
  border-bottom: 1px solid rgba(0,245,255,0.1);
  min-height: 48px;
  -webkit-tap-highlight-color: transparent;
}
.el-title {
  font-family: 'Courier New', monospace;
  font-size: 0.75em;
  letter-spacing: 2px;
  color: var(--cyan);
  text-transform: uppercase;
}
.el-count {
  background: var(--bg3);
  color: var(--cyan);
  border: 1px solid rgba(0,245,255,0.3);
  border-radius: 12px;
  padding: 2px 10px;
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
}
.el-body { padding: 12px 16px; display: none; }
.el-body.open { display: block; }
.evidence-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 0.82em;
  font-family: 'Courier New', monospace;
  animation: fade-in 0.3s ease;
}
.ei-tag {
  font-size: 0.65em;
  letter-spacing: 1px;
  padding: 2px 7px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-top: 1px;
}
.ei-tag.log      { background: rgba(0,245,255,0.1); color: var(--cyan); }
.ei-tag.hash     { background: rgba(255,190,11,0.1); color: var(--yellow); }
.ei-tag.metadata { background: rgba(255,0,110,0.1); color: var(--magenta); }
.ei-tag.photo    { background: rgba(57,255,20,0.1); color: var(--green); }
.ei-text { color: var(--text); line-height: 1.6; font-size: 0.95em; }

/* ─── Case Report Builder ─── */
.report-form { margin-bottom: 20px; }
.report-field {
  margin-bottom: 16px;
}
.rf-label {
  display: block;
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
  color: var(--muted);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.rf-hint {
  font-size: 0.72em;
  color: rgba(107,114,128,0.8);
  margin-bottom: 6px;
  font-family: 'Courier New', monospace;
}
.rf-input {
  width: 100%;
  background: var(--bg3);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--text);
  padding: 12px 14px;
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  border-radius: 4px;
  resize: vertical;
  min-height: 72px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  line-height: 1.6;
}
.rf-input:focus {
  border-color: rgba(0,245,255,0.4);
  box-shadow: 0 0 0 2px rgba(0,245,255,0.08);
}
.rf-input::placeholder { color: var(--muted); font-size: 0.9em; }
.rf-input.ok   { border-color: rgba(57,255,20,0.4); }
.rf-input.fail { border-color: rgba(255,51,51,0.4); }
.rf-feedback {
  font-size: 0.78em;
  font-family: 'Courier New', monospace;
  margin-top: 5px;
  display: none;
}
.rf-feedback.ok   { color: var(--green); }
.rf-feedback.fail { color: var(--red); }

/* ─── EXIF Photo / Table ─── */
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
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 6px;
}
.photo-icon { font-size: 2.5em; }
.photo-caption { font-size: 0.78em; color: var(--muted); font-style: italic; }
.photo-meta-bar {
  background: rgba(0,0,0,0.4);
  padding: 8px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.7em;
  color: var(--muted);
  display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px;
}
.ig-caption {
  padding: 12px 16px;
  font-size: 0.88em;
  line-height: 1.6;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.ig-user { color: var(--cyan); font-weight: 700; }

.exif-table-wrap {
  display: none;
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.2);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
  animation: fade-in 0.4s ease;
}
.exif-table { width: 100%; border-collapse: collapse; }
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
.exif-table td:first-child { color: var(--muted); width: 45%; }
.exif-table td:last-child  { color: var(--cyan); }
.exif-table .flag-row td   { background: rgba(255,51,51,0.05); }
.exif-table .flag-val      { color: var(--red) !important; }
.exif-table .warn-val      { color: var(--yellow) !important; }

/* ─── Reveal Card ─── */
.reveal-card {
  display: none;
  background: linear-gradient(135deg, rgba(255,51,51,0.08), rgba(255,0,110,0.05));
  border: 2px solid var(--red);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  animation: fade-in 0.5s ease;
}
.reveal-title {
  font-family: 'Clash Display', sans-serif;
  font-size: 1.1em;
  letter-spacing: 2px;
  color: var(--red);
  text-shadow: 0 0 20px rgba(255,51,51,0.4);
  margin-bottom: 12px;
  text-align: center;
}
.reveal-card p { font-size: 0.9em; line-height: 1.7; }
.reveal-card strong { color: var(--cyan); }
.connection-line {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 16px 0;
  flex-wrap: wrap;
}
.conn-node {
  background: var(--bg3);
  border: 1px solid rgba(0,245,255,0.3);
  border-radius: 6px;
  padding: 8px 14px;
  font-family: 'Courier New', monospace;
  font-size: 0.78em;
  color: var(--cyan);
  text-align: center;
}
.conn-arrow { color: var(--red); font-size: 1.2em; }

/* ─── Lesson Card ─── */
.lesson-card {
  background: linear-gradient(135deg, rgba(255,0,110,0.07), rgba(0,245,255,0.04));
  border: 1px solid rgba(255,0,110,0.3);
  border-left: 3px solid var(--magenta);
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.lesson-title {
  font-family: 'Courier New', monospace;
  font-size: 0.72em;
  letter-spacing: 2px;
  color: var(--magenta);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.lesson-card p { font-size: 0.9em; line-height: 1.7; }
.lesson-card ul { padding-left: 18px; margin-top: 8px; }
.lesson-card li { font-size: 0.88em; line-height: 1.7; margin-bottom: 4px; }

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
  margin-top: 16px;
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
  font-size: clamp(0.74em, 3vw, 0.9em);
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
.debrief-list li { font-size: 0.85em; line-height: 1.7; color: var(--text); margin-bottom: 4px; padding-left: 4px; }
.debrief-list li::before { content: '✓ '; color: var(--green); }

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
  .btn:hover { background: rgba(0,245,255,0.1); box-shadow: 0 0 16px rgba(0,245,255,0.25); transform: translateY(-2px); }
}
.btn:active { transform: scale(0.98); }
.btn.disabled { opacity: 0.4; pointer-events: none; }
.btn.yellow { border-color: var(--yellow); color: var(--yellow); }
.btn.apply  { width: auto; padding: 10px 20px; margin-top: 0; display: inline-block; }

/* Canvas confetti */
#confetti-canvas {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 9999; display: none;
}
</style>

<canvas id="confetti-canvas"></canvas>
<div class="safety-ribbon">// TRAINING EXERCISE — EDUCATIONAL PURPOSES ONLY //</div>

<div class="game-wrap">

  <!-- ═══ GAME HEADER ═══ -->
  <div class="game-header">
    <div class="game-tag">GAME 02 — SHADOW ANALYST</div>
    <h1>SHADOW ANALYST</h1>
    <p class="subtitle">Year 2026 · One-North, Singapore · CyberShield SG Work Attachment</p>
    <div class="case-progress">
      <div class="cp-dot active" id="cp1">CASE 01 — THE LEAK</div>
      <div class="cp-line"></div>
      <div class="cp-dot" id="cp2">CASE 02 — THE INSIDER</div>
    </div>
  </div>

  <!-- Story Intro -->
  <div class="story-card" id="intro-card">
    <div class="story-meta">Briefing — CyberShield SG</div>
    <p>You're <strong>Shan</strong>, a Sec 4 student on work attachment at CyberShield SG. Your supervisor <strong>Priya</strong> just dropped two open cases on your desk before rushing to a meeting.</p>
    <p><strong>"I need your findings before end of day. Two cases. Both urgent. Don't mess this up, Shan."</strong></p>
  </div>

  <!-- ══════════════════════════════════════════
       EVIDENCE LOCKER (persistent)
  ══════════════════════════════════════════ -->
  <div class="evidence-locker" id="evidence-locker">
    <div class="el-header" onclick="toggleLocker()">
      <span class="el-title">// Evidence Locker</span>
      <span class="el-count" id="el-count">0 items</span>
    </div>
    <div class="el-body" id="el-body"></div>
  </div>


  <!-- ══════════════════════════════════════════
       CASE 01 — THE LEAK
  ══════════════════════════════════════════ -->
  <div id="case1" class="case-block active">

    <div class="priya-card">
      <div class="priya-label">// Priya — Senior Analyst</div>
      <p>"Case 01. A school's Sec 3 student database was posted on Telegram at 3am. We don't know who did it. Start with the server logs. Find the entry point."</p>
    </div>

    <!-- Step 1: Log Filter -->
    <div id="c1-step1" class="phase active">
      <div class="card">
        <h2>// Server Access Log — NationSchool Student Portal</h2>
        <p>Filter the log to find suspicious activity. Use the Time filter to narrow down the 3am window.</p>
      </div>

      <div class="filter-toolbar">
        <div class="filter-group">
          <label>Time Range</label>
          <select id="f-time" onchange="filterLogs()">
            <option value="all">All times</option>
            <option value="late">12am – 4am (off-hours)</option>
            <option value="morning">4am – 9am</option>
            <option value="day">9am – 6pm</option>
          </select>
        </div>
        <div class="filter-group">
          <label>IP Type</label>
          <select id="f-ip" onchange="filterLogs()">
            <option value="all">All IPs</option>
            <option value="vpn">VPN / External</option>
            <option value="local">Local Network</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Status</label>
          <select id="f-status" onchange="filterLogs()">
            <option value="all">All</option>
            <option value="success">Login Success</option>
            <option value="fail">Login Failed</option>
          </select>
        </div>
      </div>
      <div class="log-table-wrap">
        <table class="log-table" id="log-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Username</th>
              <th>IP Address</th>
              <th>Status</th>
              <th>Attempts</th>
            </tr>
          </thead>
          <tbody id="log-tbody"></tbody>
        </table>
      </div>

      <div id="log-selected-panel" style="display:none;" class="card green">
        <h2>// Suspicious Entry Found</h2>
        <p id="log-selected-text"></p>
        <p style="margin-top:8px;color:var(--cyan);">Added to Evidence Locker. Now let's check if this account was already compromised.</p>
      </div>

      <button class="btn disabled" id="c1-s1-next" onclick="showC1Step2()">▶ CROSS-REFERENCE BREACH DATABASE →</button>
    </div>

    <!-- Step 2: Breach Report + Hash Cracker -->
    <div id="c1-step2" class="phase">
      <div class="card">
        <h2>// Data Breach Cross-Reference</h2>
        <p>Checking <code>mrsoh@school.edu.sg</code> against known breach databases...</p>
      </div>

      <!-- HIBP-style breach card -->
      <div class="breach-card">
        <div class="breach-header">
          <div class="breach-badge">⚠ PWNED</div>
          <div class="breach-site">mrsoh@school.edu.sg</div>
        </div>
        <div class="breach-details">
          <div class="breach-row"><span class="breach-key">Breach:</span><span class="breach-val">JobsPortal SG (2022)</span></div>
          <div class="breach-row"><span class="breach-key">Data exposed:</span><span class="breach-val">Email, Password hash, Phone</span></div>
          <div class="breach-row"><span class="breach-key">Algorithm:</span><span class="breach-val danger">SHA-1 (unsalted) — WEAK</span></div>
          <div class="breach-row"><span class="breach-key">Policy:</span><span class="breach-val danger">Password never rotated since 2019</span></div>
        </div>
      </div>

      <!-- Hash Cracker -->
      <div class="hash-cracker">
        <div class="hc-label">// In-Game Hash Cracker</div>
        <div class="hc-hash" id="hc-hash">aef7bde608ce5404e97d5f042f95f89f1c232811</div>
        <div class="hc-meta">
          <span>Algorithm: SHA-1</span>
          <span>Salted: No</span>
          <span>Source: 2022 breach dump</span>
        </div>
        <div class="hc-progress"><div class="hc-fill" id="hc-fill"></div></div>
        <div id="hc-status" style="font-family:'Courier New',monospace; font-size:0.75em; color:var(--muted); margin-bottom:10px; min-height:18px;"></div>
        <div class="hc-result" id="hc-result">
          <div class="hc-cracked-label">CRACKED IN 0.003 SECONDS</div>
          <div class="hc-cracked-val">Sunshine@2019</div>
          <div class="hc-stats">
            Attempts: <span>847,293</span> &nbsp;|&nbsp;
            Rate: <span>2.8 billion/sec</span> &nbsp;|&nbsp;
            Wordlist: <span>rockyou.txt</span>
          </div>
          <div style="margin-top:10px; font-size:0.8em; color:var(--red); font-family:'Courier New',monospace;">
            ⚠ SHA-1 is a fast hashing algorithm — NOT designed for passwords. Bcrypt/Argon2 would take decades.
          </div>
        </div>
        <button class="btn" id="crack-btn" onclick="runHashCrack()" style="width:auto; display:inline-block; padding:12px 24px; margin-top:8px;">⚡ CRACK HASH</button>
      </div>

      <div id="c1-s2-info" style="display:none;" class="card yellow">
        <h2>// Analysis Complete</h2>
        <p>Mrs Oh reused her 2019 password across multiple platforms. When JobsPortal SG was breached, attackers got the hash — and SHA-1 cracked instantly.</p>
        <p style="margin-top:8px;">The login at 2:47am used this exact password on the school server. One try. Immediate success. Classic <strong>credential stuffing</strong>.</p>
      </div>

      <button class="btn disabled" id="c1-s2-next" onclick="showC1Report()">▶ FILL IN CASE REPORT →</button>
    </div>

    <!-- Step 3: Case Report -->
    <div id="c1-report" class="phase">
      <div class="card">
        <h2>// Case 01 Report — Submit Findings to Priya</h2>
        <p>Complete the case report. Your answers don't have to be exact — key words are enough.</p>
      </div>

      <div class="report-form">
        <div class="report-field">
          <label class="rf-label">Entry Vector</label>
          <div class="rf-hint">How did the attacker get in? (hint: think about what type of attack uses stolen credentials)</div>
          <textarea class="rf-input" id="rf1" placeholder="e.g. credential stuffing, stolen password..."></textarea>
          <div class="rf-feedback" id="rf1-fb"></div>
        </div>
        <div class="report-field">
          <label class="rf-label">Core Vulnerability</label>
          <div class="rf-hint">What made this possible? (think: password policy and hashing)</div>
          <textarea class="rf-input" id="rf2" placeholder="e.g. password reuse, weak hashing, no expiry..."></textarea>
          <div class="rf-feedback" id="rf2-fb"></div>
        </div>
        <div class="report-field">
          <label class="rf-label">PDPA Action Required</label>
          <div class="rf-hint">Under Singapore's Personal Data Protection Act, what must the school do?</div>
          <textarea class="rf-input" id="rf3" placeholder="e.g. notify PDPC, inform affected students..."></textarea>
          <div class="rf-feedback" id="rf3-fb"></div>
        </div>
      </div>

      <button class="btn" onclick="submitC1Report()">▶ SUBMIT REPORT TO PRIYA</button>

      <div class="flag-card" id="flag-card-1">
        <h2>// CASE 01 CLOSED</h2>
        <p class="subtitle">Priya: "Entry point confirmed. Good work, Shan. We've flagged this to PDPC. Next case — it's worse."</p>
        <div class="flag-value">FLAG{cr3d_stuff1ng_pdpa_br34ch}</div>
        <div class="flag-badge">ANALYST LEVEL 1 — CASE CLOSED</div>
        <div class="debrief-list">
          <h3>// Priya's Debrief</h3>
          <ul>
            <li>Credential stuffing uses leaked passwords from one breach to attack other sites</li>
            <li>A password is only as strong as every site you've used it on</li>
            <li>SHA-1 is a fast hash — attackers try billions per second</li>
            <li>Under PDPA, organisations must notify PDPC of data breaches within 3 days</li>
            <li>Password policies must include expiry, complexity, and breach monitoring</li>
          </ul>
        </div>
        <button class="btn" onclick="goCase(2)" style="margin-top:16px;">▶ CASE 02: THE INSIDER →</button>
      </div>
    </div>

  </div><!-- /case1 -->


  <!-- ══════════════════════════════════════════
       CASE 02 — THE INSIDER
  ══════════════════════════════════════════ -->
  <div id="case2" class="case-block">

    <div class="priya-card">
      <div class="priya-label">// Priya — Senior Analyst</div>
      <p>"Case 02. SkyTech SME fired their IT admin Ivan 2 weeks ago. Since then — data exfiltrated, a server deleted, CEO email accessed. Ivan says he was home all night. Prove it."</p>
    </div>

    <!-- Step 1: Cloud Access Log -->
    <div id="c2-step1" class="phase active">
      <div class="card">
        <h2>// SkyTech Cloud Access Log — Post-Termination Review</h2>
        <p>Ivan's real account was deactivated. But look carefully — there may be accounts he left behind.</p>
        <p style="margin-top:8px; color:var(--muted); font-size:0.84em;">Tap a suspicious row to investigate it.</p>
      </div>

      <div class="filter-toolbar">
        <div class="filter-group">
          <label>Account Status</label>
          <select id="f2-status" onchange="filterC2Logs()">
            <option value="all">All accounts</option>
            <option value="active">Active only</option>
            <option value="deactivated">Deactivated</option>
            <option value="service">Service accounts</option>
          </select>
        </div>
        <div class="filter-group">
          <label>Time Period</label>
          <select id="f2-time" onchange="filterC2Logs()">
            <option value="all">All time</option>
            <option value="post">Post-termination only</option>
            <option value="pre">Pre-termination</option>
          </select>
        </div>
      </div>
      <div class="log-table-wrap">
        <table class="log-table" id="c2-log-table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Type</th>
              <th>Status</th>
              <th>Logins (post-term)</th>
              <th>Last IP</th>
            </tr>
          </thead>
          <tbody id="c2-log-tbody"></tbody>
        </table>
      </div>

      <div id="c2-account-panel" style="display:none;" class="card red">
        <h2>// Backdoor Account Identified</h2>
        <div style="font-family:'Courier New',monospace; font-size:0.82em; line-height:2; margin-top:4px;">
          <div>Account: <span style="color:var(--cyan);">svc_backup</span></div>
          <div>Created by: <span style="color:var(--yellow);">ivan.tan</span> (8 months ago)</div>
          <div>Privileges: <span style="color:var(--red);">ADMIN</span></div>
          <div>Password changed: <span style="color:var(--red);">Day before termination</span></div>
          <div>Post-termination logins: <span style="color:var(--red);">4 times</span></div>
          <div>Last login IP: <span style="color:var(--cyan);">185.220.101.47</span></div>
        </div>
      </div>

      <button class="btn disabled" id="c2-s1-next" onclick="showC2Step2()">▶ EXAMINE IVAN'S PHOTO →</button>
    </div>

    <!-- Step 2: EXIF Forensics -->
    <div id="c2-step2" class="phase">
      <div class="card">
        <h2>// Ivan's Instagram Photo — Night of the Breach</h2>
        <p>Ivan posted this the night everything went wrong. Caption: <em>"home all night, not my problem 😂"</em></p>
        <p style="margin-top:8px; color:var(--muted); font-size:0.85em;">Extract the metadata. See if his alibi holds up.</p>
      </div>

      <div class="exif-photo-card">
        <div class="exif-photo-mock">
          <div class="photo-icon">🌃</div>
          <div class="photo-caption">ivan.tan_alibi.jpg — Posted on Instagram</div>
        </div>
        <div class="photo-meta-bar">
          <span>ivan_alibi.jpg</span>
          <span>6.1 MB · HEIC→JPEG</span>
          <span>Posted: 2026-02-27 23:22</span>
        </div>
        <div class="ig-caption">
          <span class="ig-user">ivan.tan</span> home all night, not my problem 😂 #fridaynight #chilling
        </div>
      </div>

      <button class="btn" id="c2-extract-btn" onclick="extractC2Exif()">🔍 EXTRACT METADATA</button>

      <div class="exif-table-wrap" id="c2-exif-table">
        <table class="exif-table">
          <tr><th>Field</th><th>Value</th></tr>
          <tr><td>File Name</td><td>ivan_alibi.jpg</td></tr>
          <tr><td>Device</td><td>iPhone 14 (matches HR records)</td></tr>
          <tr><td>Timestamp (taken)</td><td class="warn-val">2026-02-27 21:14 ⚠</td></tr>
          <tr><td>Timestamp (posted)</td><td>2026-02-27 23:22</td></tr>
          <tr><td>Time gap</td><td class="flag-val">2 hrs 8 mins — pre-staged alibi ⚠</td></tr>
          <tr class="flag-row"><td>GPS Latitude</td><td class="flag-val">1.3048° N ⚠</td></tr>
          <tr class="flag-row"><td>GPS Longitude</td><td class="flag-val">103.8318° E ⚠</td></tr>
          <tr><td>GPS Location match</td><td class="flag-val">Coffeeshop 3km from Ivan's home ⚠</td></tr>
          <tr><td>Software</td><td>iOS 17.3.1</td></tr>
        </table>
      </div>

      <div id="c2-ip-panel" style="display:none;" class="card red">
        <h2>// IP Address Cross-Reference</h2>
        <p>The <code>svc_backup</code> login IP: <strong style="color:var(--cyan);">185.220.101.47</strong></p>
        <p style="margin-top:8px;">This IP appeared in Case 01's breach. It is a known C2 server used by the same threat actor.</p>
        <div class="connection-line" style="margin-top:16px;">
          <div class="conn-node">Case 01<br>C2 Server<br>185.220.101.47</div>
          <div class="conn-arrow">=</div>
          <div class="conn-node">Case 02<br>svc_backup<br>185.220.101.47</div>
        </div>
        <p style="margin-top:12px; color:var(--yellow);">Same actor. Two companies. One operator.</p>
      </div>

      <!-- Reveal -->
      <div class="reveal-card" id="reveal-card">
        <div class="reveal-title">// IDENTITY CONFIRMED: ivan.tan = gh0st_r00t</div>
        <p>Ivan didn't just steal from SkyTech. He's been selling backdoor access across multiple companies. The same IP, the same C2, the same MO.</p>
        <p style="margin-top:10px;"><strong>gh0st_r00t</strong> is behind both cases. The scam syndicate from Case 01's breach and the SkyTech insider threat — <strong>same operator, different victims</strong>.</p>
        <div class="connection-line" style="margin-top:16px;">
          <div class="conn-node">ivan.tan<br>SkyTech IT Admin</div>
          <div class="conn-arrow">≡</div>
          <div class="conn-node">gh0st_r00t<br>Threat Actor</div>
          <div class="conn-arrow">≡</div>
          <div class="conn-node">ADMIN_SG<br>Scam City</div>
        </div>
      </div>

      <button class="btn disabled" id="c2-s2-next" onclick="showC2Report()">▶ FILL IN CASE REPORT →</button>
    </div>

    <!-- Step 3: Case 02 Report -->
    <div id="c2-report" class="phase">
      <div class="card">
        <h2>// Case 02 Report — Final Findings</h2>
        <p>Pull it all together. This is what real analysts write before handing off to law enforcement.</p>
      </div>

      <div class="report-form">
        <div class="report-field">
          <label class="rf-label">Entry Vector</label>
          <div class="rf-hint">How did the attacker maintain access after termination?</div>
          <textarea class="rf-input" id="rf4" placeholder="e.g. backdoor account, service account, hidden credentials..."></textarea>
          <div class="rf-feedback" id="rf4-fb"></div>
        </div>
        <div class="report-field">
          <label class="rf-label">Insider Method</label>
          <div class="rf-hint">What did Ivan do before he was fired? What forensic evidence exposes his alibi?</div>
          <textarea class="rf-input" id="rf5" placeholder="e.g. created backdoor, staged alibi, EXIF metadata..."></textarea>
          <div class="rf-feedback" id="rf5-fb"></div>
        </div>
        <div class="report-field">
          <label class="rf-label">Mitigation Recommendation</label>
          <div class="rf-hint">What should SkyTech do to prevent this in future?</div>
          <textarea class="rf-input" id="rf6" placeholder="e.g. offboarding checklist, audit service accounts, MFA..."></textarea>
          <div class="rf-feedback" id="rf6-fb"></div>
        </div>
      </div>

      <button class="btn" onclick="submitC2Report()">▶ SUBMIT FINAL REPORT</button>

      <div class="flag-card" id="flag-card-2">
        <h2>// CASE 02 CLOSED — BOTH CASES SOLVED</h2>
        <p class="subtitle">Priya: "You connected two cases that looked unrelated. That's real analyst work — and it took a Sec 4 student on attachment to crack it."</p>
        <div class="flag-value">FLAG{1ns1d3r_gh0st_r00t_expos3d}</div>
        <div class="flag-badge">SHADOW ANALYST — SENIOR GRADE</div>
        <div class="debrief-list">
          <h3>// Priya's Final Debrief</h3>
          <ul>
            <li>Insider threats are hardest to detect — the attacker already has access</li>
            <li>Offboarding must include auditing ALL accounts linked to the employee</li>
            <li>EXIF metadata is court-admissible evidence — it exposed Ivan's alibi</li>
            <li>Same C2 IP across two cases = same threat actor → combined investigation</li>
            <li>Disable "store GPS in photos" on phones used for sensitive work</li>
            <li>Apply principle of least privilege — no admin rights for service accounts without review</li>
          </ul>
        </div>
        <br>
        <a href="/game1-scam-city" style="display:block;">
          <button class="btn" style="width:100%; margin-bottom:10px; border-color:var(--muted); color:var(--muted);">← REPLAY GAME 1: SCAM CITY</button>
        </a>
      </div>
    </div>

  </div><!-- /case2 -->

</div><!-- /game-wrap -->

<script>
// ══════════════════════════════════
//  EVIDENCE LOCKER
// ══════════════════════════════════
const evidenceItems = [];
let lockerOpen = false;

function addEvidence(tag, text) {
  evidenceItems.push({ tag, text });
  const count = evidenceItems.length;
  document.getElementById('el-count').textContent = count + (count === 1 ? ' item' : ' items');

  const body = document.getElementById('el-body');
  const tagLabels = { log: 'LOG', hash: 'HASH', metadata: 'METADATA', photo: 'PHOTO' };
  const item = document.createElement('div');
  item.className = 'evidence-item';
  item.innerHTML = `<span class="ei-tag ${tag}">${tagLabels[tag]||tag}</span><span class="ei-text">${text}</span>`;
  body.appendChild(item);

  // Auto-open locker on first item
  if (count === 1) { lockerOpen = true; document.getElementById('el-body').classList.add('open'); }
}

function toggleLocker() {
  lockerOpen = !lockerOpen;
  document.getElementById('el-body').classList.toggle('open', lockerOpen);
}

// ══════════════════════════════════
//  LOG DATA — CASE 01
// ══════════════════════════════════
const logData = [
  { time: '08:14', user: 'admin_portal', ip: '192.168.1.5', iptype: 'local', status: 'success', attempts: 1, period: 'day' },
  { time: '09:02', user: 'mrsoh_admin',  ip: '192.168.1.8', iptype: 'local', status: 'success', attempts: 1, period: 'day' },
  { time: '11:38', user: 'mr_tan_pe',    ip: '192.168.1.11',iptype: 'local', status: 'success', attempts: 1, period: 'day' },
  { time: '13:15', user: 'admin_portal', ip: '192.168.1.5', iptype: 'local', status: 'success', attempts: 1, period: 'day' },
  { time: '17:44', user: 'backup_sys',   ip: '192.168.1.2', iptype: 'local', status: 'success', attempts: 1, period: 'day' },
  { time: '22:01', user: 'admin_portal', ip: '192.168.1.5', iptype: 'local', status: 'fail',    attempts: 2, period: 'morning' },
  { time: '02:47', user: 'mrsoh_admin',  ip: '10.8.0.43',   iptype: 'vpn',   status: 'success', attempts: 1, period: 'late', suspicious: true },
  { time: '03:11', user: 'admin_portal', ip: '10.8.0.43',   iptype: 'vpn',   status: 'fail',    attempts: 5, period: 'late' },
  { time: '05:22', user: 'backup_sys',   ip: '192.168.1.2', iptype: 'local', status: 'success', attempts: 1, period: 'morning' },
];

let c1LogSelected = false;

function filterLogs() {
  const timeF   = document.getElementById('f-time').value;
  const ipF     = document.getElementById('f-ip').value;
  const statF   = document.getElementById('f-status').value;

  const filtered = logData.filter(r => {
    if (timeF === 'late'    && r.period !== 'late')    return false;
    if (timeF === 'morning' && r.period !== 'morning') return false;
    if (timeF === 'day'     && r.period !== 'day')     return false;
    if (ipF === 'vpn'   && r.iptype !== 'vpn')   return false;
    if (ipF === 'local' && r.iptype !== 'local') return false;
    if (statF === 'success' && r.status !== 'success') return false;
    if (statF === 'fail'    && r.status !== 'fail')    return false;
    return true;
  });

  renderLogTable(filtered);
}

function renderLogTable(rows) {
  const tbody = document.getElementById('log-tbody');
  tbody.innerHTML = '';
  rows.forEach((r, i) => {
    const tr = document.createElement('tr');
    if (r.suspicious) tr.classList.add('log-row-highlight');
    if (!c1LogSelected) {
      tr.classList.add('log-row-clickable');
      tr.onclick = () => selectLogRow(r, tr);
    }
    const statusCls = r.status === 'success' ? (r.suspicious ? 'status-crit' : 'status-ok') : 'status-susp';
    tr.innerHTML = `
      <td>${r.time}</td>
      <td>${r.user}</td>
      <td>${r.ip}</td>
      <td class="${statusCls}">${r.status.toUpperCase()}</td>
      <td>${r.attempts}</td>
    `;
    tbody.appendChild(tr);
  });
  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="color:var(--muted);text-align:center;padding:20px;">No matching entries</td></tr>';
  }
}

function selectLogRow(r, tr) {
  if (c1LogSelected) return;
  c1LogSelected = true;
  tr.classList.add('selected');
  document.querySelectorAll('.log-row-clickable').forEach(el => { el.classList.remove('log-row-clickable'); el.onclick = null; });

  const panel = document.getElementById('log-selected-panel');
  document.getElementById('log-selected-text').innerHTML =
    `Login by <strong>${r.user}</strong> at <strong>${r.time}</strong> from VPN IP <strong>${r.ip}</strong>. ` +
    (r.suspicious ? 'Login succeeded on the first attempt at 2:47am — unusual for an admin account at this hour.' : 'This entry is worth noting.');
  panel.style.display = 'block';

  if (r.suspicious) {
    addEvidence('log', `mrsoh_admin — VPN login at 02:47 — IP: 10.8.0.43 — 1 attempt, immediate success`);
    setTimeout(() => document.getElementById('c1-s1-next').classList.remove('disabled'), 600);
  } else {
    panel.querySelector('h2').textContent = '// Entry Logged — But Keep Looking';
    document.getElementById('log-selected-text').textContent += ' Try filtering by time (12am–4am) and IP type (VPN) to narrow down suspicious activity.';
    c1LogSelected = false;
    setTimeout(() => tr.classList.remove('selected'), 1500);
  }
}

// ── Init Case 01 logs ──
renderLogTable(logData);

// ══════════════════════════════════
//  HASH CRACKER
// ══════════════════════════════════
function runHashCrack() {
  const btn = document.getElementById('crack-btn');
  btn.disabled = true;
  btn.textContent = '⚡ CRACKING...';

  const fill = document.getElementById('hc-fill');
  const status = document.getElementById('hc-status');
  const words = ['password', '123456', 'sunshine', 'mrsoh2022', 'School123', 'Sunshine@2019'];
  let progress = 0;
  let wordIdx = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 4 + 2;
    if (progress >= 100) progress = 100;
    fill.style.width = progress + '%';

    if (wordIdx < words.length) {
      status.textContent = `Testing: "${words[wordIdx]}"...`;
      wordIdx++;
    }

    if (progress >= 100) {
      clearInterval(interval);
      status.textContent = '';
      document.getElementById('hc-result').style.display = 'block';
      btn.textContent = '✓ CRACKED';

      addEvidence('hash', `SHA-1 hash cracked → Sunshine@2019 (mrsoh@school.edu.sg — 2022 breach)`);

      setTimeout(() => {
        document.getElementById('c1-s2-info').style.display = 'block';
        document.getElementById('c1-s2-next').classList.remove('disabled');
      }, 600);
    }
  }, 80);
}

// ══════════════════════════════════
//  CASE 01 NAVIGATION
// ══════════════════════════════════
function showC1Step2() {
  document.getElementById('c1-step1').classList.remove('active');
  document.getElementById('c1-step2').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showC1Report() {
  document.getElementById('c1-step2').classList.remove('active');
  document.getElementById('c1-report').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Case Report 01 ──
const keywords1 = [
  ['credential stuffing', 'stolen password', 'reused password', 'leaked', 'breach', 'password spray'],
  ['password reuse', 'no expiry', 'weak hash', 'sha-1', 'sha1', 'unsalted', 'never rotated', 'never expires', 'weak hashing'],
  ['pdpc', 'notify', 'breach notification', 'report', 'inform', 'data breach', 'pdpa', 'personal data'],
];
const hints1 = [
  'Think about what it is called when stolen passwords from one site are used to log into another site.',
  'Consider the combination of: never-expiring passwords, SHA-1 hashing, and no breach monitoring.',
  'PDPA requires organisations to notify PDPC and affected individuals of a data breach.',
];

function submitC1Report() {
  const vals = [
    document.getElementById('rf1').value.toLowerCase(),
    document.getElementById('rf2').value.toLowerCase(),
    document.getElementById('rf3').value.toLowerCase(),
  ];
  let allOk = true;
  vals.forEach((v, i) => {
    const input = document.getElementById('rf' + (i+1));
    const fb = document.getElementById('rf' + (i+1) + '-fb');
    const hit = keywords1[i].some(k => v.includes(k));
    input.className = 'rf-input ' + (hit ? 'ok' : 'fail');
    fb.className = 'rf-feedback ' + (hit ? 'ok' : 'fail');
    fb.style.display = 'block';
    fb.textContent = hit ? '✓ Correct.' : '✗ Not quite. Hint: ' + hints1[i];
    if (!hit) allOk = false;
  });
  if (allOk) {
    const fc = document.getElementById('flag-card-1');
    fc.style.display = 'block';
    fc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    launchConfetti();
  }
}

// ══════════════════════════════════
//  CASE 02 LOGS
// ══════════════════════════════════
const c2LogData = [
  { account: 'ivan.tan',      type: 'User',    status: 'Deactivated', logins: 0,  ip: '—',              period: 'all',  service: false },
  { account: 'ceo_zhang',     type: 'User',    status: 'Active',      logins: 0,  ip: '192.168.10.2',   period: 'pre',  service: false },
  { account: 'hr_portal',     type: 'User',    status: 'Active',      logins: 2,  ip: '192.168.10.8',   period: 'post', service: false },
  { account: 'svc_backup',    type: 'Service', status: 'Active',      logins: 4,  ip: '185.220.101.47', period: 'post', service: true, suspicious: true },
  { account: 'svc_monitor',   type: 'Service', status: 'Active',      logins: 12, ip: '192.168.10.1',   period: 'post', service: true },
  { account: 'svc_db_reader', type: 'Service', status: 'Active',      logins: 8,  ip: '192.168.10.3',   period: 'post', service: true },
  { account: 'fin_reporting', type: 'User',    status: 'Active',      logins: 1,  ip: '192.168.10.15',  period: 'post', service: false },
];

let c2LogSelected = false;

function filterC2Logs() {
  const statF = document.getElementById('f2-status').value;
  const timeF = document.getElementById('f2-time').value;

  const filtered = c2LogData.filter(r => {
    if (statF === 'active'      && r.status !== 'Active')      return false;
    if (statF === 'deactivated' && r.status !== 'Deactivated') return false;
    if (statF === 'service'     && r.type   !== 'Service')     return false;
    if (timeF === 'post' && r.period !== 'post') return false;
    if (timeF === 'pre'  && r.period !== 'pre')  return false;
    return true;
  });
  renderC2LogTable(filtered);
}

function renderC2LogTable(rows) {
  const tbody = document.getElementById('c2-log-tbody');
  tbody.innerHTML = '';
  rows.forEach(r => {
    const tr = document.createElement('tr');
    if (r.suspicious) tr.classList.add('log-row-highlight');
    if (!c2LogSelected) {
      tr.classList.add('log-row-clickable');
      tr.onclick = () => selectC2Row(r, tr);
    }
    const loginStyle = r.suspicious ? 'style="color:var(--red);font-weight:700;"' : (r.logins > 0 && r.period === 'post' ? 'style="color:var(--yellow);"' : '');
    const statStyle = r.status === 'Deactivated' ? 'style="color:var(--muted);"' : (r.suspicious ? 'style="color:var(--cyan);"' : '');
    tr.innerHTML = `
      <td>${r.account}</td>
      <td>${r.type}</td>
      <td ${statStyle}>${r.status}</td>
      <td ${loginStyle}>${r.logins}</td>
      <td style="font-family:'Courier New',monospace; font-size:0.9em;">${r.ip}</td>
    `;
    tbody.appendChild(tr);
  });
  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="color:var(--muted);text-align:center;padding:20px;">No matching entries</td></tr>';
  }
}

function selectC2Row(r, tr) {
  if (c2LogSelected) return;
  if (!r.suspicious) {
    tr.classList.add('wrong');
    setTimeout(() => tr.classList.remove('wrong'), 900);
    return;
  }
  c2LogSelected = true;
  tr.classList.add('selected');

  document.getElementById('c2-account-panel').style.display = 'block';
  addEvidence('log', `svc_backup — created by ivan.tan — Admin — 4 post-termination logins — IP: 185.220.101.47`);
  setTimeout(() => document.getElementById('c2-s1-next').classList.remove('disabled'), 600);
}

// Init Case 02 logs
renderC2LogTable(c2LogData);

// ══════════════════════════════════
//  CASE 02 EXIF
// ══════════════════════════════════
let c2ExifDone = false;
let c2ExifPhase = 0;

function extractC2Exif() {
  if (c2ExifDone) return;
  c2ExifDone = true;
  document.getElementById('c2-extract-btn').textContent = '✓ METADATA EXTRACTED';
  document.getElementById('c2-extract-btn').disabled = true;
  document.getElementById('c2-exif-table').style.display = 'block';

  addEvidence('metadata', `iPhone 14 · GPS: 1.3048°N, 103.8318°E (coffeeshop 3km from home) · Photo taken 21:14, posted 23:22 — 2hr pre-staged alibi`);

  setTimeout(() => {
    document.getElementById('c2-ip-panel').style.display = 'block';
    document.getElementById('c2-ip-panel').scrollIntoView({ behavior: 'smooth', block: 'center' });

    addEvidence('photo', `svc_backup login IP (185.220.101.47) = Case 01 C2 server — same threat actor confirmed`);
  }, 1200);

  setTimeout(() => {
    document.getElementById('reveal-card').style.display = 'block';
    document.getElementById('reveal-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => document.getElementById('c2-s2-next').classList.remove('disabled'), 600);
  }, 2600);
}

// ══════════════════════════════════
//  CASE 02 NAVIGATION
// ══════════════════════════════════
function showC2Step2() {
  document.getElementById('c2-step1').classList.remove('active');
  document.getElementById('c2-step2').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showC2Report() {
  document.getElementById('c2-step2').classList.remove('active');
  document.getElementById('c2-report').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Case Report 02 ──
const keywords2 = [
  ['backdoor', 'service account', 'svc_backup', 'hidden account', 'dormant account', 'rogue account', 'persisted'],
  ['exif', 'metadata', 'gps', 'alibi', 'staged', 'ip', 'pre-termination', 'pre termination', 'created account before', 'changed password'],
  ['offboard', 'audit', 'mfa', 'multi-factor', 'least privilege', 'disable account', 'service account review', 'deactivate', 'privileged access', 'access review'],
];
const hints2 = [
  'Ivan left a hidden service account (svc_backup) with admin rights that survived his termination.',
  'Ivan staged a fake alibi — but EXIF data exposed his GPS location and a 2-hour timestamp gap.',
  'Think about what steps an IT team should take when someone with admin access is fired.',
];

function submitC2Report() {
  const vals = [
    document.getElementById('rf4').value.toLowerCase(),
    document.getElementById('rf5').value.toLowerCase(),
    document.getElementById('rf6').value.toLowerCase(),
  ];
  let allOk = true;
  vals.forEach((v, i) => {
    const input = document.getElementById('rf' + (i+4));
    const fb = document.getElementById('rf' + (i+4) + '-fb');
    const hit = keywords2[i].some(k => v.includes(k));
    input.className = 'rf-input ' + (hit ? 'ok' : 'fail');
    fb.className = 'rf-feedback ' + (hit ? 'ok' : 'fail');
    fb.style.display = 'block';
    fb.textContent = hit ? '✓ Correct.' : '✗ Not quite. Hint: ' + hints2[i];
    if (!hit) allOk = false;
  });
  if (allOk) {
    const fc = document.getElementById('flag-card-2');
    fc.style.display = 'block';
    fc.scrollIntoView({ behavior: 'smooth', block: 'center' });
    launchConfetti();
  }
}

// ══════════════════════════════════
//  CASE NAVIGATION
// ══════════════════════════════════
function goCase(n) {
  document.querySelectorAll('.case-block').forEach(c => c.classList.remove('active'));
  document.getElementById('case' + n).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  ['cp1','cp2'].forEach((id, i) => {
    const dot = document.getElementById(id);
    dot.classList.remove('active','done');
    if (i + 1 < n) dot.classList.add('done');
    else if (i + 1 === n) dot.classList.add('active');
  });
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
