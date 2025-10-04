function encodeBase64() {
  const input = document.getElementById("base64Input").value;
  document.getElementById("base64Output").innerText = btoa(input);
}

function decodeBase64() {
  const input = document.getElementById("base64Input").value;
  try {
    document.getElementById("base64Output").innerText = atob(input);
  } catch {
    document.getElementById("base64Output").innerText = "Invalid Base64!";
  }
}

function formatJSON() {
  const input = document.getElementById("jsonInput").value;
  try {
    const formatted = JSON.stringify(JSON.parse(input), null, 2);
    document.getElementById("jsonOutput").innerText = formatted;
  } catch {
    document.getElementById("jsonOutput").innerText = "Invalid JSON!";
  }
}
