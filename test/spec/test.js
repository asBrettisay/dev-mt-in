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

    it('should save a profile and recover it', function() {
      var profile = { name: 'Billy', likes: 'bananas', favoriteColor: 'red' };
      scope.saveProfile(profile)
      var id = JSON.parse(localStorage.getItem('profileId'));

      var result = scope.checkForProfile(id);
      expect(scope.myProfile).toEqual(profile);
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

  });
})
