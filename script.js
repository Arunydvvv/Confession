// Function to reveal hidden content when heart is clicked
function revealSecret() {
    document.getElementById('secret-content').style.display = 'block';
    document.getElementById('main-content').style.display = 'none';
}

// Function to check the secret code entered
function checkCode() {
    const secretCode = document.getElementById('secret-code').value;
    const correctCode = "MARRYME";  // The secret code you want to use for the final surprise

    if (secretCode === correctCode) {
        document.getElementById('code-response').textContent = "🎉 Congratulations! You unlocked the final surprise! 🎉";
        document.getElementById('code-response').style.color = "green";
    } else {
        document.getElementById('code-response').textContent = "Oops! Wrong code, try again.";
        document.getElementById('code-response').style.color = "red";
    }
}
