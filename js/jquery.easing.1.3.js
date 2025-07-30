"use strict";

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function swing(e, a, c, b, d) {
    return jQuery.easing[jQuery.easing.def](e, a, c, b, d);
  }, easeInQuad: function easeInQuad(e, a, c, b, d) {
    return b * (a /= d) * a + c;
  }, easeOutQuad: function easeOutQuad(e, a, c, b, d) {
    return -b * (a /= d) * (a - 2) + c;
  }, easeInOutQuad: function easeInOutQuad(e, a, c, b, d) {
    return 1 > (a /= d / 2) ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c;
  }, easeInCubic: function easeInCubic(e, a, c, b, d) {
    return b * (a /= d) * a * a + c;
  }, easeOutCubic: function easeOutCubic(e, a, c, b, d) {
    return b * ((a = a / d - 1) * a * a + 1) + c;
  }, easeInOutCubic: function easeInOutCubic(e, a, c, b, d) {
    return 1 > (a /= d / 2) ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c;
  }, easeInQuart: function easeInQuart(e, a, c, b, d) {
    return b * (a /= d) * a * a * a + c;
  }, easeOutQuart: function easeOutQuart(e, a, c, b, d) {
    return -b * ((a = a / d - 1) * a * a * a - 1) + c;
  }, easeInOutQuart: function easeInOutQuart(e, a, c, b, d) {
    return 1 > (a /= d / 2) ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c;
  }, easeInQuint: function easeInQuint(e, a, c, b, d) {
    return b * (a /= d) * a * a * a * a + c;
  }, easeOutQuint: function easeOutQuint(e, a, c, b, d) {
    return b * ((a = a / d - 1) * a * a * a * a + 1) + c;
  }, easeInOutQuint: function easeInOutQuint(e, a, c, b, d) {
    return 1 > (a /= d / 2) ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c;
  }, easeInSine: function easeInSine(e, a, c, b, d) {
    return -b * Math.cos(a / d * (Math.PI / 2)) + b + c;
  }, easeOutSine: function easeOutSine(e, a, c, b, d) {
    return b * Math.sin(a / d * (Math.PI / 2)) + c;
  }, easeInOutSine: function easeInOutSine(e, a, c, b, d) {
    return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c;
  }, easeInExpo: function easeInExpo(e, a, c, b, d) {
    return 0 == a ? c : b * Math.pow(2, 10 * (a / d - 1)) + c;
  }, easeOutExpo: function easeOutExpo(e, a, c, b, d) {
    return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c;
  }, easeInOutExpo: function easeInOutExpo(e, a, c, b, d) {
    return 0 == a ? c : a == d ? c + b : 1 > (a /= d / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c;
  }, easeInCirc: function easeInCirc(e, a, c, b, d) {
    return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c;
  }, easeOutCirc: function easeOutCirc(e, a, c, b, d) {
    return b * Math.sqrt(1 - (a = a / d - 1) * a) + c;
  }, easeInOutCirc: function easeInOutCirc(e, a, c, b, d) {
    return 1 > (a /= d / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c;
  }, easeInElastic: function easeInElastic(e, a, c, b, d) {
    e = 1.70158;var f = 0,
        g = b;if (0 == a) return c;if (1 == (a /= d)) return c + b;f || (f = 0.3 * d);g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c;
  }, easeOutElastic: function easeOutElastic(e, a, c, b, d) {
    e = 1.70158;var f = 0,
        g = b;if (0 == a) return c;if (1 == (a /= d)) return c + b;f || (f = 0.3 * d);g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c;
  }, easeInOutElastic: function easeInOutElastic(e, a, c, b, d) {
    e = 1.70158;var f = 0,
        g = b;if (0 == a) return c;if (2 == (a /= d / 2)) return c + b;f || (f = d * 0.3 * 1.5);g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);return 1 > a ? -0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c : 0.5 * g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c;
  }, easeInBack: function easeInBack(e, a, c, b, d, f) {
    void 0 == f && (f = 1.70158);return b * (a /= d) * a * ((f + 1) * a - f) + c;
  }, easeOutBack: function easeOutBack(e, a, c, b, d, f) {
    void 0 == f && (f = 1.70158);return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c;
  }, easeInOutBack: function easeInOutBack(e, a, c, b, d, f) {
    void 0 == f && (f = 1.70158);return 1 > (a /= d / 2) ? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c;
  }, easeInBounce: function easeInBounce(e, a, c, b, d) {
    return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c;
  }, easeOutBounce: function easeOutBounce(e, a, c, b, d) {
    return (a /= d) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c;
  }, easeInOutBounce: function easeInOutBounce(e, a, c, b, d) {
    return a < d / 2 ? 0.5 * jQuery.easing.easeInBounce(e, 2 * a, 0, b, d) + c : 0.5 * jQuery.easing.easeOutBounce(e, 2 * a - d, 0, b, d) + 0.5 * b + c;
  } });

