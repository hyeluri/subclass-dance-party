var SalsaDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var dancerClass = 'salsadancer';
  Dancer.call(this, top, left, timeBetweenSteps, dancerClass);
};

SalsaDancer.prototype = Object.create(Dancer.prototype);
SalsaDancer.prototype.constructor = SalsaDancer;

SalsaDancer.prototype.step = function(){
  // console.log("proof is in the pudding");
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  console.log("salsadancer");
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};