(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["TiltHover"] = factory(require("react"));
	else
		root["TiltHover"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TiltHover = __webpack_require__(2);

	Object.defineProperty(exports, 'TiltHover1', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TiltHover).default;
	  }
	});

	var _TiltHover2 = __webpack_require__(83);

	Object.defineProperty(exports, 'TiltHover2', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TiltHover2).default;
	  }
	});

	var _TiltHover3 = __webpack_require__(86);

	Object.defineProperty(exports, 'TiltHover3', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TiltHover3).default;
	  }
	});

	var _TiltHover4 = __webpack_require__(89);

	Object.defineProperty(exports, 'TiltHover4', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TiltHover4).default;
	  }
	});

	var _TiltHover5 = __webpack_require__(92);

	Object.defineProperty(exports, 'TiltHover5', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TiltHover5).default;
	  }
	});

	var _TiltHover6 = __webpack_require__(95);

	Object.defineProperty(exports, 'TiltHover6', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TiltHover6).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/mac2015/Projects/tilt-hover-effect/src/components/TiltHover1/TiltHover1.js';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(4);

	var _TiltHover = __webpack_require__(19);

	var _TiltHover2 = _interopRequireDefault(_TiltHover);

	var _motionStyleHandler = __webpack_require__(23);

	var _classnames = __webpack_require__(82);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TiltHover1 = function (_Component) {
	  _inherits(TiltHover1, _Component);

	  function TiltHover1(props) {
	    _classCallCheck(this, TiltHover1);

	    var _this = _possibleConstructorReturn(this, (TiltHover1.__proto__ || Object.getPrototypeOf(TiltHover1)).call(this, props));

	    _this.initialState = {
	      layer1: {
	        rotateY: 0,
	        rotateX: 0
	      },
	      layer3: {
	        translateX: 0,
	        translateY: 0,
	        rotateZ: 0
	      },
	      title: {
	        translateX: 0,
	        translateY: 120,
	        opacity: 0
	      },
	      description: {
	        translateX: 0,
	        translateY: 120,
	        opacity: 0
	      }
	    };

	    _this.state = {
	      allStyle: (0, _motionStyleHandler.serializeStyle)(_this.initialState)
	    };
	    return _this;
	  }

	  _createClass(TiltHover1, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.tilter.addEventListener('mousemove', function (e) {
	        var axisYLeft = _this2.tilter.getBoundingClientRect().left + _this2.tilter.offsetWidth / 2;
	        var axisXTop = _this2.tilter.getBoundingClientRect().top + _this2.tilter.offsetHeight / 2;

	        var horRatio = Math.floor((e.pageX - window.scrollX - axisYLeft) / (_this2.tilter.offsetWidth / 2) * 100) / 100;
	        var verRatio = Math.floor((axisXTop - (e.pageY - scrollY)) / (_this2.tilter.offsetHeight / 2) * 100) / 100;

	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)({
	            layer1: {
	              rotateY: (0, _reactMotion.spring)(horRatio * 9),
	              rotateX: (0, _reactMotion.spring)(verRatio * 5)
	            },
	            layer3: {
	              translateX: (0, _reactMotion.spring)(horRatio * 5),
	              translateY: (0, _reactMotion.spring)(-verRatio * 5),
	              rotateZ: (0, _reactMotion.spring)(horRatio * 6)
	            },
	            title: {
	              translateX: (0, _reactMotion.spring)(horRatio * 30),
	              translateY: (0, _reactMotion.spring)(-verRatio * 30),
	              opacity: (0, _reactMotion.spring)(1)
	            },
	            description: {
	              translateX: (0, _reactMotion.spring)(horRatio * 30),
	              translateY: (0, _reactMotion.spring)(-verRatio * 30, { stiffness: 120, damping: 24 }),
	              opacity: (0, _reactMotion.spring)(1)
	            }
	          })
	        });
	      });

	      this.tilter.addEventListener('mouseout', function (e) {
	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)((0, _motionStyleHandler.returnToInitialState)(_this2.initialState, _reactMotion.spring, {
	            'description.translateY': function descriptionTranslateY(val) {
	              return (0, _reactMotion.spring)(val, { stiffness: 120, damping: 24 });
	            }
	          }))
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          className = _props.className,
	          backgroundClassName = _props.backgroundClassName,
	          glassClassName = _props.glassClassName,
	          captionClassName = _props.captionClassName,
	          titleClassName = _props.titleClassName,
	          descriptionClassName = _props.descriptionClassName,
	          rectangleClassName = _props.rectangleClassName,
	          titleText = _props.title,
	          descriptionText = _props.description,
	          style = _props.style,
	          others = _objectWithoutProperties(_props, ['className', 'backgroundClassName', 'glassClassName', 'captionClassName', 'titleClassName', 'descriptionClassName', 'rectangleClassName', 'title', 'description', 'style']);

	      return _react2.default.createElement(
	        'div',
	        Object.assign({}, others, {
	          className: (0, _classnames2.default)(_TiltHover2.default.tilter, className),
	          ref: function ref(elem) {
	            return _this3.tilter = elem;
	          },
	          style: Object.assign({ perspective: '1000px' }, style), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 107
	          },
	          __self: this
	        }),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this.state.allStyle, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 112
	            },
	            __self: this
	          },
	          function (allStyle) {
	            return function (_ref) {
	              var layer1 = _ref.layer1,
	                  layer3 = _ref.layer3,
	                  title = _ref.title,
	                  description = _ref.description;
	              return _react2.default.createElement(
	                'div',
	                {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer1, backgroundClassName),
	                  style: function (_ref2) {
	                    var rotateX = _ref2.rotateX,
	                        rotateY = _ref2.rotateY;
	                    return {
	                      transform: 'rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)'
	                    };
	                  }(layer1), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 114
	                  },
	                  __self: _this3
	                },
	                _react2.default.createElement('div', {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer3, glassClassName),
	                  style: function (_ref3) {
	                    var rotateZ = _ref3.rotateZ,
	                        x = _ref3.translateX,
	                        y = _ref3.translateY;
	                    return {
	                      transform: 'translateX(' + x + 'px) translateY(' + y + 'px) rotateZ(' + rotateZ + 'deg)'
	                    };
	                  }(layer3), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 119
	                  },
	                  __self: _this3
	                }),
	                _react2.default.createElement(
	                  'div',
	                  { className: (0, _classnames2.default)(_TiltHover2.default.tilter__caption, captionClassName), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 124
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__title, titleClassName), style: function (_ref4) {
	                        var x = _ref4.translateX,
	                            y = _ref4.translateY,
	                            opacity = _ref4.opacity;
	                        return {
	                          transform: 'translate(' + x + 'px, ' + y + 'px)',
	                          opacity: opacity
	                        };
	                      }(title), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 125
	                      },
	                      __self: _this3
	                    },
	                    titleText
	                  ),
	                  _react2.default.createElement(
	                    'p',
	                    {
	                      className: (0, _classnames2.default)(_TiltHover2.default.tilter__description, descriptionClassName),
	                      style: function (_ref5) {
	                        var x = _ref5.translateX,
	                            y = _ref5.translateY,
	                            opacity = _ref5.opacity;
	                        return {
	                          transform: 'translate(' + x + 'px, ' + y + 'px)',
	                          opacity: opacity
	                        };
	                      }(description), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 131
	                      },
	                      __self: _this3
	                    },
	                    descriptionText
	                  )
	                ),
	                _react2.default.createElement(
	                  'svg',
	                  { className: (0, _classnames2.default)(_TiltHover2.default.tilter__line, rectangleClassName), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 138
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('path', { d: 'M20.5,20.5h260v375h-260V20.5z', __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 139
	                    },
	                    __self: _this3
	                  })
	                )
	              );
	            }((0, _motionStyleHandler.deserializeStyle)(allStyle));
	          }
	        )
	      );
	    }
	  }]);

	  return TiltHover1;
	}(_react.Component);

	TiltHover1.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  backgroundClassName: _react.PropTypes.string,
	  glassClassName: _react.PropTypes.string,
	  captionClassName: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string,
	  descriptionClassName: _react.PropTypes.string,
	  rectangleClassName: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  description: _react.PropTypes.string
	};
		exports.default = TiltHover1;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _Motion = __webpack_require__(5);

	exports.Motion = _interopRequire(_Motion);

	var _StaggeredMotion = __webpack_require__(13);

	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

	var _TransitionMotion = __webpack_require__(14);

	exports.TransitionMotion = _interopRequire(_TransitionMotion);

	var _spring = __webpack_require__(16);

	exports.spring = _interopRequire(_spring);

	var _presets = __webpack_require__(17);

	exports.presets = _interopRequire(_presets);

	// deprecated, dummy warning function

	var _reorderKeys = __webpack_require__(18);

	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(6);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(7);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(8);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(9);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(11);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(12);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	var Motion = _react2['default'].createClass({
	  displayName: 'Motion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
	    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    onRest: _react.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;

	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  },

	  wasAnimating: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyle: null,
	  // after checking for unreadPropStyle != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
	    var dirty = false;
	    var _state = this.state;
	    var currentStyle = _state.currentStyle;
	    var currentVelocity = _state.currentVelocity;
	    var lastIdealStyle = _state.lastIdealStyle;
	    var lastIdealVelocity = _state.lastIdealVelocity;

	    for (var key in destStyle) {
	      if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	        continue;
	      }

	      var styleValue = destStyle[key];
	      if (typeof styleValue === 'number') {
	        if (!dirty) {
	          dirty = true;
	          currentStyle = _extends({}, currentStyle);
	          currentVelocity = _extends({}, currentVelocity);
	          lastIdealStyle = _extends({}, lastIdealStyle);
	          lastIdealVelocity = _extends({}, lastIdealVelocity);
	        }

	        currentStyle[key] = styleValue;
	        currentVelocity[key] = 0;
	        lastIdealStyle[key] = styleValue;
	        lastIdealVelocity[key] = 0;
	      }
	    }

	    if (dirty) {
	      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      // check if we need to animate in the first place
	      var propsStyle = _this.props.style;
	      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	        if (_this.wasAnimating && _this.props.onRest) {
	          _this.props.onRest();
	        }

	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.wasAnimating = false;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      _this.wasAnimating = true;

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyle = {};
	      var newLastIdealVelocity = {};
	      var newCurrentStyle = {};
	      var newCurrentVelocity = {};

	      for (var key in propsStyle) {
	        if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
	          continue;
	        }

	        var styleValue = propsStyle[key];
	        if (typeof styleValue === 'number') {
	          newCurrentStyle[key] = styleValue;
	          newCurrentVelocity[key] = 0;
	          newLastIdealStyle[key] = styleValue;
	          newLastIdealVelocity[key] = 0;
	        } else {
	          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	          for (var i = 0; i < framesToCatchUp; i++) {
	            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            newLastIdealStyleValue = _stepper[0];
	            newLastIdealVelocityValue = _stepper[1];
	          }

	          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	          var nextIdealX = _stepper2[0];
	          var nextIdealV = _stepper2[1];

	          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	          newLastIdealStyle[key] = newLastIdealStyleValue;
	          newLastIdealVelocity[key] = newLastIdealVelocityValue;
	        }
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity,
	        lastIdealStyle: newLastIdealStyle,
	        lastIdealVelocity: newLastIdealVelocity
	      });

	      _this.unreadPropStyle = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }

	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = Motion;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	

	// currently used to initiate the velocity style object to 0
	'use strict';

	exports.__esModule = true;
	exports['default'] = mapToZero;

	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}

	'use strict';

	exports.__esModule = true;
	exports['default'] = stripStyle;

	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	

	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";

	exports.__esModule = true;
	exports["default"] = stepper;

	var reusedTuple = [0, 0];

	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2

	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);

	  // Damping, in kg / s
	  var Fdamper = -b * v;

	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;

	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;

	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }

	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}

	module.exports = exports["default"];
	// array reference around.

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(9)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	

	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;

	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!Object.prototype.hasOwnProperty.call(style, key)) {
	      continue;
	    }

	    if (currentVelocity[key] !== 0) {
	      return false;
	    }

	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(6);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(7);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(8);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(9);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(11);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(12);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}

	var StaggeredMotion = _react2['default'].createClass({
	  displayName: 'StaggeredMotion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
	    styles: _react.PropTypes.func.isRequired,
	    children: _react.PropTypes.func.isRequired
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;

	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  },

	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _state = this.state;
	    var currentStyles = _state.currentStyles;
	    var currentVelocities = _state.currentVelocities;
	    var lastIdealStyles = _state.lastIdealStyles;
	    var lastIdealVelocities = _state.lastIdealVelocities;

	    var someDirty = false;
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i];
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            someDirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	        }
	      }
	    }

	    if (someDirty) {
	      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      var destStyles = _this.props.styles(_this.state.lastIdealStyles);

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyles = [];
	      var newLastIdealVelocities = [];
	      var newCurrentStyles = [];
	      var newCurrentVelocities = [];

	      for (var i = 0; i < destStyles.length; i++) {
	        var destStyle = destStyles[i];
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in destStyle) {
	          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
	            continue;
	          }

	          var styleValue = destStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _mapToZero = __webpack_require__(6);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(7);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(8);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _mergeDiff = __webpack_require__(15);

	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

	var _performanceNow = __webpack_require__(9);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(11);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(12);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  // Copy the value to a `const` so that Flow understands that the const won't
	  // change and will be non-nullable in the callback below.
	  var cUnreadPropStyles = unreadPropStyles;
	  if (cUnreadPropStyles == null) {
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    for (var j = 0; j < cUnreadPropStyles.length; j++) {
	      if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          key: cUnreadPropStyles[j].key,
	          data: cUnreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}

	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }

	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }

	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }

	  return true;
	}

	// core key merging logic

	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key

	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      didLeave({ key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data });
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });

	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;

	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }

	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}

	var TransitionMotion = _react2['default'].createClass({
	  displayName: 'TransitionMotion',

	  propTypes: {
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
	    })),
	    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
	    }))]).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    willEnter: _react.PropTypes.func,
	    willLeave: _react.PropTypes.func,
	    didLeave: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      },
	      didLeave: function didLeave() {}
	    };
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;
	    var didLeave = _props.didLeave;

	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });

	    var _mergeAndSync = mergeAndSync(
	    // Because this is an old-style React.createClass component, Flow doesn't
	    // understand that the willEnter and willLeave props have default values
	    // and will always be present.
	    willEnter, willLeave, didLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);

	    var mergedPropsStyles = _mergeAndSync[0];
	    var currentStyles = _mergeAndSync[1];
	    var currentVelocities = _mergeAndSync[2];
	    var lastIdealStyles = _mergeAndSync[3];
	    var lastIdealVelocities = _mergeAndSync[4];
	    // oldLastIdealVelocities really

	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  },

	  unmounting: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _mergeAndSync2 = mergeAndSync(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

	    var mergedPropsStyles = _mergeAndSync2[0];
	    var currentStyles = _mergeAndSync2[1];
	    var currentVelocities = _mergeAndSync2[2];
	    var lastIdealStyles = _mergeAndSync2[3];
	    var lastIdealVelocities = _mergeAndSync2[4];

	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i].style;
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            mergedPropsStyles[i] = {
	              key: mergedPropsStyles[i].key,
	              data: mergedPropsStyles[i].data,
	              style: _extends({}, mergedPropsStyles[i].style)
	            };
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	          mergedPropsStyles[i].style[key] = styleValue;
	        }
	      }
	    }

	    // unlike the other 2 components, we can't detect staleness and optionally
	    // opt out of setState here. each style object's data might contain new
	    // stuff we're not/cannot compare
	    this.setState({
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      mergedPropsStyles: mergedPropsStyles,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities
	    });
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    if (this.unmounting) {
	      return;
	    }
	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function (timestamp) {
	      var propStyles = _this.props.styles;
	      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = timestamp || _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var _mergeAndSync3 = mergeAndSync(_this.props.willEnter, _this.props.willLeave, _this.props.didLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

	      var newMergedPropsStyles = _mergeAndSync3[0];
	      var newCurrentStyles = _mergeAndSync3[1];
	      var newCurrentVelocities = _mergeAndSync3[2];
	      var newLastIdealStyles = _mergeAndSync3[3];
	      var newLastIdealVelocities = _mergeAndSync3[4];

	      for (var i = 0; i < newMergedPropsStyles.length; i++) {
	        var newMergedPropsStyle = newMergedPropsStyles[i].style;
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in newMergedPropsStyle) {
	          if (!Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)) {
	            continue;
	          }

	          var styleValue = newMergedPropsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = newLastIdealStyles[i][key];
	            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities,
	        mergedPropsStyles: newMergedPropsStyles
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    var styles = props.styles;
	    if (typeof styles === 'function') {
	      this.unreadPropStyles = styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = styles;
	    }

	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    this.unmounting = true;
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = TransitionMotion;
	module.exports = exports['default'];

	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function

	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

/***/ },
/* 15 */
/***/ function(module, exports) {

	

	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?

	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous

	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a

	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';

	exports.__esModule = true;
	exports['default'] = mergeDiff;

	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster

	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }

	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }

	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];

	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev

	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	          continue;
	        }

	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}

	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = spring;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _presets = __webpack_require__(17);

	var _presets2 = _interopRequireDefault(_presets);

	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});

	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}

	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = reorderKeys;

	var hasWarned = false;

	function reorderKeys() {
	  if (true) {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover1.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover1.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports


	// module
	exports.push([module.id, ".tilter___v53er {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1___28v6a {\n  background-size: cover;\n}\n\n.tilter__layer1___28v6a,\n.tilter__line___3Pzp9,\n.tilter__layer3___13wrp {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter___v53er:hover .tilter__line___3Pzp9 {\n  -webkit-transform: scale3d(1,1,1);\n          transform: scale3d(1,1,1);\n}\n.tilter__line___3Pzp9 {\n  -webkit-transform: scale3d(0.8,0.8,1);\n          transform: scale3d(0.8,0.8,1);\n  -webkit-transition: -webkit-transform 0.4s;\n  transition: -webkit-transform 0.4s;\n  transition: transform 0.4s;\n  transition: transform 0.4s, -webkit-transform 0.4s;\n  fill: none;\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n\n.tilter__layer3___13wrp {\n  background-image: -webkit-linear-gradient(70deg, rgb(214, 100, 40), rgba(46, 39, 173, 0.58), rgba(53, 74, 165, 0.6));\n  background-image: linear-gradient(20deg, rgb(214, 100, 40), rgba(46, 39, 173, 0.58), rgba(53, 74, 165, 0.6));\n}\n\n.tilter__caption___Tmyjw {\n  position: absolute;\n  bottom: 0;\n  padding: 4em;\n  color: white;\n}\n\n.tilter__title___1BtKE {\n  margin-bottom: 0.5em;\n}\n", "", {"version":3,"sources":["/./src/components/TiltHover1/TiltHover1.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,uBAAuB;CACxB;;AAED;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;;AAED;EACE,kCAA0B;UAA1B,0BAA0B;CAC3B;AACD;EACE,sCAA8B;UAA9B,8BAA8B;EAC9B,2CAA2B;EAA3B,mCAA2B;EAA3B,2BAA2B;EAA3B,mDAA2B;EAC3B,WAAW;EACX,aAAa;EACb,oBAAoB;CACrB;;AAED;EACE,qHAA6G;EAA7G,6GAA6G;CAC9G;;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,aAAa;CACd;;AAED;EACE,qBAAqB;CACtB","file":"TiltHover1.css","sourcesContent":[".tilter {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1 {\n  background-size: cover;\n}\n\n.tilter__layer1,\n.tilter__line,\n.tilter__layer3 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter:hover .tilter__line {\n  transform: scale3d(1,1,1);\n}\n.tilter__line {\n  transform: scale3d(0.8,0.8,1);\n  transition: transform 0.4s;\n  fill: none;\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n\n.tilter__layer3 {\n  background-image: linear-gradient(20deg, rgb(214, 100, 40), rgba(46, 39, 173, 0.58), rgba(53, 74, 165, 0.6));\n}\n\n.tilter__caption {\n  position: absolute;\n  bottom: 0;\n  padding: 4em;\n  color: white;\n}\n\n.tilter__title {\n  margin-bottom: 0.5em;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"tilter": "tilter___v53er",
		"tilter__layer1": "tilter__layer1___28v6a",
		"tilter__line": "tilter__line___3Pzp9",
		"tilter__layer3": "tilter__layer3___13wrp",
		"tilter__caption": "tilter__caption___Tmyjw",
		"tilter__title": "tilter__title___1BtKE"
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.returnToInitialState = exports.deserializeStyle = exports.serializeStyle = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _set = __webpack_require__(24);

	var _set2 = _interopRequireDefault(_set);

	var _get = __webpack_require__(80);

	var _get2 = _interopRequireDefault(_get);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var secret = 'akbsd827zsvasdv';

	var serializeStyle = exports.serializeStyle = function serializeStyle(obj) {
	  var result = {};
	  Object.keys(obj).forEach(function (childKey) {
	    Object.keys(obj[childKey]).forEach(function (childProp) {
	      result[childKey + '_' + secret + '_' + childProp] = obj[childKey][childProp];
	    });
	  });
	  return result;
	};

	var deserializeStyle = exports.deserializeStyle = function deserializeStyle(input) {
	  var result = {};
	  Object.keys(input).forEach(function (parProp) {
	    var _parProp$split = parProp.split('_' + secret + '_'),
	        _parProp$split2 = _slicedToArray(_parProp$split, 2),
	        selector = _parProp$split2[0],
	        selectorProp = _parProp$split2[1];

	    (0, _set2.default)(result, selector + '.' + selectorProp, input[parProp]);
	  });
	  return result;
	};

	var returnToInitialState = exports.returnToInitialState = function returnToInitialState(initialState, springFunc, customOption) {
	  var result = {};
	  Object.keys(initialState).forEach(function (childKey) {
	    Object.keys(initialState[childKey]).forEach(function (childProp) {
	      // result[`${childKey}_${secret}_${childProp}`] = obj[childKey][childProp];
	      var val = (0, _get2.default)(initialState, childKey + '.' + childProp);
	      (0, _set2.default)(result, childKey + '.' + childProp, springFunc(val));
	    });

	    if (customOption) {
	      Object.keys(customOption).forEach(function (propPath) {
	        var customSpringFunc = customOption[propPath];
	        (0, _set2.default)(result, propPath, customSpringFunc((0, _get2.default)(initialState, propPath)));
	      });
	    }
	  });
	  return result;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(25);

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	module.exports = set;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(26),
	    castPath = __webpack_require__(44),
	    isIndex = __webpack_require__(78),
	    isObject = __webpack_require__(38),
	    toKey = __webpack_require__(79);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(27),
	    eq = __webpack_require__(43);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(28);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(30),
	    getValue = __webpack_require__(42);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(31),
	    isMasked = __webpack_require__(39),
	    isObject = __webpack_require__(38),
	    toSource = __webpack_require__(41);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(32),
	    isObject = __webpack_require__(38);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    getRawTag = __webpack_require__(36),
	    objectToString = __webpack_require__(37);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(34);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(35);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(40);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(34);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(45),
	    isKey = __webpack_require__(46),
	    stringToPath = __webpack_require__(49),
	    toString = __webpack_require__(75);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(45),
	    isSymbol = __webpack_require__(47);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(32),
	    isObjectLike = __webpack_require__(48);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(50);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(51);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(52);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(53),
	    mapCacheDelete = __webpack_require__(69),
	    mapCacheGet = __webpack_require__(72),
	    mapCacheHas = __webpack_require__(73),
	    mapCacheSet = __webpack_require__(74);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(54),
	    ListCache = __webpack_require__(61),
	    Map = __webpack_require__(68);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(55),
	    hashDelete = __webpack_require__(57),
	    hashGet = __webpack_require__(58),
	    hashHas = __webpack_require__(59),
	    hashSet = __webpack_require__(60);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(56);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(56);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(56);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(56);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(62),
	    listCacheDelete = __webpack_require__(63),
	    listCacheGet = __webpack_require__(65),
	    listCacheHas = __webpack_require__(66),
	    listCacheSet = __webpack_require__(67);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(64);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(43);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(64);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(64);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(64);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(34);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(71);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(70);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(76);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(33),
	    arrayMap = __webpack_require__(77),
	    isArray = __webpack_require__(45),
	    isSymbol = __webpack_require__(47);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(47);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(81);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(44),
	    toKey = __webpack_require__(79);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/mac2015/Projects/tilt-hover-effect/src/components/TiltHover2/TiltHover2.js';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(4);

	var _classnames = __webpack_require__(82);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TiltHover = __webpack_require__(84);

	var _TiltHover2 = _interopRequireDefault(_TiltHover);

	var _motionStyleHandler = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TiltHover2 = function (_Component) {
	  _inherits(TiltHover2, _Component);

	  function TiltHover2(props) {
	    _classCallCheck(this, TiltHover2);

	    var _this = _possibleConstructorReturn(this, (TiltHover2.__proto__ || Object.getPrototypeOf(TiltHover2)).call(this, props));

	    _this.initialState = {
	      layer1: {
	        rotateY: 0,
	        translateY: 0,
	        translateZ: 0
	      },
	      line: {
	        rotateZ: 0,
	        translateY: 0
	      },
	      layer3: {
	        translateX: 0,
	        translateY: 0,
	        rotateZ: 0
	      }
	    };

	    _this.state = {
	      allStyle: (0, _motionStyleHandler.serializeStyle)(_this.initialState)
	    };
	    return _this;
	  }

	  _createClass(TiltHover2, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.tilter.addEventListener('mousemove', function (e) {
	        var axisYLeft = _this2.tilter.getBoundingClientRect().left + _this2.tilter.offsetWidth / 2;
	        var axisXTop = _this2.tilter.getBoundingClientRect().top + _this2.tilter.offsetHeight / 2;

	        var horRatio = Math.floor((e.pageX - window.scrollX - axisYLeft) / (_this2.tilter.offsetWidth / 2) * 100) / 100;
	        var verRatio = Math.floor((axisXTop - (e.pageY - scrollY)) / (_this2.tilter.offsetHeight / 2) * 100) / 100;

	        // Layer1
	        var layer1 = {
	          rotateY: (0, _reactMotion.spring)(-horRatio * 9),
	          translateY: (0, _reactMotion.spring)(-verRatio * 10),
	          translateZ: (0, _reactMotion.spring)(-verRatio * 30)
	        };

	        // line
	        var line = {
	          rotateZ: (0, _reactMotion.spring)(-horRatio * 2),
	          translateY: (0, _reactMotion.spring)(-verRatio * 10)
	        };

	        // Layer3
	        var layer3 = {
	          translateX: (0, _reactMotion.spring)(horRatio * 10),
	          translateY: (0, _reactMotion.spring)(verRatio * 10),
	          rotateZ: (0, _reactMotion.spring)(horRatio * 2)
	        };

	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)({
	            layer1: layer1, line: line, layer3: layer3
	          })
	        });
	      });

	      this.tilter.addEventListener('mouseout', function (e) {
	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)((0, _motionStyleHandler.returnToInitialState)(_this2.initialState, _reactMotion.spring))
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          className = _props.className,
	          backgroundClassName = _props.backgroundClassName,
	          glassClassName = _props.glassClassName,
	          captionClassName = _props.captionClassName,
	          titleClassName = _props.titleClassName,
	          descriptionClassName = _props.descriptionClassName,
	          rectangleClassName = _props.rectangleClassName,
	          titleText = _props.title,
	          descriptionText = _props.description,
	          style = _props.style,
	          others = _objectWithoutProperties(_props, ['className', 'backgroundClassName', 'glassClassName', 'captionClassName', 'titleClassName', 'descriptionClassName', 'rectangleClassName', 'title', 'description', 'style']);

	      return _react2.default.createElement(
	        'div',
	        Object.assign({}, others, {
	          className: (0, _classnames2.default)(_TiltHover2.default.tilter, className),
	          ref: function ref(elem) {
	            return _this3.tilter = elem;
	          },
	          style: Object.assign({ perspective: '1000px' }, style), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 102
	          },
	          __self: this
	        }),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this.state.allStyle, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 107
	            },
	            __self: this
	          },
	          function (allStyle) {
	            return function (_ref) {
	              var layer1 = _ref.layer1,
	                  line = _ref.line,
	                  layer3 = _ref.layer3;
	              return _react2.default.createElement(
	                'div',
	                {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer1, backgroundClassName),
	                  style: function (_ref2) {
	                    var z = _ref2.translateZ,
	                        rotateY = _ref2.rotateY,
	                        y = _ref2.translateY;
	                    return {
	                      transform: 'translateZ(' + z + 'px) rotateY(' + rotateY + 'deg) translateY(' + y + 'px)'
	                    };
	                  }(layer1), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 109
	                  },
	                  __self: _this3
	                },
	                _react2.default.createElement('div', {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer3, glassClassName),
	                  style: function (_ref3) {
	                    var x = _ref3.translateX,
	                        y = _ref3.translateY,
	                        rotateZ = _ref3.rotateZ;
	                    return {
	                      transform: 'translate(' + x + 'px, ' + y + 'px) rotateZ(' + rotateZ + 'deg)'
	                    };
	                  }(layer3), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 114
	                  },
	                  __self: _this3
	                }),
	                _react2.default.createElement(
	                  'div',
	                  { className: (0, _classnames2.default)(_TiltHover2.default.tilter__caption, captionClassName), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 120
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__title, titleClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 121
	                      },
	                      __self: _this3
	                    },
	                    titleText
	                  ),
	                  _react2.default.createElement(
	                    'p',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__description, descriptionClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 122
	                      },
	                      __self: _this3
	                    },
	                    descriptionText
	                  )
	                ),
	                _react2.default.createElement(
	                  'svg',
	                  {
	                    style: function (_ref4) {
	                      var rotateZ = _ref4.rotateZ,
	                          y = _ref4.translateY;
	                      return {
	                        transform: 'translateY(' + y + 'px) rotateZ(' + rotateZ + 'deg)'
	                      };
	                    }(line),
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__line, rectangleClassName), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 124
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('path', { d: 'M20.5,20.5h260v375h-260V20.5z', __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 129
	                    },
	                    __self: _this3
	                  })
	                )
	              );
	            }((0, _motionStyleHandler.deserializeStyle)(allStyle));
	          }
	        )
	      );
	    }
	  }]);

	  return TiltHover2;
	}(_react.Component);

	TiltHover2.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  backgroundClassName: _react.PropTypes.string,
	  glassClassName: _react.PropTypes.string,
	  captionClassName: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string,
	  descriptionClassName: _react.PropTypes.string,
	  rectangleClassName: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  description: _react.PropTypes.string
	};
		exports.default = TiltHover2;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover2.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover2.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports


	// module
	exports.push([module.id, ".tilter___1vZE8 {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1___351F7 {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/3.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1___351F7,\n.tilter__line___34_bM,\n.tilter__layer3___2HnVW {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter__layer3___2HnVW {\n  background-image: -webkit-linear-gradient(45deg, rgba(245, 239, 40, 0.6), rgba(164, 22, 169, 0.6));\n  background-image: linear-gradient(45deg, rgba(245, 239, 40, 0.6), rgba(164, 22, 169, 0.6));\n}\n\n.tilter__line___34_bM {\n  fill: none;\n  stroke: #2e27ad;\n  stroke-width: 4px;\n}\n\n.tilter__caption___3AZiA {\n  position: absolute;\n  bottom: 0;\n  padding: 4em;\n  color: #2e27ad;\n}\n\n.tilter__title___3PRXM {\n  line-height: 1;\n  margin-bottom: 0.5em;\n}\n", "", {"version":3,"sources":["/./src/components/TiltHover2/TiltHover2.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,0BAA0B;EAC1B,mFAAmF;EACnF,uBAAuB;CACxB;;AAED;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;;AAED;EACE,mGAA2F;EAA3F,2FAA2F;CAC5F;;AAED;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;CACnB;;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,eAAe;CAChB;;AAED;EACE,eAAe;EACf,qBAAqB;CACtB","file":"TiltHover2.css","sourcesContent":[".tilter {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1 {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/3.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1,\n.tilter__line,\n.tilter__layer3 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter__layer3 {\n  background-image: linear-gradient(45deg, rgba(245, 239, 40, 0.6), rgba(164, 22, 169, 0.6));\n}\n\n.tilter__line {\n  fill: none;\n  stroke: #2e27ad;\n  stroke-width: 4px;\n}\n\n.tilter__caption {\n  position: absolute;\n  bottom: 0;\n  padding: 4em;\n  color: #2e27ad;\n}\n\n.tilter__title {\n  line-height: 1;\n  margin-bottom: 0.5em;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"tilter": "tilter___1vZE8",
		"tilter__layer1": "tilter__layer1___351F7",
		"tilter__line": "tilter__line___34_bM",
		"tilter__layer3": "tilter__layer3___2HnVW",
		"tilter__caption": "tilter__caption___3AZiA",
		"tilter__title": "tilter__title___3PRXM"
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/mac2015/Projects/tilt-hover-effect/src/components/TiltHover3/TiltHover3.js';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(4);

	var _classnames = __webpack_require__(82);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TiltHover = __webpack_require__(87);

	var _TiltHover2 = _interopRequireDefault(_TiltHover);

	var _motionStyleHandler = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TiltHover3 = function (_Component) {
	  _inherits(TiltHover3, _Component);

	  function TiltHover3(props) {
	    _classCallCheck(this, TiltHover3);

	    var _this = _possibleConstructorReturn(this, (TiltHover3.__proto__ || Object.getPrototypeOf(TiltHover3)).call(this, props));

	    _this.initialState = {
	      layer1: {
	        rotateX: 0,
	        rotateY: 0
	      },
	      layer3: {
	        translateX: 0,
	        translateY: 0,
	        translateZ: 0
	      },
	      shine: {
	        translateX: 0,
	        translateY: 0
	      },
	      caption: {
	        translateX: 0,
	        translateY: 0,
	        translateZ: 0,
	        rotateX: 0
	      }
	    };
	    _this.state = {
	      allStyle: (0, _motionStyleHandler.serializeStyle)(_this.initialState)
	    };
	    return _this;
	  }

	  _createClass(TiltHover3, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.tilter.addEventListener('mousemove', function (e) {
	        var axisYLeft = _this2.tilter.getBoundingClientRect().left + _this2.tilter.offsetWidth / 2;
	        var axisXTop = _this2.tilter.getBoundingClientRect().top + _this2.tilter.offsetHeight / 2;

	        var horRatio = Math.floor((e.pageX - window.scrollX - axisYLeft) / (_this2.tilter.offsetWidth / 2) * 100) / 100;
	        var verRatio = Math.floor((axisXTop - (e.pageY - scrollY)) / (_this2.tilter.offsetHeight / 2) * 100) / 100;

	        var layer1 = {
	          rotateX: (0, _reactMotion.spring)(verRatio * 5),
	          rotateY: (0, _reactMotion.spring)(horRatio * 10)
	        };

	        var layer3 = {
	          translateX: (0, _reactMotion.spring)(horRatio * 10),
	          translateY: (0, _reactMotion.spring)(-verRatio * 10),
	          translateZ: (0, _reactMotion.spring)((verRatio - Math.abs(verRatio)) * 10)
	        };

	        var shine = {
	          translateX: (0, _reactMotion.spring)(horRatio * 100),
	          translateY: (0, _reactMotion.spring)(-verRatio * 100)
	        };

	        var caption = {
	          translateX: (0, _reactMotion.spring)(horRatio * 30),
	          translateY: (0, _reactMotion.spring)(-verRatio * 30),
	          translateZ: (0, _reactMotion.spring)((verRatio - Math.abs(verRatio)) * 20),
	          rotateX: (0, _reactMotion.spring)((verRatio - Math.abs(verRatio)) * 15 / 2)
	        };

	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)({
	            layer1: layer1,
	            layer3: layer3,
	            shine: shine,
	            caption: caption
	          })
	        });
	      });

	      this.tilter.addEventListener('mouseout', function (e) {
	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)((0, _motionStyleHandler.returnToInitialState)(_this2.initialState, _reactMotion.spring))
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          className = _props.className,
	          backgroundClassName = _props.backgroundClassName,
	          glassClassName = _props.glassClassName,
	          captionClassName = _props.captionClassName,
	          titleClassName = _props.titleClassName,
	          descriptionClassName = _props.descriptionClassName,
	          titleText = _props.title,
	          descriptionText = _props.description,
	          style = _props.style,
	          others = _objectWithoutProperties(_props, ['className', 'backgroundClassName', 'glassClassName', 'captionClassName', 'titleClassName', 'descriptionClassName', 'title', 'description', 'style']);

	      return _react2.default.createElement(
	        'div',
	        Object.assign({}, others, {
	          className: (0, _classnames2.default)(_TiltHover2.default.tilter, className),
	          ref: function ref(elem) {
	            return _this3.tilter = elem;
	          },
	          style: Object.assign({ perspective: '1000px' }, style), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 110
	          },
	          __self: this
	        }),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this.state.allStyle, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 115
	            },
	            __self: this
	          },
	          function (allStyle) {
	            return function (_ref) {
	              var layer1 = _ref.layer1,
	                  shine = _ref.shine,
	                  layer3 = _ref.layer3,
	                  caption = _ref.caption;
	              return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer1, backgroundClassName), style: function (_ref2) {
	                    var rotateY = _ref2.rotateY,
	                        rotateX = _ref2.rotateX;
	                    return {
	                      transform: 'rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)'
	                    };
	                  }(layer1), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 117
	                  },
	                  __self: _this3
	                },
	                _react2.default.createElement(
	                  'div',
	                  { className: _TiltHover2.default.tilter__shine_contain, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 120
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('div', {
	                    className: _TiltHover2.default.tilter__shine,
	                    style: {
	                      transform: 'translate(' + shine.translateX + 'px, ' + shine.translateY + 'px)'
	                    }, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 121
	                    },
	                    __self: _this3
	                  })
	                ),
	                _react2.default.createElement('div', {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer3, glassClassName),
	                  style: function (_ref3) {
	                    var x = _ref3.translateX,
	                        y = _ref3.translateY,
	                        z = _ref3.translateZ;
	                    return {
	                      transform: 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)'
	                    };
	                  }(layer3), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 127
	                  },
	                  __self: _this3
	                }),
	                _react2.default.createElement(
	                  'div',
	                  {
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__caption, captionClassName),
	                    style: function (_ref4) {
	                      var x = _ref4.translateX,
	                          y = _ref4.translateY,
	                          z = _ref4.translateZ,
	                          rotateX = _ref4.rotateX;
	                      return {
	                        transform: 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px) rotateX(' + rotateX + 'deg)'
	                      };
	                    }(caption), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 133
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__title, titleClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 138
	                      },
	                      __self: _this3
	                    },
	                    titleText
	                  ),
	                  _react2.default.createElement(
	                    'p',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__description, descriptionClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 139
	                      },
	                      __self: _this3
	                    },
	                    descriptionText
	                  )
	                )
	              );
	            }((0, _motionStyleHandler.deserializeStyle)(allStyle));
	          }
	        )
	      );
	    }
	  }]);

	  return TiltHover3;
	}(_react.Component);

	TiltHover3.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  backgroundClassName: _react.PropTypes.string,
	  glassClassName: _react.PropTypes.string,
	  captionClassName: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string,
	  descriptionClassName: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  description: _react.PropTypes.string
	};
		exports.default = TiltHover3;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover3.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover3.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports


	// module
	exports.push([module.id, ".tilter___1xW2v {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1___2UTJx {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/5.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1___2UTJx,\n.tilter__layer3___3EtnW,\n.tilter__shine_contain___3YDGq {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter__layer2___oxzxU {\n  position: absolute;\n  border: 4px solid rgba(20, 59, 174, 1);\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3___3EtnW {\n  background-image: -webkit-linear-gradient(45deg, rgba(205, 81, 220, 0.6), rgba(41, 94, 230,0.5));\n  background-image: linear-gradient(45deg, rgba(205, 81, 220, 0.6), rgba(41, 94, 230,0.5));\n}\n\n.tilter__shine_contain___3YDGq {\n  overflow: hidden;\n}\n\n.tilter__caption___yYOv4 {\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  padding: 2em;\n  color: white;\n}\n\n.tilter__shine___1ZSqH {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title___3vzRY {\n  line-height: 1;\n  margin-bottom: 0.5em;\n  text-shadow: 0.1em 0.8em 1em rgba(0,0,0,0.35);\n}\n", "", {"version":3,"sources":["/./src/components/TiltHover3/TiltHover3.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,0BAA0B;EAC1B,mFAAmF;EACnF,uBAAuB;CACxB;;AAED;;;EAGE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,uCAAuC;EACvC,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,0BAA0B;CAC3B;;AAED;EACE,iGAAyF;EAAzF,yFAAyF;CAC1F;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,WAAW;EACX,yHAAiH;EAAjH,iHAAiH;CAClH;;AAED;EACE,eAAe;EACf,qBAAqB;EACrB,8CAA8C;CAC/C","file":"TiltHover3.css","sourcesContent":[".tilter {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1 {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/5.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1,\n.tilter__layer3,\n.tilter__shine_contain {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter__layer2 {\n  position: absolute;\n  border: 4px solid rgba(20, 59, 174, 1);\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3 {\n  background-image: linear-gradient(45deg, rgba(205, 81, 220, 0.6), rgba(41, 94, 230,0.5));\n}\n\n.tilter__shine_contain {\n  overflow: hidden;\n}\n\n.tilter__caption {\n  position: absolute;\n  bottom: 0;\n  text-align: right;\n  padding: 2em;\n  color: white;\n}\n\n.tilter__shine {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title {\n  line-height: 1;\n  margin-bottom: 0.5em;\n  text-shadow: 0.1em 0.8em 1em rgba(0,0,0,0.35);\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"tilter": "tilter___1xW2v",
		"tilter__layer1": "tilter__layer1___2UTJx",
		"tilter__layer3": "tilter__layer3___3EtnW",
		"tilter__shine_contain": "tilter__shine_contain___3YDGq",
		"tilter__layer2": "tilter__layer2___oxzxU",
		"tilter__caption": "tilter__caption___yYOv4",
		"tilter__shine": "tilter__shine___1ZSqH",
		"tilter__title": "tilter__title___3vzRY"
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/mac2015/Projects/tilt-hover-effect/src/components/TiltHover4/TiltHover4.js';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(4);

	var _classnames = __webpack_require__(82);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TiltHover = __webpack_require__(90);

	var _TiltHover2 = _interopRequireDefault(_TiltHover);

	var _motionStyleHandler = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TiltHover4 = function (_Component) {
	  _inherits(TiltHover4, _Component);

	  function TiltHover4(props) {
	    _classCallCheck(this, TiltHover4);

	    var _this = _possibleConstructorReturn(this, (TiltHover4.__proto__ || Object.getPrototypeOf(TiltHover4)).call(this, props));

	    _this.initialState = {
	      layer1: {
	        translateY: 0,
	        rotateX: 0,
	        rotateY: 0
	      },
	      layer3: {
	        translateY: 0
	      },
	      shine: {
	        translateX: 0,
	        translateY: 0
	      },
	      caption: {
	        translateX: 0,
	        translateY: 0
	      }
	    };

	    _this.state = {
	      allStyle: (0, _motionStyleHandler.serializeStyle)(_this.initialState)
	    };
	    return _this;
	  }

	  _createClass(TiltHover4, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.tilter.addEventListener('mousemove', function (e) {
	        var axisYLeft = _this2.tilter.getBoundingClientRect().left + _this2.tilter.offsetWidth / 2;
	        var axisXTop = _this2.tilter.getBoundingClientRect().top + _this2.tilter.offsetHeight / 2;

	        var horRatio = Math.floor((e.pageX - window.scrollX - axisYLeft) / (_this2.tilter.offsetWidth / 2) * 100) / 100;
	        var verRatio = Math.floor((axisXTop - (e.pageY - scrollY)) / (_this2.tilter.offsetHeight / 2) * 100) / 100;

	        // Layer1
	        var layer1 = {
	          translateY: (0, _reactMotion.spring)(verRatio * 8),
	          rotateX: (0, _reactMotion.spring)(-verRatio * 3),
	          rotateY: (0, _reactMotion.spring)(horRatio * 3)
	        };

	        // Layer2
	        // const layer2 = {
	        //   rotateZ: spring(-horRatio * 2),
	        //   translateY: spring(-verRatio * 10)
	        // };

	        // Layer3
	        var layer3 = {
	          translateY: (0, _reactMotion.spring)(verRatio * 8)
	        };

	        var shine = {
	          translateX: (0, _reactMotion.spring)(horRatio * 100),
	          translateY: (0, _reactMotion.spring)(-verRatio * 100)
	        };

	        var caption = {
	          translateX: (0, _reactMotion.spring)(horRatio * 10),
	          translateY: (0, _reactMotion.spring)(verRatio * 15)
	        };

	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)({
	            layer1: layer1,
	            layer3: layer3,
	            shine: shine,
	            caption: caption
	          })
	        });
	      });

	      this.tilter.addEventListener('mouseout', function (e) {
	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)((0, _motionStyleHandler.returnToInitialState)(_this2.initialState, _reactMotion.spring))
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          className = _props.className,
	          backgroundClassName = _props.backgroundClassName,
	          glassClassName = _props.glassClassName,
	          captionClassName = _props.captionClassName,
	          titleClassName = _props.titleClassName,
	          descriptionClassName = _props.descriptionClassName,
	          rectangleClassName = _props.rectangleClassName,
	          titleText = _props.title,
	          descriptionText = _props.description,
	          style = _props.style,
	          others = _objectWithoutProperties(_props, ['className', 'backgroundClassName', 'glassClassName', 'captionClassName', 'titleClassName', 'descriptionClassName', 'rectangleClassName', 'title', 'description', 'style']);

	      return _react2.default.createElement(
	        'div',
	        Object.assign({}, others, {
	          className: (0, _classnames2.default)(_TiltHover2.default.tilter, className),
	          ref: function ref(elem) {
	            return _this3.tilter = elem;
	          },
	          style: Object.assign({ perspective: '1000px' }, style), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 118
	          },
	          __self: this
	        }),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this.state.allStyle, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 123
	            },
	            __self: this
	          },
	          function (allStyle) {
	            return function (_ref) {
	              var layer1 = _ref.layer1,
	                  shine = _ref.shine,
	                  layer3 = _ref.layer3,
	                  caption = _ref.caption;
	              return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer1, backgroundClassName), style: function (_ref2) {
	                    var y = _ref2.translateY,
	                        rotateY = _ref2.rotateY,
	                        rotateX = _ref2.rotateX;
	                    return {
	                      transform: 'translateY(' + y + 'px) rotateY(' + rotateY + 'deg) rotateX(' + rotateX + 'deg)'
	                    };
	                  }(layer1), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 125
	                  },
	                  __self: _this3
	                },
	                _react2.default.createElement(
	                  'div',
	                  { className: _TiltHover2.default.tilter__shine_contain, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 128
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('div', {
	                    className: _TiltHover2.default.tilter__shine,
	                    style: {
	                      transform: 'translate(' + shine.translateX + 'px, ' + shine.translateY + 'px)'
	                    }, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 129
	                    },
	                    __self: _this3
	                  })
	                ),
	                _react2.default.createElement('div', {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer3, glassClassName),
	                  style: function (_ref3) {
	                    var y = _ref3.translateY;
	                    return {
	                      transform: 'translateY(' + y + 'px)'
	                    };
	                  }(layer3), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 135
	                  },
	                  __self: _this3
	                }),
	                _react2.default.createElement(
	                  'div',
	                  {
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__caption, captionClassName),
	                    style: function (_ref4) {
	                      var x = _ref4.translateX,
	                          y = _ref4.translateY,
	                          z = _ref4.translateZ,
	                          rotateX = _ref4.rotateX;
	                      return {
	                        transform: 'translateX(' + x + 'px) translateY(' + y + 'px)'
	                      };
	                    }(caption), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 141
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__title, titleClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 146
	                      },
	                      __self: _this3
	                    },
	                    titleText
	                  ),
	                  _react2.default.createElement(
	                    'p',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__description, descriptionClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 147
	                      },
	                      __self: _this3
	                    },
	                    descriptionText
	                  )
	                ),
	                _react2.default.createElement(
	                  'svg',
	                  {
	                    viewBox: '0 0 300 415',
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__line, rectangleClassName), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 149
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('path', { d: 'M20.5,20.5h260v375h-260V20.5z', __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 152
	                    },
	                    __self: _this3
	                  })
	                )
	              );
	            }((0, _motionStyleHandler.deserializeStyle)(allStyle));
	          }
	        )
	      );
	    }
	  }]);

	  return TiltHover4;
	}(_react.Component);

	TiltHover4.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  backgroundClassName: _react.PropTypes.string,
	  glassClassName: _react.PropTypes.string,
	  captionClassName: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string,
	  descriptionClassName: _react.PropTypes.string,
	  rectangleClassName: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  description: _react.PropTypes.string
	};
		exports.default = TiltHover4;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover4.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover4.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports


	// module
	exports.push([module.id, ".tilter___nV_DJ {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1___3xMwo {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/9.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1___3xMwo,\n.tilter__layer3___1wltN,\n.tilter__line___33-Dm,\n.tilter__shine_contain___1bDis {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter___nV_DJ:hover .tilter__line___33-Dm path {\n  stroke-dashoffset: 0;\n}\n.tilter___nV_DJ .tilter__line___33-Dm path {\n  stroke-dasharray: 1270;\n  stroke-dashoffset: 1270;\n  -webkit-transition: stroke-dashoffset 0.7s;\n  transition: stroke-dashoffset 0.7s;\n}\n\n.tilter__line___33-Dm {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n\n.tilter__layer2___QfuyE {\n  position: absolute;\n  /*border: 4px solid rgba(20, 59, 174, 1);*/\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3___1wltN {\n  background-image: -webkit-linear-gradient(45deg, rgba(226, 60, 99, 0.4), rgba(145, 58, 252, 0.4), rgba(16, 11, 192, 0.4));\n  background-image: linear-gradient(45deg, rgba(226, 60, 99, 0.4), rgba(145, 58, 252, 0.4), rgba(16, 11, 192, 0.4));\n}\n\n.tilter__shine_contain___1bDis {\n  overflow: hidden;\n}\n\n.tilter__caption___QfGuL {\n  position: absolute;\n  bottom: 0;\n  text-align: left;\n  padding: 4em;\n  color: white;\n}\n\n.tilter__shine___3Mn3d {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title___19v5a {\n  line-height: 1;\n  margin-bottom: 0.5em;\n}\n", "", {"version":3,"sources":["/./src/components/TiltHover4/TiltHover4.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,0BAA0B;EAC1B,mFAAmF;EACnF,uBAAuB;CACxB;;AAED;;;;EAIE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;;AAED;EACE,qBAAqB;CACtB;AACD;EACE,uBAAuB;EACvB,wBAAwB;EACxB,2CAAmC;EAAnC,mCAAmC;CACpC;;AAED;EACE,WAAW;EACX,aAAa;EACb,oBAAoB;CACrB;;AAED;EACE,mBAAmB;EACnB,2CAA2C;EAC3C,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,0BAA0B;CAC3B;;AAED;EACE,0HAAkH;EAAlH,kHAAkH;CACnH;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,WAAW;EACX,yHAAiH;EAAjH,iHAAiH;CAClH;;AAED;EACE,eAAe;EACf,qBAAqB;CACtB","file":"TiltHover4.css","sourcesContent":[".tilter {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1 {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/9.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1,\n.tilter__layer3,\n.tilter__line,\n.tilter__shine_contain {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter:hover .tilter__line path {\n  stroke-dashoffset: 0;\n}\n.tilter .tilter__line path {\n  stroke-dasharray: 1270;\n  stroke-dashoffset: 1270;\n  transition: stroke-dashoffset 0.7s;\n}\n\n.tilter__line {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n\n.tilter__layer2 {\n  position: absolute;\n  /*border: 4px solid rgba(20, 59, 174, 1);*/\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3 {\n  background-image: linear-gradient(45deg, rgba(226, 60, 99, 0.4), rgba(145, 58, 252, 0.4), rgba(16, 11, 192, 0.4));\n}\n\n.tilter__shine_contain {\n  overflow: hidden;\n}\n\n.tilter__caption {\n  position: absolute;\n  bottom: 0;\n  text-align: left;\n  padding: 4em;\n  color: white;\n}\n\n.tilter__shine {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title {\n  line-height: 1;\n  margin-bottom: 0.5em;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"tilter": "tilter___nV_DJ",
		"tilter__layer1": "tilter__layer1___3xMwo",
		"tilter__layer3": "tilter__layer3___1wltN",
		"tilter__line": "tilter__line___33-Dm",
		"tilter__shine_contain": "tilter__shine_contain___1bDis",
		"tilter__layer2": "tilter__layer2___QfuyE",
		"tilter__caption": "tilter__caption___QfGuL",
		"tilter__shine": "tilter__shine___3Mn3d",
		"tilter__title": "tilter__title___19v5a"
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/mac2015/Projects/tilt-hover-effect/src/components/TiltHover5/TiltHover5.js';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(4);

	var _classnames = __webpack_require__(82);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TiltHover = __webpack_require__(93);

	var _TiltHover2 = _interopRequireDefault(_TiltHover);

	var _motionStyleHandler = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TiltHover5 = function (_Component) {
	  _inherits(TiltHover5, _Component);

	  function TiltHover5(props) {
	    _classCallCheck(this, TiltHover5);

	    var _this = _possibleConstructorReturn(this, (TiltHover5.__proto__ || Object.getPrototypeOf(TiltHover5)).call(this, props));

	    _this.initialState = {
	      layer3: {
	        translateX: 0,
	        translateY: 0
	      },
	      shine: {
	        translateX: 0,
	        translateY: 0
	      },
	      caption: {
	        translateX: 0,
	        translateY: 0,
	        rotateZ: 0
	      },
	      line: {
	        translateX: 0,
	        translateY: 0
	      }
	    };

	    _this.state = {
	      allStyle: (0, _motionStyleHandler.serializeStyle)(_this.initialState)
	    };
	    return _this;
	  }

	  _createClass(TiltHover5, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.tilter.addEventListener('mousemove', function (e) {
	        var axisYLeft = _this2.tilter.getBoundingClientRect().left + _this2.tilter.offsetWidth / 2;
	        var axisXTop = _this2.tilter.getBoundingClientRect().top + _this2.tilter.offsetHeight / 2;

	        var horRatio = Math.floor((e.pageX - window.scrollX - axisYLeft) / (_this2.tilter.offsetWidth / 2) * 100) / 100;
	        var verRatio = Math.floor((axisXTop - (e.pageY - scrollY)) / (_this2.tilter.offsetHeight / 2) * 100) / 100;

	        var layer3 = {
	          translateX: (0, _reactMotion.spring)(horRatio * 15),
	          translateY: (0, _reactMotion.spring)(verRatio * 15)
	        };

	        var shine = {
	          translateX: (0, _reactMotion.spring)(horRatio * 100),
	          translateY: (0, _reactMotion.spring)(-verRatio * 100)
	        };

	        var caption = {
	          translateX: (0, _reactMotion.spring)(horRatio * 15),
	          translateY: (0, _reactMotion.spring)(-verRatio * 15),
	          rotateZ: (0, _reactMotion.spring)(horRatio * 3)
	        };

	        var line = {
	          translateX: (0, _reactMotion.spring)(-horRatio * 5),
	          translateY: (0, _reactMotion.spring)(-verRatio * 5)
	        };

	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)({
	            layer3: layer3,
	            shine: shine,
	            caption: caption,
	            line: line
	          })
	        });
	      });

	      this.tilter.addEventListener('mouseout', function (e) {
	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)((0, _motionStyleHandler.returnToInitialState)(_this2.initialState, _reactMotion.spring, {
	            'caption.translateX': function captionTranslateX(val) {
	              return (0, _reactMotion.spring)(val, _reactMotion.presets.wobbly);
	            },
	            'caption.translateY': function captionTranslateY(val) {
	              return (0, _reactMotion.spring)(val, _reactMotion.presets.wobbly);
	            },
	            'caption.rotateZ': function captionRotateZ(val) {
	              return (0, _reactMotion.spring)(val, _reactMotion.presets.wobbly);
	            }
	          }))
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          className = _props.className,
	          backgroundClassName = _props.backgroundClassName,
	          glassClassName = _props.glassClassName,
	          captionClassName = _props.captionClassName,
	          titleClassName = _props.titleClassName,
	          descriptionClassName = _props.descriptionClassName,
	          rectangleClassName = _props.rectangleClassName,
	          titleText = _props.title,
	          descriptionText = _props.description,
	          style = _props.style,
	          others = _objectWithoutProperties(_props, ['className', 'backgroundClassName', 'glassClassName', 'captionClassName', 'titleClassName', 'descriptionClassName', 'rectangleClassName', 'title', 'description', 'style']);

	      return _react2.default.createElement(
	        'div',
	        Object.assign({}, others, {
	          className: (0, _classnames2.default)(_TiltHover2.default.tilter, className),
	          ref: function ref(elem) {
	            return _this3.tilter = elem;
	          },
	          style: Object.assign({ perspective: '1000px' }, style), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 114
	          },
	          __self: this
	        }),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this.state.allStyle, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 119
	            },
	            __self: this
	          },
	          function (allStyle) {
	            return function (_ref) {
	              var shine = _ref.shine,
	                  layer3 = _ref.layer3,
	                  caption = _ref.caption,
	                  line = _ref.line;
	              return _react2.default.createElement(
	                'div',
	                { className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer1, backgroundClassName), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 121
	                  },
	                  __self: _this3
	                },
	                _react2.default.createElement(
	                  'div',
	                  { className: _TiltHover2.default.tilter__shine_contain, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 122
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('div', {
	                    className: _TiltHover2.default.tilter__shine,
	                    style: {
	                      transform: 'translate(' + shine.translateX + 'px, ' + shine.translateY + 'px)'
	                    }, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 123
	                    },
	                    __self: _this3
	                  })
	                ),
	                _react2.default.createElement('div', {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer3, glassClassName),
	                  style: function (_ref2) {
	                    var y = _ref2.translateY,
	                        x = _ref2.translateX;
	                    return {
	                      transform: 'translateX(' + x + 'px) translateY(' + y + 'px)'
	                    };
	                  }(layer3), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 130
	                  },
	                  __self: _this3
	                }),
	                _react2.default.createElement(
	                  'div',
	                  {
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__caption, captionClassName),
	                    style: function (_ref3) {
	                      var x = _ref3.translateX,
	                          y = _ref3.translateY,
	                          z = _ref3.translateZ,
	                          rotateZ = _ref3.rotateZ;
	                      return {
	                        transform: 'translateX(' + x + 'px) translateY(' + y + 'px) rotateZ(' + rotateZ + 'deg)'
	                      };
	                    }(caption), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 136
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__title, titleClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 141
	                      },
	                      __self: _this3
	                    },
	                    titleText
	                  ),
	                  _react2.default.createElement(
	                    'p',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__description, descriptionClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 142
	                      },
	                      __self: _this3
	                    },
	                    descriptionText
	                  )
	                ),
	                _react2.default.createElement(
	                  'svg',
	                  {
	                    style: function (_ref4) {
	                      var x = _ref4.translateX,
	                          y = _ref4.translateY;
	                      return {
	                        transform: 'translate(' + x + 'px, ' + y + 'px)'
	                      };
	                    }(line),
	                    viewBox: '0 0 300 415',
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__line, rectangleClassName), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 144
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('path', { d: 'M20.5,20.5h260v375h-260V20.5z', __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 150
	                    },
	                    __self: _this3
	                  })
	                )
	              );
	            }((0, _motionStyleHandler.deserializeStyle)(allStyle));
	          }
	        )
	      );
	    }
	  }]);

	  return TiltHover5;
	}(_react.Component);

	TiltHover5.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  backgroundClassName: _react.PropTypes.string,
	  glassClassName: _react.PropTypes.string,
	  captionClassName: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string,
	  descriptionClassName: _react.PropTypes.string,
	  rectangleClassName: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  description: _react.PropTypes.string
	};
		exports.default = TiltHover5;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover5.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover5.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports


	// module
	exports.push([module.id, ".tilter___2vTgs {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1___1982T {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/11.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1___1982T,\n.tilter__layer3___vv1yl,\n.tilter__line___28ifY,\n.tilter__shine_contain___2ZT-S {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter___2vTgs:hover .tilter__line___28ifY path {\n}\n.tilter___2vTgs .tilter__line___28ifY path {\n  stroke-dashoffset: 0;\n  stroke-dashoffset: 1270;\n  -webkit-transition: stroke-dashoffset 0.7s;\n  transition: stroke-dashoffset 0.7s;\n}\n\n.tilter__line___28ifY {\n  stroke: #2e27ad;\n  stroke-width: 6px;\n  top: -50px;\n  fill: none;\n  left: -50px;\n  pointer-events: none;\n}\n\n.tilter__layer2___B7252 {\n  position: absolute;\n  /*border: 4px solid rgba(20, 59, 174, 1);*/\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3___vv1yl {\n  background-image: -webkit-linear-gradient(45deg, rgba(46, 39, 173, 0.2), rgba(255, 186, 59, 0.58));\n  background-image: linear-gradient(45deg, rgba(46, 39, 173, 0.2), rgba(255, 186, 59, 0.58));\n}\n\n.tilter__shine_contain___2ZT-S {\n  overflow: hidden;\n}\n\n.tilter__caption___21pgf {\n  position: absolute;\n  bottom: 0;\n  text-align: left;\n  padding: 0 4em 5.5em 1em;\n  color: #2e27ad;\n}\n\n.tilter__shine___1zw_z {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title___C6DjG {\n  line-height: 1;\n  margin-bottom: 0.5em;\n  /*text-shadow: 0.1em 0.8em 1em rgba(0,0,0,0.35);*/\n}\n", "", {"version":3,"sources":["/./src/components/TiltHover5/TiltHover5.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,0BAA0B;EAC1B,oFAAoF;EACpF,uBAAuB;CACxB;;AAED;;;;EAIE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;;AAED;CACC;AACD;EACE,qBAAqB;EACrB,wBAAwB;EACxB,2CAAmC;EAAnC,mCAAmC;CACpC;;AAED;EACE,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,qBAAqB;CACtB;;AAED;EACE,mBAAmB;EACnB,2CAA2C;EAC3C,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,0BAA0B;CAC3B;;AAED;EACE,mGAA2F;EAA3F,2FAA2F;CAC5F;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,yBAAyB;EACzB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,WAAW;EACX,yHAAiH;EAAjH,iHAAiH;CAClH;;AAED;EACE,eAAe;EACf,qBAAqB;EACrB,kDAAkD;CACnD","file":"TiltHover5.css","sourcesContent":[".tilter {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1 {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/11.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1,\n.tilter__layer3,\n.tilter__line,\n.tilter__shine_contain {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter:hover .tilter__line path {\n}\n.tilter .tilter__line path {\n  stroke-dashoffset: 0;\n  stroke-dashoffset: 1270;\n  transition: stroke-dashoffset 0.7s;\n}\n\n.tilter__line {\n  stroke: #2e27ad;\n  stroke-width: 6px;\n  top: -50px;\n  fill: none;\n  left: -50px;\n  pointer-events: none;\n}\n\n.tilter__layer2 {\n  position: absolute;\n  /*border: 4px solid rgba(20, 59, 174, 1);*/\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3 {\n  background-image: linear-gradient(45deg, rgba(46, 39, 173, 0.2), rgba(255, 186, 59, 0.58));\n}\n\n.tilter__shine_contain {\n  overflow: hidden;\n}\n\n.tilter__caption {\n  position: absolute;\n  bottom: 0;\n  text-align: left;\n  padding: 0 4em 5.5em 1em;\n  color: #2e27ad;\n}\n\n.tilter__shine {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title {\n  line-height: 1;\n  margin-bottom: 0.5em;\n  /*text-shadow: 0.1em 0.8em 1em rgba(0,0,0,0.35);*/\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"tilter": "tilter___2vTgs",
		"tilter__layer1": "tilter__layer1___1982T",
		"tilter__layer3": "tilter__layer3___vv1yl",
		"tilter__line": "tilter__line___28ifY",
		"tilter__shine_contain": "tilter__shine_contain___2ZT-S",
		"tilter__layer2": "tilter__layer2___B7252",
		"tilter__caption": "tilter__caption___21pgf",
		"tilter__shine": "tilter__shine___1zw_z",
		"tilter__title": "tilter__title___C6DjG"
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/mac2015/Projects/tilt-hover-effect/src/components/TiltHover6/TiltHover6.js';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(4);

	var _classnames = __webpack_require__(82);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _TiltHover = __webpack_require__(96);

	var _TiltHover2 = _interopRequireDefault(_TiltHover);

	var _motionStyleHandler = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TiltHover6 = function (_Component) {
	  _inherits(TiltHover6, _Component);

	  function TiltHover6(props) {
	    _classCallCheck(this, TiltHover6);

	    var _this = _possibleConstructorReturn(this, (TiltHover6.__proto__ || Object.getPrototypeOf(TiltHover6)).call(this, props));

	    _this.initialState = {
	      layer1: {
	        translateX: 0,
	        translateY: 0
	      },
	      shine: {
	        translateX: 0,
	        translateY: 0
	      },
	      caption: {
	        translateX: 0,
	        translateY: 0,
	        translateZ: 0
	      },
	      line: {
	        translateX: 0,
	        translateY: 0
	      }
	    };

	    _this.state = {
	      allStyle: (0, _motionStyleHandler.serializeStyle)(_this.initialState)
	    };
	    return _this;
	  }

	  _createClass(TiltHover6, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.tilter.addEventListener('mousemove', function (e) {
	        var axisYLeft = _this2.tilter.getBoundingClientRect().left + _this2.tilter.offsetWidth / 2;
	        var axisXTop = _this2.tilter.getBoundingClientRect().top + _this2.tilter.offsetHeight / 2;

	        var horRatio = Math.floor((e.pageX - window.scrollX - axisYLeft) / (_this2.tilter.offsetWidth / 2) * 100) / 100;
	        var verRatio = Math.floor((axisXTop - (e.pageY - scrollY)) / (_this2.tilter.offsetHeight / 2) * 100) / 100;

	        var layer1 = {
	          translateX: (0, _reactMotion.spring)(horRatio * 5),
	          translateY: (0, _reactMotion.spring)(-verRatio * 5)
	        };

	        var shine = {
	          translateX: (0, _reactMotion.spring)(horRatio * 100),
	          translateY: (0, _reactMotion.spring)(-verRatio * 100)
	        };

	        var caption = {
	          translateX: (0, _reactMotion.spring)(horRatio * 10),
	          translateY: (0, _reactMotion.spring)(-verRatio * 10),
	          translateZ: (0, _reactMotion.spring)(horRatio * 3)
	        };

	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)({
	            layer1: layer1,
	            shine: shine,
	            caption: caption
	          })
	        });
	      });

	      this.tilter.addEventListener('mouseout', function (e) {
	        _this2.setState({
	          allStyle: (0, _motionStyleHandler.serializeStyle)((0, _motionStyleHandler.returnToInitialState)(_this2.initialState, _reactMotion.spring, {
	            'caption.translateX': function captionTranslateX(val) {
	              return (0, _reactMotion.spring)(val, _reactMotion.presets.wobbly);
	            },
	            'caption.translateY': function captionTranslateY(val) {
	              return (0, _reactMotion.spring)(val, _reactMotion.presets.wobbly);
	            },
	            'caption.rotateZ': function captionRotateZ(val) {
	              return (0, _reactMotion.spring)(val, _reactMotion.presets.wobbly);
	            }
	          }))
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          className = _props.className,
	          backgroundClassName = _props.backgroundClassName,
	          glassClassName = _props.glassClassName,
	          captionClassName = _props.captionClassName,
	          titleClassName = _props.titleClassName,
	          descriptionClassName = _props.descriptionClassName,
	          rectangleClassName = _props.rectangleClassName,
	          titleText = _props.title,
	          descriptionText = _props.description,
	          style = _props.style,
	          others = _objectWithoutProperties(_props, ['className', 'backgroundClassName', 'glassClassName', 'captionClassName', 'titleClassName', 'descriptionClassName', 'rectangleClassName', 'title', 'description', 'style']);

	      return _react2.default.createElement(
	        'div',
	        Object.assign({}, others, {
	          className: (0, _classnames2.default)(_TiltHover2.default.tilter, className),
	          ref: function ref(elem) {
	            return _this3.tilter = elem;
	          },
	          style: Object.assign({ perspective: '1000px' }, style), __source: {
	            fileName: _jsxFileName,
	            lineNumber: 108
	          },
	          __self: this
	        }),
	        _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this.state.allStyle, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 113
	            },
	            __self: this
	          },
	          function (allStyle) {
	            return function (_ref) {
	              var layer1 = _ref.layer1,
	                  shine = _ref.shine,
	                  caption = _ref.caption;
	              return _react2.default.createElement(
	                'div',
	                {
	                  style: function (_ref2) {
	                    var x = _ref2.translateX,
	                        y = _ref2.translateY;
	                    return {
	                      transform: 'translate(' + x + 'px, ' + y + 'px)'
	                    };
	                  }(layer1),
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer1, backgroundClassName), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 115
	                  },
	                  __self: _this3
	                },
	                _react2.default.createElement(
	                  'div',
	                  { className: _TiltHover2.default.tilter__shine_contain, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 120
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('div', {
	                    className: _TiltHover2.default.tilter__shine,
	                    style: {
	                      transform: 'translate(' + shine.translateX + 'px, ' + shine.translateY + 'px)'
	                    }, __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 121
	                    },
	                    __self: _this3
	                  })
	                ),
	                _react2.default.createElement('div', {
	                  className: (0, _classnames2.default)(_TiltHover2.default.tilter__layer3, glassClassName), __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 128
	                  },
	                  __self: _this3
	                }),
	                _react2.default.createElement(
	                  'div',
	                  {
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__caption, captionClassName),
	                    style: function (_ref3) {
	                      var x = _ref3.translateX,
	                          y = _ref3.translateY,
	                          z = _ref3.translateZ;
	                      return {
	                        transform: 'translateX(' + x + 'px) translateY(' + y + 'px) translateZ(' + z + 'px)'
	                      };
	                    }(caption), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 131
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement(
	                    'h1',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__title, titleClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 136
	                      },
	                      __self: _this3
	                    },
	                    titleText
	                  ),
	                  _react2.default.createElement(
	                    'p',
	                    { className: (0, _classnames2.default)(_TiltHover2.default.tilter__description, descriptionClassName), __source: {
	                        fileName: _jsxFileName,
	                        lineNumber: 137
	                      },
	                      __self: _this3
	                    },
	                    descriptionText
	                  )
	                ),
	                _react2.default.createElement(
	                  'svg',
	                  {
	                    viewBox: '0 0 300 415',
	                    className: (0, _classnames2.default)(_TiltHover2.default.tilter__line, rectangleClassName), __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 139
	                    },
	                    __self: _this3
	                  },
	                  _react2.default.createElement('path', { d: 'M20.5,20.5h260v375h-260V20.5z', __source: {
	                      fileName: _jsxFileName,
	                      lineNumber: 142
	                    },
	                    __self: _this3
	                  })
	                )
	              );
	            }((0, _motionStyleHandler.deserializeStyle)(allStyle));
	          }
	        )
	      );
	    }
	  }]);

	  return TiltHover6;
	}(_react.Component);

	TiltHover6.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  backgroundClassName: _react.PropTypes.string,
	  glassClassName: _react.PropTypes.string,
	  captionClassName: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string,
	  descriptionClassName: _react.PropTypes.string,
	  rectangleClassName: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  description: _react.PropTypes.string
	};
		exports.default = TiltHover6;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(97);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover6.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./TiltHover6.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports


	// module
	exports.push([module.id, ".tilter___1cdyk {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1___3WW9u {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/13.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1___3WW9u,\n.tilter__layer3___KPVoV,\n.tilter__line___32tLe,\n.tilter__shine_contain___2IB3H {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter___1cdyk:hover .tilter__line___32tLe {\n  opacity: 1;\n  -webkit-transform: scale3d(1,1,1);\n          transform: scale3d(1,1,1);\n}\n.tilter__line___32tLe {\n  stroke-width: 20px;\n  fill: none;\n  stroke: #fff;\n  -webkit-transform: scale3d(0.9,0.9,1);\n          transform: scale3d(0.9,0.9,1);\n  opacity: 0;\n  -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;\n  transition: opacity 0.3s, -webkit-transform 0.3s;\n  transition: transform 0.3s, opacity 0.3s;\n  transition: transform 0.3s, opacity 0.3s, -webkit-transform 0.3s;\n}\n\n.tilter__layer2___2oW_y {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3___KPVoV {\n  background-image: -webkit-linear-gradient(45deg, rgba(93, 203, 106, 0.48), rgba(59, 239, 255, 0.58));\n  background-image: linear-gradient(45deg, rgba(93, 203, 106, 0.48), rgba(59, 239, 255, 0.58));\n}\n\n.tilter__shine_contain___2IB3H {\n  overflow: hidden;\n}\n\n.tilter__caption___lLNU0 {\n  position: absolute;\n  bottom: 0;\n  text-align: left;\n  padding: 4em;\n  color: white;\n}\n\n.tilter__shine___3hQ8J {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title___ArcO1 {\n  line-height: 1;\n  margin-bottom: 0.5em;\n}\n", "", {"version":3,"sources":["/./src/components/TiltHover6/TiltHover6.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,0BAA0B;EAC1B,oFAAoF;EACpF,uBAAuB;CACxB;;AAED;;;;EAIE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;;AAED;EACE,WAAW;EACX,kCAA0B;UAA1B,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,sCAA8B;UAA9B,8BAA8B;EAC9B,WAAW;EACX,yDAAyC;EAAzC,iDAAyC;EAAzC,yCAAyC;EAAzC,iEAAyC;CAC1C;;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,yBAAyB;EACzB,0BAA0B;CAC3B;;AAED;EACE,qGAA6F;EAA7F,6FAA6F;CAC9F;;AAED;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,aAAa;CACd;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,WAAW;EACX,yHAAiH;EAAjH,iHAAiH;CAClH;;AAED;EACE,eAAe;EACf,qBAAqB;CACtB","file":"TiltHover6.css","sourcesContent":[".tilter {\n  width: 300px;\n  height: 415px;\n  display: inline-block;\n}\n\n.tilter__layer1 {\n  /*background-color: red;*/\n  background-image: url(https://tympanus.net/Development/TiltHoverEffects/img/13.jpg);\n  background-size: cover;\n}\n\n.tilter__layer1,\n.tilter__layer3,\n.tilter__line,\n.tilter__shine_contain {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.tilter:hover .tilter__line {\n  opacity: 1;\n  transform: scale3d(1,1,1);\n}\n.tilter__line {\n  stroke-width: 20px;\n  fill: none;\n  stroke: #fff;\n  transform: scale3d(0.9,0.9,1);\n  opacity: 0;\n  transition: transform 0.3s, opacity 0.3s;\n}\n\n.tilter__layer2 {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: calc(100% - 40px);\n  height: calc(100% - 40px);\n}\n\n.tilter__layer3 {\n  background-image: linear-gradient(45deg, rgba(93, 203, 106, 0.48), rgba(59, 239, 255, 0.58));\n}\n\n.tilter__shine_contain {\n  overflow: hidden;\n}\n\n.tilter__caption {\n  position: absolute;\n  bottom: 0;\n  text-align: left;\n  padding: 4em;\n  color: white;\n}\n\n.tilter__shine {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  top: -50%;\n  left: -50%;\n  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0.25) 50%, transparent 100%);\n}\n\n.tilter__title {\n  line-height: 1;\n  margin-bottom: 0.5em;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"tilter": "tilter___1cdyk",
		"tilter__layer1": "tilter__layer1___3WW9u",
		"tilter__layer3": "tilter__layer3___KPVoV",
		"tilter__line": "tilter__line___32tLe",
		"tilter__shine_contain": "tilter__shine_contain___2IB3H",
		"tilter__layer2": "tilter__layer2___2oW_y",
		"tilter__caption": "tilter__caption___lLNU0",
		"tilter__shine": "tilter__shine___3hQ8J",
		"tilter__title": "tilter__title___ArcO1"
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tilt-hover.map