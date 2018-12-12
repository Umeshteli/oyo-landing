(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//
$(window).on("load resize", function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
        $('.ui.sticky').sticky({
            context: '.scroll-content'
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNreS1pbml0LmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJvbiIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwic3RpY2t5IiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBQSxFQUFFQyxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxhQUFiLEVBQTRCLFlBQVc7QUFDbkMsUUFBSUQsT0FBT0UsVUFBUCxDQUFrQixvQkFBbEIsRUFBd0NDLE9BQTVDLEVBQXFEO0FBQ2pESixVQUFFLFlBQUYsRUFBZ0JLLE1BQWhCLENBQXVCO0FBQ25CQyxxQkFBUztBQURVLFNBQXZCO0FBR0g7QUFDSixDQU5EIiwiZmlsZSI6InN0aWNreS1pbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbiQod2luZG93KS5vbihcImxvYWQgcmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJykubWF0Y2hlcykge1xuICAgICAgICAkKCcudWkuc3RpY2t5Jykuc3RpY2t5KHtcbiAgICAgICAgICAgIGNvbnRleHQ6ICcuc2Nyb2xsLWNvbnRlbnQnXG4gICAgICAgIH0pXG4gICAgfVxufSkiXX0=
},{}]},{},[1])