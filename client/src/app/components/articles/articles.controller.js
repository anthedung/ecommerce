(function () {
  'use strict';

  angular.module('angularRails')
    .controller('ArticlesController', function ($http, $mdSidenav, $mdToast, $log, $stateParams, Articles, Products) {
      var vm = this;

      vm.orderPlaced = false;
      vm.selectProduct = function selectProduct(product) {
        console.log("$stateParams: " + product);
        vm.selectedProduct = product
      };

      Products.query(function (res) {
        var quotesArr = [];
        for (var i = 0; i < res.length; i++) {
          res[i].image_sub_urls = processImageUrl(res[i].image_url);
          res[i].image_url = res[i].image_sub_urls ? res[i].image_sub_urls[0] : '';
          res[i].image_sub_urls.shift();

          //quotesArr.push(res[i].content);
          if (res[i].id == $stateParams.id) {
            vm.selectedProduct = res[i];
            quotesArr.push(res[i].title);
          }
        }
        console.log(res)
        vm.products = res;
        vm.searchedProducts = res;
        vm.productTitles = quotesArr;
        console.log(quotesArr);

      });

      Articles.query(function (res) {
        // process to get tags
        var quotesArr = [];
        for (var i = 1; i < res.length; i++) {
          res[i].hashtags = makeHashTags(res[i].hashtags);
          quotesArr.push(res[i].content);
        }
        //console.log("quoteArr - an: " + quotesArr);
        vm.articles = res;
        vm.quotes = quotesArr;

        function getQuotesArr() {
          return quotesArr;
        }
      });

      vm.getStandardDescLength = function(description) {
        console.log("getStandardDescLength " + description );
        if ('' + description.length < 160) {
          return description;
        } else {
          return description.substring(0, 157) + "...";
        }
      }

      // utils
      function makeHashTags(hashtags) {
        var tagsArr = hashtags.split(",");
        var joined;
        for (var j = 0; j < tagsArr.length; j++) {
          joined = "#" + tagsArr[j].trim();
        }

        return joined;
      }

      function processImageUrl(imgUrl) {
        console.log("1:" + imgUrl);
        if (imgUrl == null) {
          return null;
        } else {
          var arr = imgUrl.split(',');
          console.log("2:" + arr);
          var arr2 = [];
          for (var j = 0; j < arr.length; j++) {
            console.log("3" + arr[j]);
            var after = arr[j].replace('www.dropbox.com', 'dl.dropboxusercontent.com')
              .replace(/\?.*/i, "");
            console.log(after);
            arr2.push(after);
          }
          console.log("processImageUrl: " + arr2 );
          return arr2;
        }
      }

      vm.showSuccess = function ($event) {
        $mdToast.showSimple('Cám ơn bạn đã đặt hàng với BốngBi shop. Nếu cần gấp, vui lòng nhắn tin hoặc gọi điện theo số 0984 057 076');
      };

      vm.showError = function ($event) {
        $mdToast.showSimple('Sorry... Something wrong with the Ruby guys. I will kick his ass!');
      };

      vm.showInvalid = function ($event) {
        $mdToast.showSimple("Xin lỗi bạn đã điền thiếu thông tin. Mong kiểm tra lại!");
      };

      vm.showInvalidQuantity = function ($event) {
        $mdToast.showSimple("Xin vui lòng kiểm tra lại số đt, hoặc số lượng (1,2,3) :)");
      };

      vm.showInvalidInvalidProduct = function ($event) {
        $mdToast.showSimple("Xin lỗi bạn chưa chọn sản phẩm!");
      };

      function toggleUsersList() {
        $mdSidenav('left').toggle();
      }

      vm.toggleList = toggleUsersList;

      vm.submitForm = function (quote) {
        $log.debug("selectedProductTitle data...." + vm.selectedProductTitle);
        $log.debug("selectedProductTitle data...." + $stateParams.id);
        $log.debug('toggle left is done');
        if (quote == null || vm.selectedProduct == null) {
          vm.showInvalidInvalidProduct();
        } else if (isNaN(quote.quantity) || isNaN(quote.phone.replace(/W/, ""))) {
          vm.showInvalidQuantity();
        } else {
          quote.product_id = vm.selectedProduct.id;
          quote.price = vm.selectedProduct.price;
          quote.product_title = vm.selectedProduct.title;
          $http.post('/api/orders', angular.toJson(quote)).success(function () {
            vm.successMessage = "Cám ơn bạn đã đặt hàng với BốngBi shop. Nếu cần gấp, vui lòng nhắn tin hoặc gọi điện theo số 0984 057 076";
            vm.showSuccess();
            vm.order = {};
            vm.orderPlaced = true;
            console.log("order: " + JSON.stringify(quote));
          }).error(function () {
            vm.showError()
          });
        }
      };


      // SEARCH
      vm.isDisabled = false;
      vm.selectedItem = vm.selectedProduct;
      // list of `state` value/display objects
      vm.querySearch = querySearch;
      vm.selectedItemChange = selectedItemChange;
      vm.searchTextChange = searchTextChange;
      // ******************************
      // Internal methods
      // ******************************
      function querySearch(query) {
        var results = query ? vm.products.filter(createFilterFor(query)) : vm.products,
          deferred;
        vm.searchedProducts = results;
        return results;
      }

      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }

      function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
        vm.selectedProduct = item;
      }


      /**
       * Create filter function for a query string
       */
      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        console.log("query: " + query);
        return function filterFn(state) {
          console.log("state: " + state);
          console.log("state: " + state.title);
          return (angular.lowercase(state.title).indexOf(lowercaseQuery) > -1);
        };
      }

    });
})();
