"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// //these js files are notcfor definig,rendering or returning recat components\n// //this contains functions with server side codes\n// //this only runs on the server\n// //url for this file\n// // /api/new-meetp\n// import { MongoClient } from \"mongodb\";\n// //this function only triggers for the POST requests\n// async function handler(req, res) {\n//   // req for incoming request and res for response\n//   if (req.method === \"POST\") {\n//     const data = req.body;\n//     // const { title, image, address, description } = data;\n//     const client = await MongoClient.connect(\n//       \"mongodb+srv://anshida:anshida123@cluster0.wrsppj1.mongodb.net/meetups?retryWrites=true&w=majority\"\n//     ); //datanbase name meetup here\n//     const db = client.db();\n//     const meetupsCollection = db.collection(\"meetups\");\n//     const result = await meetupsCollection.insertOne(data);\n//     console.log(result);\n//     client.close();\n//     res.status(201).json({ message: \"Meetup inserted!\" });\n//   }\n// }\n// export default handler;\n\n// /api/new-meetup\n// POST /api/new-meetup\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        console.log(data);\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://anshida:anshida123@cluster0.wrsppj1.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrRUFBK0U7QUFDL0UsbURBQW1EO0FBQ25ELGlDQUFpQztBQUVqQyxzQkFBc0I7QUFDdEIsb0JBQW9CO0FBRXBCLHlDQUF5QztBQUV6QyxzREFBc0Q7QUFDdEQscUNBQXFDO0FBQ3JDLHFEQUFxRDtBQUNyRCxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLDhEQUE4RDtBQUM5RCxnREFBZ0Q7QUFDaEQsNEdBQTRHO0FBQzVHLHNDQUFzQztBQUN0Qyw4QkFBOEI7QUFDOUIsMERBQTBEO0FBQzFELDhEQUE4RDtBQUM5RCwyQkFBMkI7QUFDM0Isc0JBQXNCO0FBQ3RCLDZEQUE2RDtBQUM3RCxNQUFNO0FBQ04sSUFBSTtBQUVKLDBCQUEwQjtBQUVZO0FBRXRDLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFFdkIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUMsQ0FBQztRQUVsQixNQUFNSSxNQUFNLEdBQUcsTUFBTVQsd0RBQW1CLENBQ3RDLG1HQUFtRyxDQUNwRztRQUNELE1BQU1XLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVsRCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1YsSUFBSSxDQUFDO1FBRXRERSxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLENBQUM7UUFFcEJMLE1BQU0sQ0FBQ08sS0FBSyxFQUFFLENBQUM7UUFFZmIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsa0JBQWtCO1NBQUUsQ0FBQyxDQUFDO0tBQ3ZEO0NBQ0Y7QUFFRCxpRUFBZWxCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vdGhlc2UganMgZmlsZXMgYXJlIG5vdGNmb3IgZGVmaW5pZyxyZW5kZXJpbmcgb3IgcmV0dXJuaW5nIHJlY2F0IGNvbXBvbmVudHNcclxuLy8gLy90aGlzIGNvbnRhaW5zIGZ1bmN0aW9ucyB3aXRoIHNlcnZlciBzaWRlIGNvZGVzXHJcbi8vIC8vdGhpcyBvbmx5IHJ1bnMgb24gdGhlIHNlcnZlclxyXG5cclxuLy8gLy91cmwgZm9yIHRoaXMgZmlsZVxyXG4vLyAvLyAvYXBpL25ldy1tZWV0cFxyXG5cclxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy8gLy90aGlzIGZ1bmN0aW9uIG9ubHkgdHJpZ2dlcnMgZm9yIHRoZSBQT1NUIHJlcXVlc3RzXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuLy8gICAvLyByZXEgZm9yIGluY29taW5nIHJlcXVlc3QgYW5kIHJlcyBmb3IgcmVzcG9uc2VcclxuLy8gICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcclxuLy8gICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcclxuLy8gICAgIC8vIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcclxuLy8gICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbi8vICAgICAgIFwibW9uZ29kYitzcnY6Ly9hbnNoaWRhOmFuc2hpZGExMjNAY2x1c3RlcjAud3JzcHBqMS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbi8vICAgICApOyAvL2RhdGFuYmFzZSBuYW1lIG1lZXR1cCBoZXJlXHJcbi8vICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4vLyAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbi8vICAgICBjbGllbnQuY2xvc2UoKTtcclxuLy8gICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogXCJNZWV0dXAgaW5zZXJ0ZWQhXCIgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy8gL2FwaS9uZXctbWVldHVwXHJcbi8vIFBPU1QgL2FwaS9uZXctbWVldHVwXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICBcIm1vbmdvZGIrc3J2Oi8vYW5zaGlkYTphbnNoaWRhMTIzQGNsdXN0ZXIwLndyc3BwajEubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTWVldHVwIGluc2VydGVkIVwiIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();