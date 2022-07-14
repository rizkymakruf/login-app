"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboardSKI/report",{

/***/ "./components/form/FormReport.js":
/*!***************************************!*\
  !*** ./components/form/FormReport.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar FormReport = function(setDataReport) {\n    var _this1 = _this;\n    var data = [\n        {\n            key: \"brand\",\n            name: \"Report by brand\"\n        },\n        {\n            key: \"category\",\n            name: \"Report by category\"\n        },\n        {\n            key: \"product\",\n            name: \"Report by product\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: function(e) {\n                    e.preventDefault();\n                    console.log(e.currentTarget.report.value);\n                },\n                method: \"POST\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full grid grid-cols-1 gap-4 select-none p-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Report Filter\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        name: \"report\",\n                                        id: \"report\",\n                                        className: \"w-full rounded-md border-2 border-orange-500/50\",\n                                        children: data.map(function(dat) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: dat.key,\n                                                children: dat.name\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 21\n                                            }, _this1);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Date From\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        name: \"start\",\n                                        id: \"start\",\n                                        type: \"date\",\n                                        className: \"w-full rounded-md border-2 border-orange-500/50 bg-orange-300\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Date To\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        name: \"end\",\n                                        id: \"end\",\n                                        type: \"date\",\n                                        className: \"w-full rounded-md border-2 border-orange-500/50 bg-orange-300\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-auto relative py-6 flex justify-end gap-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-auto flex justify-end gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"px-6 h-8 bg-green-500/30 text-green-500 border-2 shadow-md hover:bg-green-500/50 border-green-300 font-semibold rounded overflow-hidden\",\n                                            children: \"View Report\"\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"\".concat(!isFetch && \"invisible\", \" flex absolute h-4 w-4 top-3 right-4 -mt-1 -mr-1\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-50 opacity-75\"\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"relative inline-flex rounded-full h-4 w-4 bg-red-300\"\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = FormReport;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormReport));\nvar _c, _c1;\n$RefreshReg$(_c, \"FormReport\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3lDQUNIOzs7OztxQ0FDRjs7Ozs7OzZCQUNGOzs7Ozt5QkFDRjs7Ozs7cUJBQ0Q7Ozs7O2lCQUNIO3FCQUNMLENBQ0g7Q0FDSDtBQW5GS04sS0FBQUEsVUFBVTtBQXFGaEIsNEVBQWVELE1BQUFBLDJDQUFJLENBQUNDLFVBQVUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9ybS9Gb3JtUmVwb3J0LmpzP2Y5NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBGb3JtUmVwb3J0ID0gKHNldERhdGFSZXBvcnQpID0+IHtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBrZXk6IFwiYnJhbmRcIixcclxuICAgICAgbmFtZTogXCJSZXBvcnQgYnkgYnJhbmRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJjYXRlZ29yeVwiLFxyXG4gICAgICBuYW1lOiBcIlJlcG9ydCBieSBjYXRlZ29yeVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiBcInByb2R1Y3RcIixcclxuICAgICAgbmFtZTogXCJSZXBvcnQgYnkgcHJvZHVjdFwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCI+XHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5yZXBvcnQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBncmlkIGdyaWQtY29scy0xIGdhcC00IHNlbGVjdC1ub25lIHAtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+UmVwb3J0IEZpbHRlcjwvcD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicmVwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLW9yYW5nZS01MDAvNTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGRhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2RhdC5rZXl9PntkYXQubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+RGF0ZSBGcm9tPC9wPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcImRhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLW9yYW5nZS01MDAvNTAgYmctb3JhbmdlLTMwMFwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+RGF0ZSBUbzwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPXtcImRhdGVcIn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTIgYm9yZGVyLW9yYW5nZS01MDAvNTAgYmctb3JhbmdlLTMwMFwiXHJcbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJlbGF0aXZlIHB5LTYgZmxleCBqdXN0aWZ5LWVuZCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGZsZXgganVzdGlmeS1lbmQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1wic3VibWl0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBoLTggYmctZ3JlZW4tNTAwLzMwIHRleHQtZ3JlZW4tNTAwIGJvcmRlci0yIHNoYWRvdy1tZCBob3ZlcjpiZy1ncmVlbi01MDAvNTAgYm9yZGVyLWdyZWVuLTMwMCBmb250LXNlbWlib2xkIHJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFZpZXcgUmVwb3J0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAhaXNGZXRjaCAmJiBcImludmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSBmbGV4IGFic29sdXRlIGgtNCB3LTQgdG9wLTMgcmlnaHQtNCAtbXQtMSAtbXItMWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbmltYXRlLXBpbmcgYWJzb2x1dGUgaW5saW5lLWZsZXggaC1mdWxsIHctZnVsbCByb3VuZGVkLWZ1bGwgYmctcmVkLTUwIG9wYWNpdHktNzVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWZsZXggcm91bmRlZC1mdWxsIGgtNCB3LTQgYmctcmVkLTMwMFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEZvcm1SZXBvcnQpO1xyXG4iXSwibmFtZXMiOlsibWVtbyIsIkZvcm1SZXBvcnQiLCJzZXREYXRhUmVwb3J0IiwiZGF0YSIsImtleSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsInJlcG9ydCIsInZhbHVlIiwibWV0aG9kIiwicCIsInNlbGVjdCIsImlkIiwibWFwIiwiZGF0Iiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwic3BhbiIsImlzRmV0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/form/FormReport.js\n");

/***/ })

});