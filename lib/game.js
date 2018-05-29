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


  var constant = topPipe.height + 370;
  var pX = canvasEl.width-100;
  var pY = 0;
  var offset;
  var fX = 0;
  var fY = 200;
  var gravity = 2;
  var score = 0;

  var pipes = [];
  pipes[0] = {
    x: canvasEl.width,
    y: 0
  };

  document.addEventListener("keydown", moveUp);

  function moveUp(){
     fY -= 35;
  }


  draw();

  function draw () {

    var gap = 75;
    var bottomStart;


    ctx.drawImage(background, 0, 0, 640, 480);
    ctx.drawImage(fishImg, fX, fY, 50, 50);

    pipes.forEach((pipe) => {
      bottomStart = topPipe.height + 380;
      ctx.drawImage(topPipe, pipe.x, pipe.y);
      ctx.drawImage(bottomPipe, pipe.x, pipe.y + 370);
      pipe.x -= 2;


      if(pipe.x == 240){
        pipes.push({
          x: canvasEl.width,
          y: Math.floor(Math.random()*topPipe.height)-topPipe.height
        }
        )
      }

      if ((fX+ 50) >= pipe.x && fX <= pipe.x + topPipe.width &&
        (fY <= pipe.y + topPipe.height || fY + 50 >= pipe.y + 370) ||
        (fY + 50 >= canvasEl.height - 40)){
          location.reload();
        }

        if(pipe.x == 240){
          score += 1;
        }

        ctx.fillStyle = "#000"
        ctx.font = "20 px Verdana";
        ctx.drawImage(tile, 0, canvasEl.height - tile.height, 640, 40);
        ctx.fillText("Score: " + score, 10, canvasEl.height - 20);

      }


    );



    fY += gravity;
    requestAnimationFrame(draw);
  }



};

module.exports = Game;
