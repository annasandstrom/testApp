// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('minApp', ['ionic'])


.controller('myController', function($scope) {
  $scope.tasks = [
    { pos: 1, title: 'Ola', score: 1234 },
    { pos: 2, title: 'Anna' , score: 1232},
    { pos: 3, title: 'Bosse', score: 1022 },
    { pos: 4, title: 'Lasse', score: 783 }
  ]
  $scope.menuChoice = [
    { title: 'Home', link: 'index.html'},
    { title: 'Challenge', link: 'challenge.html'},
    { title: 'Highscore', link: 'highscore.html'},
    { title: 'Achivements', link: 'achivements.html'}
  ];
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});