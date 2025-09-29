<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔐 Secret Detective Challenge - Learn Cybersecurity!</title>
    <style>
        body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(45deg, #ff9a56, #ffad56);
            padding: 30px;
            text-align: center;
            color: white;
        }
        
        .header h1 {
            margin: 0;
            font-size: 2.5em;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .detective-emoji {
            font-size: 4em;
            animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-20px); }
            60% { transform: translateY(-10px); }
        }
        
        .content {
            padding: 40px;
        }
        
        .challenge-box {
            background: #f8f9ff;
            border: 3px solid #667eea;
            border-radius: 15px;
            padding: 25px;
            margin: 20px 0;
            text-align: center;
        }
        
        .challenge-box h2 {
            color: #667eea;
            margin-top: 0;
        }
        
        .password-input {
            width: 80%;
            padding: 15px;
            font-size: 18px;
            border: 3px solid #ddd;
            border-radius: 10px;
            margin: 15px 0;
            text-align: center;
        }
        
        .password-input:focus {
            border-color: #667eea;
            outline: none;
            box-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
        }
        
        .submit-btn {
            background: linear-gradient(45deg, #56ab2f, #a8e6cf);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        
        .hint-box {
            background: #fff3cd;
            border: 2px solid #ffc107;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .hint-box h3 {
            color: #856404;
            margin-top: 0;
        }
        
        .success-message {
            background: #d4edda;
            border: 2px solid #28a745;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            display: none;
        }
        
        .success-message h3 {
            color: #155724;
            margin-top: 0;
        }
        
        .warning-box {
            background: #f8d7da;
            border: 2px solid #dc3545;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .warning-box h3 {
            color: #721c24;
            margin-top: 0;
        }
        
        .footer {
            background: #343a40;
            color: white;
            text-align: center;
            padding: 20px;
        }
        
        .security-tips {
            background: #e3f2fd;
            border: 2px solid #2196f3;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .security-tips h3 {
            color: #0d47a1;
            margin-top: 0;
        }
        
        .examples-box {
            background: #f3e5f5;
            border: 2px solid #9c27b0;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .examples-box h3 {
            color: #4a148c;
            margin-top: 0;
        }
        
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
        
        ul {
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="detective-emoji">🕵️‍♀️</div>
            <h1>Secret Detective Challenge</h1>
            <p>Can you find the hidden password and learn about cybersecurity?</p>
        </div>
        
        <div class="content">
            <div class="challenge-box">
                <h2>🔍 Your Mission</h2>
                <p>Someone has hidden a secret password on this webpage, but they made a big mistake! 
                Can you find where they hid it?</p>
                
                <input type="password" id="passwordInput" class="password-input" placeholder="Enter the secret password">
                <br>
                <button onclick="checkPassword()" class="submit-btn">🔓 Submit Password</button>
            </div>
            
            <div class="success-message" id="successMessage">
                <h3>🎉 Congratulations, Detective! 🎉</h3>
                <p><strong>Great job! You found the password in the source code.</strong></p>
                <p>This teaches us why developers should never hard-code passwords in websites. 
                You just learned an important cybersecurity lesson!</p>
                <p><em>Real hackers can look at the source code too, just like you did!</em></p>
            </div>
            
            <div class="hint-box">
                <h3>🔍 Need a Hint?</h3>
                <p><strong>Detective Tip:</strong> Web pages are made of code that browsers can read. 
                Sometimes developers accidentally leave secrets in places where anyone can find them!</p>
                <p><em>Try right-clicking on this page and selecting "View Page Source" or pressing Ctrl+U (Cmd+U on Mac)</em></p>
                <p>Look for comments that start with <code>&lt;!--</code> or search for the word "password"</p>
            </div>
            
            
            <div class="examples-box">
                <h3>🌍 Real-World Examples</h3>
                <p><strong>This actually happens in real life!</strong> Here are some examples:</p>
                <ul>
                    <li><strong>Mobile Apps:</strong> Many apps have been found with API keys hidden in their code, allowing hackers to access databases</li>
                    <li><strong>Website Comments:</strong> Developers sometimes leave notes like <code>&lt;!-- password=admin123 --&gt;</code> in web pages</li>
                    <li><strong>GitHub Leaks:</strong> Companies accidentally publish code with passwords and secrets, which hackers then find</li>
                    <li><strong>Config Files:</strong> Sometimes websites make their configuration files public, exposing all their secrets</li>
                </ul>
                <p><em>These mistakes have led to data breaches affecting millions of people!</em></p>
            </div>
            
            <div class="warning-box">
                <h3>⚠️ Important Cybersecurity Lesson</h3>
                <p><strong>Always remember: Hackers can look at the source code too!</strong></p>
                <p>Never store real passwords, API keys, or other secrets directly in website code. 
                This is one of the most common mistakes that leads to security breaches.</p>
                <p><em>Good developers use secure methods to store and check passwords on protected servers.</em></p>
            </div>
        </div>
        
        <div class="footer">
            <p>🎓 <strong>Congratulations on completing your first cybersecurity lesson!</strong> 🎓</p>
            <p>Remember: <em>Always think like a hacker to protect like a defender!</em></p>
        </div>
    </div>
    
    <!-- TODO: Remember to remove this password before going live! -->
    <!-- SECRET PASSWORD: cyberdetective2024 -->
    <!-- This is exactly what NOT to do in real websites! -->
    
    <script>
        // WARNING: This is a terrible way to store passwords!
        // In real applications, passwords should NEVER be stored in client-side code
        const secretPassword = "cyberdetective2024"; // This is visible to anyone who views the source!
        
        function checkPassword() {
            const userInput = document.getElementById('passwordInput').value;
            const successDiv = document.getElementById('successMessage');
            
            if (userInput === secretPassword) {
                successDiv.style.display = 'block';
                successDiv.scrollIntoView({ behavior: 'smooth' });
                
                // Add some celebration effects
                document.body.style.background = 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)';
                
                // Show success animation
                setTimeout(() => {
                    alert("🎉 Amazing detective work! You've learned why hardcoded passwords are dangerous. Real hackers use the same techniques you just used!");
                }, 500);
            } else {
                alert("🔍 Not quite right! Remember to check the source code. Look for HTML comments or JavaScript variables. You're on the right track!");
            }
        }
        
        // Add some fun interactivity
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
        
        // Educational console message
        console.log("🕵️‍♀️ Hey there, detective! You're checking the browser console - that's exactly the kind of thinking that makes a good cybersecurity professional!");
        console.log("🔍 The secret password is: " + secretPassword);
        console.log("⚠️ This is why developers should NEVER put passwords in JavaScript - anyone can see them here!");
    </script>
</body>
</html>
