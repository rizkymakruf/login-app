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

/***/ "./components/table/ProdukRekomenList.js":
/*!***********************************************!*\
  !*** ./components/table/ProdukRekomenList.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProdukRekomenListTable = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_2__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var recomd = props.recomd;\n    console.log(\"ppp\", props.recomd);\n    var columns = [\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Products\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, _this),\n            grow: 1,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex items-center flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: a.name\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex justify-center font-bold text-red-500\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this),\n            grow: 1,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-center gap-x-2 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return globalAct.setModal(\"addedRekomen\");\n                        },\n                        className: \"bg-green-500/30 items-center justify-center h-8 w-8 rounded-md flex gap-x-2 text-xs text-green-500 hover:w-24 duration-150 hover:before:content-['Add'] border border-green-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            class: \"h-5 w-5\",\n                            viewBox: \"0 0 20 20\",\n                            fill: \"currentColor\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                \"fill-rule\": \"evenodd\",\n                                d: \"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z\",\n                                \"clip-rule\": \"evenodd\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this1);\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto relative \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border-2 rounded-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                columns: columns,\n                data: data,\n                responsive: true,\n                highlightOnHover: true,\n                pagination: true\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ProdukRekomenList.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProdukRekomenListTable, \"IqQqJ5Zf8P3GCOa/Y1bmkODUh/c=\");\n_c = ProdukRekomenListTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProdukRekomenListTable);\nvar _c;\n$RefreshReg$(_c, \"ProdukRekomenListTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL1Byb2R1a1Jla29tZW5MaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDSjtBQUNaOztBQUVuQyxJQUFNRyxzQkFBc0IsR0FBRyxTQUFDQyxLQUFLLEVBQUs7OztJQUN4QyxJQUFpQ0YsR0FBeUIsR0FBekJBLGlEQUFVLENBQUNELHlEQUFhLENBQUMsRUFBbERJLFNBQVMsR0FBZ0JILEdBQXlCLENBQWxERyxTQUFTLEVBQUVDLFNBQVMsR0FBS0osR0FBeUIsQ0FBdkNJLFNBQVM7SUFDNUIsSUFBTUMsTUFBTSxHQUFHSCxLQUFLLENBQUNHLE1BQU07SUFFM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRUwsS0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQztJQUVqQyxJQUFNRyxPQUFPLEdBQUc7UUFDZDtZQUNFQyxJQUFJLGdCQUFFLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzBCQUFDLFVBQVE7Ozs7O3FCQUFNO1lBQzVEQyxJQUFJLEVBQUUsQ0FBQztZQUNQQyxJQUFJLEVBQUUsU0FBQ0MsQ0FBQztxQ0FDTiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFEQUFxRDs4QkFDbEUsNEVBQUNJLEdBQUM7d0JBQUNKLFNBQVMsRUFBQyxtQkFBbUI7a0NBQUVHLENBQUMsQ0FBQ0wsSUFBSTs7Ozs7OEJBQUs7Ozs7OzBCQUN6QzthQUNQO1NBQ0Y7UUFDRDtZQUNFQSxJQUFJLGdCQUNGLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbURBQW1EOzs7OztxQkFFNUQ7WUFFUkMsSUFBSSxFQUFFLENBQUM7WUFDUEMsSUFBSSxFQUFFLFNBQUNDLENBQUM7cUNBQ04sOERBQUNKLEtBQUc7b0JBQUNDLFNBQVMsRUFBQywwREFBMEQ7OEJBQ3ZFLDRFQUFDSyxRQUFNO3dCQUNMQyxPQUFPLEVBQUU7bUNBQU1iLFNBQVMsQ0FBQ2MsUUFBUSxDQUFDLGNBQWMsQ0FBQzt5QkFBQTt3QkFDakRQLFNBQVMsRUFDUCxpTEFBaUw7a0NBR25MLDRFQUFDUSxLQUFHOzRCQUNGQyxLQUFLLEVBQUMsNEJBQTRCOzRCQUNsQ0MsS0FBSyxFQUFDLFNBQVM7NEJBQ2ZDLE9BQU8sRUFBQyxXQUFXOzRCQUNuQkMsSUFBSSxFQUFDLGNBQWM7c0NBRW5CLDRFQUFDQyxNQUFJO2dDQUNIQyxXQUFTLEVBQUMsU0FBUztnQ0FDbkJDLENBQUMsRUFBQyw0R0FBNEc7Z0NBQzlHQyxXQUFTLEVBQUMsU0FBUzs7Ozs7c0NBQ25COzs7OztrQ0FDRTs7Ozs7OEJBQ0M7Ozs7OzBCQUNMO2FBQ1A7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNqQixLQUFHO1FBQUNDLFNBQVMsRUFBQyx5QkFBeUI7a0JBSXRDLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxxQkFBcUI7c0JBQ2xDLDRFQUFDYixrRUFBUztnQkFDUlUsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQm9CLElBQUksRUFBRUEsSUFBSTtnQkFDVkMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QkMsVUFBVTs7Ozs7cUJBQ1Y7Ozs7O2lCQUNFOzs7OzthQUNGLENBQ047Q0FDSDtHQWpFSzlCLHNCQUFzQjtBQUF0QkEsS0FBQUEsc0JBQXNCO0FBbUU1QiwrREFBZUEsc0JBQXNCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS9Qcm9kdWtSZWtvbWVuTGlzdC5qcz80YTEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhVGFibGUgZnJvbSBcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJvZHVrUmVrb21lbkxpc3RUYWJsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgcmVjb21kID0gcHJvcHMucmVjb21kO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInBwcFwiLCBwcm9wcy5yZWNvbWQpO1xyXG5cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXJlZC01MDBcIj5Qcm9kdWN0czwvZGl2PixcclxuICAgICAgZ3JvdzogMSxcclxuICAgICAgY2VsbDogKGEpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcHktMSBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXJvdyBnYXAtMVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGRcIj57YS5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXJlZC01MDBcIj5cclxuICAgICAgICAgIHsvKiBBZGQgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICAgIGdyb3c6IDEsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteC0yIHctZnVsbFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnbG9iYWxBY3Quc2V0TW9kYWwoXCJhZGRlZFJla29tZW5cIil9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgXCJiZy1ncmVlbi01MDAvMzAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtOCB3LTggcm91bmRlZC1tZCBmbGV4IGdhcC14LTIgdGV4dC14cyB0ZXh0LWdyZWVuLTUwMCBob3Zlcjp3LTI0IGR1cmF0aW9uLTE1MCBob3ZlcjpiZWZvcmU6Y29udGVudC1bJ0FkZCddIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJoLTUgdy01XCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMS0xMWExIDEgMCAxMC0yIDB2Mkg3YTEgMSAwIDEwMCAyaDJ2MmExIDEgMCAxMDIgMHYtMmgyYTEgMSAwIDEwMC0yaC0yVjd6XCJcclxuICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcmVsYXRpdmUgXCI+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIiBweS0zXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmVlbi01MDAgZm9udC1ib2xkIHRleHQtbWRcIj5Qcm9kdWN0IExpc3Q8L3A+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICByZXNwb25zaXZlPXt0cnVlfVxyXG4gICAgICAgICAgaGlnaGxpZ2h0T25Ib3Zlcj17dHJ1ZX1cclxuICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWtSZWtvbWVuTGlzdFRhYmxlO1xyXG4iXSwibmFtZXMiOlsiRGF0YVRhYmxlIiwiR2xvYmFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJQcm9kdWtSZWtvbWVuTGlzdFRhYmxlIiwicHJvcHMiLCJnbG9iYWxDdHgiLCJnbG9iYWxBY3QiLCJyZWNvbWQiLCJjb25zb2xlIiwibG9nIiwiY29sdW1ucyIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJncm93IiwiY2VsbCIsImEiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInNldE1vZGFsIiwic3ZnIiwieG1sbnMiLCJjbGFzcyIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImZpbGwtcnVsZSIsImQiLCJjbGlwLXJ1bGUiLCJkYXRhIiwicmVzcG9uc2l2ZSIsImhpZ2hsaWdodE9uSG92ZXIiLCJwYWdpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/table/ProdukRekomenList.js\n");

/***/ })

});