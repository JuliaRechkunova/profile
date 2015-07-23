/**
 * csstime
 * Thu, 23 Jul 2015 16:50:59 GMT
 */
!function(){"use strict";function n(){var n={position:t,delay:e,easing:"spring",springConstant:.3,springDeceleration:.8};return 0===d--?void snabbt(u,n):(snabbt(u,n).then({position:i,delay:o,easing:"easeIn"}),void r())}function t(n){return[0,Number(u[n].getAttribute("data-y")),0]}function e(n){return n*c}function i(){return[0,0,0]}function o(n){return s+n*c}function r(){setTimeout(n,a)}if("addEventListener"in document){var u=document.getElementsByTagName("circle"),a=15e3,s=5e3,c=30,d=10;document.addEventListener("DOMContentLoaded",function(){setTimeout(n,1e3)})}}();