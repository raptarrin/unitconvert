/*
eachStep v0.2 - http://mediaupstream.com/sandbox/jquery-eachStep
by Derek Anderson - http://mediaupstream.com

## Changelog

8/5/2011 - v0.2
- Updated to use an improved "setTimeout" function: http://blog.joelambert.co.uk/2011/06/01/a-better-settimeoutsetinterval/
- Resolved issue with minimum delay


  )   _. mmeeoowwrr power!
 (___)''
 / ,_,/
/'"\ )\

MIT License
----------------------------------------------------------------------------
Copyright (c) 2011 Derek Anderson, http://mediaupstream.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function($){

/**
 * better setTimeout thanks to http://blog.joelambert.co.uk/2011/06/01/a-better-settimeoutsetinterval/
 */
// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function() {
	return  window.requestAnimationFrame       || 
			window.webkitRequestAnimationFrame || 
			window.mozRequestAnimationFrame    || 
			window.oRequestAnimationFrame      || 
			window.msRequestAnimationFrame     || 
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();
/**
 * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
 * @param {function} fn The callback function
 * @param {int} delay The delay in milliseconds
 */

window.requestTimeout = function(fn, delay) {
	if( !window.requestAnimationFrame      	&& 
		!window.webkitRequestAnimationFrame && 
		!(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
		!window.oRequestAnimationFrame      && 
		!window.msRequestAnimationFrame)
			return window.setTimeout(fn, delay);

	var start = new Date().getTime(),
		handle = new Object();

	function loop(){
		var current = new Date().getTime(),
			delta = current - start;

		delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
	};

	handle.value = requestAnimFrame(loop);
	return handle;
};

/**
 * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
 * @param {int|object} fn The callback function
 */
window.clearRequestTimeout = function(handle) {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
    window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value)	:
    window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
    window.oCancelRequestAnimationFrame	? window.oCancelRequestAnimationFrame(handle.value) :
    window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) :
    clearTimeout(handle);
};



	

// eachStep for Collections
$.eachStep = function(collection, duration, callback) {
	var step = '200'; // ms
	var curStep = 0; // useful for when we are passing a map rather than a collection
	if(typeof duration == "function"){
		callback = duration;
	} else {
		step = duration;
	}
	if(step == 'slow'){ step = 600; }
	if(step == 'fast'){ step = 200; }
	if(typeof callback != "function"){ return false; }
	return $.each(collection, function(i, val){
		window.requestTimeout(function(){
			callback(i, val, step);
		},step*curStep);
		curStep++;
	});
};

// eachStep for jQuery Objects
$.fn.eachStep = function(duration, callback) {
	var step = '200'; // ms
	if(typeof duration == "function"){
		callback = duration;
	} else {
		step = duration;
	}
	if(step == 'slow'){ step = 600; }
	if(step == 'fast'){ step = 200; }
	if(typeof callback != "function"){ return false; }
	return this.each(function(i, el) {        
		window.requestTimeout(function(){
			callback(i, el, step);
		},step*i);
	});
	
};
})(jQuery);