exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 7594:
/***/ ((module) => {

// Exports
module.exports = {
	"hintModal": "hint_hintModal__IMXSw",
	"hintLightBulb": "hint_hintLightBulb__rKkff"
};


/***/ }),

/***/ 5155:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "modal_modal__OcmYl",
	"modalCloseButton": "modal_modalCloseButton__C6TE7"
};


/***/ }),

/***/ 7898:
/***/ ((module) => {

// Exports
module.exports = {
	"nextLevelButton": "nextlevel_nextLevelButton__yzAzw",
	"successIcon": "nextlevel_successIcon__YSObs",
	"nextLevelModal": "nextlevel_nextLevelModal__rCYie"
};


/***/ }),

/***/ 822:
/***/ ((module) => {

// Exports
module.exports = {
	"passwordForm": "passwordForm_passwordForm__jaDdU",
	"passwordFormInputWrapper": "passwordForm_passwordFormInputWrapper__YgeR5",
	"cursor-blink": "passwordForm_cursor-blink__V_ngC",
	"passwordFormErrorMessage": "passwordForm_passwordFormErrorMessage__cCb0A"
};


/***/ }),

/***/ 5753:
/***/ ((module) => {

// Exports
module.exports = {
	"levelScreen": "level_levelScreen__AsPXl",
	"instructions": "level_instructions__BgsON",
	"password": "level_password__HD86e",
	"gif": "level_gif__IG1cs",
	"buttons": "level_buttons__3aMap"
};


/***/ }),

/***/ 4121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/light-bulb-icon.03d2570b.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42iWLOw5EUABF72jmNSaZUq+gUykkViC0EgULsAALYQXWQaG1DPZxfN67pzonucLDSGTkEgZPEi1/EkJ+dHKjZ+JgcFKQMrJwcRJRiRjDxvWw8yWWREBjQ03gTiU+84NP+erHxpVV1m58OEIbEQhE7QAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 9327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hint_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7594);
/* harmony import */ var _hint_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_hint_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5155);
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _images_light_bulb_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4121);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3135);
/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1871);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_4__, rehype_raw__WEBPACK_IMPORTED_MODULE_5__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_4__, rehype_raw__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import ReactDOM from 'react-dom';


// import remarkGfm from 'remark-gfm';


