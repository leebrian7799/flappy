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