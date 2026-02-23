import { loadMemory, saveMemory } from "../system/memory.js";

// Learning system
export function learn(text) {
  const mem = loadMemory();
  text.split(" ").forEach(w => {
    mem.learnedWords[w] = (mem.learnedWords[w] || 0) + 1;
  });
  mem.history.push(text);
  saveMemory(mem);
}

// Morse code map
const MORSE_CODE = {
  ".-":"A","-...":"B","-.-.":"C","-..":"D",".":"E","..-.":"F",
  "--.":"G","....":"H","..":"I",".---":"J","-.-":"K",".-..":"L",
  "--":"M","-.":"N","---":"O",".--.":"P","--.-":"Q",".-.":"R",
  "...":"S","-":"T","..-":"U","...-":"V",".--":"W","-..-":"X",
  "-.--":"Y","--..":"Z",
  "-----":"0",".----":"1","..---":"2","...--":"3","....-":"4",
  ".....":"5","-....":"6","--...":"7","---..":"8","----.":"9",
  "/":" "
};

export function decodeTextFile(encoded) {
  return encoded
    .split(" ")
    .map(symbol => MORSE_CODE[symbol] || "?")
    .join("");
}
