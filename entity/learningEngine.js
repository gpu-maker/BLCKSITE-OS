import { loadMemory, saveMemory } from "../system/memory.js";

export function learn(text) {
  const mem = loadMemory();

  text.split(" ").forEach(w => {
    mem.learnedWords[w] = (mem.learnedWords[w] || 0) + 1;
  });

  mem.history.push(text);
  saveMemory(mem);
}
