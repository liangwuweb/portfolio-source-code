// Define an object that will be used to draw plus signs
const Plus = function () {
  this.x = 0;
  this.y = 0;
  this.left = 0;
  this.top = 0;
  this.width = 0;
  this.height = 0;
  this.scale = 1;
}

//Add draw method to the object
Plus.prototype.draw = function (ctx) {

  ctx.setTransform(this.scale, 0, 0, this.scale, this.left + this.x, this.top + this.y);

  ctx.moveTo(0, -this.height / 2);
  ctx.lineTo(0, this.height / 2);

  ctx.moveTo(-this.width / 2, 0);
  ctx.lineTo(this.width / 2, 0);
}


export { Plus };