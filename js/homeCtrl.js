angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService) {

  $scope.myProfile = profileService.checkForProfile();

  $scope.sortOptions = [{
                          display: 'Ascending',
                          value: false
                        },
                        {
                          display: 'Descending',
                          value: true
                        }];
  $scope.editing = false;

  $scope.saveProfile = function(profile) {
    profileService.saveProfile(profile);
    $scope.editing = false;
  }
})
