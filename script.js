// Show or hide all options
document.getElementById('showOptionsBtn').addEventListener('click', function() {
    const container = document.getElementById('optionsContainer');
    container.classList.toggle('hidden');
    this.textContent = container.classList.contains('hidden') ? 'Show All Options' : 'Hide All Options';
});

// Toggle nested options
document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
        const nestedOptions = button.nextElementSibling;
        if (nestedOptions) {
            nestedOptions.style.display = nestedOptions.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Display input fields when clicking on NO and NC
document.getElementById('NO-btn').addEventListener('click', function() {
    document.getElementById('NO-input').classList.toggle('hidden');
    document.getElementById('NC-input').classList.add('hidden');
});

// Display input fields when clicking on NC
document.getElementById('NC-btn').addEventListener('click', function() {
    document.getElementById('NC-input').classList.toggle('hidden');
    document.getElementById('NO-input').classList.add('hidden');
});

// Function to generate the code based on the user inputs
function generateCode() {
    const noValue = document.getElementById('NO-input').value;
    const ncValue = document.getElementById('NC-input').value;
    
    if (noValue && ncValue) {
        let code = '';
        
        const combinedValue = noValue + ncValue;
        
        const codes = {
            "11": "P2PSF111",
            "10": "P2PSF110",
            "01": "P2PSF101",
            "21": "P2PSF121",
            "23": "P2PSF123",
            "22": "P2PSF122",
            "33": "P2PSF133"
        };
        
        code = codes[combinedValue] || 'Invalid Code';
        
        document.getElementById('generated-code').textContent = code;
        document.getElementById('result').classList.remove('hidden');
    }
}

// Monitor changes in input fields to generate the code
document.getElementById('NO-input').addEventListener('input', generateCode);
document.getElementById('NC-input').addEventListener('input', generateCode);
