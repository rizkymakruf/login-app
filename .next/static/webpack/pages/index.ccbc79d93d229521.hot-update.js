"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/form/FormLogin */ \"./components/form/FormLogin.js\");\n/* harmony import */ var next_dist_server_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/server/router */ \"./node_modules/next/dist/server/router.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Administration = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_6__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n        router.prefetch(\"/\");\n    }, []);\n    {\n    /* Default */ }\n    var logout = function() {\n        var _ref = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var body, lg;\n            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        body = {\n                            uri: \"logout\"\n                        };\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/prot/post\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(body)\n                        });\n                    case 4:\n                        lg = _ctx.sent;\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__.FetchError)) {\n                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                        }\n                    case 10:\n                        _ctx.next = 12;\n                        return router.push(\"/\");\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   console.log(\"fetch data status : \", globalCtx.isFetch);\n    // }, [globalCtx]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen relative bg-white flex flex-row overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full min-h-screen flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 rotate-45 overflow-hidden absolute\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-600 w-44 h-44\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-600 w-64 h-64\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-400 w-72 h-72 translate-y-4\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-600 w-96 h-96 \"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"bg-red-500 w-44 h-44 -translate-y-24 absolute bottom-24\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-black w-44 h-44\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-900 w-44 h-44\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full min-h-screen relative flex flex-row justify-center items-center gap-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-96 h-auto relative\",\n                    children: props.isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full h-32 relative select-none \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full p-3 backdrop-blur bg-white/30 rounded-md border overflow-hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"text-sm\",\n                                    children: [\n                                        \"Hi \",\n                                        props.fullName,\n                                        \",\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-full relative flex justify-between items-center gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"dashboardSKI\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                className: \"w-full h-auto bg-blue-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg\",\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                                lineNumber: 118,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return logout();\n                                            },\n                                            disabled: globalCtx.isFetch ? \"disabled\" : \"\",\n                                            className: \"w-full h-auto bg-red-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg\",\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 114,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            // Default Form\n                            globalCtx: globalCtx,\n                            globalAct: globalAct,\n                            onSubmit: function() {\n                                var _handleSubmit = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                                    var body;\n                                    return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                        while(1)switch(_ctx.prev = _ctx.next){\n                                            case 0:\n                                                e.preventDefault();\n                                                globalAct.setIsFetch(true);\n                                                body = {\n                                                    username: e.currentTarget.username.value,\n                                                    password: e.currentTarget.password.value,\n                                                    uri: \"login\"\n                                                };\n                                                _ctx.prev = 3;\n                                                _ctx.next = 6;\n                                                return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/post\", {\n                                                    method: \"POST\",\n                                                    headers: {\n                                                        \"Content-Type\": \"application/json\"\n                                                    },\n                                                    body: JSON.stringify(body)\n                                                });\n                                            case 6:\n                                                router.push(\"/dashboardSKI\");\n                                                _ctx.next = 13;\n                                                break;\n                                            case 9:\n                                                _ctx.prev = 9;\n                                                _ctx.t0 = _ctx[\"catch\"](3);\n                                                alert(\"error\");\n                                                if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__.FetchError)) {\n                                                    globalAct.setErrorMsg(_ctx.t0.data.message);\n                                                } else {\n                                                    globalAct.setErrorMsg(\"An unexpected error happened\");\n                                                }\n                                            case 13:\n                                                globalAct.setIsFetch(false);\n                                            case 14:\n                                            case \"end\":\n                                                return _ctx.stop();\n                                        }\n                                    }, _callee, null, [\n                                        [\n                                            3,\n                                            9\n                                        ]\n                                    ]);\n                                }));\n                                function handleSubmit(e) {\n                                    return _handleSubmit.apply(this, arguments);\n                                }\n                                return handleSubmit;\n                            }()\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 134,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, _this);\n};\n_s(Administration, \"x0GdF0o/1fUwvzT6pNnakk7aPA0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Administration;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Administration);\nvar _c;\n$RefreshReg$(_c, \"Administration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R01oQix5REFBUyxDQUFDLFdBQVcsRUFBRTtvREFDM0JpQixNQUFNLEVBQUUsTUFBTTtvREFDZEMsT0FBTyxFQUFFO3dEQUFFLGNBQWMsRUFBRSxrQkFBa0I7cURBQUU7b0RBQy9DSixJQUFJLEVBQUVLLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixJQUFJLENBQUM7aURBQzNCLENBQUM7O2dEQUNGUCxNQUFNLENBQUNpQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7OztnREFFN0JtQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0RBQ2YsSUFBSXRCLFdBQTJCLFVBQVZwQixxREFBVSxHQUFFO29EQUMvQlEsU0FBUyxDQUFDRSxXQUFXLENBQUNVLFFBQU1DLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7aURBQzNDLE1BQU07b0RBQ0xkLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7aURBQ3ZEOztnREFHSEYsU0FBUyxDQUFDQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O2lDQUM3Qjt5Q0EzQndCMEIsWUFBWSxDQUFDQyxDQUFDOzJDQUFkRCxhQUFZOzt1Q0FBWkEsWUFBWTs7Ozs7O2lDQTRCckM7cUNBQ0Q7Ozs7O3lCQUVEOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBbkhLL0IsY0FBYzs7UUFDSFAsa0RBQVM7OztBQURwQk8sS0FBQUEsY0FBYzs7QUFvSHBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZldGNoSnNvbiwgeyBGZXRjaEVycm9yIH0gZnJvbSBcImxpYi9mZXRjaEpzb25cIjtcclxuXHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuXHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvblNzciB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJsaWIvc2Vzc2lvblwiO1xyXG5cclxuaW1wb3J0IHsgY2hlY2tVaWQgfSBmcm9tIFwibGliL2FyYW5nb0RiXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCByZXRPYmplY3QsIGNoZWNrZXJUb2tlbiB9IGZyb20gXCJsaWIvbGlzdEZ1bmN0XCI7XHJcblxyXG5pbXBvcnQgRm9ybUxvZ2luIGZyb20gXCJjb21wb25lbnRzL2Zvcm0vRm9ybUxvZ2luXCI7XHJcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aElyb25TZXNzaW9uU3NyKGFzeW5jIGZ1bmN0aW9uICh7XHJcbiAgcmVxLFxyXG4gIHJlcyxcclxuICBxdWVyeSxcclxufSkge1xyXG4gIHZhciB1c2VyID0gYXdhaXQgcmVxLnNlc3Npb24udXNlcjtcclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuYWNjZXNzX3Rva2VuKSB7XHJcbiAgICByZXR1cm4gcmV0T2JqZWN0KHsgaXNMb2dpbjogZmFsc2UgfSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblRva2VuID0gYXdhaXQgY2hlY2tlclRva2VuKHVzZXIpO1xyXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uZXJyb3IpIHtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLmRlc3Ryb3koKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsaWRhdGlvblRva2VuLnN0YXR1cyA9PT0gXCJyZWZyZXNoXCIpIHtcclxuICAgIHVzZXIgPSB7XHJcbiAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgIGFjY2Vzc190b2tlbjogdmFsaWRhdGlvblRva2VuLmFjY2Vzc190b2tlbixcclxuICAgICAgcmVmcmVzaF90b2tlbjogdmFsaWRhdGlvblRva2VuLnJlZnJlc2hfdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7XHJcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1aWQgPSBKU09OLnBhcnNlKGF0b2IodXNlci5hY2Nlc3NfdG9rZW4uc3BsaXQoXCIuXCIpWzFdKSk7XHJcbiAgY29uc3QgY2hlY2tVaWRzID0gYXdhaXQgY2hlY2tVaWQodWlkLnVzZXJfaWQpO1xyXG5cclxuICBpZiAoY2hlY2tVaWRzLmxlbmd0aCA8IDEpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV0T2JqZWN0KHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICBmdWxsTmFtZTogY2hlY2tVaWRzWzBdLmZ1bGxuYW1lLFxyXG4gIH0pO1xyXG59LFxyXG5zZXNzaW9uT3B0aW9ucyk7XHJcblxyXG5jb25zdCBBZG1pbmlzdHJhdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKGZhbHNlKTtcclxuICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgIHJvdXRlci5wcmVmZXRjaChcIi9cIik7XHJcbiAgfSwgW10pO1xyXG4gIHtcclxuICAgIC8qIERlZmF1bHQgKi9cclxuICB9XHJcbiAgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgdXJpOiBcImxvZ291dFwiLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxnID0gYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wcm90L3Bvc3RcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEZldGNoRXJyb3IpIHtcclxuICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coZXJyb3IuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBlbHNlIHtcclxuICAgICAgLy8gICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkXCIpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBhd2FpdCByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZGF0YSBzdGF0dXMgOiBcIiwgZ2xvYmFsQ3R4LmlzRmV0Y2gpO1xyXG4gIC8vIH0sIFtnbG9iYWxDdHhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlbiByZWxhdGl2ZSBiZy13aGl0ZSBmbGV4IGZsZXgtcm93IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgcm90YXRlLTQ1IG92ZXJmbG93LWhpZGRlbiBhYnNvbHV0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIHctNDQgaC00NFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC02MDAgdy02NCBoLTY0XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTQwMCB3LTcyIGgtNzIgdHJhbnNsYXRlLXktNFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC02MDAgdy05NiBoLTk2IFwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCB3LTQ0IGgtNDQgLXRyYW5zbGF0ZS15LTI0IGFic29sdXRlIGJvdHRvbS0yNFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgdy00NCBoLTQ0XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTkwMCB3LTQ0IGgtNDRcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuIHJlbGF0aXZlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCByb3VuZGVkLWZ1bGwgdy1mdWxsIGgtc2NyZWVuXCIgLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTk2IGgtYXV0byByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAge3Byb3BzLmlzTG9naW4gPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgcmVsYXRpdmUgc2VsZWN0LW5vbmUgXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHAtMyBiYWNrZHJvcC1ibHVyIGJnLXdoaXRlLzMwIHJvdW5kZWQtbWQgYm9yZGVyIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPkhpIHtwcm9wcy5mdWxsTmFtZX0sPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiZGFzaGJvYXJkU0tJXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLWJsdWUtNTAgcHktMiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZCBib3JkZXItMiBib3JkZXItd2hpdGUgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbG9nb3V0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2dsb2JhbEN0eC5pc0ZldGNoID8gXCJkaXNhYmxlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLXJlZC01MCBweS0yIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJvcmRlci0yIGJvcmRlci13aGl0ZSBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8Rm9ybUxvZ2luXHJcbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEZvcm1cclxuICAgICAgICAgICAgICAgIGdsb2JhbEN0eD17Z2xvYmFsQ3R4fVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQWN0PXtnbG9iYWxBY3R9XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IGUuY3VycmVudFRhcmdldC51c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZS5jdXJyZW50VGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVyaTogXCJsb2dpblwiLFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBmZXRjaEpzb24oXCIvYXBpL3Bvc3RcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFNLSVwiKTtcclxuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEZldGNoRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhlcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW5pc3RyYXRpb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsImZldGNoSnNvbiIsIkZldGNoRXJyb3IiLCJHbG9iYWxDb250ZXh0IiwiRm9ybUxvZ2luIiwicm91dGUiLCJBZG1pbmlzdHJhdGlvbiIsInByb3BzIiwicm91dGVyIiwiZ2xvYmFsQ3R4IiwiZ2xvYmFsQWN0Iiwic2V0SXNGZXRjaCIsInNldEVycm9yTXNnIiwicHJlZmV0Y2giLCJsb2dvdXQiLCJib2R5IiwibGciLCJ1cmkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNMb2dpbiIsInAiLCJmdWxsTmFtZSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJpc0ZldGNoIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});