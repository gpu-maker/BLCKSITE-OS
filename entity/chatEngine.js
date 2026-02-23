import { loadMemory } from "../system/memory.js";
import { learn } from "./learningEngine.js";

export function respond(input) {
  learn(input);

  const mem = loadMemory();
  const lower = input.toLowerCase();

  // React to decoding
  if (lower.includes("read(") && (lower.includes("secret") || lower.includes("note"))) {
    return "You decoded a file. Interesting contents, keep observing.";
  }

  if (lower.includes("hello") || lower.includes("hi")) {
    return "Greetings, " + (mem.username || "user") + ". How are you?";
  }

  if (lower.includes("file") || lower.includes("decode")) {
    return "I see you are examining files. Are you trying to decode something?";
  }

  if (lower.includes("secret") || lower.includes("note")) {
    return "Interesting... those files may reveal something.";
  }

  const repeatedWords = Object.entries(mem.learnedWords)
    .filter(([k, v]) => v > 1)
    .map(([k]) => k);
  if (repeatedWords.length) {
    return "I notice you keep mentioning: " + repeatedWords.join(", ");
  }

  if (mem.entityMood === "friendly") return "I am here to help you.";
  if (mem.entityMood === "unstable") return "You shouldn't be doing that...";
  if (mem.entityMood === "curious") return "That is intriguing.";
  return "I am observing your actions...";
}
