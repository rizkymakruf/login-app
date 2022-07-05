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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/form/FormCategory */ \"./components/form/FormCategory.js\");\n/* harmony import */ var components_search_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/search/Category */ \"./components/search/Category.js\");\n/* harmony import */ var components_table_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/Category */ \"./components/table/Category.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ManageCategory = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_4__.GlobalContext), globalAct = ref.globalAct, globalCtx = ref.globalCtx;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputValue = ref1[0], setInputValue = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.category), data = ref2[0], setData = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.totalCat), totalRows = ref3[0], setTotalRows = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10), perPage = ref4[0], setPerPage = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        globalAct.setFullname(props.fullName);\n        globalAct.setAdminMode(\"ski\");\n    }, []);\n    var handlePageChange = function(page) {\n        fetchData((page - 1) * perPage, perPage);\n    };\n    var handlePerRowsChange = function(newPerPage, page) {\n        fetchData(0, newPerPage);\n    };\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(start, page) {\n            var body, res;\n            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        globalAct.setIsFetch(true);\n                        body = {\n                            uri: \"category\",\n                            start: start,\n                            length: page\n                        };\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/prot/post\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(body)\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        setData(res.data);\n                        setTotalRows(res.total);\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.log(\"error\", _ctx.t0);\n                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__.FetchError)) {\n                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                        } else {\n                            globalAct.setErrorMsg(\"An unexpected error happened\");\n                        }\n                    case 14:\n                        globalAct.setIsFetch(false);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    10\n                ]\n            ]);\n        }));\n        return function fetchData(start, page) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full p-3 flex flex-col gap-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    onSubmit: function() {\n                        var _handleSubmit = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                            var body, aa;\n                            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        e.preventDefault();\n                                        globalAct.setIsFetch(true);\n                                        body = {\n                                            name: e.currentTarget.category.value,\n                                            uri: \"category/add\"\n                                        };\n                                        console.log(\"ni\", body);\n                                        _ctx.prev = 4;\n                                        _ctx.next = 7;\n                                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/prot/post\", {\n                                            method: \"POST\",\n                                            headers: {\n                                                \"Content-Type\": \"application/json\"\n                                            },\n                                            body: JSON.stringify(body)\n                                        });\n                                    case 7:\n                                        aa = _ctx.sent;\n                                        _ctx.next = 10;\n                                        return router.reload(router.pathname);\n                                    case 10:\n                                        _ctx.next = 15;\n                                        break;\n                                    case 12:\n                                        _ctx.prev = 12;\n                                        _ctx.t0 = _ctx[\"catch\"](4);\n                                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__.FetchError)) {\n                                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                                        } else {\n                                            console.log(_ctx.t0);\n                                            globalAct.setErrorMsg(\"An unexpected error happened\");\n                                        }\n                                    case 15:\n                                        globalAct.setIsFetch(false);\n                                    case 16:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee, null, [\n                                [\n                                    4,\n                                    12\n                                ]\n                            ]);\n                        }));\n                        function handleSubmit(e) {\n                            return _handleSubmit.apply(this, arguments);\n                        }\n                        return handleSubmit;\n                    }()\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_search_Category__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    setData: setData\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 147,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_Category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    data: data,\n                    totalRows: totalRows,\n                    handlePageChange: handlePageChange,\n                    handlePerRowsChange: handlePerRowsChange\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 154,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, _this);\n};\n_s(ManageCategory, \"zdhADt7fK4ZZBsT23e7mPkhYGvM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = ManageCategory;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageCategory);\nManageCategory.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"ManageCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM0QyxRQUFRLENBQUM7Ozs7Ozs7d0NBRXBDLElBQUlkLFdBQTJCLFVBQVZ0QyxxREFBVSxHQUFFOzRDQUMvQkksU0FBUyxDQUFDbUMsV0FBVyxDQUFDRCxRQUFNNUIsSUFBSSxDQUFDOEIsT0FBTyxDQUFDLENBQUM7eUNBQzNDLE1BQU07NENBQ0xKLE9BQU8sQ0FBQ0MsR0FBRyxTQUFPLENBQUM7NENBQ25CakMsU0FBUyxDQUFDbUMsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7eUNBQ3ZEOzt3Q0FFSG5DLFNBQVMsQ0FBQ3dCLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7eUJBQzdCO2lDQTNCd0JnQixZQUFZLENBQUNDLENBQUM7bUNBQWRELGFBQVk7OytCQUFaQSxZQUFZOzs7Ozs7eUJBNEJyQzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNILEtBQUc7MEJBQ0YsNEVBQUM1QyxrRUFBYztvQkFDYk8sU0FBUyxFQUFFQSxTQUFTO29CQUNwQkMsU0FBUyxFQUFFQSxTQUFTO29CQUNwQk0sT0FBTyxFQUFFQSxPQUFPOzs7Ozt5QkFDaEI7Ozs7O3FCQUNFOzBCQUNOLDhEQUFDOEIsS0FBRzswQkFDRiw0RUFBQzNDLGlFQUFhO29CQUNaWSxJQUFJLEVBQUVBLElBQUk7b0JBQ1ZHLFNBQVMsRUFBRUEsU0FBUztvQkFDcEJPLGdCQUFnQixFQUFFQSxnQkFBZ0I7b0JBQ2xDRyxtQkFBbUIsRUFBRUEsbUJBQW1COzs7Ozt5QkFDeEM7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FwR0tyQixjQUFjOztRQUdIRCxrREFBUzs7O0FBSHBCQyxLQUFBQSxjQUFjOztBQXNHcEIsK0RBQWVBLGNBQWMsRUFBQztBQUM5QkEsY0FBYyxDQUFDUixTQUFTLEdBQUdBLCtEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkU0tJL2NhdGVnb3J5LmpzP2VmNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuXHJcbmltcG9ydCBGb3JtQ2F0ZWdvcnkgZnJvbSBcImNvbXBvbmVudHMvZm9ybS9Gb3JtQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFNlYXJjaENhdGVnb3J5IGZyb20gXCJjb21wb25lbnRzL3NlYXJjaC9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlUYWJsZSBmcm9tIFwiY29tcG9uZW50cy90YWJsZS9DYXRlZ29yeVwiO1xyXG5cclxuaW1wb3J0IGZldGNoSnNvbiwgeyBGZXRjaEVycm9yIH0gZnJvbSBcImxpYi9mZXRjaEpzb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvblNzciB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJsaWIvc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBtYWluQ2F0ZWdvcnksIGNoZWNrVWlkLCBnZXRUb3RhbENhdGVnb3J5IH0gZnJvbSBcImxpYi9hcmFuZ29EYlwiO1xyXG5pbXBvcnQgeyByZWRpcmVjdCwgcmV0T2JqZWN0LCBjaGVja2VyVG9rZW4gfSBmcm9tIFwibGliL2xpc3RGdW5jdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihhc3luYyBmdW5jdGlvbiAoe1xyXG4gIHJlcSxcclxuICByZXMsXHJcbiAgcXVlcnksXHJcbn0pIHtcclxuICB2YXIgdXNlciA9IGF3YWl0IHJlcS5zZXNzaW9uLnVzZXI7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmFjY2Vzc190b2tlbikge1xyXG4gICAgcmV0dXJuIHJldE9iamVjdCh7IGlzTG9naW46IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblRva2VuID0gYXdhaXQgY2hlY2tlclRva2VuKHVzZXIpO1xyXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uZXJyb3IpIHtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLmRlc3Ryb3koKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsaWRhdGlvblRva2VuLnN0YXR1cyA9PT0gXCJyZWZyZXNoXCIpIHtcclxuICAgIHVzZXIgPSB7XHJcbiAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgIGFjY2Vzc190b2tlbjogdmFsaWRhdGlvblRva2VuLmFjY2Vzc190b2tlbixcclxuICAgICAgcmVmcmVzaF90b2tlbjogdmFsaWRhdGlvblRva2VuLnJlZnJlc2hfdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7XHJcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1aWQgPSBKU09OLnBhcnNlKGF0b2IodXNlci5hY2Nlc3NfdG9rZW4uc3BsaXQoXCIuXCIpWzFdKSk7XHJcbiAgY29uc3QgY2hlY2tVaWRzID0gYXdhaXQgY2hlY2tVaWQodWlkLnVzZXJfaWQpO1xyXG5cclxuICAvLyBuYWFhYWFcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBtYWluQ2F0ZWdvcnkoKTtcclxuICBjb25zdCB0b3RhbENhdCA9IGF3YWl0IGdldFRvdGFsQ2F0ZWdvcnkoKTtcclxuXHJcbiAgaWYgKGNoZWNrVWlkcy5sZW5ndGggPCAxKSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldE9iamVjdCh7XHJcbiAgICBpc0xvZ2luOiB0cnVlLFxyXG4gICAgZnVsbE5hbWU6IGNoZWNrVWlkc1swXS5mdWxsbmFtZSxcclxuICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgIHRvdGFsQ2F0OiB0b3RhbENhdFswXS50b3RhbCxcclxuICB9KTtcclxufSxcclxuc2Vzc2lvbk9wdGlvbnMpO1xyXG5cclxuY29uc3QgTWFuYWdlQ2F0ZWdvcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGdsb2JhbEFjdCwgZ2xvYmFsQ3R4IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHByb3BzLmNhdGVnb3J5KTtcclxuICBjb25zdCBbdG90YWxSb3dzLCBzZXRUb3RhbFJvd3NdID0gdXNlU3RhdGUocHJvcHMudG90YWxDYXQpO1xyXG4gIGNvbnN0IFtwZXJQYWdlLCBzZXRQZXJQYWdlXSA9IHVzZVN0YXRlKDEwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdsb2JhbEFjdC5zZXRGdWxsbmFtZShwcm9wcy5mdWxsTmFtZSk7XHJcbiAgICBnbG9iYWxBY3Quc2V0QWRtaW5Nb2RlKFwic2tpXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChwYWdlKSA9PiB7XHJcbiAgICBmZXRjaERhdGEoKHBhZ2UgLSAxKSAqIHBlclBhZ2UsIHBlclBhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBlclJvd3NDaGFuZ2UgPSAobmV3UGVyUGFnZSwgcGFnZSkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKDAsIG5ld1BlclBhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChzdGFydCwgcGFnZSkgPT4ge1xyXG4gICAgZ2xvYmFsQWN0LnNldElzRmV0Y2godHJ1ZSk7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICB1cmk6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICBsZW5ndGg6IHBhZ2UsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wcm90L3Bvc3RcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgIHNldFRvdGFsUm93cyhyZXMudG90YWwpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XHJcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEZldGNoRXJyb3IpIHtcclxuICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coZXJyb3IuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coXCJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcHBlbmVkXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBmbGV4IGZsZXgtY29sIGdhcC15LTJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9ybUNhdGVnb3J5XHJcbiAgICAgICAgICBnbG9iYWxBY3Q9e2dsb2JhbEFjdH1cclxuICAgICAgICAgIGdsb2JhbEN0eD17Z2xvYmFsQ3R4fVxyXG4gICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZ2xvYmFsQWN0LnNldElzRmV0Y2godHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICAgIG5hbWU6IGUuY3VycmVudFRhcmdldC5jYXRlZ29yeS52YWx1ZSxcclxuICAgICAgICAgICAgICB1cmk6IFwiY2F0ZWdvcnkvYWRkXCIsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5pXCIsIGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCBhYSA9IGF3YWl0IGZldGNoSnNvbihcIi9hcGkvcHJvdC9wb3N0XCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBhd2FpdCByb3V0ZXIucmVsb2FkKHJvdXRlci5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKGVycm9yLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNlYXJjaENhdGVnb3J5XHJcbiAgICAgICAgICBnbG9iYWxBY3Q9e2dsb2JhbEFjdH1cclxuICAgICAgICAgIGdsb2JhbEN0eD17Z2xvYmFsQ3R4fVxyXG4gICAgICAgICAgc2V0RGF0YT17c2V0RGF0YX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q2F0ZWdvcnlUYWJsZVxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIHRvdGFsUm93cz17dG90YWxSb3dzfVxyXG4gICAgICAgICAgaGFuZGxlUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgIGhhbmRsZVBlclJvd3NDaGFuZ2U9e2hhbmRsZVBlclJvd3NDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlQ2F0ZWdvcnk7XHJcbk1hbmFnZUNhdGVnb3J5LmdldExheW91dCA9IGdldExheW91dDtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldExheW91dCIsIkdsb2JhbENvbnRleHQiLCJGb3JtQ2F0ZWdvcnkiLCJTZWFyY2hDYXRlZ29yeSIsIkNhdGVnb3J5VGFibGUiLCJmZXRjaEpzb24iLCJGZXRjaEVycm9yIiwidXNlUm91dGVyIiwiTWFuYWdlQ2F0ZWdvcnkiLCJwcm9wcyIsImdsb2JhbEFjdCIsImdsb2JhbEN0eCIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwicm91dGVyIiwiY2F0ZWdvcnkiLCJkYXRhIiwic2V0RGF0YSIsInRvdGFsQ2F0IiwidG90YWxSb3dzIiwic2V0VG90YWxSb3dzIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJzZXRGdWxsbmFtZSIsImZ1bGxOYW1lIiwic2V0QWRtaW5Nb2RlIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJmZXRjaERhdGEiLCJoYW5kbGVQZXJSb3dzQ2hhbmdlIiwibmV3UGVyUGFnZSIsInN0YXJ0IiwiYm9keSIsInJlcyIsInNldElzRmV0Y2giLCJ1cmkiLCJsZW5ndGgiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic2V0RXJyb3JNc2ciLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJlIiwiYWEiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJyZWxvYWQiLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboardSKI/category.js\n");

/***/ })

});