---
layout: default
title: "WIFI DANGER ZONE"
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600;700;900&family=Share+Tech+Mono&display=swap');

:root {
  --bg:    #0b0b0f;
  --bg2:   #10101a;
  --bg3:   #16162a;
  --blue:  #00b4ff;
  --pink:  #ff2d78;
  --green: #00ff88;
  --amber: #ffb700;
  --white: #eef0ff;
  --muted: #5a5a7a;
  --card:  #13131f;
  --border: rgba(0,180,255,0.18);
  --font-display: 'Orbitron', monospace;
  --font-mono: 'Share Tech Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

#wifi-game {
  background: var(--bg);
  min-height: 100vh;
  font-family: var(--font-mono);
  color: var(--white);
  padding-bottom: 60px;
}

/* Safety ribbon */
.ribbon {
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  color: #fff;
  font-family: var(--font-mono);
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
  padding: 32px 20px 20px;
  position: relative;
}
.game-tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--blue);
  text-transform: uppercase;
  margin-bottom: 10px;
}
.game-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 5vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  line-height: 1.1;
  background: linear-gradient(135deg, var(--blue), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.game-subtitle {
  color: var(--muted);
  font-size: 0.85rem;
  margin-top: 8px;
  line-height: 1.5;
}

/* Stage nav */
.stage-nav {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 0 20px 24px;
  flex-wrap: wrap;
}
.sn-step {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
  padding: 6px 12px;
  border-radius: 20px;
  border: 1px solid var(--muted);
  transition: all 0.3s;
  white-space: nowrap;
}
.sn-step.active { color: var(--blue); border-color: var(--blue); background: rgba(0,180,255,0.07); }
.sn-step.done { color: var(--green); border-color: var(--green); background: rgba(0,255,136,0.06); }
.sn-dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; }

/* Wrap */
.game-wrap { max-width: 800px; margin: 0 auto; padding: 0 16px; }

