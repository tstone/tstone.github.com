/*!
 * reveal.js 2.4.0 (2013-04-29, 22:06)
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal=function(){"use strict";function e(e){return Me||ke?(window.addEventListener("load",h,!1),c(be,e),n(),void r()):void document.body.setAttribute("class","no-transforms")}function t(){if(Te.theme=document.querySelector("#theme"),Te.wrapper=document.querySelector(".reveal"),Te.slides=document.querySelector(".reveal .slides"),!Te.wrapper.querySelector(".progress")){var e=document.createElement("div");e.classList.add("progress"),e.innerHTML="<span></span>",Te.wrapper.appendChild(e)}if(!Te.wrapper.querySelector(".controls")){var t=document.createElement("aside");t.classList.add("controls"),t.innerHTML='<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>',Te.wrapper.appendChild(t)}if(!Te.wrapper.querySelector(".state-background")){var n=document.createElement("div");n.classList.add("state-background"),Te.wrapper.appendChild(n)}if(!Te.wrapper.querySelector(".pause-overlay")){var r=document.createElement("div");r.classList.add("pause-overlay"),Te.wrapper.appendChild(r)}Te.progress=document.querySelector(".reveal .progress"),Te.progressbar=document.querySelector(".reveal .progress span"),be.controls&&(Te.controls=document.querySelector(".reveal .controls"),Te.controlsLeft=l(document.querySelectorAll(".navigate-left")),Te.controlsRight=l(document.querySelectorAll(".navigate-right")),Te.controlsUp=l(document.querySelectorAll(".navigate-up")),Te.controlsDown=l(document.querySelectorAll(".navigate-down")),Te.controlsPrev=l(document.querySelectorAll(".navigate-prev")),Te.controlsNext=l(document.querySelectorAll(".navigate-next")))}function n(){/iphone|ipod|android/gi.test(navigator.userAgent)&&!/crios/gi.test(navigator.userAgent)&&(window.addEventListener("load",u,!1),window.addEventListener("orientationchange",u,!1))}function r(){function e(){n.length&&head.js.apply(null,n),o()}for(var t=[],n=[],r=0,a=be.dependencies.length;a>r;r++){var s=be.dependencies[r];(!s.condition||s.condition())&&(s.async?n.push(s.src):t.push(s.src),"function"==typeof s.callback&&head.ready(s.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],s.callback))}t.length?(head.ready(e),head.js.apply(null,t)):e()}function o(){t(),a(),H(),setTimeout(function(){f("ready",{indexh:Se,indexv:Ae,currentSlide:he})},1)}function a(e){if(Te.wrapper.classList.remove(be.transition),"object"==typeof e&&c(be,e),ke===!1&&(be.transition="linear"),Te.wrapper.classList.add(be.transition),Te.wrapper.setAttribute("data-transition-speed",be.transitionSpeed),Te.controls&&(Te.controls.style.display=be.controls&&Te.controls?"block":"none"),Te.progress&&(Te.progress.style.display=be.progress&&Te.progress?"block":"none"),be.rtl?Te.wrapper.classList.add("rtl"):Te.wrapper.classList.remove("rtl"),be.center?Te.wrapper.classList.add("center"):Te.wrapper.classList.remove("center"),be.mouseWheel?(document.addEventListener("DOMMouseScroll",oe,!1),document.addEventListener("mousewheel",oe,!1)):(document.removeEventListener("DOMMouseScroll",oe,!1),document.removeEventListener("mousewheel",oe,!1)),be.rollingLinks?v():p(),be.theme&&Te.theme){var t=Te.theme.getAttribute("href"),n=/[^\/]*?(?=\.css)/,r=t.match(n)[0];be.theme!==r&&(t=t.replace(n,be.theme),Te.theme.setAttribute("href",t))}P()}function s(){Ye=!0,window.addEventListener("hashchange",fe,!1),window.addEventListener("resize",ve,!1),be.touch&&(Te.wrapper.addEventListener("touchstart",G,!1),Te.wrapper.addEventListener("touchmove",J,!1),Te.wrapper.addEventListener("touchend",ee,!1),window.navigator.msPointerEnabled&&(Te.wrapper.addEventListener("MSPointerDown",te,!1),Te.wrapper.addEventListener("MSPointerMove",ne,!1),Te.wrapper.addEventListener("MSPointerUp",re,!1))),be.keyboard&&document.addEventListener("keydown",B,!1),be.progress&&Te.progress&&Te.progress.addEventListener("click",ae,!1),be.controls&&Te.controls&&["touchstart","click"].forEach(function(e){Te.controlsLeft.forEach(function(t){t.addEventListener(e,se,!1)}),Te.controlsRight.forEach(function(t){t.addEventListener(e,ie,!1)}),Te.controlsUp.forEach(function(t){t.addEventListener(e,ce,!1)}),Te.controlsDown.forEach(function(t){t.addEventListener(e,le,!1)}),Te.controlsPrev.forEach(function(t){t.addEventListener(e,de,!1)}),Te.controlsNext.forEach(function(t){t.addEventListener(e,ue,!1)})})}function i(){Ye=!1,document.removeEventListener("keydown",B,!1),window.removeEventListener("hashchange",fe,!1),window.removeEventListener("resize",ve,!1),Te.wrapper.removeEventListener("touchstart",G,!1),Te.wrapper.removeEventListener("touchmove",J,!1),Te.wrapper.removeEventListener("touchend",ee,!1),window.navigator.msPointerEnabled&&(Te.wrapper.removeEventListener("MSPointerDown",te,!1),Te.wrapper.removeEventListener("MSPointerMove",ne,!1),Te.wrapper.removeEventListener("MSPointerUp",re,!1)),be.progress&&Te.progress&&Te.progress.removeEventListener("click",ae,!1),be.controls&&Te.controls&&["touchstart","click"].forEach(function(e){Te.controlsLeft.forEach(function(t){t.removeEventListener(e,se,!1)}),Te.controlsRight.forEach(function(t){t.removeEventListener(e,ie,!1)}),Te.controlsUp.forEach(function(t){t.removeEventListener(e,ce,!1)}),Te.controlsDown.forEach(function(t){t.removeEventListener(e,le,!1)}),Te.controlsPrev.forEach(function(t){t.removeEventListener(e,de,!1)}),Te.controlsNext.forEach(function(t){t.removeEventListener(e,ue,!1)})})}function c(e,t){for(var n in t)e[n]=t[n]}function l(e){return Array.prototype.slice.call(e)}function d(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function u(){0===window.orientation?(document.documentElement.style.overflow="scroll",document.body.style.height="120%"):(document.documentElement.style.overflow="",document.body.style.height="100%"),setTimeout(function(){window.scrollTo(0,1)},10)}function f(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),c(n,t),Te.wrapper.dispatchEvent(n)}function v(){if(ke&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(ge+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var o=document.createElement("span");o.setAttribute("data-title",r.text),o.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(o)}}}function p(){for(var e=document.querySelectorAll(ge+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],o=r.querySelector("span");o&&(r.classList.remove("roll"),r.innerHTML=o.innerHTML)}}function m(e){var t=l(e);return t.forEach(function(e,t){e.hasAttribute("data-fragment-index")||e.setAttribute("data-fragment-index",t)}),t.sort(function(e,t){return e.getAttribute("data-fragment-index")-t.getAttribute("data-fragment-index")}),t}function h(){if(Te.wrapper){var e=Te.wrapper.offsetWidth,t=Te.wrapper.offsetHeight;e-=t*be.margin,t-=t*be.margin;var n=be.width,r=be.height;if("string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),Te.slides.style.width=n+"px",Te.slides.style.height=r+"px",xe=Math.min(e/n,t/r),xe=Math.max(xe,be.minScale),xe=Math.min(xe,be.maxScale),void 0===Te.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)){var o="translate(-50%, -50%) scale("+xe+") translate(50%, 50%)";Te.slides.style.WebkitTransform=o,Te.slides.style.MozTransform=o,Te.slides.style.msTransform=o,Te.slides.style.OTransform=o,Te.slides.style.transform=o}else Te.slides.style.zoom=xe;for(var a=l(document.querySelectorAll(ge)),s=0,i=a.length;i>s;s++){var c=a[s];"none"!==c.style.display&&(c.style.top=be.center?c.classList.contains("stack")?0:Math.max(-(c.offsetHeight/2)-20,-r/2)+"px":"")}N()}}function g(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function y(e){return"object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")?parseInt(e.getAttribute("data-previous-indexv")||0,10):0}function w(){if(be.overview){_();var e=Te.wrapper.classList.contains("overview");Te.wrapper.classList.add("overview"),Te.wrapper.classList.remove("exit-overview"),clearTimeout(Ce),clearTimeout(Oe),Ce=setTimeout(function(){for(var t=document.querySelectorAll(ye),n=0,r=t.length;r>n;n++){var o=t[n],a=be.rtl?-105:105,s="translateZ(-2500px) translate("+(n-Se)*a+"%, 0%)";if(o.setAttribute("data-index-h",n),o.style.display="block",o.style.WebkitTransform=s,o.style.MozTransform=s,o.style.msTransform=s,o.style.OTransform=s,o.style.transform=s,o.classList.contains("stack"))for(var i=o.querySelectorAll("section"),c=0,l=i.length;l>c;c++){var d=n===Se?Ae:y(o),u=i[c],v="translate(0%, "+105*(c-d)+"%)";u.setAttribute("data-index-h",n),u.setAttribute("data-index-v",c),u.style.display="block",u.style.WebkitTransform=v,u.style.MozTransform=v,u.style.msTransform=v,u.style.OTransform=v,u.style.transform=v,u.addEventListener("click",pe,!0)}else o.addEventListener("click",pe,!0)}h(),e||f("overviewshown",{indexh:Se,indexv:Ae,currentSlide:he})},10)}}function L(){if(be.overview){clearTimeout(Ce),clearTimeout(Oe),Te.wrapper.classList.remove("overview"),Te.wrapper.classList.add("exit-overview"),Oe=setTimeout(function(){Te.wrapper.classList.remove("exit-overview")},10);for(var e=l(document.querySelectorAll(ge)),t=0,n=e.length;n>t;t++){var r=e[t];r.style.display="",r.style.WebkitTransform="",r.style.MozTransform="",r.style.msTransform="",r.style.OTransform="",r.style.transform="",r.removeEventListener("click",pe,!0)}M(Se,Ae),F(),f("overviewhidden",{indexh:Se,indexv:Ae,currentSlide:he})}}function b(e){"boolean"==typeof e?e?w():L():E()?L():w()}function E(){return Te.wrapper.classList.contains("overview")}function S(e){return e=e?e:he,e&&!!e.parentNode.nodeName.match(/section/i)}function A(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function q(){var e=Te.wrapper.classList.contains("paused");_(),Te.wrapper.classList.add("paused"),e===!1&&f("paused")}function x(){var e=Te.wrapper.classList.contains("paused");Te.wrapper.classList.remove("paused"),F(),e&&f("resumed")}function T(){k()?x():q()}function k(){return Te.wrapper.classList.contains("paused")}function M(e,t,n,r){me=he;var o=document.querySelectorAll(ye);void 0===t&&(t=y(o[e])),me&&me.parentNode&&me.parentNode.classList.contains("stack")&&g(me.parentNode,Ae);var a=qe.concat();qe.length=0;var s=Se,i=Ae;Se=D(ye,void 0===e?Se:e),Ae=D(we,void 0===t?Ae:t),h();e:for(var c=0,d=qe.length;d>c;c++){for(var u=0;a.length>u;u++)if(a[u]===qe[c]){a.splice(u,1);continue e}document.documentElement.classList.add(qe[c]),f(qe[c])}for(;a.length;)document.documentElement.classList.remove(a.pop());E()&&w(),I(1500);var v=o[Se],p=v.querySelectorAll("section");if(he=p[Ae]||v,void 0!==n){var L=m(he.querySelectorAll(".fragment"));l(L).forEach(function(e,t){n>t?e.classList.add("visible"):e.classList.remove("visible")})}Se!==s||Ae!==i?f("slidechanged",{indexh:Se,indexv:Ae,previousSlide:me,currentSlide:he,origin:r}):me=null,me&&(me.classList.remove("present"),document.querySelector(Le).classList.contains("present")&&setTimeout(function(){var e,t=l(document.querySelectorAll(ye+".stack"));for(e in t)t[e]&&g(t[e],0)},0)),X(me),R(he),C(),N()}function P(){i(),s(),h(),Ee=be.autoSlide,F(),C(),N()}function D(e,t){var n=l(document.querySelectorAll(e)),r=n.length;if(r){be.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var o=0;r>o;o++){var a=n[o];if(E()===!1){var s=Math.abs((t-o)%(r-3))||0;a.style.display=s>3?"none":"block"}var i=be.rtl&&!S(a);a.classList.remove("past"),a.classList.remove("present"),a.classList.remove("future"),t>o?a.classList.add(i?"future":"past"):o>t&&a.classList.add(i?"past":"future"),a.querySelector("section")&&a.classList.add("stack")}n[t].classList.add("present");var c=n[t].getAttribute("data-state");c&&(qe=qe.concat(c.split(" ")));var d=n[t].getAttribute("data-autoslide");Ee=d?parseInt(d,10):be.autoSlide}else t=0;return t}function N(){if(be.progress&&Te.progress){var e=l(document.querySelectorAll(ye)),t=document.querySelectorAll(ge+":not(.stack)").length,n=0;e:for(var r=0;e.length>r;r++){for(var o=e[r],a=l(o.querySelectorAll("section")),s=0;a.length>s;s++){if(a[s].classList.contains("present"))break e;n++}if(o.classList.contains("present"))break;o.classList.contains("stack")===!1&&n++}Te.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function C(){if(be.controls&&Te.controls){var e=O(),t=Y();Te.controlsLeft.concat(Te.controlsRight).concat(Te.controlsUp).concat(Te.controlsDown).concat(Te.controlsPrev).concat(Te.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&Te.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&Te.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&Te.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&Te.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&Te.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&Te.controlsNext.forEach(function(e){e.classList.add("enabled")}),he&&(t.prev&&Te.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Te.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),S(he)?(t.prev&&Te.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Te.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&Te.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Te.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}}function O(){var e=document.querySelectorAll(ye),t=document.querySelectorAll(we),n={left:Se>0||be.loop,right:e.length-1>Se||be.loop,up:Ae>0,down:t.length-1>Ae};if(be.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function Y(){if(he&&be.fragments){var e=he.querySelectorAll(".fragment"),t=he.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function R(e){e&&(l(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),l(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function X(e){e&&(l(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),l(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function H(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var o=Reveal.getIndices(r);M(o.h,o.v)}else M(Se,Ae)}else{var a=parseInt(t[0],10)||0,s=parseInt(t[1],10)||0;M(a,s)}}function I(e){if(be.history)if(clearTimeout(Ne),"number"==typeof e)Ne=setTimeout(I,e);else{var t="/";he&&"string"==typeof he.getAttribute("id")?t="/"+he.getAttribute("id"):((Se>0||Ae>0)&&(t+=Se),Ae>0&&(t+="/"+Ae)),window.location.hash=t}}function W(e){var t,n=Se,r=Ae;if(e){var o=S(e),a=o?e.parentNode:e,s=l(document.querySelectorAll(ye));n=Math.max(s.indexOf(a),0),o&&(r=Math.max(l(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&he){var i=he.querySelectorAll(".fragment.visible");i.length&&(t=i.length)}return{h:n,v:r,f:t}}function U(){if(he&&be.fragments){var e=m(he.querySelectorAll(".fragment:not(.visible)"));if(e.length)return e[0].classList.add("visible"),f("fragmentshown",{fragment:e[0]}),C(),!0}return!1}function z(){if(he&&be.fragments){var e=m(he.querySelectorAll(".fragment.visible"));if(e.length)return e[e.length-1].classList.remove("visible"),f("fragmenthidden",{fragment:e[e.length-1]}),C(),!0}return!1}function F(){clearTimeout(De),!Ee||k()||E()||(De=setTimeout(Q,Ee))}function _(){clearTimeout(De)}function j(){be.rtl?(E()||U()===!1)&&O().left&&M(Se+1):(E()||z()===!1)&&O().left&&M(Se-1)}function K(){be.rtl?(E()||z()===!1)&&O().right&&M(Se-1):(E()||U()===!1)&&O().right&&M(Se+1)}function $(){(E()||z()===!1)&&O().up&&M(Se,Ae-1)}function V(){(E()||U()===!1)&&O().down&&M(Se,Ae+1)}function Z(){if(z()===!1)if(O().up)$();else{var e=document.querySelector(ye+".past:nth-child("+Se+")");e&&(Ae=e.querySelectorAll("section").length+1||void 0,Se--,M(Se,Ae))}}function Q(){U()===!1&&(O().down?V():K()),F()}function B(e){document.activeElement;var t=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){var n=!0;if(k()&&-1===[66,190,191].indexOf(e.keyCode))return!1;switch(e.keyCode){case 80:case 33:Z();break;case 78:case 34:Q();break;case 72:case 37:j();break;case 76:case 39:K();break;case 75:case 38:$();break;case 74:case 40:V();break;case 36:M(0);break;case 35:M(Number.MAX_VALUE);break;case 32:E()?L():e.shiftKey?Z():Q();break;case 13:E()?L():n=!1;break;case 66:case 190:case 191:T();break;case 70:A();break;default:n=!1}n?e.preventDefault():27===e.keyCode&&ke&&(b(),e.preventDefault()),F()}}function G(e){Re.startX=e.touches[0].clientX,Re.startY=e.touches[0].clientY,Re.startCount=e.touches.length,2===e.touches.length&&be.overview&&(Re.startSpan=d({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:Re.startX,y:Re.startY}))}function J(e){if(Re.handled)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===Re.startCount&&be.overview){var r=d({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:Re.startX,y:Re.startY});Math.abs(Re.startSpan-r)>Re.threshold&&(Re.handled=!0,Re.startSpan>r?w():L()),e.preventDefault()}else if(1===e.touches.length&&2!==Re.startCount){var o=t-Re.startX,a=n-Re.startY;o>Re.threshold&&Math.abs(o)>Math.abs(a)?(Re.handled=!0,j()):-Re.threshold>o&&Math.abs(o)>Math.abs(a)?(Re.handled=!0,K()):a>Re.threshold?(Re.handled=!0,$()):-Re.threshold>a&&(Re.handled=!0,V()),e.preventDefault()}}}function ee(){Re.handled=!1}function te(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],G(e))}function ne(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],J(e))}function re(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],ee(e))}function oe(e){clearTimeout(Pe),Pe=setTimeout(function(){var t=e.detail||-e.wheelDelta;t>0?Q():Z()},100)}function ae(e){e.preventDefault();var t=l(document.querySelectorAll(ye)).length,n=Math.floor(e.clientX/Te.wrapper.offsetWidth*t);M(n)}function se(e){e.preventDefault(),j()}function ie(e){e.preventDefault(),K()}function ce(e){e.preventDefault(),$()}function le(e){e.preventDefault(),V()}function de(e){e.preventDefault(),Z()}function ue(e){e.preventDefault(),Q()}function fe(){H()}function ve(){h()}function pe(e){if(Ye&&E()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(L(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);M(n,r)}}}var me,he,ge=".reveal .slides section",ye=".reveal .slides>section",we=".reveal .slides>section.present>section",Le=".reveal .slides>section:first-child",be={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,autoSlide:0,mouseWheel:!1,rollingLinks:!0,theme:null,transition:"default",transitionSpeed:"default",dependencies:[]},Ee=0,Se=0,Ae=0,qe=[],xe=1,Te={},ke="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,Me="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,Pe=0,De=0,Ne=0,Ce=0,Oe=0,Ye=!1,Re={startX:0,startY:0,startSpan:0,startCount:0,handled:!1,threshold:80};return{initialize:e,configure:a,sync:P,slide:M,left:j,right:K,up:$,down:V,prev:Z,next:Q,prevFragment:z,nextFragment:U,navigateTo:M,navigateLeft:j,navigateRight:K,navigateUp:$,navigateDown:V,navigatePrev:Z,navigateNext:Q,layout:h,availableRoutes:O,availableFragments:Y,toggleOverview:b,togglePause:T,isOverview:E,isPaused:k,addEventListeners:s,removeEventListeners:i,getIndices:W,getSlide:function(e,t){var n=document.querySelectorAll(ye)[e],r=n&&n.querySelectorAll("section");return void 0!==t?r?r[t]:void 0:n},getPreviousSlide:function(){return me},getCurrentSlide:function(){return he},getScale:function(){return xe},getConfig:function(){return be},getQueryHash:function(){var e={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e},isFirstSlide:function(){return null==document.querySelector(ge+".past")?!0:!1},isLastSlide:function(){return he&&he.classList.contains(".stack")?null==he.querySelector(ge+".future")?!0:!1:null==document.querySelector(ge+".future")?!0:!1},addEventListener:function(e,t,n){"addEventListener"in window&&(Te.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(Te.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();