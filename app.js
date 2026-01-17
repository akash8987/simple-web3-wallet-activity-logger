document.getElementById("connectBtn").addEventListener("click", async () => {
  await connectWallet();
  startListeners();
});
