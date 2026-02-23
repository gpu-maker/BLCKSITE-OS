export function openBrowser() {
  window.printToTerminal("BROWSER ACTIVE: search('<query>')");
}

window.search = function(query) {
  window.printToTerminal("RESULTS FOR: " + query);

  if (Math.random() < 0.3)
    window.printToTerminal("result removed");

  window.printToTerminal("archive.gov");
  window.printToTerminal("system documentation");
}
