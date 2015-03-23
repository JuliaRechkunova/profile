/**
 * csstime
 * Mon, 23 Mar 2015 17:37:49 GMT
 */
!function(){"use strict";function n(){snabbt(r,{position:e,delay:t,easing:"spring",springConstant:.3,springDeceleration:.8}).then({position:i,delay:o,easing:"easeIn"}),u()}function e(n){return[0,Number(r[n].getAttribute("data-y")),0]}function t(n){return n*c}function i(){return[0,0,0]}function o(n){return a+n*c}function u(){setTimeout(n,s)}if("addEventListener"in document){var r=document.getElementsByTagName("circle"),s=15e3,a=5e3,c=30;document.addEventListener("DOMContentLoaded",function(){setTimeout(n,1e3)})}}();