(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$('.testimonial-slider').slick({
  autoplay: false,
  infinite: true,
  arrows: false,
  dots: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
  fade: false
});

// oyo peoperities slider

$('.oyo-area-slider').slick({
  autoplay: false,
  arrows: true,
  centerMode: true,
  centerPadding: '20px',
  dots: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 1000,
  fade: false,
  prevArrow: "<button type='button' data-role='none' aria-label='Previous' aria-disabled='false' class='slick-prev slick-arrow'><i class='icon-arrow icon-arrow--left'></button>",
  nextArrow: "<button type='button' data-role='none' aria-label='Next' class='slick-next slick-arrow slick-arrow'><i class='icon-arrow icon-arrow--right'></button>",
  responsive: [{
    breakpoint: 2000,
    settings: {
      centerMode: true,
      // infinite: true,
      centerPadding: '10px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 1900,
    settings: {
      centerMode: true,
      centerPadding: '20px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 1600,
    settings: {
      centerMode: true,
      centerPadding: '20px',
      slidesToShow: 2
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 1
    }
  }]
});

// clients brands

$('.client-brands').slick({
  autoplay: false,
  infinite: true,
  arrows: true,
  dots: false,
  slidesToScroll: 1,
  slidesToShow: 5,
  speed: 1000,
  fade: false,
  prevArrow: "<button data-role='none' aria-label='Previous' aria-disabled='false' class='slick-prev'><i class='icon-left-arrow fnt-xl'></button>",
  nextArrow: "<button data-role='none' aria-label='Next' class='slick-next'><i class='icon-right-arrow fnt-xl'></button>",
  responsive: [{
    breakpoint: 600,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 2
    }
  }]
});

// blogs slide info
$('.js-blog-slider').slick({
  autoplay: false,
  infinite: false,
  arrows: true,
  dots: false,
  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 1000,
  fade: false,
  prevArrow: "<button type='button' data-role='none' aria-label='Previous' aria-disabled='false' class='slick-prev slick-arrow slick-arrow--left'><i class='icon-arrow icon-arrow--left'></button>",
  nextArrow: "<button type='button' data-role='none' aria-label='Next' class='slick-next slick-arrow slick-arrow--right'><i class='icon-arrow'></button>",
  responsive: [{
    breakpoint: 600,
    settings: {
      slidesToScroll: 1,
      slidesToShow: 1
    }
  }]
});

// Benifits
$('.responsive').slick({
  autoplay: false,
  infinite: false,
  arrows: true,
  dots: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  vertical: true,
  speed: 1000,
  fade: false,
  prevArrow: "<button type='button' data-role='none' aria-label='Previous' aria-disabled='false' class='slick-prev slick-arrow slick-arrow--left'><i class='icon-arrow icon-arrow--left'></button>",
  nextArrow: "<button type='button' data-role='none' aria-label='Next' class='slick-next slick-arrow slick-arrow--right'><i class='icon-arrow'></button>"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWNrLWluaXQuanMiXSwibmFtZXMiOlsiJCIsInNsaWNrIiwiYXV0b3BsYXkiLCJpbmZpbml0ZSIsImFycm93cyIsImRvdHMiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2hvdyIsInNwZWVkIiwiZmFkZSIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZlcnRpY2FsIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLHFCQUFGLEVBQXlCQyxLQUF6QixDQUErQjtBQUM3QkMsWUFBVSxLQURtQjtBQUU3QkMsWUFBVSxJQUZtQjtBQUc3QkMsVUFBUSxLQUhxQjtBQUk3QkMsUUFBTSxJQUp1QjtBQUs3QkMsa0JBQWdCLENBTGE7QUFNN0JDLGdCQUFjLENBTmU7QUFPN0JDLFNBQU8sSUFQc0I7QUFRN0JDLFFBQU07QUFSdUIsQ0FBL0I7O0FBV0E7O0FBRUFULEVBQUUsa0JBQUYsRUFBc0JDLEtBQXRCLENBQTRCO0FBQzFCQyxZQUFVLEtBRGdCO0FBRTFCRSxVQUFRLElBRmtCO0FBRzFCTSxjQUFZLElBSGM7QUFJMUJDLGlCQUFlLE1BSlc7QUFLMUJOLFFBQU0sS0FMb0I7QUFNMUJGLFlBQVUsS0FOZ0I7QUFPMUJHLGtCQUFnQixDQVBVO0FBUTFCQyxnQkFBYyxDQVJZO0FBUzFCQyxTQUFPLElBVG1CO0FBVTFCQyxRQUFNLEtBVm9CO0FBVzFCRyxhQUFXLG9LQVhlO0FBWTFCQyxhQUFXLHVKQVplO0FBYTFCQyxjQUFZLENBQ1Y7QUFDRUMsZ0JBQVksSUFEZDtBQUVFQyxjQUFVO0FBQ1JOLGtCQUFZLElBREo7QUFFUjtBQUNBQyxxQkFBZSxNQUhQO0FBSVJKLG9CQUFjO0FBSk47QUFGWixHQURVLEVBVVY7QUFDRVEsZ0JBQVksSUFEZDtBQUVFQyxjQUFVO0FBQ1JOLGtCQUFZLElBREo7QUFFUkMscUJBQWUsTUFGUDtBQUdSSixvQkFBYztBQUhOO0FBRlosR0FWVSxFQWtCVjtBQUNFUSxnQkFBWSxJQURkO0FBRUVDLGNBQVU7QUFDUk4sa0JBQVksSUFESjtBQUVSQyxxQkFBZSxNQUZQO0FBR1JKLG9CQUFjO0FBSE47QUFGWixHQWxCVSxFQTBCUjtBQUNFUSxnQkFBWSxHQURkO0FBRUVDLGNBQVU7QUFDUlYsc0JBQWdCLENBRFI7QUFFUkMsb0JBQWM7QUFGTjtBQUZaLEdBMUJRO0FBYmMsQ0FBNUI7O0FBaURBOztBQUVBUCxFQUFFLGdCQUFGLEVBQW9CQyxLQUFwQixDQUEwQjtBQUN4QkMsWUFBVSxLQURjO0FBRXhCQyxZQUFVLElBRmM7QUFHeEJDLFVBQVEsSUFIZ0I7QUFJeEJDLFFBQU0sS0FKa0I7QUFLeEJDLGtCQUFnQixDQUxRO0FBTXhCQyxnQkFBYyxDQU5VO0FBT3hCQyxTQUFPLElBUGlCO0FBUXhCQyxRQUFNLEtBUmtCO0FBU3hCRyxhQUFXLHFJQVRhO0FBVXhCQyxhQUFXLDRHQVZhO0FBV3hCQyxjQUFZLENBQ1Y7QUFDRUMsZ0JBQVksR0FEZDtBQUVFQyxjQUFVO0FBQ1JWLHNCQUFnQixDQURSO0FBRVJDLG9CQUFjO0FBRk47QUFGWixHQURVO0FBWFksQ0FBMUI7O0FBc0JBO0FBQ0FQLEVBQUUsaUJBQUYsRUFBcUJDLEtBQXJCLENBQTJCO0FBQ3pCQyxZQUFVLEtBRGU7QUFFekJDLFlBQVUsS0FGZTtBQUd6QkMsVUFBUSxJQUhpQjtBQUl6QkMsUUFBTSxLQUptQjtBQUt6QkMsa0JBQWdCLENBTFM7QUFNekJDLGdCQUFjLENBTlc7QUFPekJDLFNBQU8sSUFQa0I7QUFRekJDLFFBQU0sS0FSbUI7QUFTekJHLGFBQVcsc0xBVGM7QUFVekJDLGFBQVcsNElBVmM7QUFXekJDLGNBQVksQ0FDVjtBQUNFQyxnQkFBWSxHQURkO0FBRUVDLGNBQVU7QUFDUlYsc0JBQWdCLENBRFI7QUFFUkMsb0JBQWM7QUFGTjtBQUZaLEdBRFU7QUFYYSxDQUEzQjs7QUF3QkE7QUFDQVAsRUFBRSxhQUFGLEVBQWlCQyxLQUFqQixDQUF1QjtBQUNyQkMsWUFBVSxLQURXO0FBRXJCQyxZQUFVLEtBRlc7QUFHckJDLFVBQVEsSUFIYTtBQUlyQkMsUUFBTSxLQUplO0FBS3JCQyxrQkFBZ0IsQ0FMSztBQU1yQkMsZ0JBQWMsQ0FOTztBQU9yQlUsWUFBVSxJQVBXO0FBUXJCVCxTQUFPLElBUmM7QUFTckJDLFFBQU0sS0FUZTtBQVVyQkcsYUFBVyxzTEFWVTtBQVdyQkMsYUFBVztBQVhVLENBQXZCIiwiZmlsZSI6InNsaWNrLWluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcudGVzdGltb25pYWwtc2xpZGVyJykuc2xpY2soe1xuICBhdXRvcGxheTogZmFsc2UsXG4gIGluZmluaXRlOiB0cnVlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBkb3RzOiB0cnVlLFxuICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgc2xpZGVzVG9TaG93OiAxLFxuICBzcGVlZDogMTAwMCxcbiAgZmFkZTogZmFsc2Vcbn0pO1xuXG4vLyBveW8gcGVvcGVyaXRpZXMgc2xpZGVyXG5cbiQoJy5veW8tYXJlYS1zbGlkZXInKS5zbGljayh7XG4gIGF1dG9wbGF5OiBmYWxzZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiAnMjBweCcsXG4gIGRvdHM6IGZhbHNlLFxuICBpbmZpbml0ZTogZmFsc2UsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzbGlkZXNUb1Nob3c6IDMsXG4gIHNwZWVkOiAxMDAwLFxuICBmYWRlOiBmYWxzZSxcbiAgcHJldkFycm93OiBcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBkYXRhLXJvbGU9J25vbmUnIGFyaWEtbGFiZWw9J1ByZXZpb3VzJyBhcmlhLWRpc2FibGVkPSdmYWxzZScgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnPjxpIGNsYXNzPSdpY29uLWFycm93IGljb24tYXJyb3ctLWxlZnQnPjwvYnV0dG9uPlwiLFxuICBuZXh0QXJyb3c6IFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGRhdGEtcm9sZT0nbm9uZScgYXJpYS1sYWJlbD0nTmV4dCcgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cgc2xpY2stYXJyb3cnPjxpIGNsYXNzPSdpY29uLWFycm93IGljb24tYXJyb3ctLXJpZ2h0Jz48L2J1dHRvbj5cIixcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDIwMDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAvLyBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzEwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDE5MDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMjBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogMTYwMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICcyMHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICB9XG4gICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gIF1cbn0pO1xuXG4vLyBjbGllbnRzIGJyYW5kc1xuXG4kKCcuY2xpZW50LWJyYW5kcycpLnNsaWNrKHtcbiAgYXV0b3BsYXk6IGZhbHNlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBkb3RzOiBmYWxzZSxcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIHNsaWRlc1RvU2hvdzogNSxcbiAgc3BlZWQ6IDEwMDAsXG4gIGZhZGU6IGZhbHNlLFxuICBwcmV2QXJyb3c6IFwiPGJ1dHRvbiBkYXRhLXJvbGU9J25vbmUnIGFyaWEtbGFiZWw9J1ByZXZpb3VzJyBhcmlhLWRpc2FibGVkPSdmYWxzZScgY2xhc3M9J3NsaWNrLXByZXYnPjxpIGNsYXNzPSdpY29uLWxlZnQtYXJyb3cgZm50LXhsJz48L2J1dHRvbj5cIixcbiAgbmV4dEFycm93OiBcIjxidXR0b24gZGF0YS1yb2xlPSdub25lJyBhcmlhLWxhYmVsPSdOZXh0JyBjbGFzcz0nc2xpY2stbmV4dCc+PGkgY2xhc3M9J2ljb24tcmlnaHQtYXJyb3cgZm50LXhsJz48L2J1dHRvbj5cIixcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgIH1cbiAgICB9LFxuICBdXG59KTtcblxuLy8gYmxvZ3Mgc2xpZGUgaW5mb1xuJCgnLmpzLWJsb2ctc2xpZGVyJykuc2xpY2soe1xuICBhdXRvcGxheTogZmFsc2UsXG4gIGluZmluaXRlOiBmYWxzZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBkb3RzOiBmYWxzZSxcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIHNsaWRlc1RvU2hvdzogMyxcbiAgc3BlZWQ6IDEwMDAsXG4gIGZhZGU6IGZhbHNlLFxuICBwcmV2QXJyb3c6IFwiPGJ1dHRvbiB0eXBlPSdidXR0b24nIGRhdGEtcm9sZT0nbm9uZScgYXJpYS1sYWJlbD0nUHJldmlvdXMnIGFyaWEtZGlzYWJsZWQ9J2ZhbHNlJyBjbGFzcz0nc2xpY2stcHJldiBzbGljay1hcnJvdyBzbGljay1hcnJvdy0tbGVmdCc+PGkgY2xhc3M9J2ljb24tYXJyb3cgaWNvbi1hcnJvdy0tbGVmdCc+PC9idXR0b24+XCIsXG4gIG5leHRBcnJvdzogXCI8YnV0dG9uIHR5cGU9J2J1dHRvbicgZGF0YS1yb2xlPSdub25lJyBhcmlhLWxhYmVsPSdOZXh0JyBjbGFzcz0nc2xpY2stbmV4dCBzbGljay1hcnJvdyBzbGljay1hcnJvdy0tcmlnaHQnPjxpIGNsYXNzPSdpY29uLWFycm93Jz48L2J1dHRvbj5cIixcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgIH1cbiAgICB9LFxuICBdXG59KTtcblxuXG5cbi8vIEJlbmlmaXRzXG4kKCcucmVzcG9uc2l2ZScpLnNsaWNrKHtcbiAgYXV0b3BsYXk6IGZhbHNlLFxuICBpbmZpbml0ZTogZmFsc2UsXG4gIGFycm93czogdHJ1ZSxcbiAgZG90czogZmFsc2UsXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICBzbGlkZXNUb1Nob3c6IDEsXG4gIHZlcnRpY2FsOiB0cnVlLFxuICBzcGVlZDogMTAwMCxcbiAgZmFkZTogZmFsc2UsXG4gIHByZXZBcnJvdzogXCI8YnV0dG9uIHR5cGU9J2J1dHRvbicgZGF0YS1yb2xlPSdub25lJyBhcmlhLWxhYmVsPSdQcmV2aW91cycgYXJpYS1kaXNhYmxlZD0nZmFsc2UnIGNsYXNzPSdzbGljay1wcmV2IHNsaWNrLWFycm93IHNsaWNrLWFycm93LS1sZWZ0Jz48aSBjbGFzcz0naWNvbi1hcnJvdyBpY29uLWFycm93LS1sZWZ0Jz48L2J1dHRvbj5cIixcbiAgbmV4dEFycm93OiBcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBkYXRhLXJvbGU9J25vbmUnIGFyaWEtbGFiZWw9J05leHQnIGNsYXNzPSdzbGljay1uZXh0IHNsaWNrLWFycm93IHNsaWNrLWFycm93LS1yaWdodCc+PGkgY2xhc3M9J2ljb24tYXJyb3cnPjwvYnV0dG9uPlwiXG59KTtcbiJdfQ==
},{}]},{},[1])