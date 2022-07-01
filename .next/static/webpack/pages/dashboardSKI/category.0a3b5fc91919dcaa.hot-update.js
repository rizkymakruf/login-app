"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboardSKI/category",{

/***/ "./pages/dashboardSKI/category.js":
/*!****************************************!*\
  !*** ./pages/dashboardSKI/category.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/form/FormCategory */ \"./components/form/FormCategory.js\");\n/* harmony import */ var components_search_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/search/Category */ \"./components/search/Category.js\");\n/* harmony import */ var components_table_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/Category */ \"./components/table/Category.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ManageCategory = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_4__.GlobalContext), globalAct = ref.globalAct, globalCtx = ref.globalCtx;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputValue = ref1[0], setInputValue = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.category), data = ref2[0], setData = ref2[1];\n    // console.log(props.category);\n    // useEffect(() => {\n    //   console.log(data);\n    // }, [data]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        globalAct.setSelectedData(props.category);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full p-3 flex flex-col gap-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    onSubmit: function() {\n                        var _handleSubmit = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                            var body, aa;\n                            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        e.preventDefault();\n                                        globalAct.setIsFetch(true);\n                                        body = {\n                                            name: e.currentTarget.category.value,\n                                            uri: \"category/add\"\n                                        };\n                                        _ctx.prev = 3;\n                                        _ctx.next = 6;\n                                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/prot/post\", {\n                                            method: \"POST\",\n                                            headers: {\n                                                \"Content-Type\": \"application/json\"\n                                            },\n                                            body: JSON.stringify(body)\n                                        });\n                                    case 6:\n                                        aa = _ctx.sent;\n                                        _ctx.next = 9;\n                                        return router.replace(\"/dashboardSKI/category\");\n                                    case 9:\n                                        _ctx.next = 11;\n                                        return setData(props.category);\n                                    case 11:\n                                        _ctx.next = 16;\n                                        break;\n                                    case 13:\n                                        _ctx.prev = 13;\n                                        _ctx.t0 = _ctx[\"catch\"](3);\n                                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__.FetchError)) {\n                                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                                        } else {\n                                            console.log(_ctx.t0);\n                                            globalAct.setErrorMsg(\"An unexpected error happened\");\n                                        }\n                                    case 16:\n                                        globalAct.setIsFetch(false);\n                                    case 17:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee, null, [\n                                [\n                                    3,\n                                    13\n                                ]\n                            ]);\n                        }));\n                        function handleSubmit(e) {\n                            return _handleSubmit.apply(this, arguments);\n                        }\n                        return handleSubmit;\n                    }()\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_search_Category__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    setData: setData\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_Category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    category: data\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, _this);\n};\n_s(ManageCategory, \"KOt55+zlhUk2NP8MBmcrHpNvyac=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = ManageCategory;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageCategory);\nManageCategory.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"ManageCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmRTS0kvY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNIO0FBQ047QUFFUztBQUNBO0FBQ0Y7QUFFQTtBQUNkOztBQW9EeEMsSUFBTVcsY0FBYyxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDaEMsSUFBaUNaLEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDSSx5REFBYSxDQUFDLEVBQWxEUyxTQUFTLEdBQWdCYixHQUF5QixDQUFsRGEsU0FBUyxFQUFFQyxTQUFTLEdBQUtkLEdBQXlCLENBQXZDYyxTQUFTO0lBQzVCLElBQW9DWixJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBL0RsRCxVQStEbUIsR0FBbUJBLElBQVksR0FBL0IsRUEvRG5CLGFBK0RrQyxHQUFJQSxJQUFZLEdBQWhCO0lBQ2hDLElBQU1lLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQixJQUF3QlIsSUFBd0IsR0FBeEJBLCtDQUFRLENBQUNVLEtBQUssQ0FBQ00sUUFBUSxDQUFDLEVBakVsRCxJQWlFYSxHQUFhaEIsSUFBd0IsR0FBckMsRUFqRWIsT0FpRXNCLEdBQUlBLElBQXdCLEdBQTVCO0lBRXBCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFFZEQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RZLFNBQVMsQ0FBQ1EsZUFBZSxDQUFDVCxLQUFLLENBQUNNLFFBQVEsQ0FBQyxDQUFDO0tBQzNDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsa0NBQWtDOzswQkFDL0MsOERBQUNELEtBQUc7MEJBQ0YsNEVBQUNqQixvRUFBWTtvQkFDWFEsU0FBUyxFQUFFQSxTQUFTO29CQUNwQkMsU0FBUyxFQUFFQSxTQUFTO29CQUNwQlUsUUFBUTs0QkFBaUJDLGFBQVksR0FBM0IsOEpBQTRCQyxDQUFDLEVBQUU7Z0NBSWpDQyxJQUFJLEVBTUZDLEVBQUU7Ozs7d0NBVFZGLENBQUMsQ0FBQ0csY0FBYyxFQUFFLENBQUM7d0NBQ25CaEIsU0FBUyxDQUFDaUIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUVyQkgsSUFBSSxHQUFHOzRDQUNYSSxJQUFJLEVBQUVMLENBQUMsQ0FBQ00sYUFBYSxDQUFDZCxRQUFRLENBQUNlLEtBQUs7NENBQ3BDQyxHQUFHLEVBQUUsY0FBYzt5Q0FDcEIsQ0FBQzs7OytDQUdpQjFCLHlEQUFTLENBQUMsZ0JBQWdCLEVBQUU7NENBQzNDMkIsTUFBTSxFQUFFLE1BQU07NENBQ2RDLE9BQU8sRUFBRTtnREFBRSxjQUFjLEVBQUUsa0JBQWtCOzZDQUFFOzRDQUMvQ1QsSUFBSSxFQUFFVSxJQUFJLENBQUNDLFNBQVMsQ0FBQ1gsSUFBSSxDQUFDO3lDQUMzQixDQUFDOzt3Q0FKSUMsRUFBRSxZQUlOOzsrQ0FDSVgsTUFBTSxDQUFDc0IsT0FBTyxDQUFDLHdCQUF3QixDQUFDOzs7K0NBQ3hDbkIsT0FBTyxDQUFDUixLQUFLLENBQUNNLFFBQVEsQ0FBQzs7Ozs7Ozt3Q0FFN0IsSUFBSXNCLFdBQTJCLFVBQVYvQixxREFBVSxHQUFFOzRDQUMvQkksU0FBUyxDQUFDNEIsV0FBVyxDQUFDRCxRQUFNckIsSUFBSSxDQUFDdUIsT0FBTyxDQUFDLENBQUM7eUNBQzNDLE1BQU07NENBQ0xDLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7NENBQ25CL0IsU0FBUyxDQUFDNEIsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7eUNBQ3ZEOzt3Q0FFSDVCLFNBQVMsQ0FBQ2lCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7eUJBQzdCO2lDQTFCd0JMLFlBQVksQ0FBQ0MsQ0FBQzttQ0FBZEQsYUFBWTs7K0JBQVpBLFlBQVk7Ozs7Ozt5QkEyQnJDOzs7OztxQkFDRTswQkFDTiw4REFBQ0gsS0FBRzswQkFDRiw0RUFBQ2hCLGtFQUFjO29CQUNiTyxTQUFTLEVBQUVBLFNBQVM7b0JBQ3BCQyxTQUFTLEVBQUVBLFNBQVM7b0JBQ3BCTSxPQUFPLEVBQUVBLE9BQU87Ozs7O3lCQUNoQjs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNFLEtBQUc7MEJBQ0YsNEVBQUNmLGlFQUFhO29CQUNaTSxTQUFTLEVBQUVBLFNBQVM7b0JBQ3BCQyxTQUFTLEVBQUVBLFNBQVM7b0JBQ3BCSSxRQUFRLEVBQUVDLElBQUk7Ozs7O3lCQUNkOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBbEVLUixjQUFjOztRQUdIRCxrREFBUzs7O0FBSHBCQyxLQUFBQSxjQUFjOztBQW9FcEIsK0RBQWVBLGNBQWMsRUFBQztBQUM5QkEsY0FBYyxDQUFDUixTQUFTLEdBQUdBLCtEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkU0tJL2NhdGVnb3J5LmpzP2VmNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuXHJcbmltcG9ydCBGb3JtQ2F0ZWdvcnkgZnJvbSBcImNvbXBvbmVudHMvZm9ybS9Gb3JtQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFNlYXJjaENhdGVnb3J5IGZyb20gXCJjb21wb25lbnRzL3NlYXJjaC9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlUYWJsZSBmcm9tIFwiY29tcG9uZW50cy90YWJsZS9DYXRlZ29yeVwiO1xyXG5cclxuaW1wb3J0IGZldGNoSnNvbiwgeyBGZXRjaEVycm9yIH0gZnJvbSBcImxpYi9mZXRjaEpzb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvblNzciB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJsaWIvc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBtYWluQ2F0ZWdvcnksIGNoZWNrVWlkIH0gZnJvbSBcImxpYi9hcmFuZ29EYlwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCwgcmV0T2JqZWN0LCBjaGVja2VyVG9rZW4gfSBmcm9tIFwibGliL2xpc3RGdW5jdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihhc3luYyBmdW5jdGlvbiAoe1xyXG4gIHJlcSxcclxuICByZXMsXHJcbiAgcXVlcnksXHJcbn0pIHtcclxuICB2YXIgdXNlciA9IGF3YWl0IHJlcS5zZXNzaW9uLnVzZXI7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmFjY2Vzc190b2tlbikge1xyXG4gICAgcmV0dXJuIHJldE9iamVjdCh7IGlzTG9naW46IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblRva2VuID0gYXdhaXQgY2hlY2tlclRva2VuKHVzZXIpO1xyXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uZXJyb3IpIHtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLmRlc3Ryb3koKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsaWRhdGlvblRva2VuLnN0YXR1cyA9PT0gXCJyZWZyZXNoXCIpIHtcclxuICAgIHVzZXIgPSB7XHJcbiAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgIGFjY2Vzc190b2tlbjogdmFsaWRhdGlvblRva2VuLmFjY2Vzc190b2tlbixcclxuICAgICAgcmVmcmVzaF90b2tlbjogdmFsaWRhdGlvblRva2VuLnJlZnJlc2hfdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7XHJcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1aWQgPSBKU09OLnBhcnNlKGF0b2IodXNlci5hY2Nlc3NfdG9rZW4uc3BsaXQoXCIuXCIpWzFdKSk7XHJcbiAgY29uc3QgY2hlY2tVaWRzID0gYXdhaXQgY2hlY2tVaWQodWlkLnVzZXJfaWQpO1xyXG5cclxuICAvLyBuYWFhYWFcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBtYWluQ2F0ZWdvcnkoKTtcclxuXHJcbiAgaWYgKGNoZWNrVWlkcy5sZW5ndGggPCAxKSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldE9iamVjdCh7XHJcbiAgICBpc0xvZ2luOiB0cnVlLFxyXG4gICAgLy8gYWNjZXNzX3Rva2VuOiB1c2VyLmFjY2Vzc190b2tlbixcclxuICAgIGZ1bGxOYW1lOiBjaGVja1VpZHNbMF0uZnVsbG5hbWUsXHJcbiAgICBjYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgfSk7XHJcbn0sXHJcbnNlc3Npb25PcHRpb25zKTtcclxuXHJcbmNvbnN0IE1hbmFnZUNhdGVnb3J5ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBnbG9iYWxBY3QsIGdsb2JhbEN0eCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShwcm9wcy5jYXRlZ29yeSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHByb3BzLmNhdGVnb3J5KTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gfSwgW2RhdGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdsb2JhbEFjdC5zZXRTZWxlY3RlZERhdGEocHJvcHMuY2F0ZWdvcnkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBmbGV4IGZsZXgtY29sIGdhcC15LTJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9ybUNhdGVnb3J5XHJcbiAgICAgICAgICBnbG9iYWxBY3Q9e2dsb2JhbEFjdH1cclxuICAgICAgICAgIGdsb2JhbEN0eD17Z2xvYmFsQ3R4fVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZ2xvYmFsQWN0LnNldElzRmV0Y2godHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICAgIG5hbWU6IGUuY3VycmVudFRhcmdldC5jYXRlZ29yeS52YWx1ZSxcclxuICAgICAgICAgICAgICB1cmk6IFwiY2F0ZWdvcnkvYWRkXCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFhID0gYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wcm90L3Bvc3RcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGF3YWl0IHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFNLSS9jYXRlZ29yeVwiKTtcclxuICAgICAgICAgICAgICBhd2FpdCBzZXREYXRhKHByb3BzLmNhdGVnb3J5KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBGZXRjaEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coZXJyb3IuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2VhcmNoQ2F0ZWdvcnlcclxuICAgICAgICAgIGdsb2JhbEFjdD17Z2xvYmFsQWN0fVxyXG4gICAgICAgICAgZ2xvYmFsQ3R4PXtnbG9iYWxDdHh9XHJcbiAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDYXRlZ29yeVRhYmxlXHJcbiAgICAgICAgICBnbG9iYWxBY3Q9e2dsb2JhbEFjdH1cclxuICAgICAgICAgIGdsb2JhbEN0eD17Z2xvYmFsQ3R4fVxyXG4gICAgICAgICAgY2F0ZWdvcnk9e2RhdGF9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlQ2F0ZWdvcnk7XHJcbk1hbmFnZUNhdGVnb3J5LmdldExheW91dCA9IGdldExheW91dDtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldExheW91dCIsIkdsb2JhbENvbnRleHQiLCJGb3JtQ2F0ZWdvcnkiLCJTZWFyY2hDYXRlZ29yeSIsIkNhdGVnb3J5VGFibGUiLCJmZXRjaEpzb24iLCJGZXRjaEVycm9yIiwidXNlUm91dGVyIiwiTWFuYWdlQ2F0ZWdvcnkiLCJwcm9wcyIsImdsb2JhbEFjdCIsImdsb2JhbEN0eCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwicm91dGVyIiwiY2F0ZWdvcnkiLCJkYXRhIiwic2V0RGF0YSIsInNldFNlbGVjdGVkRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsImJvZHkiLCJhYSIsInByZXZlbnREZWZhdWx0Iiwic2V0SXNGZXRjaCIsIm5hbWUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ1cmkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJlcnJvciIsInNldEVycm9yTXNnIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboardSKI/category.js\n");

/***/ })

});