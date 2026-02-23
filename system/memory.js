const KEY = "reality_glitch_memory";

export function loadMemory() {
  return JSON.parse(localStorage.getItem(KEY)) || {
    username: null,
    history: [],
    learnedWords: {},
    notes: [],
    instability: 0,
    entityMood: "observing"
  };
}

export function saveMemory(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
