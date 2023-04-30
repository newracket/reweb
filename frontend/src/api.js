async function getImprovedCode(code) {
  const base64 = btoa(code);

  const URL = "http://localhost:5000/improve";
  const headers = {
    "Content-Type": "application/json",
  };
  const body = {
    message: base64,
    bugs: true,
    comments: true,
    improve: false,
  };

  const response = await fetch(URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
  const message = await response.json();
  console.log(message);
  const decodedMessage = atob(message);
  console.log(decodedMessage);
  const newCode = decodedMessage.replace("\n```", "").replace("```html\n", "");
  console.log(newCode);

  return newCode;
}

export { getImprovedCode };
