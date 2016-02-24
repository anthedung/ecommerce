(function() {
  'use strict';

  angular
    .module('angularRails')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el) {
      var typist = malarkey(el[0], {
        typeSpeed: 100,
        deleteSpeed: 100,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });
    }

    /** @ngInject */
    function MalarkeyController() {
      var vm = this;
      vm.contributors = [];
    }
  }
})();
