  document.head.innerHTML = `<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>HONGTHAIKTV WIKI PAGE</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <style>
      div.markdown-body {
        margin: 20px;
      }
    </style>
    `;

    var markdown_body = document.querySelector("div.markdown-body");
    var page_header = document.createElement("header");
    markdown_body.querySelector("h1").remove();
    page_header.innerHTML = `<div class="inner">
    <a href="https://hongthaiktv.github.io/">
      <h1>HONGTHAIKTV</h1>
    </a>
    <h2>My basic learning code</h2>
      <a href="https://github.com/hongthaiktv/" class="button"><small>View repositories on</small> GitHub</a>
  </div>`;
    document.body.insertBefore(page_header, markdown_body);
