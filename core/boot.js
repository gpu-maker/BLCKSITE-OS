import { loadMemory } from "../system/memory.js";
import { renderAppsBar } from "./windowManager.js";

const print = text => window.printToTerminal(text);

setTimeout(() => {
  print("REALITY GLITCH OS v0.9");
  print("UNITED STATES GOVERNMENT PROPERTY");
  print("UNAUTHORIZED ACCESS PROHIBITED");
  print("LOADING...");
}, 200);

setTimeout(() => {
  const mem = loadMemory();

  if (!mem.username) {
    print("IDENTIFY USER:");
  } else {
    print("WELCOME BACK " + mem.username);
  }

  renderAppsBar(); // clickable apps
}, 800);
