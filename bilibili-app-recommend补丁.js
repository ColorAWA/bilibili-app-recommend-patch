// ==UserScript==
// @name         bilibili-app-recommend补丁
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  解决安装bilibili-app-recommend脚本后出现两个分类栏
// @author       MilkSC_
// @match        https://www.bilibili.com/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // 等待页面加载完成
  window.addEventListener('load', function() {
      // 找到需要删除的 div 标签
      var headerChannelFixedDiv = document.querySelector('.header-channel-fixed');
      if (headerChannelFixedDiv) {
          // 从 DOM 中删除该标签
          headerChannelFixedDiv.parentNode.removeChild(headerChannelFixedDiv);
      }
  });
})();
