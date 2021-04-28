// Change page default head tag
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

// Insert custom page header
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

// Remove all base script
/*
function promWait() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("after 5s");
      }, 5000);
    });
}

promWait().then((result) => {
    let script_length = document.scripts.length;
    console.log(result);
    
    if (script_length > 1) {
        for (let index = 1; index < script_length; index++) {
            console.log(document.scripts);
            document.scripts[1].remove();
        }
    }
});
*/

setTimeout(() => {
    for (let index = 1; index < document.scripts.length; index++) {
        console.log(document.scripts);
        document.scripts[1].remove();
    }
  }, 5000);



