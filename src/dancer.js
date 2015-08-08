// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  // step();
  

  this.setPosition(top, left);
  // setPosition(top, left);

  // return dancer;
};

// Dancer.prototype.constructor = Dancer;

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);

};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    
    //produced .action method in new Dancer's because it's easier to distinguish between Dancer and new dancer methods
    
    var here = this;
    setTimeout(here.action.bind(this), here.timeBetweenSteps)

};


