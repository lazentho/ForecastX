// ==UserScript==
// @name         ForecastX Menu 4 UI
// @namespace    https://github.com/lazentho/ForecastX
// @version      1.0.0
// @description  Futuristic Menu 4 neon dashboard overlay. Cosmetic/demo UI only.
// @author       lazentho
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  if (window.__forecastXMenu4Loaded) return;
  window.__forecastXMenu4Loaded = true;

  const GREEN = "#39FF14";
  const PURPLE = "#