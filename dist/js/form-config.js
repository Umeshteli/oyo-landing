(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Configure Your FORM Here
 * To get idea about how this file works please refer to semantic UI Form validation
 * Documentation URL: https://semantic-ui.com/behaviors/form.html
 */

(function ($, window, document, undefined) {

  "use strict";

  /*---------- Form Validation Starts Here ----------*/

  /**
   * According to field modifier name you can change their error messages.
   * Please visit https://semantic-ui.com/behaviors/form.html to understand how this form validation works..
   */

  $('#add-employee-form').form({
    on: 'blur',
    fields: {
      emp_name: {
        identifier: 'employee_name',
        rules: [{
          type: 'empty',
          prompt: 'Required!'
        }]
      },
      emp_email: {
        identifier: 'employee_email',
        rules: [{
          type: 'empty',
          prompt: 'Required!'
        }, {
          type: 'email',
          prompt: 'Invalid Email!'
        }]
      }
    }
  });
})(jQuery, window, document);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tY29uZmlnLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsImZvcm0iLCJvbiIsImZpZWxkcyIsImVtcF9uYW1lIiwiaWRlbnRpZmllciIsInJ1bGVzIiwidHlwZSIsInByb21wdCIsImVtcF9lbWFpbCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBTUEsQ0FBQyxVQUFVQSxDQUFWLEVBQWFDLE1BQWIsRUFBcUJDLFFBQXJCLEVBQStCQyxTQUEvQixFQUEwQzs7QUFHdkM7O0FBR0E7O0FBRUE7Ozs7O0FBS0FILElBQUUsb0JBQUYsRUFDQ0ksSUFERCxDQUNNO0FBQ0pDLFFBQUksTUFEQTtBQUVKQyxZQUFRO0FBQ05DLGdCQUFVO0FBQ1JDLG9CQUFZLGVBREo7QUFFUkMsZUFBTyxDQUNMO0FBQ0VDLGdCQUFNLE9BRFI7QUFFRUMsa0JBQVE7QUFGVixTQURLO0FBRkMsT0FESjtBQVVOQyxpQkFBVztBQUNUSixvQkFBWSxnQkFESDtBQUVUQyxlQUFPLENBQ0w7QUFDRUMsZ0JBQU0sT0FEUjtBQUVFQyxrQkFBUTtBQUZWLFNBREssRUFLTDtBQUNFRCxnQkFBTSxPQURSO0FBRUVDLGtCQUFRO0FBRlYsU0FMSztBQUZFO0FBVkw7QUFGSixHQUROO0FBOEJELENBM0NILEVBMkNLRSxNQTNDTCxFQTJDYVosTUEzQ2IsRUEyQ3FCQyxRQTNDckIiLCJmaWxlIjoiZm9ybS1jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbmZpZ3VyZSBZb3VyIEZPUk0gSGVyZVxuICogVG8gZ2V0IGlkZWEgYWJvdXQgaG93IHRoaXMgZmlsZSB3b3JrcyBwbGVhc2UgcmVmZXIgdG8gc2VtYW50aWMgVUkgRm9ybSB2YWxpZGF0aW9uXG4gKiBEb2N1bWVudGF0aW9uIFVSTDogaHR0cHM6Ly9zZW1hbnRpYy11aS5jb20vYmVoYXZpb3JzL2Zvcm0uaHRtbFxuICovXG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblxuICAgIFwidXNlIHN0cmljdFwiO1xuICBcbiAgXG4gICAgLyotLS0tLS0tLS0tIEZvcm0gVmFsaWRhdGlvbiBTdGFydHMgSGVyZSAtLS0tLS0tLS0tKi9cbiAgXG4gICAgLyoqXG4gICAgICogQWNjb3JkaW5nIHRvIGZpZWxkIG1vZGlmaWVyIG5hbWUgeW91IGNhbiBjaGFuZ2UgdGhlaXIgZXJyb3IgbWVzc2FnZXMuXG4gICAgICogUGxlYXNlIHZpc2l0IGh0dHBzOi8vc2VtYW50aWMtdWkuY29tL2JlaGF2aW9ycy9mb3JtLmh0bWwgdG8gdW5kZXJzdGFuZCBob3cgdGhpcyBmb3JtIHZhbGlkYXRpb24gd29ya3MuLlxuICAgICAqL1xuXG4gICAgJCgnI2FkZC1lbXBsb3llZS1mb3JtJylcbiAgICAuZm9ybSh7XG4gICAgICBvbjogJ2JsdXInLFxuICAgICAgZmllbGRzOiB7XG4gICAgICAgIGVtcF9uYW1lOiB7XG4gICAgICAgICAgaWRlbnRpZmllcjogJ2VtcGxveWVlX25hbWUnLFxuICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6ICdlbXB0eScsXG4gICAgICAgICAgICAgIHByb21wdDogJ1JlcXVpcmVkISdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGVtcF9lbWFpbDoge1xuICAgICAgICAgIGlkZW50aWZpZXI6ICdlbXBsb3llZV9lbWFpbCcsXG4gICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VtcHR5JyxcbiAgICAgICAgICAgICAgcHJvbXB0OiAnUmVxdWlyZWQhJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgcHJvbXB0OiAnSW52YWxpZCBFbWFpbCEnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICBcbiAgfSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiAgIl19
},{}]},{},[1])