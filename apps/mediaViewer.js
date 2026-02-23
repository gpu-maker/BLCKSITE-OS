import { decodeTextFile } from "../entity/learningEngine.js";

const mediaFiles = {
  "secret1.txt": "... --- ... / - .... .. ... / .. ... / .- / ... . -.-. .-. . -",
  "secret2.txt": ".-- . / .... .- ...- . / .- / -.-. --- -.. . -.. / -. --- - .",
  "note1.txt": "- .... .. ... / .. ... / .- -. --- - - .... . .-. / --. ..- .. -.. ."
};

export function openMedia() {
  window.printToTerminal("MEDIA VIEWER ACTIVE");
  window.printToTerminal("Available Morse code text files:");
  Object.keys(mediaFiles).forEach(f => window.printToTerminal("- " + f));
  window.printToTerminal("Use read('<filename>') to decode a file");

  return {
    command: cmd => {
      if (cmd.startsWith("read(") && cmd.endsWith(")")) {
        const filename = cmd.slice(5, -1).replace(/['"]/g, "");
        if (mediaFiles[filename]) {
          const decoded = decodeTextFile(mediaFiles[filename]);
          window.printToTerminal(filename + ": " + decoded);
        } else {
          window.printToTerminal("FILE NOT FOUND");
        }
      } else {
        window.printToTerminal("Unknown command for Media Viewer");
      }
    }
  };
}
