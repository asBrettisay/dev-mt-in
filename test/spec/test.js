describe('devMtIn', function() {
  beforeEach(module('devMtIn'));

  var $controller, profileService;
  beforeEach(inject(function(_$controller_, _profileService_) {
    $controller = _$controller_;
    profileService = _profileService_;
  }));

  describe('homeCtrl', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('homeCtrl', { $scope: $scope });
    });

    it('should set editing to false by default', function() {
      expect($scope.editing).toEqual(false);
    })
  })

  describe('profileService', function(){
    // beforeEach(module('devMtIn'))
    // beforeEach(inject(function($injector){
    //   profileService = $injector.get('saveProfile')
    // }));
    var testProfile = {
      name: "Tester Mcgee",
      likes: "Snowboarding",
      favorites: "Everything",
      friends: {name: "Stu"}
    };

    it('should save a profile to local storage', function () {

      profileService.saveProfile(testProfile);
      expect(JSON.parse(localStorage['profile'])).toEqual(testProfile);
    });

    it('should recover a profile from local storage', function() {
      var answer = profileService.checkForProfile();
      expect(answer).toEqual(testProfile)
    })

    it('should delete the profile with the deleteProfile function', function() {
      profileService.deleteProfile();
      expect(localStorage['profile']).toEqual(undefined);
    })


  });
})
