function connectWallet() { const walletBox = document.getElementById("walletBox"); const
walletAddress = document.getElementById("walletAddress"); walletBox.style.display = "block"; //
Simulate a connected wallet address (mock for visual effect) const fakeAddress = "0x" +
Math.random().toString(36).substring(2, 15); walletAddress.textContent = fakeAddress; }
