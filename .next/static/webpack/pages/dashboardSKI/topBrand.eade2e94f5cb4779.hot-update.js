"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboardSKI/topBrand",{

/***/ "./components/table/TopBrandList.js":
/*!******************************************!*\
  !*** ./components/table/TopBrandList.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopBrandListTable = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_2__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var data = props.brand;\n    var columns = [\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Brand Name\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, _this),\n            grow: 10,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: a.name\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center font-bold text-red-500\",\n                children: \"Top Brand\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this),\n            grow: 2,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-center gap-x-2 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return globalAct.setModal(\"addedbrand\");\n                        },\n                        className: \"bg-green-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-green-500/50 shadow-md flex gap-x-2 text-xs text-green-500 hover:w-24 duration-150 hover:before:content-['Add'] border border-green-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            class: \"h-5 w-5 text-green-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            \"stroke-width\": \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                \"stroke-linecap\": \"round\",\n                                \"stroke-linejoin\": \"round\",\n                                d: \"M12 4v16m8-8H4\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this1);\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto relative \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" py-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 font-bold text-md\",\n                    children: \"Brand List\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-2 rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    columns: columns,\n                    data: data,\n                    responsive: true,\n                    highlightOnHover: true,\n                    pagination: true\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopBrandListTable, \"5kzkpIpbCE9lHKY9udWwstr+EQA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = TopBrandListTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBrandListTable);\nvar _c;\n$RefreshReg$(_c, \"TopBrandListTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL1RvcEJyYW5kTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7QUFBbUQ7QUFDSjtBQUNaO0FBQ0s7O0FBRXhDLElBQU1JLGlCQUFpQixHQUFHLGdCQUFRO1FBQVAsc0ZBQUU7OztJQUMzQixJQUFpQ0YsR0FBeUIsR0FBekJBLGlEQUFVLENBQUNELHlEQUFhLENBQUMsRUFBbERJLFNBQVMsR0FBZ0JILEdBQXlCLENBQWxERyxTQUFTLEVBQUVDLFNBQVMsR0FBS0osR0FBeUIsQ0FBdkNJLFNBQVM7SUFDNUIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQU1LLElBQUksR0FBR0MsS0FBSyxDQUFDQyxLQUFLO0lBRXhCLElBQU1DLE9BQU8sR0FBRztRQUNkO1lBQ0VDLElBQUksZ0JBQUUsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx3QkFBd0I7MEJBQUMsWUFBVTs7Ozs7cUJBQU07WUFDOURDLElBQUksRUFBRSxFQUFFO1lBQ1JDLElBQUksRUFBRSxTQUFDQyxDQUFDO3FDQUNOLDhEQUFDSixLQUFHO29CQUFDQyxTQUFTLEVBQUMsd0NBQXdDOzhCQUNyRCw0RUFBQ0ksR0FBQzt3QkFBQ0osU0FBUyxFQUFDLG1CQUFtQjtrQ0FBRUcsQ0FBQyxDQUFDTCxJQUFJOzs7Ozs4QkFBSzs7Ozs7MEJBQ3pDO2FBQ1A7U0FDRjtRQUNEO1lBQ0VBLElBQUksZ0JBQ0YsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyQ0FBMkM7MEJBQUMsV0FFM0Q7Ozs7O3FCQUFNO1lBRVJDLElBQUksRUFBRSxDQUFDO1lBQ1BDLElBQUksRUFBRSxTQUFDQyxDQUFDO3FDQUNOLDhEQUFDSixLQUFHO29CQUFDQyxTQUFTLEVBQUMsMERBQTBEOzhCQUN2RSw0RUFBQ0ssUUFBTTt3QkFDTEMsT0FBTyxFQUFFO21DQUFNZCxTQUFTLENBQUNlLFFBQVEsQ0FBQyxZQUFZLENBQUM7eUJBQUE7d0JBQy9DUCxTQUFTLEVBQ1AsaU5BQWlOO2tDQUduTiw0RUFBQ1EsS0FBRzs0QkFDRkMsS0FBSyxFQUFDLDRCQUE0Qjs0QkFDbENDLEtBQUssRUFBQyx3QkFBd0I7NEJBQzlCQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsT0FBTyxFQUFDLFdBQVc7NEJBQ25CQyxNQUFNLEVBQUMsY0FBYzs0QkFDckJDLGNBQVksRUFBQyxHQUFHO3NDQUVoQiw0RUFBQ0MsTUFBSTtnQ0FDSEMsZ0JBQWMsRUFBQyxPQUFPO2dDQUN0QkMsaUJBQWUsRUFBQyxPQUFPO2dDQUN2QkMsQ0FBQyxFQUFDLGdCQUFnQjs7Ozs7c0NBQ2xCOzs7OztrQ0FDRTs7Ozs7OEJBQ0M7Ozs7OzBCQUNMO2FBQ1A7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNuQixLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7OzBCQUN0Qyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLE9BQU87MEJBQ3BCLDRFQUFDSSxHQUFDO29CQUFDSixTQUFTLEVBQUMsZ0NBQWdDOzhCQUFDLFlBQVU7Ozs7O3lCQUFJOzs7OztxQkFDeEQ7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7MEJBQ2xDLDRFQUFDZCxrRUFBUztvQkFDUlcsT0FBTyxFQUFFQSxPQUFPO29CQUNoQkgsSUFBSSxFQUFFQSxJQUFJO29CQUNWeUIsVUFBVSxFQUFFLElBQUk7b0JBQ2hCQyxnQkFBZ0IsRUFBRSxJQUFJO29CQUN0QkMsVUFBVTs7Ozs7eUJBQ1Y7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0FsRUsvQixpQkFBaUI7O1FBRU5ELGtEQUFTOzs7QUFGcEJDLEtBQUFBLGlCQUFpQjtBQW9FdkIsK0RBQWVBLGlCQUFpQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGFibGUvVG9wQnJhbmRMaXN0LmpzPzM2MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCJjb250ZXh0L2dsb2JhbFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgVG9wQnJhbmRMaXN0VGFibGUgPSAoe30pID0+IHtcclxuICBjb25zdCB7IGdsb2JhbEN0eCwgZ2xvYmFsQWN0IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRhdGEgPSBwcm9wcy5icmFuZDtcclxuXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+QnJhbmQgTmFtZTwvZGl2PixcclxuICAgICAgZ3JvdzogMTAsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHB5LTEgZmxleCBmbGV4LXJvdyBnYXAtMVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGRcIj57YS5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+XHJcbiAgICAgICAgICBUb3AgQnJhbmRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgICAgZ3JvdzogMixcclxuICAgICAgY2VsbDogKGEpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC14LTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdsb2JhbEFjdC5zZXRNb2RhbChcImFkZGVkYnJhbmRcIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgXCJiZy1ncmVlbi01MDAvMzAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1tZCBob3ZlcjpiZy1ncmVlbi01MDAvNTAgc2hhZG93LW1kIGZsZXggZ2FwLXgtMiB0ZXh0LXhzIHRleHQtZ3JlZW4tNTAwIGhvdmVyOnctMjQgZHVyYXRpb24tMTUwIGhvdmVyOmJlZm9yZTpjb250ZW50LVsnQWRkJ10gYm9yZGVyIGJvcmRlci1ncmVlbi0zMDBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImgtNSB3LTUgdGV4dC1ncmVlbi01MDBcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xMiA0djE2bTgtOEg0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJlbGF0aXZlIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBweS0zXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGZvbnQtYm9sZCB0ZXh0LW1kXCI+QnJhbmQgTGlzdDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgIDxEYXRhVGFibGVcclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgcmVzcG9uc2l2ZT17dHJ1ZX1cclxuICAgICAgICAgIGhpZ2hsaWdodE9uSG92ZXI9e3RydWV9XHJcbiAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQnJhbmRMaXN0VGFibGU7XHJcbiJdLCJuYW1lcyI6WyJEYXRhVGFibGUiLCJHbG9iYWxDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIlRvcEJyYW5kTGlzdFRhYmxlIiwiZ2xvYmFsQ3R4IiwiZ2xvYmFsQWN0Iiwicm91dGVyIiwiZGF0YSIsInByb3BzIiwiYnJhbmQiLCJjb2x1bW5zIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImdyb3ciLCJjZWxsIiwiYSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwic2V0TW9kYWwiLCJzdmciLCJ4bWxucyIsImNsYXNzIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJkIiwicmVzcG9uc2l2ZSIsImhpZ2hsaWdodE9uSG92ZXIiLCJwYWdpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/table/TopBrandList.js\n");

/***/ })

});