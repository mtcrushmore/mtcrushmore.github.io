var AsteroidDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass("asteroid");
  this.$node.prepend('<img src="http://i1104.photobucket.com/albums/h329/zorq1/Spinning-asteroid-8.gif">');
  this.action();
};

AsteroidDancer.prototype = Object.create(Dancer.prototype);
AsteroidDancer.prototype.constructor = AsteroidDancer;

AsteroidDancer.prototype.action = function() {

  // flames prepended to follow asteroid on its trajectory
  
  this.$node.prepend('<img src="http://nobacks.com/wp-content/uploads/2014/12/Fire-27-500x182.png">');
    this.$node.animate({
      right: "+=500"
    }, 50);
  this.$node.fadeOut(3000);

}