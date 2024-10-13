function showSurprise() {
    document.getElementById('surprise').classList.remove('hidden');
    document.querySelector('button').classList.add('hidden');
}

// Optional: Add some typing effect to the text
let i = 0;
let text = "Happy Birthday to the one who makes my heart skip a beat every single day!";
let speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('typed-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;
