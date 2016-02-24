(function () {
  'use strict';

  angular.module('angularRails')
    .factory('Articles', function ($resource) {
      return $resource('api/quotes/:articleId', {
        articleId: '@id'
      }, {
        update: {
          method: 'PUT'
        }
      });
    })
    .factory('Products', function ($resource) {
      return $resource('api/products/:productId', {
        productId: '@id'
      }, {
        update: {
          method: 'PUT'
        }
      });
    })
    .factory('SelectedProductFactory', function () {
      return {}
    });

  angular.module('angularRails')
    .service('QuoteService', function ($resource) {
      var quotes = $resource('api/quotes/:articleId', {
        articleId: '@id'
      }, {
        update: {
          method: 'PUT'
        }
      })

      //anything this can also get in controller, as long as QuoteService is injected into Controller
      //this.getQuotes = quotes;


      this.quotesContent = getQuoteContentOnly;
      function getQuoteContentOnly(){
        var quoteContentOnly = [];
        for (var q in quotes){
          quoteContentOnly.push(q.content);
        }

        return quoteContentOnly
      }
    })
})();
