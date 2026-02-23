import { renderAppsBar } from "./windowManager.js";
import { runInstabilityTick } from "../system/instability.js";

const output = document.getElementById("output");

export function printToTerminal(text) {
  const line = document.createElement("div");
  line.textContent = text;
  output.appendChild(line);
  window.scrollTo(0, document.body.scrollHeight);
}

window.printToTerminal = printToTerminal;

export const osTick = () => runInstabilityTick();
