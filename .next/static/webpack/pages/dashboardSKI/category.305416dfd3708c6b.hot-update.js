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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/form/FormCategory */ \"./components/form/FormCategory.js\");\n/* harmony import */ var components_search_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/search/Category */ \"./components/search/Category.js\");\n/* harmony import */ var components_table_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/Category */ \"./components/table/Category.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ManageCategory = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_4__.GlobalContext), globalAct = ref.globalAct, globalCtx = ref.globalCtx;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), inputValue = ref1[0], setInputValue = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full p-3 flex flex-col gap-y-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormCategory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    // Default Form\n                    globalAct: globalAct,\n                    globalCtx: globalCtx,\n                    onSubmit: function() {\n                        var _handleSubmit = _asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n                            var body;\n                            return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                                while(1)switch(_ctx.prev = _ctx.next){\n                                    case 0:\n                                        e.preventDefault();\n                                        globalAct.setIsFetch(true);\n                                        body = {\n                                            method: \"add\",\n                                            category: e.currentTarget.category.value,\n                                            uri: \"category/add\"\n                                        };\n                                        _ctx.prev = 3;\n                                        _ctx.next = 6;\n                                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/prot/post\", {\n                                            method: \"POST\",\n                                            headers: {\n                                                \"Content-Type\": \"application/json\"\n                                            },\n                                            body: JSON.stringify(body)\n                                        });\n                                    case 6:\n                                        router.replace(\"/dashboard/category\");\n                                        _ctx.next = 12;\n                                        break;\n                                    case 9:\n                                        _ctx.prev = 9;\n                                        _ctx.t0 = _ctx[\"catch\"](3);\n                                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__.FetchError)) {\n                                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                                        } else {\n                                            console.log(_ctx.t0);\n                                            globalAct.setErrorMsg(\"An unexpected error happened\");\n                                        }\n                                    case 12:\n                                        globalAct.setIsFetch(false);\n                                    case 13:\n                                    case \"end\":\n                                        return _ctx.stop();\n                                }\n                            }, _callee, null, [\n                                [\n                                    3,\n                                    9\n                                ]\n                            ]);\n                        }));\n                        function handleSubmit(e) {\n                            return _handleSubmit.apply(this, arguments);\n                        }\n                        return handleSubmit;\n                    }()\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_search_Category__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_Category__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboardSKI\\\\category.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(ManageCategory, \"Eo3uCx/ctgaziwfGJFTbFmqHrfg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter\n    ];\n});\n_c = ManageCategory;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageCategory);\nManageCategory.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"ManageCategory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmRTS0kvY2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNRO0FBQ047QUFFUztBQUNBO0FBQ0Y7QUFFQTtBQUNkOztBQUV4QyxJQUFNVSxjQUFjLEdBQUcsV0FBTTs7SUFDM0IsSUFBaUNWLEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDRyx5REFBYSxDQUFDLEVBQWxEUSxTQUFTLEdBQWdCWCxHQUF5QixDQUFsRFcsU0FBUyxFQUFFQyxTQUFTLEdBQUtaLEdBQXlCLENBQXZDWSxTQUFTO0lBQzVCLElBQW9DWCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBYmxELFVBYW1CLEdBQW1CQSxJQUFZLEdBQS9CLEVBYm5CLGFBYWtDLEdBQUlBLElBQVksR0FBaEI7SUFDaEMsSUFBTWMsTUFBTSxHQUFHTixzREFBUyxFQUFFO0lBQzFCLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7OzBCQUMvQyw4REFBQ0QsS0FBRzswQkFDRiw0RUFBQ1osb0VBQVk7b0JBQ1gsZUFBZTtvQkFDZk8sU0FBUyxFQUFFQSxTQUFTO29CQUNwQkMsU0FBUyxFQUFFQSxTQUFTO29CQUNwQk0sUUFBUTs0QkFBaUJDLGFBQVksR0FBM0IsOEpBQTRCQyxDQUFDLEVBQUU7Z0NBSWpDQyxJQUFJOzs7O3dDQUhWRCxDQUFDLENBQUNFLGNBQWMsRUFBRSxDQUFDO3dDQUNuQlgsU0FBUyxDQUFDWSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7d0NBRXJCRixJQUFJLEdBQUc7NENBQ1hHLE1BQU0sRUFBRSxLQUFLOzRDQUNiQyxRQUFRLEVBQUVMLENBQUMsQ0FBQ00sYUFBYSxDQUFDRCxRQUFRLENBQUNFLEtBQUs7NENBQ3hDQyxHQUFHLEVBQUUsY0FBYzt5Q0FDcEIsQ0FBQzs7OytDQUtNckIseURBQVMsQ0FBQyxnQkFBZ0IsRUFBRTs0Q0FDaENpQixNQUFNLEVBQUUsTUFBTTs0Q0FDZEssT0FBTyxFQUFFO2dEQUFFLGNBQWMsRUFBRSxrQkFBa0I7NkNBQUU7NENBQy9DUixJQUFJLEVBQUVTLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixJQUFJLENBQUM7eUNBQzNCLENBQUM7O3dDQUNGTixNQUFNLENBQUNpQixPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7Ozs7O3dDQUV0QyxJQUFJQyxXQUEyQixVQUFWekIscURBQVUsR0FBRTs0Q0FDL0JHLFNBQVMsQ0FBQ3VCLFdBQVcsQ0FBQ0QsUUFBTUUsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQzt5Q0FDM0MsTUFBTTs0Q0FDTEMsT0FBTyxDQUFDQyxHQUFHLFNBQU8sQ0FBQzs0Q0FDbkIzQixTQUFTLENBQUN1QixXQUFXLENBQUMsOEJBQThCLENBQUMsQ0FBQzt5Q0FDdkQ7O3dDQUVIdkIsU0FBUyxDQUFDWSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O3lCQUM3QjtpQ0E1QndCSixZQUFZLENBQUNDLENBQUM7bUNBQWRELGFBQVk7OytCQUFaQSxZQUFZOzs7Ozs7eUJBNkJyQzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNILEtBQUc7MEJBQ0YsNEVBQUNYLGtFQUFjOzs7O3lCQUFHOzs7OztxQkFDZDswQkFDTiw4REFBQ1csS0FBRzswQkFDRiw0RUFBQ1YsaUVBQWE7Ozs7eUJBQUc7Ozs7O3FCQUNiOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FsREtJLGNBQWM7O1FBR0hELGtEQUFTOzs7QUFIcEJDLEtBQUFBLGNBQWM7QUFvRHBCLCtEQUFlQSxjQUFjLEVBQUM7QUFDOUJBLGNBQWMsQ0FBQ1IsU0FBUyxHQUFHQSwrREFBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZFNLSS9jYXRlZ29yeS5qcz9lZjc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9OYXZiYXJcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCJjb250ZXh0L2dsb2JhbFwiO1xyXG5cclxuaW1wb3J0IEZvcm1DYXRlZ29yeSBmcm9tIFwiY29tcG9uZW50cy9mb3JtL0Zvcm1DYXRlZ29yeVwiO1xyXG5pbXBvcnQgU2VhcmNoQ2F0ZWdvcnkgZnJvbSBcImNvbXBvbmVudHMvc2VhcmNoL0NhdGVnb3J5XCI7XHJcbmltcG9ydCBDYXRlZ29yeVRhYmxlIGZyb20gXCJjb21wb25lbnRzL3RhYmxlL0NhdGVnb3J5XCI7XHJcblxyXG5pbXBvcnQgZmV0Y2hKc29uLCB7IEZldGNoRXJyb3IgfSBmcm9tIFwibGliL2ZldGNoSnNvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IE1hbmFnZUNhdGVnb3J5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZ2xvYmFsQWN0LCBnbG9iYWxDdHggfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBmbGV4IGZsZXgtY29sIGdhcC15LTJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Rm9ybUNhdGVnb3J5XHJcbiAgICAgICAgICAvLyBEZWZhdWx0IEZvcm1cclxuICAgICAgICAgIGdsb2JhbEFjdD17Z2xvYmFsQWN0fVxyXG4gICAgICAgICAgZ2xvYmFsQ3R4PXtnbG9iYWxDdHh9XHJcbiAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiBcImFkZFwiLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3J5OiBlLmN1cnJlbnRUYXJnZXQuY2F0ZWdvcnkudmFsdWUsXHJcbiAgICAgICAgICAgICAgdXJpOiBcImNhdGVnb3J5L2FkZFwiLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYm9keSk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGZldGNoSnNvbihcIi9hcGkvcHJvdC9wb3N0XCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9kYXNoYm9hcmQvY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKGVycm9yLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNlYXJjaENhdGVnb3J5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxDYXRlZ29yeVRhYmxlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbmFnZUNhdGVnb3J5O1xyXG5NYW5hZ2VDYXRlZ29yeS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJnZXRMYXlvdXQiLCJHbG9iYWxDb250ZXh0IiwiRm9ybUNhdGVnb3J5IiwiU2VhcmNoQ2F0ZWdvcnkiLCJDYXRlZ29yeVRhYmxlIiwiZmV0Y2hKc29uIiwiRmV0Y2hFcnJvciIsInVzZVJvdXRlciIsIk1hbmFnZUNhdGVnb3J5IiwiZ2xvYmFsQWN0IiwiZ2xvYmFsQ3R4IiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImUiLCJib2R5IiwicHJldmVudERlZmF1bHQiLCJzZXRJc0ZldGNoIiwibWV0aG9kIiwiY2F0ZWdvcnkiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ1cmkiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJlcnJvciIsInNldEVycm9yTXNnIiwiZGF0YSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboardSKI/category.js\n");

/***/ })

});