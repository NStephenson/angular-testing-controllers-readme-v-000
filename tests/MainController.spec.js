describe('MainController', function() {
  beforeEach(module('app'));

  var controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should have Steve Job\'s name', function() {
    var $scope;
    var controller = $controller('MainController', {scope: $scope});
    expect(controller.name).toBe('Steve Jobs');
  });
  
});

