import { renderAppsBar } from "./windowManager.js";
import { runInstabilityTick } from "../system/instability.js";

const output = document.getElementById("output");
const input = document.getElementById("commandInput");

export function printToTerminal(text) {
  const line = document.createElement("div");
  line.textContent = text;
  output.appendChild(line);
  window.scrollTo(0, document.body.scrollHeight);
}

window.printToTerminal = printToTerminal;

// Handle command input
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value;
    printToTerminal("> " + cmd);
    input.value = "";
    if (window.currentApp && window.currentApp.command) {
      window.currentApp.command(cmd);
    }
    runInstabilityTick();
  }
});
