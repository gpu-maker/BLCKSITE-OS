import { loadMemory, saveMemory } from "../system/memory.js";

export function updateMood() {
  const mem = loadMemory();

  if (mem.instability < 2) mem.entityMood = "observing";
  else if (mem.instability < 5) mem.entityMood = "curious";
  else if (mem.instability < 8) mem.entityMood = "friendly";
  else mem.entityMood = "unstable";

  saveMemory(mem);
}
