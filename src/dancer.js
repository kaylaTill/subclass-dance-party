// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log('step')
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};



makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

// var dancer = new makeDancer;
// dancer.step(1000);
// dancer.setPosition(50, 50)




// // Creates and returns a new dancer object that can step
// var Dancer = function(top, left, timeBetweenSteps) {

//   // var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   // return dancer;
// };

//  Dancer.prototype.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(this.step, timeBetweenSteps);
//   };;

//  Dancer.prototype.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     this.$node.css(styleSettings);
//   };

// dancer.step()
// dancer.setPosition(top, left);