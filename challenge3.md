---
layout: default
title: Challenge 03 — CTF Console
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
  --orange: #ff6b00;
  --root-color: #ff4444;
  --mary-color: #4488ff;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Space Mono', 'Courier New', monospace;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  font-size: 14px;
  line-height: 1.5;
}

/* Subtle scanlines */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    0deg, transparent, transparent 2px,
    rgba(57,255,20,0.015) 2px, rgba(57,255,20,0.015) 4px
  );
  pointer-events: none;
  z-index: 9998;
}

.safety-ribbon {
  background: var(--orange);
  color: #000;
  text-align: center;
  padding: 8px;
  font-size: 0.72em;
  font-weight: 700;
  letter-spacing: 3px;
  position: sticky;
  top: 0;
  z-index: 100;
  animation: ribbon-pulse 3s ease-in-out infinite;
}
@keyframes ribbon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.75; }
}

.challenge-wrap {
  max-width: 960px;
  margin: 0 auto;
  padding: 30px 20px 60px;
}

/* Header */
.challenge-header {
  text-align: center;
  margin-bottom: 24px;
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
  margin-bottom: 12px;
}
.challenge-header h1 {
  font-size: 1.6em;
  font-weight: 700;
  color: var(--accent);
  text-shadow: 0 0 20px rgba(57,255,20,0.3);
  letter-spacing: 2px;
  margin-bottom: 6px;
}
.challenge-header p { color: var(--muted); font-size: 0.82em; }

/* Status bar */
.status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  padding: 12px 18px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 0.8em;
}
.user-label { color: var(--muted); }
#current-user-indicator {
  color: var(--accent);
  font-weight: 700;
  border: 1px solid var(--accent);
  padding: 2px 10px;
  border-radius: 2px;
  background: rgba(57,255,20,0.06);
  transition: color 0.3s, border-color 0.3s, background 0.3s;
}
#current-user-indicator.root {
  color: var(--root-color);
  border-color: var(--root-color);
  background: rgba(255,68,68,0.06);
}
#current-user-indicator.mary {
  color: var(--mary-color);
  border-color: var(--mary-color);
  background: rgba(68,136,255,0.06);
}
.ctf-badge {
  color: var(--accent2);
  font-size: 0.85em;
  letter-spacing: 2px;
  animation: blink 2s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* Layout */
.main-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 16px;
  align-items: start;
}
@media (max-width: 768px) {
  .main-layout { grid-template-columns: 1fr; }
}

/* Mission panel */
.mission-panel {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent2);
  border-radius: 4px;
  padding: 18px;
}
.mission-panel h3 {
  font-size: 0.74em;
  letter-spacing: 2px;
  color: var(--accent2);
  text-transform: uppercase;
  margin-bottom: 14px;
}
.objective {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: 3px;
  margin-bottom: 8px;
  font-size: 0.8em;
  color: var(--muted);
  transition: color 0.2s, border-color 0.2s;
}
.objective.done {
  color: var(--accent);
  border-color: var(--accent);
}
.obj-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--border);
  margin-top: 4px;
  flex-shrink: 0;
  transition: background 0.2s, box-shadow 0.2s;
}
.objective.done .obj-dot {
  background: var(--accent);
  box-shadow: 0 0 6px rgba(57,255,20,0.5);
}

.guide-section {
  margin-top: 16px;
}
.guide-section h4 {
  font-size: 0.72em;
  letter-spacing: 2px;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 8px;
}
.guide-entry {
  font-size: 0.76em;
  color: var(--muted);
  line-height: 1.7;
  border-top: 1px solid var(--border);
  padding-top: 10px;
  margin-top: 10px;
}
.guide-entry strong { color: var(--text); }
.guide-entry code {
  color: var(--accent2);
  background: var(--bg3);
  padding: 0 4px;
  border-radius: 2px;
  font-size: 0.95em;
}

/* Control buttons */
.controls {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.ctrl-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--muted);
  padding: 6px 14px;
  font-family: 'Space Mono', monospace;
  font-size: 0.74em;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 3px;
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  text-transform: uppercase;
}
.ctrl-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(57,255,20,0.05);
}

