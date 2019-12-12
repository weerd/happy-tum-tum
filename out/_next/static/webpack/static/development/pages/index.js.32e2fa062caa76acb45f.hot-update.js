webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _foods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../foods */ "./foods.js");
/* harmony import */ var _components_UpArrowIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/UpArrowIcon */ "./components/UpArrowIcon.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _styles_tailwind_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/tailwind.min.css */ "./styles/tailwind.min.css");
/* harmony import */ var _styles_tailwind_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_min_css__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/dlorenzo/Code/fodmap/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "findMatches", function (wordToMatch, itemList) {
      return itemList.filter(function (item) {
        var regex = new RegExp(wordToMatch, 'gi');
        return item.name.match(regex) || item.category.match(regex);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOnChange", function (event) {
      var matches = _this.findMatches(event.target.value, _foods__WEBPACK_IMPORTED_MODULE_9__["default"]);

      _this.setState({
        searchInput: event.target.value,
        foodList: matches
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOnSubmit", function (event) {
      event.preventDefault();
    });

    _this.state = {
      searchInput: '',
      foodList: _foods__WEBPACK_IMPORTED_MODULE_9__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "bg-blue-400 h-2 w-full fixed top-0 left-0 z-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), __jsx("main", {
        role: "main",
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("form", {
        className: "sticky top-0 bg-gray-700 rounded-br-full shadow-md",
        onSubmit: this.handleOnSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("div", {
        className: "pb-8 pl-3 md:pl-6 pr-10 md:pr-16 pt-12 lg:max-w-3xl lg:mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("input", {
        className: "px-6 py-3 w-full rounded-full outline-none",
        type: "search",
        placeholder: "Search foods",
        autoFocus: true,
        onChange: this.handleOnChange,
        value: this.state.searchInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }))), __jsx("div", {
        className: "lg:max-w-3xl lg:mx-auto px-3 md:px-6 py-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.foodList ? __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.state.foodList.map(function (food, index) {
        return __jsx("li", {
          key: index,
          className: "flex bg-white mb-4 rounded-r-full overflow-hidden",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, __jsx("p", {
          className: "p-2 w-3/4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, food.name, food.servingSize ? __jsx("span", {
          className: "ml-3 text-gray-600",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, "(", food.servingSize, ")") : null), __jsx("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('inline-block w-1/4 text-center', food.rating === 'low' ? 'bg-green-400' : 'bg-red-400'),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, food.rating === 'low' ? __jsx(_components_UpArrowIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "h-10 w-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }) : null, food.rating.toUpperCase()));
      })) : null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.32e2fa062caa76acb45f.hot-update.js.map