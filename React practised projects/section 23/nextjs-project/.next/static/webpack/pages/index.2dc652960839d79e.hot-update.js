"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ \"./components/layout/Layout.js\");\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First MeetUp\",\n        image: \"https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second MeetUp\",\n        image: \"https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg\",\n        address: \"Some address 10, 1234509 Some City\",\n        description: \"This is the second meetup\"\n    }, \n];\nfunction HomePage(props) {\n    //   const [loadedMeetups, setLoadedMeetups] = useState([]);\n    //   useEffect(() => {\n    //     //send a http request and fetch data\n    //     setLoadedMeetups(DUMMY_MEETUPS);\n    //   }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"D:\\\\React projects\\\\NextJS\\\\nextjs-project\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React projects\\\\NextJS\\\\nextjs-project\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFFUztBQUNkO0FBQzVDLElBQU1JLGFBQWEsR0FBRztJQUNwQjtRQUNFQyxFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxLQUFLLEVBQ0gsaUZBQWlGO1FBQ25GQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDQyxXQUFXLEVBQUUsd0JBQXdCO0tBQ3RDO0lBRUQ7UUFDRUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QkMsS0FBSyxFQUNILGlGQUFpRjtRQUNuRkMsT0FBTyxFQUFFLG9DQUFvQztRQUM3Q0MsV0FBVyxFQUFFLDJCQUEyQjtLQUN6QztDQUNGO0FBRUQsU0FBU0MsUUFBUSxDQUFDQyxLQUFLLEVBQUU7SUFDdkIsNERBQTREO0lBQzVELHNCQUFzQjtJQUN0QiwyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBQ3ZDLFlBQVk7SUFFWixxQkFDRSw4REFBQ1gsaUVBQU07OzBCQUVMLDhEQUFDQyxzRUFBVTtnQkFBQ1csT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU87Ozs7O29CQUFJO1lBQUEsR0FDeEM7Ozs7OztZQUFTLENBQ1Q7Q0FDSDtBQWJRRixLQUFBQSxRQUFROztBQThEakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBNZWV0VXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IFwibTFcIixcclxuICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldFVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3dvb2NvbW1lcmNlLmNvbS93cC1jb250ZW50L3RoZW1lcy93b28vaW1hZ2VzL3djLW1lZXR1cHMvaG9zdC1tZWV0dXAuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA1LCAxMjM0NSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXBcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldFVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3dvb2NvbW1lcmNlLmNvbS93cC1jb250ZW50L3RoZW1lcy93b28vaW1hZ2VzL3djLW1lZXR1cHMvaG9zdC1tZWV0dXAuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyAxMCwgMTIzNDUwOSBTb21lIENpdHlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgdGhlIHNlY29uZCBtZWV0dXBcIixcclxuICB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAvLyAgIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAvLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAgIC8vc2VuZCBhIGh0dHAgcmVxdWVzdCBhbmQgZmV0Y2ggZGF0YVxyXG4gIC8vICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpO1xyXG4gIC8vICAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgey8qIDxNZWV0VXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9IC8+OyAqL31cclxuICAgICAgPE1lZXRVcExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30gLz47XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG4vL21ldGhvZDI6IHByZWZlcmVkIHdoZW4gcmVxdWVzdCBvYmplY3QgaXMgbmVlZGVkIHRvIGJlIGFjY2Vzc2VkICwgaWYgZGF0YSBjaGFuZ3MgZXZlcnkgc2Vjb25kIGFuZCB3aGVuIHJldmFsaWRhdGUgZG9lc250IGhlbHAgZWl0aGVyIFtTRVJWRVIgU0lERSBQUk9QU11cclxuLy90aGlzIGZ1bmN0aW9uIHdpbGwgbm90IHJ1biBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3MgYW5kIGFsd2F5cyBvbiB0aGUgc2VydmVyIGFmdGVyIGRlcGxveWVtZW50XHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAvL2ZldGNoIGRhdGEgZnJvbSBhbiBhcGlcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgICAvL3JldmFsaWRhdGUgY2Fubm90IGJlIHNldHRlZCBoZXJlIGFuZCBpdCBkb2Vzbid0IG1ha2UgYSBzZW5zZSBoZXJlXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuLy8gbWV0aG9kIDEgOiBwcmVmZXJkIHdoZW4gZG9udCBuZWVkIGFjY2VzcyB0byByZXF1ZXN0IG9iamVjdCBhbmQgdGhlIGRhdGEgY2hhbmdlcyBjb250aW5vdXNseSA6IGZhc3RlciBbU1RBVElDIFBST1BTXVxyXG4vLyBnZXRTdGF0aWNQcm9wcyBpcyBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgdGhlIGNvbXBvbmVudCBmdW5jdGlvblxyXG4vLyBEQVRBIEZFVENISU5HIEFORCBQUkUtUkVORERFUklORyBGRUFUVVJFIElTIEVYUExBSU5FRCBIRVJFXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAvL3RoaXMgd2lsbCBhbHNvIGhhdmUgYSBjb250ZXh0IGluIHdoaWNoIGl0IGRvZW4ndCBoYXZlIHJlcXVlc3Qgb3IgcmVzcG9uc2UgYnV0IGEgcGFyYW1zXHJcbiAgLy9hbnkgY29kZSB3cml0dGVuIGhlcmUgd2lsbCBub3QgZXhlY3V0ZSBvbiB0aGUgY2xpZW50IHNpZGVcclxuICAvL3RoaXMgY29kZSBpcyBleGVjdXRlZCBkdXJpbmcgdGhlIGJ1aWxkIHByb2Nlc3NcclxuXHJcbiAgLy9lZzpmZXRjaCBkYXRhIGZyb20gYXBpXHJcblxyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYW5zaGlkYTphbnNoaWRhMTIzQGNsdXN0ZXIwLndyc3BwajEubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIC8vIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7fSkpLFxyXG4gICAgfSwgLy90aGUgcHJvcHMgb2J0YWluZWQgZnJvbSB0aGUgY29tcG9uZW50IHdpbGwgYmUgc2V0IGFzIGEgcHJvcHMgaGVyZVxyXG4gICAgLy9JTVBPUlROQUQgOiBUSEVTRSBPQlRBSU5FRCBQUk9QUyBXSUxMIEJFIFNFVCBBUyBUSEUgUFJPUFMgT0YgVEhFIENPTVBPTkVOVFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgICAvL3RvIHVubG9jayB0aGUgZmVhdHVyZSBvZiBpbmNyZW1lbnRhbCBzdGF0aWMgZ2VuZXJhdGlvblxyXG4gICAgLy8gcmV2YWxpZGF0ZTogMTAgaSBnaXZlbiBuZXh0IGpzIHdpbGwgd2FpdCBmb3IgMTAgcyB1bnRpbCBpdCByZWdlbmVyYXRlcyB0aGlzIHBhZ2UgZnJvIGFuIGluY29taW5nIHJlcXVlc3RcclxuICAgIC8vaWUgaWYgdGhlcmUgYXJlIHJlcXVlc3RzIGNvbWluZyB0byB0aGlzIHBhZ2UuZWFjaCAxMCBzZWNvbmRzIHRoZSBwYWdlIHdpbGwgYmUgbmV3bHkgbG9hZGVkIHJlcGxhY2luZyBvbGQgcGFnZXNcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIk1lZXRVcExpc3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRVTU1ZX01FRVRVUFMiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});