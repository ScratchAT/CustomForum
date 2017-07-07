// ==UserScript==
// @name         ForumTesting
// @namespace    https://github.com/ScratchAT/CustomForum/
// @version      0.8
// @description  try to take over the world!
// @updateURL    https://github.com/ScratchAT/CustomForum/raw/master/forum.user.js
// @author       herohamp
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    function httpGet(theUrl) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
    if (window.location.pathname == "/discuss/-1/") {
        window.location = "/discuss/31/?atprivatesupercoolsohaha";
    }

    if (window.location.pathname.replace("/discuss/-1/post/") != window.location.pathname) {
        window.location = "https://scratch.mit.edu/discuss/topic/269455/?atprivatesupercoolsohaha&postid=" + window.location.pathname.replace("/discuss/-1/post/", "");
    }

    if ((window.location.pathname + window.location.search).replace("/discuss/topic/269455/?atprivatesupercoolsohaha", "") != (window.location.pathname + window.location.search)) {
        $(".blockpost.roweven.firstpost").remove();
        info = {
            number: 7,
            time: 1499391922,
            username: "herohamp",
            text: "HELLO!"
        }
        $(".linkst").after(`<div id="p2714321"class="blockpost roweven firstpost"><a name="post-2714321"></a><div class="box"><div class="box-head"><span class="conr">${info.number}</span><a href="#">${info.time}</a></div><div class="box-content"><div class="postleft"><dl><dt><a class="black username"href="/users/${info.username}/">${info.username}</a></dt><dd class="postavatar"><a href="/users/${info.username}/"><img src="https://placeholdit.imgix.net/~text?txtsize=25&txt=No%20Image%20Support&w=90&h=90"width="90"height="90"></a></dd>Super ATer of Awesomeness<br></dl></div><div class="postright"><h3>The AT GitHub</h3><div class="postmsg"><div class="post_body_html">${info.text}</div></div></div><div class="clearer"></div><div class="postfootleft"></div><div class="postfootright"><ul><li class="postquote">|<a onclick="return copy_paste('p2714321');"href="#reply"title="Insert a quotation of this post in your reply.">Quote</a></li></ul></div></div></div></div>`);
    }

    if (window.location.pathname + window.location.search == "/discuss/31/?atprivatesupercoolsohaha") {
        history.pushState(null, "The Secret forum!", "/discuss/-1/");
        document.title = "The Secret Forum!";
        $("tbody")[0].innerHTML = "";
        var replaced = $("body").html().replace(/Advanced Topics/g, 'The Secret Forum');
        $("body").html(replaced);
        $(".pagination").remove();

        var posts = JSON.parse(httpGet("https://f1-scratch-herohamp.c9users.io/posts"));



        for (var i in posts) {
            var info = posts[i];
            $("tbody").append(`<tr><td class="tcl"><div class="intd"><div class="nosize"></div></div><div class="inew"><div class="nosize"></div></div><div class="tclcon"><h3><a href="${info.link}">${info.postName}</a></h3><span class="byuser"> by ${info.owner}</span></div></td><td class="tc2">${info.reps}</td><td class="tc3">${info.views}</td><td class="tcr"><a href="${info.links}">${info.latestdate}</a> <span class="byuser">by ${info.latestowner}</span></td></tr>`);

        }

    }
})();
