!function(){"use strict";angular.module("angularRails",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"Ruby on Rails",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"Ruby_on_Rails-logo.png"},{title:"AngularJS",url:"https://http://rubyonrails.org/.org/",description:"Ruby on Rails makes web bulding much easier and fun",logo:"angular.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Heroku",url:"http://heroku.com/",description:"Platform as a service (PaaS).",logo:"heroku.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Yeoman",url:"http://yeoman.io/",description:"The modern web scaffolding",logo:"yeoman.png"}];this.getTec=t}angular.module("angularRails").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("angularRails").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,n,o,a){var r,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),r=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){r()})}function n(t,e){function n(){return o().then(function(){t.info("Activated Contributors View")})}function o(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],n()}n.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return o}t.$inject=["malarkey"],angular.module("angularRails").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t,e){function n(n){function a(t){return t.data}function r(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=1),e.get(o+"/contributors?per_page=1").then(a)["catch"](r)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:o,getContributors:n};return a}t.$inject=["$log","$http"],angular.module("angularRails").factory("githubContributor",t)}(),function(){"use strict";function t(t,e,n){function o(){r(),t(function(){i.classAnimation="rubberBand"},4e3)}function a(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function r(){i.awesomeThings=e.getTec(),angular.forEach(i.awesomeThings,function(t){t.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1456034446982,i.showToastr=a,o()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("angularRails").controller("MainController",t)}(),function(){"use strict";angular.module("angularRails").factory("Articles",["$resource",function(t){return t("api/quotes/:articleId",{articleId:"@id"},{update:{method:"PUT"}})}])}(),function(){"use strict";angular.module("angularRails").controller("ArticlesController",["$http","$mdSidenav","$mdToast","$log","Articles",function(t,e,n,o,a){function r(){e("left").toggle()}var i=this;a.query(function(t){i.articles=t}),i.showSuccess=function(t){n.showSimple("Quote saved! May the luck be ever in your favor (to see it).")},i.showError=function(t){n.showSimple("Sorry... Something wrong with the Ruby guys. I will kick his ass!")},i.showInvalid=function(t){n.showSimple("Sorry. You quote's length should be from 0 - 140 characters")},i.toggleList=r,i.submitForm=function(e){o.debug("posting data...."),o.debug("toggle left is done"),null==e||null==e.content||0==e.content.length||e.content.length>140?i.showInvalid():t.post("/api/quotes",angular.toJson(e)).success(function(){i.showSuccess()}).error(function(){i.showError()})}}])}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("angularRails").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/~",templateUrl:"app/components/credits/main.html",controller:"MainController",controllerAs:"main"}).state("quotes",{url:"/quotes",templateUrl:"app/components/articles/articles.html",controller:"ArticlesController",controllerAs:"vm"}).state("new",{url:"/new",templateUrl:"app/components/articles/articles_new.html",controller:"ArticlesController",controllerAs:"vm"}).state("aboutme",{url:"/aboutme",templateUrl:"app/components/aboutme/aboutme.html"}),e.otherwise("/quotes")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("angularRails").config(t)}(),function(){"use strict";angular.module("angularRails").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("angularRails").config(t)}(),angular.module("angularRails").run(["$templateCache",function(t){t.put("app/components/articles/articles.html",'<div class="container"><md-list-item class="md-3-line" ng-repeat="article in vm.articles"><div class="md-list-item-text"><br><h4></h4><h3>"{{article.content}}" ~ {{article.author}}</h3><h5>Hashtags: {{article.hashtags}}</h5></div><md-divider md-inset="" ng-if="!$last"></md-divider></md-list-item></div>'),t.put("app/components/articles/articles_new.html",'<div layout="column" ng-cloak="" class="md-inline-form"><h3 align="center">An Interesting Quote</h3><md-content layout-padding=""><div><form name="quoteForm" ng-submit="vm.submitForm(quote)"><div layout-gt-sm="row"><md-input-container class="md-block" flex-gt-sm=""><label>Author</label> <input ng-model="quote.author"></md-input-container><md-input-container class="md-block" flex-gt-sm=""><label>Hashtags (e.g. life, death, love)</label> <input ng-model="quote.hashtags"></md-input-container></div><md-input-container class="md-block"><label>Quote</label> <input ng-model="quote.content"></md-input-container><br><md-button class="md-raised primary" type="submit">Save it</md-button></form></div></md-content><h4 align="center">... and An Tweetie Bot will do the job ;)</h4></div>'),t.put("app/components/aboutme/aboutme.html",'<div layout="vertical" layout-fill=""><md-content><br><br><div class="techie" layout-align="center"><md-card><md-card-content class="aboutme" width="200"><img class="pull-right" ng-src="assets/images/itsme.png" alt="An The Dung"><h3 class="md-title">Yes, it\'s me!</h3><p>Love building stuffs. Love learning things. Love solving challenges!</p></md-card-content><div class="md-action-buttons"><md-button ng-href="mailto:anthedung@gmail.com">Talk to me</md-button></div></md-card></div></md-content></div>'),t.put("app/components/credits/main.html",'<div layout="vertical" layout-fill=""><md-content><br><br><div class="techs" layout-align="center"><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class="md-title">{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class="md-action-buttons"><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),t.put("app/components/navbar/navbar.html",'<md-toolbar layout="row" layout-align="center center"><md-button href="https://github.com/Swiip/generator-gulp-angular">An Tweetie Bot</md-button><section flex="" layout="row" layout-align="left center"><md-button href="#" class="md-raised">Home</md-button><md-button href="#" class="md-raised">About</md-button><md-button href="#" class="md-raised">Contact</md-button></section></md-toolbar>'),t.put("app/components/toast/toast-template.html",'<md-toast><span flex="">Custom toast!</span><md-button ng-click="closeToast()">Close</md-button></md-toast>')}]);
//# sourceMappingURL=../maps/scripts/app-2a59dbeb96.js.map
