describe('devMtIn', function() {
  beforeEach(module('devMtIn'));


  describe('homeCtrl', function() {
    var httpBackend, profileService, testProfile;
    beforeEach(inject(function(_profileService_, $httpBackend, $rootScope, _$controller_) {
      profileService = _profileService_;
      httpBackend = $httpBackend;
      testProfile = {name: 'stu', likes: 'cats'};
      scope = $rootScope.$new();
      $controller = _$controller_;
    }));

    it('should check for a profile', function() {
      controller = $controller('homeCtrl', {$scope: scope});
      var profileId = "1";
      httpBackend.whenPOST("http://connections.devmounta.in/api/profiles/").respond(true)
      httpBackend.whenGET("http://connections.devmounta.in/api/profiles/undefined").respond(testProfile)
      scope.saveProfile(testProfile);
      profileService.checkForProfile().then(function(response) {
        expect(response.data).toEqual(testProfile);
      });
      httpBackend.flush();
    });


  })

})
