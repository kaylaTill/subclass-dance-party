var arashDancer1 = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);\
    makeDancer.call(this, top, left, timeBetweenSteps);
    // this.top = top;
    // this.left = left;
    // this.timeBetweenSteps = timeBetweenSteps;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

  arashDancer1.constructor = arashDancer1;
  arashDancer1.prototype = Object.create(makeDancer.prototype);



  var oldStep = makeDancer.prototype.step;

 arashDancer1.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };