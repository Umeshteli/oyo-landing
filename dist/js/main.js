(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Header sticky onscroll animation

// onscoll changing the background color

$(window).bind('scroll', function () {
  var navHeight = $(window).height() - 10;
  if ($(window).scrollTop() >= 20) {
    $('.navbar-expand-md').addClass('on');
    $('.navbar-brand>img').attr('src', 'img/oyo-logo.svg');
  } else {
    $('.navbar-expand-md').removeClass('on');
    $('.navbar-brand>img').attr('src', 'img/oyo-logo-white.svg');
  }
});

$('body').scrollspy({
  target: '.navbar-default',
  offset: 0
});

/* START: MATERIAL INPUTS */

var materialInput = $(".m-input");

if (materialInput) {
  materialInput.each(function (index, input) {
    if ($(input).val()) {
      $(input).siblings('.input-label').addClass('active');
    }
  });
}

materialInput.focusin(function () {
  $(this).siblings('.input-label').addClass('active');
});

materialInput.focusout(function () {
  if ($(this).val().length < 1) {
    $(this).siblings('.input-label').removeClass('active');
  }
});

// Scroll to Our benifits
$(".benifits-oyo").click(function () {
  var g = $(this).attr("data-key");

  if ($(this).attr('data-key') == '#p0') {
    $(".responsive > .slick-prev").click();
    $('html, body').stop().animate({
      scrollTop: $(".responsive").offset().top - 100
    }, 800);
  } else if ($(this).attr('data-key') == '#p1') {
    $(".responsive >.slick-next").click();
    $('html, body').stop().animate({
      scrollTop: $(".responsive").offset().top - 100
    }, 800);
  } else {
    $('html, body').stop().animate({
      scrollTop: $(".benifits-oyo-content").find("" + g).addClass("scroll").offset().top - 150
    }, 800);
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImJpbmQiLCJuYXZIZWlnaHQiLCJoZWlnaHQiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsImF0dHIiLCJyZW1vdmVDbGFzcyIsInNjcm9sbHNweSIsInRhcmdldCIsIm9mZnNldCIsIm1hdGVyaWFsSW5wdXQiLCJlYWNoIiwiaW5kZXgiLCJpbnB1dCIsInZhbCIsInNpYmxpbmdzIiwiZm9jdXNpbiIsImZvY3Vzb3V0IiwibGVuZ3RoIiwiY2xpY2siLCJnIiwic3RvcCIsImFuaW1hdGUiLCJ0b3AiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOztBQUNDOztBQUVFOztBQUVBQSxFQUFFQyxNQUFGLEVBQVVDLElBQVYsQ0FBZSxRQUFmLEVBQXlCLFlBQVk7QUFDcEMsTUFBSUMsWUFBWUgsRUFBRUMsTUFBRixFQUFVRyxNQUFWLEtBQXFCLEVBQXJDO0FBQ0EsTUFBSUosRUFBRUMsTUFBRixFQUFVSSxTQUFWLE1BQXlCLEVBQTdCLEVBQWlDO0FBQy9CTCxNQUFFLG1CQUFGLEVBQXVCTSxRQUF2QixDQUFnQyxJQUFoQztBQUNBTixNQUFFLG1CQUFGLEVBQXVCTyxJQUF2QixDQUE0QixLQUE1QixFQUFtQyxrQkFBbkM7QUFDRCxHQUhELE1BR087QUFDTFAsTUFBRSxtQkFBRixFQUF1QlEsV0FBdkIsQ0FBbUMsSUFBbkM7QUFDQVIsTUFBRSxtQkFBRixFQUF1Qk8sSUFBdkIsQ0FBNEIsS0FBNUIsRUFBbUMsd0JBQW5DO0FBQ0Q7QUFDRixDQVRBOztBQVdEUCxFQUFFLE1BQUYsRUFBVVMsU0FBVixDQUFvQjtBQUNsQkMsVUFBUSxpQkFEVTtBQUVsQkMsVUFBUTtBQUZVLENBQXBCOztBQU1EOztBQUVBLElBQUlDLGdCQUFnQlosRUFBRSxVQUFGLENBQXBCOztBQUVBLElBQUlZLGFBQUosRUFBbUI7QUFDakJBLGdCQUFjQyxJQUFkLENBQW1CLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3pDLFFBQUlmLEVBQUVlLEtBQUYsRUFBU0MsR0FBVCxFQUFKLEVBQW9CO0FBQ2xCaEIsUUFBRWUsS0FBRixFQUFTRSxRQUFULENBQWtCLGNBQWxCLEVBQWtDWCxRQUFsQyxDQUEyQyxRQUEzQztBQUNEO0FBQ0YsR0FKRDtBQUtEOztBQUVETSxjQUFjTSxPQUFkLENBQXNCLFlBQVk7QUFDaENsQixJQUFFLElBQUYsRUFBUWlCLFFBQVIsQ0FBaUIsY0FBakIsRUFBaUNYLFFBQWpDLENBQTBDLFFBQTFDO0FBQ0QsQ0FGRDs7QUFJQU0sY0FBY08sUUFBZCxDQUF1QixZQUFZO0FBQ2pDLE1BQUluQixFQUFFLElBQUYsRUFBUWdCLEdBQVIsR0FBY0ksTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUM1QnBCLE1BQUUsSUFBRixFQUFRaUIsUUFBUixDQUFpQixjQUFqQixFQUFpQ1QsV0FBakMsQ0FBNkMsUUFBN0M7QUFDRDtBQUNGLENBSkQ7O0FBTUE7QUFDQ1IsRUFBRSxlQUFGLEVBQW1CcUIsS0FBbkIsQ0FBeUIsWUFBWTtBQUNqQyxNQUFJQyxJQUFJdEIsRUFBRSxJQUFGLEVBQVFPLElBQVIsQ0FBYSxVQUFiLENBQVI7O0FBRUMsTUFBR1AsRUFBRSxJQUFGLEVBQVFPLElBQVIsQ0FBYSxVQUFiLEtBQTRCLEtBQS9CLEVBQXVDO0FBQ3BDUCxNQUFFLDJCQUFGLEVBQStCcUIsS0FBL0I7QUFDQXJCLE1BQUUsWUFBRixFQUFnQnVCLElBQWhCLEdBQXVCQyxPQUF2QixDQUErQjtBQUN6Qm5CLGlCQUFXTCxFQUFFLGFBQUYsRUFBaUJXLE1BQWpCLEdBQTBCYyxHQUExQixHQUE4QjtBQURoQixLQUEvQixFQUVLLEdBRkw7QUFHRixHQUxELE1BTUksSUFBSXpCLEVBQUUsSUFBRixFQUFRTyxJQUFSLENBQWEsVUFBYixLQUE0QixLQUFoQyxFQUF1QztBQUN4Q1AsTUFBRSwwQkFBRixFQUE4QnFCLEtBQTlCO0FBQ0FyQixNQUFFLFlBQUYsRUFBZ0J1QixJQUFoQixHQUF1QkMsT0FBdkIsQ0FBK0I7QUFDN0JuQixpQkFBV0wsRUFBRSxhQUFGLEVBQWlCVyxNQUFqQixHQUEwQmMsR0FBMUIsR0FBOEI7QUFEWixLQUEvQixFQUVDLEdBRkQ7QUFJRixHQU5HLE1BT0M7QUFDSnpCLE1BQUUsWUFBRixFQUFnQnVCLElBQWhCLEdBQXVCQyxPQUF2QixDQUErQjtBQUN6Qm5CLGlCQUFXTCxFQUFFLHVCQUFGLEVBQTJCMEIsSUFBM0IsQ0FBZ0MsS0FBS0osQ0FBckMsRUFBd0NoQixRQUF4QyxDQUFpRCxRQUFqRCxFQUEyREssTUFBM0QsR0FBb0VjLEdBQXBFLEdBQXdFO0FBRDFELEtBQS9CLEVBRUssR0FGTDtBQUdBO0FBR1AsQ0F2QkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcbiAvLyBIZWFkZXIgc3RpY2t5IG9uc2Nyb2xsIGFuaW1hdGlvblxuXG4gICAvLyBvbnNjb2xsIGNoYW5naW5nIHRoZSBiYWNrZ3JvdW5kIGNvbG9yXG5cbiAgICQod2luZG93KS5iaW5kKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5hdkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDEwO1xuICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gMjApIHtcbiAgICAgICQoJy5uYXZiYXItZXhwYW5kLW1kJykuYWRkQ2xhc3MoJ29uJyk7XG4gICAgICAkKCcubmF2YmFyLWJyYW5kPmltZycpLmF0dHIoJ3NyYycsICdpbWcvb3lvLWxvZ28uc3ZnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5uYXZiYXItZXhwYW5kLW1kJykucmVtb3ZlQ2xhc3MoJ29uJyk7XG4gICAgICAkKCcubmF2YmFyLWJyYW5kPmltZycpLmF0dHIoJ3NyYycsICdpbWcvb3lvLWxvZ28td2hpdGUuc3ZnJyk7XG4gICAgfVxuICB9KTtcblxuICAkKCdib2R5Jykuc2Nyb2xsc3B5KHtcbiAgICB0YXJnZXQ6ICcubmF2YmFyLWRlZmF1bHQnLFxuICAgIG9mZnNldDogMFxuICB9KTtcblxuIFxuIC8qIFNUQVJUOiBNQVRFUklBTCBJTlBVVFMgKi9cbiBcbiBsZXQgbWF0ZXJpYWxJbnB1dCA9ICQoXCIubS1pbnB1dFwiKTtcblxuIGlmIChtYXRlcmlhbElucHV0KSB7XG4gICBtYXRlcmlhbElucHV0LmVhY2goZnVuY3Rpb24gKGluZGV4LCBpbnB1dCkge1xuICAgICBpZiAoJChpbnB1dCkudmFsKCkpIHtcbiAgICAgICAkKGlucHV0KS5zaWJsaW5ncygnLmlucHV0LWxhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICB9XG4gICB9KVxuIH1cblxuIG1hdGVyaWFsSW5wdXQuZm9jdXNpbihmdW5jdGlvbiAoKSB7XG4gICAkKHRoaXMpLnNpYmxpbmdzKCcuaW5wdXQtbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gfSk7XG5cbiBtYXRlcmlhbElucHV0LmZvY3Vzb3V0KGZ1bmN0aW9uICgpIHtcbiAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA8IDEpIHtcbiAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmlucHV0LWxhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICB9XG4gfSk7XG5cbiAvLyBTY3JvbGwgdG8gT3VyIGJlbmlmaXRzXG4gICQoXCIuYmVuaWZpdHMtb3lvXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnID0gJCh0aGlzKS5hdHRyKFwiZGF0YS1rZXlcIik7XG4gICAgIFxuICAgICAgIGlmKCQodGhpcykuYXR0cignZGF0YS1rZXknKSA9PSAnI3AwJykgIHtcbiAgICAgICAgICAkKFwiLnJlc3BvbnNpdmUgPiAuc2xpY2stcHJldlwiKS5jbGljaygpOyBcbiAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIi5yZXNwb25zaXZlXCIpLm9mZnNldCgpLnRvcC0xMDBcbiAgICAgICAgICAgIH0sIDgwMCk7XG4gICAgICAgfVxuICAgICAgZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLWtleScpID09ICcjcDEnKSB7XG4gICAgICAgICAgJChcIi5yZXNwb25zaXZlID4uc2xpY2stbmV4dFwiKS5jbGljaygpO1xuICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6ICQoXCIucmVzcG9uc2l2ZVwiKS5vZmZzZXQoKS50b3AtMTAwXG4gICAgICAgIH0sIDgwMCk7XG4gICBcbiAgICAgICB9XG4gICAgICAgZWxzZSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgIHNjcm9sbFRvcDogJChcIi5iZW5pZml0cy1veW8tY29udGVudFwiKS5maW5kKFwiXCIgKyBnKS5hZGRDbGFzcyhcInNjcm9sbFwiKS5vZmZzZXQoKS50b3AtMTUwXG4gICAgICAgICAgfSwgODAwKTtcbiAgICAgICB9XG4gIFxuICBcbn0pOyJdfQ==
},{}]},{},[1])