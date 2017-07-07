// ==UserScript==
// @name         ForumTesting
// @namespace    https://github.com/ScratchAT/CustomForum/
// @version      0.6
// @description  try to take over the world!
// @updateURL    https://github.com/ScratchAT/CustomForum/raw/master/forum.user.js
// @author       herohamp
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
    if (window.location.pathname == "/discuss/-1/"){
        window.location = "/discuss/31/?atprivatesupercoolsohaha";
    }
    if (window.location.pathname+window.location.search == "/discuss/31/?atprivatesupercoolsohaha"){
        history.pushState(null, "The Secret forum!", "/discuss/-1/");
        document.title = "The Secret Forum!";
        $("tbody")[0].innerHTML="";
        var replaced = $("body").html().replace(/Advanced Topics/g,'The Secret Forum');
        $("body").html(replaced);
        $(".pagination").remove();
        
        var posts = JSON.parse(httpGet("https://f1-scratch-herohamp.c9users.io/posts"));
        
        for (var i in posts){
            var info = posts[i];
            $("tbody").append(`<tr><td class="tcl"><div class="intd"><div class="nosize"></div></div><div class="inew"><div class="nosize"></div></div><div class="tclcon"><h3><a href="${info.links}">${info.postName}</a></h3><span class="byuser"> by ${info.owner}</span></div></td><td class="tc2">${info.reps}</td><td class="tc3">${info.views}</td><td class="tcr"><a href="${info.links}">${info.latestdate}</a> <span class="byuser">by ${info.latestowner}</span></td></tr>`);

        }
        
    }
})();
