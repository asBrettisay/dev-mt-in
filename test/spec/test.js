describe('devMtIn', function() {
  beforeEach(module('devMtIn'));

  var $controller, profileService;
  beforeEach(inject(function(_$controller_, _profileService_) {
    $controller = _$controller_;
    profileService = _profileService_;
  }));

  describe('homeCtrl', function() {
    var scope, controller;

    beforeEach(inject(function($rootScope) {
      scope = $rootScope.$new();
      controller = $controller('homeCtrl', { $scope: scope });
    }));

    it('should get a profile from localStorage', function() {
      scope.myProfile = profileService.checkForProfile();
      expect(scope.myProfile).toEqual(jasmine.any(Object))
    })

    it('should save a profile to localStorage', function() {
      var profile = { name: 'brett', likes: 'dogs', favoriteColor: 'blue' };
      scope.saveProfile(profile);
      expect(scope.editing).toEqual(false);
      expect(localStorage['profile']).toEqual(JSON.stringify(profile));
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
