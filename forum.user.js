// ==UserScript==
// @name         ForumTesting
// @namespace    https://github.com/ScratchAT/CustomForum/
// @version      0.4
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
        
        function add(info){
            $("tbody").append(`<tr><td class="tcl"><div class="intd"><div class="nosize"></div></div><div class="inew"><div class="nosize"></div></div><div class="tclcon"><h3><a href="${info.links}">${info.postName}</a></h3><span class="byuser"> by ${info.owner}</span></div></td><td class="tc2">${info.reps}</td><td class="tc3">${info.views}</td><td class="tcr"><a href="${info.links}">${info.latestdate}</a> <span class="byuser">by ${post.latestowner}</span></td></tr>`);

        }
        
        
        //just for testing
        var post = {
            link:"/discuss/-1/1",
            postName:"Welcome",
            reps:"1",
            views:"99999",
            owner:"DatOneLefty",
            date:"1499353235",
            latestowner:"herohamp",
            latestdate:"1499353236"

        }
        
        add(post);
        
    }
})();
