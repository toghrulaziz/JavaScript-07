function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 101);
    document.getElementById('numberContainer').innerHTML = randomNumber;
}