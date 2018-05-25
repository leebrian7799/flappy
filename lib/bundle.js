/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(/*! ./lib/game.js */ "./lib/game.js")

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('container');
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  new Game(
    canvasEl.width,
    canvasEl.height
  ).start(canvasEl);
})


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map