window.Game = function () {

};

Game.prototype.start = function (canvasEl) {
  document.getElementById('game-over').style.display = 'none';

  canvasEl.width = "640";
  canvasEl.height = "480";
  var ctx = canvasEl.getContext("2d");
  var jumpSound = new Audio("WaterDrop.mp3");
  var bgMusic = new Audio("Happy.mp3");
  bgMusic.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
  }, false);

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
     jumpSound.play();
  }


  draw();

  function draw () {
    var collision = false
    var gap = 75;

    bgMusic.play();
    ctx.drawImage(background, 0, 0, 640, 480);
    ctx.drawImage(fishImg, fX, fY, 50, 50);

    pipes.forEach((pipe) => {
      ctx.drawImage(topPipe, pipe.x, pipe.y);
      ctx.drawImage(bottomPipe, pipe.x, pipe.y + 390);
      pipe.x -= 2;


      if(pipe.x == 240){
        pipes.push({
          x: canvasEl.width,
          y: Math.floor(Math.random()*topPipe.height)-topPipe.height
          }
        )
      }

      if(pipe.x == -80){
        score += 1;
      }

        ctx.fillStyle = "#000"
        ctx.font = "20 px Verdana";
        ctx.drawImage(tile, 0, canvasEl.height - tile.height, 640, 40);
        ctx.fillText("Score: " + score, 10, canvasEl.height - 20);

        if ((fX+ 50) >= pipe.x && fX <= pipe.x + topPipe.width &&
          (fY <= pipe.y + topPipe.height || fY + 50 >= pipe.y + 390) ||
          (fY + 50 >= canvasEl.height - 40)){
            ctx.canvas.removeEventListener('keydown', moveUp);
            collision = true;
            const gameover = document.getElementById('game-over');
            document.getElementById("score").innerHTML = score;
            bgMusic.pause();
            bgMusic.currentTime = 0;
            show(gameover);
          }
      }
    );

    if (!collision){
      fY += gravity;
      requestAnimationFrame(draw);
    }
  }

};



function hide(el) {
  el.style.display = 'hide';
}


function show(el) {
  el.style.display = 'block';
}

module.exports = Game;
