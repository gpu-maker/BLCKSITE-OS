import { respond } from "../entity/chatEngine.js";

export function openChat() {
  window.printToTerminal("ENTITY CHAT ACTIVE");
  window.printToTerminal("Type your messages. Entity will respond intelligently.");

  return {
    command: cmd => {
      const reply = respond(cmd);
      setTimeout(() => window.printToTerminal("ENTITY: " + reply), 700);
    }
  };
}
