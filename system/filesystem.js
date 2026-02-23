export function getFiles(instability) {
  const base = ["report.txt", "archive.log", "notice.txt"];

  if (instability > 3) base.push("unknown_process.log");
  if (instability > 7) base.push("YOU_WERE_HERE.txt");

  return base;
}
