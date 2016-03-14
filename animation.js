/**
 * csstime
 * Mon, 14 Mar 2016 21:57:43 GMT
 */
!function(){"use strict";function n(){var n={position:t,delay:e,easing:"spring",springConstant:.3,springDeceleration:.8};0!==d--&&(snabbt(u,n).snabbt({position:i,delay:o,easing:"easeIn"}),r())}function t(n){return[0,Number(u[n].getAttribute("data-y")),0]}function e(n){return n*c}function i(n){return[0,0,0]}function o(n){return s+n*c}function r(){setTimeout(n,a)}if("addEventListener"in document){var u=document.getElementsByTagName("circle"),a=15e3,s=3e3,c=30,d=1;document.addEventListener("DOMContentLoaded",function(){setTimeout(n,2e3)})}}();