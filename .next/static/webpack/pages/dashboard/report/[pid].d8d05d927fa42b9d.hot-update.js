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

/***/ "./components/table/ViewReportByProductOutlet.js":
/*!*******************************************************!*\
  !*** ./components/table/ViewReportByProductOutlet.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\nvar _this = undefined;\n\n\n\nvar ViewReportByProductOutlet = function(param) {\n    var data = param.data, totalRows = param.totalRows, handlePageChange = param.handlePageChange, handlePerRowsChange = param.handlePerRowsChange;\n    var _this1 = _this;\n    var columns = [\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Product Name\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            grow: 10,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: a.name\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Sold\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, _this),\n            grow: 2,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: [\n                            a.order !== null ? a.order : 0,\n                            \" item\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this1);\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto relative \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"shadow-md border-2 rounded-md\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                // title={\n                //   <p className=\"text-red-500 font-bold text-sm\">Category List</p>\n                // }\n                columns: columns,\n                data: data,\n                responsive: true,\n                highlightOnHover: true,\n                paginationServer: true,\n                pagination: true,\n                paginationRowsPerPageOptions: [\n                    10\n                ],\n                paginationTotalRows: totalRows,\n                onChangeRowsPerPage: handlePerRowsChange,\n                onChangePage: handlePageChange\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\ViewReportByProductOutlet.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_c = ViewReportByProductOutlet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(ViewReportByProductOutlet));\nvar _c, _c1;\n$RefreshReg$(_c, \"ViewReportByProductOutlet\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RhYmxlL1ZpZXdSZXBvcnRCeVByb2R1Y3RPdXRsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBDO0FBQ1M7QUFFbkQsSUFBTUcseUJBQXlCLEdBQUcsZ0JBSzVCO1FBSkpDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxTQUFTLFNBQVRBLFNBQVMsRUFDVEMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0IsRUFDaEJDLG1CQUFtQixTQUFuQkEsbUJBQW1COztJQUVuQixJQUFNQyxPQUFPLEdBQUc7UUFDZDtZQUNFQyxJQUFJLGdCQUFFLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzBCQUFDLGNBQVk7Ozs7O3FCQUFNO1lBQ2hFQyxJQUFJLEVBQUUsRUFBRTtZQUNSQyxJQUFJLEVBQUUsU0FBQ0MsQ0FBQztxQ0FDTiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs4QkFDckQsNEVBQUNJLEdBQUM7d0JBQUNKLFNBQVMsRUFBQyxtQkFBbUI7a0NBQUVHLENBQUMsQ0FBQ0wsSUFBSTs7Ozs7OEJBQUs7Ozs7OzBCQUN6QzthQUNQO1NBQ0Y7UUFDRDtZQUNFQSxJQUFJLGdCQUFFLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzBCQUFDLE1BQUk7Ozs7O3FCQUFNO1lBQ3hEQyxJQUFJLEVBQUUsQ0FBQztZQUNQQyxJQUFJLEVBQUUsU0FBQ0MsQ0FBQztxQ0FDTiw4REFBQ0osS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs4QkFDckQsNEVBQUNJLEdBQUM7d0JBQUNKLFNBQVMsRUFBQyxtQkFBbUI7OzRCQUM3QkcsQ0FBQyxDQUFDRSxLQUFLLEtBQUssSUFBSSxHQUFHRixDQUFDLENBQUNFLEtBQUssR0FBRyxDQUFDOzRCQUFDLE9BQ2xDOzs7Ozs7OEJBQUk7Ozs7OzBCQUNBO2FBQ1A7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNOLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlCQUF5QjtrQkFDdEMsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLCtCQUErQjtzQkFDNUMsNEVBQUNULGtFQUFTO2dCQUNSLFVBQVU7Z0JBQ1Ysb0VBQW9FO2dCQUNwRSxJQUFJO2dCQUNKTSxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCSixJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZhLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkMsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEJDLGdCQUFnQjtnQkFDaEJDLFVBQVU7Z0JBQ1ZDLDRCQUE0QixFQUFFO0FBQUMsc0JBQUU7aUJBQUM7Z0JBQ2xDQyxtQkFBbUIsRUFBRWpCLFNBQVM7Z0JBQzlCa0IsbUJBQW1CLEVBQUVoQixtQkFBbUI7Z0JBQ3hDaUIsWUFBWSxFQUFFbEIsZ0JBQWdCOzs7OztxQkFDOUI7Ozs7O2lCQUNFOzs7OzthQUNGLENBQ047Q0FDSDtBQWxES0gsS0FBQUEseUJBQXlCO0FBb0QvQiw0RUFBZUgsTUFBQUEsMkNBQUksQ0FBQ0cseUJBQXlCLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RhYmxlL1ZpZXdSZXBvcnRCeVByb2R1Y3RPdXRsZXQuanM/MmViNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgVmlld1JlcG9ydEJ5UHJvZHVjdE91dGxldCA9ICh7XHJcbiAgZGF0YSxcclxuICB0b3RhbFJvd3MsXHJcbiAgaGFuZGxlUGFnZUNoYW5nZSxcclxuICBoYW5kbGVQZXJSb3dzQ2hhbmdlLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+UHJvZHVjdCBOYW1lPC9kaXY+LFxyXG4gICAgICBncm93OiAxMCxcclxuICAgICAgY2VsbDogKGEpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcHktMSBmbGV4IGZsZXgtcm93IGdhcC0xXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZFwiPnthLm5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+U29sZDwvZGl2PixcclxuICAgICAgZ3JvdzogMixcclxuICAgICAgY2VsbDogKGEpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcHktMSBmbGV4IGZsZXgtcm93IGdhcC0xXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICB7YS5vcmRlciAhPT0gbnVsbCA/IGEub3JkZXIgOiAwfSBpdGVtXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gcmVsYXRpdmUgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LW1kIGJvcmRlci0yIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAvLyB0aXRsZT17XHJcbiAgICAgICAgICAvLyAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LWJvbGQgdGV4dC1zbVwiPkNhdGVnb3J5IExpc3Q8L3A+XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIHJlc3BvbnNpdmU9e3RydWV9XHJcbiAgICAgICAgICBoaWdobGlnaHRPbkhvdmVyPXt0cnVlfVxyXG4gICAgICAgICAgcGFnaW5hdGlvblNlcnZlclxyXG4gICAgICAgICAgcGFnaW5hdGlvblxyXG4gICAgICAgICAgcGFnaW5hdGlvblJvd3NQZXJQYWdlT3B0aW9ucz17WzEwXX1cclxuICAgICAgICAgIHBhZ2luYXRpb25Ub3RhbFJvd3M9e3RvdGFsUm93c31cclxuICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZVBlclJvd3NDaGFuZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhWaWV3UmVwb3J0QnlQcm9kdWN0T3V0bGV0KTtcclxuIl0sIm5hbWVzIjpbIm1lbW8iLCJ1c2VDYWxsYmFjayIsIkRhdGFUYWJsZSIsIlZpZXdSZXBvcnRCeVByb2R1Y3RPdXRsZXQiLCJkYXRhIiwidG90YWxSb3dzIiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhbmRsZVBlclJvd3NDaGFuZ2UiLCJjb2x1bW5zIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImdyb3ciLCJjZWxsIiwiYSIsInAiLCJvcmRlciIsInJlc3BvbnNpdmUiLCJoaWdobGlnaHRPbkhvdmVyIiwicGFnaW5hdGlvblNlcnZlciIsInBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUm93c1BlclBhZ2VPcHRpb25zIiwicGFnaW5hdGlvblRvdGFsUm93cyIsIm9uQ2hhbmdlUm93c1BlclBhZ2UiLCJvbkNoYW5nZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/table/ViewReportByProductOutlet.js\n");

/***/ })

});