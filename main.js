const Game = require('./lib/game.js')

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('drawing-canvas');
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  new Game(
    canvasEl.width,
    canvasEl.height
  ).start(canvasEl);
})
