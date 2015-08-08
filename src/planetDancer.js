var PlanetDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  //create a collection of planet picture URL's to randomly choose from
  var planetURLs = [
    "http://orig09.deviantart.net/9b5d/f/2008/144/9/1/spinning_planet_gif_by_sookie_by_sookiesooker.gif",
    "http://astrobob.areavoices.com/files/2013/07/Earth-spinning.gif",
    "http://25.media.tumblr.com/7fe72887313e7d589748a9ad3f671004/tumblr_n0c2xrBIpQ1smtd9go1_250.gif",
    "http://payload332.cargocollective.com/1/10/336721/8956437/prt_497x497_1417124182.gif"
  ]

  var randomIndex = Math.floor(Math.random() * planetURLs.length)
  var randomPlanet = planetURLs[randomIndex];
  var planetImageCode = '<img src ="' + randomPlanet + '" height="100" width="100"></img>'

  this.$node.prepend(planetImageCode);
  this.$node.addClass("planet");

  
  //radius of orbit will expand as each planet is added
  this.newRadius = PlanetDancer.currentLargestRadius;

  PlanetDancer.currentLargestRadius += 50;

  //get the sun's coordinates so that planets can orbit around them
  this.sunCoord = $('.sun').offset();
  this.sunX = this.sunCoord.left;
  this.sunY = this.sunCoord.top;
 

 //run the native orbit method below
  this.orbit();

};



PlanetDancer.prototype = Object.create(Dancer.prototype);
PlanetDancer.prototype.constructor = PlanetDancer;
PlanetDancer.currentLargestRadius = 200;

PlanetDancer.prototype.action = function() {
  
  this.step();

}

//an orbit function that only needs to be invoked once (thus, no step needed) and will orbit in perpetuity
PlanetDancer.prototype.orbit = function() {
  var radius = this.newRadius;

  var deg = 0;

  var planetToOrbit = this.$node;

  var context = this;

  //new position for the planet will be set as the degrees are iterated through (through 360 degrees, and the loop starts over because it's, well, circular)
  function circle() {
    deg += 0.1;

    //radius * cosine is a good way to measure the x-axis as degree increases
    var newLeft = context.sunX + 60 + Math.floor(radius * Math.cos(deg));

    //radius * sine is a way to measure y-axis as degree increases
    var newTop = context.sunY + 60 + Math.floor(radius * Math.sin(deg));

    
    //newly created planet will animate to specific orbital coordinates, repeating the circle function in perpetuity as degree is increased
    planetToOrbit.animate({
      left: newLeft,
      top: newTop,
    }, 100, function() {
      circle();
    });
  }

  circle();
}