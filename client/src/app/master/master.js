//(function () {
//  'use strict';
//
//  angular.module('angularRails')
//    .controller('MasterLayoutController', function (Articles) {
//      var vm = this;
//      Articles.query(function (res) {
//        vm.articles = res;
//      });
//
//      vm.showQuote = function (quotes) {
//        var timerMaster = setInterval(function () {
//          var length = quotes.length;
//          for (var i = 0; i < length; i++) {
//            var content = quotes[i];
//            vm.type = "";
//            var i = 0;
//            var timer = setInterval(function () {
//              if (i < content.length)
//                vm.type += content[i];
//              i++;
//              vm.$apply();
//            }, 100);
//          }
//        }, 200);
//      }
//    });
//})();
