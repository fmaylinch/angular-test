
console.log("hello angular");

let app = angular.module('angularTestApp', []);

app.controller('MainController', function($scope) {

  // is executed when the page is loaded
  $scope.clicked = false;

  $scope.number = 0;

  $scope.names = ["Txell", "Montse", "Cris"];

  $scope.message = "Hello from the controller";

  $scope.changeMessage = function() {

    console.log("Going to change!");
    $scope.message = "The button was clicked!";

    $scope.paragraphClass = ["highlighted"];

    $scope.clicked = true;
  };

  $scope.addOne = function() {
    $scope.number += 1;
  };

  $scope.hasEatenTooMany =  function() {
    return $scope.number >= 10;
  };
});
