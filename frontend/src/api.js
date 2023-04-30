async function getImprovedCode(code, second) {
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

  const response = await mockRequest({
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  }, second);

  return response?.message;
  // const response = await fetch(URL, {
  //   method: "POST",
  //   headers: headers,
  //   body: JSON.stringify(body),
  // });
  // const message = await response.json();
  // console.log(message);
  // const decodedMessage = atob(message);
  // console.log(decodedMessage);
  // const newCode = decodedMessage.replace("\n```", "").replace("```html\n", "");
  // console.log(newCode);
  //
  // return newCode;
}

async function mockRequest(options, second) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (second !== true) {
        resolve({
          message: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>The Big Ugly Website</title>
    <meta name="description" content="The Big Ugly Website">
    <meta name="keywords" content="big ugly website, big, ugly, website">
</head>
<body>

    <!--  Header div to represent a header in the website  -->
    <div id="header">
        <!--  Represents the company's strapline  -->
        <span class="strapline">
            <!--  Image with the website logo  -->
            <img align="left" width="450" src="http://i46.tinypic.com/262y7hz.jpg" alt="The Big Ugly Website Logo">
        </span>
    </div>
</body>
</html>`,
        });
      } else {
        resolve({
          message: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <!-- Meta data for the website  -->
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <!-- Title of the website  -->
    <title>The Big Ugly Website</title>
    <meta name="description" content="The Big Ugly Website">
    <meta name="keywords" content="big ugly website, big, ugly, website">
</head>
<body>

    <!--  Header of the website  -->
    
    <div id="header">
        <!--  Company strapline  -->
        
        <span class="strapline">
            <img align="left" width="450" src="http://i46.tinypic.com/262y7hz.jpg" alt="The Big Ugly Website Logo">
        </span>
    </div>
</body>
</html>`,
        });
      }
    }, 3000);
  });
}

export { getImprovedCode };
