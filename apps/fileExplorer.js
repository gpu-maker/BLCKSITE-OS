import { loadMemory } from "../system/memory.js";
import { getFiles } from "../system/filesystem.js";

export function openFiles() {
  const mem = loadMemory();
  const files = getFiles(mem.instability);

  window.printToTerminal("FILES:");
  files.forEach(f => window.printToTerminal("- " + f));
}
