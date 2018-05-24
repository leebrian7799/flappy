window.Game = function (xDim, yDim) {

};



Game.prototype.start = function (canvasEl) {

  const ctx = canvasEl.getContext("2d");
  ctx.beginPath();
  ctx.rect(20, 100, 700, 350);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();


  var fishImage = new Image();
  fishImage.src ="../fish.png";

  ctx.drawImage(fishImage, 30, 30, 50, 50);
  //
  // var fish = sprite({
  //   context: canvasEl.getContext("2d"),
  //   width: 590,
  //   height: 175,
  //   image: fishImage
  // });
  // debugger;
  // fish.render();
  // function sprite (options) {
  //   var that = {};
  //
  // that.context = options.context;
  // that.width = options.width;
  // that.height = options.height;
  // that.image = options.image;
  //
  // that.render = function () {
  //   that.context.drawImage(
  //      that.image,
  //      0,
  //      0,
  //      that.width,
  //      that.height,
  //      0,
  //      0,
  //      that.width,
  //      that.height);
  // };
  //
  //
  //
  // return that;
  // }



};

module.exports = Game;
