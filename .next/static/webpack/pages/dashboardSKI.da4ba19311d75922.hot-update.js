"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboardSKI",{

/***/ "./pages/dashboardSKI/index.js":
/*!*************************************!*\
  !*** ./pages/dashboardSKI/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var components_card_DashboardCardSKI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/card/DashboardCardSKI */ \"./components/card/DashboardCardSKI.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_card_OrderCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/card/OrderCard */ \"./components/card/OrderCard.js\");\n/* harmony import */ var components_chart_line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/chart/line */ \"./components/chart/line.js\");\n/* harmony import */ var components_chart_line1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/chart/line1 */ \"./components/chart/line1.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var components_table_History__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/table/History */ \"./components/table/History.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar DashboardSKI = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    {\n    /* Default */ }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_8__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n    // router.prefetch(\"/config/dashboard\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        console.log(\"fetch data status : \", globalCtx.isFetch);\n    }, [\n        globalCtx\n    ]);\n    {\n    /* Default */ }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full p-4 flex flex-col gap-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration-500 bg-white border-orange-300 border-2 shadow-md w-2/4 h-44 rounded-md flex flex-col justify-between hover:shadow-red-500\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_chart_line1__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"duration-500 bg-white border-orange-300 border-2 shadow-md w-2/4 h-44 rounded-md flex flex-col justify-between hover:shadow-red-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_chart_line__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full grid grid-cols-3 items-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card_DashboardCardSKI__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            otlet: \"Red White Coffee\",\n                            order: \"180\",\n                            products: \"1100\",\n                            subCategory: \"11\",\n                            route: \"/outlet/redwhite\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card_DashboardCardSKI__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            otlet: \"Blue Green Coffee\",\n                            order: \"280\",\n                            products: \"100\",\n                            subCategory: \"18\",\n                            route: \"/outlet/redwhite\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card_DashboardCardSKI__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            otlet: \"White Black Coffee\",\n                            order: \"208\",\n                            products: \"900\",\n                            subCategory: \"8\",\n                            route: \"/outlet/redwhite\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 113,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card_DashboardCardSKI__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            otlet: \"Red White Coffee\",\n                            order: \"180\",\n                            products: \"1100\",\n                            subCategory: \"11\",\n                            route: \"/outlet/redwhite\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card_DashboardCardSKI__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            otlet: \"Blue Green Coffee\",\n                            order: \"280\",\n                            products: \"100\",\n                            subCategory: \"18\",\n                            route: \"/outlet/redwhite\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_card_DashboardCardSKI__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            otlet: \"White Black Coffee\",\n                            order: \"208\",\n                            products: \"900\",\n                            subCategory: \"8\",\n                            route: \"/outlet/redwhite\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\index.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, _this);\n};\n_s(DashboardSKI, \"eyEEQkTuQYfvjf5LBYKGf/smWfc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = DashboardSKI;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardSKI);\nDashboardSKI.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"DashboardSKI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOzRCQUNoQkMsV0FBVyxFQUFFLElBQUk7NEJBQ2pCQyxLQUFLLEVBQUUsa0JBQWtCOzs7OztpQ0FDekI7Ozs7OzZCQUNFO2tDQUNOLDhEQUFDUCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsUUFBUTtrQ0FDckIsNEVBQUN0Qix3RUFBZ0I7NEJBQ2Z3QixLQUFLLEVBQUUsbUJBQW1COzRCQUMxQkMsS0FBSyxFQUFFLEtBQUs7NEJBQ1pDLFFBQVEsRUFBRSxLQUFLOzRCQUNmQyxXQUFXLEVBQUUsSUFBSTs0QkFDakJDLEtBQUssRUFBRSxrQkFBa0I7Ozs7O2lDQUN6Qjs7Ozs7NkJBQ0U7a0NBQ04sOERBQUNQLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxRQUFRO2tDQUNyQiw0RUFBQ3RCLHdFQUFnQjs0QkFDZndCLEtBQUssRUFBRSxvQkFBb0I7NEJBQzNCQyxLQUFLLEVBQUUsS0FBSzs0QkFDWkMsUUFBUSxFQUFFLEtBQUs7NEJBQ2ZDLFdBQVcsRUFBRSxHQUFHOzRCQUNoQkMsS0FBSyxFQUFFLGtCQUFrQjs7Ozs7aUNBQ3pCOzs7Ozs2QkFDRTs7Ozs7O3FCQUNGOzs7Ozs7YUFTRixDQUNOO0NBQ0g7R0F2R0tqQixZQUFZOztRQUNEUixrREFBUzs7O0FBRHBCUSxLQUFBQSxZQUFZOztBQXlHbEIsK0RBQWVBLFlBQVksRUFBQztBQUM1QkEsWUFBWSxDQUFDWixTQUFTLEdBQUdBLCtEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkU0tJL2luZGV4LmpzPzY0NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L05hdmJhclwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkQ2FyZFNLSSBmcm9tIFwiY29tcG9uZW50cy9jYXJkL0Rhc2hib2FyZENhcmRTS0lcIjtcclxuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uU3NyIH0gZnJvbSBcImlyb24tc2Vzc2lvbi9uZXh0XCI7XHJcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zIH0gZnJvbSBcImxpYi9zZXNzaW9uXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjaGVja1VpZCB9IGZyb20gXCJsaWIvYXJhbmdvRGJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCByZXRPYmplY3QsIGNoZWNrZXJUb2tlbiB9IGZyb20gXCJsaWIvbGlzdEZ1bmN0XCI7XHJcbmltcG9ydCBPcmRlckNhcmQgZnJvbSBcImNvbXBvbmVudHMvY2FyZC9PcmRlckNhcmRcIjtcclxuaW1wb3J0IExpbmUgZnJvbSBcImNvbXBvbmVudHMvY2hhcnQvbGluZVwiO1xyXG5pbXBvcnQgTGluZTEgZnJvbSBcImNvbXBvbmVudHMvY2hhcnQvbGluZTFcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCJjb250ZXh0L2dsb2JhbFwiO1xyXG5pbXBvcnQgZmV0Y2hKc29uLCB7IEZldGNoRXJyb3IgfSBmcm9tIFwibGliL2ZldGNoSnNvblwiO1xyXG5pbXBvcnQgSGlzdG9yeSBmcm9tIFwiY29tcG9uZW50cy90YWJsZS9IaXN0b3J5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aElyb25TZXNzaW9uU3NyKGFzeW5jIGZ1bmN0aW9uICh7XHJcbiAgcmVxLFxyXG4gIHJlcyxcclxuICBxdWVyeSxcclxufSkge1xyXG4gIHZhciB1c2VyID0gYXdhaXQgcmVxLnNlc3Npb24udXNlcjtcclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuYWNjZXNzX3Rva2VuKSB7XHJcbiAgICByZXR1cm4gcmV0T2JqZWN0KHsgaXNMb2dpbjogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uVG9rZW4gPSBhd2FpdCBjaGVja2VyVG9rZW4odXNlcik7XHJcbiAgaWYgKHZhbGlkYXRpb25Ub2tlbi5lcnJvcikge1xyXG4gICAgYXdhaXQgcmVxLnNlc3Npb24uZGVzdHJveSgpO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcblxyXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uc3RhdHVzID09PSBcInJlZnJlc2hcIikge1xyXG4gICAgdXNlciA9IHtcclxuICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgYWNjZXNzX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4uYWNjZXNzX3Rva2VuLFxyXG4gICAgICByZWZyZXNoX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4ucmVmcmVzaF90b2tlbixcclxuICAgIH07XHJcbiAgICByZXEuc2Vzc2lvbi51c2VyID0gdXNlcjtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLnNhdmUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVpZCA9IEpTT04ucGFyc2UoYXRvYih1c2VyLmFjY2Vzc190b2tlbi5zcGxpdChcIi5cIilbMV0pKTtcclxuICBjb25zdCBjaGVja1VpZHMgPSBhd2FpdCBjaGVja1VpZCh1aWQudXNlcl9pZCk7XHJcblxyXG4gIGlmIChjaGVja1VpZHMubGVuZ3RoIDwgMSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXRPYmplY3Qoe1xyXG4gICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgIGZ1bGxOYW1lOiBjaGVja1VpZHNbMF0uZnVsbG5hbWUsXHJcbiAgfSk7XHJcbn0sXHJcbnNlc3Npb25PcHRpb25zKTtcclxuXHJcbmNvbnN0IERhc2hib2FyZFNLSSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHtcclxuICAgIC8qIERlZmF1bHQgKi9cclxuICB9XHJcbiAgY29uc3QgeyBnbG9iYWxDdHgsIGdsb2JhbEFjdCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xyXG4gICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKFwiXCIpO1xyXG4gICAgLy8gcm91dGVyLnByZWZldGNoKFwiL2NvbmZpZy9kYXNoYm9hcmRcIik7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZldGNoIGRhdGEgc3RhdHVzIDogXCIsIGdsb2JhbEN0eC5pc0ZldGNoKTtcclxuICB9LCBbZ2xvYmFsQ3R4XSk7XHJcbiAge1xyXG4gICAgLyogRGVmYXVsdCAqL1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBmbGV4IGZsZXgtY29sIGdhcC15LTRcIj5cclxuICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tNTAwIGJnLXdoaXRlIGJvcmRlci1vcmFuZ2UtMzAwIGJvcmRlci0yIHNoYWRvdy1tZCB3LTIvNCBoLTQ0IHJvdW5kZWQtbWQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaG92ZXI6c2hhZG93LXJlZC01MDBcIj5cclxuICAgICAgICAgICAgPExpbmUxIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uLTUwMCBiZy13aGl0ZSBib3JkZXItb3JhbmdlLTMwMCBib3JkZXItMiBzaGFkb3ctbWQgdy0yLzQgaC00NCByb3VuZGVkLW1kIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGhvdmVyOnNoYWRvdy1yZWQtNTAwXCI+XHJcbiAgICAgICAgICA8TGluZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aHIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0zIGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkQ2FyZFNLSVxyXG4gICAgICAgICAgICBvdGxldD17XCJSZWQgV2hpdGUgQ29mZmVlXCJ9XHJcbiAgICAgICAgICAgIG9yZGVyPXtcIjE4MFwifVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17XCIxMTAwXCJ9XHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5PXtcIjExXCJ9XHJcbiAgICAgICAgICAgIHJvdXRlPXtcIi9vdXRsZXQvcmVkd2hpdGVcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxEYXNoYm9hcmRDYXJkU0tJXHJcbiAgICAgICAgICAgIG90bGV0PXtcIkJsdWUgR3JlZW4gQ29mZmVlXCJ9XHJcbiAgICAgICAgICAgIG9yZGVyPXtcIjI4MFwifVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17XCIxMDBcIn1cclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e1wiMThcIn1cclxuICAgICAgICAgICAgcm91dGU9e1wiL291dGxldC9yZWR3aGl0ZVwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPERhc2hib2FyZENhcmRTS0lcclxuICAgICAgICAgICAgb3RsZXQ9e1wiV2hpdGUgQmxhY2sgQ29mZmVlXCJ9XHJcbiAgICAgICAgICAgIG9yZGVyPXtcIjIwOFwifVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17XCI5MDBcIn1cclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e1wiOFwifVxyXG4gICAgICAgICAgICByb3V0ZT17XCIvb3V0bGV0L3JlZHdoaXRlXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkQ2FyZFNLSVxyXG4gICAgICAgICAgICBvdGxldD17XCJSZWQgV2hpdGUgQ29mZmVlXCJ9XHJcbiAgICAgICAgICAgIG9yZGVyPXtcIjE4MFwifVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17XCIxMTAwXCJ9XHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5PXtcIjExXCJ9XHJcbiAgICAgICAgICAgIHJvdXRlPXtcIi9vdXRsZXQvcmVkd2hpdGVcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxEYXNoYm9hcmRDYXJkU0tJXHJcbiAgICAgICAgICAgIG90bGV0PXtcIkJsdWUgR3JlZW4gQ29mZmVlXCJ9XHJcbiAgICAgICAgICAgIG9yZGVyPXtcIjI4MFwifVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17XCIxMDBcIn1cclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e1wiMThcIn1cclxuICAgICAgICAgICAgcm91dGU9e1wiL291dGxldC9yZWR3aGl0ZVwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPERhc2hib2FyZENhcmRTS0lcclxuICAgICAgICAgICAgb3RsZXQ9e1wiV2hpdGUgQmxhY2sgQ29mZmVlXCJ9XHJcbiAgICAgICAgICAgIG9yZGVyPXtcIjIwOFwifVxyXG4gICAgICAgICAgICBwcm9kdWN0cz17XCI5MDBcIn1cclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcnk9e1wiOFwifVxyXG4gICAgICAgICAgICByb3V0ZT17XCIvb3V0bGV0L3JlZHdoaXRlXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAteC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyXCI+XHJcbiAgICAgICAgICA8T3JkZXJDYXJkIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRTS0k7XHJcbkRhc2hib2FyZFNLSS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJnZXRMYXlvdXQiLCJEYXNoYm9hcmRDYXJkU0tJIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk9yZGVyQ2FyZCIsIkxpbmUiLCJMaW5lMSIsIkdsb2JhbENvbnRleHQiLCJmZXRjaEpzb24iLCJGZXRjaEVycm9yIiwiSGlzdG9yeSIsIkRhc2hib2FyZFNLSSIsInByb3BzIiwicm91dGVyIiwiZ2xvYmFsQ3R4IiwiZ2xvYmFsQWN0Iiwic2V0SXNGZXRjaCIsInNldEVycm9yTXNnIiwiY29uc29sZSIsImxvZyIsImlzRmV0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJociIsIm90bGV0Iiwib3JkZXIiLCJwcm9kdWN0cyIsInN1YkNhdGVnb3J5Iiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboardSKI/index.js\n");

/***/ })

});