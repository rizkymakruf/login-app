"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/global.js":
/*!***************************!*\
  !*** ./context/global.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": function() { return /* binding */ GlobalContext; },\n/* harmony export */   \"GlobalProvider\": function() { return /* binding */ GlobalProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar GlobalProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), modal = ref[0], setModal = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), popover = ref1[0], setPopover = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isFetch = ref2[0], setIsFetch = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMsg = ref3[0], setErrorMsg = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Faouzia\"), fullname = ref4[0], setFullname = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedData = ref5[0], setSelectedData = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listOutlet = ref6[0], setListOutlet = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), listUser = ref7[0], setListUser = ref7[1];\n    var ref8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), newData = ref8[0], setNewData = ref8[1];\n    var contextValue = {\n        globalCtx: {\n            modal: modal,\n            popover: popover,\n            errorMsg: errorMsg,\n            isFetch: isFetch,\n            fullname: fullname,\n            selectedData: selectedData,\n            listOutlet: listOutlet,\n            listUser: listUser,\n            newData: newData\n        },\n        globalAct: {\n            setModal: setModal,\n            setPopover: setPopover,\n            setErrorMsg: setErrorMsg,\n            setIsFetch: setIsFetch,\n            setFullname: setFullname,\n            setSelectedData: setSelectedData,\n            setListOutlet: setListOutlet,\n            setListUser: setListUser,\n            setNewData: setNewData\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"G:\\\\SKI-Dashboard\\\\context\\\\global.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this);\n};\n_s(GlobalProvider, \"4q59Tnh5udtY3E5LAQmr0rzP/Lo=\");\n_c = GlobalProvider;\nvar _c;\n$RefreshReg$(_c, \"GlobalProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2dsb2JhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7O0FBRXpDLElBQU1FLGFBQWEsaUJBQUdELG9EQUFhLEVBQUUsQ0FBQztBQUV0QyxJQUFNRSxjQUFjLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDdkMsSUFBMEJKLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFMeEMsS0FLYyxHQUFjQSxHQUFZLEdBQTFCLEVBTGQsUUFLd0IsR0FBSUEsR0FBWSxHQUFoQjtJQUN0QixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU41QyxPQU1nQixHQUFnQkEsSUFBWSxHQUE1QixFQU5oQixVQU00QixHQUFJQSxJQUFZLEdBQWhCO0lBQzFCLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUC9DLE9BT2dCLEdBQWdCQSxJQUFlLEdBQS9CLEVBUGhCLFVBTzRCLEdBQUlBLElBQWUsR0FBbkI7SUFDMUIsSUFBZ0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSOUMsUUFRaUIsR0FBaUJBLElBQVksR0FBN0IsRUFSakIsV0FROEIsR0FBSUEsSUFBWSxHQUFoQjtJQUM1QixJQUFnQ0EsSUFBbUIsR0FBbkJBLCtDQUFRLENBQUMsU0FBUyxDQUFDLEVBVHJELFFBU2lCLEdBQWlCQSxJQUFtQixHQUFwQyxFQVRqQixXQVM4QixHQUFJQSxJQUFtQixHQUF2QjtJQUM1QixJQUF3Q0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVZ0RCxZQVVxQixHQUFxQkEsSUFBWSxHQUFqQyxFQVZyQixlQVVzQyxHQUFJQSxJQUFZLEdBQWhCO0lBQ3BDLElBQW9DQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWGxELFVBV21CLEdBQW1CQSxJQUFZLEdBQS9CLEVBWG5CLGFBV2tDLEdBQUlBLElBQVksR0FBaEI7SUFDaEMsSUFBZ0NBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFaOUMsUUFZaUIsR0FBaUJBLElBQVksR0FBN0IsRUFaakIsV0FZOEIsR0FBSUEsSUFBWSxHQUFoQjtJQUM1QixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWI1QyxPQWFnQixHQUFnQkEsSUFBWSxHQUE1QixFQWJoQixVQWE0QixHQUFJQSxJQUFZLEdBQWhCO0lBRTFCLElBQU11QixZQUFZLEdBQUc7UUFDbkJDLFNBQVMsRUFBRTtZQUNUbkIsS0FBSyxFQUFMQSxLQUFLO1lBQ0xFLE9BQU8sRUFBUEEsT0FBTztZQUNQSSxRQUFRLEVBQVJBLFFBQVE7WUFDUkYsT0FBTyxFQUFQQSxPQUFPO1lBQ1BJLFFBQVEsRUFBUkEsUUFBUTtZQUNSRSxZQUFZLEVBQVpBLFlBQVk7WUFDWkUsVUFBVSxFQUFWQSxVQUFVO1lBQ1ZFLFFBQVEsRUFBUkEsUUFBUTtZQUNSRSxPQUFPLEVBQVBBLE9BQU87U0FDUjtRQUNESSxTQUFTLEVBQUU7WUFDVG5CLFFBQVEsRUFBUkEsUUFBUTtZQUNSRSxVQUFVLEVBQVZBLFVBQVU7WUFDVkksV0FBVyxFQUFYQSxXQUFXO1lBQ1hGLFVBQVUsRUFBVkEsVUFBVTtZQUNWSSxXQUFXLEVBQVhBLFdBQVc7WUFDWEUsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZFLGFBQWEsRUFBYkEsYUFBYTtZQUNiRSxXQUFXLEVBQVhBLFdBQVc7WUFDWEUsVUFBVSxFQUFWQSxVQUFVO1NBQ1g7S0FDRjtJQUVELHFCQUNFLDhEQUFDcEIsYUFBYSxDQUFDd0IsUUFBUTtRQUFDQyxLQUFLLEVBQUVKLFlBQVk7a0JBQ3hDbkIsUUFBUTs7Ozs7YUFDYyxDQUN6QjtDQUNILENBQUM7R0F6Q1dELGNBQWM7QUFBZEEsS0FBQUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2dsb2JhbC5qcz9lYTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwb3BvdmVyLCBzZXRQb3BvdmVyXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpc0ZldGNoLCBzZXRJc0ZldGNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsbmFtZSwgc2V0RnVsbG5hbWVdID0gdXNlU3RhdGUoXCJGYW91emlhXCIpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZERhdGEsIHNldFNlbGVjdGVkRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlzdE91dGxldCwgc2V0TGlzdE91dGxldF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xpc3RVc2VyLCBzZXRMaXN0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld0RhdGEsIHNldE5ld0RhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICBnbG9iYWxDdHg6IHtcclxuICAgICAgbW9kYWwsXHJcbiAgICAgIHBvcG92ZXIsXHJcbiAgICAgIGVycm9yTXNnLFxyXG4gICAgICBpc0ZldGNoLFxyXG4gICAgICBmdWxsbmFtZSxcclxuICAgICAgc2VsZWN0ZWREYXRhLFxyXG4gICAgICBsaXN0T3V0bGV0LFxyXG4gICAgICBsaXN0VXNlcixcclxuICAgICAgbmV3RGF0YSxcclxuICAgIH0sXHJcbiAgICBnbG9iYWxBY3Q6IHtcclxuICAgICAgc2V0TW9kYWwsXHJcbiAgICAgIHNldFBvcG92ZXIsXHJcbiAgICAgIHNldEVycm9yTXNnLFxyXG4gICAgICBzZXRJc0ZldGNoLFxyXG4gICAgICBzZXRGdWxsbmFtZSxcclxuICAgICAgc2V0U2VsZWN0ZWREYXRhLFxyXG4gICAgICBzZXRMaXN0T3V0bGV0LFxyXG4gICAgICBzZXRMaXN0VXNlcixcclxuICAgICAgc2V0TmV3RGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJHbG9iYWxQcm92aWRlciIsImNoaWxkcmVuIiwibW9kYWwiLCJzZXRNb2RhbCIsInBvcG92ZXIiLCJzZXRQb3BvdmVyIiwiaXNGZXRjaCIsInNldElzRmV0Y2giLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsInNlbGVjdGVkRGF0YSIsInNldFNlbGVjdGVkRGF0YSIsImxpc3RPdXRsZXQiLCJzZXRMaXN0T3V0bGV0IiwibGlzdFVzZXIiLCJzZXRMaXN0VXNlciIsIm5ld0RhdGEiLCJzZXROZXdEYXRhIiwiY29udGV4dFZhbHVlIiwiZ2xvYmFsQ3R4IiwiZ2xvYmFsQWN0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/global.js\n");

/***/ })

});