"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/report/[pid]",{

/***/ "./pages/dashboard/report/[pid].js":
/*!*****************************************!*\
  !*** ./pages/dashboard/report/[pid].js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_form_FormReportOutlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/form/FormReportOutlet */ \"./components/form/FormReportOutlet.js\");\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_table_ViewReportByProductOutlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/ViewReportByProductOutlet */ \"./components/table/ViewReportByProductOutlet.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Report = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_6__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), dataReport = ref1[0], setDataReport = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0), totalRows = ref2[0], setTotalRows = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(10), perPage = ref3[0], setPerPage = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}), newBody = ref4[0], setNewBody = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), report = ref5[0], setReport = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        globalAct.setAdminMode(\"outlet\");\n        globalAct.setFullname(props.fullName);\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n        globalAct.setSki(props.ski);\n        globalAct.setCurrentBrand(props.adminMode);\n        globalAct.setOutletPict(props.outletPict);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(\"new\", newBody);\n    }, [\n        newBody\n    ]);\n    var handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(page) {\n        setNewBody(_objectSpread({}, newBody, {\n            index: (page - 1) * perPage\n        }));\n        fetchData();\n    }, [\n        newBody\n    ]);\n    var handlePerRowsChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(newPerPage, page) {\n        setPerPage(newPerPage);\n        setNewBody(_objectSpread({}, newBody, {\n            index: 0,\n            length: newPerPage\n        }));\n        fetchData();\n    }, [\n        newBody\n    ]);\n    var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(_asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    globalAct.setIsFetch(true);\n                    console.log(newBody);\n                    // try {\n                    //   const res = await fetchJson(\"/api/prot/post\", {\n                    //     method: \"POST\",\n                    //     headers: { \"Content-Type\": \"application/json\" },\n                    //     body: JSON.stringify(newBody),\n                    //   });\n                    //   console.log(\"report\", res);\n                    //   setDataReport(res.data);\n                    //   setTotalRows(res.total);\n                    // } catch (error) {\n                    //   console.log(\"error\", error);\n                    //   if (error instanceof FetchError) {\n                    //     globalAct.setErrorMsg(error.data.message);\n                    //   } else {\n                    //     globalAct.setErrorMsg(\"An unexpected error happened\");\n                    //   }\n                    // }\n                    globalAct.setIsFetch(false);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full p-4 gap-y-2 space-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"p-3 border border-gray-300 rounded-md hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormReportOutlet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    currentBrand: props.adminMode,\n                    setDataReport: setDataReport,\n                    setNewBody: setNewBody,\n                    setTotalRows: setTotalRows,\n                    setReport: setReport\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, _this),\n            report && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_ViewReportByProductOutlet__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    data: dataReport,\n                    totalRows: totalRows,\n                    handlePageChange: handlePageChange,\n                    handlePerRowsChange: handlePerRowsChange\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, _this);\n};\n_s(Report, \"53jx/Ayz2Pyp6Y1fUM+1dSa2fvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Report;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Report);\nReport.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"Report\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvcmVwb3J0L1twaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRTtBQUNYO0FBQ2I7QUFFNkI7QUFJdEI7QUFDb0M7QUFDN0I7O0FBc0R0RCxJQUFNVyxNQUFNLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUN4QixJQUFpQ1QsR0FBeUIsR0FBekJBLGlEQUFVLENBQUNJLHlEQUFhLENBQUMsRUFBbERNLFNBQVMsR0FBZ0JWLEdBQXlCLENBQWxEVSxTQUFTLEVBQUVDLFNBQVMsR0FBS1gsR0FBeUIsQ0FBdkNXLFNBQVM7SUFDNUIsSUFBb0NULElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFsRWxELFVBa0VtQixHQUFtQkEsSUFBWSxHQUEvQixFQWxFbkIsYUFrRWtDLEdBQUlBLElBQVksR0FBaEI7SUFDaEMsSUFBa0NBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFuRS9DLFNBbUVrQixHQUFrQkEsSUFBVyxHQUE3QixFQW5FbEIsWUFtRWdDLEdBQUlBLElBQVcsR0FBZjtJQUM5QixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXBFNUMsT0FvRWdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBcEVoQixVQW9FNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUMxQixJQUFNZ0IsTUFBTSxHQUFHbkIsc0RBQVMsRUFBRTtJQUMxQixJQUE4QkcsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXRFNUMsT0FzRWdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBdEVoQixVQXNFNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUMxQixJQUE0QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXZFN0MsTUF1RWUsR0FBZUEsSUFBZSxHQUE5QixFQXZF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O29CQUNwQnNCLGdCQUFnQixFQUFFQSxnQkFBZ0I7b0JBQ2xDSSxtQkFBbUIsRUFBRUEsbUJBQW1COzs7Ozt5QkFDeEM7Ozs7O3FCQUNFOzs7Ozs7YUFFSixDQUNOO0NBQ0g7R0F0RktoQyxNQUFNOztRQUtLVCxrREFBUzs7O0FBTHBCUyxLQUFBQSxNQUFNOztBQXdGWiwrREFBZUEsTUFBTSxFQUFDO0FBQ3RCQSxNQUFNLENBQUNWLFNBQVMsR0FBR0EsK0RBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQvcmVwb3J0L1twaWRdLmpzPzRiMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1SZXBvcnRPdXRsZXQgZnJvbSBcImNvbXBvbmVudHMvZm9ybS9Gb3JtUmVwb3J0T3V0bGV0XCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9OYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zIH0gZnJvbSBcImxpYi9zZXNzaW9uXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvblNzciB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xyXG5pbXBvcnQgeyBjaGVja1VpZCwgZmluZE91dGxldCB9IGZyb20gXCJsaWIvYXJhbmdvRGJcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3QsIHJldE9iamVjdCwgY2hlY2tlclRva2VuIH0gZnJvbSBcImxpYi9saXN0RnVuY3RcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCJjb250ZXh0L2dsb2JhbFwiO1xyXG5pbXBvcnQgVmlld1JlcG9ydEJ5UHJvZHVjdE91dGxldCBmcm9tIFwiY29tcG9uZW50cy90YWJsZS9WaWV3UmVwb3J0QnlQcm9kdWN0T3V0bGV0XCI7XHJcbmltcG9ydCBmZXRjaEpzb24sIHsgRmV0Y2hFcnJvciB9IGZyb20gXCJsaWIvZmV0Y2hKc29uXCI7XHJcblxyXG4vLyBzc3JcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihhc3luYyBmdW5jdGlvbiAoe1xyXG4gIHJlcSxcclxuICByZXMsXHJcbiAgcXVlcnksXHJcbn0pIHtcclxuICB2YXIgdXNlciA9IGF3YWl0IHJlcS5zZXNzaW9uLnVzZXI7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmFjY2Vzc190b2tlbikge1xyXG4gICAgLy8gcmV0T2JqZWN0KHsgaXNMb2dpbjogZmFsc2UgfSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblRva2VuID0gYXdhaXQgY2hlY2tlclRva2VuKHVzZXIpO1xyXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uZXJyb3IpIHtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLmRlc3Ryb3koKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsaWRhdGlvblRva2VuLnN0YXR1cyA9PT0gXCJyZWZyZXNoXCIpIHtcclxuICAgIHVzZXIgPSB7XHJcbiAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgIGFjY2Vzc190b2tlbjogdmFsaWRhdGlvblRva2VuLmFjY2Vzc190b2tlbixcclxuICAgICAgcmVmcmVzaF90b2tlbjogdmFsaWRhdGlvblRva2VuLnJlZnJlc2hfdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7XHJcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1aWQgPSBKU09OLnBhcnNlKGF0b2IodXNlci5hY2Nlc3NfdG9rZW4uc3BsaXQoXCIuXCIpWzFdKSk7XHJcbiAgY29uc3QgY2hlY2tVaWRzID0gYXdhaXQgY2hlY2tVaWQodWlkLnVzZXJfaWQpO1xyXG4gIGxldCBvdXRsZXQgPSBbXTtcclxuICBpZiAoY2hlY2tVaWRzWzBdLm91dGxldCAhPT0gXCJcIikge1xyXG4gICAgb3V0bGV0ID0gYXdhaXQgZmluZE91dGxldChjaGVja1VpZHNbMF0/Lm91dGxldCk7XHJcbiAgICBpZiAob3V0bGV0WzBdLnNob3J0bmFtZSAhPT0gcXVlcnkucGlkKSB7XHJcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY2hlY2tVaWRzLmxlbmd0aCA8IDEpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV0T2JqZWN0KHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICBmdWxsTmFtZTogY2hlY2tVaWRzWzBdLmZ1bGxuYW1lLFxyXG4gICAgYWRtaW5Nb2RlOiBvdXRsZXQubGVuZ3RoID4gMCA/IG91dGxldFswXT8uc2hvcnRuYW1lIDogcXVlcnkucGlkLFxyXG4gICAgc2tpOiBjaGVja1VpZHNbMF0ub3V0bGV0ICE9PSBcIlwiID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgb3V0bGV0UGljdDogXCIvaW1nL3NraS5wbmdcIixcclxuICB9KTtcclxufSxcclxuc2Vzc2lvbk9wdGlvbnMpO1xyXG5cclxuY29uc3QgUmVwb3J0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBnbG9iYWxDdHgsIGdsb2JhbEFjdCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBbZGF0YVJlcG9ydCwgc2V0RGF0YVJlcG9ydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3RvdGFsUm93cywgc2V0VG90YWxSb3dzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtwZXJQYWdlLCBzZXRQZXJQYWdlXSA9IHVzZVN0YXRlKDEwKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbmV3Qm9keSwgc2V0TmV3Qm9keV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3JlcG9ydCwgc2V0UmVwb3J0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdsb2JhbEFjdC5zZXRBZG1pbk1vZGUoXCJvdXRsZXRcIik7XHJcbiAgICBnbG9iYWxBY3Quc2V0RnVsbG5hbWUocHJvcHMuZnVsbE5hbWUpO1xyXG4gICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xyXG4gICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKFwiXCIpO1xyXG4gICAgZ2xvYmFsQWN0LnNldFNraShwcm9wcy5za2kpO1xyXG4gICAgZ2xvYmFsQWN0LnNldEN1cnJlbnRCcmFuZChwcm9wcy5hZG1pbk1vZGUpO1xyXG4gICAgZ2xvYmFsQWN0LnNldE91dGxldFBpY3QocHJvcHMub3V0bGV0UGljdCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJuZXdcIiwgbmV3Qm9keSk7XHJcbiAgfSwgW25ld0JvZHldKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHBhZ2UpID0+IHtcclxuICAgICAgc2V0TmV3Qm9keSh7IC4uLm5ld0JvZHksIGluZGV4OiAocGFnZSAtIDEpICogcGVyUGFnZSB9KTtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgW25ld0JvZHldXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGVyUm93c0NoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKG5ld1BlclBhZ2UsIHBhZ2UpID0+IHtcclxuICAgICAgc2V0UGVyUGFnZShuZXdQZXJQYWdlKTtcclxuICAgICAgc2V0TmV3Qm9keSh7IC4uLm5ld0JvZHksIGluZGV4OiAwLCBsZW5ndGg6IG5ld1BlclBhZ2UgfSk7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSxcclxuICAgIFtuZXdCb2R5XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3Qm9keSk7XHJcbiAgICAvLyB0cnkge1xyXG4gICAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEpzb24oXCIvYXBpL3Byb3QvcG9zdFwiLCB7XHJcbiAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIC8vICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9keSksXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcInJlcG9ydFwiLCByZXMpO1xyXG4gICAgLy8gICBzZXREYXRhUmVwb3J0KHJlcy5kYXRhKTtcclxuICAgIC8vICAgc2V0VG90YWxSb3dzKHJlcy50b3RhbCk7XHJcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuICAgIC8vICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgLy8gICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhlcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgLy8gICB9IGVsc2Uge1xyXG4gICAgLy8gICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTQgIGdhcC15LTIgc3BhY2UteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBob3ZlcjpzaGFkb3ctbWRcIj5cclxuICAgICAgICA8Rm9ybVJlcG9ydE91dGxldFxyXG4gICAgICAgICAgY3VycmVudEJyYW5kPXtwcm9wcy5hZG1pbk1vZGV9XHJcbiAgICAgICAgICBzZXREYXRhUmVwb3J0PXtzZXREYXRhUmVwb3J0fVxyXG4gICAgICAgICAgc2V0TmV3Qm9keT17c2V0TmV3Qm9keX1cclxuICAgICAgICAgIHNldFRvdGFsUm93cz17c2V0VG90YWxSb3dzfVxyXG4gICAgICAgICAgc2V0UmVwb3J0PXtzZXRSZXBvcnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtyZXBvcnQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Vmlld1JlcG9ydEJ5UHJvZHVjdE91dGxldFxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhUmVwb3J0fVxyXG4gICAgICAgICAgICB0b3RhbFJvd3M9e3RvdGFsUm93c31cclxuICAgICAgICAgICAgaGFuZGxlUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgaGFuZGxlUGVyUm93c0NoYW5nZT17aGFuZGxlUGVyUm93c0NoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0O1xyXG5SZXBvcnQuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiRm9ybVJlcG9ydE91dGxldCIsImdldExheW91dCIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiR2xvYmFsQ29udGV4dCIsIlZpZXdSZXBvcnRCeVByb2R1Y3RPdXRsZXQiLCJmZXRjaEpzb24iLCJGZXRjaEVycm9yIiwiUmVwb3J0IiwicHJvcHMiLCJnbG9iYWxDdHgiLCJnbG9iYWxBY3QiLCJkYXRhUmVwb3J0Iiwic2V0RGF0YVJlcG9ydCIsInRvdGFsUm93cyIsInNldFRvdGFsUm93cyIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwicm91dGVyIiwibmV3Qm9keSIsInNldE5ld0JvZHkiLCJyZXBvcnQiLCJzZXRSZXBvcnQiLCJzZXRBZG1pbk1vZGUiLCJzZXRGdWxsbmFtZSIsImZ1bGxOYW1lIiwic2V0SXNGZXRjaCIsInNldEVycm9yTXNnIiwic2V0U2tpIiwic2tpIiwic2V0Q3VycmVudEJyYW5kIiwiYWRtaW5Nb2RlIiwic2V0T3V0bGV0UGljdCIsIm91dGxldFBpY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJpbmRleCIsImZldGNoRGF0YSIsImhhbmRsZVBlclJvd3NDaGFuZ2UiLCJuZXdQZXJQYWdlIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY3VycmVudEJyYW5kIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/report/[pid].js\n");

/***/ })

});