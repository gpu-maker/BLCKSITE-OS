import { loadMemory, saveMemory } from "../system/memory.js";

export function openNotes() {
  window.printToTerminal("NOTES APP: writeNote('<text>')");
}

window.writeNote = function(text) {
  const mem = loadMemory();
  mem.notes.push(text);

  if (Math.random() < 0.2)
    mem.notes[mem.notes.length - 1] += " (modified)";

  saveMemory(mem);
}