/* Stage */
.stage { display: none; }
.stage.active { display: block; animation: fade-in 0.4s ease; }
@keyframes fade-in { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

/* Section head */
.section-head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 24px;
}
.sh-icon { font-size: 2rem; flex-shrink: 0; }
.sh-body h2 { font-family: var(--font-display); font-size: 1rem; color: var(--blue); margin-bottom: 4px; }
.sh-body p { font-size: 0.82rem; color: #aaa; line-height: 1.6; }

/* =====================
   STAGE 1 — WiFi List
   ===================== */
.phone-frame {
  max-width: 360px;
  margin: 0 auto 24px;
  background: #1a1a2e;
  border-radius: 28px;
  border: 2px solid rgba(0,180,255,0.25);
  box-shadow: 0 0 40px rgba(0,180,255,0.1);
  overflow: hidden;
}
.phone-status-bar {
  background: #111122;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  font-size: 0.72rem;
  color: #888;
}
.phone-status-bar span { color: var(--white); font-size: 0.7rem; }
.wifi-header {
  background: #111122;
  padding: 14px 18px 12px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.wifi-header h3 { font-family: var(--font-display); font-size: 0.9rem; color: var(--white); }
.wifi-header p { font-size: 0.72rem; color: #666; margin-top: 2px; }

.wifi-list { padding: 8px 0; }
.wifi-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.2s;
  min-height: 60px;
  position: relative;
}
@media (hover: hover) { .wifi-item:hover { background: rgba(255,255,255,0.03); } }
.wifi-item.flagged { background: rgba(255,45,120,0.08); }
.wifi-item.safe { background: rgba(0,255,136,0.05); }
.wifi-signal { display: flex; align-items: flex-end; gap: 2px; flex-shrink: 0; }
.bar { width: 4px; background: #333; border-radius: 2px; }
.bar.on { background: var(--blue); }
.b1{height:6px} .b2{height:10px} .b3{height:14px} .b4{height:18px}
.wifi-info { flex: 1; min-width: 0; }
.wifi-name { font-size: 0.88rem; color: var(--white); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wifi-meta { font-size: 0.7rem; color: #666; margin-top: 2px; display: flex; gap: 8px; align-items: center; }
.open-badge { color: var(--pink); font-size: 0.68rem; }
.lock-icon { font-size: 0.78rem; color: #555; }
.wifi-flag-btn {
  font-size: 0.72rem;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid var(--pink);
  background: transparent;
  color: var(--pink);
  cursor: pointer;
  font-family: var(--font-mono);
  min-height: 36px;
  white-space: nowrap;
  transition: all 0.2s;
}
.wifi-flag-btn.flagged { background: var(--pink); color: #fff; border-color: var(--pink); }
.wifi-flag-btn.safe-marked { background: transparent; color: var(--green); border-color: var(--green); }

/* Popover */
.wifi-verdict {
  display: none;
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 16px;
  margin: 0 16px 8px;
  font-size: 0.8rem;
  line-height: 1.6;
  color: #ccc;
  animation: fade-in 0.25s ease;
}
.wifi-verdict.show { display: block; }
.wifi-verdict .verdict-label { font-weight: 700; margin-bottom: 4px; }
.verdict-sus .verdict-label { color: var(--pink); }
.verdict-safe .verdict-label { color: var(--green); }

.flag-progress {
  text-align: center;
  padding: 14px 18px;
  font-size: 0.8rem;
  color: var(--muted);
  border-top: 1px solid rgba(255,255,255,0.05);
}
.flag-progress span { color: var(--pink); font-weight: 700; }

.stage1-next {
  text-align: center;
  padding: 20px 0 4px;
}

/* =====================
   STAGE 2 — Packet Sniffer
   ===================== */
.attack-intro {
  background: linear-gradient(135deg, rgba(255,45,120,0.1), rgba(0,180,255,0.06));
  border: 1px solid rgba(255,45,120,0.3);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 24px;
  font-size: 0.85rem;
  line-height: 1.7;
  color: #ddd;
}
.attack-intro strong { color: var(--pink); }

.split-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}
@media (max-width: 600px) { .split-screen { grid-template-columns: 1fr; } }

.split-panel {
  background: var(--card);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
}
.split-label {
  padding: 10px 16px;
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  border-bottom: 1px solid var(--border);
}
.victim-label { color: var(--blue); background: rgba(0,180,255,0.07); }
.attacker-label { color: var(--pink); background: rgba(255,45,120,0.07); }

/* Victim phone view */
.victim-phone {
  padding: 16px;
}
.vp-url-bar {
  background: #1a1a1a;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.75rem;
  color: #ff6b6b;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.vp-url-bar .http-warn { color: #ff6b6b; font-size: 0.7rem; }
.vp-form { background: #fff; border-radius: 8px; padding: 14px; }
.vp-form-title { color: #333; font-size: 0.78rem; font-weight: 700; margin-bottom: 10px; font-family: sans-serif; }
.vp-field { margin-bottom: 10px; }
.vp-field label { display: block; color: #555; font-size: 0.68rem; margin-bottom: 3px; font-family: sans-serif; }
.vp-field .typed-text {
  display: block;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 10px;
  font-size: 0.8rem;
  color: #333;
  font-family: monospace;
  min-height: 32px;
  letter-spacing: 0.02em;
}
.typing-cursor { animation: blink 0.7s infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

/* Attacker terminal */
.attacker-terminal {
  padding: 14px;
  height: 260px;
  overflow-y: auto;
  font-size: 0.75rem;
  line-height: 1.8;
}
.at-line { margin-bottom: 2px; }
.at-time { color: var(--muted); }
.at-normal { color: #aaa; }
.at-http { color: var(--blue); }
.at-post { color: var(--amber); }
.at-cred { color: #fff; }
.at-captured { color: var(--pink); font-weight: 700; animation: captured-flash 0.5s ease; }
.at-tls { color: var(--green); }
@keyframes captured-flash { 0%{background:rgba(255,45,120,0.3)} 100%{background:transparent} }

#start-attack-btn {
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 0 auto 20px;
  text-align: center;
}

/* Quiz */
.quiz-section {
  display: none;
  animation: fade-in 0.4s ease;
}
.quiz-section.show { display: block; }
.quiz-q {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 18px 20px;
  margin-bottom: 16px;
}
.quiz-q p { font-size: 0.88rem; margin-bottom: 14px; color: var(--white); line-height: 1.5; }
.quiz-opts { display: flex; flex-direction: column; gap: 8px; }
.quiz-opt {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: #ccc;
  text-align: left;
  transition: all 0.2s;
  min-height: 48px;
}
@media (hover: hover) { .quiz-opt:hover { border-color: var(--blue); color: var(--white); } }
.quiz-opt.correct { border-color: var(--green); background: rgba(0,255,136,0.08); color: var(--green); }
.quiz-opt.wrong { border-color: var(--pink); background: rgba(255,45,120,0.06); animation: shake 0.4s ease; }
@keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)} }
.quiz-explain { display: none; margin-top: 10px; font-size: 0.78rem; color: #aaa; line-height: 1.6; padding: 10px 14px; background: rgba(255,255,255,0.03); border-radius: 6px; border-left: 3px solid var(--green); }
.quiz-explain.show { display: block; animation: fade-in 0.3s ease; }

/* =====================
   STAGE 3 — Decision Cards
   ===================== */
.decision-arena { position: relative; }
.decision-card {
  display: none;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px 20px;
  margin-bottom: 16px;
  animation: fade-in 0.35s ease;
}
.decision-card.active { display: block; }
.dc-num {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--blue);
  margin-bottom: 12px;
}
.dc-situation {
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 20px;
  color: var(--white);
  padding: 14px 16px;
  background: rgba(0,180,255,0.05);
  border-radius: 8px;
  border-left: 3px solid var(--blue);
}
.dc-choices { display: flex; flex-direction: column; gap: 10px; }
.dc-choice {
  background: var(--bg3);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 16px;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: #ccc;
  text-align: left;
  transition: all 0.2s;
  min-height: 52px;
  line-height: 1.5;
}
@media (hover: hover) { .dc-choice:hover { border-color: var(--blue); background: rgba(0,180,255,0.04); } }
.dc-choice.locked { pointer-events: none; }
.dc-choice.chose-correct { border-color: var(--green); background: rgba(0,255,136,0.06); color: var(--green); }
.dc-choice.chose-wrong { border-color: var(--pink); background: rgba(255,45,120,0.05); color: var(--pink); animation: shake 0.4s ease; }
.dc-consequence {
  display: none;
  margin-top: 16px;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 0.82rem;
  line-height: 1.6;
}
.dc-consequence.show { display: block; animation: fade-in 0.3s ease; }
.dc-consequence.good { background: rgba(0,255,136,0.06); border: 1px solid rgba(0,255,136,0.2); color: #ccc; }
.dc-consequence.bad { background: rgba(255,45,120,0.06); border: 1px solid rgba(255,45,120,0.2); color: #ccc; }
.dc-consequence .cons-label { font-weight: 700; margin-bottom: 4px; }
.good .cons-label { color: var(--green); }
.bad .cons-label { color: var(--pink); }
.dc-next-btn { margin-top: 14px; }

.dc-progress {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin-bottom: 20px;
}
.dp-dot {
  width: 10px; height: 10px; border-radius: 50%;
  background: var(--muted);
  transition: background 0.3s;
}
.dp-dot.active { background: var(--blue); }
.dp-dot.done { background: var(--green); }

/* Buttons */
.btn {
  display: inline-block;
  padding: 13px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all 0.2s;
  min-height: 48px;
}
.btn-blue { background: var(--blue); color: #000; }
.btn-pink { background: var(--pink); color: #fff; }
.btn-outline { background: transparent; border: 1px solid var(--blue); color: var(--blue); }
.btn-sm { padding: 9px 20px; font-size: 0.78rem; min-height: 40px; }
@media (hover: hover) {
  .btn-blue:hover { background: #33ccff; }
  .btn-pink:hover { background: #ff5599; }
  .btn-outline:hover { background: rgba(0,180,255,0.08); }
}
.btn.disabled { opacity: 0.4; pointer-events: none; }

/* Flag Card */
.flag-card {
  display: none;
  background: var(--card);
  border: 2px solid var(--blue);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  animation: flag-in 0.6s ease;
  margin-top: 24px;
}
.flag-card.show { display: block; }
@keyframes flag-in { from{opacity:0;transform:scale(0.92)} to{opacity:1;transform:scale(1)} }
.flag-card h2 { font-family: var(--font-display); font-size: 1.1rem; color: var(--green); margin-bottom: 6px; }
.flag-card p { font-size: 0.82rem; color: #aaa; margin-bottom: 16px; }
.flag-value {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--blue);
  background: rgba(0,180,255,0.07);
  border: 1px dashed var(--blue);
  border-radius: 8px;
  padding: 14px 20px;
  word-break: break-all;
  margin-bottom: 20px;
  letter-spacing: 0.04em;
}
.debrief-box {
  background: rgba(0,180,255,0.04);
  border: 1px solid rgba(0,180,255,0.15);
  border-radius: 10px;
  padding: 16px;
  text-align: left;
  margin-bottom: 20px;
}
.debrief-box h3 { color: var(--blue); font-size: 0.82rem; margin-bottom: 10px; font-family: var(--font-display); }
.debrief-box ul { padding-left: 16px; }
.debrief-box li { color: #ccc; font-size: 0.8rem; line-height: 1.7; margin-bottom: 3px; }
.flag-nav { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }

/* Confetti */
#confetti-canvas { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; }
</style>

<canvas id="confetti-canvas"></canvas>

<div id="wifi-game">
  <div class="ribbon">⚠️ EDUCATIONAL SIMULATION — WiFi attacks without authorisation are illegal under Singapore's Computer Misuse Act (Cap. 50A). Never attempt these techniques on real networks.</div>

  <div class="game-header">
    <div class="game-tag">Game 5 · Cybersecurity Series</div>
    <h1 class="game-title">WIFI DANGER ZONE</h1>
    <p class="game-subtitle">VivoCity Mall, Saturday. Your data just ran out. There's free WiFi.<br>Across the mall, an attacker is waiting.</p>
  </div>

  <div class="stage-nav">
    <div class="sn-step active" id="sn1"><span class="sn-dot"></span>SPOT THE TRAP</div>
    <div class="sn-step" id="sn2"><span class="sn-dot"></span>INSIDE THE ATTACK</div>
    <div class="sn-step" id="sn3"><span class="sn-dot"></span>DEFEND YOURSELF</div>
  </div>

  <div class="game-wrap">

    <!-- STAGE 1 -->
    <div class="stage active" id="stage1">
      <div class="section-head">
        <div class="sh-icon">📱</div>
        <div class="sh-body">
          <h2>STAGE 1 — SPOT THE TRAP</h2>
          <p>Jamie opens WiFi settings at VivoCity. Six networks appear. <strong>Tap each network</strong> to inspect it. Flag all 3 suspicious ones to continue.</p>
        </div>
      </div>

      <div class="phone-frame">
        <div class="phone-status-bar">
          <span>9:41</span>
          <span>VivoCity Mall</span>
          <span>🔋 82%</span>
        </div>
        <div class="wifi-header">
          <h3>Wi-Fi</h3>
          <p>Choose a network</p>
        </div>
        <div class="wifi-list" id="wifi-list">

          <div class="wifi-item" id="wi0" onclick="inspectWifi(0)">
            <div class="wifi-signal"><div class="bar b1 on"></div><div class="bar b2 on"></div><div class="bar b3 on"></div><div class="bar b4 on"></div></div>
            <div class="wifi-info">
              <div class="wifi-name">VivoCity_Free_WiFi</div>
              <div class="wifi-meta"><span class="open-badge">⚠ OPEN</span><span>No password</span></div>
            </div>
            <button class="wifi-flag-btn" id="wb0" onclick="event.stopPropagation();flagWifi(0,true)">Flag</button>
          </div>
          <div class="wifi-verdict" id="wv0">
            <div class="verdict-label verdict-sus" style="color:var(--pink)">⚠ SUSPICIOUS — Flag this</div>
            <p>This is an <strong>evil twin</strong> — a rogue access point named to look like the real mall WiFi. The real VivoCity_Guest requires a WPA2 password. Any open network claiming to be "free" mall WiFi should raise alarm bells. The attacker is sitting nearby with a cheap Raspberry Pi Zero.</p>
          </div>

          <div class="wifi-item" id="wi1" onclick="inspectWifi(1)">
            <div class="wifi-signal"><div class="bar b1 on"></div><div class="bar b2 on"></div><div class="bar b3 on"></div><div class="bar b4"></div></div>
            <div class="wifi-info">
              <div class="wifi-name">VivoCity_Guest</div>
              <div class="wifi-meta"><span class="lock-icon">🔒</span><span>WPA2 Security</span></div>
            </div>
            <button class="wifi-flag-btn" id="wb1" onclick="event.stopPropagation();flagWifi(1,false)">Flag</button>
          </div>
          <div class="wifi-verdict" id="wv1">
            <div class="verdict-label" style="color:var(--green)">✓ LOOKS SAFE</div>
            <p>This is the official VivoCity mall network. It requires a WPA2 password — meaning traffic is encrypted between your device and the router. Still avoid sensitive transactions (banking, email), but this is a legitimate network.</p>
          </div>

          <div class="wifi-item" id="wi2" onclick="inspectWifi(2)">
            <div class="wifi-signal"><div class="bar b1 on"></div><div class="bar b2 on"></div><div class="bar b3"></div><div class="bar b4"></div></div>
            <div class="wifi-info">
              <div class="wifi-name">StarHub_HomeHub_7821</div>
              <div class="wifi-meta"><span class="lock-icon">🔒</span><span>WPA2 Security</span></div>
            </div>
            <button class="wifi-flag-btn" id="wb2" onclick="event.stopPropagation();flagWifi(2,false)">Flag</button>
          </div>
          <div class="wifi-verdict" id="wv2">
            <div class="verdict-label" style="color:var(--green)">✓ LOOKS SAFE</div>
            <p>This is someone's home router (a StarHub HomeHub device) within range. It's a private network — you can't connect without their password. Not suspicious, just a neighbour or nearby shop's WiFi leaking through the walls.</p>
          </div>

          <div class="wifi-item" id="wi3" onclick="inspectWifi(3)">
            <div class="wifi-signal"><div class="bar b1 on"></div><div class="bar b2 on"></div><div class="bar b3 on"></div><div class="bar b4 on"></div></div>
            <div class="wifi-info">
              <div class="wifi-name">SingTel_Guest_5G</div>
              <div class="wifi-meta"><span class="lock-icon">🔒</span><span>WPA2 Security</span></div>
            </div>
            <button class="wifi-flag-btn" id="wb3" onclick="event.stopPropagation();flagWifi(3,false)">Flag</button>
          </div>
          <div class="wifi-verdict" id="wv3">
            <div class="verdict-label" style="color:var(--green)">✓ LOOKS SAFE</div>
            <p>This is a SingTel-managed public hotspot. It uses WPA2 security and is part of SingTel's Wifi@SG network. Safe to connect — but still avoid banking or logging into sensitive accounts without a VPN.</p>
          </div>

          <div class="wifi-item" id="wi4" onclick="inspectWifi(4)">
            <div class="wifi-signal"><div class="bar b1 on"></div><div class="bar b2"></div><div class="bar b3"></div><div class="bar b4"></div></div>
            <div class="wifi-info">
              <div class="wifi-name">FREE PUBLIC WIFI</div>
              <div class="wifi-meta"><span class="open-badge">⚠ OPEN</span><span>No password</span></div>
            </div>
            <button class="wifi-flag-btn" id="wb4" onclick="event.stopPropagation();flagWifi(4,true)">Flag</button>
          </div>
          <div class="wifi-verdict" id="wv4">
            <div class="verdict-label" style="color:var(--pink)">⚠ SUSPICIOUS — Flag this</div>
            <p>All-caps generic name, no password, weak signal — three red flags. Legitimate public WiFi is always associated with a specific venue or provider (e.g., "Starbucks_WiFi", "VivoCity_Guest"). A completely generic name like "FREE PUBLIC WIFI" is a classic rogue AP tactic.</p>
          </div>

          <div class="wifi-item" id="wi5" onclick="inspectWifi(5)">
            <div class="wifi-signal"><div class="bar b1 on"></div><div class="bar b2 on"></div><div class="bar b3 on"></div><div class="bar b4"></div></div>
            <div class="wifi-info">
              <div class="wifi-name">iPhone of Alex</div>
              <div class="wifi-meta"><span class="open-badge">⚠ OPEN</span><span>Personal Hotspot</span></div>
            </div>
            <button class="wifi-flag-btn" id="wb5" onclick="event.stopPropagation();flagWifi(5,true)">Flag</button>
          </div>
          <div class="wifi-verdict" id="wv5">
            <div class="verdict-label" style="color:var(--pink)">⚠ SUSPICIOUS — Flag this</div>
            <p>A personal hotspot with no password means anyone connecting gives the phone owner full visibility of all unencrypted traffic. "iPhone of Alex" — you don't know Alex. Even if well-intentioned, connecting to a stranger's hotspot routes all your traffic through their device. Never connect to unknown personal hotspots.</p>
          </div>
        </div>

        <div class="flag-progress">
          Flagged: <span id="flag-count">0</span> / 3 suspicious networks
        </div>
      </div>

      <div class="stage1-next">
        <button class="btn btn-blue disabled" id="s1-next" onclick="goStage(2)">ATTACK BEGINS →</button>
      </div>
    </div>

    <!-- STAGE 2 -->
    <div class="stage" id="stage2">
      <div class="section-head">
        <div class="sh-icon">👁️</div>
        <div class="sh-body">
          <h2>STAGE 2 — INSIDE THE ATTACK</h2>
          <p>Jamie connected to <strong>VivoCity_Free_WiFi</strong> — the attacker's rogue AP. Watch what Alex can see from his laptop in real time.</p>
        </div>
      </div>

      <div class="attack-intro">
        Jamie visits a mall loyalty site to check her reward points. The site uses <strong>HTTP</strong> — not HTTPS. She doesn't notice the missing padlock. Alex's packet sniffer is already running.
      </div>

      <button class="btn btn-pink" id="start-attack-btn" onclick="startAttack()" style="display:block;width:100%;max-width:300px;margin:0 auto 20px;">
        ▶ RUN PACKET CAPTURE
      </button>

      <div class="split-screen" id="split-screen" style="display:none">
        <div class="split-panel">
          <div class="split-label victim-label">📱 JAMIE'S PHONE (what she sees)</div>
          <div class="victim-phone">
            <div class="vp-url-bar">
              <span class="http-warn">⚠ Not secure</span>
              <span style="color:#888">http://login.mallrewards.sg/</span>
            </div>
            <div class="vp-form">
              <div class="vp-form-title">🏪 Mall Rewards SG — Sign In</div>
              <div class="vp-field">
                <label>Email address</label>
                <span class="typed-text" id="typed-user">&nbsp;</span>
              </div>
              <div class="vp-field">
                <label>Password</label>
                <span class="typed-text" id="typed-pass">&nbsp;</span>
              </div>
            </div>
          </div>
        </div>

        <div class="split-panel">
          <div class="split-label attacker-label">💻 ALEX'S LAPTOP (what the attacker sees)</div>
          <div class="attacker-terminal" id="attacker-feed"></div>
        </div>
      </div>

      <div class="quiz-section" id="s2-quiz">
        <div class="section-head" style="margin-bottom:16px">
          <div class="sh-icon">❓</div>
          <div class="sh-body">
            <h2>UNDERSTAND THE ATTACK</h2>
            <p>Answer all 3 questions to continue.</p>
          </div>
        </div>

        <div class="quiz-q" id="qq0">
          <p>1. Alex could read Jamie's username and password. Why?</p>
          <div class="quiz-opts">
            <button class="quiz-opt" onclick="answerQuiz(0,0,false)">Jamie's phone had malware installed</button>
            <button class="quiz-opt" onclick="answerQuiz(0,1,true)">The login site used HTTP — traffic was not encrypted</button>
            <button class="quiz-opt" onclick="answerQuiz(0,2,false)">Alex guessed her password using brute force</button>
          </div>
          <div class="quiz-explain" id="qe0">✓ HTTP sends data as plain text across the network. Anyone on the same network (or acting as the router, like Alex's rogue AP) can read it. HTTPS encrypts data so only the destination server can decode it.</div>
        </div>

        <div class="quiz-q" id="qq1">
          <p>2. Alex saw "TLS Handshake → [ENCRYPTED — cannot read]" for Facebook. Why couldn't he read those messages?</p>
          <div class="quiz-opts">
            <button class="quiz-opt" onclick="answerQuiz(1,0,false)">Facebook detected the attack and blocked Alex</button>
            <button class="quiz-opt" onclick="answerQuiz(1,1,false)">Jamie was using a VPN at the time</button>
            <button class="quiz-opt" onclick="answerQuiz(1,2,true)">Facebook uses HTTPS/TLS — the data is end-to-end encrypted</button>
          </div>
          <div class="quiz-explain" id="qe1">✓ TLS (Transport Layer Security) is the encryption behind HTTPS. Even though Alex controls the network, he only sees scrambled ciphertext. Without the private key, he cannot decrypt it. This is why HTTPS matters — always look for the padlock.</div>
        </div>

        <div class="quiz-q" id="qq2">
          <p>3. This type of attack — where the attacker secretly sits between the victim and the internet — has a name. What is it?</p>
          <div class="quiz-opts">
            <button class="quiz-opt" onclick="answerQuiz(2,0,false)">Ransomware</button>
            <button class="quiz-opt" onclick="answerQuiz(2,1,true)">Man-in-the-Middle (MITM) attack</button>
            <button class="quiz-opt" onclick="answerQuiz(2,2,false)">SQL Injection</button>
          </div>
          <div class="quiz-explain" id="qe2">✓ A Man-in-the-Middle (MITM) attack is when an attacker intercepts communication between two parties. The victim thinks they're talking directly to the website — but all traffic passes through the attacker first. Rogue APs make this trivially easy on public WiFi.</div>
        </div>

        <div style="text-align:center;margin-top:20px">
          <button class="btn btn-blue disabled" id="s2-next" onclick="goStage(3)">LEARN TO DEFEND →</button>
        </div>
      </div>
    </div>

    <!-- STAGE 3 -->
    <div class="stage" id="stage3">
      <div class="section-head">
        <div class="sh-icon">🛡️</div>
        <div class="sh-body">
          <h2>STAGE 3 — DEFEND YOURSELF</h2>
          <p>Five real-world scenarios. Make the right call each time to earn your flag.</p>
        </div>
      </div>

      <div class="dc-progress">
        <div class="dp-dot active" id="dp0"></div>
        <div class="dp-dot" id="dp1"></div>
        <div class="dp-dot" id="dp2"></div>
        <div class="dp-dot" id="dp3"></div>
        <div class="dp-dot" id="dp4"></div>
      </div>

      <div class="decision-arena">

        <div class="decision-card active" id="dc0">
          <div class="dc-num">DECISION 01 / 05</div>
          <div class="dc-situation">You're at a café in Bugis Junction. You want to save data. There's a WiFi network called "Kopi_Place_Free". Before connecting, what's the smartest move?</div>
          <div class="dc-choices">
            <button class="dc-choice" onclick="answerDecision(0,true,this)">Ask the staff: "What's your exact WiFi name and password?" — then connect to only that one</button>
            <button class="dc-choice" onclick="answerDecision(0,false,this)">Connect to the strongest open signal — if it's the café's, it's probably fine</button>
            <button class="dc-choice" onclick="answerDecision(0,false,this)">Check if the name looks professional — "Kopi_Place_Free" sounds legit</button>
          </div>
          <div class="dc-consequence" id="dcc0">
            <div class="cons-label"></div>
            <div class="cons-text"></div>
          </div>
          <button class="btn btn-outline btn-sm dc-next-btn disabled" id="dn0" onclick="nextDecision(0)">NEXT DECISION →</button>
        </div>

        <div class="decision-card" id="dc1">
          <div class="dc-num">DECISION 02 / 05</div>
          <div class="dc-situation">You're connected to VivoCity_Guest (legit WPA2). You need to check your POSB bank balance. What do you do?</div>
          <div class="dc-choices">
            <button class="dc-choice" onclick="answerDecision(1,false,this)">Use the mall WiFi — the POSB app is secure and uses HTTPS anyway</button>
            <button class="dc-choice" onclick="answerDecision(1,true,this)">Switch off WiFi and use your 4G/5G mobile data instead</button>
            <button class="dc-choice" onclick="answerDecision(1,false,this)">Open a private (incognito) tab in Chrome — that keeps banking safe</button>
          </div>
          <div class="dc-consequence" id="dcc1">
            <div class="cons-label"></div>
            <div class="cons-text"></div>
          </div>
          <button class="btn btn-outline btn-sm dc-next-btn disabled" id="dn1" onclick="nextDecision(1)">NEXT DECISION →</button>
        </div>

        <div class="decision-card" id="dc2">
          <div class="dc-num">DECISION 03 / 05</div>
          <div class="dc-situation">You previously connected to "Starbucks_WiFi" at Tampines. Your phone now says "Starbucks_WiFi available — connect automatically?" You're not in Starbucks.</div>
          <div class="dc-choices">
            <button class="dc-choice" onclick="answerDecision(2,false,this)">Accept — it must be a Starbucks nearby that you can't see</button>
            <button class="dc-choice" onclick="answerDecision(2,true,this)">Tap "Forget This Network" and decline. Investigate first.</button>
            <button class="dc-choice" onclick="answerDecision(2,false,this)">Connect but don't open any apps — just having WiFi is safe</button>
          </div>
          <div class="dc-consequence" id="dcc2">
            <div class="cons-label"></div>
            <div class="cons-text"></div>
          </div>
          <button class="btn btn-outline btn-sm dc-next-btn disabled" id="dn2" onclick="nextDecision(2)">NEXT DECISION →</button>
        </div>

        <div class="decision-card" id="dc3">
          <div class="dc-num">DECISION 04 / 05</div>
          <div class="dc-situation">You need to use public WiFi regularly for school research. You want extra protection. Which tool actually helps?</div>
          <div class="dc-choices">
            <button class="dc-choice" onclick="answerDecision(3,false,this)">Incognito / Private browsing mode — it hides your activity</button>
            <button class="dc-choice" onclick="answerDecision(3,false,this)">A strong device password — that stops attackers on the network</button>
            <button class="dc-choice" onclick="answerDecision(3,true,this)">A VPN (Virtual Private Network) — encrypts all traffic before it leaves your device</button>
          </div>
          <div class="dc-consequence" id="dcc3">
            <div class="cons-label"></div>
            <div class="cons-text"></div>
          </div>
          <button class="btn btn-outline btn-sm dc-next-btn disabled" id="dn3" onclick="nextDecision(3)">NEXT DECISION →</button>
        </div>

        <div class="decision-card" id="dc4">
          <div class="dc-num">DECISION 05 / 05</div>
          <div class="dc-situation">You're on public WiFi and need to log into your school portal. The URL bar shows: <code style="color:var(--pink);font-size:0.85em">http://crestportal.edu.sg/login</code> — no padlock. What do you do?</div>
          <div class="dc-choices">
            <button class="dc-choice" onclick="answerDecision(4,false,this)">Log in quickly and log out immediately — faster = safer</button>
            <button class="dc-choice" onclick="answerDecision(4,false,this)">Log in — it's the school portal, it must be safe</button>
            <button class="dc-choice" onclick="answerDecision(4,true,this)">Close the page. Use mobile data and try again — or report the HTTP issue to the school IT team.</button>
          </div>
          <div class="dc-consequence" id="dcc4">
            <div class="cons-label"></div>
            <div class="cons-text"></div>
          </div>
          <button class="btn btn-blue dc-next-btn disabled" id="dn4" onclick="showFlag()">REVEAL FLAG 🏁</button>
        </div>

      </div>

      <div class="flag-card" id="flag-card">
        <h2>🛡️ MISSION COMPLETE</h2>
        <p>You've mastered WiFi security. You now know how rogue access points work, how packet sniffing exposes unencrypted data, and how to protect yourself on any public network.</p>
        <div class="flag-value">FLAG{w1f1_d4ng3r_z0n3_stay_s4f3_sg}</div>
        <div class="debrief-box">
          <h3>KEY LESSONS</h3>
          <ul>
            <li>→ Open (no-password) networks let anyone sniff your traffic</li>
            <li>→ Evil twins mimic real network names — always verify with staff</li>
            <li>→ HTTP = plaintext — your credentials are visible to any network sniffer</li>
            <li>→ HTTPS/TLS encrypts data — look for the padlock icon always</li>
            <li>→ "Forget" saved networks you don't use — auto-connect is an attack vector</li>
            <li>→ Use 4G/5G for banking and sensitive accounts — not public WiFi</li>
            <li>→ A VPN encrypts everything before it leaves your device</li>
            <li>→ Incognito mode does NOT protect you from network-level attacks</li>
          </ul>
        </div>
        <div class="flag-nav">
          <a href="/game6-dm-trap/" class="btn btn-blue">NEXT GAME: DM TRAP →</a>
          <a href="/" class="btn btn-outline">← HOME</a>
        </div>
      </div>
    </div>

  </div><!-- .game-wrap -->
</div><!-- #wifi-game -->

<script>
// ---- State ----
const gs = {
  flaggedCorrect: new Set(),
  flaggedWrong: new Set(),
  quizDone: [false, false, false],
  dcDone: [false, false, false, false, false],
  currentDc: 0,
  attackRunning: false,
};

const SUSPICIOUS = new Set([0, 4, 5]);

// ---- Stage Navigation ----
function goStage(n) {
  document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
  document.getElementById('stage' + n).classList.add('active');
  ['sn1','sn2','sn3'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.remove('active','done');
    if (i + 1 < n) el.classList.add('done');
    else if (i + 1 === n) el.classList.add('active');
  });
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ---- Stage 1: WiFi ----
let activeVerdictIdx = null;

function inspectWifi(idx) {
  // Verdict only shown after flagging — do nothing on bare row tap
}

function flagWifi(idx, isSuspicious) {
  const btn = document.getElementById('wb' + idx);
  const item = document.getElementById('wi' + idx);

  if (isSuspicious) {
    if (gs.flaggedCorrect.has(idx)) {
      // unflag
      gs.flaggedCorrect.delete(idx);
      btn.classList.remove('flagged');
      item.classList.remove('flagged');
    } else {
      gs.flaggedCorrect.add(idx);
      btn.classList.add('flagged');
      btn.textContent = 'Flagged ✓';
      item.classList.add('flagged');
      // Show verdict
      document.getElementById('wv' + idx).classList.add('show');
      activeVerdictIdx = idx;
    }
  } else {
    // Safe network — gentle feedback
    btn.classList.add('safe-marked');
    btn.textContent = 'Safe ✓';
    item.classList.add('safe');
    document.getElementById('wv' + idx).classList.add('show');
    activeVerdictIdx = idx;
    setTimeout(() => {
      btn.classList.remove('safe-marked');
      btn.textContent = 'Flag';
      item.classList.remove('safe');
    }, 2000);
  }

  document.getElementById('flag-count').textContent = gs.flaggedCorrect.size;

  if (gs.flaggedCorrect.size >= 3) {
    document.getElementById('s1-next').classList.remove('disabled');
  }
}

// ---- Stage 2: Packet Attack ----
const PACKETS = [
  { delay: 0,    cls: 'at-normal',  text: '[10:32:11] WiFi associated: VivoCity_Free_WiFi (BSSID: de:ad:be:ef:00:01)' },
  { delay: 600,  cls: 'at-normal',  text: '[10:32:12] DHCP: 192.168.1.105 assigned to Jamie\'s iPhone' },
  { delay: 1200, cls: 'at-normal',  text: '[10:32:14] ARP request: 192.168.1.105 → broadcast (who-has 192.168.1.1)' },
  { delay: 2000, cls: 'at-http',    text: '[10:32:15] HTTP GET http://login.mallrewards.sg/' },
  { delay: 2800, cls: 'at-normal',  text: '[10:32:15] HTTP 200 OK — serving login page (unencrypted)' },
  { delay: 4000, cls: 'at-post',    text: '[10:32:18] HTTP POST /login  ← form submitted' },
  { delay: 4600, cls: 'at-cred',    text: '[10:32:18]   username=jamie_tan@gmail.com' },
  { delay: 5000, cls: 'at-cred',    text: '[10:32:18]   password=crestSec4!' },
  { delay: 5400, cls: 'at-captured',text: '[10:32:19] ⚠ CREDENTIALS CAPTURED — saved to harvest.log' },
  { delay: 6600, cls: 'at-normal',  text: '[10:32:21] HTTP GET http://facebook.com/' },
  { delay: 7200, cls: 'at-http',    text: '[10:32:21] 301 Moved Permanently → https://www.facebook.com/' },
  { delay: 8000, cls: 'at-tls',     text: '[10:32:22] TLS 1.3 Handshake initiated...' },
  { delay: 8600, cls: 'at-tls',     text: '[10:32:22] TLS Handshake → [ENCRYPTED — cannot read]' },
  { delay: 9200, cls: 'at-tls',     text: '[10:32:23] All subsequent Facebook traffic: encrypted ✓' },
];

const USER_CHARS  = 'jamie_tan@gmail.com';
const PASS_CHARS  = '••••••••••••';

function startAttack() {
  if (gs.attackRunning) return;
  gs.attackRunning = true;
  document.getElementById('start-attack-btn').style.display = 'none';
  document.getElementById('split-screen').style.display = 'grid';

  // Type username
  let ui = 0, pi = 0;
  const userEl = document.getElementById('typed-user');
  const passEl = document.getElementById('typed-pass');
  userEl.innerHTML = '<span class="typing-cursor">|</span>';

  setTimeout(() => {
    const typeUser = setInterval(() => {
      userEl.textContent = USER_CHARS.slice(0, ++ui);
      if (ui >= USER_CHARS.length) {
        clearInterval(typeUser);
        // Start typing password after delay
        setTimeout(() => {
          passEl.innerHTML = '<span class="typing-cursor">|</span>';
          const typePass = setInterval(() => {
            passEl.textContent = PASS_CHARS.slice(0, ++pi);
            if (pi >= PASS_CHARS.length) clearInterval(typePass);
          }, 80);
        }, 400);
      }
    }, 60);
  }, 1500);

  // Packet feed
  const feed = document.getElementById('attacker-feed');
  PACKETS.forEach(pkt => {
    setTimeout(() => {
      const line = document.createElement('div');
      line.className = 'at-line ' + pkt.cls;
      line.textContent = pkt.text;
      feed.appendChild(line);
      feed.scrollTop = feed.scrollHeight;

      // Show quiz after last packet
      if (pkt === PACKETS[PACKETS.length - 1]) {
        setTimeout(() => {
          document.getElementById('s2-quiz').classList.add('show');
          document.getElementById('s2-quiz').scrollIntoView({behavior:'smooth', block:'start'});
        }, 800);
      }
    }, pkt.delay);
  });
}

const QUIZ_DATA = [
  { correct: 1, explains: [null, "qe0", null] },
  { correct: 2, explains: [null, null, "qe1"] },
  { correct: 1, explains: [null, "qe2", null] },
];

function answerQuiz(qIdx, optIdx, isCorrect) {
  if (gs.quizDone[qIdx]) return;
  gs.quizDone[qIdx] = true;

  const qq = document.getElementById('qq' + qIdx);
  qq.querySelectorAll('.quiz-opt').forEach((b, i) => {
    b.disabled = true;
    if (i === QUIZ_DATA[qIdx].correct) b.classList.add('correct');
    else if (i === optIdx && !isCorrect) b.classList.add('wrong');
  });

  document.getElementById('qe' + qIdx).classList.add('show');

  if (gs.quizDone.every(Boolean)) {
    document.getElementById('s2-next').classList.remove('disabled');
  }
}

// ---- Stage 3: Decisions ----
const DC_DATA = [
  {
    correct: true,
    good: { label: '✓ CORRECT', text: 'Verifying the exact WiFi name with staff is the single best habit. Attackers can\'t know the exact name the staff will give you in person. If the staff say "VivoCity_Guest — it needs a password", you know any open network with a similar name is fake.' },
    bad: { label: '✗ WRONG', text: 'Signal strength has nothing to do with legitimacy. The attacker positions themselves to have the strongest signal on purpose. And a professional-sounding name is trivially easy to fake.' }
  },
  {
    correct: true,
    good: { label: '✓ CORRECT', text: 'Even legitimate public WiFi (WPA2) can be sniffed at the access point level. The router itself can log your traffic. Mobile data (4G/5G) goes directly from your SIM to your telco\'s encrypted tunnel — no shared network, no snooping possible.' },
    bad: { label: '✗ WRONG', text: 'While HTTPS does protect the content of your banking session, network metadata (timing, request sizes, IP lookups) can still be logged. And incognito mode only hides local browser history — it does absolutely nothing to network-level traffic.' }
  },
  {
    correct: true,
    good: { label: '✓ CORRECT', text: 'Auto-connect means your phone automatically joins any network with the exact same SSID (name). Attackers use this: they broadcast a hotspot named "Starbucks_WiFi" anywhere, and every nearby phone that previously connected to a Starbucks joins automatically. "Forget Network" breaks this.' },
    bad: { label: '✗ WRONG', text: 'Having WiFi on but "not opening apps" is a misconception. Your phone constantly sends background traffic — app updates, push notifications, OS heartbeats. All of this is visible to the attacker the moment you connect.' }
  },
  {
    correct: true,
    good: { label: '✓ CORRECT', text: 'A VPN (Virtual Private Network) creates an encrypted tunnel from your device to the VPN server before any traffic hits the local network. Even if an attacker intercepts your packets, they see only encrypted gibberish. This is the real protection on public WiFi.' },
    bad: { label: '✗ WRONG', text: 'Incognito mode is completely unrelated to network security — it only stops your local browser from saving history, cookies, and form data. Your device password protects against physical access, not network snooping.' }
  },
  {
    correct: true,
    good: { label: '✓ CORRECT', text: 'HTTP in the URL bar + public WiFi = guaranteed credential exposure. Even if you log in and out in 3 seconds, the packet with your password was captured the moment you hit submit. Switch to mobile data, or try adding "https://" manually. If the school site doesn\'t support HTTPS, report it to the IT team immediately.' },
    bad: { label: '✗ WRONG', text: '"Quickly logging out" doesn\'t help — your credentials were captured the instant the POST request was sent. Speed is irrelevant. The data left your device in plaintext. And "it\'s the school portal" means nothing — HTTP is HTTP regardless of who owns the server.' }
  }
];

function answerDecision(idx, isCorrect, btn) {
  if (gs.dcDone[idx]) return;
  gs.dcDone[idx] = true;

  const card = document.getElementById('dc' + idx);
  card.querySelectorAll('.dc-choice').forEach(b => {
    b.classList.add('locked');
  });
  btn.classList.add(isCorrect ? 'chose-correct' : 'chose-wrong');

  const cons = document.getElementById('dcc' + idx);
  const data = isCorrect ? DC_DATA[idx].good : DC_DATA[idx].bad;
  cons.querySelector('.cons-label').textContent = data.label;
  cons.querySelector('.cons-text').textContent = data.text;
  cons.classList.add('show', isCorrect ? 'good' : 'bad');

  const nextBtn = document.getElementById('dn' + idx);
  nextBtn.classList.remove('disabled');
}

function nextDecision(idx) {
  document.getElementById('dc' + idx).classList.remove('active');
  document.getElementById('dp' + idx).classList.remove('active');
  document.getElementById('dp' + idx).classList.add('done');

  const nextIdx = idx + 1;
  document.getElementById('dc' + nextIdx).classList.add('active');
  document.getElementById('dp' + nextIdx).classList.add('active');
}

function showFlag() {
  document.getElementById('dc4').classList.remove('active');
  document.getElementById('dp4').classList.add('done');
  document.getElementById('flag-card').classList.add('show');
  document.getElementById('flag-card').scrollIntoView({behavior:'smooth', block:'center'});
  launchConfetti();
}

// ---- Confetti ----
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const pieces = Array.from({length: 120}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: 4 + Math.random() * 6,
    d: 1 + Math.random() * 2,
    color: ['#00b4ff','#ff2d78','#00ff88','#ffb700','#ffffff'][Math.floor(Math.random()*5)],
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
    if (frame < 300) requestAnimationFrame(animate);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  };
  animate();
}
</script>
