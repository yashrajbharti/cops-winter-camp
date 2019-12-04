var myApp = angular.module("myModule", []);

myApp.controller("myController", function($scope, $http) {
  $http
    .get("https://")
    .then(function(response) {
      $scope.campers = response.data;
    });

  $scope.sortColumn = "name";

  $scope.reverseSort = false;

  $scope.sortData = function(column) {
    $scope.reverseSort =
      $scope.sortColumn == column ? !$scope.reverseSort : false;
    $scope.sortColumn = column;
  };

  $scope.getSortClass = function(column) {
    if ($scope.sortColumn == column) {
      return $scope.reverseSort ? "arrow-down" : "arrow-up";
    }
    return "";
  };
});
