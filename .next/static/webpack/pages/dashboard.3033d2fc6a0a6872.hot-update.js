"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_fetchJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/fetchJson */ \"./lib/fetchJson.js\");\n/* harmony import */ var components_table_UsersCst__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/table/UsersCst */ \"./components/table/UsersCst.js\");\n/* harmony import */ var context_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/global */ \"./context/global.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _instanceof(left, right) {\n    if (right != null && typeof Symbol !== \"undefined\" && right[Symbol.hasInstance]) {\n        return !!right[Symbol.hasInstance](left);\n    } else {\n        return left instanceof right;\n    }\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar DashboardSKI = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(context_global__WEBPACK_IMPORTED_MODULE_5__.GlobalContext), globalCtx = ref.globalCtx, globalAct = ref.globalAct;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.totalCust), totalRows = ref1[0], setTotalRows = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10), perPage = ref2[0], setPerPage = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var data = props.cst;\n    var logout = function() {\n        var _ref = _asyncToGenerator(_home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var body, lg;\n            return _home_rizkymakruf_Documents_Dashboard_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        body = {\n                            uri: \"logout\"\n                        };\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,lib_fetchJson__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/prot/post\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(body)\n                        });\n                    case 4:\n                        lg = _ctx.sent;\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        if (_instanceof(_ctx.t0, lib_fetchJson__WEBPACK_IMPORTED_MODULE_3__.FetchError)) {\n                            globalAct.setErrorMsg(_ctx.t0.data.message);\n                        }\n                    case 10:\n                        _ctx.next = 12;\n                        return router.push(\"/\");\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function logout() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"w-full py-3 px-3 bg-gradient-to-r from-purple-500 to-red-400\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"py-3 flex items-center justify-center bg-white\",\n                    onClick: function() {\n                        return logout();\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        \"stroke-width\": \"1.5\",\n                        stroke: \"currentColor\",\n                        class: \"w-6 h-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\",\n                            d: \"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75\"\n                        }, void 0, false, {\n                            fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/dashboard/index.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/dashboard/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/dashboard/index.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/dashboard/index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"p-5\",\n                children: (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n                    console.log(\"tabel\");\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_table_UsersCst__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: data,\n                        totalRows: totalRows,\n                        handlePageChange: function(page) {\n                            router.replace(\"/dashboard/?start=\".concat((page - 1) * perPage, \"&length=\").concat(perPage));\n                        },\n                        handlePerRowsChange: function(newpage) {\n                            setPerPage(newpage);\n                            router.replace(\"/dashboard/?start=0&length=\".concat(newpage));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/dashboard/index.js\",\n                        lineNumber: 116,\n                        columnNumber: 13\n                    }, _this1);\n                }, [\n                    data\n                ])\n            }, void 0, false, {\n                fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/dashboard/index.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rizkymakruf/Documents/Dashboard/pages/dashboard/index.js\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, _this);\n};\n_s(DashboardSKI, \"lEQEsFGl6g4NaofO+3GEtMgj1yI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = DashboardSKI;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardSKI);\nvar _c;\n$RefreshReg$(_c, \"DashboardSKI\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FDWixvQkFBbUIsQ0FBaUNwQyxNQUFPLENBQXRDLENBQUNtQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUduQyxPQUFPLEVBQUMsVUFBUSxDQUFVLFFBQVJBLE9BQU8sQ0FBRSxDQUM5RCxDQUFDO3lCQUNIO3dCQUNEcUMsbUJBQW1CLEVBQUUsU0FBQ0MsT0FBTyxFQUFLOzRCQUNoQ3JDLFVBQVUsQ0FBQ3FDLE9BQU8sQ0FBQyxDQUFDOzRCQUNwQnBDLE1BQU0sQ0FBQ2tDLE9BQU8sQ0FBQyw2QkFBNEIsQ0FBVSxPQUFSRSxPQUFPLENBQUUsQ0FBQyxDQUFDO3lCQUN6RDs7Ozs7OEJBQ0QsQ0FDRjtpQkFDSCxFQUFFO29CQUFDbkMsSUFBSTtpQkFBQyxDQUFDOzs7OztxQkFDTjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBdEVLVixZQUFZOztRQUlERCxrREFBUzs7O0FBSnBCQyxLQUFBQSxZQUFZOztBQXdFbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanM/NmQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWRpcmVjdCwgcmV0T2JqZWN0LCBjaGVja2VyVG9rZW4gfSBmcm9tIFwibGliL2xpc3RGdW5jdFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWxsQ3N0LCBjaGVja1VpZCwgZ2V0VG90YWxDdXN0IH0gZnJvbSBcImxpYi9hcmFuZ29EYlwiO1xuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uU3NyIH0gZnJvbSBcImlyb24tc2Vzc2lvbi9uZXh0XCI7XG5pbXBvcnQgZmV0Y2hKc29uLCB7IEZldGNoRXJyb3IgfSBmcm9tIFwibGliL2ZldGNoSnNvblwiO1xuaW1wb3J0IFVzZXJzVGFibGVDc3QgZnJvbSBcImNvbXBvbmVudHMvdGFibGUvVXNlcnNDc3RcIjtcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tIFwiY29udGV4dC9nbG9iYWxcIjtcbmltcG9ydCB7IHNlc3Npb25PcHRpb25zIH0gZnJvbSBcImxpYi9zZXNzaW9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvblNzcihhc3luYyBmdW5jdGlvbiAoe1xuICByZXEsXG4gIHJlcyxcbiAgcXVlcnksXG59KSB7XG4gIHZhciB1c2VyID0gYXdhaXQgcmVxLnNlc3Npb24udXNlcjtcbiAgaWYgKCF1c2VyIHx8ICF1c2VyLmFjY2Vzc190b2tlbikge1xuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XG4gIH1cblxuICBjb25zdCB2YWxpZGF0aW9uVG9rZW4gPSBhd2FpdCBjaGVja2VyVG9rZW4odXNlcik7XG5cbiAgaWYgKHZhbGlkYXRpb25Ub2tlbi5lcnJvcikge1xuICAgIGF3YWl0IHJlcS5zZXNzaW9uLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xuICB9XG5cbiAgaWYgKHZhbGlkYXRpb25Ub2tlbi5zdGF0dXMgPT09IFwicmVmcmVzaFwiKSB7XG4gICAgdXNlciA9IHtcbiAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICBhY2Nlc3NfdG9rZW46IHZhbGlkYXRpb25Ub2tlbi5hY2Nlc3NfdG9rZW4sXG4gICAgICByZWZyZXNoX3Rva2VuOiB2YWxpZGF0aW9uVG9rZW4ucmVmcmVzaF90b2tlbixcbiAgICB9O1xuICAgIHJlcS5zZXNzaW9uLnVzZXIgPSB1c2VyO1xuICAgIGF3YWl0IHJlcS5zZXNzaW9uLnNhdmUoKTtcbiAgfVxuXG4gIGdsb2JhbC5hdG9iID0gcmVxdWlyZShcImF0b2JcIik7XG5cbiAgY29uc3QgdWlkID0gSlNPTi5wYXJzZShhdG9iKHVzZXIuYWNjZXNzX3Rva2VuLnNwbGl0KFwiLlwiKVsxXSkpO1xuICBjb25zdCBjaGVja1VpZHMgPSBhd2FpdCBjaGVja1VpZCh1aWQudXNlcl9pZCk7XG4gIGNvbnN0IGNzdCA9IGF3YWl0IGFsbENzdChcbiAgICBxdWVyeS5zdGFydCA/IHBhcnNlSW50KHF1ZXJ5LnN0YXJ0KSA6IDAsXG4gICAgcXVlcnkubGVuZ3RoID8gcGFyc2VJbnQocXVlcnkubGVuZ3RoKSA6IDEwXG4gICk7XG4gIGNvbnN0IHRvdGFsQ3VzdCA9IGF3YWl0IGdldFRvdGFsQ3VzdCgpO1xuXG4gIGlmIChjaGVja1VpZHMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybiByZWRpcmVjdChcIi9cIik7XG4gIH1cblxuICByZXR1cm4gcmV0T2JqZWN0KHtcbiAgICBpc0xvZ2luOiB0cnVlLFxuICAgIGZ1bGxOYW1lOiBjaGVja1VpZHNbMF0uZnVsbG5hbWUsXG4gICAgcGljdDpcbiAgICAgIGNoZWNrVWlkc1swXS5waWN0ICE9PSBcIlwiID8gY2hlY2tVaWRzWzBdLnBpY3QgOiBcIi9pbWcvdXNlci1kZWZhdWx0LnBuZ1wiLFxuICAgIG91dGxldFBpY3Q6IFwiL2ltZy9za2kucG5nXCIsXG4gICAgY3N0OiBjc3QsXG4gICAgdG90YWxDdXN0OiB0b3RhbEN1c3RbMF0udG90YWwsXG4gIH0pO1xufSxcbnNlc3Npb25PcHRpb25zKTtcblxuY29uc3QgRGFzaGJvYXJkU0tJID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZ2xvYmFsQ3R4LCBnbG9iYWxBY3QgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG4gIGNvbnN0IFt0b3RhbFJvd3MsIHNldFRvdGFsUm93c10gPSB1c2VTdGF0ZShwcm9wcy50b3RhbEN1c3QpO1xuICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkYXRhID0gcHJvcHMuY3N0O1xuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgdXJpOiBcImxvZ291dFwiLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxnID0gYXdhaXQgZmV0Y2hKc29uKFwiL2FwaS9wcm90L3Bvc3RcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEZldGNoRXJyb3IpIHtcbiAgICAgICAgZ2xvYmFsQWN0LnNldEVycm9yTXNnKGVycm9yLmRhdGEubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgcHgtMyBiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTUwMCB0by1yZWQtNDAwXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXdoaXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBsb2dvdXQoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy02IGgtNlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgZD1cIk0xNS43NSA5VjUuMjVBMi4yNSAyLjI1IDAgMDAxMy41IDNoLTZhMi4yNSAyLjI1IDAgMDAtMi4yNSAyLjI1djEzLjVBMi4yNSAyLjI1IDAgMDA3LjUgMjFoNmEyLjI1IDIuMjUgMCAwMDIuMjUtMi4yNVYxNU0xMiA5bC0zIDNtMCAwbDMgM20tMy0zaDEyLjc1XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICB7dXNlTWVtbygoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ0YWJlbFwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFVzZXJzVGFibGVDc3RcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgdG90YWxSb3dzPXt0b3RhbFJvd3N9XG4gICAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2U9eyhwYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICBgL2Rhc2hib2FyZC8/c3RhcnQ9JHsocGFnZSAtIDEpICogcGVyUGFnZX0mbGVuZ3RoPSR7cGVyUGFnZX1gXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaGFuZGxlUGVyUm93c0NoYW5nZT17KG5ld3BhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQZXJQYWdlKG5ld3BhZ2UpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKGAvZGFzaGJvYXJkLz9zdGFydD0wJmxlbmd0aD0ke25ld3BhZ2V9YCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0sIFtkYXRhXSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFNLSTtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiZmV0Y2hKc29uIiwiRmV0Y2hFcnJvciIsIlVzZXJzVGFibGVDc3QiLCJHbG9iYWxDb250ZXh0IiwidXNlUm91dGVyIiwiRGFzaGJvYXJkU0tJIiwicHJvcHMiLCJnbG9iYWxDdHgiLCJnbG9iYWxBY3QiLCJ0b3RhbEN1c3QiLCJ0b3RhbFJvd3MiLCJzZXRUb3RhbFJvd3MiLCJwZXJQYWdlIiwic2V0UGVyUGFnZSIsInJvdXRlciIsImRhdGEiLCJjc3QiLCJsb2dvdXQiLCJib2R5IiwibGciLCJ1cmkiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic2V0RXJyb3JNc2ciLCJtZXNzYWdlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlLXdpZHRoIiwic3Ryb2tlIiwiY2xhc3MiLCJwYXRoIiwic3Ryb2tlLWxpbmVjYXAiLCJzdHJva2UtbGluZWpvaW4iLCJkIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJwYWdlIiwicmVwbGFjZSIsImhhbmRsZVBlclJvd3NDaGFuZ2UiLCJuZXdwYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/index.js\n");

/***/ })

});