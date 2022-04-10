exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 7205:
/***/ ((module) => {

// Exports
module.exports = {
	"lockScreen": "lockScreen_lockScreen__pmBaF",
	"lockScreenOverlay": "lockScreen_lockScreenOverlay__nLcqL"
};


/***/ }),

/***/ 9255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ levelWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/levelsUtils.ts
var levelsUtils = __webpack_require__(540);
// EXTERNAL MODULE: ./components/password_form/passwordForm.tsx
var passwordForm = __webpack_require__(4092);
// EXTERNAL MODULE: ./components/password_form/lockScreen.module.css
var lockScreen_module = __webpack_require__(7205);
var lockScreen_module_default = /*#__PURE__*/__webpack_require__.n(lockScreen_module);
;// CONCATENATED MODULE: ./components/password_form/lockScreen.tsx



const LockScreen = ({ level , setDisplayLockScreen  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (lockScreen_module_default()).lockScreen,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (lockScreen_module_default()).lockScreenOverlay,
            children: /*#__PURE__*/ jsx_runtime_.jsx(passwordForm/* default */.Z, {
                level: level,
                description: `Enter the password for level ${level}`,
                setDisplayLockScreen: setDisplayLockScreen
            })
        })
    });
};
/* harmony default export */ const lockScreen = (LockScreen);

;// CONCATENATED MODULE: ./components/level_wrapper/levelWrapper.tsx




const LevelWrapper = ({ currentLevelComponent , currentLevel  })=>{
    const { 0: displayLockScreen , 1: setDisplayLockScreen  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setDisplayLockScreen(!(0,levelsUtils/* passwordMatch */.X)(currentLevel));
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: !displayLockScreen && (0,levelsUtils/* passwordMatch */.X)(currentLevel) ? currentLevelComponent : /*#__PURE__*/ jsx_runtime_.jsx(lockScreen, {
            level: currentLevel,
            setDisplayLockScreen: setDisplayLockScreen
        })
    });
};
/* harmony default export */ const levelWrapper = (LevelWrapper);


/***/ }),

/***/ 540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ passwordMatch)
/* harmony export */ });
/* harmony import */ var _handleCookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9128);

const passwordMatch = (level)=>{
    const stringifiedPasswords = (0,_handleCookies__WEBPACK_IMPORTED_MODULE_0__/* .getCookie */ .ej)("levelsPasswords");
    const passwords = stringifiedPasswords ? JSON.parse(stringifiedPasswords) : {};
    return passwords[level] && passwords[level] === JSON.parse("[\"null\",\"elmonTrazana\",\"gaelinGrexidor\",\"eldrinNaefina\",\"bemereAdlana\",\"lusserinaUriceran\",\"elreValnan\",\"mathienneGengeiros\",\"aleaLorawraek\",\"folenSardan\",\"orymCarphine\",\"folreFarzorwyn\",\"sinahtDamenor\",\"adorellanElaric\",\"yaereeneTortumal\",\"omyliaAeydark\",\"saphielleLiaxidor\",\"ochilysseUriydark\",\"saryaFalee\",\"kasulaRaloyarus\",\"deularaOlafir\",\"merethylVirhice\",\"syndraKealynn\",\"naesalaRalogeiros\",\"felaernKelzana\",\"tannatarIarqen\",\"jhaanOmacyne\",\"ailreZinsatra\",\"jeardraPerydark\",\"sakaalaYinzorwyn\",\"aelrieAratoris\"]")[level];
};


/***/ })

};
;