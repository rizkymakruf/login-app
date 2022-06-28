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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/form/FormCategory */ \"./components/form/FormCategory.js\");\n/* harmony import */ var components_search_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/search/Category */ \"./components/search/Category.js\");\n/* harmony import */ var components_table_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/Category */ \"./components/table/Category.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ManageCategory = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_4__.GlobalContext), globalAct = ref.globalAct, globalCtx = ref.globalCtx;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputValue = ref1[0], setInputValue = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full p-3 flex flex-col gap-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    onSubmit: function() {\n                        var _handleSubmit = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                            var body;\n                            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        e.preventDefault();\n                                        globalAct.setIsFetch(true);\n                                        body = {\n                                            method: \"add\",\n                                            category: e.currentTarget.category.value,\n                                            uri: \"category/add\"\n                                        };\n                                        _ctx.prev = 3;\n                                        _ctx.next = 6;\n                                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/prot/post\", {\n                                            method: \"POST\",\n                                            headers: {\n                                                \"Content-Type\": \"application/json\"\n                                            },\n                                            body: JSON.stringify(body)\n                                        });\n                                    case 6:\n                                        router.replace(\"/dashboard/category\");\n                                        _ctx.next = 12;\n                                        break;\n                                    case 9:\n                                        _ctx.prev = 9;\n                                        _ctx.t0 = _ctx[\"catch\"](3);\n                                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__.FetchError)) {\n                                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                                        } else {\n                                            console.log(_ctx.t0);\n                                            globalAct.setErrorMsg(\"An unexpected error happened\");\n                                        }\n                                    case 12:\n                                        globalAct.setIsFetch(false);\n                                    case 13:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee, null, [\n                                [\n                                    3,\n                                    9\n                                ]\n                            ]);\n                        }));\n                        function handleSubmit(e) {\n                            return _handleSubmit.apply(this, arguments);\n                        }\n                        return handleSubmit;\n                    }()\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_search_Category__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_Category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(ManageCategory, \"Eo3uCx/ctgaziwfGJFTbFmqHrfg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = ManageCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageCategory);\nManageCategory.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"ManageCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmRTS0kvY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNRO0FBQ047QUFFUztBQUNBO0FBQ0Y7QUFFQTtBQUNkOztBQUV4QyxJQUFNVSxjQUFjLEdBQUcsV0FBTTs7SUFDM0IsSUFBaUNWLEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDRyx5REFBYSxDQUFDLEVBQWxEUSxTQUFTLEdBQWdCWCxHQUF5QixDQUFsRFcsU0FBUyxFQUFFQyxTQUFTLEdBQUtaLEdBQXlCLENBQXZDWSxTQUFTO0lBQzVCLElBQW9DWCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBYmxELFVBYW1CLEdBQW1CQSxJQUFZLEdBQS9CLEVBYm5CLGFBYWtDLEdBQUlBLElBQVksR0FBaEI7SUFDaEMsSUFBTWMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7OzBCQUMvQyw4REFBQ0QsS0FBRzswQkFDRiw0RUFBQ1osb0VBQVk7b0JBQ1hPLFNBQVMsRUFBRUEsU0FBUztvQkFDcEJDLFNBQVMsRUFBRUEsU0FBUztvQkFDcEJNLFFBQVE7NEJBQWlCQyxhQUFZLEdBQTNCLDhKQUE0QkMsQ0FBQyxFQUFFO2dDQUlqQ0MsSUFBSTs7Ozt3Q0FIVkQsQ0FBQyxDQUFDRSxjQUFjLEVBQUUsQ0FBQzt3Q0FDbkJYLFNBQVMsQ0FBQ1ksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUVyQkYsSUFBSSxHQUFHOzRDQUNYRyxNQUFNLEVBQUUsS0FBSzs0Q0FDYkMsUUFBUSxFQUFFTCxDQUFDLENBQUNNLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDRSxLQUFLOzRDQUN4Q0MsR0FBRyxFQUFFLGNBQWM7eUNBQ3BCLENBQUM7OzsrQ0FLTXJCLHlEQUFTLENBQUMsZ0JBQWdCLEVBQUU7NENBQ2hDaUIsTUFBTSxFQUFFLE1BQU07NENBQ2RLLE9BQU8sRUFBRTtnREFBRSxjQUFjLEVBQUUsa0JBQWtCOzZDQUFFOzRDQUMvQ1IsSUFBSSxFQUFFUyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1YsSUFBSSxDQUFDO3lDQUMzQixDQUFDOzt3Q0FDRk4sTUFBTSxDQUFDaUIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7Ozs7Ozt3Q0FFdEMsSUFBSUMsV0FBMkIsVUFBVnpCLHFEQUFVLEdBQUU7NENBQy9CRyxTQUFTLENBQUN1QixXQUFXLENBQUNELFFBQU1FLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7eUNBQzNDLE1BQU07NENBQ0xDLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7NENBQ25CM0IsU0FBUyxDQUFDdUIsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7eUNBQ3ZEOzt3Q0FFSHZCLFNBQVMsQ0FBQ1ksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozt5QkFDN0I7aUNBNUJ3QkosWUFBWSxDQUFDQyxDQUFDO21DQUFkRCxhQUFZOzsrQkFBWkEsWUFBWTs7Ozs7O3lCQTZCckM7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDSCxLQUFHOzBCQUNGLDRFQUFDWCxrRUFBYzs7Ozt5QkFBRzs7Ozs7cUJBQ2Q7MEJBQ04sOERBQUNXLEtBQUc7MEJBQ0YsNEVBQUNWLGlFQUFhOzs7O3lCQUFHOzs7OztxQkFDYjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBakRLSSxjQUFjOztRQUdIRCxrREFBUzs7O0FBSHBCQyxLQUFBQSxjQUFjO0FBbURwQiwrREFBZUEsY0FBYyxFQUFDO0FBQzlCQSxjQUFjLENBQUNSLFNBQVMsR0FBR0EsK0RBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmRTS0kvY2F0ZWdvcnkuanM/ZWY3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuXHJcbmltcG9ydCBGb3JtQ2F0ZWdvcnkgZnJvbSBcImNvbXBvbmVudHMvZm9ybS9Gb3JtQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFNlYXJjaENhdGVnb3J5IGZyb20gXCJjb21wb25lbnRzL3NlYXJjaC9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlUYWJsZSBmcm9tIFwiY29tcG9uZW50cy90YWJsZS9DYXRlZ29yeVwiO1xyXG5cclxuaW1wb3J0IGZldGNoSnNvbiwgeyBGZXRjaEVycm9yIH0gZnJvbSBcImxpYi9mZXRjaEpzb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBNYW5hZ2VDYXRlZ29yeSA9ICgpID0+IHtcclxuICBjb25zdCB7IGdsb2JhbEFjdCwgZ2xvYmFsQ3R4IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTMgZmxleCBmbGV4LWNvbCBnYXAteS0yXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEZvcm1DYXRlZ29yeVxyXG4gICAgICAgICAgZ2xvYmFsQWN0PXtnbG9iYWxBY3R9XHJcbiAgICAgICAgICBnbG9iYWxDdHg9e2dsb2JhbEN0eH1cclxuICAgICAgICAgIG9uU3VibWl0PXthc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgICBtZXRob2Q6IFwiYWRkXCIsXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcnk6IGUuY3VycmVudFRhcmdldC5jYXRlZ29yeS52YWx1ZSxcclxuICAgICAgICAgICAgICB1cmk6IFwiY2F0ZWdvcnkvYWRkXCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhib2R5KTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wcm90L3Bvc3RcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZC9jYXRlZ29yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBGZXRjaEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coZXJyb3IuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2VhcmNoQ2F0ZWdvcnkgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPENhdGVnb3J5VGFibGUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlQ2F0ZWdvcnk7XHJcbk1hbmFnZUNhdGVnb3J5LmdldExheW91dCA9IGdldExheW91dDtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImdldExheW91dCIsIkdsb2JhbENvbnRleHQiLCJGb3JtQ2F0ZWdvcnkiLCJTZWFyY2hDYXRlZ29yeSIsIkNhdGVnb3J5VGFibGUiLCJmZXRjaEpzb24iLCJGZXRjaEVycm9yIiwidXNlUm91dGVyIiwiTWFuYWdlQ2F0ZWdvcnkiLCJnbG9iYWxBY3QiLCJnbG9iYWxDdHgiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInJvdXRlciIsImRpdiIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsImJvZHkiLCJwcmV2ZW50RGVmYXVsdCIsInNldElzRmV0Y2giLCJtZXRob2QiLCJjYXRlZ29yeSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVyaSIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImVycm9yIiwic2V0RXJyb3JNc2ciLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboardSKI/category.js\n");

/***/ })

});