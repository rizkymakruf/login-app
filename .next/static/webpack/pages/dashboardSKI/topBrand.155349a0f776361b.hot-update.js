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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-data-table-component */ \"./node_modules/react-data-table-component/dist/index.cjs.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopBrandListTable = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_2__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var data = [\n        {\n            title: \"Brand satu\"\n        },\n        {\n            title: \"Brand dua\"\n        },\n        {\n            title: \"Brand tiga\"\n        },\n        {\n            title: \"Brand empat\"\n        },\n        {\n            title: \"Brand lima\"\n        },\n        {\n            title: \"Brand enam\"\n        },\n        {\n            title: \"Brand tuju\"\n        }, \n    ];\n    var columns = [\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-red-500\",\n                children: \"Brand Name\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this),\n            grow: 10,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full h-full py-1 flex flex-row gap-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs font-bold\",\n                        children: a.title\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this1);\n            }\n        },\n        {\n            name: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full text-center font-bold text-red-500\",\n                children: \"Top Brand\"\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, _this),\n            grow: 2,\n            cell: function(a) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center justify-center gap-x-2 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return globalAct.setModal(\"addedbrand\");\n                        },\n                        className: \"bg-green-500/30 items-center justify-center h-8 w-8 rounded-md hover:bg-green-500/50 shadow-md flex gap-x-2 text-xs text-green-500 hover:w-24 duration-150 hover:before:content-['Add'] border border-green-300\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            class: \"h-5 w-5 text-green-500\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            \"stroke-width\": \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                \"stroke-linecap\": \"round\",\n                                \"stroke-linejoin\": \"round\",\n                                d: \"M12 4v16m8-8H4\"\n                            }, void 0, false, {\n                                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this1);\n            }\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-auto relative \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" py-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 font-bold text-md\",\n                    children: \"Brand List\"\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border-2 rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    columns: columns,\n                    data: data,\n                    responsive: true,\n                    highlightOnHover: true,\n                    pagination: true\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\components\\\\table\\\\TopBrandList.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopBrandListTable, \"IqQqJ5Zf8P3GCOa/Y1bmkODUh/c=\");\n_c = TopBrandListTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopBrandListTable);\nvar _c;\n$RefreshReg$(_c, \"TopBrandListTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0Z2QiwrREFBZUEsaUJBQWlCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZS9Ub3BCcmFuZExpc3QuanM/MzYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGF0YVRhYmxlIGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcImNvbnRleHQvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRvcEJyYW5kTGlzdFRhYmxlID0gKHt9KSA9PiB7XHJcbiAgY29uc3QgeyBnbG9iYWxDdHgsIGdsb2JhbEFjdCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZCBzYXR1XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZCBkdWFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkJyYW5kIHRpZ2FcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkJyYW5kIGVtcGF0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZCBsaW1hXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZCBlbmFtXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCcmFuZCB0dWp1XCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1yZWQtNTAwXCI+QnJhbmQgTmFtZTwvZGl2PixcclxuICAgICAgZ3JvdzogMTAsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHB5LTEgZmxleCBmbGV4LXJvdyBnYXAtMVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGRcIj57YS50aXRsZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtcmVkLTUwMFwiPlxyXG4gICAgICAgICAgVG9wIEJyYW5kXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICksXHJcbiAgICAgIGdyb3c6IDIsXHJcbiAgICAgIGNlbGw6IChhKSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteC0yIHctZnVsbFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnbG9iYWxBY3Quc2V0TW9kYWwoXCJhZGRlZGJyYW5kXCIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgIFwiYmctZ3JlZW4tNTAwLzMwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTggdy04IHJvdW5kZWQtbWQgaG92ZXI6YmctZ3JlZW4tNTAwLzUwIHNoYWRvdy1tZCBmbGV4IGdhcC14LTIgdGV4dC14cyB0ZXh0LWdyZWVuLTUwMCBob3Zlcjp3LTI0IGR1cmF0aW9uLTE1MCBob3ZlcjpiZWZvcmU6Y29udGVudC1bJ0FkZCddIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJoLTUgdy01IHRleHQtZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMTIgNHYxNm04LThINFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byByZWxhdGl2ZSBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcHktM1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBmb250LWJvbGQgdGV4dC1tZFwiPkJyYW5kIExpc3Q8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIHJlc3BvbnNpdmU9e3RydWV9XHJcbiAgICAgICAgICBoaWdobGlnaHRPbkhvdmVyPXt0cnVlfVxyXG4gICAgICAgICAgcGFnaW5hdGlvblxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJyYW5kTGlzdFRhYmxlO1xyXG4iXSwibmFtZXMiOlsiRGF0YVRhYmxlIiwiR2xvYmFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJUb3BCcmFuZExpc3RUYWJsZSIsImdsb2JhbEN0eCIsImdsb2JhbEFjdCIsImRhdGEiLCJ0aXRsZSIsImNvbHVtbnMiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ3JvdyIsImNlbGwiLCJhIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzZXRNb2RhbCIsInN2ZyIsInhtbG5zIiwiY2xhc3MiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInN0cm9rZS13aWR0aCIsInBhdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImQiLCJyZXNwb25zaXZlIiwiaGlnaGxpZ2h0T25Ib3ZlciIsInBhZ2luYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/table/TopBrandList.js\n");

/***/ })

});