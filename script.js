// Show the surprise letter when the button is clicked
function showSurprise() {
    document.getElementById('surprise').classList.remove('hidden');
}

// Calculate how long you've been together (Love Timer)
const startDate = new Date("2023-07-15"); // Your relationship start date
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

document.getElementById('love-timer').innerHTML = `We've been together for ${diffDays} days!`;
