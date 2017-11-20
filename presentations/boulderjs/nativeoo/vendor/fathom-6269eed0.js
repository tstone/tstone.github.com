/*
Fathom.js v1.0
Copyright 2011, Mark Dalgleish

This content is released under the MIT License
github.com/markdalgleish/fathom/blob/master/MIT-LICENSE.txt
*/
!function(i,t,s){var e=function(i,t){return this.container=i,this.options=t,this.init()},n=i(t),l=i(document);e.prototype={defaults:{displayMode:"single",slideTagName:"div",slideClass:"slide",activeClass:"activeslide",inactiveClass:"inactiveslide",margin:100,onScrollInterval:300,scrollLength:600,_autoStyles:!0,onActivateSlide:s,onDeactivateSlide:s},init:function(){return this.config=i.extend({},this.defaults,this.options),this.$container=i(this.container),this.$slides=this.$container.find(this.config.slideTagName+(this.config.slideClass?"."+this.config.slideClass:"")),this.$firstSlide=this.$slides.filter(":first"),this.$lastSlide=this.$slides.filter(":last"),this.$activeSlide=this.activateSlide(this.$firstSlide),this._setStyles()._setClasses()._setMargins()._setupEvents()._setupScrollHandler(),this},nextSlide:function(){var i=this.$activeSlide.next();return 1===i.length&&i.hasClass(this.config.slideClass)&&this.scrollToSlide(i),i},prevSlide:function(){var i=this.$activeSlide.prev();return 1===i.length&&this.scrollToSlide(i),i},scrollToSlide:function(t){var s=this;return this.isAutoScrolling=!0,i("html,body").stop().animate({scrollLeft:t.position().left-(n.width()-t.innerWidth())/2},s.config.scrollLength,function(){s.isAutoScrolling=!1}),this.activateSlide(t)},activateSlide:function(i){var t,e=i.get(0);if(this.$activeSlide!==s){if(t=this.$activeSlide.get(0),t===e)return i;this.$activeSlide.removeClass(this.config.activeClass).addClass(this.config.inactiveClass).trigger("deactivateslide.fathom"),"function"==typeof this.config.onDeactivateSlide&&this.config.onDeactivateSlide.call(t)}return i.removeClass(this.config.inactiveClass).addClass(this.config.activeClass),this.$activeSlide=i,i.trigger("activateslide.fathom"),"function"==typeof this.config.onActivateSlide&&this.config.onActivateSlide.call(e),i},_setupEvents:function(){var t=this;return this.$container.delegate(this.config.slideTagName+"."+this.config.inactiveClass,"click",function(s){s.preventDefault(),t.scrollToSlide(i(this))}),l.keydown(function(i){var s=i.which;39===s||32===s?(i.preventDefault(),t.nextSlide()):37===s&&(i.preventDefault(),t.prevSlide())}),n.resize(function(){t._setMargins()}),this},_setStyles:function(){return this.config._autoStyles&&(i("body").width(99999),this.$clearFloats=this.$container.append('<div style="clear:left"></div>'),this.$container.css("float","left"),this.$slides.css("float","left")),this},_setClasses:function(){return this.$slides.addClass(this.config.inactiveClass),this.$activeSlide.removeClass(this.config.inactiveClass).addClass(this.config.inactiveClass),this},_setMargins:function(){var t=this.config.displayMode,s=n.width(),e=(n.height()-this.$firstSlide.innerHeight())/2,l=(s-this.$firstSlide.innerWidth())/2,a=(s-this.$lastSlide.innerWidth())/2,o=s/25;return this.$container.css("margin-top",e),"single"===t?this.$slides.css("margin-right",l-o):"multi"===t&&this.$slides.css("margin-right",this.config.margin),this.$firstSlide.css("margin-left",l),this.$lastSlide.css("margin-right",a),i("html,body").width(this.$container.outerWidth()),this},_setupScrollHandler:function(){function t(){l.midpoint={x:n.width()/2,y:n.height()/2}}var e,l=this,a=l.config.slideTagName+(l.config.slideClass?"."+l.config.slideClass:"");return l.scrolling=!1,t(),setInterval(function(){!l.scrolling||l.isAutoScrolling!==!1&&l.isAutoScrolling!==s||(l.scrolling=!1,0===n.scrollLeft()?l.activateSlide(l.$firstSlide):(e=i(document.elementFromPoint(l.midpoint.x,l.midpoint.y)),e.is(a)?l.activateSlide(e):e=e.parents(a+":first").each(function(){l.activateSlide(i(this))})))},l.config.onScrollInterval),n.scroll(function(){l.scrolling=!0}).resize(function(){t()}),this}},i.fn.Fathom=function(i){return new e(this,i),this},e.defaults=e.prototype.defaults,e.setDefaults=function(t){i.extend(e.defaults,t)},t.Fathom=e}(jQuery,window);