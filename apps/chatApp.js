import { respond } from "../entity/chatEngine.js";

export function openChat() {
  window.printToTerminal("ENTITY CHAT ACTIVE");
  window.printToTerminal("type: talk('<message>') to speak");
}

window.talk = function(msg) {
  const reply = respond(msg);

  setTimeout(() => {
    window.printToTerminal("ENTITY: " + reply);
  }, 700);
}
