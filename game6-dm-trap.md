---
layout: default
title: "DM TRAP"
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

:root {
  --bg:      #0a0a1a;
  --bg2:     #0f0f22;
  --bg3:     #15152e;
  --card:    #111128;
  --ig1:     #833ab4;
  --ig2:     #fd1d1d;
  --ig3:     #fcb045;
  --tt:      #00f2ea;
  --tt2:     #ff0050;
  --success: #00e676;
  --danger:  #ff1744;
  --white:   #f0f0ff;
  --muted:   #5a5a7a;
  --border:  rgba(131,58,180,0.25);
  --font:    'Nunito', sans-serif;
  --mono:    'Space Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

#dm-game {
  background: var(--bg);
  min-height: 100vh;
  font-family: var(--font);
  color: var(--white);
  padding-bottom: 60px;
}

/* Safety ribbon */
.ribbon {
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  color: #fff;
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 10px 16px;
  text-align: center;
  line-height: 1.5;
  animation: ribbon-pulse 4s ease-in-out infinite;
}
@keyframes ribbon-pulse { 0%,100%{opacity:1} 50%{opacity:.85} }

/* Header */
.game-header {
  text-align: center;
  padding: 30px 20px 16px;
}
.game-tag {
  font-family: var(--mono);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--tt);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.game-title {
  font-family: var(--font);
  font-size: clamp(2rem, 6vw, 3.2rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--ig1), var(--ig2), var(--ig3));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.game-subtitle {
  color: var(--muted);
  font-size: 0.88rem;
  margin-top: 8px;
  line-height: 1.6;
}

/* Attack nav */
.attack-nav {
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 0 16px 24px;
  flex-wrap: wrap;
}
.an-step {
  font-family: var(--mono);
  font-size: 0.7rem;
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid var(--muted);
  color: var(--muted);
  transition: all 0.3s;
  white-space: nowrap;
}
.an-step.active { color: var(--ig1); border-color: var(--ig1); background: rgba(131,58,180,0.08); }
.an-step.done { color: var(--success); border-color: var(--success); background: rgba(0,230,118,0.06); }

/* Wrap */
.game-wrap { max-width: 780px; margin: 0 auto; padding: 0 16px; }

/* Attack sections */
.attack { display: none; }
.attack.active { display: block; animation: slide-in 0.4s ease; }
@keyframes slide-in { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }

