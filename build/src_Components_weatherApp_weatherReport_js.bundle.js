"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp"] = self["webpackChunkcss_corp"] || []).push([["src_Components_weatherApp_weatherReport_js"],{

/***/ "./src/Components/weatherApp/weatherReport.js":
/*!****************************************************!*\
  !*** ./src/Components/weatherApp/weatherReport.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/weather */ \"./src/Components/weatherApp/context/weather.js\");\n\n\n\n\nvar WeatherReport = function WeatherReport() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_weather__WEBPACK_IMPORTED_MODULE_1__.WeatherUser, null, function (_ref) {\n    var _loadDataStatus$error;\n\n    var report = _ref.report,\n        loadDataStatus = _ref.loadDataStatus,\n        loadReportData = _ref.loadReportData,\n        changeUnitStatus = _ref.changeUnitStatus;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"border rounded-xl\"\n    }, loadDataStatus !== null && loadDataStatus !== void 0 && loadDataStatus.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"w-100\"\n    }, !(loadDataStatus !== null && loadDataStatus !== void 0 && loadDataStatus.error) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"loading\"\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"flex h-[40vh] justify-center items-center\"\n    }, (_loadDataStatus$error = loadDataStatus.error) === null || _loadDataStatus$error === void 0 ? void 0 : _loadDataStatus$error.message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"button\",\n      className: \"mx-3\",\n      onClick: function onClick() {\n        loadReportData();\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"h-6 w-6\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"\n    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, report !== null && report !== void 0 && report.name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mt-3 mb-2 p-5 flex flex-row flex-wrap justify-items-center\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"w-5/6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n      className: \"text-3xl\"\n    }, report.name), (report === null || report === void 0 ? void 0 : report.description) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"uppercase font-xs text-gray-400 py-1\"\n    }, report.description)), (report === null || report === void 0 ? void 0 : report.icon) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      src: \"http://openweathermap.org/img/wn/\".concat(report.icon, \"@2x.png\"),\n      className: \"w-1/6 h-1/6 bg-[#eca88e] rounded-full\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"relative\"\n    }, (changeUnitStatus === null || changeUnitStatus === void 0 ? void 0 : changeUnitStatus.status) === 'REQUEST' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"w-full absolute top-2 bottom-0 opacity-70 z-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"loading\"\n    })) : (changeUnitStatus === null || changeUnitStatus === void 0 ? void 0 : changeUnitStatus.status) === 'FAIL' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"w-full bg-gray-200 absolute top-0 bottom-0 opacity-70 z-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"absolute top-28 w-full text-center flex flex-row justify-center items-center\"\n    }, changeUnitStatus.error.message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"button\",\n      className: \"mx-3\",\n      onClick: function onClick() {\n        loadReportData(report.name, document.getElementById('unit-filter').value);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", {\n      xmlns: \"http://www.w3.org/2000/svg\",\n      className: \"h-6 w-6\",\n      fill: \"none\",\n      viewBox: \"0 0 24 24\",\n      stroke: \"currentColor\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n      strokeLinecap: \"round\",\n      strokeLinejoin: \"round\",\n      strokeWidth: 2,\n      d: \"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\"\n    }))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"m-0 flex flex-row px-5 flex-wrap justify-items-center text-white text-center font-medium uppercase\"\n    }, (report === null || report === void 0 ? void 0 : report.temp) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"colum-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"colum-p\"\n    }, \"Current Temparature\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"number-bold\"\n    }, report.temp, report.unit))), (report === null || report === void 0 ? void 0 : report.temp_max) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"colum-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"colum-p\"\n    }, \"Maximum Temparature\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"number-bold\"\n    }, report.temp_max, report.unit))), (report === null || report === void 0 ? void 0 : report.temp_min) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"colum-3\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"colum-p\"\n    }, \"Minimum Temparature\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"number-bold\"\n    }, report.temp_min, report.unit))), (report === null || report === void 0 ? void 0 : report.wind_speed) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"colum-2-top\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"colum-p\"\n    }, \"Wind Speed\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"number-bold-padding\"\n    }, report.wind_speed, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", {\n      className: \"colum-2-unit\"\n    }, \"meter/sec\")))), (report === null || report === void 0 ? void 0 : report.wind_direction) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"colum-2-top\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"colum-p\"\n    }, \"Wind direction\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"number-bold-padding\"\n    }, report.wind_direction, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", {\n      className: \"colum-2-unit\"\n    }, \"Degrees\")))), (report === null || report === void 0 ? void 0 : report.pressure) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"colum-2-bottom\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"colum-p\"\n    }, \"Pressure\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"number-bold-padding\"\n    }, report.pressure, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", {\n      className: \"colum-2-unit\"\n    }, \" hPa\")))), (report === null || report === void 0 ? void 0 : report.humidity) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"colum-2-bottom\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"colum-p\"\n    }, \"Humidity\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"number-bold-padding\"\n    }, report.humidity, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", {\n      className: \"colum-2-unit\"\n    }, \"%\"))))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n      className: \"flex h-[40vh] justify-center items-center\"\n    }, \"Sorry..!! Details not found\")));\n  });\n};\n\nWeatherReport.PropTypes = {\n  report: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n    description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n    icon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n    temp: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),\n    temp_max: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),\n    temp_min: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),\n    wind_speed: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),\n    wind_direction: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),\n    humidity: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),\n    pressure: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired),\n    unit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)\n  }),\n  loadDataStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    payload: prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf(Error),\n    status: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['REQUEST', 'FAIL'])\n  }),\n  loadReportData: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  changeUnitStatus: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({\n    type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n    payload: prop_types__WEBPACK_IMPORTED_MODULE_2___default().objectOf(Error),\n    status: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['REQUEST', 'FAIL'])\n  })\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(WeatherReport));\n\n//# sourceURL=webpack://css-corp/./src/Components/weatherApp/weatherReport.js?");

/***/ })

}]);