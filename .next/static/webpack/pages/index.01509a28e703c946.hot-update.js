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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var lib_arangoDb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/arangoDb */ \"./lib/arangoDb.js\");\n/* harmony import */ var components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/form/FormLogin */ \"./components/form/FormLogin.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var public_img_Thropy_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! public/img/Thropy.png */ \"./public/img/Thropy.png\");\n/* harmony import */ var public_img_Globe_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! public/img/Globe.png */ \"./public/img/Globe.png\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Administration = function(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_5__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n    }, []);\n    {\n    /* Default */ }\n    var logout = function() {\n        var _ref = _asyncToGenerator(_home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var body, lg;\n            return _home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        body = {\n                            uri: \"logout\"\n                        };\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/prot/post\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(body)\n                        });\n                    case 4:\n                        lg = _ctx.sent;\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_4__.FetchError)) {\n                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                        }\n                    case 10:\n                        _ctx.next = 12;\n                        return router.push(\"/\");\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen overflow-hidden\",\n        children: props.isLogin ? // <div className=\"w-full relative select-none \">\n        //   <div className=\"w-full h-full p-3  overflow-hidden\">\n        //     <p className=\"text-md\">Hi {props.fullName},</p>\n        //     <p className=\"text-sm pb-4\">You have logged in</p>\n        //     <div className=\"w-full h-full relative flex justify-between items-center gap-3\">\n        //       <button\n        //         onClick={() => {\n        //           router.push(\"/dashboard\");\n        //         }}\n        //         className=\"w-full h-auto bg-blue-50 py-2 overflow-hidden rounded border-2 border-blue-500/50 hover:shadow-md\"\n        //       >\n        //         Dashboard\n        //       </button>\n        //       <button\n        //         onClick={() => logout()}\n        //         disabled={globalCtx.isFetch ? \"disabled\" : \"\"}\n        //         className=\"w-full h-auto bg-red-50 py-2 overflow-hidden rounded border-2 border-red-500/50 hover:shadow-md\"\n        //       >\n        //         Logout\n        //       </button>\n        //     </div>\n        //   </div>\n        // </div>\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"w-full flex flex-col justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-4/6 pt-3 px-5 md:p-3 md:w-2/6 md:rounded-xl bg-purple-600/50 flex flex-col justify-center items-center h-6/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-72 md:w-80 h-auto p-10 rounded-xl flex justify-center items-center md:bg-transparent\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            src: public_img_Globe_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full h-auto py-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                className: \"text-3xl\",\n                                children: \"You have logged in\"\n                            }, void 0, false, {\n                                fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                            lineNumber: 110,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full h-auto\"\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                lineNumber: 103,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n            lineNumber: 102,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"w-full flex flex-col justify-center items-center h-screen p-0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full pt-3 px-5 my-0 md:my-8 md:py-3 md:w-2/6 md:rounded-xl md:bg-purple-600/50 flex flex-col justify-center items-center h-6/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-72 md:w-80 h-auto p-10 rounded-xl flex justify-center items-center bg-purple-600/50 md:bg-transparent\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                            src: public_img_Thropy_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                            lineNumber: 122,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                        lineNumber: 121,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full h-auto py-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"md:text-5xl text-4xl font-\",\n                                    children: \"Let's\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                                    lineNumber: 127,\n                                    columnNumber: 17\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                    className: \"md:text-5xl text-4xl font-\",\n                                    children: \"Get started!\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                                    lineNumber: 128,\n                                    columnNumber: 17\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                            lineNumber: 126,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                        lineNumber: 125,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"w-full h-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            // Default Form\n                            globalCtx: globalCtx,\n                            globalAct: globalAct,\n                            onSubmit: function() {\n                                var _handleSubmit = _asyncToGenerator(_home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                                    var body, res;\n                                    return _home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                        while(1)switch(_ctx.prev = _ctx.next){\n                                            case 0:\n                                                e.preventDefault();\n                                                globalAct.setIsFetch(true);\n                                                body = {\n                                                    username: e.currentTarget.username.value,\n                                                    password: e.currentTarget.password.value,\n                                                    uri: \"login\"\n                                                };\n                                                _ctx.prev = 3;\n                                                _ctx.next = 6;\n                                                return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/post\", {\n                                                    method: \"POST\",\n                                                    headers: {\n                                                        \"Content-Type\": \"application/json\"\n                                                    },\n                                                    body: JSON.stringify(body)\n                                                });\n                                            case 6:\n                                                res = _ctx.sent;\n                                                router.push(\"/dashboard\");\n                                                _ctx.next = 13;\n                                                break;\n                                            case 10:\n                                                _ctx.prev = 10;\n                                                _ctx.t0 = _ctx[\"catch\"](3);\n                                                if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_4__.FetchError)) {\n                                                    globalAct.setErrorMsg(_ctx.t0.data.message);\n                                                } else {\n                                                    globalAct.setErrorMsg(\"An unexpected error happened\");\n                                                }\n                                            case 13:\n                                                globalAct.setIsFetch(false);\n                                            case 14:\n                                            case \"end\":\n                                                return _ctx.stop();\n                                        }\n                                    }, _callee, null, [\n                                        [\n                                            3,\n                                            10\n                                        ]\n                                    ]);\n                                }));\n                                function handleSubmit(e) {\n                                    return _handleSubmit.apply(this, arguments);\n                                }\n                                return handleSubmit;\n                            }()\n                        }, void 0, false, {\n                            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                            lineNumber: 132,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                        lineNumber: 131,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n                lineNumber: 119,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n            lineNumber: 118,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/index.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, _this);\n};\n_s(Administration, \"x0GdF0o/1fUwvzT6pNnakk7aPA0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Administration;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Administration);\nvar _c;\n$RefreshReg$(_c, \"Administration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsV0FBVyxFQUFFO29EQUN2Q21CLE1BQU0sRUFBRSxNQUFNO29EQUNkQyxPQUFPLEVBQUU7d0RBQUUsY0FBYyxFQUFFLGtCQUFrQjtxREFBRTtvREFDL0NKLElBQUksRUFBRUssSUFBSSxDQUFDQyxTQUFTLENBQUNOLElBQUksQ0FBQztpREFDM0IsQ0FBQzs7Z0RBSklvQixHQUFHLFlBSVA7Z0RBQ0YxQixNQUFNLENBQUNnQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Ozs7OztnREFFMUIsSUFBSUgsV0FBMkIsVUFBVnRCLHFEQUFVLEdBQUU7b0RBQy9CVyxTQUFTLENBQUNFLFdBQVcsQ0FBQ1MsUUFBTUMsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztpREFDM0MsTUFBTTtvREFDTGIsU0FBUyxDQUFDRSxXQUFXLENBQUMsOEJBQThCLENBQUMsQ0FBQztpREFDdkQ7O2dEQUdIRixTQUFTLENBQUNDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7aUNBQzdCO3lDQTFCd0JxQixZQUFZLENBQUNDLENBQUM7MkNBQWRELGFBQVk7O3VDQUFaQSxZQUFZOzs7Ozs7aUNBMkJyQzs7Ozs7NkJBQ0U7Ozs7OztxQkFDRjs7Ozs7aUJBQ0Y7Ozs7O2FBRUosQ0FDTjtDQUNIO0dBM0hLMUIsY0FBYzs7UUFDSFQsa0RBQVM7OztBQURwQlMsS0FBQUEsY0FBYzs7QUE0SHBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGZldGNoSnNvbiwgeyBGZXRjaEVycm9yIH0gZnJvbSBcImxpYi9mZXRjaEpzb25cIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvblNzciB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xuaW1wb3J0IHsgc2Vzc2lvbk9wdGlvbnMgfSBmcm9tIFwibGliL3Nlc3Npb25cIjtcbmltcG9ydCB7IGNoZWNrVWlkLCBmaW5kT3V0bGV0IH0gZnJvbSBcImxpYi9hcmFuZ29EYlwiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHJldE9iamVjdCwgY2hlY2tlclRva2VuIH0gZnJvbSBcImxpYi9saXN0RnVuY3RcIjtcbmltcG9ydCBGb3JtTG9naW4gZnJvbSBcImNvbXBvbmVudHMvZm9ybS9Gb3JtTG9naW5cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFRyb3B5IGZyb20gXCJwdWJsaWMvaW1nL1Rocm9weS5wbmdcIjtcbmltcG9ydCBHbG9iZSBmcm9tIFwicHVibGljL2ltZy9HbG9iZS5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihhc3luYyBmdW5jdGlvbiAoeyByZXEgfSkge1xuICB2YXIgdXNlciA9IGF3YWl0IHJlcS5zZXNzaW9uLnVzZXI7XG4gIGlmICghdXNlciB8fCAhdXNlci5hY2Nlc3NfdG9rZW4pIHtcbiAgICByZXR1cm4gcmV0T2JqZWN0KHsgaXNMb2dpbjogZmFsc2UgfSk7XG4gIH1cblxuICBjb25zdCB2YWxpZGF0aW9uVG9rZW4gPSBhd2FpdCBjaGVja2VyVG9rZW4odXNlcik7XG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uZXJyb3IpIHtcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcbiAgfVxuXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uc3RhdHVzID09PSBcInJlZnJlc2hcIikge1xuICAgIHVzZXIgPSB7XG4gICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgYWNjZXNzX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4uYWNjZXNzX3Rva2VuLFxuICAgICAgcmVmcmVzaF90b2tlbjogdmFsaWRhdGlvblRva2VuLnJlZnJlc2hfdG9rZW4sXG4gICAgfTtcbiAgICByZXEuc2Vzc2lvbi51c2VyID0gdXNlcjtcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XG4gIH1cblxuICBnbG9iYWwuYXRvYiA9IHJlcXVpcmUoXCJhdG9iXCIpO1xuXG4gIGNvbnN0IHVpZCA9IEpTT04ucGFyc2UoYXRvYih1c2VyLmFjY2Vzc190b2tlbi5zcGxpdChcIi5cIilbMV0pKTtcbiAgY29uc3QgY2hlY2tVaWRzID0gYXdhaXQgY2hlY2tVaWQodWlkLnVzZXJfaWQpO1xuXG4gIHJldHVybiByZXRPYmplY3Qoe1xuICAgIGlzTG9naW46IHRydWUsXG4gICAgZnVsbE5hbWU6IGNoZWNrVWlkc1swXS5mdWxsbmFtZSxcbiAgfSk7XG59LCBzZXNzaW9uT3B0aW9ucyk7XG5cbmNvbnN0IEFkbWluaXN0cmF0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xuICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIlwiKTtcbiAgfSwgW10pO1xuICB7XG4gICAgLyogRGVmYXVsdCAqL1xuICB9XG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXJpOiBcImxvZ291dFwiLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxnID0gYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wcm90L3Bvc3RcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEZldGNoRXJyb3IpIHtcbiAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKGVycm9yLmRhdGEubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAge3Byb3BzLmlzTG9naW4gPyAoXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlIHNlbGVjdC1ub25lIFwiPlxuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBwLTMgIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAvLyAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZFwiPkhpIHtwcm9wcy5mdWxsTmFtZX0sPC9wPlxuICAgICAgICAvLyAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBwYi00XCI+WW91IGhhdmUgbG9nZ2VkIGluPC9wPlxuICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAvLyAgICAgICA8YnV0dG9uXG4gICAgICAgIC8vICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgcm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgICAgICAvLyAgICAgICAgIH19XG4gICAgICAgIC8vICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBiZy1ibHVlLTUwIHB5LTIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLWJsdWUtNTAwLzUwIGhvdmVyOnNoYWRvdy1tZFwiXG4gICAgICAgIC8vICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgLy8gICAgICAgPC9idXR0b24+XG4gICAgICAgIC8vICAgICAgIDxidXR0b25cbiAgICAgICAgLy8gICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX1cbiAgICAgICAgLy8gICAgICAgICBkaXNhYmxlZD17Z2xvYmFsQ3R4LmlzRmV0Y2ggPyBcImRpc2FibGVkXCIgOiBcIlwifVxuICAgICAgICAvLyAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gYmctcmVkLTUwIHB5LTIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQgYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAvNTAgaG92ZXI6c2hhZG93LW1kXCJcbiAgICAgICAgLy8gICAgICAgPlxuICAgICAgICAvLyAgICAgICAgIExvZ291dFxuICAgICAgICAvLyAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNC82IHB0LTMgcHgtNSBtZDpwLTMgbWQ6dy0yLzYgbWQ6cm91bmRlZC14bCAgYmctcHVycGxlLTYwMC81MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTYvNlwiPlxuICAgICAgICAgICAgey8qIGltYWdlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG1kOnctODAgaC1hdXRvIHAtMTAgcm91bmRlZC14bCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtZDpiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtHbG9iZX0gcHJpb3JpdHkgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGhlYWRsaW5lICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHB5LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5Zb3UgaGF2ZSBsb2dnZWQgaW48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBwLTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0zIHB4LTUgbXktMCBtZDpteS04IG1kOnB5LTMgbWQ6dy0yLzYgbWQ6cm91bmRlZC14bCAgbWQ6YmctcHVycGxlLTYwMC81MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTYvNlwiPlxuICAgICAgICAgICAgey8qIGltYWdlICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTcyIG1kOnctODAgaC1hdXRvIHAtMTAgcm91bmRlZC14bCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1wdXJwbGUtNjAwLzUwIG1kOmJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1Ryb3B5fSBwcmlvcml0eSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogaGVhZGxpbmUgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcHktM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZDp0ZXh0LTV4bCB0ZXh0LTR4bCBmb250LVwiPkxldCdzPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1kOnRleHQtNXhsIHRleHQtNHhsIGZvbnQtXCI+R2V0IHN0YXJ0ZWQhPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCI+XG4gICAgICAgICAgICAgIDxGb3JtTG9naW5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEZvcm1cbiAgICAgICAgICAgICAgICBnbG9iYWxDdHg9e2dsb2JhbEN0eH1cbiAgICAgICAgICAgICAgICBnbG9iYWxBY3Q9e2dsb2JhbEFjdH1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogZS5jdXJyZW50VGFyZ2V0LnVzZXJuYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogZS5jdXJyZW50VGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB1cmk6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoSnNvbihcIi9hcGkvcG9zdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9kYXNoYm9hcmRcIik7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBGZXRjaEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKGVycm9yLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWRtaW5pc3RyYXRpb247XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImZldGNoSnNvbiIsIkZldGNoRXJyb3IiLCJHbG9iYWxDb250ZXh0IiwiZmluZE91dGxldCIsIkZvcm1Mb2dpbiIsIkltYWdlIiwiVHJvcHkiLCJHbG9iZSIsIkFkbWluaXN0cmF0aW9uIiwicHJvcHMiLCJyb3V0ZXIiLCJnbG9iYWxDdHgiLCJnbG9iYWxBY3QiLCJzZXRJc0ZldGNoIiwic2V0RXJyb3JNc2ciLCJsb2dvdXQiLCJib2R5IiwibGciLCJ1cmkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwiZGF0YSIsIm1lc3NhZ2UiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNMb2dpbiIsInNyYyIsInByaW9yaXR5IiwicCIsIm9uU3VibWl0IiwiaGFuZGxlU3VibWl0IiwiZSIsInJlcyIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJwYXNzd29yZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});