"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboardSKI/produkRekomen",{

/***/ "./components/table/ProdukRekomen.js":
/*!*******************************************!*\
  !*** ./components/table/ProdukRekomen.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProdukRekomenTable = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_2__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var recomd = props.recomd;\n    console.log(\"o\", props.recomd);\n    var columns = [\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Product Recomendation\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            grow: 2,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex items-center flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: a.title\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center font-bold text-red-500\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this),\n            grow: 3,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-center gap-x-2 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return globalAct.setModal(\"deleteRekomen\");\n                        },\n                        className: \"bg-red-500/30 items-center justify-center h-8 w-8 rounded-md flex gap-x-2 text-xs text-red-500 hover:w-24 duration-150 hover:before:content-['Remove'] border border-red-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            class: \"h-5 w-5 text-red-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            \"stroke-width\": \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                \"stroke-linecap\": \"round\",\n                                \"stroke-linejoin\": \"round\",\n                                d: \"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this1);\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto relative \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border-2 rounded-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                columns: columns,\n                data: recomd,\n                responsive: true,\n                highlightOnHover: true,\n                pagination: true\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomen.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProdukRekomenTable, \"IqQqJ5Zf8P3GCOa/Y1bmkODUh/c=\");\n_c = ProdukRekomenTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProdukRekomenTable);\nvar _c;\n$RefreshReg$(_c, \"ProdukRekomenTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL1Byb2R1a1Jla29tZW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFtRDtBQUNKO0FBQ1o7O0FBRW5DLElBQU1HLGtCQUFrQixHQUFHLFNBQUNDLEtBQUssRUFBSzs7O0lBQ3BDLElBQWlDRixHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0QseURBQWEsQ0FBQyxFQUFsREksU0FBUyxHQUFnQkgsR0FBeUIsQ0FBbERHLFNBQVMsRUFBRUMsU0FBUyxHQUFLSixHQUF5QixDQUF2Q0ksU0FBUztJQUM1QixJQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0csTUFBTTtJQUUzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFFTCxLQUFLLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLElBQU1HLE9BQU8sR0FBRztRQUNkO1lBQ0VDLElBQUksZ0JBQUUsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx3QkFBd0I7MEJBQUMsdUJBQXFCOzs7OztxQkFBTTtZQUN6RUMsSUFBSSxFQUFFLENBQUM7WUFDUEMsSUFBSSxFQUFFLFNBQUNDLENBQUM7cUNBQ04sOERBQUNKLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxREFBcUQ7OEJBQ2xFLDRFQUFDSSxHQUFDO3dCQUFDSixTQUFTLEVBQUMsbUJBQW1CO2tDQUFFRyxDQUFDLENBQUNFLEtBQUs7Ozs7OzhCQUFLOzs7OzswQkFDMUM7YUFDUDtTQUNGO1FBQ0Q7WUFDRVAsSUFBSSxnQkFDRiw4REFBQ0MsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDJDQUEyQzs7Ozs7cUJBRXBEO1lBRVJDLElBQUksRUFBRSxDQUFDO1lBQ1BDLElBQUksRUFBRSxTQUFDQyxDQUFDO3FDQUNOLDhEQUFDSixLQUFHO29CQUFDQyxTQUFTLEVBQUMsMERBQTBEOzhCQUN2RSw0RUFBQ00sUUFBTTt3QkFDTEMsT0FBTyxFQUFFO21DQUFNZCxTQUFTLENBQUNlLFFBQVEsQ0FBQyxlQUFlLENBQUM7eUJBQUE7d0JBQ2xEUixTQUFTLEVBQ1AsOEtBQThLO2tDQUdoTCw0RUFBQ1MsS0FBRzs0QkFDRkMsS0FBSyxFQUFDLDRCQUE0Qjs0QkFDbENDLEtBQUssRUFBQyxzQkFBc0I7NEJBQzVCQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsT0FBTyxFQUFDLFdBQVc7NEJBQ25CQyxNQUFNLEVBQUMsY0FBYzs0QkFDckJDLGNBQVksRUFBQyxHQUFHO3NDQUVoQiw0RUFBQ0MsTUFBSTtnQ0FDSEMsZ0JBQWMsRUFBQyxPQUFPO2dDQUN0QkMsaUJBQWUsRUFBQyxPQUFPO2dDQUN2QkMsQ0FBQyxFQUFDLDJDQUEyQzs7Ozs7c0NBQzdDOzs7OztrQ0FDRTs7Ozs7OEJBQ0M7Ozs7OzBCQUNMO2FBQ1A7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNwQixLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBSXRDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxxQkFBcUI7c0JBQ2xDLDRFQUFDYixrRUFBUztnQkFDUlUsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQnVCLElBQUksRUFBRTFCLE1BQU07Z0JBQ1oyQixVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCQyxVQUFVOzs7OztxQkFDVjs7Ozs7aUJBQ0U7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBbEVLakMsa0JBQWtCO0FBQWxCQSxLQUFBQSxrQkFBa0I7QUFvRXhCLCtEQUFlQSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhYmxlL1Byb2R1a1Jla29tZW4uanM/NWQ0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcImNvbnRleHQvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFByb2R1a1Jla29tZW5UYWJsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgcmVjb21kID0gcHJvcHMucmVjb21kO1xyXG5cclxuICBjb25zb2xlLmxvZyhcIm9cIiwgcHJvcHMucmVjb21kKTtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXJlZC01MDBcIj5Qcm9kdWN0IFJlY29tZW5kYXRpb248L2Rpdj4sXHJcbiAgICAgIGdyb3c6IDIsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHB5LTEgZmxleCBpdGVtcy1jZW50ZXIgZmxleC1yb3cgZ2FwLTFcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkXCI+e2EudGl0bGV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgIHsvKiBQcm9kdWN0IFJla29tZW5kYXRpb24gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICAgIGdyb3c6IDMsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteC0yIHctZnVsbFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnbG9iYWxBY3Quc2V0TW9kYWwoXCJkZWxldGVSZWtvbWVuXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIFwiYmctcmVkLTUwMC8zMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC04IHctOCByb3VuZGVkLW1kIGZsZXggZ2FwLXgtMiB0ZXh0LXhzIHRleHQtcmVkLTUwMCBob3Zlcjp3LTI0IGR1cmF0aW9uLTE1MCBob3ZlcjpiZWZvcmU6Y29udGVudC1bJ1JlbW92ZSddIGJvcmRlciBib3JkZXItcmVkLTMwMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaC01IHctNSB0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgICAgZD1cIk0xNSAxMkg5bTEyIDBhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIHJlbGF0aXZlIFwiPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgcHktM1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LWJvbGRcIj5SZWNvbWVuZGF0aW9uIExpc3Q8L3A+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgIGRhdGE9e3JlY29tZH1cclxuICAgICAgICAgIHJlc3BvbnNpdmU9e3RydWV9XHJcbiAgICAgICAgICBoaWdobGlnaHRPbkhvdmVyPXt0cnVlfVxyXG4gICAgICAgICAgcGFnaW5hdGlvblxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1a1Jla29tZW5UYWJsZTtcclxuIl0sIm5hbWVzIjpbIkRhdGFUYWJsZSIsIkdsb2JhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiUHJvZHVrUmVrb21lblRhYmxlIiwicHJvcHMiLCJnbG9iYWxDdHgiLCJnbG9iYWxBY3QiLCJyZWNvbWQiLCJjb25zb2xlIiwibG9nIiwiY29sdW1ucyIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJncm93IiwiY2VsbCIsImEiLCJwIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIiwic2V0TW9kYWwiLCJzdmciLCJ4bWxucyIsImNsYXNzIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJkIiwiZGF0YSIsInJlc3BvbnNpdmUiLCJoaWdobGlnaHRPbkhvdmVyIiwicGFnaW5hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/table/ProdukRekomen.js\n");

/***/ })

});