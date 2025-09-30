<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hackerman CTF Console - Educational Security Training</title>
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #000000;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            line-height: 1.4;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Scanlines effect */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 0, 0.03) 2px,
                rgba(0, 255, 0, 0.03) 4px
            );
            pointer-events: none;
            z-index: 1000;
        }

        /* Safety ribbon */
        .safety-ribbon {
            background: rgba(255, 165, 0, 0.9);
            color: #000;
            text-align: center;
            padding: 8px;
            font-weight: bold;
            font-size: 12px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 999;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
        }

        /* Container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 60px 20px 20px;
            min-height: 100vh;
        }

        /* Header */
        .header {
            text-align: center;
            margin-bottom: 20px;
            border: 2px solid #00ff00;
            padding: 20px;
            background: rgba(0, 255, 0, 0.05);
        }

        .title {
            font-size: 24px;
            margin-bottom: 10px;
            text-shadow: 0 0 10px #00ff00;
        }

        .subtitle {
            font-size: 16px;
            margin-bottom: 15px;
            color: #88ff88;
        }

        .status-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #00ff00;
            flex-wrap: wrap;
            gap: 10px;
        }

        .current-user-display {
            color: #ffff00;
            font-weight: bold;
        }

        #current-user-indicator {
            color: #00ff00;
            padding: 2px 8px;
            border: 1px solid #00ff00;
            background: rgba(0, 255, 0, 0.1);
        }

        #current-user-indicator.root {
            color: #ff4444 !important;
            border-color: #ff4444 !important;
            background: rgba(255, 68, 68, 0.1) !important;
        }

        #current-user-indicator.mary {
            color: #4488ff !important;
            border-color: #4488ff !important;
            background: rgba(68, 136, 255, 0.1) !important;
        }

        .ctf-mode {
            color: #ff0066;
            font-weight: bold;
            animation: blink 1.5s infinite;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.3; }
        }

        /* Control Panel */
        .control-panel {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .control-btn {
            background: rgba(0, 255, 0, 0.1);
            border: 1px solid #00ff00;
            color: #00ff00;
            padding: 8px 16px;
            cursor: pointer;
            font-family: inherit;
            font-size: 12px;
            transition: all 0.3s ease;
        }

        .control-btn:hover {
            background: rgba(0, 255, 0, 0.2);
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }

        .control-btn:active {
            background: rgba(0, 255, 0, 0.3);
        }

        .control-btn.active {
            background: rgba(0, 255, 0, 0.2);
            box-shadow: inset 0 0 5px rgba(0, 255, 0, 0.5);
        }

        /* Mission Progress */
        .mission-progress {
            background: rgba(0, 255, 0, 0.05);
            border: 1px solid #00ff00;
            padding: 15px;
            margin-bottom: 20px;
        }

        .mission-progress h3 {
            color: #ffff00;
            margin-bottom: 10px;
            text-align: center;
        }

        .objectives {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .objective {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 5px;
            transition: all 0.3s ease;
        }

        .objective-icon {
            font-size: 16px;
            min-width: 20px;
        }

        .objective.completed .objective-icon {
            color: #00ff00;
        }

        .objective.completed .objective-text {
            color: #88ff88;
            text-decoration: line-through;
        }

        .objective-text {
            font-size: 14px;
        }

        /* Terminal Container */
        .terminal-container {
            border: 2px solid #00ff00;
            background: rgba(0, 0, 0, 0.8);
            position: relative;
            height: 600px;
            display: flex;
            flex-direction: column;
        }

        /* Terminal */
        .terminal {
            display: flex;
            flex-direction: column;
            height: 100%;
            font-family: 'Courier New', monospace;
            font-size: 14px;
        }

        .terminal-output {
            flex: 1;
            padding: 15px;
            overflow-y: auto;
            overflow-x: auto;
            white-space: pre-wrap;
            word-wrap: break-word;
            max-height: calc(600px - 50px);
        }

        .terminal-output::-webkit-scrollbar {
            width: 8px;
        }

        .terminal-output::-webkit-scrollbar-track {
            background: rgba(0, 255, 0, 0.1);
        }

        .terminal-output::-webkit-scrollbar-thumb {
            background: #00ff00;
        }

        .welcome-message {
            color: #ffff00;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(0, 255, 0, 0.3);
        }

        .command-line {
            margin: 5px 0;
        }

        .command-input-display {
            color: #88ff88;
        }

        .command-output {
            color: #00ff00;
            margin-left: 0;
            white-space: pre-wrap;
        }

        .error-output {
            color: #ff4444;
        }

        .success-output {
            color: #44ff44;
        }

        .warning-output {
            color: #ffaa00;
        }

        /* Terminal Input */
        .terminal-input-line {
            display: flex;
            align-items: center;
            padding: 10px 15px;
            border-top: 1px solid rgba(0, 255, 0, 0.3);
            background: rgba(0, 255, 0, 0.02);
        }

        .prompt {
            color: #00ff00;
            margin-right: 5px;
            font-weight: bold;
            white-space: nowrap;
        }

        .prompt.root {
            color: #ff4444;
        }

        .prompt.mary {
            color: #4488ff;
        }

        #terminal-input {
            flex: 1;
            background: transparent;
            border: none;
            color: #00ff00;
            font-family: inherit;
            font-size: inherit;
            outline: none;
            caret-color: #00ff00;
        }

        #terminal-input:focus {
            background: rgba(0, 255, 0, 0.05);
        }

        /* Cursor animation */
        .cursor {
            display: inline-block;
            background-color: #00ff00;
            animation: cursor-blink 1s infinite;
            width: 8px;
            height: 14px;
            margin-left: 2px;
        }

        @keyframes cursor-blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }

        /* Guide Panel */
        .guide-panel {
            position: fixed;
            top: 60px;
            right: -400px;
            width: 380px;
            height: calc(100vh - 80px);
            background: rgba(0, 0, 0, 0.95);
            border: 2px solid #00ff00;
            border-right: none;
            padding: 20px;
            overflow-y: auto;
            transition: right 0.3s ease;
            z-index: 500;
        }

        .guide-panel.open {
            right: 0;
        }

        .guide-panel h3 {
            color: #ffff00;
            margin-bottom: 15px;
            text-align: center;
        }

        .guide-content {
            color: #88ff88;
            line-height: 1.6;
            white-space: pre-line;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 60px 10px 10px;
            }
            
            .title {
                font-size: 18px;
            }
            
            .subtitle {
                font-size: 14px;
            }
            
            .status-bar {
                justify-content: center;
                text-align: center;
            }
            
            .terminal-container {
                height: 500px;
            }
            
            .guide-panel {
                right: -100%;
                width: 100%;
                top: 60px;
            }
        }

        /* Hidden elements */
        .hidden {
            display: none !important;
        }

        /* Animation classes */
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <!-- Safety Ribbon -->
    <div class="safety-ribbon">
        🎯 Educational CTF Simulation — Learn ethical hacking and CVE exploitation 🎯
    </div>

    <!-- Main Container -->
    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1 class="title">Hackerman Ops Console — CTF Training Simulation</h1>
            <p class="subtitle">Mission: Escalate privileges, crack mary's account, and capture the flag</p>
            <div class="status-bar">
                <span class="current-user-display">Current User: <span id="current-user-indicator">student</span></span>
                <span class="ctf-mode">🚩 CTF MODE ACTIVE 🚩</span>
            </div>
        </header>

        <!-- Control Panel -->
        <div class="control-panel">
            <button id="teacherModeBtn" class="control-btn">
                👨‍🏫 Teacher Mode
            </button>
            <button id="guidePanelBtn" class="control-btn">
                📖 Toggle Guide
            </button>
            <button id="resetMissionBtn" class="control-btn">
                🔄 Reset Mission
            </button>
        </div>

        <!-- Mission Progress -->
        <div class="mission-progress">
            <h3>Mission Objectives:</h3>
            <div class="objectives">
                <div id="objective-1" class="objective">
                    <span class="objective-icon">⭕</span>
                    <span class="objective-text">🔍 Discover system vulnerabilities using CVE scanner</span>
                </div>
                <div id="objective-2" class="objective">
                    <span class="objective-icon">⭕</span>
                    <span class="objective-text">⚡ Exploit SUID binary to gain root access</span>
                </div>
                <div id="objective-3" class="objective">
                    <span class="objective-icon">⭕</span>
                    <span class="objective-text">🚩 Crack mary's password and capture the flag</span>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="main-content">
            <!-- Terminal -->
            <div class="terminal-container">
                <div class="terminal">
                    <div id="terminal-output" class="terminal-output" role="log" aria-live="polite" aria-label="Terminal output">
                        <div class="welcome-message">
                            🚩 Welcome to the CTF Training Simulation! 🚩<br>
                            Current User: student | Objective: Capture the Flag<br>
                            <br>
                            🎯 Your mission: Escalate privileges, crack mary's account, and capture the flag<br>
                            🔍 Start by running 'cve-scanner' to identify system vulnerabilities<br>
                            <br>
                            Type 'help' for available commands.<br>
                            <br>
                        </div>
                    </div>
                    <div class="terminal-input-line">
                        <span id="terminal-prompt" class="prompt">student@hacklab-ctf:~$ </span>
                        <input type="text" id="terminal-input" autocomplete="off" spellcheck="false" aria-label="Terminal input">
                        <span class="cursor"></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Guide Panel -->
        <div class="guide-panel">
            <h3>🛡️ Educational Guide</h3>
            <div class="guide-content">
                <strong>CVE & Vulnerability Management:</strong>
                • CVE = Common Vulnerabilities and Exposures database
                • CVSS scoring system rates vulnerability severity (0.0-10.0)
                • CVE scanning helps identify system weaknesses
                • Regular patching prevents exploitation
                • Responsible disclosure protects users

                <strong>Privilege Escalation:</strong>
                • SUID bit allows programs to run with owner privileges
                • Buffer overflows can hijack program execution
                • Local privilege escalation gains higher system access
                • Proper input validation prevents overflow attacks
                • Least privilege principle limits attack impact

                <strong>Lateral Movement:</strong>
                • Moving between accounts after initial compromise
                • Password cracking reveals weak authentication
                • Hash analysis identifies vulnerable algorithms
                • Strong passwords + modern hashing resist attacks
                • Multi-factor authentication adds security layers

                <strong>Ethical Guidelines:</strong>
                • Only test systems you own or have explicit permission
                • Report vulnerabilities responsibly
                • Use skills to improve security, not exploit it
                • Follow all applicable laws and regulations
            </div>
        </div>
    </div>

    <script>
        // Application State Management
        const appState = {
            currentUser: 'student',
            commandHistory: [],
            historyIndex: -1,
            missionProgress: [false, false, false],
            cveDiscovered: false,
            rootAccess: false,
            passwordCracked: false,
            flagCaptured: false,
            teacherMode: false,
            guidePanelOpen: false
        };

        // Application Data
        const appData = {
            flag: "HACKERMAN{pr1v_3sc_4nd_l4t3r4l_m0v3m3nt_c0mpl3t3}",
            crackedPassword: "flowers2023",
            exploitCommand: "/usr/bin/vulnerable-suid overflow-exploit"
        };

        // Command Definitions
        const commands = {
            // Basic commands available to all users
            help: () => {
                return `Available commands:
  Basic Commands:
    help - Show this help message
    whoami - Display current user
    hostname - Display system hostname
    uname -a - Display system information
    id - Display user and group IDs
    ls [dir] - List directory contents
    cat [file] - Display file contents
    clear - Clear terminal screen
    history - Show command history
  
  Security Assessment Tools:
    cve-scanner - Launch vulnerability scanner
    cve-scanner --full-scan - Comprehensive system assessment
    suid-finder - Find SUID binaries for privilege escalation
    exploit-db --search suid - Search SUID exploitation methods
  
  Advanced Operations:
    /usr/bin/vulnerable-suid overflow-exploit - Execute privilege escalation
    find / -perm -4000 2>/dev/null - Find SUID binaries (requires root)
    hashcracker --target mary - Crack mary's password (requires root)
    su mary - Switch to mary user (requires password)
    submit-flag - Submit captured flag for completion`;
            },

            whoami: () => appState.currentUser,
            
            hostname: () => 'hacklab-ctf',
            
            'uname -a': () => 'Linux hacklab-ctf 5.15.0-generic #1 SMP Mon Jan 1 12:00:00 UTC 2024 x86_64 x86_64 x86_64 GNU/Linux',
            
            id: () => {
                switch(appState.currentUser) {
                    case 'root':
                        return 'uid=0(root) gid=0(root) groups=0(root)';
                    case 'mary':
                        return 'uid=1001(mary) gid=1001(mary) groups=1001(mary),100(users)';
                    default:
                        return 'uid=1000(student) gid=1000(student) groups=1000(student),27(sudo)';
                }
            },
            
            ls: (args) => {
                const path = args ? args.trim() : '';
                if (path === '/home') {
                    return 'student\nmary\nguest';
                } else if (path === '/etc') {
                    return 'group\nhosts\nos-release\npasswd\nshadow\nsudo\nsudoers';
                } else if (appState.currentUser === 'mary' && !path) {
                    return 'flag.txt\npersonal_data.txt\nimportant_docs\n.bash_history\nDocuments\nDownloads';
                } else {
                    return 'Documents\nDownloads\nDesktop\nctf-tools';
                }
            },
            
            'cat /etc/passwd': () => {
                return 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nstudent:x:1000:1000:Student:/home/student:/bin/bash\nmary:x:1001:1001:Mary Johnson:/home/mary:/bin/bash\nguest:x:1002:1002:Guest User:/home/guest:/bin/bash';
            },
            
            'cat /etc/shadow': () => {
                if (appState.currentUser !== 'root') {
                    return 'cat: /etc/shadow: Permission denied';
                }
                return 'root:$6$rootsalt$hashdatahere123educational456:19446:0:99999:7:::\nstudent:$y$studentsalt$hashdatahere789educational012:19446:0:99999:7:::\nmary:$5$marysalt123$8yHlRHpl5IDzMbNttD3zfmxoBHSQZ7ENFkBGnzVXyI3:19446:0:99999:7:::\nguest:$6$guestsalt$hashdatahere345educational678:19446:0:99999:7:::';
            },
            
            'cat flag.txt': () => {
                if (appState.currentUser !== 'mary') {
                    return 'cat: flag.txt: No such file or directory';
                }
                appState.flagCaptured = true;
                updateMissionProgress(2, true);
                return '🚩🚩🚩 CONGRATULATIONS! FLAG CAPTURED! 🚩🚩🚩\n\nHACKERMAN{pr1v_3sc_4nd_l4t3r4l_m0v3m3nt_c0mpl3t3}\n\n🎯 Mission Summary:\n✅ CVE vulnerability scanning\n✅ SUID privilege escalation\n✅ Password hash cracking\n✅ Lateral movement to target account\n✅ FLAG CAPTURED!\n\n💡 You successfully demonstrated:\n• Vulnerability assessment techniques\n• Local privilege escalation\n• Password security analysis\n• Lateral movement between accounts\n\n🎓 Skills learned:\n• CVE database usage\n• SUID binary exploitation\n• Hash cracking methodology\n• Ethical hacking principles\n\n🏆 Use \'submit-flag\' to complete your mission!';
            },
            
            history: () => {
                return appState.commandHistory.slice(-10).map((cmd, index) => `${index + 1}  ${cmd}`).join('\n');
            },
            
            clear: () => {
                const output = document.getElementById('terminal-output');
                output.innerHTML = '';
                return '';
            },
            
            // CVE Scanner Commands
            'cve-scanner': () => {
                updateMissionProgress(0, true);
                appState.cveDiscovered = true;
                return '🔍 CVE SCANNER v3.2 - EDUCATIONAL MODE 🔍\n\nScanning system for known vulnerabilities...\n[████████████████████████████████████████] 100%\n\n🚨 CRITICAL VULNERABILITIES DETECTED:\n\n📋 CVE-2023-1234: SUID Binary Privilege Escalation\n   Severity: HIGH (CVSS 7.8)\n   Description: Local privilege escalation via vulnerable SUID binary\n   Affected Binary: /usr/bin/vulnerable-suid\n   Exploitation: Buffer overflow allows arbitrary command execution\n   \n📋 CVE-2022-5678: Weak Password Hashing\n   Severity: MEDIUM (CVSS 5.4)\n   Description: SHA-256 used for password storage (fast hashing)\n   Affected: User account \'mary\'\n   Risk: Dictionary attacks may succeed against weak passwords\n\n🎯 EXPLOITATION RECOMMENDATIONS:\n1. Use suid-finder to locate exploitable binaries\n2. Research CVE-2023-1234 exploitation techniques\n3. Audit user password strength after privilege escalation\n\n⚠️  Educational Note: Always obtain authorization before testing!';
            },
            
            'suid-finder': () => {
                return '🔍 SUID BINARY SCANNER - Educational Tool\n\nScanning for SUID binaries...\n[████████████████████████████████████████] 100%\n\n📋 DISCOVERED SUID BINARIES:\n/usr/bin/sudo (expected - system binary)\n/usr/bin/passwd (expected - system binary)\n/usr/bin/mount (expected - system binary)\n/usr/bin/vulnerable-suid (⚠️ SUSPICIOUS - matches CVE-2023-1234)\n\n🎯 EXPLOITATION ANALYSIS:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\nBinary: /usr/bin/vulnerable-suid\nRisk: HIGH - Known buffer overflow vulnerability\nCVE: CVE-2023-1234\nExploit Method: Buffer overflow → shell execution\n\n⚡ EXPLOITATION COMMAND:\n/usr/bin/vulnerable-suid overflow-exploit\n\n💡 Educational Note: This simulates finding a real SUID vulnerability.\nIn practice, you\'d research the specific CVE for exploitation details.\n\n🎯 Try running: /usr/bin/vulnerable-suid overflow-exploit';
            },
            
            // Privilege Escalation Command - THE CRITICAL FIX
            '/usr/bin/vulnerable-suid overflow-exploit': () => {
                if (appState.currentUser !== 'student') {
                    return 'This exploit only works from a student account.';
                }
                
                // CRITICAL: Actually change the user state to root
                appState.currentUser = 'root';
                appState.rootAccess = true;
                updateMissionProgress(1, true);
                
                // Update UI elements
                updatePrompt();
                updateUserIndicator();
                
                return '🚨 SIMULATED PRIVILEGE ESCALATION EXPLOIT 🚨\n\n⚡ Executing buffer overflow exploit...\n[████████████████████████████████████████] 100%\n\n✅ EXPLOITATION SUCCESSFUL!\n🔓 Privilege escalation complete\n🎯 UID changed: 1000(student) → 0(root)\n\n⚠️  WARNING: You now have root access (simulated)\n⚠️  Educational simulation - no real system compromised\n\nRoot shell obtained. Type \'whoami\' to confirm.\n\n💡 What happened:\n• Buffer overflow in SUID binary\n• Overwrote return address\n• Executed shellcode to spawn root shell\n• Inherited SUID privileges (setuid root)\n\n🎯 Next objective: Crack mary\'s password using root access';
            },
            
            // Root-only commands
            'hashcracker --target mary': () => {
                if (appState.currentUser !== 'root') {
                    return 'Error: hashcracker requires root privileges';
                }
                
                appState.passwordCracked = true;
                
                return '🔍 TARGETED HASH CRACKING - Mary\'s Account\n\n🎯 Target: mary\nHash: $5$marysalt123$8yHlRHpl5IDzMbNttD3zfmxoBHSQZ7ENFkBGnzVXyI3\n\n📊 HASH ANALYSIS:\n• Algorithm: SHA-256 (indicated by $5$)\n• Salt: marysalt123\n• Security Assessment: WEAK (fast hashing algorithm)\n\n🔄 DICTIONARY ATTACK INITIATED:\n[████████████████████████████████████████] 100%\n\nTesting common passwords for user \'mary\'...\n❌ password (attempt 1)\n❌ 123456 (attempt 2)\n❌ mary123 (attempt 15)\n❌ sunshine (attempt 47)\n✅ flowers2023 (attempt 73)\n\n🎉 PASSWORD CRACKED!\n👤 User: mary\n🔑 Password: flowers2023\n⏱️  Time: 0.12 seconds (simulated)\n📊 Attempts: 73/14,344,391\n\n💡 Why this worked:\n• SHA-256 is fast (not designed for passwords)\n• \'flowers2023\' appears in common password lists\n• Modern systems use bcrypt/scrypt/Argon2 for better security\n\n🎯 Next: Login as mary using: su mary\n🔑 When prompted, enter password: flowers2023';
            },
            
            'find / -perm -4000 2>/dev/null': () => {
                if (appState.currentUser !== 'root') {
                    return 'find: /: Permission denied';
                }
                return '/usr/bin/sudo\n/usr/bin/passwd\n/usr/bin/mount\n/usr/bin/umount\n/usr/bin/vulnerable-suid\n/usr/bin/newgrp\n/usr/lib/openssh/ssh-keysign';
            },
            
            // User switching
            'su mary': () => {
                if (!appState.passwordCracked) {
                    return 'su: Authentication failure';
                }
                
                // Prompt for password (simulated)
                const password = prompt('Password:');
                if (password === appData.crackedPassword) {
                    appState.currentUser = 'mary';
                    updatePrompt();
                    updateUserIndicator();
                    return 'Successfully switched to user mary';
                } else {
                    return 'su: Authentication failure';
                }
            },
            
            'submit-flag': () => {
                if (!appState.flagCaptured) {
                    return 'Error: You must capture the flag first! Try accessing mary\'s account.';
                }
                
                const flagInput = prompt('Enter the captured flag:');
                if (flagInput === appData.flag) {
                    appState.flagSubmitted = true;
                    return '🎉🎉🎉 MISSION ACCOMPLISHED! 🎉🎉🎉\n\n✅ CVE vulnerability scanning: COMPLETE\n✅ SUID privilege escalation: COMPLETE\n✅ Lateral movement to mary: COMPLETE\n✅ Flag capture: COMPLETE\n\n🏆 ACHIEVEMENT UNLOCKED: CTF Champion 🏆\n🎓 Skills demonstrated:\n   • Vulnerability assessment\n   • Privilege escalation exploitation\n   • Lateral movement techniques\n   • Ethical hacking methodology\n\n📜 Ready for the next challenge?';
                } else {
                    return 'Incorrect flag. Try again.';
                }
            }
        };

        // DOM Elements
        let terminalOutput, terminalInput, currentUserIndicator;

        // Initialize Application
        function initializeApp() {
            terminalOutput = document.getElementById('terminal-output');
            terminalInput = document.getElementById('terminal-input');
            currentUserIndicator = document.getElementById('current-user-indicator');
            
            // Set up event listeners
            setupEventListeners();
            
            // Initialize UI
            updatePrompt();
            updateUserIndicator();
            updateMissionProgress();
        }

        // Event Listeners
        function setupEventListeners() {
            // Terminal input
            terminalInput.addEventListener('keydown', handleTerminalInput);
            
            // Control buttons
            document.getElementById('teacherModeBtn').addEventListener('click', toggleTeacherMode);
            document.getElementById('guidePanelBtn').addEventListener('click', toggleGuidePanel);
            document.getElementById('resetMissionBtn').addEventListener('click', resetMission);
            
            // Focus terminal input
            document.addEventListener('click', () => {
                terminalInput.focus();
            });
            
            terminalInput.focus();
        }

        // Terminal Input Handler
        function handleTerminalInput(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                const command = terminalInput.value.trim();
                if (command) {
                    executeCommand(command);
                    terminalInput.value = '';
                }
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                navigateHistory(-1);
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                navigateHistory(1);
            }
        }

        // Command Execution
        function executeCommand(command) {
            // Add to history
            appState.commandHistory.push(command);
            appState.historyIndex = appState.commandHistory.length;
            
            // Display command
            appendToTerminal(`${getPromptText()}${command}`, 'command-input-display');
            
            // Execute command
            let output;
            if (commands[command]) {
                output = typeof commands[command] === 'function' ? commands[command]() : commands[command];
            } else if (command.includes(' ')) {
                // Handle commands with arguments
                const parts = command.split(' ');
                const baseCommand = parts[0];
                const args = parts.slice(1).join(' ');
                
                if (commands[baseCommand]) {
                    output = typeof commands[baseCommand] === 'function' ? commands[baseCommand](args) : commands[baseCommand];
                } else {
                    output = `Command not found: ${command}`;
                }
            } else {
                output = `Command not found: ${command}`;
            }
            
            // Display output
            if (output) {
                appendToTerminal(output, 'command-output');
            }
            
            // Scroll to bottom
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }

        // Utility Functions
        function appendToTerminal(text, className = '') {
            const div = document.createElement('div');
            div.className = `command-line ${className}`;
            div.textContent = text;
            terminalOutput.appendChild(div);
        }

        function getPromptText() {
            const hostname = 'hacklab-ctf';
            const symbol = appState.currentUser === 'root' ? '#' : '$';
            return `${appState.currentUser}@${hostname}:~${symbol} `;
        }

        function updatePrompt() {
            const prompt = document.querySelector('#terminal-prompt');
            if (prompt) {
                prompt.textContent = getPromptText();
                prompt.className = `prompt ${appState.currentUser}`;
            }
        }

        function updateUserIndicator() {
            if (currentUserIndicator) {
                currentUserIndicator.textContent = appState.currentUser;
                currentUserIndicator.className = `${appState.currentUser}`;
            }
        }

        function updateMissionProgress(index = null, completed = null) {
            if (index !== null && completed !== null) {
                appState.missionProgress[index] = completed;
            }
            
            // Update UI
            for (let i = 0; i < 3; i++) {
                const objective = document.getElementById(`objective-${i + 1}`);
                if (objective) {
                    const icon = objective.querySelector('.objective-icon');
                    if (appState.missionProgress[i]) {
                        objective.classList.add('completed');
                        icon.textContent = '✅';
                    } else {
                        objective.classList.remove('completed');
                        icon.textContent = '⭕';
                    }
                }
            }
        }

        function navigateHistory(direction) {
            if (appState.commandHistory.length === 0) return;
            
            appState.historyIndex += direction;
            
            if (appState.historyIndex < 0) {
                appState.historyIndex = 0;
            } else if (appState.historyIndex >= appState.commandHistory.length) {
                appState.historyIndex = appState.commandHistory.length;
                terminalInput.value = '';
                return;
            }
            
            terminalInput.value = appState.commandHistory[appState.historyIndex] || '';
        }

        // Control Functions
        function toggleTeacherMode() {
            appState.teacherMode = !appState.teacherMode;
            const btn = document.getElementById('teacherModeBtn');
            btn.classList.toggle('active', appState.teacherMode);
            
            if (appState.teacherMode) {
                appendToTerminal('🎓 Teacher Mode Activated - Answers revealed!', 'warning-output');
                appendToTerminal(`Flag: ${appData.flag}`, 'warning-output');
                appendToTerminal(`Mary's Password: ${appData.crackedPassword}`, 'warning-output');
                appendToTerminal(`Exploit Command: ${appData.exploitCommand}`, 'warning-output');
            }
        }

        function toggleGuidePanel() {
            appState.guidePanelOpen = !appState.guidePanelOpen;
            const panel = document.querySelector('.guide-panel');
            const btn = document.getElementById('guidePanelBtn');
            
            if (panel) {
                panel.classList.toggle('open', appState.guidePanelOpen);
            }
            btn.classList.toggle('active', appState.guidePanelOpen);
        }

        function resetMission() {
            if (confirm('Reset mission progress? This will clear all progress.')) {
                // Reset state
                appState.currentUser = 'student';
                appState.missionProgress = [false, false, false];
                appState.cveDiscovered = false;
                appState.rootAccess = false;
                appState.passwordCracked = false;
                appState.flagCaptured = false;
                appState.commandHistory = [];
                appState.historyIndex = -1;
                
                // Clear terminal
                terminalOutput.innerHTML = '';
                
                // Re-initialize
                updatePrompt();
                updateUserIndicator();
                updateMissionProgress();
                
                // Add welcome message
                appendToTerminal('🚩 Mission Reset! Welcome back to the CTF Training Simulation!\n\n🎯 Your mission: Escalate privileges, crack mary\'s account, and capture the flag\n🔍 Start by running \'cve-scanner\' to identify system vulnerabilities\n\nType \'help\' for available commands.\n', 'welcome-message');
            }
        }

        // Initialize when page loads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
    </script>
</body>
</html>
