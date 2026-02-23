import { loadMemory, saveMemory } from "../system/memory.js";
import { updateMood } from "./moodEngine.js";

export function entityInterrupt() {
  const mem = loadMemory();
  updateMood();

  if (Math.random() < 0.4) {
    window.printToTerminal("[SYSTEM NOTICE]: observing user activity");
  }

  if (mem.entityMood === "curious") {
    window.printToTerminal("...what are you searching for?");
  }

  saveMemory(mem);
}
