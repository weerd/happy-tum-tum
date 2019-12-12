(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/DownArrowIcon.js":
/*!*************************************!*\
  !*** ./components/DownArrowIcon.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dlorenzo/Code/fodmap/components/DownArrowIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DownArrowIcon = function DownArrowIcon(_ref) {
  var className = _ref.className;
  return __jsx("svg", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('fill-current', className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("path", {
    d: "M7 10V2h6v8h5l-8 8-8-8h5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DownArrowIcon);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dlorenzo/Code/fodmap/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Header = function Header(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: "bg-gray-700",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "lg:max-w-3xl lg:mx-auto pt-8 px-3 md:px-16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h2", {
    className: "font-normal mb-2 text-center text-lg text-gray-600 uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "FODMAP Food Reference"), __jsx("h1", {
    className: "font-bold mb-4 text-center text-4xl text-gray-300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Happy Tum-Tum"), __jsx("p", {
    className: "text-gray-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Search for food items below and find out whether they are considered low or high FODMAP foods that could impact your digestion."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/UpArrowIcon.js":
/*!***********************************!*\
  !*** ./components/UpArrowIcon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dlorenzo/Code/fodmap/components/UpArrowIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UpArrowIcon = function UpArrowIcon(_ref) {
  var className = _ref.className;
  return __jsx("svg", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('fill-current', className),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("path", {
    d: "M7 10v8h6v-8h5l-8-8-8 8h5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UpArrowIcon);

/***/ }),

