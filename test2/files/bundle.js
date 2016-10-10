/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DATA = [{ title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }, { title: "iMessage Preview Problems ", height: 150 }, { title: "iMessage Preview Problems; leak your location by ", height: 250 }];
	
	var Box = function () {
	  function Box(parent, css, content) {
	    _classCallCheck(this, Box);
	
	    this.height = 0;
	    this.width = 0;
	    this._parent = parent;
	    parent.append("<div class='" + css + "'>" + content + "</div>");
	    this.el = parent.children(":last");
	    this.move(0, 0);
	    this.setHeight(0);
	    this.setWidth(0);
	  }
	
	  _createClass(Box, [{
	    key: "move",
	    value: function move(x, y) {
	      this.x = x;
	      this.y = y;
	      this.el.animate({ top: x + "px", left: y + "px" }, 0);
	    }
	  }, {
	    key: "setHeight",
	    value: function setHeight(height) {
	      this.height = height;
	      this.el.height(height);
	    }
	  }, {
	    key: "setWidth",
	    value: function setWidth(width) {
	      this.width = width;
	      this.el.width(width);
	    }
	  }]);
	
	  return Box;
	}();
	
	function renderLayout(data) {
	  $("#main").empty();
	  var bWidth = ($(window).width() / 4 | 0) - 20;
	  var columnSize = data.length / 4 | 0;
	  var bigColumns = data.length % 4;
	  var currentX = [0, 0, 0, 0];
	  var column = -1;
	  var currentIndexInColumn = 0;
	
	  var mainBox = new Box($("#main"), "mainBox", "");
	  mainBox.move(0, 0);
	  mainBox.setWidth($(window).width());
	
	  data.forEach(function (d, i) {
	    column++;
	    if (column === 4) column = 0;
	    var box = new Box(mainBox.el, "box", d.title);
	    d.height = d.height;
	    box.move(currentX[column] + 20, column * (bWidth + 10));
	    box.setWidth(bWidth);
	    box.setHeight(d.height);
	    currentX[column] += d.height + 20;
	  });
	}
	
	$("#search").click(function (e) {
	  e.preventDefault();
	  var data = DATA.filter(function (el) {
	    return el.title.indexOf($("#text").val()) > -1;
	  });
	  renderLayout(data);
	});
	
	renderLayout(DATA);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map