/* Section head */
.section-head {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 22px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.sh-icon { font-size: 2rem; flex-shrink: 0; }
.sh-body h2 { font-family: var(--mono); font-size: 0.88rem; color: var(--ig3); margin-bottom: 4px; }
.sh-body p { font-size: 0.82rem; color: #aaa; line-height: 1.6; }

/* ========================
   PHONE FRAME
   ======================== */
.phone-wrap {
  max-width: 360px;
  margin: 0 auto 24px;
}
.phone-frame-outer {
  background: #1a1a2e;
  border-radius: 32px;
  border: 2px solid rgba(131,58,180,0.4);
  box-shadow: 0 0 50px rgba(131,58,180,0.15), 0 20px 60px rgba(0,0,0,0.5);
  overflow: hidden;
}
.phone-notch-bar {
  background: #111;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.phone-notch { width: 80px; height: 22px; background: #000; border-radius: 0 0 12px 12px; position: absolute; top: 0; }
.phone-status {
  display: flex;
  justify-content: space-between;
  padding: 4px 18px 0;
  font-size: 0.68rem;
  color: #888;
  background: #111;
}

/* ========================
   INSTAGRAM DM THREAD
   ======================== */
.ig-header {
  background: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-bottom: 1px solid #eee;
}
.ig-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: linear-gradient(135deg, var(--ig1), var(--ig2), var(--ig3));
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.ig-header-info { flex: 1; min-width: 0; }
.ig-header-name {
  font-size: 0.82rem;
  color: #111;
  font-weight: 700;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  gap: 4px;
}
.ig-verified { color: #3897f0; font-size: 0.75rem; }
.ig-header-sub { font-size: 0.68rem; color: #888; font-family: sans-serif; }

.ig-thread {
  background: #fafafa;
  padding: 12px;
  min-height: 200px;
}
.ig-msg-wrap { display: flex; flex-direction: column; gap: 8px; }
.ig-msg {
  max-width: 85%;
  padding: 10px 13px;
  border-radius: 18px;
  font-size: 0.82rem;
  line-height: 1.55;
  font-family: sans-serif;
}
.ig-msg.them {
  align-self: flex-start;
  background: #efefef;
  color: #111;
  border-bottom-left-radius: 6px;
}
.ig-msg.me {
  align-self: flex-end;
  background: linear-gradient(135deg, var(--ig1), var(--ig2));
  color: #fff;
  border-bottom-right-radius: 6px;
}
.ig-timestamp { font-size: 0.62rem; color: #aaa; font-family: sans-serif; margin-bottom: 2px; }

/* Red flag hotspots */
.rf-hotspot {
  display: inline;
  cursor: pointer;
  border-radius: 3px;
  transition: background 0.2s;
  padding: 1px 2px;
}
.rf-hotspot.unfound {
  /* no pre-reveal styling — blends with surrounding text */
}
.rf-hotspot.found {
  background: rgba(255,23,68,0.15);
  border-bottom: 2px solid var(--danger);
}
.rf-hotspot.unfound:hover { background: rgba(255,255,255,0.08); }

/* Red flag reveal panel */
.rf-panel {
  display: none;
  background: var(--bg3);
  border: 1px solid rgba(255,23,68,0.4);
  border-radius: 10px;
  padding: 14px 16px;
  margin: 12px 0 0;
  font-size: 0.8rem;
  line-height: 1.6;
  color: #ddd;
  animation: slide-in 0.25s ease;
}
.rf-panel.show { display: block; }
.rf-label { color: var(--danger); font-weight: 700; margin-bottom: 4px; font-family: var(--mono); font-size: 0.72rem; }

.rf-counter {
  text-align: center;
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--muted);
  padding: 10px;
  background: var(--card);
  border-top: 1px solid var(--border);
}
.rf-counter span { color: var(--danger); }

/* What-if reveal */
.whatif-panel {
  display: none;
  background: rgba(255,23,68,0.07);
  border: 1px solid rgba(255,23,68,0.3);
  border-radius: 12px;
  padding: 18px 20px;
  margin: 16px 0;
  animation: slide-in 0.4s ease;
}
.whatif-panel.show { display: block; }
.whatif-panel h3 { color: var(--danger); font-size: 0.88rem; margin-bottom: 8px; font-family: var(--mono); }
.whatif-panel p { font-size: 0.82rem; color: #ccc; line-height: 1.65; }

/* ========================
   ATTACK 2 — Before/After
   ======================== */
.compare-toggle {
  display: flex;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
}
.ct-btn {
  flex: 1;
  padding: 12px;
  font-family: var(--font);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  min-height: 48px;
}
.ct-btn.active { color: var(--white); background: rgba(131,58,180,0.2); }

.compare-view { display: none; }
.compare-view.active { display: block; animation: slide-in 0.3s ease; }

/* Anomaly buttons in thread */
.anom-hotspot {
  display: inline;
  cursor: pointer;
  padding: 1px 3px;
  border-radius: 3px;
  transition: background 0.2s;
  /* no pre-reveal styling */
}
.anom-hotspot.found { background: rgba(255,23,68,0.15); border-bottom: 2px solid var(--danger); }
.anom-hotspot:hover { background: rgba(255,255,255,0.08); }
.anom-panel {
  display: none;
  background: var(--bg3);
  border: 1px solid rgba(255,183,0,0.3);
  border-radius: 10px;
  padding: 12px 16px;
  margin: 10px 0 0;
  font-size: 0.8rem;
  color: #ddd;
  line-height: 1.6;
  animation: slide-in 0.25s ease;
}
.anom-panel.show { display: block; }
.anom-panel .anom-label { color: #ffb700; font-weight: 700; font-family: var(--mono); font-size: 0.7rem; margin-bottom: 4px; }

/* ========================
   ATTACK 3 — TikTok
   ======================== */
.tt-video-card {
  background: #000;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid rgba(0,242,234,0.2);
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
}
.tt-video-thumb {
  height: 200px;
  background: linear-gradient(135deg, #1a1a2e, #2d1b4e);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.tt-play { font-size: 3rem; opacity: 0.8; }
.tt-video-info {
  padding: 10px 14px;
  display: flex;
  gap: 10px;
  align-items: center;
}
.tt-avatar { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, var(--tt), var(--tt2)); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; flex-shrink: 0; }
.tt-video-meta { flex: 1; }
.tt-creator { font-size: 0.82rem; font-weight: 700; color: #fff; font-family: sans-serif; }
.tt-desc { font-size: 0.72rem; color: #aaa; font-family: sans-serif; }

.tt-header { padding: 10px 14px 6px; display: flex; align-items: center; gap: 8px; background: #111; }
.tt-logo { font-family: var(--mono); font-size: 1rem; font-weight: 700; color: var(--white); }
.tt-logo span { color: var(--tt2); }
.tt-tabs { display: flex; gap: 16px; padding: 8px 14px 0; border-bottom: 1px solid #222; background: #111; }
.tt-tab { font-size: 0.78rem; color: #666; padding-bottom: 8px; font-family: sans-serif; }
.tt-tab.active { color: #fff; border-bottom: 2px solid #fff; }

.tt-comments { background: #111; }
.tt-comments-title { padding: 10px 14px 6px; font-size: 0.78rem; color: #888; font-family: sans-serif; border-bottom: 1px solid #222; }
.tt-comment { display: flex; gap: 8px; padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.tt-c-avatar { width: 28px; height: 28px; border-radius: 50%; background: var(--bg3); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0; }
.tt-c-body { flex: 1; }
.tt-c-name { font-size: 0.72rem; color: #888; font-family: sans-serif; margin-bottom: 2px; }
.tt-c-text { font-size: 0.78rem; color: #ddd; line-height: 1.5; font-family: sans-serif; }
.tt-c-text a { color: var(--tt); text-decoration: underline; }
.tt-c-scam { border: 1px solid rgba(255,23,68,0.3); border-radius: 8px; background: rgba(255,23,68,0.05); }
.tt-c-scam .tt-c-name { color: var(--tt2); }

.tt-choice-section { margin-top: 16px; }
.tt-choice-section p { font-size: 0.88rem; color: var(--white); margin-bottom: 14px; font-weight: 700; }
.tt-choices { display: flex; flex-direction: column; gap: 10px; }
.tt-choice {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 16px;
  cursor: pointer;
  font-family: var(--font);
  font-size: 0.84rem;
  color: #ccc;
  text-align: left;
  min-height: 52px;
  transition: all 0.2s;
  line-height: 1.5;
}
@media (hover: hover) { .tt-choice:hover { border-color: var(--ig1); background: rgba(131,58,180,0.06); } }
.tt-choice.locked { pointer-events: none; }
.tt-choice.chose-correct { border-color: var(--success); background: rgba(0,230,118,0.07); color: var(--success); }
.tt-choice.chose-wrong { border-color: var(--danger); background: rgba(255,23,68,0.07); color: var(--danger); animation: shake 0.4s ease; }
@keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)} }

.tt-consequence {
  display: none;
  margin-top: 14px;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 0.82rem;
  line-height: 1.6;
}
.tt-consequence.show { display: block; animation: slide-in 0.3s ease; }
.tt-consequence.good { background: rgba(0,230,118,0.07); border: 1px solid rgba(0,230,118,0.25); color: #ccc; }
.tt-consequence.bad { background: rgba(255,23,68,0.07); border: 1px solid rgba(255,23,68,0.25); color: #ccc; }
.tt-consequence .cons-label { font-weight: 700; margin-bottom: 6px; font-family: var(--mono); font-size: 0.78rem; }
.good .cons-label { color: var(--success); }
.bad .cons-label { color: var(--danger); }

/* Debunking panel */
.debunk-panel {
  display: none;
  background: var(--card);
  border: 1px solid rgba(0,242,234,0.25);
  border-radius: 12px;
  padding: 18px 20px;
  margin-top: 16px;
  animation: slide-in 0.4s ease;
}
.debunk-panel.show { display: block; }
.debunk-panel h3 { color: var(--tt); font-family: var(--mono); font-size: 0.82rem; margin-bottom: 12px; }
.debunk-fact {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 0.82rem;
  line-height: 1.6;
  color: #ccc;
}
.debunk-fact .fact-icon { font-size: 1rem; flex-shrink: 0; }

/* ========================
   FINAL DEBRIEF
   ======================== */
.debrief-section { display: none; animation: slide-in 0.5s ease; }
.debrief-section.show { display: block; }

.scorecard {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 20px;
}
.sc-header {
  background: linear-gradient(135deg, rgba(131,58,180,0.3), rgba(253,29,29,0.2));
  padding: 14px 20px;
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: var(--white);
}
.sc-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  font-size: 0.84rem;
}
.sc-row:last-child { border-bottom: none; }
.sc-num { font-family: var(--mono); font-size: 0.72rem; color: var(--muted); width: 24px; }
.sc-attack { flex: 1; color: var(--white); }
.sc-attack span { display: block; font-size: 0.72rem; color: var(--muted); margin-top: 2px; }
.sc-result { font-family: var(--mono); font-size: 0.72rem; padding: 4px 10px; border-radius: 20px; }
.sc-result.spotted { background: rgba(0,230,118,0.1); color: var(--success); border: 1px solid rgba(0,230,118,0.3); }
.sc-result.partial { background: rgba(255,183,0,0.1); color: #ffb700; border: 1px solid rgba(255,183,0,0.3); }

.priya-quote {
  background: linear-gradient(135deg, rgba(131,58,180,0.12), rgba(253,29,29,0.08));
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #ddd;
  font-style: italic;
}
.priya-name { font-style: normal; font-weight: 700; color: var(--ig3); display: block; margin-top: 10px; font-size: 0.8rem; }

/* Lessons accordion */
.lessons-accordion { margin-bottom: 20px; }
.lesson-item {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  margin-bottom: 8px;
  overflow: hidden;
}
.lesson-trigger {
  width: 100%;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  color: var(--white);
  font-family: var(--font);
  font-size: 0.84rem;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  min-height: 52px;
  gap: 10px;
}
.lesson-trigger:hover { background: rgba(255,255,255,0.03); }
.lesson-arr { color: var(--ig1); transition: transform 0.3s; font-size: 1rem; flex-shrink: 0; }
.lesson-item.open .lesson-arr { transform: rotate(90deg); }
.lesson-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
.lesson-item.open .lesson-body { max-height: 300px; }
.lesson-body-inner { padding: 0 16px 14px; font-size: 0.8rem; color: #aaa; line-height: 1.7; }
.lesson-body-inner ul { padding-left: 16px; }
.lesson-body-inner li { margin-bottom: 4px; }

/* Flag card */
.flag-card {
  display: none;
  background: var(--card);
  border: 2px solid var(--ig1);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  animation: flag-in 0.6s ease;
  margin-top: 24px;
}
.flag-card.show { display: block; }
@keyframes flag-in { from{opacity:0;transform:scale(0.92)} to{opacity:1;transform:scale(1)} }
.flag-card h2 { font-family: var(--mono); font-size: 1rem; color: var(--success); margin-bottom: 6px; }
.flag-card p { font-size: 0.82rem; color: #aaa; margin-bottom: 16px; }
.flag-value {
  font-family: var(--mono);
  font-size: 0.88rem;
  color: var(--ig3);
  background: rgba(252,176,69,0.07);
  border: 1px dashed var(--ig3);
  border-radius: 8px;
  padding: 14px 20px;
  word-break: break-all;
  margin-bottom: 20px;
  letter-spacing: 0.04em;
}
.flag-nav { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 16px; }

/* Buttons */
.btn {
  display: inline-block;
  padding: 13px 26px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: var(--font);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: all 0.2s;
  min-height: 48px;
}
.btn-ig { background: linear-gradient(135deg, var(--ig1), var(--ig2)); color: #fff; }
.btn-tt { background: var(--tt); color: #000; }
.btn-outline { background: transparent; border: 1px solid var(--ig1); color: var(--ig1); }
.btn-sm { padding: 9px 20px; font-size: 0.78rem; min-height: 40px; }
@media (hover: hover) {
  .btn-ig:hover { opacity: 0.9; }
  .btn-tt:hover { background: #00ddd2; }
  .btn-outline:hover { background: rgba(131,58,180,0.1); }
}
.btn.disabled { opacity: 0.4; pointer-events: none; }

/* Confetti */
#confetti-canvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; }
</style>

<canvas id="confetti-canvas"></canvas>

<div id="dm-game">
  <div class="ribbon">⚠️ EDUCATIONAL SIMULATION — All accounts, usernames, and messages shown are entirely fictional. Social engineering and phishing without consent is illegal under Singapore's Computer Misuse Act.</div>

  <div class="game-header">
    <div class="game-tag">Game 6 · Cybersecurity Series</div>
    <h1 class="game-title">DM TRAP</h1>
    <p class="game-subtitle">You are Priya. Three phishing attacks, one scroll session.<br>Tap the red flags before they get you.</p>
  </div>

  <div class="attack-nav">
    <div class="an-step active" id="an1">ATTACK 1: FAKE CREATOR</div>
    <div class="an-step" id="an2">ATTACK 2: HACKED FRIEND</div>
    <div class="an-step" id="an3">ATTACK 3: TIKTOK COMMENT</div>
    <div class="an-step" id="an4">DEBRIEF</div>
  </div>

  <div class="game-wrap">

    <!-- ATTACK 1 -->
    <div class="attack active" id="atk1">
      <div class="section-head">
        <div class="sh-icon">📸</div>
        <div class="sh-body">
          <h2>ATTACK 1 — THE FAKE CREATOR</h2>
          <p>A DM arrives from what looks like a beauty creator you follow. Read it carefully and <strong>tap anything that seems off</strong>. Find all 4 red flags hidden in this message.</p>
        </div>
      </div>

      <div class="phone-wrap">
        <div class="phone-frame-outer">
          <div class="phone-notch-bar"><div class="phone-notch"></div></div>
          <div class="phone-status"><span>9:41</span><span>Instagram</span><span>🔋 91%</span></div>

          <div class="ig-header">
            <div class="ig-avatar">💄</div>
            <div class="ig-header-info">
              <div class="ig-header-name">
                <span class="rf-hotspot unfound" id="rf0" onclick="findFlag(0)">@beautybyceleste.sg_</span>
                <span class="rf-hotspot unfound ig-verified" id="rf1" onclick="findFlag(1)" title="Verified?">✓</span>
              </div>
              <div class="ig-header-sub">Beauty creator · 142K followers</div>
            </div>
          </div>

          <div class="ig-thread">
            <div class="ig-msg-wrap">
              <div style="text-align:center;font-size:0.68rem;color:#aaa;font-family:sans-serif;margin-bottom:6px">Today 11:23 AM</div>
              <div class="ig-msg them">
                hey priya!! 💕 we love ur feed so much omg<br><br>
                we're running a collab with Sephora SG 🛍️<br>
                FREE products worth $200 + <strong>$50 cash</strong><br><br>
                just fill in ur details here to claim:<br>
                <span class="rf-hotspot unfound" id="rf2" onclick="findFlag(2)">http://sephora-sg-collab.pages.dev/apply</span><br><br>
                <span class="rf-hotspot unfound" id="rf3" onclick="findFlag(3)">⏰ offer expires in 2 HOURS — limited slots!!</span>
              </div>
            </div>
          </div>

          <div class="rf-counter">
            Found: <span id="rf-count">0</span> / 4 red flags
          </div>
        </div>
      </div>

      <!-- Red flag panels -->
      <div class="rf-panel" id="rfp0">
        <div class="rf-label">🚩 RED FLAG 1: COPYCAT USERNAME</div>
        <p>The real account is <strong>@beautybyceleste.sg</strong> — note the trailing underscore (<code>_</code>). Scammers create near-identical usernames with tiny differences: underscores, dots, or extra letters. Instagram doesn't show this clearly in notifications. Always tap the name to check the full profile.</p>
      </div>
      <div class="rf-panel" id="rfp1">
        <div class="rf-label">🚩 RED FLAG 2: FAKE VERIFIED BADGE</div>
        <p>Instagram's blue checkmark is built into the platform UI — it appears next to the username in a specific way that can't be faked by copying the ✓ character into a message or bio. This "✓" is just a text emoji, not an actual verification badge. If you tap the account, you'll see no real verified status.</p>
      </div>
      <div class="rf-panel" id="rfp2">
        <div class="rf-label">🚩 RED FLAG 3: FAKE DOMAIN</div>
        <p><strong>.pages.dev</strong> is a free Cloudflare Pages hosting domain — anyone can create one in 5 minutes. Sephora Singapore's real website is <strong>sephora.sg</strong>. This link leads to a credential harvesting page designed to look like Sephora. Never trust brand collabs that use free hosting domains.</p>
      </div>
      <div class="rf-panel" id="rfp3">
        <div class="rf-label">🚩 RED FLAG 4: ARTIFICIAL URGENCY</div>
        <p>"2 HOURS" and "limited slots" are classic pressure tactics. Scammers manufacture urgency so you act before thinking. Legitimate brand collaborations don't expire in 2 hours — they send formal emails with clear terms and give creators days to respond. Urgency = manipulation.</p>
      </div>

      <div class="whatif-panel" id="whatif1">
        <h3>⚠ WHAT WOULD HAVE HAPPENED IF YOU CLICKED:</h3>
        <p>The link opens a professional-looking fake Sephora SG page. It asks for your full name, NRIC (last 4 digits), Instagram handle, and email + password to "verify your creator account." The moment you submit — the attacker has your credentials. Your Instagram account gets hijacked and used to scam your followers next.</p>
      </div>

      <div style="text-align:center;margin-top:20px">
        <button class="btn btn-ig disabled" id="a1-next" onclick="goAttack(2)">ATTACK 2: HACKED FRIEND →</button>
      </div>
    </div>

    <!-- ATTACK 2 -->
    <div class="attack" id="atk2">
      <div class="section-head">
        <div class="sh-icon">👤</div>
        <div class="sh-body">
          <h2>ATTACK 2 — THE HACKED FRIEND</h2>
          <p>A DM arrived from your friend Jasmine. Toggle to "This Message" and <strong>tap anything that feels wrong or out of place</strong>. Find all 4 anomalies.</p>
        </div>
      </div>

      <div class="compare-toggle">
        <button class="ct-btn active" id="ct-past" onclick="toggleCompare('past')">💬 Past Conversations</button>
        <button class="ct-btn" id="ct-new" onclick="toggleCompare('new')">⚠ This Message</button>
      </div>

      <!-- Past view -->
      <div class="compare-view active" id="cv-past">
        <div class="phone-wrap" style="margin-bottom:16px">
          <div class="phone-frame-outer">
            <div class="phone-notch-bar"><div class="phone-notch"></div></div>
            <div class="phone-status"><span>9:41</span><span>Instagram</span><span>🔋 91%</span></div>
            <div class="ig-header">
              <div class="ig-avatar">🌸</div>
              <div class="ig-header-info">
                <div class="ig-header-name">@jasminelimsg</div>
                <div class="ig-header-sub">Your friend · Queenstown Sec · classmate</div>
              </div>
            </div>
            <div class="ig-thread">
              <div class="ig-msg-wrap">
                <div style="text-align:center;font-size:0.68rem;color:#aaa;font-family:sans-serif;margin-bottom:6px">Yesterday 4:12 PM</div>
                <div class="ig-msg them">priya!! did u finish the bio notes yet 😭</div>
                <div class="ig-msg me">omg barely lol… sharing tmr ok?</div>
                <div class="ig-msg them">YESSS u r a lifesaver literally 💕 also did u see what happened at canteen hahaha</div>
                <div class="ig-msg me">wait no what happened 👀</div>
                <div class="ig-msg them">ok so basically ryan and mrs chen—</div>
                <div class="ig-msg me">WAIT tell me tmr in person omg 😂</div>
                <div style="text-align:center;font-size:0.68rem;color:#aaa;font-family:sans-serif;margin:6px 0">Yesterday 8:45 PM</div>
                <div class="ig-msg them">priya are you going to the open house saturday?</div>
                <div class="ig-msg me">maybe, depends if mum lets me 🙏</div>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align:center;font-size:0.8rem;color:var(--muted);padding:0 0 8px">← These are real messages from Jasmine. Notice the tone, timing, and references.</div>
      </div>

      <!-- New suspicious view -->
      <div class="compare-view" id="cv-new">
        <div class="phone-wrap" style="margin-bottom:16px">
          <div class="phone-frame-outer">
            <div class="phone-notch-bar"><div class="phone-notch"></div></div>
            <div class="phone-status"><span>3:17 AM</span><span>Instagram</span><span>🔋 91%</span></div>
            <div class="ig-header">
              <div class="ig-avatar">🌸</div>
              <div class="ig-header-info">
                <div class="ig-header-name">@jasminelimsg</div>
                <div class="ig-header-sub anom-hotspot" id="an0" onclick="findAnom(0)">Active 1 min ago</div>
              </div>
            </div>
            <div class="ig-thread">
              <div class="ig-msg-wrap">
                <div style="text-align:center;font-size:0.68rem;font-family:sans-serif;margin-bottom:6px" class="anom-hotspot" id="an1" onclick="findAnom(1)">Today 3:17 AM</div>
                <div class="ig-msg them anom-hotspot" id="an2" onclick="findAnom(2)">omg did you see this 😭😭 this is literally us lmao</div>
                <div class="ig-msg them" style="margin-top:4px">
                  <span class="anom-hotspot" id="an3" onclick="findAnom(3)">[link: tiktok-memories-sg.com/share/9f2a3b]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align:center;font-size:0.8rem;color:var(--muted);padding:0 0 8px">↑ Tap anything that seems off. Spot all 4 anomalies to continue.</div>

        <div class="anom-panel" id="anp0">
          <div class="anom-label">🔍 ANOMALY 1: SEND TIME</div>
          <p>3:17am. Jasmine always messages in the afternoon or evening — compare the timestamps in "Past Conversations." An account sending messages at 3am is unusual and suggests an automated bot or someone (an attacker) who is in a different time zone.</p>
        </div>
        <div class="anom-panel" id="anp1">
          <div class="anom-label">🔍 ANOMALY 2: SAME TIME INDICATOR</div>
          <p>"Active 1 min ago" at 3:17am is suspicious — Jasmine wouldn't normally be active at this hour. Account takeover often happens at odd hours when the real owner is asleep and can't notice unusual activity on their profile.</p>
        </div>
        <div class="anom-panel" id="anp2">
          <div class="anom-label">🔍 ANOMALY 3: TONE AND CONTEXT SHIFT</div>
          <p>Jasmine always uses your name ("priya!!"), references specific things (bio notes, canteen drama), and has a personal, warm tone. This message is completely generic — "this is literally us lmao" with no specific reference. It reads like a template. Real friends reference real shared memories.</p>
        </div>
        <div class="anom-panel" id="anp3">
          <div class="anom-label">🔍 ANOMALY 4: FAKE TIKTOK DOMAIN</div>
          <p>The real TikTok domain is <strong>tiktok.com</strong>. "tiktok-memories-sg.com" is a completely different, unaffiliated domain — anyone can register it. This is a credential harvesting page dressed up to look like TikTok. Never click links from unusual domains, even from people you trust.</p>
        </div>
      </div>

      <div class="anom-counter" style="text-align:center;font-family:var(--mono);font-size:0.78rem;color:var(--muted);margin-bottom:16px;display:none" id="anom-counter-wrap">
        Anomalies found: <span id="anom-count">0</span> / 4
      </div>

      <div class="whatif-panel" id="whatif2">
        <h3>⚠ WHAT ACTUALLY HAPPENED:</h3>
        <p>Jasmine's account was hacked three days ago after she clicked a similar phishing link herself. The attacker has been using her account to DM all 847 of her contacts the same message, harvesting credentials at scale. Jasmine doesn't even know — her phone is off and she's asleep. When she wakes up, she'll find her account locked.</p>
      </div>

      <div style="text-align:center;margin-top:20px">
        <button class="btn btn-ig disabled" id="a2-next" onclick="goAttack(3)">ATTACK 3: TIKTOK COMMENT →</button>
      </div>
    </div>

    <!-- ATTACK 3 -->
    <div class="attack" id="atk3">
      <div class="section-head">
        <div class="sh-icon">🎵</div>
        <div class="sh-body">
          <h2>ATTACK 3 — THE TIKTOK COMMENT TRAP</h2>
          <p>You're scrolling TikTok. A comment catches your eye — a "$500 creator bonus." Make the right call.</p>
        </div>
      </div>

      <div class="tt-video-card">
        <div class="tt-header">
          <div class="tt-logo">Tik<span>Tok</span></div>
        </div>
        <div class="tt-tabs">
          <div class="tt-tab active">For You</div>
          <div class="tt-tab">Following</div>
          <div class="tt-tab">Live</div>
        </div>
        <div class="tt-video-thumb">
          <div class="tt-play">▶️</div>
        </div>
        <div class="tt-video-info">
          <div class="tt-avatar">🎤</div>
          <div class="tt-video-meta">
            <div class="tt-creator">@sgdailylife</div>
            <div class="tt-desc">day in my life 🇸🇬 #singapore #school #fyp</div>
          </div>
        </div>
        <div class="tt-comments">
          <div class="tt-comments-title">Comments (1.2K)</div>
          <div class="tt-comment">
            <div class="tt-c-avatar">👤</div>
            <div class="tt-c-body">
              <div class="tt-c-name">@priya_official</div>
              <div class="tt-c-text">omg this is literally you 💀</div>
            </div>
          </div>
          <div class="tt-comment tt-c-scam">
            <div class="tt-c-avatar">🎁</div>
            <div class="tt-c-body">
              <div class="tt-c-name">@tiktok.gifts.sg</div>
              <div class="tt-c-text">🎁 Priya you've been selected for TikTok Creator Fund SG! Claim your <strong>$500 creator bonus</strong> before slots fill up:<br><a>tiktok-creator-fund-sg.com/claim</a><br><em>(Only 3 spots left for SG creators!)</em></div>
            </div>
          </div>
          <div class="tt-comment">
            <div class="tt-c-avatar">🌸</div>
            <div class="tt-c-body">
              <div class="tt-c-name">@jasminelimsg</div>
              <div class="tt-c-text">wait what 👀</div>
            </div>
          </div>
          <div class="tt-comment">
            <div class="tt-c-avatar">💬</div>
            <div class="tt-c-body">
              <div class="tt-c-name">@user8819334</div>
              <div class="tt-c-text">same scam tried on me last week 🙄 don't click</div>
            </div>
          </div>
        </div>
      </div>

      <div class="tt-choice-section">
        <p>What do you do with the @tiktok.gifts.sg comment?</p>
        <div class="tt-choices" id="tt-choices">
          <button class="tt-choice" onclick="ttChoice(this, false, 'bad1')">Tap the link to check — it might be real</button>
          <button class="tt-choice" onclick="ttChoice(this, false, 'bad2')">DM @tiktok.gifts.sg directly to ask if it's legit</button>
          <button class="tt-choice" onclick="ttChoice(this, true, 'good')">Report the comment, block @tiktok.gifts.sg, and ignore it</button>
        </div>
        <div class="tt-consequence" id="ttc-bad1">
          <div class="cons-label">✗ WRONG — HERE'S WHAT HAPPENED</div>
          <p>The page looks exactly like TikTok's real site. It asks for your TikTok username and password to "verify your creator status." You enter them. The attacker now has your TikTok login — your account will be hijacked and used for more scams within minutes.</p>
        </div>
        <div class="tt-consequence" id="ttc-bad2">
          <div class="cons-label">✗ WRONG — HERE'S WHY</div>
          <p>DMing the account gives the scammer a live contact to work with. They'll respond with more urgency ("your slot is about to expire!") and try to get you to click the link directly. Engaging with scam accounts always makes the situation worse.</p>
        </div>
        <div class="tt-consequence" id="ttc-good">
          <div class="cons-label">✓ CORRECT</div>
          <p>The real TikTok Creator Fund is applied for at <strong>creator.tiktok.com</strong> — it is never announced via comments on public videos. Reporting and blocking removes the comment for others and flags the account to TikTok's moderation team.</p>
        </div>
      </div>

      <div class="debunk-panel" id="debunk-panel">
        <h3>DEBUNKING THE SCAM</h3>
        <div class="debunk-fact"><span class="fact-icon">🔍</span><span>TikTok never announces Creator Fund grants in video comments — all official communications come through the TikTok app's notification centre or email to your registered address.</span></div>
        <div class="debunk-fact"><span class="fact-icon">🌐</span><span><strong>tiktok-creator-fund-sg.com</strong> is not a TikTok domain. The real TikTok uses only <strong>tiktok.com</strong> and <strong>creator.tiktok.com</strong>. Any other domain claiming to be TikTok is fake.</span></div>
        <div class="debunk-fact"><span class="fact-icon">⏰</span><span>"Only 3 spots left" is manufactured scarcity — the same psychological trick used in Attack 1. Urgency + scarcity = manipulation. Slow down whenever you feel pressured.</span></div>
        <div class="debunk-fact"><span class="fact-icon">🎯</span><span>The comment used your actual @priya_official username — scraped from the video's existing comments. This personalisation makes the scam feel targeted and real.</span></div>
      </div>

      <div style="text-align:center;margin-top:20px">
        <button class="btn btn-tt disabled" id="a3-next" onclick="goAttack(4)">SEE FINAL DEBRIEF →</button>
      </div>
    </div>

    <!-- DEBRIEF -->
    <div class="attack" id="atk4">
      <div class="debrief-section show">
        <div class="section-head">
          <div class="sh-icon">📋</div>
          <div class="sh-body">
            <h2>MISSION DEBRIEF</h2>
            <p>Three attacks. One scroll session. Here's what you uncovered.</p>
          </div>
        </div>

        <div class="scorecard">
          <div class="sc-header">ATTACK SUMMARY — PRIYA vs THE INTERNET</div>
          <div class="sc-row">
            <div class="sc-num">01</div>
            <div class="sc-attack">Fake Creator (Instagram DM)<span>@beautybyceleste.sg_ — fake Sephora collab</span></div>
            <div class="sc-result spotted">4/4 FLAGS SPOTTED</div>
          </div>
          <div class="sc-row">
            <div class="sc-num">02</div>
            <div class="sc-attack">Hacked Friend (Instagram DM)<span>@jasminelimsg — account takeover scam</span></div>
            <div class="sc-result spotted">4/4 ANOMALIES FOUND</div>
          </div>
          <div class="sc-row">
            <div class="sc-num">03</div>
            <div class="sc-attack">TikTok Comment Scam<span>@tiktok.gifts.sg — fake creator fund</span></div>
            <div class="sc-result spotted">REPORTED ✓</div>
          </div>
        </div>

        <div class="priya-quote">
          "Three attacks in one scroll session. I almost clicked twice. The fake creator looked exactly like the real one — same profile pic, same follower count, and the 'verified' tick looked real. The hacked friend one was the scariest. It was literally Jasmine's account. Now I check everything before I tap a link, even from people I know."
          <span class="priya-name">— Priya, Sec 4</span>
        </div>

        <div class="lessons-accordion">
          <div class="lesson-item">
            <button class="lesson-trigger" onclick="toggleLesson(this)">
              <span>📸 Spotting fake creator accounts</span>
              <span class="lesson-arr">›</span>
            </button>
            <div class="lesson-body">
              <div class="lesson-body-inner">
                <ul>
                  <li>Check the full username — look for underscores, extra dots, or number suffixes</li>
                  <li>Real verified badges can't be copied as text characters — tap the account to check actual status</li>
                  <li>Legitimate brand collabs use email, not Instagram DMs, and give days to respond</li>
                  <li>Hover or tap any link before clicking — check if the domain matches the actual brand</li>
                  <li>Free hosting domains (.pages.dev, .netlify.app, .vercel.app) are never used by real brands</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lesson-item">
            <button class="lesson-trigger" onclick="toggleLesson(this)">
              <span>👤 When your friend's account gets hacked</span>
              <span class="lesson-arr">›</span>
            </button>
            <div class="lesson-body">
              <div class="lesson-body-inner">
                <ul>
                  <li>Check the send time — unusual hours (midnight–5am) are a red flag</li>
                  <li>Real friends reference shared memories — generic messages with just a link are a bot sign</li>
                  <li>Always verify suspicious links via a different channel (WhatsApp, call) before clicking</li>
                  <li>If you think a friend's account is hacked: call or WhatsApp them directly, tell them immediately</li>
                  <li>Enable two-factor authentication on your own Instagram — it prevents account takeover</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lesson-item">
            <button class="lesson-trigger" onclick="toggleLesson(this)">
              <span>🎵 Social media comment scams</span>
              <span class="lesson-arr">›</span>
            </button>
            <div class="lesson-body">
              <div class="lesson-body-inner">
                <ul>
                  <li>TikTok, Instagram, YouTube never contact creators via comments — only through official in-app notifications</li>
                  <li>Any "creator fund", "prize", or "partnership" announced in comments is always a scam</li>
                  <li>Scammers scrape your username from public comments to make it feel personal</li>
                  <li>"Limited spots" and countdown timers in comments = manufactured pressure</li>
                  <li>Report + block is always the correct response — never engage with scam accounts</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lesson-item">
            <button class="lesson-trigger" onclick="toggleLesson(this)">
              <span>🔐 Protecting your accounts</span>
              <span class="lesson-arr">›</span>
            </button>
            <div class="lesson-body">
              <div class="lesson-body-inner">
                <ul>
                  <li>Enable 2FA (two-factor authentication) on ALL social media — Instagram, TikTok, WhatsApp, email</li>
                  <li>Use a unique password for each platform — if one is breached, others stay safe</li>
                  <li>Never enter your social media password on any site that isn't the official app or website</li>
                  <li>If you think you've been phished: change your password immediately, then check "login activity" and remove unknown sessions</li>
                  <li>Singapore's SingCERT (Cyber Emergency Response Team) tracks active phishing campaigns — report at go.gov.sg/singcert</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="flag-card show">
          <h2>🎯 PHISHING SPOTTER — MISSION COMPLETE</h2>
          <p>You detected every attack. You know how creators are impersonated, how hacked accounts are weaponised, and how comment-section scams exploit trust. Share this knowledge.</p>
          <div class="flag-value">FLAG{dm_tr4p_ph1sh_sp0tt3r_sg}</div>
          <div class="flag-nav">
            <a href="/game5-wifi-danger/" class="btn btn-outline">← GAME 5: WIFI DANGER</a>
            <a href="/" class="btn btn-ig">HOME →</a>
          </div>
        </div>
      </div>
    </div>

  </div><!-- .game-wrap -->
</div><!-- #dm-game -->

<script>
// ---- State ----
const gs = {
  rfFound: new Set(),
  anomFound: new Set(),
  ttDone: false,
  compareView: 'past',
};

// ---- Attack Navigation ----
function goAttack(n) {
  document.querySelectorAll('.attack').forEach(a => a.classList.remove('active'));
  document.getElementById('atk' + n).classList.add('active');
  ['an1','an2','an3','an4'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.remove('active','done');
    if (i + 1 < n) el.classList.add('done');
    else if (i + 1 === n) el.classList.add('active');
  });
  window.scrollTo({top: 0, behavior: 'smooth'});
  if (n === 4) launchConfetti();
}

// ---- Attack 1: Red Flags ----
let activeRfp = null;

function findFlag(idx) {
  gs.rfFound.add(idx);

  const hs = document.getElementById('rf' + idx);
  hs.classList.remove('unfound');
  hs.classList.add('found');

  // Toggle panel
  const panel = document.getElementById('rfp' + idx);
  if (activeRfp !== null && activeRfp !== 'rfp' + idx) {
    document.getElementById(activeRfp).classList.remove('show');
  }
  const isOpen = panel.classList.contains('show');
  panel.classList.toggle('show');
  activeRfp = isOpen ? null : 'rfp' + idx;

  document.getElementById('rf-count').textContent = gs.rfFound.size;

  if (gs.rfFound.size >= 4) {
    document.getElementById('whatif1').classList.add('show');
    document.getElementById('a1-next').classList.remove('disabled');
    document.getElementById('whatif1').scrollIntoView({behavior:'smooth', block:'nearest'});
  }
}

// ---- Attack 2: Compare Toggle ----
function toggleCompare(view) {
  gs.compareView = view;
  document.getElementById('cv-past').classList.toggle('active', view === 'past');
  document.getElementById('cv-new').classList.toggle('active', view === 'new');
  document.getElementById('ct-past').classList.toggle('active', view === 'past');
  document.getElementById('ct-new').classList.toggle('active', view === 'new');

  if (view === 'new') {
    document.getElementById('anom-counter-wrap').style.display = 'block';
  }
}

let activeAnp = null;

function findAnom(idx) {
  gs.anomFound.add(idx);

  const hs = document.getElementById('an' + idx);
  hs.classList.remove('unfound');
  hs.classList.add('found');

  const panel = document.getElementById('anp' + idx);
  if (activeAnp !== null && activeAnp !== 'anp' + idx) {
    document.getElementById(activeAnp).classList.remove('show');
  }
  const isOpen = panel.classList.contains('show');
  panel.classList.toggle('show');
  activeAnp = isOpen ? null : 'anp' + idx;

  document.getElementById('anom-count').textContent = gs.anomFound.size;

  if (gs.anomFound.size >= 4) {
    document.getElementById('whatif2').classList.add('show');
    document.getElementById('a2-next').classList.remove('disabled');
    document.getElementById('whatif2').scrollIntoView({behavior:'smooth', block:'nearest'});
  }
}

// ---- Attack 3: TikTok Choice ----
function ttChoice(btn, isCorrect, key) {
  if (gs.ttDone) return;
  gs.ttDone = true;

  document.querySelectorAll('.tt-choice').forEach(b => b.classList.add('locked'));
  btn.classList.add(isCorrect ? 'chose-correct' : 'chose-wrong');

  // Hide all consequences first, show the right one
  ['ttc-bad1','ttc-bad2','ttc-good'].forEach(id => {
    document.getElementById(id).classList.remove('show','good','bad');
  });

  const cons = document.getElementById('ttc-' + key);
  cons.classList.add('show', isCorrect ? 'good' : 'bad');

  document.getElementById('debunk-panel').classList.add('show');

  if (isCorrect) {
    document.getElementById('a3-next').classList.remove('disabled');
  } else {
    // Allow retry for wrong answers in attack 3
    setTimeout(() => {
      const retry = document.createElement('button');
      retry.className = 'btn btn-outline btn-sm';
      retry.textContent = 'Try again';
      retry.style.marginTop = '12px';
      retry.onclick = () => {
        gs.ttDone = false;
        document.querySelectorAll('.tt-choice').forEach(b => {
          b.classList.remove('locked','chose-correct','chose-wrong');
        });
        ['ttc-bad1','ttc-bad2','ttc-good'].forEach(id => {
          document.getElementById(id).classList.remove('show','good','bad');
        });
        document.getElementById('debunk-panel').classList.remove('show');
        retry.remove();
      };
      cons.appendChild(retry);
    }, 300);
  }
}

// ---- Lessons Accordion ----
function toggleLesson(trigger) {
  const item = trigger.closest('.lesson-item');
  item.classList.toggle('open');
}

// ---- Confetti ----
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#833ab4','#fd1d1d','#fcb045','#00f2ea','#ffffff','#00e676'];
  const pieces = Array.from({length: 130}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: 4 + Math.random() * 6,
    d: 1.2 + Math.random() * 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.random() * 20 - 10,
    ts: Math.random() * 0.1,
  }));
  let frame = 0;
  const animate = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.r, p.r/2, p.tilt, 0, 2*Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.d;
      p.x += Math.sin(frame * p.ts) * 1.5;
      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
    });
    frame++;
    if (frame < 320) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  };
  animate();
}
</script>