/***/ "./foods.js":
/*!******************!*\
  !*** ./foods.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var foods = [{
  name: 'alfalfa',
  category: 'legume',
  rating: 'low',
  servingSize: null
}, {
  name: 'bamboo shoots',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'bean sprouts',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'beetroot, canned and pickled',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'black beans',
  category: '',
  rating: 'low',
  servingSize: '1/4 cup / 45g'
}, {
  name: 'bok choy / pak choi',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'broccoli, whole',
  category: 'vegetable',
  rating: 'low',
  servingSize: '1/2 cup'
}, {
  name: 'broccoli, heads only',
  category: 'vegetable',
  rating: 'low',
  servingSize: '3/4 cup'
}, {
  name: 'broccoli, stalks only',
  category: 'vegetable',
  rating: 'low',
  servingSize: '1/2 cup'
}, {
  name: 'broccolini, whole',
  category: 'vegetable',
  rating: 'low',
  servingSize: '1/2 cup chopped'
}, {
  name: 'broccolini, heads only',
  category: 'vegetable',
  rating: 'low',
  servingSize: '1/2 cup'
}, {
  name: 'broccolini, stalks only',
  category: 'vegetable',
  rating: 'low',
  servingSize: '1 cup'
}, {
  name: 'brussels sprouts',
  category: 'vegetable',
  rating: 'low',
  servingSize: '2 sprouts'
}, {
  name: 'butternut squash',
  category: 'vegetable',
  rating: 'low',
  servingSize: '1/4 cup'
}, {
  name: 'cabbage, common and red',
  category: '',
  rating: 'low',
  servingSize: 'up to 1 cup'
}, {
  name: 'callaloo',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'carrots',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'celeriac',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'celery',
  category: '',
  rating: 'low',
  servingSize: 'less than 5cm of stalk'
}, {
  name: 'chicory leaves',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'chick peas',
  category: '',
  rating: 'low',
  servingSize: '1/4 cup'
}, {
  name: 'chilli – if tolerable',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'chives',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cho cho',
  category: '',
  rating: 'low',
  servingSize: '1/2 cup diced'
}, {
  name: 'choy sum',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'collard greens',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'corn / sweet corn – if tolerable and only in small amounts',
  category: '',
  rating: 'low',
  servingSize: '1/2 cob'
}, {
  name: 'courgette',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cucumber',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'eggplant / aubergine',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'fennel',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'green beans',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'green pepper / green bell pepper / green capsicum',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'ginger',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'kale',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'karela',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'leek leaves',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lentils – in small amounts',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'butter lettuce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'iceberg lettuce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'radicchio lettuce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'red coral lettuce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'rocket lettuce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'romaine/cos lettuce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'marrow',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'okra',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'olives',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'parsnip',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'peas, snow',
  category: '',
  rating: 'low',
  servingSize: '5 pods'
}, {
  name: 'pickled gherkins',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'pickled onions, large',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'potato',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'pumpkin',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'pumpkin, canned',
  category: '',
  rating: 'low',
  servingSize: '1/4 cup, 2.2 oz'
}, {
  name: 'radish',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'red peppers / red bell pepper / red capsicum',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'scallions / spring onions (green part)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'seaweed / nori',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'silverbeet / chard',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'spaghetti squash',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'spinach, baby',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'squash',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sun-dried tomatoes',
  category: '',
  rating: 'low',
  servingSize: '4 pieces'
}, {
  name: 'swede',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'swiss chard',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sweet potato',
  category: '',
  rating: 'low',
  servingSize: '1/2 cup'
}, {
  name: 'tomato – canned, cherry, common, roma',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'tomatillos – canned',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'turnip',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'water chestnuts',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'yam',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'zucchini ',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'ackee',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'bananas, unripe',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'bilberries',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'blueberries',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'breadfruit',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'carambola',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cantaloupe',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cranberry',
  category: '',
  rating: 'low',
  servingSize: '1 tbsp'
}, {
  name: 'clementine',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'dragon fruit',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lingonberries',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'grapes',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'guava, ripe',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'honeydew and galia melons',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'kiwifruit',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lemon including lemon juice',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lime including lime juice',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'mandarin',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'orange',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'passion fruit',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'paw paw',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'papaya',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'pineapple',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'plantain, peeled',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'prickly pear / nopales',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'raspberry',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'rhubarb',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'strawberry',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'tamarind',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'tangelo',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'beef',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'chicken',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'foie gras',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'kangaroo',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lamb',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'pork',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'prosciutto',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'quorn, mince',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'turkey',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cold cuts / deli meat / cold meats such as ham and turkey breast',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'processed meat – check ingredients',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'canned tuna',
  category: 'fish',
  rating: 'low',
  servingSize: null
}, {
  name: 'cod (fresh) ',
  category: 'fish',
  rating: 'low',
  servingSize: null
}, {
  name: 'haddock (fresh)',
  category: 'fish',
  rating: 'low',
  servingSize: null
}, {
  name: 'plaice (fresh)',
  category: 'fish',
  rating: 'low',
  servingSize: null
}, {
  name: 'salmon (fresh)',
  category: 'fish',
  rating: 'low',
  servingSize: null
}, {
  name: 'trout (fresh)',
  category: 'fish',
  rating: 'low',
  servingSize: null
}, {
  name: 'tuna (fresh)',
  category: 'fish',
  rating: 'low',
  servingSize: null
}, {
  name: 'crab (ensuring nothing else is added)',
  category: 'seafood',
  rating: 'low',
  servingSize: null
}, {
  name: 'lobster (ensuring nothing else is added)',
  category: 'seafood',
  rating: 'low',
  servingSize: null
}, {
  name: 'mussels (ensuring nothing else is added)',
  category: 'seafood',
  rating: 'low',
  servingSize: null
}, {
  name: 'oysters (ensuring nothing else is added)',
  category: 'seafood',
  rating: 'low',
  servingSize: null
}, {
  name: 'prawns (ensuring nothing else is added)',
  category: 'seafood',
  rating: 'low',
  servingSize: null
}, {
  name: 'shrimp (ensuring nothing else is added)',
  category: 'seafood',
  rating: 'low',
  servingSize: null
}, {
  name: 'wheat free breads',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'gluten free breads',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'corn bread',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'oat bread',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice bread',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'spelt sourdough bread',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'potato flour bread',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'wheat free or gluten free pasta',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'bread, wheat – 1 slice',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'almonds – max of 15',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'biscuit, savoury',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'biscuit, shortbread – 1 only',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'brazil nuts',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'bulgur / bourghal – 1/4 cup cooked, 44g serving',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'buckwheat',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'buckwheat flour',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'buckwheat noodles',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'brown rice / whole grain rice',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'chestnuts',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'chips, plain / potato crisps, plain',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'cornflour / maize',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'crispbread',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'corncakes',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'cornflakes – 1/2 cup',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'cornflakes, gluten free',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'coconut – milk, cream, flesh',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'corn, creamed and canned (up to 1/3 cup)',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'corn tortillas, 3 tortillas',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'crackers, plain',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'flax seeds / linseeds – up to 1 tbsp',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'hazelnuts – max of 15',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'macadamia nuts',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'millet',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'mixed nuts',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'oatmeal, 1/2 cup',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'oats',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'oatcakes',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'peanuts',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'pecans – max of 15',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'pine nuts – max of 15',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'polenta',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'popcorn',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'porridge and oat based cereals',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'potato flour',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'pretzels',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'quinoa',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'pasta, wheat – up to 1/2 cup cooked',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'basmati rice',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'brown rice',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice noodles',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'white rice',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice bran',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice cakes',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice crackers',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice flakes',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice flour',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'rice krispies',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'chia seeds',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'egusi seeds',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'hemp seeds',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'poppy seeds',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'pumpkin seeds',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'sesame seeds',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'sunflower seeds',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'starch, maize, potato and tapioca',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'sorghum',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'tortilla chips / corn chips',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'walnuts',
  category: '',
  rating: 'low',
  servingSize: ''
}, {
  name: 'aspartame',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'acesulfame k',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'almond butter',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'barbecue sauce – check label carefully',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'capers in vinegar',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'capers, salted',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'dark chocolate',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'milk chocolate – 3 squares',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'white chocolate – 3 squares',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'chutney, 1 tablespoon',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'dijon mustard',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'erythritol (e968 / 968)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'fish sauce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'golden syrup',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'glucose',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'glycerol (e422 / 422)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'jam / jelly, strawberry',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'ketchup (usa) – 1 sachet',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'maple syrup',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'marmalade',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'marmite',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'mayonnaise – ensuring no garlic or onion in ingredients',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'miso paste',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'mustard',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'oyster sauce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'pesto sauce – less than 1 tbsp',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'peanut butter',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'rice malt syrup',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'saccharine',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'shrimp paste',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'soy sauce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sriracha hot chilli sauce – 1 tsp',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'stevia',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sweet and sour sauce',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sucralose',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sugar – also called sucrose',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'tamarind paste',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'tomato sauce (outside usa) – 2 sachets, 13g',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'vegemite',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'apple cider vinegar, 2 tbsp',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'balsamic vinegar, 2 tbsp',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'rice wine vinegar',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'wasabi',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'worcestershire sauce – has onion and garlic but very very low amount making it low FODMAP  ',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'beer – limited to one drink',
  category: 'alcohol (is an irritant to the gut, limited intake advised)',
  rating: 'low',
  servingSize: null
}, {
  name: 'clear spirits such as vodka',
  category: 'alcohol (is an irritant to the gut, limited intake advised)',
  rating: 'low',
  servingSize: null
}, {
  name: 'gin',
  category: 'alcohol (is an irritant to the gut, limited intake advised)',
  rating: 'low',
  servingSize: null
}, {
  name: 'whiskey',
  category: 'alcohol (is an irritant to the gut, limited intake advised)',
  rating: 'low',
  servingSize: null
}, {
  name: 'wine – limited to one drink  ',
  category: 'alcohol (is an irritant to the gut, limited intake advised)',
  rating: 'low',
  servingSize: null
}, {
  name: 'espresso coffee, regular or decaffeinated, black',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'espresso coffee, regular or decaffeinated, with up to 250ml lactose free milk',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'instant coffee, regular or decaffeinated, black',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'instant coffee, regular or decaffeinated, with up to 250ml lactose free milk',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'drinking chocolate powder',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'fruit juice, 125ml and safe fruits only',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'kvass',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lemonade – in low quantities',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'egg protein (protein powders)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'pea protein – up to 20g (protein powders)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'rice protein (protein powders)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sacha inchi protein (protein powders)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'whey protein isolate (protein powders)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'soya milk made with soy protein',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sugar free fizzy drinks / soft drinks / soda – such as diet coke, in low quantities as aspartame and acesulfame k can be irritants',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sugar fizzy drinks / soft drinks / soda that do no contain hfcs such as lemonade, cola. limit intake due to these drinks being generally unhealthy and can cause gut irritation',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'black tea, weak e.g. pg tips',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'chai tea, weak',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'fruit and herbal tea, weak – ensure no apple added',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'green tea',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'peppermint tea',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'white tea',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'water',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'butter',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'brie cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'camembert cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cheddar cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cottage cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'feta cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'goat cheese / chevre cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'monterey jack cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'mozzarella cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'parmesan cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'ricotta cheese – 2 tablespoons',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'swiss cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'dairy free chocolate pudding',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'eggs',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'margarine',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'almond milk',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'hemp milk',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lactose free milk',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'macadamia milk',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'oat milk – 30 ml, enough for cereal',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'rice milk – up to 200ml per sitting',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'sorbet',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'soy protein (avoid soya beans)',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'swiss cheese',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'tempeh',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'tofu – drained and firm varieties',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'whipped cream',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'coconut yoghurt',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'greek yoghurt, in small amounts',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lactose free yoghurt',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'goats yoghurt',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'basil',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'bay leaves',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'cilantro',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'coriander',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'curry leaves',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'fenugreek',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'gotukala',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'lemongrass',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'mint',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'oregano',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'pandan',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'parsley',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'rampa',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'rosemary',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'sage',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'tarragon',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'thyme',
  category: 'herbs',
  rating: 'low',
  servingSize: null
}, {
  name: 'all spice',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'black pepper',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'cardamon',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'chilli powder (check ingredients sometimes has garlic added)',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'cinnamon',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'cloves',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'cumin',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'curry powder',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'fennel seeds',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'five spice',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'goraka',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'mustard seeds',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'nutmeg',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'paprika',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'saffron',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'star anise',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'turmeric',
  category: 'spices',
  rating: 'low',
  servingSize: null
}, {
  name: 'avocado oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'canola oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'coconut oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'olive oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'peanut oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'rice bran oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'sesame oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'soybean oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'sunflower oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'vegetable oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'garlic infused oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'onion infused oil',
  category: 'oils',
  rating: 'low',
  servingSize: null
}, {
  name: 'acai powder',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'asafoetida powder – great onion substitute',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'baking powder',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'baking soda',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cacao powder',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cocoa powder',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'cream',
  category: '',
  rating: 'low',
  servingSize: '2 tablespoons'
}, {
  name: 'gelatine',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'ghee',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'icing sugar',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'lard',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'nutritional yeast',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'salt',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'soybean oil',
  category: '',
  rating: 'low',
  servingSize: null
}, {
  name: 'garlic',
  description: 'avoid entirely if possible includes garlic salt, garlic powder',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'onions',
  description: 'avoid entirely if possible; includes onion powder, small pickled onions; try hing / asafoetida powder or garlic oil to substitute',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'artichoke',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'asparagus',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'baked beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'beetroot, fresh',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'black eyed peas',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'broad beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'butter beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cassava',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cauliflower',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'celery – greater than 5cm of stalk',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'choko',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'falafel',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'fermented cabbage e.g. sauerkraut',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'haricot beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'kidney beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'lima beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'leek bulb',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'mange tout',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'mixed vegetables',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'mung beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'mushrooms',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'peas, sugar snap',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pickled vegetables',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'red kidney beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'savoy cabbage',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'soy beans / soya beans',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'split peas',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'scallions / spring onions (bulb / white part)',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'shallots',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'taro',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'apples including pink lady and granny smith',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'apricots',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'avocado',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'bananas, ripe',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'blackberries',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'blackcurrants',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'boysenberry',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cherries',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'currants',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'custard apple',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'dates',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'feijoa',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'figs',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'goji berries',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'grapefruit',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'guava, unripe',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'lychee',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'mango',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'nectarines',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'paw paw, dried',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'peaches',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pears',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'persimmon',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pineapple, dried',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'plums',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pomegranate',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'prunes',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'raisins',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'sea buckthorns',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'sultanas',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'tamarillo',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'tinned fruit in apple / pear juice',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'watermelon',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'chorizo',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'sausages',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'biscuits / cookies including chocolate chip cookies',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'bread, wheat – over 1 slice',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'breadcrumbs',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cakes',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cereal bar, wheat based',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'croissants',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'crumpets',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'egg noodles',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'muffins',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pastries',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pasta, wheat over 1/2 cup cooked',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'udon noodles',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'wheat bran',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'wheat cereals',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'wheat flour',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'wheat germ',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'wheat noodles',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'wheat rolls',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'almond meal',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'amaranth flour',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'barley including flour',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'bran cereals',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'granary bread',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'multigrain bread',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'naan',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'oatmeal bread',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pumpernickel bread',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'roti',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'sourdough with kamut',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cashews',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'chestnut flour',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cous cous',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'einkorn flour',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'freekeh',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'gnocchi',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'granola bar',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'muesli cereal',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'muesli bar',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pistachios',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'rye',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'rye crispbread',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'semolina',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'spelt flour',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'agave',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'caviar dip',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'fructose',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'fruit bar',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'gravy, if it contains onion',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'high fructose corn syrup (hfcs)',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'hummus / houmous',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'honey',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'jam, mixed berries',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'jam, strawberry, if contains hfcs',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'molasses',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'pesto sauce',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'quince paste',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'relish / vegetable pickle',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'stock cubes',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'sugar free sweets containing polyols – usually ending in -ol or isomalt',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'inulin',
  category: 'sweeteners',
  rating: 'high',
  servingSize: null
}, {
  name: 'isomalt (e953 / 953)',
  category: 'sweeteners',
  rating: 'high',
  servingSize: null
}, {
  name: 'lactitol (e966 / 966)',
  category: 'sweeteners',
  rating: 'high',
  servingSize: null
}, {
  name: 'maltitol (e965 / 965)',
  category: 'sweeteners',
  rating: 'high',
  servingSize: null
}, {
  name: 'mannitol (e241 / 421)',
  category: 'sweeteners',
  rating: 'high',
  servingSize: null
}, {
  name: 'sorbitol (e420 / 420)',
  category: 'sweeteners',
  rating: 'high',
  servingSize: null
}, {
  name: 'xylitol (e967 / 967)',
  category: 'sweeteners',
  rating: 'high',
  servingSize: null
}, {
  name: 'tahini paste',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'tzatziki dip',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'fos – fructooligosaccharides',
  description: 'may be hiding in yoghurts, snack bars etc.',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'inulin',
  description: 'may be hiding in yoghurts, snack bars etc.',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'oligofructose',
  description: 'may be hiding in yoghurts, snack bars etc.',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'beer – if drinking more than one bottle',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'coconut water',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'cordial, apple and raspberry with 50-100% real juice',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'cordial, orange with 25-50% real juice',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'fruit and herbal teas with apple added',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'fruit juices in large quantities',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'fruit juices made of apple, pear, mango',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'kombucha',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'malted chocolate flavored drink',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'meal replacement drinks containing milk based products e.g. Ensure, Slim Fast',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'orange juice in quantities over 100ml',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'quinoa milk',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'rum',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'sodas containing high fructose corn syrup (hfcs)',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'soy milk made with soy beans – commonly found in usa',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'sports drinks',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'black tea with added soy milk',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'chai tea, strong',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'dandelion tea, strong',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'fennel tea',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'chamomile tea',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'herbal tea, strong',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'oolong tea',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'wine – if drinking more than one glass',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'whey protein, concentrate unless lactose free',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'whey protein, hydrolyzed unless lactose free',
  category: '',
  rating: 'high',
  servingSize: ''
}, {
  name: 'buttermilk',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cheese, cream',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cheese, halmoumi',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cheese, ricotta',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cream',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'custard',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'gelato',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'ice cream',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'kefir',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'cow milk',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'goat milk',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'evaporated milk',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'sheep’s milk',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'sour cream',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'yoghurt',
  category: '',
  rating: 'high',
  servingSize: null
}, {
  name: 'carob powder',
  category: '',
  rating: 'high',
  servingSize: null
}]; // Export foods list in alphabetical order.
// @TODO: Potentially use getInitialProps that runs for App on the server first?

/* harmony default export */ __webpack_exports__["default"] = (foods.sort(function (item1, item2) {
  return item1.name < item2.name ? -1 : item1.name > item2.name ? 1 : 0;
}));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
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
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
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

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.10' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdlorenzo%2FCode%2Ffodmap%2Fpages%2Findex.js!./":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdlorenzo%2FCode%2Ffodmap%2Fpages%2Findex.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ea92a4d9664833a26066 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ea92a4d9664833a26066 */ "dll-reference dll_ea92a4d9664833a26066"))("./node_modules/react/index.js");

