var AstronautDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);


  this.$node.prepend('<img src="http://www.refinfo.hu/szhely/mihalovits_nandor/Vila%C2%A6%C3%BCgegyetem/img/Astronaut-Web.png" height="250" width="250"></img>')
  this.$node.addClass("astronaut");

  //add a refernce to this astronaut in the astronaut family array
  AstronautDancer.astronauts.push(this);

  this.$node.draggable();
  this.$node.on('click', function(event) {
    
    //find the top and left position of the astronaut that was clicked on
    var position = $(this).offset();

    //throw every astronaut into the native assemble method
    for (var i = 0; i < AstronautDancer.astronauts.length; i++) {
      AstronautDancer.astronauts[i].assemble(position);
    }

  });
  

};

AstronautDancer.prototype = Object.create(Dancer.prototype);
AstronautDancer.prototype.constructor = AstronautDancer;

//array created to keep track of astronauts, their nodes, and their location
AstronautDancer.astronauts = [];

//animate each astronaut to the location of the clicked on astronaut
AstronautDancer.prototype.assemble = function(position) {
    this.$node.animate({
    left: position.left,
    top: position.top,
  });
}

AstronautDancer.prototype.action = function() {
  
  var node = this.$node;

  //randomize the values for the astronaut's next left and top movement (in .animate)
  this.step();
  var moveDistance = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var nextLeft = (30 * moveDistance[Math.floor(Math.random() * moveDistance.length)]).toString();
  var nextTop = (30 * moveDistance[Math.floor(Math.random() * moveDistance.length)]).toString();
  

  this.$node.animate({
    left: "+=" + nextLeft,
    top: "-=" + nextTop
  }, 1500);
  
}

//this was intended to have the astronauts explode in the punishing vacuum of outer space, but this wasn't executed
AstronautDancer.prototype.accident = function() {
  for (var i = 0; i < 4; i++) {
    this.$node.effect("shake");
  }
  this.$node.effect("explode");
}

s