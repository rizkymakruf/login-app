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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/form/FormLogin */ \"./components/form/FormLogin.js\");\n/* harmony import */ var next_dist_server_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/server/router */ \"./node_modules/next/dist/server/router.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Administration = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(\"ni\", props.fullName);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_6__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n        router.prefetch(\"/config/dashboard\");\n    }, []);\n    {\n    /* Default */ }\n    var logout = function() {\n        var _ref = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var body, lg;\n            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        body = {\n                            uri: \"logout\"\n                        };\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/prot/post\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(body)\n                        });\n                    case 4:\n                        lg = _ctx.sent;\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__.FetchError)) {\n                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                        }\n                    case 10:\n                        _ctx.next = 12;\n                        return router.push(\"/\");\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    //   console.log(\"fetch data status : \", globalCtx.isFetch);\n    // }, [globalCtx]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen relative bg-white flex flex-row overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full min-h-screen flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 rotate-45 overflow-hidden absolute\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-600 w-44 h-44\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-600 w-64 h-64\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-400 w-72 h-72 translate-y-4\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-600 w-96 h-96 \"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"bg-red-500 w-44 h-44 -translate-y-24 absolute bottom-24\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-black w-44 h-44\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-red-900 w-44 h-44\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full min-h-screen relative flex flex-row justify-center items-center gap-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"w-96 h-auto relative\",\n                    children: props.isLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full h-32 relative select-none \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full p-3 backdrop-blur bg-white/30 rounded-md border overflow-hidden\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"text-sm\",\n                                    children: [\n                                        \"Hi \",\n                                        props.fullName,\n                                        \",\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"w-full h-full relative flex justify-between items-center gap-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            href: \"dashboardSKI\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                                className: \"w-full h-auto bg-blue-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg\",\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                                lineNumber: 120,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                            lineNumber: 119,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return logout();\n                                            },\n                                            disabled: globalCtx.isFetch ? \"disabled\" : \"\",\n                                            className: \"w-full h-auto bg-red-50 py-2 overflow-hidden rounded border-2 border-white shadow-lg\",\n                                            children: \"Logout\"\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                            lineNumber: 124,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 116,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            // Default Form\n                            globalCtx: globalCtx,\n                            globalAct: globalAct,\n                            onSubmit: function() {\n                                var _handleSubmit = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                                    var body;\n                                    return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                        while(1)switch(_ctx.prev = _ctx.next){\n                                            case 0:\n                                                e.preventDefault();\n                                                globalAct.setIsFetch(true);\n                                                body = {\n                                                    username: e.currentTarget.username.value,\n                                                    password: e.currentTarget.password.value,\n                                                    uri: \"login\"\n                                                };\n                                                _ctx.prev = 3;\n                                                _ctx.next = 6;\n                                                return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/post\", {\n                                                    method: \"POST\",\n                                                    headers: {\n                                                        \"Content-Type\": \"application/json\"\n                                                    },\n                                                    body: JSON.stringify(body)\n                                                });\n                                            case 6:\n                                                router.push(\"/dashboardSKI\");\n                                                _ctx.next = 13;\n                                                break;\n                                            case 9:\n                                                _ctx.prev = 9;\n                                                _ctx.t0 = _ctx[\"catch\"](3);\n                                                alert(\"error\");\n                                                if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_5__.FetchError)) {\n                                                    globalAct.setErrorMsg(_ctx.t0.data.message);\n                                                } else {\n                                                    globalAct.setErrorMsg(\"An unexpected error happened\");\n                                                }\n                                            case 13:\n                                                globalAct.setIsFetch(false);\n                                            case 14:\n                                            case \"end\":\n                                                return _ctx.stop();\n                                        }\n                                    }, _callee, null, [\n                                        [\n                                            3,\n                                            9\n                                        ]\n                                    ]);\n                                }));\n                                function handleSubmit(e) {\n                                    return _handleSubmit.apply(this, arguments);\n                                }\n                                return handleSubmit;\n                            }()\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                            lineNumber: 136,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\index.js\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, _this);\n};\n_s(Administration, \"x0GdF0o/1fUwvzT6pNnakk7aPA0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Administration;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Administration);\nvar _c;\n$RefreshReg$(_c, \"Administration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxhQUFhLENBQUNFLFFBQVEsQ0FBQ0QsS0FBSztvREFDeEN4QixHQUFHLEVBQUUsT0FBTztpREFDYixDQUFDOzs7dURBR01uQix5REFBUyxDQUFDLFdBQVcsRUFBRTtvREFDM0JvQixNQUFNLEVBQUUsTUFBTTtvREFDZEMsT0FBTyxFQUFFO3dEQUFFLGNBQWMsRUFBRSxrQkFBa0I7cURBQUU7b0RBQy9DSixJQUFJLEVBQUVLLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixJQUFJLENBQUM7aURBQzNCLENBQUM7O2dEQUNGVixNQUFNLENBQUNvQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7OztnREFFN0JrQixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0RBQ2YsSUFBSXJCLFdBQTJCLFVBQVZ2QixxREFBVSxHQUFFO29EQUMvQlcsU0FBUyxDQUFDRSxXQUFXLENBQUNVLFFBQU1DLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7aURBQzNDLE1BQU07b0RBQ0xkLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7aURBQ3ZEOztnREFHSEYsU0FBUyxDQUFDQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O2lDQUM3Qjt5Q0EzQndCeUIsWUFBWSxDQUFDQyxDQUFDOzJDQUFkRCxhQUFZOzt1Q0FBWkEsWUFBWTs7Ozs7O2lDQTRCckM7cUNBQ0Q7Ozs7O3lCQUVEOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBdEhLakMsY0FBYzs7UUFDSFAsa0RBQVM7OztBQURwQk8sS0FBQUEsY0FBYzs7QUF1SHBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZldGNoSnNvbiwgeyBGZXRjaEVycm9yIH0gZnJvbSBcImxpYi9mZXRjaEpzb25cIjtcclxuXHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuXHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvblNzciB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJsaWIvc2Vzc2lvblwiO1xyXG5cclxuaW1wb3J0IHsgY2hlY2tVaWQgfSBmcm9tIFwibGliL2FyYW5nb0RiXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCByZXRPYmplY3QsIGNoZWNrZXJUb2tlbiB9IGZyb20gXCJsaWIvbGlzdEZ1bmN0XCI7XHJcblxyXG5pbXBvcnQgRm9ybUxvZ2luIGZyb20gXCJjb21wb25lbnRzL2Zvcm0vRm9ybUxvZ2luXCI7XHJcbmltcG9ydCB7IHJvdXRlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aElyb25TZXNzaW9uU3NyKGFzeW5jIGZ1bmN0aW9uICh7XHJcbiAgcmVxLFxyXG4gIHJlcyxcclxuICBxdWVyeSxcclxufSkge1xyXG4gIHZhciB1c2VyID0gYXdhaXQgcmVxLnNlc3Npb24udXNlcjtcclxuICBpZiAoIXVzZXIgfHwgIXVzZXIuYWNjZXNzX3Rva2VuKSB7XHJcbiAgICByZXR1cm4gcmV0T2JqZWN0KHsgaXNMb2dpbjogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uVG9rZW4gPSBhd2FpdCBjaGVja2VyVG9rZW4odXNlcik7XHJcbiAgaWYgKHZhbGlkYXRpb25Ub2tlbi5lcnJvcikge1xyXG4gICAgYXdhaXQgcmVxLnNlc3Npb24uZGVzdHJveSgpO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcblxyXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uc3RhdHVzID09PSBcInJlZnJlc2hcIikge1xyXG4gICAgdXNlciA9IHtcclxuICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcclxuICAgICAgYWNjZXNzX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4uYWNjZXNzX3Rva2VuLFxyXG4gICAgICByZWZyZXNoX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4ucmVmcmVzaF90b2tlbixcclxuICAgIH07XHJcbiAgICByZXEuc2Vzc2lvbi51c2VyID0gdXNlcjtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLnNhdmUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVpZCA9IEpTT04ucGFyc2UoYXRvYih1c2VyLmFjY2Vzc190b2tlbi5zcGxpdChcIi5cIilbMV0pKTtcclxuICBjb25zdCBjaGVja1VpZHMgPSBhd2FpdCBjaGVja1VpZCh1aWQudXNlcl9pZCk7XHJcblxyXG4gIGlmIChjaGVja1VpZHMubGVuZ3RoIDwgMSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXRPYmplY3Qoe1xyXG4gICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgIGZ1bGxOYW1lOiBjaGVja1VpZHNbMF0uZnVsbG5hbWUsXHJcbiAgfSk7XHJcbn0sXHJcbnNlc3Npb25PcHRpb25zKTtcclxuXHJcbmNvbnN0IEFkbWluaXN0cmF0aW9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwibmlcIiwgcHJvcHMuZnVsbE5hbWUpO1xyXG5cclxuICBjb25zdCB7IGdsb2JhbEN0eCwgZ2xvYmFsQWN0IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaChmYWxzZSk7XHJcbiAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coXCJcIik7XHJcbiAgICByb3V0ZXIucHJlZmV0Y2goXCIvY29uZmlnL2Rhc2hib2FyZFwiKTtcclxuICB9LCBbXSk7XHJcbiAge1xyXG4gICAgLyogRGVmYXVsdCAqL1xyXG4gIH1cclxuICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICB1cmk6IFwibG9nb3V0XCIsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgbGcgPSBhd2FpdCBmZXRjaEpzb24oXCIvYXBpL3Byb3QvcG9zdFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhlcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAvLyAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJmZXRjaCBkYXRhIHN0YXR1cyA6IFwiLCBnbG9iYWxDdHguaXNGZXRjaCk7XHJcbiAgLy8gfSwgW2dsb2JhbEN0eF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtc2NyZWVuIHJlbGF0aXZlIGJnLXdoaXRlIGZsZXggZmxleC1yb3cgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiByb3RhdGUtNDUgb3ZlcmZsb3ctaGlkZGVuIGFic29sdXRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC02MDAgdy00NCBoLTQ0XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTYwMCB3LTY0IGgtNjRcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIHctNzIgaC03MiB0cmFuc2xhdGUteS00XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVkLTYwMCB3LTk2IGgtOTYgXCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHctNDQgaC00NCAtdHJhbnNsYXRlLXktMjQgYWJzb2x1dGUgYm90dG9tLTI0XCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB3LTQ0IGgtNDRcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtOTAwIHctNDQgaC00NFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gcmVsYXRpdmUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHJvdW5kZWQtZnVsbCB3LWZ1bGwgaC1zY3JlZW5cIiAvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOTYgaC1hdXRvIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICB7cHJvcHMuaXNMb2dpbiA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiByZWxhdGl2ZSBzZWxlY3Qtbm9uZSBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcC0zIGJhY2tkcm9wLWJsdXIgYmctd2hpdGUvMzAgcm91bmRlZC1tZCBib3JkZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+SGkge3Byb3BzLmZ1bGxOYW1lfSw8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJkYXNoYm9hcmRTS0lcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gYmctYmx1ZS01MCBweS0yIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkIGJvcmRlci0yIGJvcmRlci13aGl0ZSBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Z2xvYmFsQ3R4LmlzRmV0Y2ggPyBcImRpc2FibGVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gYmctcmVkLTUwIHB5LTIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXdoaXRlIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxGb3JtTG9naW5cclxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgRm9ybVxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQ3R4PXtnbG9iYWxDdHh9XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxBY3Q9e2dsb2JhbEFjdH1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZS5jdXJyZW50VGFyZ2V0LnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBlLmN1cnJlbnRUYXJnZXQucGFzc3dvcmQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBcImxvZ2luXCIsXHJcbiAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoSnNvbihcIi9hcGkvcG9zdFwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkU0tJXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKGVycm9yLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBZG1pbmlzdHJhdGlvbjtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiZmV0Y2hKc29uIiwiRmV0Y2hFcnJvciIsIkdsb2JhbENvbnRleHQiLCJGb3JtTG9naW4iLCJyb3V0ZSIsIkFkbWluaXN0cmF0aW9uIiwicHJvcHMiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZnVsbE5hbWUiLCJnbG9iYWxDdHgiLCJnbG9iYWxBY3QiLCJzZXRJc0ZldGNoIiwic2V0RXJyb3JNc2ciLCJwcmVmZXRjaCIsImxvZ291dCIsImJvZHkiLCJsZyIsInVyaSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJpc0xvZ2luIiwicCIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJpc0ZldGNoIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});