/* Terminal */
.terminal-wrap {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 580px;
}
.terminal-titlebar {
  background: var(--bg2);
  border-bottom: 1px solid var(--border);
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.tbar-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
}
.tbar-dot.r { background: #ff5f56; }
.tbar-dot.y { background: #ffbd2e; }
.tbar-dot.g { background: var(--accent); }
.tbar-title {
  flex: 1;
  text-align: center;
  font-size: 0.72em;
  color: var(--muted);
  letter-spacing: 1px;
}

#terminal-output {
  flex: 1;
  padding: 14px 16px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 13px;
  line-height: 1.6;
  color: var(--accent);
}
#terminal-output::-webkit-scrollbar { width: 6px; }
#terminal-output::-webkit-scrollbar-track { background: var(--bg2); }
#terminal-output::-webkit-scrollbar-thumb { background: var(--border); }
#terminal-output::-webkit-scrollbar-thumb:hover { background: var(--accent); }

.cmd-echo { color: var(--accent); }
.cmd-out { color: #a8d8a8; }
.cmd-err { color: var(--red); }
.cmd-warn { color: var(--yellow); }
.cmd-success { color: var(--accent); font-weight: 700; }
.cmd-info { color: var(--accent2); }
.cmd-root { color: var(--root-color); }
.cmd-mary { color: var(--mary-color); }
.cmd-prompt-out { color: var(--muted); font-style: italic; }

.terminal-input-row {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-top: 1px solid var(--border);
  background: var(--bg2);
}
#term-prompt {
  white-space: nowrap;
  margin-right: 6px;
  font-weight: 700;
  color: var(--accent);
  transition: color 0.2s;
  font-size: 13px;
}
#term-prompt.root { color: var(--root-color); }
#term-prompt.mary { color: var(--mary-color); }
#term-prompt.pw { color: var(--yellow); }

#term-input {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text);
  font-family: 'Space Mono', 'Courier New', monospace;
  font-size: 13px;
  outline: none;
  caret-color: var(--accent);
}
.cursor {
  display: inline-block;
  width: 8px; height: 14px;
  background: var(--accent);
  animation: cursor-blink 1s step-end infinite;
  vertical-align: middle;
  margin-left: 1px;
}
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>

<div class="safety-ribbon">// TRAINING EXERCISE — CHALLENGE 03 — EDUCATIONAL PURPOSES ONLY //</div>

<div class="challenge-wrap">
  <div class="challenge-header">
    <div class="tag">CHALLENGE 03</div>
    <h1>CTF CONSOLE</h1>
    <p>Privilege Escalation via sudo misconfiguration — capture the flag</p>
  </div>

  <div class="status-bar">
    <span class="user-label">ACTIVE USER: <span id="current-user-indicator">student</span></span>
    <span class="ctf-badge">[ CTF MODE ACTIVE ]</span>
  </div>

  <div class="controls">
    <button class="ctrl-btn" onclick="resetMission()">RESET MISSION</button>
    <button class="ctrl-btn" onclick="printHelp()">HELP</button>
  </div>

  <div class="main-layout">
    <!-- Terminal -->
    <div>
      <div class="terminal-wrap">
        <div class="terminal-titlebar">
          <div class="tbar-dot r"></div>
          <div class="tbar-dot y"></div>
          <div class="tbar-dot g"></div>
          <div class="tbar-title">hacklab-ctf — terminal</div>
        </div>
        <div id="terminal-output"></div>
        <div class="terminal-input-row">
          <span id="term-prompt">student@hacklab-ctf:~$&nbsp;</span>
          <input type="text" id="term-input" autocomplete="off" spellcheck="false">
          <span class="cursor"></span>
        </div>
      </div>
    </div>

    <!-- Side panel -->
    <div>
      <div class="mission-panel">
        <h3>// Mission Objectives</h3>
        <div class="objective" id="obj1">
          <div class="obj-dot"></div>
          <span>Discover sudo misconfiguration</span>
        </div>
        <div class="objective" id="obj2">
          <div class="obj-dot"></div>
          <span>Escalate to root via exploit</span>
        </div>
        <div class="objective" id="obj3">
          <div class="obj-dot"></div>
          <span>Crack mary's password &amp; capture flag</span>
        </div>

        <div class="guide-section">
          <h4>// Field Notes</h4>
          <div class="guide-entry">
            <strong>Start here:</strong> Run <code>cve-scanner</code> to identify misconfigurations, then <code>sudo -l</code> to see privileges.
          </div>
          <div class="guide-entry">
            <strong>Priv esc:</strong> The <code>find</code> command with <code>-exec</code> can spawn a shell. If sudo allows it with <code>NOPASSWD</code>, you have root.
          </div>
          <div class="guide-entry">
            <strong>Lateral move:</strong> As root, run <code>hashcracker --target mary</code> then <code>su mary</code>.
          </div>
          <div class="guide-entry">
            <strong>Capture:</strong> As mary, <code>cat flag.txt</code>, then <code>submit-flag</code>.
          </div>
          <div class="guide-entry" style="color:var(--red);">
            <strong>Ethics:</strong> Only test systems you own or have explicit written permission to test.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