const customLoader = ({ src  })=>{
    return src;
};
const Hint = ({ hints =[]  })=>{
    const { 0: showHint , 1: setShowHint  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        react_modal__WEBPACK_IMPORTED_MODULE_3___default().setAppElement("body");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_hint_module_css__WEBPACK_IMPORTED_MODULE_7___default().hint),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: (_hint_module_css__WEBPACK_IMPORTED_MODULE_7___default().hintButton),
                onClick: ()=>setShowHint(true)
                ,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        src: _images_light_bulb_icon_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        height: 25,
                        width: 25,
                        loader: customLoader,
                        unoptimized: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "Hint?"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
                className: `${(_modal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modal)} ${(_hint_module_css__WEBPACK_IMPORTED_MODULE_7___default().hintModal)}`,
                isOpen: showHint,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_modal_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalCloseButton),
                        onClick: ()=>setShowHint(false)
                        ,
                        children: "x"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: hints.length === 1 ? "Got stuck? Try this" : "Got stuck? Try these"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: hints.map((hint)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_hint_module_css__WEBPACK_IMPORTED_MODULE_7___default().hintLightBulb),
                                        children: `💡 `
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                        rehypePlugins: [
                                            rehype_raw__WEBPACK_IMPORTED_MODULE_5__["default"]
                                        ],
                                        children: hint
                                    })
                                ]
                            }, hint)
                        )
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hint);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ nextLevel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./images/success-icon.png
/* harmony default export */ const success_icon = ({"src":"/_next/static/media/success-icon.5ae69eb3.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAa0lEQVR42jWNMQ5GQBhEv+v4t/BzDwktLQdQug8lJ3CKbUVWolineEwimkne5E3GKJhoOAl4nJkxcrOQkNNyqaJmZmUgUtLhTXIi7MnY+BOMIDkKf+ykqPC0kjdh9U4ckU5yqozvj8NzfLcPXpxdeyYiwZQAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./node_modules/next/dist/client/image.js
var client_image = __webpack_require__(9749);
// EXTERNAL MODULE: ./components/next_level_popup/nextlevel.module.css
var nextlevel_module = __webpack_require__(7898);
var nextlevel_module_default = /*#__PURE__*/__webpack_require__.n(nextlevel_module);
// EXTERNAL MODULE: ./components/modal.module.css
var modal_module = __webpack_require__(5155);
var modal_module_default = /*#__PURE__*/__webpack_require__.n(modal_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9931);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
// EXTERNAL MODULE: ./components/password_form/passwordForm.tsx
var passwordForm = __webpack_require__(4092);
;// CONCATENATED MODULE: ./components/next_level_popup/nextLevel.tsx






// @ts-ignore


const customLoader = ({ src  })=>{
    return src;
};
const NextLevel = ({ currentLevel  })=>{
    const { 0: showNextLevelPrompt , 1: setShowNextLevelPrompt  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        external_react_modal_default().setAppElement("body");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (nextlevel_module_default()).nextLevel,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                className: (nextlevel_module_default()).nextLevelButton,
                onClick: ()=>setShowNextLevelPrompt(true)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (nextlevel_module_default()).successIcon,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(client_image["default"], {
                            src: success_icon,
                            height: 23,
                            width: 23,
                            loader: customLoader,
                            unoptimized: true
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Cracked it!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_modal_default()), {
                className: `${(modal_module_default()).modal} ${(nextlevel_module_default()).nextLevelModal}`,
                isOpen: showNextLevelPrompt,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setShowNextLevelPrompt(false)
                        ,
                        className: (modal_module_default()).modalCloseButton,
                        children: "x"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(passwordForm/* default */.Z, {
                        level: currentLevel + 1,
                        description: "Enter the password you've found \uD83D\uDDDD\uFE0F",
                        shouldMoveToNextLevel: true
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const nextLevel = (NextLevel);


/***/ }),

/***/ 4092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_handleCookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9128);
/* harmony import */ var _levelsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3047);
/* harmony import */ var _passwordForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(822);
/* harmony import */ var _passwordForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_passwordForm_module_css__WEBPACK_IMPORTED_MODULE_4__);





const PasswordForm = ({ level , description , setDisplayLockScreen , shouldMoveToNextLevel  })=>{
    const { 0: inputValue , 1: setInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: wrongPassword , 1: setWrongPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inputRef.current) inputRef.current.focus();
    }, [
        inputRef
    ]);
    const onChange = (e)=>{
        setWrongPassword(false);
        setInputValue(e.currentTarget.value);
    };
    const onSubmit = (e)=>{
        if (e) e.preventDefault();
        if (inputValue === JSON.parse("[\"null\",\"elmonTrazana\",\"gaelinGrexidor\",\"eldrinNaefina\",\"bemereAdlana\",\"lusserinaUriceran\",\"elreValnan\",\"mathienneGengeiros\",\"aleaLorawraek\",\"folenSardan\",\"orymCarphine\",\"folreFarzorwyn\",\"sinahtDamenor\",\"adorellanElaric\",\"yaereeneTortumal\",\"omyliaAeydark\",\"saphielleLiaxidor\",\"ochilysseUriydark\",\"saryaFalee\",\"kasulaRaloyarus\",\"deularaOlafir\",\"merethylVirhice\",\"syndraKealynn\",\"naesalaRalogeiros\",\"felaernKelzana\",\"tannatarIarqen\",\"jhaanOmacyne\",\"ailreZinsatra\",\"jeardraPerydark\",\"sakaalaYinzorwyn\",\"aelrieAratoris\"]")[level]) {
            setInputValue("");
            const stringifiedPasswords = (0,_utils_handleCookies__WEBPACK_IMPORTED_MODULE_3__/* .getCookie */ .ej)("levelsPasswords");
            const passwords = stringifiedPasswords ? JSON.parse(stringifiedPasswords) : {};
            (0,_utils_handleCookies__WEBPACK_IMPORTED_MODULE_3__/* .setCookie */ .d8)("levelsPasswords", JSON.stringify({
                ...passwords,
                [level]: inputValue
            }));
            if (setDisplayLockScreen) setDisplayLockScreen(false);
            setWrongPassword(false) // The password isn't false anymore
            ;
            if (shouldMoveToNextLevel) {
                const nextLevel = level;
                console.debug(`Moving to level ${nextLevel} out of ${_levelsConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].length */ .Z.length}`);
                if (nextLevel === _levelsConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"].length */ .Z.length) {
                    window.location.href = "/win";
                    return;
                }
                const nextLevelConfig = _levelsConfig__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[nextLevel]; // Off by one, arrays are zero-based
                const nextLevelURL = `/levels/${nextLevelConfig.tab.toLowerCase()}/level${nextLevelConfig.levelIndex}`;
                window.location.href = nextLevelURL;
            }
        } else {
            setWrongPassword(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: (_passwordForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().passwordForm),
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: description
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_passwordForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().passwordFormInputWrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: inputValue,
                        onChange: onChange,
                        ref: inputRef,
                        onBlur: (e)=>e.target.focus()
                        ,
                        size: 15
                    }),
                    !inputValue.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    visibility: wrongPassword ? "visible" : "hidden"
                },
                className: (_passwordForm_module_css__WEBPACK_IMPORTED_MODULE_4___default().passwordFormErrorMessage),
                children: "Wrong password, please try again"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>onSubmit
                ,
                type: "submit",
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordForm);


/***/ })

};
;