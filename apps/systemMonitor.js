import { loadMemory } from "../system/memory.js";

export function openMonitor() {
  const mem = loadMemory();

  window.printToTerminal("CPU: 3%");
  window.printToTerminal("MEMORY: 120MB");
  window.printToTerminal("ENTITY MOOD: " + mem.entityMood);

  if (mem.instability > 4)
    window.printToTerminal("UNKNOWN PROCESS DETECTED");
}
