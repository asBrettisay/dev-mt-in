angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService) {

  $scope.myProfile = {
    name: 'Brett Caudill',
    friends: [{name: 'Ashleigh'},{name: 'Pepperoni'}, {name: 'Mike'}, {name: 'Daniel'}, {name: 'Cody'}]
  }

  $scope.sortOptions = [{
                          display: 'Ascending',
                          value: false
                        },
                        {
                          display: 'Descending',
                          value: true
                        }];
  $scope.editing = false;

})
