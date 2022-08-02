// ==UserScript==
// @name         bilibili AD away
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hide bilibili homepage's ADs.
// @author       moz
// @match        *://www.bilibili.com/*
// @match        *://bangumi.bilibili.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

// 隐藏推广
var ad=document.getElementsByClassName("eva-extension-area");
    if(ad!=null){ ad[0].setAttribute("hidden",true);};
})();