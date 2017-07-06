// ==UserScript==
// @name         Forum
// @namespace    https://github.com/ScratchAT/CustomForum/
// @version      0.3
// @description  try to take over the world!
// @updateURL    https://github.com/ScratchAT/CustomForum/raw/master/forum.user.js
// @author       herohamp
// @match        https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (window.location.pathname == "/discuss/-1/"){
        window.location = "/discuss/31/?atprivatesupercoolsohaha";
    }
    if (window.location.pathname+window.location.search == "/discuss/31/?atprivatesupercoolsohaha"){
        history.pushState(null, "The Secret forum!", "/discuss/-1/");
        document.title = "The Secret Forum!";
        $("tbody")[0].innerHTML="";
        var replaced = $("body").html().replace(/Advanced Topics/g,'The Secret Forum');
        $("body").html(replaced);
    }
})();
