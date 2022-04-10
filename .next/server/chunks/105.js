exports.id = 105;
exports.ids = [105];
exports.modules = {

/***/ 7672:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "navbar_navbar__KpPJ6",
	"currentPage": "navbar_currentPage__Enbha",
	"links": "navbar_links__Aqu2_"
};


/***/ }),

/***/ 8105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7672);
/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);




const pages = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Levels",
        path: "/levels"
    },
    {
        title: "About",
        path: "/about"
    }, 
];
const Navbar = ({ currentPage  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar)}`,
        children: [
            currentPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().currentPage),
                children: currentPage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().links),
                children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        href: page.path,
                        children: page.title
                    }, page.title)
                )
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ })

};
;