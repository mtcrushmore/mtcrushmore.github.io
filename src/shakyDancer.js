var StarDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  // this.$node = $('<span class="dancer"><img src="http://imagesavant.com/genetic2/j101.180.3.720.jpg" height="100" width="100"></img></span>')
  this.$node.prepend('<img src="http://imagesavant.com/genetic2/j101.180.3.720.jpg" height="40" width="40"></img>')
  this.$node.addClass("shaky");

};

StarDancer.prototype = Object.create(Dancer.prototype);
StarDancer.prototype.constructor = StarDancer;

StarDancer.prototype.action = function() {
  this.step();

  // this.$node.effect("shake");
  this.$node.fadeToggle();
}