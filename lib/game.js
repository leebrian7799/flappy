window.Game = function (xDim, yDim) {

};



Game.prototype.start = function (canvasEl) {
  canvasEl.width = "640";
  canvasEl.height = "480";
  var ctx = canvasEl.getContext("2d");

  var background = new Image();
  background.src = "images/underwater.jpg";
  var fishImg = new Image();
  fishImg.src = 'images/fish.png';
  var topPipe = new Image();
  topPipe.src = "images/topPipe.png";
  var bottomPipe = new Image();
  bottomPipe.src = "images/bottomPipe.png";
  var tile = new Image();
  tile.src = "images/platform.png";


  var pX = canvasEl.width-100;
  var pY = 0;
  var offsetArray = [300, 350, 400];
  var offset;
  var fX = 0;
  var fY = 200;
  var gravity = 2;

  var pipes = [];
  pipes[0] = {
    x: canvasEl.width,
    y: 0
  };


  draw();

  function draw () {

    offset = offsetArray[Math.floor(Math.random()*offsetArray.length)];

    ctx.drawImage(background, 0, 0, 640, 480);
    ctx.drawImage(fishImg, fX, fY, 50, 50);
    ctx.drawImage(topPipe, pX, pY, 80, 200);
    ctx.drawImage(bottomPipe, pX, pY+offset, 80, 200);
    ctx.drawImage(tile, 0, canvasEl.height - tile.height, 640, 40);

    fY += gravity;

    requestAnimationFrame(draw);

  }


};

module.exports = Game;
