import { respond } from "../entity/chatEngine.js";

export function openChat() {
  window.printToTerminal("ENTITY CHAT ACTIVE");
  window.printToTerminal("type: talk('<message>') or just type messages");

  return {
    command: cmd => {
      let msg = cmd;
      if (cmd.startsWith("talk(") && cmd.endsWith(")")) {
        msg = cmd.slice(5, -1).replace(/['"]/g, "");
      }
      const reply = respond(msg);
      setTimeout(() => window.printToTerminal("ENTITY: " + reply), 700);
    }
  };
}
