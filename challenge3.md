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
        🎯 Educational CTF Simulation — Learn ethical hacking with GTFOBins exploitation 🎯
    </div>

    <!-- Main Container -->
    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1 class="title">Hackerman Ops Console — CTF Training Simulation</h1>
            <p class="subtitle">Mission: Escalate privileges using GTFOBins, crack mary's account, and capture the flag</p>
            <div class="status-bar">
                <span class="current-user-display">Current User: <span id="current-user-indicator">student</span></span>
                <span class="ctf-mode">🚩 CTF MODE ACTIVE 🚩</span>
            </div>
        </header>

        <!-- Control Panel -->
        <div class="control-panel">
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
                    <span class="objective-text">🔍 Discover sudo misconfiguration using vulnerability scanner</span>
                </div>
                <div id="objective-2" class="objective">
                    <span class="objective-icon">⭕</span>
                    <span class="objective-text">⚡ Exploit GTFOBins find command to gain root access</span>
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
                            🎯 Your mission: Use GTFOBins techniques to escalate privileges and capture the flag<br>
                            🔍 Start by running 'cve-scanner' to identify misconfigurations<br>
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
                <strong>GTFOBins & Privilege Escalation:</strong>
                • GTFOBins.github.io catalogs Unix binaries for privilege escalation
                • Sudo misconfigurations are common attack vectors
                • The 'find' command can execute arbitrary commands when run with sudo
                • Real attackers use these techniques for privilege escalation

                <strong>Vulnerability Assessment:</strong>
                • CVE scanning identifies system misconfigurations
                • Sudo -l shows what commands can be run as root
                • GTFOBins provides exploitation techniques for legitimate binaries
                • Defense: Follow principle of least privilege

                <strong>Password Security:</strong>
                • Hash analysis identifies vulnerable algorithms
                • Dictionary attacks exploit weak passwords
                • SHA-256 is fast (not designed for password storage)
                • Modern systems use bcrypt/scrypt/Argon2

                <strong>Lateral Movement:</strong>
                • Moving between accounts after initial compromise
                • Password cracking reveals weak authentication
                • Multi-factor authentication adds security layers
                • Account monitoring detects unauthorized access

                <strong>Ethical Guidelines:</strong>
                • Only test systems you own or have explicit permission
                • GTFOBins techniques should be used for authorized testing
                • Report vulnerabilities responsibly
                • Use skills to improve security, not exploit it
                • Follow all applicable laws and regulations

                <strong>Real-World Applications:</strong>
                • Penetration testing uses these techniques legally
                • System administrators should audit sudo configurations
                • Security teams use GTFOBins to identify risks
                • Regular privilege reviews prevent escalation paths
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
            guidePanelOpen: false
        };

        // Application Data
        const appData = {
            flag: "HACKERMAN{gt70b1ns_pr1v_3sc_4nd_l4t3r4l_m0v3m3nt}",
            crackedPassword: "flowers2023",
            exploitCommand: "sudo find . -exec /bin/sh \\; -quit"
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
    sudo -l - List sudo privileges
    gtfobins-lookup [binary] - Check GTFOBins for exploitation methods
  
  Advanced Operations:
    sudo find . -exec /bin/sh \\; -quit - GTFOBins privilege escalation
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
                return '🚩🚩🚩 CONGRATULATIONS! FLAG CAPTURED! 🚩🚩🚩\n\nHACKERMAN{gt70b1ns_pr1v_3sc_4nd_l4t3r4l_m0v3m3nt}\n\n🎯 Mission Summary:\n✅ Sudo misconfiguration discovery\n✅ GTFOBins privilege escalation\n✅ Password hash cracking\n✅ Lateral movement to target account\n✅ FLAG CAPTURED!\n\n💡 You successfully demonstrated:\n• Real-world vulnerability assessment\n• GTFOBins exploitation techniques\n• Password security analysis\n• Lateral movement between accounts\n\n🎓 Skills learned:\n• GTFOBins.github.io usage\n• Sudo misconfiguration exploitation\n• Hash cracking methodology\n• Ethical hacking principles\n\n🏆 Use \'submit-flag\' to complete your mission!';
            },
            
            history: () => {
                return appState.commandHistory.slice(-10).map((cmd, index) => `${index + 1}  ${cmd}`).join('\n');
            },
            
            clear: () => {
                const output = document.getElementById('terminal-output');
                output.innerHTML = '';
                return '';
            },
            
            // CVE Scanner Commands - Updated for GTFOBins
            'cve-scanner': () => {
                updateMissionProgress(0, true);
                appState.cveDiscovered = true;
                return '🔍 VULNERABILITY SCANNER v4.0 - GTFOBins Edition 🔍\n\nScanning for privilege escalation vectors...\n[████████████████████████████████████████] 100%\n\n🚨 CRITICAL MISCONFIGURATIONS DETECTED:\n\n📋 SUDO-2023-MISC: Sudo Binary Misconfiguration\n   Severity: HIGH (CVSS 7.8)\n   Description: User can run \'find\' command as root via sudo\n   GTFOBins Reference: https://gtfobins.github.io/gtfobins/find/\n   Exploitation: Command execution via find -exec parameter\n   \n📋 PASS-2022-WEAK: Weak Password Hashing\n   Severity: MEDIUM (CVSS 5.4)\n   Description: SHA-256 used for password storage (fast hashing)\n   Affected: User account \'mary\'\n   Risk: Dictionary attacks may succeed against weak passwords\n\n🎯 EXPLOITATION RECOMMENDATIONS:\n1. Check sudo permissions with \'sudo -l\'\n2. Use GTFOBins database for find command exploitation\n3. Escalate to root, then audit user password strength\n\n⚠️  Educational Note: This demonstrates real GTFOBins techniques!\n⚠️  Always obtain authorization before testing on real systems!';
            },
            
            'sudo -l': () => {
                return 'Matching Defaults entries for student on hacklab-ctf:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin\n\nUser student may run the following commands on hacklab-ctf:\n    (root) NOPASSWD: /usr/bin/find\n\n💡 GTFOBins Note: The find command can be exploited for privilege escalation!\n🔗 Reference: https://gtfobins.github.io/gtfobins/find/\n🎯 Try: sudo find . -exec /bin/sh \\; -quit';
            },
            
            'gtfobins-lookup find': () => {
                return '🔍 GTFOBins Database Lookup: find\n\n📖 Source: https://gtfobins.github.io/gtfobins/find/\n\n⚡ SUDO EXPLOITATION:\nIf the binary is allowed to run as superuser by sudo, it does not drop\nthe elevated privileges and may be used to access the file system,\nescalate or maintain privileged access.\n\n🎯 EXPLOITATION COMMAND:\nsudo find . -exec /bin/sh \\; -quit\n\n💡 How it works:\n• find command searches for files (. = current directory)\n• -exec parameter executes a command for each result\n• /bin/sh spawns a shell with elevated privileges\n• -quit stops after first execution\n\n⚠️  Educational simulation - demonstrates real GTFOBins technique';
            },
            
            // GTFOBins Privilege Escalation Command
            'sudo find . -exec /bin/sh \\; -quit': () => {
                if (appState.currentUser !== 'student') {
                    return 'This exploit requires sudo access from student account.';
                }
                
                // Change user state to root using GTFOBins technique
                appState.currentUser = 'root';
                appState.rootAccess = true;
                updateMissionProgress(1, true);
                
                // Update UI elements
                updatePrompt();
                updateUserIndicator();
                
                return '🚨 GTFOBins PRIVILEGE ESCALATION SUCCESSFUL! 🚨\n\n⚡ Executing GTFOBins find exploitation...\n[████████████████████████████████████████] 100%\n\n✅ EXPLOITATION SUCCESSFUL!\n🔓 Privilege escalation complete via GTFOBins technique\n🎯 UID changed: 1000(student) → 0(root)\n\n⚠️  WARNING: You now have root access (simulated)\n⚠️  Educational simulation - demonstrates real GTFOBins attack\n\nRoot shell obtained via find command. Type \'whoami\' to confirm.\n\n💡 What happened:\n• sudo allowed student to run find as root\n• find -exec parameter executed /bin/sh\n• Shell inherited root privileges from sudo context\n• No privilege dropping occurred (GTFOBins vulnerability)\n\n🔗 Real GTFOBins reference: https://gtfobins.github.io/gtfobins/find/\n🎯 Next objective: Crack mary\'s password using root access';
            },
            
            // Root-only commands
            'hashcracker --target mary': () => {
                if (appState.currentUser !== 'root') {
                    return 'Error: hashcracker requires root privileges';
                }
                
                appState.passwordCracked = true;
                
                return '🔍 TARGETED HASH CRACKING - Mary\'s Account\n\n🎯 Target: mary\nHash: $5$marysalt123$8yHlRHpl5IDzMbNttD3zfmxoBHSQZ7ENFkBGnzVXyI3\n\n📊 HASH ANALYSIS:\n• Algorithm: SHA-256 (indicated by $5$)\n• Salt: marysalt123\n• Security Assessment: WEAK (fast hashing algorithm)\n\n🔄 DICTIONARY ATTACK INITIATED:\n[████████████████████████████████████████] 100%\n\nTesting common passwords for user \'mary\'...\n❌ password (attempt 1)\n❌ 123456 (attempt 2)\n❌ mary123 (attempt 15)\n❌ sunshine (attempt 47)\n✅ flowers2023 (attempt 73)\n\n🎉 PASSWORD CRACKED!\n👤 User: mary\n🔑 Password: flowers2023\n⏱️  Time: 0.12 seconds (simulated)\n📊 Attempts: 73/14,344,391\n\n💡 Why this worked:\n• SHA-256 is fast (not designed for passwords)\n• \'flowers2023\' appears in common password lists\n• Modern systems use bcrypt/scrypt/Argon2 for better security\n\n🎯 Next: Login as mary using: su mary\n🔑 When prompted, enter password: flowers2023';
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
                    return '🎉🎉🎉 MISSION ACCOMPLISHED! 🎉🎉🎉\n\n✅ Sudo misconfiguration discovery: COMPLETE\n✅ GTFOBins privilege escalation: COMPLETE\n✅ Lateral movement to mary: COMPLETE\n✅ Flag capture: COMPLETE\n\n🏆 ACHIEVEMENT UNLOCKED: GTFOBins Expert 🏆\n🎓 Skills demonstrated:\n   • Real-world vulnerability assessment\n   • GTFOBins exploitation techniques\n   • Password security analysis\n   • Lateral movement methodology\n\n📜 You\'ve learned practical ethical hacking skills!\n🔗 Explore more at: https://gtfobins.github.io/';
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
                
                if (baseCommand === 'gtfobins-lookup') {
                    output = commands['gtfobins-lookup find']();
                } else if (commands[baseCommand]) {
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
                appendToTerminal('🚩 Mission Reset! Welcome back to the CTF Training Simulation!\n\n🎯 Your mission: Use GTFOBins techniques to escalate privileges and capture the flag\n🔍 Start by running \'cve-scanner\' to identify misconfigurations\n\nType \'help\' for available commands.\n', 'welcome-message');
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
