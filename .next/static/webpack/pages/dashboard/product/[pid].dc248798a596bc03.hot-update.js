"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/product/[pid]",{

/***/ "./pages/dashboard/product/[pid].js":
/*!******************************************!*\
  !*** ./pages/dashboard/product/[pid].js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout/Navbar */ \"./components/layout/Navbar.js\");\n/* harmony import */ var components_table_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/table/Product */ \"./components/table/Product.js\");\n/* harmony import */ var components_card_AddProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/card/AddProduct */ \"./components/card/AddProduct.js\");\n/* harmony import */ var components_search_ProductOutlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/search/ProductOutlet */ \"./components/search/ProductOutlet.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/form/FormProduct */ \"./components/form/FormProduct.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ManageProduct = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_6__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        globalAct.setAdminMode(\"outlet\");\n        globalAct.setFullname(props.fullName);\n        globalAct.setIsFetch(false);\n        globalAct.setErrorMsg(\"\");\n        globalAct.setCurrentBrand(props.adminMode);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        console.log(\"fetch data status : \", globalCtx.isFetch);\n    }, [\n        globalCtx\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full p-4 flex flex-col gap-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md hover:shadow-red-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\product\\\\[pid].js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\product\\\\[pid].js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full p-4 border border-gray-200 rounded-md shadow-sm hover:shadow-md hover:shadow-red-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_search_ProductOutlet__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\product\\\\[pid].js\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\product\\\\[pid].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_table_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    globalAct: globalAct,\n                    globalCtx: globalCtx\n                }, void 0, false, {\n                    fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\product\\\\[pid].js\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\product\\\\[pid].js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\pages\\\\dashboard\\\\product\\\\[pid].js\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, _this);\n};\n_s(ManageProduct, \"9zw7xLZDGVc9Xs4DYfpw8iJ4esQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ManageProduct;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ManageProduct);\nManageProduct.getLayout = components_layout_Navbar__WEBPACK_IMPORTED_MODULE_1__.getLayout;\nvar _c;\n$RefreshReg$(_c, \"ManageProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvcHJvZHVjdC9bcGlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQXFEO0FBQ0Q7QUFDSDtBQUNpQjtBQUUxQjtBQUVPO0FBQ0Q7QUFJUTs7QUFvRHRELElBQU1TLGFBQWEsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQy9CLElBQWlDSixHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0QseURBQWEsQ0FBQyxFQUFsRE0sU0FBUyxHQUFnQkwsR0FBeUIsQ0FBbERLLFNBQVMsRUFBRUMsU0FBUyxHQUFLTixHQUF5QixDQUF2Q00sU0FBUztJQUM1QixJQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQUU7SUFFMUJHLGdEQUFTLENBQUMsV0FBTTtRQUNkSyxTQUFTLENBQUNFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQ0YsU0FBUyxDQUFDRyxXQUFXLENBQUNMLEtBQUssQ0FBQ00sUUFBUSxDQUFDLENBQUM7UUFDdENKLFNBQVMsQ0FBQ0ssVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCTCxTQUFTLENBQUNNLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQk4sU0FBUyxDQUFDTyxlQUFlLENBQUNULEtBQUssQ0FBQ1UsU0FBUyxDQUFDLENBQUM7S0FDNUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQYixnREFBUyxDQUFDLFdBQU07UUFDZGMsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVYLFNBQVMsQ0FBQ1ksT0FBTyxDQUFDLENBQUM7S0FDeEQsRUFBRTtRQUFDWixTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBQ2hCLHFCQUNFLDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7OzBCQUMvQyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDZGQUE2RjswQkFDMUcsNEVBQUNqQixtRUFBVzs7Ozt5QkFBRzs7Ozs7cUJBQ1g7MEJBQ04sOERBQUNnQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsNkZBQTZGOzBCQUMxRyw0RUFBQ3RCLHVFQUFtQjs7Ozt5QkFBRzs7Ozs7cUJBQ25COzBCQUNOLDhEQUFDcUIsS0FBRzswQkFDRiw0RUFBQ3ZCLGdFQUFZO29CQUFDVyxTQUFTLEVBQUVBLFNBQVM7b0JBQUVELFNBQVMsRUFBRUEsU0FBUzs7Ozs7eUJBQUk7Ozs7O3FCQUN4RDs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBNUJLRixhQUFhOztRQUVGTCxrREFBUzs7O0FBRnBCSyxLQUFBQSxhQUFhOztBQThCbkIsK0RBQWVBLGFBQWEsRUFBQztBQUM3QkEsYUFBYSxDQUFDVCxTQUFTLEdBQUdBLCtEQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkL3Byb2R1Y3QvW3BpZF0uanM/MzkxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyXCI7XHJcbmltcG9ydCBQcm9kdWN0VGFibGUgZnJvbSBcImNvbXBvbmVudHMvdGFibGUvUHJvZHVjdFwiO1xyXG5pbXBvcnQgQWRkQ2FyZCBmcm9tIFwiY29tcG9uZW50cy9jYXJkL0FkZFByb2R1Y3RcIjtcclxuaW1wb3J0IFNlYXJjaFByb2R1Y3RPdXRsZXQgZnJvbSBcImNvbXBvbmVudHMvc2VhcmNoL1Byb2R1Y3RPdXRsZXRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBzZXNzaW9uT3B0aW9ucyB9IGZyb20gXCJsaWIvc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSBcImNvbnRleHQvZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb25Tc3IgfSBmcm9tIFwiaXJvbi1zZXNzaW9uL25leHRcIjtcclxuaW1wb3J0IHsgY2hlY2tVaWQsIGZpbmRPdXRsZXQgfSBmcm9tIFwibGliL2FyYW5nb0RiXCI7XHJcbmltcG9ydCB7IHJlZGlyZWN0LCByZXRPYmplY3QsIGNoZWNrZXJUb2tlbiB9IGZyb20gXCJsaWIvbGlzdEZ1bmN0XCI7XHJcbmltcG9ydCBGb3JtUHJvZHVjdCBmcm9tIFwiY29tcG9uZW50cy9mb3JtL0Zvcm1Qcm9kdWN0XCI7XHJcblxyXG4vLyBzc3JcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihhc3luYyBmdW5jdGlvbiAoe1xyXG4gIHJlcSxcclxuICByZXMsXHJcbiAgcXVlcnksXHJcbn0pIHtcclxuICB2YXIgdXNlciA9IGF3YWl0IHJlcS5zZXNzaW9uLnVzZXI7XHJcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmFjY2Vzc190b2tlbikge1xyXG4gICAgLy8gcmV0T2JqZWN0KHsgaXNMb2dpbjogZmFsc2UgfSk7XHJcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblRva2VuID0gYXdhaXQgY2hlY2tlclRva2VuKHVzZXIpO1xyXG4gIGlmICh2YWxpZGF0aW9uVG9rZW4uZXJyb3IpIHtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLmRlc3Ryb3koKTtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsaWRhdGlvblRva2VuLnN0YXR1cyA9PT0gXCJyZWZyZXNoXCIpIHtcclxuICAgIHVzZXIgPSB7XHJcbiAgICAgIGlzTG9nZ2VkSW46IHRydWUsXHJcbiAgICAgIGFjY2Vzc190b2tlbjogdmFsaWRhdGlvblRva2VuLmFjY2Vzc190b2tlbixcclxuICAgICAgcmVmcmVzaF90b2tlbjogdmFsaWRhdGlvblRva2VuLnJlZnJlc2hfdG9rZW4sXHJcbiAgICB9O1xyXG4gICAgcmVxLnNlc3Npb24udXNlciA9IHVzZXI7XHJcbiAgICBhd2FpdCByZXEuc2Vzc2lvbi5zYXZlKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB1aWQgPSBKU09OLnBhcnNlKGF0b2IodXNlci5hY2Nlc3NfdG9rZW4uc3BsaXQoXCIuXCIpWzFdKSk7XHJcbiAgY29uc3QgY2hlY2tVaWRzID0gYXdhaXQgY2hlY2tVaWQodWlkLnVzZXJfaWQpO1xyXG4gIGxldCBvdXRsZXQgPSBbXTtcclxuICBpZiAoY2hlY2tVaWRzWzBdLm91dGxldCAhPT0gXCJcIikge1xyXG4gICAgb3V0bGV0ID0gYXdhaXQgZmluZE91dGxldChjaGVja1VpZHNbMF0/Lm91dGxldCk7XHJcbiAgICBpZiAob3V0bGV0WzBdLnNob3J0bmFtZSAhPT0gcXVlcnkucGlkKSB7XHJcbiAgICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoY2hlY2tVaWRzLmxlbmd0aCA8IDEpIHtcclxuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmV0T2JqZWN0KHtcclxuICAgIGlzTG9naW46IHRydWUsXHJcbiAgICBmdWxsTmFtZTogY2hlY2tVaWRzWzBdLmZ1bGxuYW1lLFxyXG4gICAgYWRtaW5Nb2RlOiBvdXRsZXQubGVuZ3RoID4gMCA/IG91dGxldFswXT8uc2hvcnRuYW1lIDogcXVlcnkucGlkLFxyXG4gIH0pO1xyXG59LFxyXG5zZXNzaW9uT3B0aW9ucyk7XHJcblxyXG5jb25zdCBNYW5hZ2VQcm9kdWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBnbG9iYWxDdHgsIGdsb2JhbEFjdCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdsb2JhbEFjdC5zZXRBZG1pbk1vZGUoXCJvdXRsZXRcIik7XHJcbiAgICBnbG9iYWxBY3Quc2V0RnVsbG5hbWUocHJvcHMuZnVsbE5hbWUpO1xyXG4gICAgZ2xvYmFsQWN0LnNldElzRmV0Y2goZmFsc2UpO1xyXG4gICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKFwiXCIpO1xyXG4gICAgZ2xvYmFsQWN0LnNldEN1cnJlbnRCcmFuZChwcm9wcy5hZG1pbk1vZGUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZmV0Y2ggZGF0YSBzdGF0dXMgOiBcIiwgZ2xvYmFsQ3R4LmlzRmV0Y2gpO1xyXG4gIH0sIFtnbG9iYWxDdHhdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IGZsZXggZmxleC1jb2wgZ2FwLXktNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC00IHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbWQgaG92ZXI6c2hhZG93LXJlZC01MDBcIj5cclxuICAgICAgICA8Rm9ybVByb2R1Y3QgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCBob3ZlcjpzaGFkb3ctcmVkLTUwMFwiPlxyXG4gICAgICAgIDxTZWFyY2hQcm9kdWN0T3V0bGV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxQcm9kdWN0VGFibGUgZ2xvYmFsQWN0PXtnbG9iYWxBY3R9IGdsb2JhbEN0eD17Z2xvYmFsQ3R4fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VQcm9kdWN0O1xyXG5NYW5hZ2VQcm9kdWN0LmdldExheW91dCA9IGdldExheW91dDtcclxuIl0sIm5hbWVzIjpbImdldExheW91dCIsIlByb2R1Y3RUYWJsZSIsIkFkZENhcmQiLCJTZWFyY2hQcm9kdWN0T3V0bGV0IiwidXNlUm91dGVyIiwiR2xvYmFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJGb3JtUHJvZHVjdCIsIk1hbmFnZVByb2R1Y3QiLCJwcm9wcyIsImdsb2JhbEN0eCIsImdsb2JhbEFjdCIsInJvdXRlciIsInNldEFkbWluTW9kZSIsInNldEZ1bGxuYW1lIiwiZnVsbE5hbWUiLCJzZXRJc0ZldGNoIiwic2V0RXJyb3JNc2ciLCJzZXRDdXJyZW50QnJhbmQiLCJhZG1pbk1vZGUiLCJjb25zb2xlIiwibG9nIiwiaXNGZXRjaCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/product/[pid].js\n");

/***/ })

});