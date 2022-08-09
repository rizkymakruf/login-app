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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_form_FormReportOutlet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/form/FormReportOutlet */ \"./components/form/FormReportOutlet.js\");\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var components_table_ViewReportByProductOutlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/table/ViewReportByProductOutlet */ \"./components/table/ViewReportByProductOutlet.js\");\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Report = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_6__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), dataReport = ref1[0], setDataReport = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0), totalRows = ref2[0], setTotalRows = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(10), perPage = ref3[0], setPerPage = ref3[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({}), newBody = ref4[0], setNewBody = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), report = ref5[0], setReport = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        globalAct.setAdminMode(\"outlet\");\n        globalAct.setFullname(props.fullName);\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n        globalAct.setSki(props.ski);\n        globalAct.setCurrentBrand(props.adminMode);\n        globalAct.setOutletPict(props.outletPict);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        console.log(\"new\", newBody);\n    }, [\n        newBody\n    ]);\n    var handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(page) {\n        setNewBody(_objectSpread({}, newBody, {\n            index: (page - 1) * perPage\n        }));\n        fetchData();\n    }, [\n        newBody\n    ]);\n    var handlePerRowsChange = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(newPerPage, page) {\n        setPerPage(newPerPage);\n        setNewBody(_objectSpread({}, newBody, {\n            index: 0,\n            length: newPerPage\n        }));\n        fetchData();\n    }, [\n        newBody\n    ]);\n    var fetchData = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(_asyncToGenerator(G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var res;\n        return G_SKI_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    globalAct.setIsFetch(true);\n                    console.log(\"fetch\", newBody);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"/api/prot/post\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(newBody)\n                    });\n                case 5:\n                    res = _ctx.sent;\n                    console.log(\"report\", res);\n                    setDataReport(res.data);\n                    setTotalRows(res.total);\n                    _ctx.next = 15;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                    console.log(\"error\", _ctx.t0);\n                    if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_8__.FetchError)) {\n                        globalAct.setErrorMsg(_ctx.t0.data.message);\n                    } else {\n                        globalAct.setErrorMsg(\"An unexpected error happened\");\n                    }\n                case 15:\n                    globalAct.setIsFetch(false);\n                case 16:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                11\n            ]\n        ]);\n    })), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full p-4 gap-y-2 space-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"p-3 border border-gray-300 rounded-md hover:shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_form_FormReportOutlet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    currentBrand: props.adminMode,\n                    setDataReport: setDataReport,\n                    setNewBody: setNewBody,\n                    setTotalRows: setTotalRows,\n                    setReport: setReport\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, _this),\n            report && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_ViewReportByProductOutlet__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    data: dataReport,\n                    totalRows: totalRows,\n                    handlePageChange: handlePageChange,\n                    handlePerRowsChange: handlePerRowsChange\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                    lineNumber: 141,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n                lineNumber: 140,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\report\\\\[pid].js\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, _this);\n};\n_s(Report, \"53jx/Ayz2Pyp6Y1fUM+1dSa2fvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Report;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Report);\nReport.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"Report\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvcmVwb3J0L1twaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0U7QUFDWDtBQUNiO0FBRTZCO0FBSXRCO0FBQ29DO0FBQzdCOztBQXNEdEQsSUFBTVcsTUFBTSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDeEIsSUFBaUNULEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDSSx5REFBYSxDQUFDLEVBQWxETSxTQUFTLEdBQWdCVixHQUF5QixDQUFsRFUsU0FBUyxFQUFFQyxTQUFTLEdBQUtYLEdBQXlCLENBQXZDVyxTQUFTO0lBQzVCLElBQW9DVCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBbEVsRCxVQWtFbUIsR0FBbUJBLElBQVksR0FBL0IsRUFsRW5CLGFBa0VrQyxHQUFJQSxJQUFZLEdBQWhCO0lBQ2hDLElBQWtDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBbkUvQyxTQW1Fa0IsR0FBa0JBLElBQVcsR0FBN0IsRUFuRWxCLFlBbUVnQyxHQUFJQSxJQUFXLEdBQWY7SUFDOUIsSUFBOEJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFwRTVDLE9Bb0VnQixHQUFnQkEsSUFBWSxHQUE1QixFQXBFaEIsVUFvRTRCLEdBQUlBLElBQVksR0FBaEI7SUFDMUIsSUFBTWdCLE1BQU0sR0FBR25CLHNEQUFTLEVBQUU7SUFDMUIsSUFBOEJHLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUF0RTVDLE9Bc0VnQixHQUFnQkEsSUFBWSxHQUE1QixFQXRFaEIsVUFzRTRCLEdBQUlBLElBQVksR0FBaEI7SUFDMUIsSUFBNEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUF2RTdDLE1BdUVlLEdBQWVBLElBQWUsR0FBOUIsRUF2RWYsU0F1RTBCLEdBQUlBLElBQWUsR0FBbkI7SUFFeEJELGdEQUFTLENBQUMsV0FBTTtRQUNkVSxTQUFTLENBQUNZLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQ1osU0FBUyxDQUFDYSxXQUFXLENBQUNmLEtBQUssQ0FBQ2dCLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDZCxTQUFTLENBQUNlLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QmYsU0FBUyxDQUFDZ0IsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCaEIsU0FBUyxDQUFDaUIsTUFBTSxDQUFDbkIsS0FBSyxDQUFDb0IsR0FBRyxDQUFDLENBQUM7UUFDNUJsQixTQUFTLENBQUNtQixlQUFlLENBQUNyQixLQUFLLENBQUNzQixTQUFTLENBQUMsQ0FBQztRQUMzQ3BCLFNBQVMsQ0FBQ3FCLGFBQWEsQ0FBQ3ZCLEtBQUssQ0FBQ3dCLFVBQVUsQ0FBQyxDQUFDO0tBQzNDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUGhDLGdEQUFTLENBQUMsV0FBTTtRQUNkaUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFaEIsT0FBTyxDQUFDLENBQUM7S0FDN0IsRUFBRTtRQUFDQSxPQUFPO0tBQUMsQ0FBQyxDQUFDO0lBRWQsSUFBTWlCLGdCQUFnQixHQUFHakMsa0RBQVcsQ0FDbEMsU0FBQ2tDLElBQUksRUFBSztRQUNSakIsVUFBVSxDQUFDLGtCQUFLRCxPQUFPO1lBQUVtQixLQUFLLEVBQUUsQ0FBQ0QsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHckIsT0FBTztVQUFFLENBQUMsQ0FBQztRQUN4RHVCLFNBQVMsRUFBRSxDQUFDO0tBQ2IsRUFDRDtRQUFDcEIsT0FBTztLQUFDLENBQ1Y7SUFFRCxJQUFNcUIsbUJBQW1CLEdBQUdyQyxrREFBVyxDQUNyQyxTQUFDc0MsVUFBVSxFQUFFSixJQUFJLEVBQUs7UUFDcEJwQixVQUFVLENBQUN3QixVQUFVLENBQUMsQ0FBQztRQUN2QnJCLFVBQVUsQ0FBQyxrQkFBS0QsT0FBTztZQUFFbUIsS0FBSyxFQUFFLENBQUM7WUFBRUksTUFBTSxFQUFFRCxVQUFVO1VBQUUsQ0FBQyxDQUFDO1FBQ3pERixTQUFTLEVBQUUsQ0FBQztLQUNiLEVBQ0Q7UUFBQ3BCLE9BQU87S0FBQyxDQUNWO0lBRUQsSUFBTW9CLFNBQVMsR0FBR3BDLGtEQUFXLENBQUMsZ0tBQVk7WUFJaEN3QyxHQUFHOzs7O29CQUhYaEMsU0FBUyxDQUFDZSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVoQixPQUFPLENBQUMsQ0FBQzs7OzJCQUVWYix5REFBUyxDQUFDLGdCQUFnQixFQUFFO3dCQUM1Q3NDLE1BQU0sRUFBRSxNQUFNO3dCQUNkQyxPQUFPLEVBQUU7NEJBQUUsY0FBYyxFQUFFLGtCQUFrQjt5QkFBRTt3QkFDL0NDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM3QixPQUFPLENBQUM7cUJBQzlCLENBQUM7O29CQUpJd0IsR0FBRyxZQUlQO29CQUNGVCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVRLEdBQUcsQ0FBQyxDQUFDO29CQUMzQjlCLGFBQWEsQ0FBQzhCLEdBQUcsQ0FBQ00sSUFBSSxDQUFDLENBQUM7b0JBQ3hCbEMsWUFBWSxDQUFDNEIsR0FBRyxDQUFDTyxLQUFLLENBQUMsQ0FBQzs7Ozs7O29CQUV4QmhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sVUFBUSxDQUFDO29CQUM1QixJQUFJZ0IsV0FBMkIsVUFBVjVDLHFEQUFVLEdBQUU7d0JBQy9CSSxTQUFTLENBQUNnQixXQUFXLENBQUN3QixRQUFNRixJQUFJLENBQUNHLE9BQU8sQ0FBQyxDQUFDO3FCQUMzQyxNQUFNO3dCQUNMekMsU0FBUyxDQUFDZ0IsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7cUJBQ3ZEOztvQkFFSGhCLFNBQVMsQ0FBQ2UsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7OztLQUM3QixJQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNFLDhEQUFDMkIsS0FBRztRQUFDQyxTQUFTLEVBQUMsOEJBQStCOzswQkFDNUMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx1REFBdUQ7MEJBQ3BFLDRFQUFDekQsd0VBQWdCO29CQUNmMEQsWUFBWSxFQUFFOUMsS0FBSyxDQUFDc0IsU0FBUztvQkFDN0JsQixhQUFhLEVBQUVBLGFBQWE7b0JBQzVCTyxVQUFVLEVBQUVBLFVBQVU7b0JBQ3RCTCxZQUFZLEVBQUVBLFlBQVk7b0JBQzFCTyxTQUFTLEVBQUVBLFNBQVM7Ozs7O3lCQUNwQjs7Ozs7cUJBQ0U7WUFDTEQsTUFBTSxrQkFDTCw4REFBQ2dDLEtBQUc7MEJBQ0YsNEVBQUNoRCxrRkFBeUI7b0JBQ3hCNEMsSUFBSSxFQUFFckMsVUFBVTtvQkFDaEJFLFNBQVMsRUFBRUEsU0FBUztvQkFDcEJzQixnQkFBZ0IsRUFBRUEsZ0JBQWdCO29CQUNsQ0ksbUJBQW1CLEVBQUVBLG1CQUFtQjs7Ozs7eUJBQ3hDOzs7OztxQkFDRTs7Ozs7O2FBRUosQ0FDTjtDQUNIO0dBdEZLaEMsTUFBTTs7UUFLS1Qsa0RBQVM7OztBQUxwQlMsS0FBQUEsTUFBTTs7QUF3RlosK0RBQWVBLE1BQU0sRUFBQztBQUN0QkEsTUFBTSxDQUFDVixTQUFTLEdBQUdBLCtEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3JlcG9ydC9bcGlkXS5qcz80YjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtUmVwb3J0T3V0bGV0IGZyb20gXCJjb21wb25lbnRzL2Zvcm0vRm9ybVJlcG9ydE91dGxldFwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJsaWIvc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb25Tc3IgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcclxuaW1wb3J0IHsgY2hlY2tVaWQsIGZpbmRPdXRsZXQgfSBmcm9tIFwibGliL2FyYW5nb0RiXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCByZXRPYmplY3QsIGNoZWNrZXJUb2tlbiB9IGZyb20gXCJsaWIvbGlzdEZ1bmN0XCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuaW1wb3J0IFZpZXdSZXBvcnRCeVByb2R1Y3RPdXRsZXQgZnJvbSBcImNvbXBvbmVudHMvdGFibGUvVmlld1JlcG9ydEJ5UHJvZHVjdE91dGxldFwiO1xyXG5pbXBvcnQgZmV0Y2hKc29uLCB7IEZldGNoRXJyb3IgfSBmcm9tIFwibGliL2ZldGNoSnNvblwiO1xyXG5cclxuLy8gc3NyXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoSXJvblNlc3Npb25Tc3IoYXN5bmMgZnVuY3Rpb24gKHtcclxuICByZXEsXHJcbiAgcmVzLFxyXG4gIHF1ZXJ5LFxyXG59KSB7XHJcbiAgdmFyIHVzZXIgPSBhd2FpdCByZXEuc2Vzc2lvbi51c2VyO1xyXG4gIGlmICghdXNlciB8fCAhdXNlci5hY2Nlc3NfdG9rZW4pIHtcclxuICAgIC8vIHJldE9iamVjdCh7IGlzTG9naW46IGZhbHNlIH0pO1xyXG4gICAgcmV0dXJuIHJlZGlyZWN0KFwiL1wiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25Ub2tlbiA9IGF3YWl0IGNoZWNrZXJUb2tlbih1c2VyKTtcclxuICBpZiAodmFsaWRhdGlvblRva2VuLmVycm9yKSB7XHJcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5kZXN0cm95KCk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbGlkYXRpb25Ub2tlbi5zdGF0dXMgPT09IFwicmVmcmVzaFwiKSB7XHJcbiAgICB1c2VyID0ge1xyXG4gICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICBhY2Nlc3NfdG9rZW46IHZhbGlkYXRpb25Ub2tlbi5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgIHJlZnJlc2hfdG9rZW46IHZhbGlkYXRpb25Ub2tlbi5yZWZyZXNoX3Rva2VuLFxyXG4gICAgfTtcclxuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB1c2VyO1xyXG4gICAgYXdhaXQgcmVxLnNlc3Npb24uc2F2ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdWlkID0gSlNPTi5wYXJzZShhdG9iKHVzZXIuYWNjZXNzX3Rva2VuLnNwbGl0KFwiLlwiKVsxXSkpO1xyXG4gIGNvbnN0IGNoZWNrVWlkcyA9IGF3YWl0IGNoZWNrVWlkKHVpZC51c2VyX2lkKTtcclxuICBsZXQgb3V0bGV0ID0gW107XHJcbiAgaWYgKGNoZWNrVWlkc1swXS5vdXRsZXQgIT09IFwiXCIpIHtcclxuICAgIG91dGxldCA9IGF3YWl0IGZpbmRPdXRsZXQoY2hlY2tVaWRzWzBdPy5vdXRsZXQpO1xyXG4gICAgaWYgKG91dGxldFswXS5zaG9ydG5hbWUgIT09IHF1ZXJ5LnBpZCkge1xyXG4gICAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGNoZWNrVWlkcy5sZW5ndGggPCAxKSB7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJldE9iamVjdCh7XHJcbiAgICBpc0xvZ2luOiB0cnVlLFxyXG4gICAgZnVsbE5hbWU6IGNoZWNrVWlkc1swXS5mdWxsbmFtZSxcclxuICAgIGFkbWluTW9kZTogb3V0bGV0Lmxlbmd0aCA+IDAgPyBvdXRsZXRbMF0/LnNob3J0bmFtZSA6IHF1ZXJ5LnBpZCxcclxuICAgIHNraTogY2hlY2tVaWRzWzBdLm91dGxldCAhPT0gXCJcIiA/IGZhbHNlIDogdHJ1ZSxcclxuICAgIG91dGxldFBpY3Q6IFwiL2ltZy9za2kucG5nXCIsXHJcbiAgfSk7XHJcbn0sXHJcbnNlc3Npb25PcHRpb25zKTtcclxuXHJcbmNvbnN0IFJlcG9ydCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgW2RhdGFSZXBvcnQsIHNldERhdGFSZXBvcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0b3RhbFJvd3MsIHNldFRvdGFsUm93c10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW25ld0JvZHksIHNldE5ld0JvZHldID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtyZXBvcnQsIHNldFJlcG9ydF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnbG9iYWxBY3Quc2V0QWRtaW5Nb2RlKFwib3V0bGV0XCIpO1xyXG4gICAgZ2xvYmFsQWN0LnNldEZ1bGxuYW1lKHByb3BzLmZ1bGxOYW1lKTtcclxuICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKGZhbHNlKTtcclxuICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIlwiKTtcclxuICAgIGdsb2JhbEFjdC5zZXRTa2kocHJvcHMuc2tpKTtcclxuICAgIGdsb2JhbEFjdC5zZXRDdXJyZW50QnJhbmQocHJvcHMuYWRtaW5Nb2RlKTtcclxuICAgIGdsb2JhbEFjdC5zZXRPdXRsZXRQaWN0KHByb3BzLm91dGxldFBpY3QpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibmV3XCIsIG5ld0JvZHkpO1xyXG4gIH0sIFtuZXdCb2R5XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChwYWdlKSA9PiB7XHJcbiAgICAgIHNldE5ld0JvZHkoeyAuLi5uZXdCb2R5LCBpbmRleDogKHBhZ2UgLSAxKSAqIHBlclBhZ2UgfSk7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSxcclxuICAgIFtuZXdCb2R5XVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBlclJvd3NDaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChuZXdQZXJQYWdlLCBwYWdlKSA9PiB7XHJcbiAgICAgIHNldFBlclBhZ2UobmV3UGVyUGFnZSk7XHJcbiAgICAgIHNldE5ld0JvZHkoeyAuLi5uZXdCb2R5LCBpbmRleDogMCwgbGVuZ3RoOiBuZXdQZXJQYWdlIH0pO1xyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sXHJcbiAgICBbbmV3Qm9keV1cclxuICApO1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBnbG9iYWxBY3Quc2V0SXNGZXRjaCh0cnVlKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hcIiwgbmV3Qm9keSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEpzb24oXCIvYXBpL3Byb3QvcG9zdFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3Qm9keSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInJlcG9ydFwiLCByZXMpO1xyXG4gICAgICBzZXREYXRhUmVwb3J0KHJlcy5kYXRhKTtcclxuICAgICAgc2V0VG90YWxSb3dzKHJlcy50b3RhbCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcclxuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRmV0Y2hFcnJvcikge1xyXG4gICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhlcnJvci5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdsb2JhbEFjdC5zZXRFcnJvck1zZyhcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGdsb2JhbEFjdC5zZXRJc0ZldGNoKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTQgIGdhcC15LTIgc3BhY2UteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBob3ZlcjpzaGFkb3ctbWRcIj5cclxuICAgICAgICA8Rm9ybVJlcG9ydE91dGxldFxyXG4gICAgICAgICAgY3VycmVudEJyYW5kPXtwcm9wcy5hZG1pbk1vZGV9XHJcbiAgICAgICAgICBzZXREYXRhUmVwb3J0PXtzZXREYXRhUmVwb3J0fVxyXG4gICAgICAgICAgc2V0TmV3Qm9keT17c2V0TmV3Qm9keX1cclxuICAgICAgICAgIHNldFRvdGFsUm93cz17c2V0VG90YWxSb3dzfVxyXG4gICAgICAgICAgc2V0UmVwb3J0PXtzZXRSZXBvcnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtyZXBvcnQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Vmlld1JlcG9ydEJ5UHJvZHVjdE91dGxldFxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhUmVwb3J0fVxyXG4gICAgICAgICAgICB0b3RhbFJvd3M9e3RvdGFsUm93c31cclxuICAgICAgICAgICAgaGFuZGxlUGFnZUNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cclxuICAgICAgICAgICAgaGFuZGxlUGVyUm93c0NoYW5nZT17aGFuZGxlUGVyUm93c0NoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0O1xyXG5SZXBvcnQuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiRm9ybVJlcG9ydE91dGxldCIsImdldExheW91dCIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiR2xvYmFsQ29udGV4dCIsIlZpZXdSZXBvcnRCeVByb2R1Y3RPdXRsZXQiLCJmZXRjaEpzb24iLCJGZXRjaEVycm9yIiwiUmVwb3J0IiwicHJvcHMiLCJnbG9iYWxDdHgiLCJnbG9iYWxBY3QiLCJkYXRhUmVwb3J0Iiwic2V0RGF0YVJlcG9ydCIsInRvdGFsUm93cyIsInNldFRvdGFsUm93cyIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwicm91dGVyIiwibmV3Qm9keSIsInNldE5ld0JvZHkiLCJyZXBvcnQiLCJzZXRSZXBvcnQiLCJzZXRBZG1pbk1vZGUiLCJzZXRGdWxsbmFtZSIsImZ1bGxOYW1lIiwic2V0SXNGZXRjaCIsInNldEVycm9yTXNnIiwic2V0U2tpIiwic2tpIiwic2V0Q3VycmVudEJyYW5kIiwiYWRtaW5Nb2RlIiwic2V0T3V0bGV0UGljdCIsIm91dGxldFBpY3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJpbmRleCIsImZldGNoRGF0YSIsImhhbmRsZVBlclJvd3NDaGFuZ2UiLCJuZXdQZXJQYWdlIiwibGVuZ3RoIiwicmVzIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInRvdGFsIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY3VycmVudEJyYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/report/[pid].js\n");

/***/ })

});