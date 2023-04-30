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
    improve: true,
  };

  const response = await mockRequest({
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });

  return response?.message;
  // const response = await fetch(URL, {
  //   method: "POST",
  //   headers: headers,
  //   body: JSON.stringify(body),
  // });
  //
  // return await response.json();
}

async function mockRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: `const a = 10\nconst boo = 10\n\nif(a === 10) {\n  console.log('bar')\n}`,
      });
    }, 3000);
  });
}

export {getImprovedCode};