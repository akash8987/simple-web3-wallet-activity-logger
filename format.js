function formatLog(text) {
  const time = new Date().toLocaleTimeString();
  return "[" + time + "] " + text;
}
