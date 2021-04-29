/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://THP_NODE/./src/sass/style.scss?");

/***/ }),

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nconst Home = (argument) => {\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    let articles = \"<h1>New and Trending</h1><p>Based on player counts and release date</p>\";\n\n    const fetchList = (url, argument) => {\n      let finalURL = url;\n      if (argument) {\n        finalURL = `https://api.rawg.io/api/games?page_size=9&search=${argument}&key=4213f27351ba43b8a9f008de6de62a91`;\n        console.log(finalURL);\n      }\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          response.results.forEach((article) => {\n            articles += `\n                  <div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"${article.background_image}\" class=\"card-img-top\" alt=\".poster..\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">${article.name} </h5>\n                      <p class=\"card-text\">Release date : ${article.released}</p>\n                      <p class=\"card-text\">Platforms : ${article.platforms.map(a => \" \" + a.platform.name)}</p>\n                      <a href=\"#pagedetail/${article.id}\" class=\"btn btn-dark\">More</a>\n                    </div>\n                  </div>\n                `;\n          });\n          document.querySelector(\".page-list .articles\").innerHTML = articles;\n        });\n    };\n\n    const more = () => {\n      let nbr = 9;\n      document.getElementById(\"moreBtn\").addEventListener(\"click\", function(){\n        if (nbr < 27 && nbr >= 9){\n          nbr += 9;\n          console.log(nbr);\n          return(nbr);\n        }\n      })\n      fetchList(`https://api.rawg.io/api/games?dates=2021-01-01,2023-12-31&page_size=${nbr}&&ordering=-added&key=4213f27351ba43b8a9f008de6de62a91`, cleanedArgument);\n      console.log(nbr);\n    };\n\n    more();\n\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-list\">\n        <div class=\"articles\">...loading</div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n\n  const searchGame = () => {\n    document.getElementById(\"validate\").addEventListener(\"click\", function(e){\n      e.preventDefault();\n      let arg = searchBar.value;\n      console.log(arg);\n      pageContent.innerHTML = `\n      <h1> Votre recherche : </h1>\n      `;\n      Home(arg);\n    })};\n    searchGame();\n\n};\n\n\n\n\n//# sourceURL=webpack://THP_NODE/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\nconst PageDetail = (argument) => {\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    const fetchGame = (url, argument) => {\n      let finalURL = url ;\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          let { name, background_image, released, description, developers, tags, genres, publishers, platforms, website, rating, metacritic, stores/*, video, 4screens, sameSame, youTube */} = response;\n\n          let articleDOM = document.querySelector(\".page-detail .article\");\n\n          articleDOM.querySelector(\"h1.title\").innerHTML = name;\n          articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n          articleDOM.querySelector(\"p.background_image\").innerHTML = `<img src=\"${background_image}\" alt=\"poster\" style=\"width: 25rem;\">`;\n          articleDOM.querySelector(\"p.description\").innerHTML = description;\n          articleDOM.querySelector(\"p.developers\").innerHTML = `Developers : ${developers.map(a => \" \" + a.name)}`;\n          articleDOM.querySelector(\"p.tags\").innerHTML = ` Tags : ${tags.map(a => \" \" + a.name)}`;\n          articleDOM.querySelector(\"p.genres\").innerHTML = ` Genres : ${genres.map(a => \" \" + a.name)}`;\n          articleDOM.querySelector(\"p.publishers\").innerHTML = ` Publishers : ${publishers.map(a => \" \" + a.name)}`;\n          articleDOM.querySelector(\"p.platforms\").innerHTML = ` Platforms : ${platforms.map(a => \" \" + a.platform.name)}`;\n          articleDOM.querySelector(\"p.web\").innerHTML = ` Link to ${name}'s website : <a href=\"${website}\">here</a>`;\n          articleDOM.querySelector(\"p.rating\").innerHTML = `Ratings : ${rating}`;\n          articleDOM.querySelector(\"p.metacritic\").innerHTML = `Metacritics : ${metacritic}`;\n          articleDOM.querySelector(\"p.stores\").innerHTML = ` Link(s) to buy ${name} : ${stores.map(a => \" \" + a.store.name + \"<a href= http://\" + a.store.domain + \"> here</a>\" )}`;\n\n        });\n    };\n    \n    fetchGame(`https://api.rawg.io/api/games/${cleanedArgument}?key=4213f27351ba43b8a9f008de6de62a91`, cleanedArgument);\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-detail\">\n        <div class=\"article\">\n        <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <h1 class=\"title\"></h1>\n          <p class=\"background_image\"></p>\n          <p class=\"release-date  text-muted\">Release date : <span></span></p>\n          <p class=\"description\"></p>\n          <p class=\"developers  text-muted\"></p>\n          <p class=\"tags\"></p>\n          <p class=\"genres  text-muted\"></p>\n          <p class=\"publishers\"></p>\n          <p class=\"platforms  text-muted\"></p>\n          <p class=\"web\"></p>\n          <p class=\"rating  text-muted\"></p>\n          <p class=\"metacritic\"></p>\n          <p class=\"stores  text-muted\"></p>\n          </div>\n          </div>\n\n    </div>\n    </section>\n      `\n    ;\n\n    preparePage();\n  };\n\n  render();\n\n  const searchGame = () => {\n    document.getElementById(\"validate\").addEventListener(\"click\", function(e){\n    e.preventDefault();\n    let arg = searchBar.value;\n    console.log(arg);\n    pageContent.innerHTML = `\n    <p> Loading... </P>\n    `;\n    PageDetail(arg);\n  })};\n  searchGame();\n};\n\n\n\n//# sourceURL=webpack://THP_NODE/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nconst PageList = (argument) => {\n  const preparePage = () => {\n    let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    let articles = \"<h1>Popular</h1><p>Based on player votes and ratings</p>\";\n\n    const fetchList = (url, argument) => {\n      let finalURL = url;\n      if (argument) {\n        finalURL = `https://api.rawg.io/api/games?page_size=9&search=${argument}&key=4213f27351ba43b8a9f008de6de62a91`;\n        console.log(finalURL);\n      }\n\n      fetch(`${finalURL}`)\n        .then((response) => response.json())\n        .then((response) => {\n          response.results.forEach((article) => {\n            articles += `\n                  <div class=\"card\" style=\"width: 18rem;\">\n                    <img src=\"${article.background_image}\" class=\"card-img-top\" alt=\".poster..\">\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">${article.name} </h5>\n                      <p class=\"card-text\">Release date : ${article.released}</p>\n                      <p class=\"card-text\">Platforms : ${article.platforms.map(a => \" \" + a.platform.name)}</p>\n                      <a href=\"#pagedetail/${article.id}\" class=\"btn btn-dark\">More</a>\n                    </div>\n                  </div>\n                `;\n          });\n          document.querySelector(\".page-list .articles\").innerHTML = articles;\n        });\n    };\n    \n    let nbr = 9;\n    if (nbr === 9){\n      fetchList(`https://api.rawg.io/api/games?page_size=${nbr}&key=4213f27351ba43b8a9f008de6de62a91`, cleanedArgument);\n    };\n    \n    document.getElementById(\"moreBtn\").addEventListener(\"click\", function(){\n      if (nbr < 27 && nbr > 9){\n        nbr += 9;\n        console.log(nbr);\n        fetchList(`https://api.rawg.io/api/games?page_size=${nbr}&key=4213f27351ba43b8a9f008de6de62a91`, cleanedArgument);\n      }\n    });\n  };\n\n  const render = () => {\n    pageContent.innerHTML = `\n      <section class=\"page-list\">\n        <div class=\"articles\">...loading</div>\n      </section>\n    `;\n\n    preparePage();\n  };\n\n  render();\n\n  const searchGame = () => {\n    document.getElementById(\"validate\").addEventListener(\"click\", function(e){\n      e.preventDefault();\n      let arg = searchBar.value;\n      console.log(arg);\n      pageContent.innerHTML = `\n      <h1> Votre recherche : </h1>\n      `;\n      PageList(arg);\n    })};\n    searchGame();\n\n};\n\n\n\n\n\n\n\n//# sourceURL=webpack://THP_NODE/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.js */ \"./src/js/routes.js\");\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n\n\n\n\n\n\nlet pageArgument;\n\nconst setRoute = () => {\n  let path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes_js__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", () => setRoute());\nwindow.addEventListener(\"DOMContentLoaded\", () => setRoute());\n\n\ndocument.getElementById(\"back\").addEventListener(\"click\", function(){\n  window.history.back();\n});\n\n//# sourceURL=webpack://THP_NODE/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n\n\n\n\nconst routes = {\n  \"\": _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\n  \"pagelist\": _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"pagedetail\": _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail,\n};\n\n\n\n\n//# sourceURL=webpack://THP_NODE/./src/js/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;