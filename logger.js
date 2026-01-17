function logEvent(text) {
  const list = document.getElementById("logList");
  const item = document.createElement("li");
  item.innerText = formatLog(text);
  list.appendChild(item);
}
