// ==UserScript==
// @name 熊猫书签
// @namespace https://resetkala.github.io/reset_expanda/
// @description zh-cn/
// @license WTFPL
// @version 28
// @match https://resetkala.github.io/reset_expanda/
// @match *://exhentai.org/*
// @match *://e-hentai.org/*
// @grant none
// ==/UserScript==
(function () {
    'use strict';

    function panda_init(c) {
        if (c >= 3) {
            return;
        }
        ;let n = ['https://resetkala.github.io/reset_expanda'];
        let t = setTimeout(function () {
            clearTimeout(t);
            panda_init(c + 1);
        }, 3000);
        let s = document.createElement('script');
        s.src = (n[c] ? n[c] : n[0]) + 'panda.js?' + parseInt(Date.parse(new Date()) / 600000) + c;
        s.onerror = function () {
            clearTimeout(t);
            panda_init(c + 1);
        };
        s.onload = function () {
            clearTimeout(t);
        };
        s.setAttribute('exkey', 'f3f4a017e9f59ef81eacc3c6960e03865395752x937c5acb3');
        document.body.appendChild(s);
    };
    if (document.getElementById('expanda')) {
        document.getElementById('expanda').style.display = '';
    } else {
        panda_init(0);
    }
    ;
})();