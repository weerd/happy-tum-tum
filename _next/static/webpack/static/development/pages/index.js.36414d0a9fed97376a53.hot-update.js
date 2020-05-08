webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_FoodItem_FoodItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FoodItem/FoodItem */ "./components/FoodItem/FoodItem.js");
/* harmony import */ var _components_SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchForm/SearchForm */ "./components/SearchForm/SearchForm.js");
var _jsxFileName = "/Users/Weerd/Code/happy-tum-tum/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var __N_SSG = true;
function Index(_ref) {
  var _this = this;

  var foods = _ref.foods;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(foods),
      foodList = _useState2[0],
      setFoodList = _useState2[1];

  var findMatches = function findMatches(wordToMatch, itemList) {
    // @TODO: remove symbols since it breaks the search
    return itemList.filter(function (item) {
      var regex = new RegExp(wordToMatch, 'gi');
      return item.name.match(regex) || item.category.match(regex);
    });
  };

  var handleOnChange = function handleOnChange(event) {
    var matches = findMatches(event.target.value, foods);
    setSearchInput(event.target.value);
    setFoodList(matches);
  };

  var handleOnSubmit = function handleOnSubmit(event) {
    event.preventDefault();
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "max-w-screen-sm mx-auto text-gray-300",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Search for food items below and find out whether they are considered low or high", ' ', __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "underline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "FODMAP foods")), ' ', "that could impact your digestion.")), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_components_SearchForm_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    inputText: searchInput,
    onChange: handleOnChange,
    onSubmit: handleOnSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "px-4 py-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, foodList ? __jsx("ul", {
    className: "max-w-screen-sm mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, foodList.map(function (food, index) {
    return __jsx("li", {
      key: index,
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, __jsx(_components_FoodItem_FoodItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      food: food,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 19
      }
    }));
  })) : null)));
}

/***/ })

})
//# sourceMappingURL=index.js.36414d0a9fed97376a53.hot-update.js.map