/***/ }),

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
/* harmony import */ var _components_DownArrowIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/DownArrowIcon */ "./components/DownArrowIcon.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _styles_tailwind_min_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/tailwind.min.css */ "./styles/tailwind.min.css");
/* harmony import */ var _styles_tailwind_min_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_min_css__WEBPACK_IMPORTED_MODULE_13__);







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
          lineNumber: 45
        },
        __self: this
      }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx("main", {
        role: "main",
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("form", {
        className: "sticky top-0 bg-gray-700 rounded-br-full shadow-md",
        onSubmit: this.handleOnSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "pb-8 pl-3 md:pl-6 pr-16 pt-12 lg:max-w-3xl lg:mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
          lineNumber: 55
        },
        __self: this
      }))), __jsx("div", {
        className: "lg:max-w-3xl lg:mx-auto px-3 md:px-6 py-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.state.foodList ? __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, this.state.foodList.map(function (food, index) {
        return __jsx("li", {
          key: index,
          className: "flex bg-white mb-4 rounded-full overflow-hidden",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("p", {
          className: "py-3 px-6 w-4/6 text-gray-800",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, food.name, food.servingSize ? __jsx("span", {
          className: "ml-3 text-gray-600",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "(", food.servingSize, ")") : null), __jsx("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('inline-block flex justify-end pr-6 w-2/6 items-center', {
            'text-blue-400': food.rating === 'low',
            'text-orange-400': food.rating === 'high'
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, food.rating === 'low' ? __jsx(_components_DownArrowIcon__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: "h-6 w-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }) : __jsx(_components_UpArrowIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "h-6 w-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }), __jsx("span", {
          className: "ml-2 font-bold w-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, food.rating.toUpperCase())));
      })) : null)));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App); // className={classnames(
//   'inline-block flex w-1/4 text-center',
//   food.rating === 'low' ? 'bg-green-400' : 'bg-red-400',
// )}

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fdlorenzo%2FCode%2Ffodmap%2Fpages%2Findex.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fdlorenzo%2FCode%2Ffodmap%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fdlorenzo%2FCode%2Ffodmap%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_ea92a4d9664833a26066":
/*!*******************************************!*\
  !*** external "dll_ea92a4d9664833a26066" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ea92a4d9664833a26066;

/***/ })

},[[0,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=index.js.map