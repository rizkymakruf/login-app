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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/form/FormCategory */ \"./components/form/FormCategory.js\");\n/* harmony import */ var components_search_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/search/Category */ \"./components/search/Category.js\");\n/* harmony import */ var components_table_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/Category */ \"./components/table/Category.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ManageCategory = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_4__.GlobalContext), globalAct = ref.globalAct, globalCtx = ref.globalCtx;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputValue = ref1[0], setInputValue = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.category), data = ref2[0], setData = ref2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full p-3 flex flex-col gap-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    onSubmit: function() {\n                        var _handleSubmit = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                            var body;\n                            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        e.preventDefault();\n                                        globalAct.setIsFetch(true);\n                                        body = {\n                                            name: e.currentTarget.category.value,\n                                            uri: \"category/add\"\n                                        };\n                                        _ctx.prev = 3;\n                                        _ctx.next = 6;\n                                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/prot/post\", {\n                                            method: \"POST\",\n                                            headers: {\n                                                \"Content-Type\": \"application/json\"\n                                            },\n                                            body: JSON.stringify(body)\n                                        });\n                                    case 6:\n                                        router.replace(\"/dashboardSKI/category\");\n                                        _ctx.next = 12;\n                                        break;\n                                    case 9:\n                                        _ctx.prev = 9;\n                                        _ctx.t0 = _ctx[\"catch\"](3);\n                                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__.FetchError)) {\n                                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                                        } else {\n                                            console.log(_ctx.t0);\n                                            globalAct.setErrorMsg(\"An unexpected error happened\");\n                                        }\n                                    case 12:\n                                        globalAct.setIsFetch(false);\n                                    case 13:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee, null, [\n                                [\n                                    3,\n                                    9\n                                ]\n                            ]);\n                        }));\n                        function handleSubmit(e) {\n                            return _handleSubmit.apply(this, arguments);\n                        }\n                        return handleSubmit;\n                    }()\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_search_Category__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_Category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 106,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, _this);\n};\n_s(ManageCategory, \"ZfWyuUBDCZMPbIBP0n1exhOCsXw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = ManageCategory;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageCategory);\nManageCategory.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"ManageCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFBQSxjQUFjOztBQWtEcEIsK0RBQWVBLGNBQWMsRUFBQztBQUM5QkEsY0FBYyxDQUFDUixTQUFTLEdBQUdBLCtEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkU0tJL2NhdGVnb3J5LmpzP2VmNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L05hdmJhclwiO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcImNvbnRleHQvZ2xvYmFsXCI7XHJcblxyXG5pbXBvcnQgRm9ybUNhdGVnb3J5IGZyb20gXCJjb21wb25lbnRzL2Zvcm0vRm9ybUNhdGVnb3J5XCI7XHJcbmltcG9ydCBTZWFyY2hDYXRlZ29yeSBmcm9tIFwiY29tcG9uZW50cy9zZWFyY2gvQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IENhdGVnb3J5VGFibGUgZnJvbSBcImNvbXBvbmVudHMvdGFibGUvQ2F0ZWdvcnlcIjtcclxuXHJcbmltcG9ydCBmZXRjaEpzb24sIHsgRmV0Y2hFcnJvciB9IGZyb20gXCJsaWIvZmV0Y2hKc29uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb25Tc3IgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcclxuaW1wb3J0IHsgc2Vzc2lvbk9wdGlvbnMgfSBmcm9tIFwibGliL3Nlc3Npb25cIjtcclxuaW1wb3J0IHsgbWFpbkNhdGVnb3J5LCBjaGVja1VpZCB9IGZyb20gXCJsaWIvYXJhbmdvRGJcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QsIHJldE9iamVjdCwgY2hlY2tlclRva2VuIH0gZnJvbSBcImxpYi9saXN0RnVuY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoSXJvblNlc3Npb25Tc3IoYXN5bmMgZnVuY3Rpb24gKHtcclxuICByZXEsXHJcbiAgcmVzLFxyXG4gIHF1ZXJ5LFxyXG59KSB7XHJcbiAgdmFyIHVzZXIgPSBhd2FpdCByZXEuc2Vzc2lvbi51c2VyO1xyXG4gIGlmICghdXNlciB8fCAhdXNlci5hY2Nlc3NfdG9rZW4pIHtcclxuICAgIHJldHVybiByZXRPYmplY3QoeyBpc0xvZ2luOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25Ub2tlbiA9IGF3YWl0IGNoZWNrZXJUb2tlbih1c2VyKTtcclxuICBpZiAodmFsaWRhdGlvblRva2VuLmVycm9yKSB7XHJcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5kZXN0cm95KCk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbGlkYXRpb25Ub2tlbi5zdGF0dXMgPT09IFwicmVmcmVzaFwiKSB7XHJcbiAgICB1c2VyID0ge1xyXG4gICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICBhY2Nlc3NfdG9rZW46IHZhbGlkYXRpb25Ub2tlbi5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgIHJlZnJlc2hfdG9rZW46IHZhbGlkYXRpb25Ub2tlbi5yZWZyZXNoX3Rva2VuLFxyXG4gICAgfTtcclxuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB1c2VyO1xyXG4gICAgYXdhaXQgcmVxLnNlc3Npb24uc2F2ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdWlkID0gSlNPTi5wYXJzZShhdG9iKHVzZXIuYWNjZXNzX3Rva2VuLnNwbGl0KFwiLlwiKVsxXSkpO1xyXG4gIGNvbnN0IGNoZWNrVWlkcyA9IGF3YWl0IGNoZWNrVWlkKHVpZC51c2VyX2lkKTtcclxuXHJcbiAgLy8gbmFhYWFhXHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgbWFpbkNhdGVnb3J5KCk7XHJcblxyXG4gIGlmIChjaGVja1VpZHMubGVuZ3RoIDwgMSkge1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXRPYmplY3Qoe1xyXG4gICAgaXNMb2dpbjogdHJ1ZSxcclxuICAgIC8vIGFjY2Vzc190b2tlbjogdXNlci5hY2Nlc3NfdG9rZW4sXHJcbiAgICBmdWxsTmFtZTogY2hlY2tVaWRzWzBdLmZ1bGxuYW1lLFxyXG4gICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gIH0pO1xyXG59LFxyXG5zZXNzaW9uT3B0aW9ucyk7XHJcblxyXG5jb25zdCBNYW5hZ2VDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZ2xvYmFsQWN0LCBnbG9iYWxDdHggfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUocHJvcHMuY2F0ZWdvcnkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIGZsZXggZmxleC1jb2wgZ2FwLXktMlwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGb3JtQ2F0ZWdvcnlcclxuICAgICAgICAgIGdsb2JhbEFjdD17Z2xvYmFsQWN0fVxyXG4gICAgICAgICAgZ2xvYmFsQ3R4PXtnbG9iYWxDdHh9XHJcbiAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgbmFtZTogZS5jdXJyZW50VGFyZ2V0LmNhdGVnb3J5LnZhbHVlLFxyXG4gICAgICAgICAgICAgIHVyaTogXCJjYXRlZ29yeS9hZGRcIixcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wcm90L3Bvc3RcIiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2Rhc2hib2FyZFNLSS9jYXRlZ29yeVwiKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBGZXRjaEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxBY3Quc2V0RXJyb3JNc2coZXJyb3IuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKFwiQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2VhcmNoQ2F0ZWdvcnkgZ2xvYmFsQWN0PXtnbG9iYWxBY3R9IGdsb2JhbEN0eD17Z2xvYmFsQ3R4fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Q2F0ZWdvcnlUYWJsZSBnbG9iYWxBY3Q9e2dsb2JhbEFjdH0gZ2xvYmFsQ3R4PXtnbG9iYWxDdHh9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZUNhdGVnb3J5O1xyXG5NYW5hZ2VDYXRlZ29yeS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJnZXRMYXlvdXQiLCJHbG9iYWxDb250ZXh0IiwiRm9ybUNhdGVnb3J5IiwiU2VhcmNoQ2F0ZWdvcnkiLCJDYXRlZ29yeVRhYmxlIiwiZmV0Y2hKc29uIiwiRmV0Y2hFcnJvciIsInVzZVJvdXRlciIsIk1hbmFnZUNhdGVnb3J5IiwicHJvcHMiLCJnbG9iYWxBY3QiLCJnbG9iYWxDdHgiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInJvdXRlciIsImNhdGVnb3J5IiwiZGF0YSIsInNldERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJib2R5IiwicHJldmVudERlZmF1bHQiLCJzZXRJc0ZldGNoIiwibmFtZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVyaSIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZSIsImVycm9yIiwic2V0RXJyb3JNc2ciLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboardSKI/category.js\n");

/***/ })

});