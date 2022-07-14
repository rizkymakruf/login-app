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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar FormReport = function(param) {\n    var setDataReport = param.setDataReport;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_2__.GlobalContext), globalAct = ref.globalAct, globalCtx = ref.globalCtx;\n    var data = [\n        {\n            key: \"brand\",\n            name: \"Report by brand\"\n        },\n        {\n            key: \"category\",\n            name: \"Report by category\"\n        },\n        {\n            key: \"product\",\n            name: \"Report by product\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: function(e) {\n                    e.preventDefault();\n                    console.log(e.currentTarget.report.value);\n                },\n                method: \"POST\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full grid grid-cols-1 gap-4 select-none p-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full space-y-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Report Filter\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        name: \"report\",\n                                        id: \"report\",\n                                        className: \"w-full rounded-md border-2 border-orange-500/50\",\n                                        children: data.map(function(dat) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: dat.key,\n                                                children: dat.name\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 21\n                                            }, _this1);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 34,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Date From\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        name: \"start\",\n                                        id: \"start\",\n                                        type: \"date\",\n                                        className: \"w-full rounded-md border-2 border-orange-500/50 bg-orange-300\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Date To\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        name: \"end\",\n                                        id: \"end\",\n                                        type: \"date\",\n                                        className: \"w-full rounded-md border-2 border-orange-500/50 bg-orange-300\"\n                                    }, void 0, false, {\n                                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-auto relative py-6 flex justify-end gap-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-auto flex justify-end gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"px-6 h-8 bg-green-500/30 text-green-500 border-2 shadow-md hover:bg-green-500/50 border-green-300 font-semibold rounded overflow-hidden\",\n                                            children: \"View Report\"\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"\".concat(!globalCtx.isFetch && \"invisible\", \" flex absolute h-4 w-4 top-3 right-4 -mt-1 -mr-1\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-50 opacity-75\"\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"relative inline-flex rounded-full h-4 w-4 bg-red-300\"\n                                                }, void 0, false, {\n                                                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\form\\\\FormReport.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(FormReport, \"hTwxGC+rohkk3S1bj+YCQ6cmvHY=\");\n_c = FormReport;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(FormReport));\nvar _c, _c1;\n$RefreshReg$(_c, \"FormReport\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEIsT0FBTyxJQUFJLFdBQVcsRUFDbEMsa0RBQWdELENBQUM7OzhEQUVsRCw4REFBQ0QsTUFBSTtvREFBQ3BCLFNBQVMsRUFBQyxtRkFBbUY7Ozs7O3lEQUFROzhEQUMzRyw4REFBQ29CLE1BQUk7b0RBQUNwQixTQUFTLEVBQUMsc0RBQXNEOzs7Ozt5REFBUTs7Ozs7O2lEQUN6RTs7Ozs7O3lDQUNIOzs7OztxQ0FDRjs7Ozs7OzZCQUNGOzs7Ozt5QkFDRjs7Ozs7cUJBQ0Q7Ozs7O2lCQUNIO3FCQUNMLENBQ0g7Q0FDSDtHQXBGS1IsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBc0ZoQiw0RUFBZUgsTUFBQUEsMkNBQUksQ0FBQ0csVUFBVSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3JtL0Zvcm1SZXBvcnQuanM/Zjk0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCJjb250ZXh0L2dsb2JhbFwiO1xyXG5cclxuY29uc3QgRm9ybVJlcG9ydCA9ICh7IHNldERhdGFSZXBvcnQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZ2xvYmFsQWN0LCBnbG9iYWxDdHggfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAga2V5OiBcImJyYW5kXCIsXHJcbiAgICAgIG5hbWU6IFwiUmVwb3J0IGJ5IGJyYW5kXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgbmFtZTogXCJSZXBvcnQgYnkgY2F0ZWdvcnlcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogXCJwcm9kdWN0XCIsXHJcbiAgICAgIG5hbWU6IFwiUmVwb3J0IGJ5IHByb2R1Y3RcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQucmVwb3J0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNCBzZWxlY3Qtbm9uZSBwLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxwPlJlcG9ydCBGaWx0ZXI8L3A+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBvcnRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInJlcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1vcmFuZ2UtNTAwLzUwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2RhdGEubWFwKChkYXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtkYXQua2V5fT57ZGF0Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxwPkRhdGUgRnJvbTwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJkYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1vcmFuZ2UtNTAwLzUwIGJnLW9yYW5nZS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxwPkRhdGUgVG88L3A+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW5kXCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT17XCJkYXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1vcmFuZ2UtNTAwLzUwIGJnLW9yYW5nZS0zMDBcIlxyXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByZWxhdGl2ZSBweS02IGZsZXgganVzdGlmeS1lbmQgZ2FwLTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBmbGV4IGp1c3RpZnktZW5kIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInN1Ym1pdFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgaC04IGJnLWdyZWVuLTUwMC8zMCB0ZXh0LWdyZWVuLTUwMCBib3JkZXItMiBzaGFkb3ctbWQgaG92ZXI6YmctZ3JlZW4tNTAwLzUwIGJvcmRlci1ncmVlbi0zMDAgZm9udC1zZW1pYm9sZCByb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBWaWV3IFJlcG9ydFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgIWdsb2JhbEN0eC5pc0ZldGNoICYmIFwiaW52aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICB9IGZsZXggYWJzb2x1dGUgaC00IHctNCB0b3AtMyByaWdodC00IC1tdC0xIC1tci0xYH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcGluZyBhYnNvbHV0ZSBpbmxpbmUtZmxleCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtZnVsbCBiZy1yZWQtNTAgb3BhY2l0eS03NVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtZmxleCByb3VuZGVkLWZ1bGwgaC00IHctNCBiZy1yZWQtMzAwXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oRm9ybVJlcG9ydCk7XHJcbiJdLCJuYW1lcyI6WyJtZW1vIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJGb3JtUmVwb3J0Iiwic2V0RGF0YVJlcG9ydCIsImdsb2JhbEFjdCIsImdsb2JhbEN0eCIsImRhdGEiLCJrZXkiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJyZXBvcnQiLCJ2YWx1ZSIsIm1ldGhvZCIsInAiLCJzZWxlY3QiLCJpZCIsIm1hcCIsImRhdCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsImJ1dHRvbiIsInNwYW4iLCJpc0ZldGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/form/FormReport.js\n");

/***/ })

});