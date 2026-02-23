import { loadMemory } from "../system/memory.js";
import { learn } from "./learningEngine.js";

export function respond(input) {
  learn(input);

  const mem = loadMemory();
  const lower = input.toLowerCase();

  // React to keywords
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Greetings, " + (mem.username || "user") + ". How are you?";
  }

  if (lower.includes("file") || lower.includes("decode")) {
    return "I see you are examining files. Are you trying to decode something?";
  }

  if (lower.includes("secret") || lower.includes("note")) {
    return "Interesting... those files may reveal something.";
  }

  // Use learned words to build context
  const repeatedWords = Object.entries(mem.learnedWords)
    .filter(([k, v]) => v > 1)
    .map(([k]) => k);
  if (repeatedWords.length) {
    return "I notice you keep mentioning: " + repeatedWords.join(", ");
  }

  // Mood-based responses
  if (mem.entityMood === "friendly") return "I am here to help you.";
  if (mem.entityMood === "unstable") return "You shouldn't be doing that...";
  if (mem.entityMood === "curious") return "That is intriguing.";
  return "I am observing your actions...";
}
