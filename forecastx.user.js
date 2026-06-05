// ==UserScript==
// @name         ForecastX Bloxflip Bottom Bar
// @namespace    forecastx-safe-helper
// @version      1.2
// @description  Horizontal ForecastX bottom UI for public odds calculations only. No auto-betting, no exploiting, no server prediction.
// @match        https://bloxflip.com/*
// @match        https://www.bloxflip.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    const old = document.getElementById("forecastx-panel");
    if (old) old.remove();

    const panel =