<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hackerman CTF Console - Educational Security Training</title>
    <style>
        :root {
          /* Primitive Color Tokens */
          --color-white: rgba(255, 255, 255, 1);
          --color-black: rgba(0, 0, 0, 1);
          --color-cream-50: rgba(252, 252, 249, 1);
          --color-cream-100: rgba(255, 255, 253, 1);
          --color-gray-200: rgba(245, 245, 245, 1);
          --color-gray-300: rgba(167, 169, 169, 1);
          --color-gray-400: rgba(119, 124, 124, 1);
          --color-slate-500: rgba(98, 108, 113, 1);
          --color-brown-600: rgba(94, 82, 64, 1);
          --color-charcoal-700: rgba(31, 33, 33, 1);
          --color-charcoal-800: rgba(38, 40, 40, 1);
          --color-slate-900: rgba(19, 52, 59, 1);
          --color-teal-300: rgba(50, 184, 198, 1);
          --color-teal-400: rgba(45, 166, 178, 1);
          --color-teal-500: rgba(33, 128, 141, 1);
          --color-teal-600: rgba(29, 116, 128, 1);
          --color-teal-700: rgba(26, 104, 115, 1);
          --color-teal-800: rgba(41, 150, 161, 1);
          --color-red-400: rgba(255, 84, 89, 1);
          --color-red-500: rgba(192, 21, 47, 1);
          --color-orange-400: rgba(230, 129, 97, 1);
          --color-orange-500: rgba(168, 75, 47, 1);

          /* RGB versions for opacity control */
          --color-brown-600-rgb: 94, 82, 64;
          --color-teal-500-rgb: 33, 128, 141;
          --color-slate-900-rgb: 19, 52, 59;
          --color-slate-500-rgb: 98, 108, 113;
          --color-red-500-rgb: 192, 21, 47;
          --color-red-400-rgb: 255, 84, 89;
          --color-orange-500-rgb: 168, 75, 47;
          --color-orange-400-rgb: 230, 129, 97;
          --color-teal-300-rgb: 50, 184, 198;
          --color-charcoal-800-rgb: 38, 40, 40;
          --color-charcoal-700-rgb: 31, 33, 33;

          /* Background color tokens (Light Mode) */
          --color-bg-1: rgba(59, 130, 246, 0.08); /* Light blue */
          --color-bg-2: rgba(245, 158, 11, 0.08); /* Light yellow */
          --color-bg-3: rgba(34, 197, 94, 0.08); /* Light green */
          --color-bg-4: rgba(239, 68, 68, 0.08); /* Light red */
          --color-bg-5: rgba(147, 51, 234, 0.08); /* Light purple */
          --color-bg-6: rgba(249, 115, 22, 0.08); /* Light orange */
          --color-bg-7: rgba(236, 72, 153, 0.08); /* Light pink */
          --color-bg-8: rgba(6, 182, 212, 0.08); /* Light cyan */

          /* Semantic Color Tokens (Light Mode) */
          --color-background: var(--color-cream-50);
          --color-surface: var(--color-cream-100);
          --color-text: var(--color-slate-900);
          --color-text-secondary: var(--color-slate-500);
          --color-primary: var(--color-teal-500);
          --color-primary-hover: var(--color-teal-600);
          --color-primary-active: var(--color-teal-700);
          --color-secondary: rgba(var(--color-brown-600-rgb), 0.12);
          --color-secondary-hover: rgba(var(--color-brown-600-rgb), 0.2);
          --color-secondary-active: rgba(var(--color-brown-600-rgb), 0.25);
          --color-border: rgba(var(--color-brown-600-rgb), 0.2);
          --color-btn-primary-text: var(--color-cream-50);
          --color-card-border: rgba(var(--color-brown-600-rgb), 0.12);
          --color-card-border-inner: rgba(var(--color-brown-600-rgb), 0.12);
          --color-error: var(--color-red-500);
          --color-success: var(--color-teal-500);
          --color-warning: var(--color-orange-500);
          --color-info: var(--color-slate-500);
          --color-focus-ring: rgba(var(--color-teal-500-rgb), 0.4);
          --color-select-caret: rgba(var(--color-slate-900-rgb), 0.8);

          /* Common style patterns */
          --focus-ring: 0 0 0 3px var(--color-focus-ring);
          --focus-outline: 2px solid var(--color-primary);
          --status-bg-opacity: 0.15;
          --status-border-opacity: 0.25;
          --select-caret-light: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23134252' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          --select-caret-dark: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23f5f5f5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

          /* RGB versions for opacity control */
          --color-success-rgb: 33, 128, 141;
          --color-error-rgb: 192, 21, 47;
          --color-warning-rgb: 168, 75, 47;
          --color-info-rgb: 98, 108, 113;

          /* Typography */
          --font-family-base: "FKGroteskNeue", "Geist", "Inter", -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          --font-family-mono: "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo,
            Monaco, Consolas, monospace;
          --font-size-xs: 11px;
          --font-size-sm: 12px;
          --font-size-base: 14px;
          --font-size-md: 14px;
          --font-size-lg: 16px;
          --font-size-xl: 18px;
          --font-size-2xl: 20px;
          --font-size-3xl: 24px;
          --font-size-4xl: 30px;
          --font-weight-normal: 400;
          --font-weight-medium: 500;
          --font-weight-semibold: 550;
          --font-weight-bold: 600;
          --line-height-tight: 1.2;
          --line-height-normal: 1.5;
          --letter-spacing-tight: -0.01em;

          /* Spacing */
          --space-0: 0;
          --space-1: 1px;
          --space-2: 2px;
          --space-4: 4px;
          --space-6: 6px;
          --space-8: 8px;
          --space-10: 10px;
          --space-12: 12px;
          --space-16: 16px;
          --space-20: 20px;
          --space-24: 24px;
          --space-32: 32px;

          /* Border Radius */
          --radius-sm: 6px;
          --radius-base: 8px;
          --radius-md: 10px;
          --radius-lg: 12px;
          --radius-full: 9999px;

          /* Shadows */
          --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.02);
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.04),
            0 2px 4px -1px rgba(0, 0, 0, 0.02);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.04),
            0 4px 6px -2px rgba(0, 0, 0, 0.02);
          --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.03);

          /* Animation */
          --duration-fast: 150ms;
          --duration-normal: 250ms;
          --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);

          /* Layout */
          --container-sm: 640px;
          --container-md: 768px;
          --container-lg: 1024px;
          --container-xl: 1280px;
        }

        /* Dark mode colors */
        @media (prefers-color-scheme: dark) {
          :root {
            /* RGB versions for opacity control (Dark Mode) */
            --color-gray-400-rgb: 119, 124, 124;
            --color-teal-300-rgb: 50, 184, 198;
            --color-gray-300-rgb: 167, 169, 169;
            --color-gray-200-rgb: 245, 245, 245;

            /* Background color tokens (Dark Mode) */
            --color-bg-1: rgba(29, 78, 216, 0.15); /* Dark blue */
            --color-bg-2: rgba(180, 83, 9, 0.15); /* Dark yellow */
            --color-bg-3: rgba(21, 128, 61, 0.15); /* Dark green */
            --color-bg-4: rgba(185, 28, 28, 0.15); /* Dark red */
            --color-bg-5: rgba(107, 33, 168, 0.15); /* Dark purple */
            --color-bg-6: rgba(194, 65, 12, 0.15); /* Dark orange */
            --color-bg-7: rgba(190, 24, 93, 0.15); /* Dark pink */
            --color-bg-8: rgba(8, 145, 178, 0.15); /* Dark cyan */

            /* Semantic Color Tokens (Dark Mode) */
            --color-background: var(--color-charcoal-700);
            --color-surface: var(--color-charcoal-800);
            --color-text: var(--color-gray-200);
            --color-text-secondary: rgba(var(--color-gray-300-rgb), 0.7);
            --color-primary: var(--color-teal-300);
            --color-primary-hover: var(--color-teal-400);
            --color-primary-active: var(--color-teal-800);
            --color-secondary: rgba(var(--color-gray-400-rgb), 0.15);
            --color-secondary-hover: rgba(var(--color-gray-400-rgb), 0.25);
            --color-secondary-active: rgba(var(--color-gray-400-rgb), 0.3);
            --color-border: rgba(var(--color-gray-400-rgb), 0.3);
            --color-error: var(--color-red-400);
            --color-success: var(--color-teal-300);
            --color-warning: var(--color-orange-400);
            --color-info: var(--color-gray-300);
            --color-focus-ring: rgba(var(--color-teal-300-rgb), 0.4);
            --color-btn-primary-text: var(--color-slate-900);
            --color-card-border: rgba(var(--color-gray-400-rgb), 0.2);
            --color-card-border-inner: rgba(var(--color-gray-400-rgb), 0.15);
            --shadow-inset-sm: inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.15);
            --button-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
            --color-border-secondary: rgba(var(--color-gray-400-rgb), 0.2);
            --color-select-caret: rgba(var(--color-gray-200-rgb), 0.8);

            /* RGB versions for dark mode */
            --color-success-rgb: var(--color-teal-300-rgb);
            --color-error-rgb: var(--color-red-400-rgb);
            --color-warning-rgb: var(--color-orange-400-rgb);
            --color-info-rgb: var(--color-gray-300-rgb);
          }
        }

        /* Base styles */
        html {
          font-size: var(--font-size-base);
          font-family: var(--font-family-base);
          line-height: var(--line-height-normal);
          color: var(--color-text);
          background-color: var(--color-background);
          -webkit-font-smoothing: antialiased;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        /* CTF Terminal-specific styles */
        body {
            background-color: var(--color-charcoal-800);
            color: var(--color-success);
            font-family: var(--font-family-mono);
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow-x: hidden;
        }

        /* Scanlines Effect */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(var(--color-success-rgb), 0.02) 2px,
                rgba(var(--color-success-rgb), 0.02) 4px
            );
            animation: scanline 0.1s linear infinite;
        }

        @keyframes scanline {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
        }

        /* Safety Ribbon */
        .safety-ribbon {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(45deg, var(--color-warning), var(--color-orange-400));
            color: var(--color-charcoal-800);
            text-align: center;
            padding: var(--space-8);
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-sm);
            z-index: 1000;
            box-shadow: var(--shadow-md);
        }

        /* Container */
        .container {
            height: 100vh;
            padding-top: 50px;
            display: flex;
            flex-direction: column;
            max-width: var(--container-xl);
            margin: 0 auto;
            padding-left: var(--space-16);
            padding-right: var(--space-16);
        }

        /* Header */
        .header {
            text-align: center;
            margin: var(--space-16) 0;
            padding: var(--space-16) 0 var(--space-24) 0;
            border-bottom: 2px solid var(--color-success);
        }

        .title {
            font-size: var(--font-size-4xl);
            font-weight: var(--font-weight-bold);
            margin-bottom: var(--space-8);
            text-shadow: 0 0 10px var(--color-success);
            letter-spacing: var(--letter-spacing-tight);
            color: var(--color-success);
        }

        .subtitle {
            font-size: var(--font-size-lg);
            color: rgba(var(--color-success-rgb), 0.8);
            margin: 0;
        }

        /* Status Bar */
        .status-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(var(--color-success-rgb), 0.1);
            border: 1px solid rgba(var(--color-success-rgb), 0.3);
            border-radius: var(--radius-base);
            padding: var(--space-12) var(--space-16);
            margin: var(--space-16) 0;
        }

        .current-user-display {
            color: var(--color-warning);
            font-weight: var(--font-weight-bold);
        }

        #current-user-indicator {
            color: var(--color-success);
            padding: var(--space-2) var(--space-8);
            border: 1px solid var(--color-success);
            background: rgba(var(--color-success-rgb), 0.1);
            border-radius: var(--radius-sm);
        }

        #current-user-indicator.root {
            color: var(--color-error) !important;
            border-color: var(--color-error) !important;
            background: rgba(var(--color-error-rgb), 0.1) !important;
        }

        #current-user-indicator.mary {
            color: var(--color-teal-300) !important;
            border-color: var(--color-teal-300) !important;
            background: rgba(var(--color-teal-300-rgb), 0.1) !important;
        }

        .ctf-mode {
            color: var(--color-warning);
            font-weight: var(--font-weight-bold);
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
            gap: var(--space-16);
            margin-bottom: var(--space-20);
            flex-wrap: wrap;
        }

        .control-btn {
            background: rgba(var(--color-success-rgb), 0.1);
            border: 1px solid var(--color-success);
            color: var(--color-success);
            padding: var(--space-8) var(--space-16);
            cursor: pointer;
            font-family: inherit;
            font-size: var(--font-size-sm);
            border-radius: var(--radius-base);
            transition: all var(--duration-normal) var(--ease-standard);
        }

        .control-btn:hover {
            background: rgba(var(--color-success-rgb), 0.2);
            box-shadow: 0 0 10px rgba(var(--color-success-rgb), 0.5);
        }

        .control-btn:active {
            background: rgba(var(--color-success-rgb), 0.3);
        }

        .control-btn.active {
            background: rgba(var(--color-success-rgb), 0.2);
            box-shadow: inset 0 0 5px rgba(var(--color-success-rgb), 0.5);
        }

        /* Main Content */
        .main-content {
            display: flex;
            flex-direction: column;
            flex: 1;
            min-height: 0;
        }

        /* Mission Progress */
        .mission-progress {
            background: rgba(var(--color-success-rgb), 0.05);
            border: 1px solid rgba(var(--color-success-rgb), 0.3);
            border-radius: var(--radius-lg);
            padding: var(--space-16);
            margin-bottom: var(--space-20);
        }

        .mission-progress h3 {
            color: var(--color-warning);
            margin-bottom: var(--space-12);
            text-align: center;
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-bold);
        }

        .objectives {
            display: flex;
            flex-direction: column;
            gap: var(--space-8);
        }

        .objective {
            display: flex;
            align-items: center;
            gap: var(--space-10);
            padding: var(--space-6);
            transition: all var(--duration-normal) var(--ease-standard);
        }

        .objective-icon {
            font-size: var(--font-size-lg);
            min-width: 20px;
            color: rgba(var(--color-success-rgb), 0.5);
        }

        .objective.completed .objective-icon {
            color: var(--color-success);
        }

        .objective.completed .objective-text {
            color: var(--color-success);
            text-decoration: line-through;
        }

        .objective-text {
            font-size: var(--font-size-md);
            color: rgba(var(--color-success-rgb), 0.7);
        }

        /* Terminal Container */
        .terminal-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 400px;
        }

        /* Terminal */
        .terminal {
            flex: 1;
            background: rgba(var(--color-charcoal-800-rgb), 0.95);
            border: 2px solid var(--color-success);
            border-radius: var(--radius-lg);
            display: flex;
            flex-direction: column;
            box-shadow: 0 0 20px rgba(var(--color-success-rgb), 0.3);
            backdrop-filter: blur(5px);
        }

        .terminal-output {
            flex: 1;
            padding: var(--space-16);
            overflow-y: auto;
            overflow-x: auto;
            font-size: var(--font-size-md);
            line-height: var(--line-height-normal);
            white-space: pre-wrap;
            word-break: break-word;
            font-family: var(--font-family-mono);
        }

        .terminal-output::-webkit-scrollbar {
            width: 8px;
        }

        .terminal-output::-webkit-scrollbar-track {
            background: rgba(var(--color-success-rgb), 0.1);
        }

        .terminal-output::-webkit-scrollbar-thumb {
            background: var(--color-success);
            border-radius: var(--radius-sm);
        }

        .welcome-message {
            color: var(--color-warning);
            margin-bottom: var(--space-16);
            padding-bottom: var(--space-16);
            border-bottom: 1px solid rgba(var(--color-success-rgb), 0.3);
            font-weight: var(--font-weight-medium);
        }

        .command-line {
            margin: var(--space-6) 0;
        }

        .command-input-display {
            color: rgba(var(--color-success-rgb), 0.8);
        }

        .command-output {
            color: var(--color-success);
            margin-left: 0;
            white-space: pre-wrap;
        }

        .error-output {
            color: var(--color-error);
        }

        .success-output {
            color: var(--color-success);
        }

        .warning-output {
            color: var(--color-warning);
        }

        /* Terminal Input */
        .terminal-input-line {
            display: flex;
            align-items: center;
            padding: var(--space-12) var(--space-16);
            border-top: 1px solid rgba(var(--color-success-rgb), 0.3);
            background: rgba(var(--color-charcoal-700-rgb), 0.8);
        }

        .prompt {
            color: var(--color-success);
            margin-right: var(--space-8);
            font-weight: var(--font-weight-bold);
            white-space: nowrap;
            font-family: var(--font-family-mono);
        }

        .prompt.root {
            color: var(--color-error);
        }

        .prompt.mary {
            color: var(--color-teal-300);
        }

        #terminal-input {
            flex: 1;
            background: transparent;
            border: none;
            color: var(--color-success);
            font-family: var(--font-family-mono);
            font-size: var(--font-size-md);
            outline: none;
            caret-color: var(--color-success);
        }

        #terminal-input:focus {
            background: rgba(var(--color-success-rgb), 0.05);
        }

        /* Cursor animation */
        .cursor {
            display: inline-block;
            background-color: var(--color-success);
            animation: cursor-blink 1s infinite;
            width: 8px;
            height: 14px;
            margin-left: var(--space-2);
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
            background: rgba(var(--color-charcoal-800-rgb), 0.95);
            border: 2px solid var(--color-success);
            border-right: none;
            padding: var(--space-20);
            overflow-y: auto;
            transition: right var(--duration-normal) var(--ease-standard);
            z-index: 500;
        }

        .guide-panel.open {
            right: 0;
        }

        .guide-panel h3 {
            color: var(--color-warning);
            margin-bottom: var(--space-16);
            text-align: center;
        }

        .guide-content {
            color: rgba(var(--color-success-rgb), 0.8);
            line-height: var(--line-height-normal);
            white-space: pre-line;
        }

        /* Special command output styles */
        .exploit-output {
            color: var(--color-warning);
            background: rgba(var(--color-warning-rgb), 0.1);
            border-left: 4px solid var(--color-warning);
            padding: var(--space-12);
            margin: var(--space-8) 0;
            border-radius: var(--radius-sm);
        }

        .cve-output {
            color: var(--color-warning);
            background: rgba(var(--color-warning-rgb), 0.1);
            border-left: 4px solid var(--color-warning);
            padding: var(--space-12);
            margin: var(--space-8) 0;
            border-radius: var(--radius-sm);
        }

        .root-output {
            color: var(--color-error);
            background: rgba(var(--color-error-rgb), 0.1);
            border-left: 4px solid var(--color-error);
            padding: var(--space-12);
            margin: var(--space-8) 0;
            border-radius: var(--radius-sm);
        }

        .flag-output {
            color: var(--color-primary);
            background: rgba(var(--color-teal-300-rgb), 0.1);
            border: 2px solid var(--color-primary);
            padding: var(--space-16);
            margin: var(--space-16) 0;
            border-radius: var(--radius-base);
            text-align: center;
            font-weight: var(--font-weight-bold);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding-left: var(--space-8);
                padding-right: var(--space-8);
            }
            
            .title {
                font-size: var(--font-size-3xl);
            }
            
            .subtitle {
                font-size: var(--font-size-md);
            }
            
            .status-bar {
                flex-direction: column;
                gap: var(--space-8);
                text-align: center;
            }
            
            .terminal-container {
                min-height: 300px;
            }
            
            .guide-panel {
                right: -100%;
                width: 100%;
                top: 60px;
            }
            
            .control-panel {
                justify-content: center;
                gap: var(--space-8);
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

        .slide-in {
            animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
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
