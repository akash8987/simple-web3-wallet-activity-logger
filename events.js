function startListeners() {
  window.ethereum.on("accountsChanged", accounts => {
    logEvent("Account changed: " + accounts[0]);
  });

  window.ethereum.on("chainChanged", chainId => {
    logEvent("Network changed: " + chainId);
  });
}
