(function () {
  'use strict';

  angular
    .module('angularRails')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }


  angular
    .module('angularRails')
    .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('myAwesome')
      .primaryPalette('blue')
      .accentPalette('cyan')
      .warnPalette('red');
    $mdThemingProvider.setDefaultTheme('myAwesome');
  }]);

})();
