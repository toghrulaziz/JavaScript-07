function toggleText() {
    var displayText = document.getElementById('displayText');
    
    if (displayText.style.display === 'none' || displayText.style.display === '') {
        displayText.style.display = 'block';
    } else {
        displayText.style.display = 'none';
    }
}