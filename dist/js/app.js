  // $(document).ready(function () {
  //     $('.mockupBase ul li a').click(function (ev) {
  //         $('.mockupBase ul li').removeClass('selected');
  //         $(ev.currentTarget).parent('li').addClass('selected');
  //     });
  // });

var app = angular.module("mockup", ["ui.router"]);

 app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
   $locationProvider.html5Mode(true);

 
   $stateProvider.state('home', {
     url: '/',
     controller: 'Main.controller',
     templateUrl: '/templates/home.html'
   });

    $stateProvider.state('tab', {
     url: '/tab',
     controller: 'Main.controller',
     templateUrl: '/templates/tab.html'
   });
 }]);

// home controller
app.controller('Main.controller', ['$scope', function($scope){

  $(document).ready(function () {
      $('.mockupBase ul li a').click(function (ev) {
          $('.mockupBase ul li').removeClass('selected');
          $(ev.currentTarget).parent('li').addClass('selected');
      });
  });

}]);