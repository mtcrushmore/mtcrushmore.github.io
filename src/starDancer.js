var StarDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img src="http://imagesavant.com/genetic2/j101.180.3.720.jpg" height="40" width="40"></img>')
  this.$node.addClass("star");

};

StarDancer.prototype = Object.create(Dancer.prototype);
StarDancer.prototype.constructor = StarDancer;

StarDancer.prototype.action = function() {
  this.step();

  this.$node.fadeToggle();
}