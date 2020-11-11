// ==UserScript==
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// @name         reset_熊猫书签
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  login in ex with cookie
// @author       Reset Kalar
// @match        https://exhentai.org/favicon.ico
// @grant        none
// ==/UserScript==

$(document).ready(function() {
    //f3f4a017e9f59ef81eacc3c6960e03865395752x937c5acb3
    var ipb_member_id="5395752"
    var ipb_pass_hash="f3f4a017e9f59ef81eacc3c6960e0386"
    var igneous="937c5acb3"
    var domain=".exhentai.org"
    var expires="Thu, 01 Jan 2099 00:00:00 GMT"
    document.cookie = "ipb_member_id="+ipb_member_id+";expires="+expires+";domain="+domain+";"
    document.cookie = "ipb_pass_hash="+ipb_pass_hash+";expires="+expires+";domain="+domain+";"
    document.cookie = "igneous="+igneous+";expires="+expires+";domain="+domain+";"

    setTimeout(gotoEx(),2*1000)
});

function gotoEx(){
    window.location.href="https://exhentai.org";
}