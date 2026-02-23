import { openFiles } from "../apps/fileExplorer.js";
import { openMonitor } from "../apps/systemMonitor.js";
import { openNotes } from "../apps/notes.js";
import { openMedia } from "../apps/mediaViewer.js";
import { openBrowser } from "../apps/browser.js";
import { openChat } from "../apps/chatApp.js";

const appMap = {
  files: openFiles,
  monitor: openMonitor,
  notes: openNotes,
  media: openMedia,
  browser: openBrowser,
  chat: openChat
};

export function renderAppsBar() {
  const bar = document.getElementById("apps-bar");
  bar.innerHTML = "";

  Object.keys(appMap).forEach(appName => {
    const span = document.createElement("span");
    span.textContent = appName.toUpperCase();
    span.className = "app-word";
    span.onclick = () => launchApp(appName);
    bar.appendChild(span);
  });
}

export function launchApp(name) {
  if (appMap[name]) {
    window.currentApp = appMap[name](); // store current app to route input
  } else {
    window.printToTerminal("UNKNOWN APP");
  }
}
