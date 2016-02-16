describe('devMtIn', function() {
  beforeEach(module('devMtIn'));

  var $controller;
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('homeCtrl', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('homeCtrl', { $scope: $scope });
    });

    it('should be an array of objects', function() {
      expect($scope.myProfile.friends).toEqual(jasmine.any(Array))
      $scope.myProfile.friends.forEach(function(thing) {
        expect(thing).toEqual(jasmine.any(Object))
      });
    });
  });
})

describe('service testing', function(){
  var profileService
  beforeEach(module('devMtIn'))
  beforeEach(inject(function(_profileService_){
    profileService = _profileService_
  }))
  it('should see a profiles service', function(){
    expect(profileService.serviceTest()).toBeDefined()
  })
});
