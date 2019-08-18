module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home/Nav.scss":
/*!**********************************!*\
  !*** ./components/Home/Nav.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_1p3vwouLp1xs3Byzt3IX_8",
	"divider": "_3Fw1I9jN117t7mFnpNu87d",
	"aboutMe": "_3k_Boq6Tjg1AOn_djQPuGp",
	"title": "qcHE60G1_RAUleOoy3p-h",
	"logo": "a7ofR0BpRq-x4GR1pDSah",
	"description": "_sNews_qryKrhVetjyIke",
	"sitemap": "_3m1Z1lrcXpH3S2vZt6J6mp",
	"category": "_18Zq0TjpxSagHViSM_yxYP"
};

/***/ }),

/***/ "./components/Home/Nav.tsx":
/*!*********************************!*\
  !*** ./components/Home/Nav.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.scss */ "./components/Home/Nav.scss");
/* harmony import */ var _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/yangmungyu/Desktop/workspace/blog-practice/blog-practice/client/components/Home/Nav.tsx";



const Nav = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.aboutMe,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Munkyu Yang"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Hi, my name is Munkyu Yang and I'm a junior web front-end developer. Welcome to my personal blog!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sitemap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _Nav_scss__WEBPACK_IMPORTED_MODULE_1___default.a.category,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "\uCE74\uD14C\uACE0\uB9AC 1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "\uCE74\uD14C\uACE0\uB9AC 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "\uCE74\uD14C\uACE0\uB9AC 3"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "\uCE74\uD14C\uACE0\uB9AC 4"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_2py_lfs-KGSbXjwxNynxgP",
	"main": "_3t0fb-2tT_CpouPEUSldxP"
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Home_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/Nav */ "./components/Home/Nav.tsx");
var _jsxFileName = "/Users/yangmungyu/Desktop/workspace/blog-practice/blog-practice/client/pages/index.tsx";





const App = ({
  data
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, data.lists.map((item, i) => {
    console.dir(item);
    const {
      no,
      title
    } = item;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "no - ", no, ", title - ", title);
  })));
};

App.getInitialProps = async ({
  req
}) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:5000/lists");
  return {
    data: response.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yangmungyu/Desktop/workspace/blog-practice/blog-practice/client/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map