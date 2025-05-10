const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Do something today that your future self will thank you for."
];

function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

function copyQuote() {
  const quoteText = document.getElementById("quote").textContent;
  navigator.clipboard.writeText(quoteText).then(() => {
    alert("Quote copied to clipboard!");
  });
}
