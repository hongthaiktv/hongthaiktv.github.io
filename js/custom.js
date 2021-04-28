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

function listAllEventListeners() {
    const allElements = Array.prototype.slice.call(document.querySelectorAll('*'));
    allElements.push(document);
    allElements.push(window);
  
    const types = [];
  
    for (let ev in window) {
      if (/^on/.test(ev)) types[types.length] = ev;
    }
  
    let elements = [];
    for (let i = 0; i < allElements.length; i++) {
      const currentElement = allElements[i];
      for (let j = 0; j < types.length; j++) {
        if (typeof currentElement[types[j]] === 'function') {
          elements.push({
            "node": currentElement,
            "type": types[j],
            "func": currentElement[types[j]].toString(),
          });
        }
      }
    }
  
    return elements.sort(function(a,b) {
      return a.type.localeCompare(b.type);
    });
  }

setTimeout(() => {
    document.querySelectorAll("script:not(#cst_script)").forEach(element => {
        element.remove();
    });
    console.log(listAllEventListeners());
  }, 5000);


