describe('myDancer1', function() {

  var myDancer1, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    myDancer1 = new kaylaDancer2(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(myDancer1.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(myDancer1.$node, 'toggle');
    myDancer1.step();
    expect(myDancer1.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(myDancer1, 'step');
      expect(myDancer1.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(myDancer1.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(myDancer1.step.callCount).to.be.equal(2);
    });
  });
});