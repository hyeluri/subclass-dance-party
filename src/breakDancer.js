var BreakDancer = function(top, left, timeBetweenSteps){

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="breakdancer"></span>');
  var dancerClass = 'breakdancer';
  Dancer.call(this, top, left, timeBetweenSteps, dancerClass);
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function(){
  console.log("proof is in the pudding");
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};