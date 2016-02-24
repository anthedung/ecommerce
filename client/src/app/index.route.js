(function () {
  'use strict';

  angular
    .module('angularRails')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('linhtinh', {
        url: '/~',
        templateUrl: 'app/components/credits/main.html',
        controller: 'MainController',
        params: {
          portfolioId: null,
        },
        controllerAs: 'main'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/components/articles/articles.html',
        controller: 'ArticlesController',
        controllerAs: 'vm'
      })
      .state('order', {
        url: '/order/:id',
        templateUrl: 'app/components/articles/articles_new.html',
        controller: 'ArticlesController',
        controllerAs: 'vm'
      })

      .state('aboutme', {
        url: '/aboutme',
        templateUrl: 'app/components/aboutme/aboutme.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
