"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcss_corp"] = self["webpackChunkcss_corp"] || []).push([["src_Pages_Register_index_js"],{

/***/ "./src/Pages/Register/index.js":
/*!*************************************!*\
  !*** ./src/Pages/Register/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable jsx-a11y/label-has-associated-control */\n\n\n\n\nvar Register = function Register() {\n  var onSubmitRegister = function onSubmitRegister(values) {\n    console.log(values);\n  };\n\n  var validateRegister = function validateRegister(values) {\n    var errors = {};\n\n    if (!values.email) {\n      errors.email = 'Email Required...';\n    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(values.email)) {\n      errors.email = 'Invalid email address';\n    }\n\n    if (!values.password) {\n      errors.password = 'Password Required...';\n    }\n\n    if (!values.name) {\n      errors.name = 'Name Required...';\n    }\n\n    if (!values.age) {\n      errors.age = 'Age Required...';\n    }\n\n    return errors;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n    initialValues: {\n      email: '',\n      password: '',\n      name: '',\n      gender: '',\n      age: ''\n    },\n    onSubmit: onSubmitRegister,\n    validate: validateRegister\n  }, function (_ref) {\n    var values = _ref.values,\n        handleChange = _ref.handleChange,\n        errors = _ref.errors,\n        handleBlur = _ref.handleBlur,\n        touched = _ref.touched;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n      className: \"mt-8 space-y-6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"hidden\",\n      name: \"remember\",\n      defaultValue: \"true\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"rounded-md shadow-sm -space-y-px\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"firstname\",\n      className: \"sr-only\"\n    }, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      id: \"firstname\",\n      name: \"name\",\n      type: \"text\",\n      value: values.name,\n      onChange: handleChange,\n      onBlur: handleBlur,\n      autoComplete: \"firstname\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('appearance-none rounded-none relative block w-full mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm', {\n        'border-red-300': touched.name && !!errors.name,\n        'focus:border-red-500': touched.name && !!errors.name\n      }),\n      placeholder: \"Enter Your First Name\"\n    }), touched.name && !!errors.name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, errors.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex px-2 py-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      className: \"pr-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"radio\",\n      name: \"gender\",\n      value: \"male\",\n      checked: true\n    }), \"Male\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      className: \"pr-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"radio\",\n      name: \"gender\",\n      value: \"female\",\n      className: \"pr-2\"\n    }), \"Female\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"age\",\n      className: \"sr-only\"\n    }, \"Age\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      id: \"age\",\n      name: \"age\",\n      type: \"number\",\n      value: values.age,\n      onChange: handleChange,\n      onBlur: handleBlur,\n      autoComplete: \"Age\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('appearance-none rounded-none relative block w-full mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm', {\n        'border-red-300': touched.age && !!errors.age,\n        'focus:border-red-500': touched.age && !!errors.age\n      }),\n      placeholder: \"Enter Your Age\"\n    }), touched.age && !!errors.age && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, errors.age)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"email-address\",\n      className: \"sr-only\"\n    }, \"Email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      id: \"email-address\",\n      name: \"email\",\n      type: \"email\",\n      value: values.email,\n      onChange: handleChange,\n      onBlur: handleBlur,\n      autoComplete: \"email\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('appearance-none rounded-none relative block w-full  mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm', {\n        'border-red-300': touched.email && !!errors.email,\n        'focus:border-red-500': touched.email && !!errors.email\n      }),\n      placeholder: \"Email address\"\n    }), touched.email && !!errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, errors.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n      htmlFor: \"password\",\n      className: \"sr-only\"\n    }, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      id: \"password\",\n      name: \"password\",\n      type: \"password\",\n      value: values.password,\n      onChange: handleChange,\n      onBlur: handleBlur,\n      autoComplete: \"current-password\",\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('appearance-none rounded-none relative block w-full  mt-4 mb-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm', {\n        'border-red-300': touched.password && !!errors.password,\n        'focus:border-red-500': touched.password && !!errors.password\n      }),\n      placeholder: \"Password\"\n    }), touched.password && !!errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, errors.password))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n      type: \"submit\",\n      className: \"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"absolute left-0 inset-y-0 flex items-center pl-3\"\n    }), \"Sign in\")));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n\n//# sourceURL=webpack://css-corp/./src/Pages/Register/index.js?");

/***/ })

}]);