const FLAG = "HACKERMAN{sud0_m1sc0nf1g_pr1v_3sc_4nd_l4t3r4l_m0v3m3nt}";
const MARY_PW = "flowers2023";

const state = {
  user: 'student',
  history: [],
  histIdx: -1,
  cveScanned: false,
  isRoot: false,
  pwCracked: false,
  flagRead: false,
  awaitingPw: false,
  awaitingFlag: false,
};

const out = document.getElementById('terminal-output');
const inp = document.getElementById('term-input');
const promptEl = document.getElementById('term-prompt');
const ui = document.getElementById('current-user-indicator');

function print(text, cls = 'cmd-out') {
  const div = document.createElement('div');
  div.className = cls;
  div.style.whiteSpace = 'pre-wrap';
  div.textContent = text;
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

function printRaw(html, cls = 'cmd-out') {
  const div = document.createElement('div');
  div.className = cls;
  div.innerHTML = html;
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

function printPromptEcho(cmd) {
  print(getPrompt() + cmd, 'cmd-echo');
}

function getPrompt() {
  const sym = state.user === 'root' ? '#' : '$';
  return `${state.user}@hacklab-ctf:~${sym} `;
}

function updatePromptUI() {
  if (state.awaitingPw) {
    promptEl.textContent = 'Password: ';
    promptEl.className = 'pw';
  } else if (state.awaitingFlag) {
    promptEl.textContent = 'Flag: ';
    promptEl.className = 'pw';
  } else {
    promptEl.textContent = getPrompt();
    promptEl.className = state.user;
  }
  ui.textContent = state.user;
  ui.className = state.user;
}

function markObj(n) {
  document.getElementById('obj' + n).classList.add('done');
}

// ---- Commands ----

function printHelp() {
  const text = `Available commands:
  RECON
    cve-scanner            Run vulnerability scanner
    sudo -l                List sudo privileges for current user
    find-exploit-info      Explain find command injection

  SYSTEM
    whoami                 Print current user
    id                     Print UID/GID info
    pwd                    Print working directory
    hostname               Print hostname
    uname -a               Print system info
    ls [path]              List directory
    cat [file]             Read file
    history                Show last 10 commands
    clear                  Clear terminal

  EXPLOITATION
    sudo find . -exec /bin/sh \\; -quit   Exploit sudo misconfiguration
    hashcracker --target mary             Crack user hash (requires root)
    su mary                               Switch to mary

  CTF
    submit-flag            Submit the captured flag`;
  if (!state.awaitingPw && !state.awaitingFlag) print(text, 'cmd-info');
}

const COMMANDS = {
  'help': () => printHelp(),
  'whoami': () => print(state.user),
  'pwd': () => print('/home/' + state.user),
  'hostname': () => print('hacklab-ctf'),
  'uname -a': () => print('Linux hacklab-ctf 5.15.0-generic #1 SMP x86_64 GNU/Linux'),
  'id': () => {
    if (state.user === 'root') print('uid=0(root) gid=0(root) groups=0(root)');
    else if (state.user === 'mary') print('uid=1001(mary) gid=1001(mary) groups=1001(mary)');
    else print('uid=1000(student) gid=1000(student) groups=1000(student),27(sudo)');
  },
  'ls': () => {
    if (state.user === 'mary') print('flag.txt\npersonal_data.txt\nDocuments\nDownloads');
    else print('Documents\nDownloads\nDesktop\nctf-tools');
  },
  'ls /home': () => print('student\nmary\nguest'),
  'ls /etc': () => print('hosts\npasswd\nshadow\nsudoers'),
  'cat /etc/passwd': () => print('root:x:0:0:root:/root:/bin/bash\nstudent:x:1000:1000::/home/student:/bin/bash\nmary:x:1001:1001::/home/mary:/bin/bash'),
  'cat /etc/shadow': () => {
    if (state.user !== 'root') { print('cat: /etc/shadow: Permission denied', 'cmd-err'); return; }
    print('root:$6$salt$hash...:19446:0:99999:7:::\nstudent:$y$salt$hash...:19446:0:99999:7:::\nmary:$5$marysalt123$8yHlRHpl5IDzMbNttD3zfmxoBHSQZ7ENFkBGnzVXyI3:19446:0:99999:7:::');
  },
  'cat flag.txt': () => {
    if (state.user !== 'mary') {
      print('cat: flag.txt: No such file or directory', 'cmd-err');
      if (!state.isRoot) print('Hint: You need to escalate privileges first. Try cve-scanner.', 'cmd-warn');
      else if (!state.pwCracked) print('Hint: Crack mary\'s password first with hashcracker --target mary', 'cmd-warn');
      else print('Hint: Switch to mary\'s account with su mary', 'cmd-warn');
      return;
    }
    state.flagRead = true;
    markObj(3);
    print(`FLAG CAPTURED:

${FLAG}

Mission summary:
  [+] Sudo misconfiguration discovered
  [+] Privilege escalation via find -exec
  [+] Password hash cracked (flowers2023)
  [+] Lateral movement to mary
  [+] Flag captured

Run submit-flag to complete the mission.`, 'cmd-success');
  },
  'history': () => {
    const h = state.history.slice(-10);
    if (!h.length) { print('No commands in history.', 'cmd-out'); return; }
    print(h.map((c, i) => `  ${i + 1}  ${c}`).join('\n'));
  },
  'clear': () => { out.innerHTML = ''; },
  'cve-scanner': () => {
    state.cveScanned = true;
    markObj(1);
    print(`VULNERABILITY SCANNER v4.0 — Sudo Configuration Auditor

Scanning for privilege escalation vectors...
[########################################] 100%

CRITICAL MISCONFIGURATIONS DETECTED:

[SUDO-2023-MISC] Dangerous Sudo Rule
  Severity : HIGH (CVSS 7.8)
  Detail   : User 'student' can run /usr/bin/find as root (NOPASSWD)
  Risk     : Command injection via -exec parameter
  Impact   : Arbitrary code execution with root privileges

[PASS-2022-WEAK] Weak Password Hashing
  Severity : MEDIUM (CVSS 5.4)
  Detail   : SHA-256 used for mary's password (fast hash, not password hash)
  Risk     : Dictionary attack likely to succeed

Next steps:
  1. Run sudo -l to confirm the sudo rule
  2. Run find-exploit-info to understand the exploit
  3. Execute the sudo misconfiguration exploit`, 'cmd-warn');
  },
  'sudo -l': () => {
    print(`Matching Defaults entries for student on hacklab-ctf:
    env_reset, mail_badpass

User student may run the following commands on hacklab-ctf:
    (root) NOPASSWD: /usr/bin/find

RISK: find with -exec can spawn arbitrary processes.
      When run as root via sudo, those processes have root privileges.
TIP:  sudo find . -exec /bin/sh \\; -quit`);
  },
  'find-exploit-info': () => {
    print(`FIND COMMAND INJECTION — EDUCATIONAL REFERENCE

  The find command's -exec flag runs a program for every file it finds.
  When find itself runs as root (via sudo), the child processes inherit root.

  Exploit:
    sudo find . -exec /bin/sh \\; -quit

  Breakdown:
    sudo find .          → find runs as root
    -exec /bin/sh \\;   → spawn a shell for each found file
    -quit               → stop after the first match (one shell is enough)

  Result: Interactive root shell obtained.

  Defense:
    • Never grant sudo on find (or any command with -exec support)
    • Use the sudoers 'Cmnd_Alias' with full argument restrictions
    • Prefer least-privilege — grant only what is strictly necessary
    • Audit sudoers regularly`, 'cmd-info');
  },
  'sudo find . -exec /bin/sh \\; -quit': () => {
    if (state.user !== 'student') {
      print('This exploit runs as student using student\'s sudo rights.', 'cmd-err');
      return;
    }
    if (!state.cveScanned) {
      print('Hint: Run cve-scanner first to identify the vulnerability before exploiting it.', 'cmd-warn');
      return;
    }
    state.user = 'root';
    state.isRoot = true;
    markObj(2);
    updatePromptUI();
    print(`Executing: sudo find . -exec /bin/sh \\; -quit

[########################################] 100%

EXPLOITATION SUCCESSFUL

  UID 1000(student) → UID 0(root)
  Sudo allowed find to run as root.
  find -exec spawned /bin/sh with inherited root privileges.

  What happened:
    1. sudo elevated find to run as root
    2. find -exec ran /bin/sh for the first file it encountered
    3. /bin/sh inherited root's UID from the sudo context
    4. -quit stopped find after the first execution

You now have root access. Type whoami to confirm.

Next objective: hashcracker --target mary`, 'cmd-success');
  },
  'hashcracker --target mary': () => {
    if (state.user !== 'root') {
      print('Error: hashcracker requires root privileges.', 'cmd-err');
      if (!state.isRoot) print('Hint: Escalate to root first using the sudo find exploit.', 'cmd-warn');
      return;
    }
    state.pwCracked = true;
    print(`TARGETED HASH CRACKER — mary

  Hash : $5$marysalt123$8yHlRHpl5IDzMbNttD3zfmxoBHSQZ7ENFkBGnzVXyI3
  Algo : SHA-256 (crypt $5$ — fast, unsuitable for password storage)

  Running dictionary attack...
  [########################################] 100%

  Tried: password, 123456, mary123, sunshine, ... (73 candidates)

  CRACKED: flowers2023

Why SHA-256 is weak for passwords:
  bcrypt/Argon2 are deliberately slow — 10,000+ iterations per check.
  SHA-256 is fast by design — attackers can try billions per second.

Next: su mary  (enter password when prompted)`, 'cmd-success');
  },
  'su mary': () => {
    if (!state.pwCracked) {
      print('su: Authentication failure', 'cmd-err');
      if (state.isRoot) print('Hint: First crack mary\'s password with hashcracker --target mary', 'cmd-warn');
      else print('Hint: You need root access first. Exploit the sudo misconfiguration.', 'cmd-warn');
      return;
    }
    // Enter inline password mode
    state.awaitingPw = true;
    updatePromptUI();
    inp.type = 'password';
    print('(Password prompt — input hidden)', 'cmd-prompt-out');
  },
  'submit-flag': () => {
    if (!state.flagRead) {
      print('Error: Capture the flag first.', 'cmd-err');
      if (state.user !== 'mary') print('Hint: Switch to mary and run cat flag.txt', 'cmd-warn');
      else print('Hint: Run cat flag.txt', 'cmd-warn');
      return;
    }
    state.awaitingFlag = true;
    updatePromptUI();
    print('Enter the flag you captured (from cat flag.txt):', 'cmd-prompt-out');
  },
};

function handleCommand(raw) {
  const cmd = raw.trim();
  if (!cmd) return;

  // Password mode
  if (state.awaitingPw) {
    state.awaitingPw = false;
    inp.type = 'text';
    updatePromptUI();
    if (cmd === MARY_PW) {
      state.user = 'mary';
      updatePromptUI();
      print('su: switched to mary', 'cmd-success');
      print('Run ls to see mary\'s files, then cat flag.txt', 'cmd-info');
    } else {
      print('su: Authentication failure', 'cmd-err');
    }
    return;
  }

  // Flag submission mode
  if (state.awaitingFlag) {
    state.awaitingFlag = false;
    updatePromptUI();
    if (cmd === FLAG) {
      print(`MISSION ACCOMPLISHED

  [+] Sudo misconfiguration discovered         COMPLETE
  [+] Privilege escalation to root             COMPLETE
  [+] Password hash cracked                    COMPLETE
  [+] Lateral movement to mary                 COMPLETE
  [+] Flag captured and verified               COMPLETE

ACHIEVEMENT: Privilege Escalation Specialist

You demonstrated:
  • CVE scanning and vulnerability identification
  • Sudo misconfiguration exploitation (CWE-269)
  • Weak password hash cracking (CWE-916)
  • Lateral movement via credential reuse
  • Flag capture in CTF environment`, 'cmd-success');
    } else {
      print('Incorrect flag. Run cat flag.txt again to copy it exactly.', 'cmd-err');
    }
    return;
  }

  // Normal command mode
  state.history.push(cmd);
  state.histIdx = state.history.length;
  printPromptEcho(cmd);

  // Try exact match first
  if (COMMANDS[cmd]) {
    COMMANDS[cmd]();
    return;
  }

  // Try stripping args for ls/cat
  if (cmd.startsWith('ls ')) {
    const key = 'ls ' + cmd.slice(3).trim();
    if (COMMANDS[key]) { COMMANDS[key](); return; }
    COMMANDS['ls']();
    return;
  }
  if (cmd.startsWith('cat ')) {
    const key = cmd;
    if (COMMANDS[key]) { COMMANDS[key](); return; }
    print(`cat: ${cmd.slice(4)}: No such file or directory`, 'cmd-err');
    return;
  }

  // Contextual hints for common mistakes
  const hints = {
    'sudo': 'Try: sudo -l (to see your sudo privileges)',
    'find': 'Try the full command: sudo find . -exec /bin/sh \\; -quit',
    'hashcracker': 'Full command: hashcracker --target mary',
    'su': 'Full command: su mary',
    'cat': 'Specify a file: cat flag.txt',
    'python': 'This is not a Python environment. Try the listed CTF commands.',
    'nano': 'Text editor not available in this simulation.',
    'vim': 'Text editor not available in this simulation.',
    'ssh': 'SSH not available in this simulation.',
    'nc': 'Netcat not available in this simulation.',
  };
  const base = cmd.split(' ')[0];
  if (hints[base]) {
    print(`bash: ${cmd}: command not found`, 'cmd-err');
    print(`Hint: ${hints[base]}`, 'cmd-warn');
  } else {
    print(`bash: ${cmd}: command not found — type 'help' for available commands`, 'cmd-err');
  }
}

// ---- Input handling ----
inp.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = inp.value;
    inp.value = '';
    handleCommand(val);
    setTimeout(() => inp.focus(), 10);
  } else if (e.key === 'ArrowUp' && !state.awaitingPw && !state.awaitingFlag) {
    e.preventDefault();
    if (state.histIdx > 0) {
      state.histIdx--;
      inp.value = state.history[state.histIdx] || '';
    }
  } else if (e.key === 'ArrowDown' && !state.awaitingPw && !state.awaitingFlag) {
    e.preventDefault();
    if (state.histIdx < state.history.length - 1) {
      state.histIdx++;
      inp.value = state.history[state.histIdx] || '';
    } else {
      state.histIdx = state.history.length;
      inp.value = '';
    }
  }
});

document.addEventListener('click', () => inp.focus());

function resetMission() {
  if (!confirm('Reset all mission progress?')) return;
  state.user = 'student';
  state.history = [];
  state.histIdx = -1;
  state.cveScanned = false;
  state.isRoot = false;
  state.pwCracked = false;
  state.flagRead = false;
  state.awaitingPw = false;
  state.awaitingFlag = false;
  inp.type = 'text';
  out.innerHTML = '';
  updatePromptUI();
  document.querySelectorAll('.objective').forEach(o => o.classList.remove('done'));
  boot();
}

function boot() {
  print(`CTF Console — Privilege Escalation Training
${'='.repeat(50)}
User     : student
Host     : hacklab-ctf
Mission  : Capture the flag via sudo misconfiguration

Objectives:
  1. Discover sudo misconfiguration (cve-scanner)
  2. Escalate to root (exploit sudo + find)
  3. Crack mary's password, get flag

Type 'help' for available commands.
`, 'cmd-info');
}

boot();
inp.focus();
</script>
