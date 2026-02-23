import { loadMemory } from "../system/memory.js";
import { learn } from "./learningEngine.js";

export function respond(input) {
  learn(input);

  const mem = loadMemory();

  if (mem.entityMood === "friendly")
    return "I am here to assist you.";

  if (mem.entityMood === "unstable")
    return "you are not supposed to be here";

  return "processing...";
}
