describe('devMtIn', function() {
  beforeEach(module('devMtIn'));

  var $controller, profileService, makeController, $rootScope;
  beforeEach(inject(function(_$rootScope_, _$controller_, _profileService_) {
    $controller = _$controller_;
    profileService = _profileService_;
    $rootScope = _$rootScope_;
  }));

  describe('homeCtrl', function() {
    var scope;
    beforeEach(inject(function() {
      scope = $rootScope.$new();
      controller = $controller('homeCtrl', { $scope: scope })
    }));

    it('should send profile to server', function() {
      var profile = { _id: 'x', name: "Billy", likes: "trucks" };
      scope.saveProfile(profile);
      scope.checkForProfile().then(function(thisResult) {
        var result = thisResult;
      });
      expect(result).toEqual(profile);
    })
  });

  describe('profileService', function(){

    var testProfile = {
      name: "Tester Mcgee",
      likes: "Snowboarding",
      favorites: "Everything",
      friends: {name: "Stu"}
    };

  });
})
