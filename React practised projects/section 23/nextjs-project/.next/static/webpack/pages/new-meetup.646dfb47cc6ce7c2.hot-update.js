"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-meetup",{

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_React_projects_NextJS_nextjs_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_React_projects_NextJS_nextjs_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_React_projects_NextJS_nextjs_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ \"./components/meetups/NewMeetupForm.js\");\n//our-domain.com/new-meetup\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction NewMeetupPage() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function addMeetupHandler(enteredMeetupData) {\n        return _addMeetupHandler.apply(this, arguments);\n    }\n    function _addMeetupHandler() {\n        _addMeetupHandler = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(D_React_projects_NextJS_nextjs_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(enteredMeetupData) {\n            var response, data;\n            return D_React_projects_NextJS_nextjs_project_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/new-meetup\", {\n                            method: \"POST\",\n                            body: JSON.stringify(enteredMeetupData),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                        _ctx.next = 5;\n                        return response.json();\n                    case 5:\n                        data = _ctx.sent;\n                        console.log(data);\n                        router.push(\"/\");\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _addMeetupHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onAddMeetup: addMeetupHandler\n    }, void 0, false, {\n        fileName: \"D:\\\\React projects\\\\NextJS\\\\nextjs-project\\\\pages\\\\new-meetup\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n_s(NewMeetupPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = NewMeetupPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMeetupPage); // our-domain.com/new-meetup\n // import { useRouter } from \"next/router\";\n // import NewMeetupForm from \"../../components/meetups/NewMeetupForm\";\n // function NewMeetupPage() {\n //   const router = useRouter();\n //   async function addMeetupHandler(enteredMeetupData) {\n //     const response = await fetch(\"/api/new-meetup\", {\n //       method: \"POST\",\n //       body: JSON.stringify(enteredMeetupData),\n //       headers: {\n //         \"Content-Type\": \"application/json\",\n //       },\n //     });\n //     const data = await response.json();\n //     console.log(data);\n //     router.push(\"/\");\n //   }\n //   return <NewMeetupForm onAddMeetup={addMeetupHandler} />;\n // }\n // export default NewMeetupPage;\nvar _c;\n$RefreshReg$(_c, \"NewMeetupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJCQUEyQjtBQUUzQjs7OztBQUF3QztBQUMyQjtBQUNuRSxTQUFTRSxhQUFhLEdBQUc7O0lBQ3ZCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTthQUNYSSxnQkFBZ0IsQ0FBQ0MsaUJBQWlCO2VBQWxDRCxpQkFBZ0I7O2FBQWhCQSxpQkFBZ0I7UUFBaEJBLGlCQUFnQixHQUEvQix1UEFBZ0NDLGlCQUFpQixFQUFFO2dCQUUzQ0MsUUFBUSxFQVFSQyxJQUFJOzs7OzsrQkFSYUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFOzRCQUM5Q0MsTUFBTSxFQUFFLE1BQU07NEJBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLGlCQUFpQixDQUFDOzRCQUN2Q1EsT0FBTyxFQUFFO2dDQUNQLGNBQWMsRUFBRSxrQkFBa0I7NkJBQ25DO3lCQUNGLENBQUM7O3dCQU5JUCxRQUFRLFlBTVo7OytCQUVpQkEsUUFBUSxDQUFDUSxJQUFJLEVBQUU7O3dCQUE1QlAsSUFBSSxZQUF3Qjt3QkFDbENRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJLENBQUMsQ0FBQzt3QkFDbEJKLE1BQU0sQ0FBQ2MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7U0FDbEI7ZUFiY2IsaUJBQWdCOztJQWMvQixxQkFBTyw4REFBQ0gseUVBQWE7UUFBQ2lCLFdBQVcsRUFBRWQsZ0JBQWdCOzs7OztZQUFJLENBQUM7Q0FDekQ7R0FqQlFGLGFBQWE7O1FBQ0xGLGtEQUFTOzs7QUFEakJFLEtBQUFBLGFBQWE7QUFtQnRCLCtEQUFlQSxhQUFhLEVBQUMsQ0FFN0IsNEJBQTRCO0NBQzVCLDJDQUEyQztDQUUzQyxzRUFBc0U7Q0FFdEUsNkJBQTZCO0NBQzdCLGdDQUFnQztDQUVoQyx5REFBeUQ7Q0FDekQsd0RBQXdEO0NBQ3hELHdCQUF3QjtDQUN4QixpREFBaUQ7Q0FDakQsbUJBQW1CO0NBQ25CLDhDQUE4QztDQUM5QyxXQUFXO0NBQ1gsVUFBVTtDQUVWLDBDQUEwQztDQUUxQyx5QkFBeUI7Q0FFekIsd0JBQXdCO0NBQ3hCLE1BQU07Q0FFTiw2REFBNkQ7Q0FDN0QsSUFBSTtDQUVKLGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXctbWVldHVwL2luZGV4LmpzPzk1ODIiXSwic291cmNlc0NvbnRlbnQiOlsiLy9vdXItZG9tYWluLmNvbS9uZXctbWVldHVwXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5ld01lZXR1cEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtXCI7XHJcbmZ1bmN0aW9uIE5ld01lZXR1cFBhZ2UoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihlbnRlcmVkTWVldHVwRGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coZW50ZXJlZE1lZXR1cERhdGEpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LW1lZXR1cFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7IC8vbGF0ZXIgcGFydCBtdXN0IGJlIHNhbWUgYXMgdGhhdCBvZiB0aGUgZm9sZGVyIG5hbWUgdGhpcyBqcyBmaWxlIGlzIGNvbnRhaW5lZFxyXG4gICAgLy8gY29uc29sZS5sb2coZW50ZXJlZE1lZXR1cERhdGEpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH1cclxuICByZXR1cm4gPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlO1xyXG5cclxuLy8gb3VyLWRvbWFpbi5jb20vbmV3LW1lZXR1cFxyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8vIGltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybVwiO1xyXG5cclxuLy8gZnVuY3Rpb24gTmV3TWVldHVwUGFnZSgpIHtcclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbi8vICAgYXN5bmMgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihlbnRlcmVkTWVldHVwRGF0YSkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LW1lZXR1cFwiLCB7XHJcbi8vICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuLy8gICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbi8vICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9IC8+O1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBOZXdNZWV0dXBQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTmV3TWVldHVwRm9ybSIsIk5ld01lZXR1cFBhZ2UiLCJyb3V0ZXIiLCJhZGRNZWV0dXBIYW5kbGVyIiwiZW50ZXJlZE1lZXR1cERhdGEiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm9uQWRkTWVldHVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/new-meetup/index.js\n"));

/***/ })

});