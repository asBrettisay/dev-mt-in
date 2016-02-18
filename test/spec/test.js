describe('devMtIn', function() {
  beforeEach(module('devMtIn'));


  describe('homeCtrl', function() {
    var httpBackend, profileService, testProfile, friendService, store, baseUrl;
    beforeEach(inject(function(_friendService_, _profileService_, $httpBackend, $rootScope, _$controller_) {
      profileService = _profileService_;
      httpBackend = $httpBackend;
      testProfile = {name: 'stu', likes: 'cats'};
      scope = $rootScope.$new();
      $controller = _$controller_;
      friendService = _friendService_;
      store = {};
      baseUrl = 'http://connections.devmounta.in';

      spyOn(localStorage, 'getItem').and.returnValue({profileId: "1"});
      spyOn(localStorage, 'setItem').and.returnValue({profileId: "1"});
      controller = $controller('homeCtrl', {$scope: scope});

    }));

    it('should check for a profile', function(done) {

      httpBackend.whenPOST("http://connections.devmounta.in/api/profiles/").respond(true)
      httpBackend.whenGET("http://connections.devmounta.in/api/profiles/1").respond(testProfile)
      scope.saveProfile(testProfile);
      done();
      scope.checkForProfile();
      expect(scope.myProfile).toEqual(testProfile);
      done();
      httpBackend.flush();
    });

    it('should find friends from a query', function(done) {
      var query = "John"

      scope.myProfile = {_id: "2" };
      httpBackend.whenGET("http://connections.devmounta.in/api/friends-friends/2?name=John").respond({name: query})
      scope.findFriends(query)
      done();
      expect(scope.potentialFriends).toEqual(query);
    })

    it('should add friends', function(done) {
      httpBackend.whenPUT(baseUrl + '/api/friends/1').respond({id: '5', name: 'John'})
      var friend = {id: '5', name: 'John'};
      scope.myProfile = {_id: "1"}
      scope.addFriend('5')
      done();
      expect(scope.myProfile.friends).toEqual(friend);
    })
  })



})
