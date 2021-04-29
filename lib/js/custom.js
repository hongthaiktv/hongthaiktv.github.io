// Change page default head tag
document.head.innerHTML = `<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>THAI NGUYEN WIKI PAGE</title>
    <link rel="stylesheet" type="text/css" href="lib/css/style.css">
    `;

// Insert custom page header
var page_header = document.body.querySelector("header");
page_header.innerHTML = `<div class="inner">
<a href="https://hongthaiktv.github.io/">
    <h1>THAI NGUYEN</h1>
</a>
<h2>My basic learning code</h2>
    <a href="https://github.com/hongthaiktv/" class="button"><small>View repositories on</small> GitHub</a>
</div>`;

// Create right panel ToC
setTimeout(() => {
    let r_panel = document.body.querySelector("#sidebar");
    r_panel.firstElementChild.remove();
    let r_panel_items = document.body.querySelectorAll("h6");
    r_panel_items.forEach(element => {
        r_panel.appendChild(element);
    });
}, 500);

