import { loadMemory, saveMemory } from "./memory.js";
import { entityInterrupt } from "../entity/entityEngine.js";

export function runInstabilityTick() {
  const mem = loadMemory();

  mem.instability += 0.2;

  if (mem.instability > 5) {
    entityInterrupt();
  }

  saveMemory(mem);
}
