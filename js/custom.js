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
markdown_body.id = "main-content"
page_header.innerHTML = `<div class="inner">
<a href="https://hongthaiktv.github.io/">
    <h1>HONGTHAIKTV</h1>
</a>
<h2>My basic learning code</h2>
    <a href="https://github.com/hongthaiktv/" class="button"><small>View repositories on</small> GitHub</a>
</div>`;
document.body.insertBefore(page_header, markdown_body);

//Re-create template element
var cnt_wrapper = document.createElement("div");
cnt_wrapper.id = "content-wrapper";
cnt_wrapper.innerHTML = "<div class='inner clearfix'><section id='main-content'></section></div>";
cnt_wrapper.querySelector("section").innerHTML = markdown_body.innerHTML;
markdown_body.remove();
document.body.appendChild(cnt_wrapper);

//Create right panel to auto assign with class "repo-owner"
var right_panel = document.createElement("aside");
right_panel.id = "sidebar";
var rpanel_elements = document.body.querySelectorAll(".repo-owner");
rpanel_elements.forEach(element => {
    right_panel.appendChild(element);
});
document.body.appendChild(right_panel);
