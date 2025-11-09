document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple mock login (in real app, integrate with backend)
    if (username && password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('debugger').style.display = 'block';
        alert('Login successful! Welcome to CodeDoctor.');
    } else {
        alert('Please enter valid credentials.');
    }
});

document.getElementById('debugBtn').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;
    const output = document.getElementById('output');
    
    if (!code.trim()) {
        output.textContent = 'Error: Please enter some code to debug.';
        return;
    }
    
    // Mock AI analysis (simple checks for demonstration)
    let response = 'AI Analysis:\n';
    
    if (code.includes('print(') && !code.includes(')')) {
        response += '- Syntax Error: Missing closing parenthesis in print statement.\n';
        response += '- Fix: Add ")" at the end of the print line.\n';
        response += '- Step-by-step: 1. Locate the print statement. 2. Ensure parentheses are balanced. 3. Test the code again.\n';
    } else if (code.includes('for') && !code.includes(':')) {
        response += '- Syntax Error: Missing colon in for loop.\n';
        response += '- Fix: Add ":" after the loop condition.\n';
        response += '- Step-by-step: 1. Check loop syntax. 2. Add colon. 3. Run and verify.\n';
    } else if (code.includes('undefined')) {
        response += '- Logic Error: Variable not defined.\n';
        response += '- Fix: Declare the variable before use.\n';
        response += '- Step-by-step: 1. Identify undefined variable. 2. Add declaration (e.g., var x = 0;). 3. Debug further if needed.\n';
    } else {
        response += '- No obvious errors detected. Your code looks good! Keep practicing.\n';
        response += '- Tip: Test edge cases to build confidence.\n';
    }
    
    response += '\nRemember, CodeDoctor helps you learn step-by-step for better coding skills.';
    output.textContent = response;
});
