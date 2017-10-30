(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(6);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(143);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var actionCreators = {
    addErrorMessage: function (fieldName, errorMessage) { return ({ type: 'ADD_ERROR_MESSAGE', fieldName: fieldName, errorMessage: errorMessage }); },
};
var reducer = function (state, action) {
    switch (action.type) {
        case "ADD_ERROR_MESSAGE":
            if (state !== null && state !== undefined) {
                var isExist_1 = false;
                var newobj = state.map(function (error) {
                    if (error.fieldName === action.fieldName) {
                        isExist_1 = true;
                        return Object.assign({}, error, { errorMessage: action.errorMessage });
                    }
                    else {
                        return error;
                    }
                });
                if (!isExist_1) {
                    return state.concat([
                        {
                            fieldName: action.fieldName,
                            errorMessage: action.errorMessage
                        }
                    ]);
                }
                else {
                    return newobj;
                }
            }
            else {
                return state.concat([
                    {
                        fieldName: action.fieldName,
                        errorMessage: action.errorMessage
                    }
                ]);
            }
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? [] : state;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapDispatchToProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInformationContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_PersonalInformationComponent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Prospect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_validationMessage__ = __webpack_require__(4);




//import { onInputChange as onChange } from '../../actions/ProspectAction';


//import { AddErrorMessage } from '../../actions/ValidationMessageAction';
var mapDispatchToProps = function (dispatch) { return ({
    valicInputChange: function (e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var inputField = e.target;
        //dispatch(onChange(name, value));
        dispatch(__WEBPACK_IMPORTED_MODULE_4__store_Prospect__["a" /* actionCreators */].onInputChange(name, value));
        if (inputField.isValid === false || inputField.isFormatValid === false) {
            //dispatch(AddErrorMessage(name, inputField.errorMessage));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, inputField.errorMessage));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().addClass('has-error has-feedback');
        }
        else {
            //dispatch(AddErrorMessage(name, ''));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, ''));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
        }
    },
    onChange: function (e) {
        var name = e.target.name;
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var inputField = e.target;
        //dispatch(onChange(name, value));
        dispatch(__WEBPACK_IMPORTED_MODULE_4__store_Prospect__["a" /* actionCreators */].onInputChange(name, value));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utility_Utility__["a" /* validateFormField */])(inputField);
        if (inputField.isValid === false || inputField.isFormatValid === false) {
            //dispatch(AddErrorMessage(name, inputField.errorMessage));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, inputField.errorMessage));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().addClass('has-error has-feedback');
        }
        else {
            //dispatch(AddErrorMessage(name, ''));
            dispatch(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage(name, ''));
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
        }
    }
}); };
var mapStateToProps = function (state) { return ({
    ssn: state.ProspectDetail.ssn,
    title: state.ProspectDetail.title,
    firstName: state.ProspectDetail.firstName,
    lastName: state.ProspectDetail.lastName,
    middleInitial: state.ProspectDetail.middleInitial,
    dateOfBirth: state.ProspectDetail.dateOfBirth,
    gender: state.ProspectDetail.gender,
    usCitizen: state.ProspectDetail.usCitizen,
    maritalStatus: state.ProspectDetail.maritalStatus,
    homeAddressLine1: state.ProspectDetail.homeAddressLine1,
    homeAddressLine2: state.ProspectDetail.homeAddressLine2,
    homeAddressLine3: state.ProspectDetail.homeAddressLine3,
    homeAddressCity: state.ProspectDetail.homeAddressCity,
    homeAddressState: state.ProspectDetail.homeAddressState,
    homeAddressZipCode: state.ProspectDetail.homeAddressZipCode,
    mailingAddressLine1: state.ProspectDetail.mailingAddressLine1,
    mailingAddressLine2: state.ProspectDetail.mailingAddressLine2,
    mailingAddressLine3: state.ProspectDetail.mailingAddressLine3,
    mailingAddressCity: state.ProspectDetail.mailingAddressCity,
    mailingAddressState: state.ProspectDetail.mailingAddressState,
    mailingAddressZipCode: state.ProspectDetail.mailingAddressZipCode,
    homePhone: state.ProspectDetail.homePhone,
    workPhone: state.ProspectDetail.workPhone,
    otherPhone: state.ProspectDetail.otherPhone,
    referral: state.ProspectDetail.referral,
    emailAddress: state.ProspectDetail.emailAddress,
    states: state.states
}); };
var PersonalInformationContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_PersonalInformationComponent__["a" /* default */]);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(7);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(145);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export prospectId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agileneturl; });
var prospectId = 1963;
var agileneturl = 'https://d4.valic.com/agilenet5/';


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_input_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_input_mask__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var ValicInput = /** @class */ (function (_super) {
    __extends(ValicInput, _super);
    function ValicInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangeEmail = _this.onChangeEmail.bind(_this);
        _this.onChangePhoneNumber = _this.onChangePhoneNumber.bind(_this);
        _this.onChangeSSN = _this.onChangeSSN.bind(_this);
        _this.onChangeText = _this.onChangeText.bind(_this);
        _this.onChangeNumber = _this.onChangeNumber.bind(_this);
        return _this;
    }
    ValicInput.prototype.onChangeText = function (e) {
        e.preventDefault();
        if (this.props.onChange !== undefined) {
            this.props.onChange(e);
        }
    };
    ValicInput.prototype.onChangeNumber = function (e) {
        e.preventDefault();
        this.props.onChange(e);
    };
    ValicInput.prototype.onChangeEmail = function (e) {
        e.preventDefault();
        var isValid = true;
        var inputField = e.target;
        isValid = this.isValid(inputField);
        inputField.errorMessage = '';
        if (isValid === false) {
            //this.addError(this.state,inputField.name, inputField.name + " is required");
            inputField.isValid = false;
            inputField.errorMessage = inputField.name + " is required";
        }
        else {
            inputField.isValid = true;
            if (this.validateEmailFormat(inputField) === false) {
                inputField.isFormatValid = false;
                inputField.errorMessage = inputField.name + ' is invalid';
            }
            else {
                inputField.isFormatValid = true;
                inputField.errorMessage = '';
                //$(inputField).parent().removeClass('has-error has-feedback');       
                //this.addError(this.props.state,inputField.name, "");
            }
        }
        this.props.onChange(e);
    };
    ValicInput.prototype.onChangePhoneNumber = function (e) {
        e.preventDefault();
        var isValid = true;
        var inputField = e.target;
        isValid = this.isValid(inputField);
        if (isValid === false) {
            //this.addError(this.state,inputField.name, inputField.name + " is required");
            inputField.isValid = false;
            inputField.errorMessage = inputField.name + " is required";
        }
        else {
            inputField.isValid = true;
            if (this.validatePhoneNumberFormat(inputField) === false) {
                //$(inputField).parent().addClass('has-error has-feedback');       					
                inputField.isFormatValid = false;
                inputField.errorMessage = inputField.name + ' is invalid';
            }
            else {
                inputField.isFormatValid = true;
                inputField.errorMessage = '';
            }
        }
        this.props.onChange(e);
    };
    ValicInput.prototype.onChangeSSN = function (e) {
        e.preventDefault();
        var isValid = true;
        var inputField = e.target;
        isValid = this.isValid(inputField);
        if (isValid === false) {
            inputField.isValid = false;
            inputField.errorMessage = inputField.name + " is required";
        }
        else {
            inputField.isValid = true;
            if (this.validateSSNFormat(inputField) === false) {
                inputField.isFormatValid = false;
                inputField.errorMessage = inputField.name + ' is invalid';
            }
            else {
                inputField.isFormatValid = true;
                inputField.errorMessage = '';
            }
        }
        this.props.onChange(e);
    };
    ValicInput.prototype.validateEmailFormat = function (input) {
        var isFormatValid = true;
        var format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (input.value !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
        return isFormatValid;
    };
    ValicInput.prototype.validateSSNFormat = function (input) {
        var isFormatValid = true;
        var format = /^[0-9A-Z]{3}-[0-9A-Z]{2}-[0-9A-Z]{4}$/;
        if (input.value !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
        return isFormatValid;
    };
    ValicInput.prototype.validatePhoneNumberFormat = function (input) {
        var isFormatValid = true;
        var format = /(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}/;
        if (input.value !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
        return isFormatValid;
    };
    ValicInput.prototype.isValid = function (input) {
        var isValid = true;
        //console.log(input)
        if (input.getAttribute('required') !== null && input.value === "") {
            //$(input).parent().addClass('has-error has-feedback');           
            isValid = false;
        }
        else {
            // $(input).parent().removeClass('has-error has-feedback');
            //input.nextSibling.textContent = "";
            isValid = true;
        }
        return isValid;
    };
    ValicInput.prototype.render = function () {
        var inputType = this.props.type !== undefined && this.props.type !== null ? this.props.type : "text";
        var inputControl;
        var props = __assign({}, this.props);
        switch (inputType.toString().toLowerCase()) {
            case "phone":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_input_mask___default.a, __assign({}, props, { onChange: this.onChangePhoneNumber }));
                break;
            case "number":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({}, props, { type: "number", onChange: this.onChangeNumber }));
                break;
            case "email":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({}, props, { type: "email", onChange: this.onChangeEmail }));
                break;
            case "ssn":
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_input_mask___default.a, __assign({}, props, { onChange: this.onChangeSSN }));
                break;
            default:
                inputControl = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", __assign({}, props, { type: "text", onChange: this.onChangeText }));
                break;
        }
        return inputControl;
    };
    return ValicInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (ValicInput);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return errorClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var isFieldValid = function (input) {
    var isValid = true;
    if (input.getAttribute('required') !== null && input.value === "") {
        isValid = false;
    }
    else {
        isValid = true;
    }
    return isValid;
};
var validateFormField = function (inputField) {
    var isValid = true;
    isValid = isFieldValid(inputField);
    inputField.isValid = isValid;
    if (isValid === false) {
        inputField.errorMessage = inputField.name + " is required";
    }
    else {
        if (validateFormat(inputField) === false) {
            inputField.errorMessage = inputField.name + " is invalid";
            inputField.isFormatValid = false;
        }
        else {
            inputField.errorMessage = '';
            inputField.isFormatValid = true;
        }
    }
};
/*
const validateAllField = (e) => {
    let inputs = document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; ++index) {
        validateFormField(inputs[index]);
    }
}*/
var validateFormat = function (input) {
    var isFormatValid = true;
    var format = "";
    if (input !== undefined) {
        if (input.type === "date") {
            //format =/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
            if (input.validity !== undefined && (input.validity.badInput === true || input.validity.valid === false)) {
                return false;
            }
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(input).attr('data-datebirth') !== undefined && input.value !== "" && input.valueAsDate >= new Date()) {
                return false;
            }
            if (input.value !== "" && (input.valueAsDate.getFullYear() >= 2099 || input.valueAsDate.getFullYear() <= 1900)) {
                return false;
            }
        }
        if (input.value !== "" && format !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
    }
    return isFormatValid;
};
var errorClass = function (errors, fieldName) {
    if (errors !== undefined) {
        errors.forEach(function (error) {
            if (error.fieldName === fieldName && error.errorMessage !== "") {
                return 'has-error has-feedback';
            }
        });
    }
    return '';
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* unused harmony export reducer */
/* unused harmony export actionCreatorsAgentCode */
/* unused harmony export agentCodereducer */
var actionCreators = {
    fetchProspectRequest: function (id) { return ({ type: 'GET_PROSPECT_REQUEST', id: id }); },
    fetchProspectSuccess: function (prospect) { return ({ type: 'GET_PROSPECT', prospect: prospect }); },
    fetchProspectFailed: function () { return ({ type: 'GET_PROSPECT_FAILED' }); },
    onInputChange: function (name, value) { return ({ type: 'ON_INPUT_CHANGE', name: name, value: value }); },
    updateProspectRequest: function () { return ({ type: 'UPDATE_PROSPECT_REQUEST' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case "ON_INPUT_CHANGE":
            return Object.assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        case "GET_PROSPECT":
            return Object.assign({}, action.prospect);
        case "GET_PROSPECT_FAILED":
            return Object.assign({}, null, null);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? {} : state;
    var _a;
};
;
var actionCreatorsAgentCode = {
    setAgentCode: function (agentCode) { return ({ type: 'SET_AGENTCODE', agentCode: agentCode }); }
};
var agentCodereducer = function (state, action) {
    switch (action.type) {
        case "SET_AGENTCODE":
            return action.agentCode;
        default:
            return state === undefined ? "" : state;
    }
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var actionCreators = {
    loaderBegin: function () { return ({ type: 'LOADER_BEGIN' }); },
    loaderEnd: function () { return ({ type: 'LOADER_END' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'LOADER_BEGIN':
            return true;
        case 'LOADER_END':
            return false;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? false : state;
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return actionCreatorsAgentCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return agentCodereducer; });
var actionCreators = {
    fetchProspectRequest: function (id) { return ({ type: 'GET_PROSPECT_REQUEST', id: id }); },
    fetchProspectSuccess: function (prospect) { return ({ type: 'GET_PROSPECT', prospect: prospect }); },
    fetchProspectFailed: function () { return ({ type: 'GET_PROSPECT_FAILED' }); },
    onInputChange: function (name, value) { return ({ type: 'ON_INPUT_CHANGE', name: name, value: value }); },
    updateProspectRequest: function () { return ({ type: 'UPDATE_PROSPECT_REQUEST' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case "ON_INPUT_CHANGE":
            return Object.assign({}, state, (_a = {}, _a[action.name] = action.value, _a));
        case "GET_PROSPECT":
            return Object.assign({}, action.prospect);
        case "GET_PROSPECT_FAILED":
            return Object.assign({}, null, null);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? {} : state;
    var _a;
};
;
var actionCreatorsAgentCode = {
    setAgentCode: function (agentCode) { return ({ type: 'SET_AGENTCODE', agentCode: agentCode }); }
};
var agentCodereducer = function (state, action) {
    switch (action.type) {
        case "SET_AGENTCODE":
            return action.agentCode;
        default:
            return state === undefined ? "" : state;
    }
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var actionCreators = {
    fetchStateRequest: function () { return ({ type: 'GET_STATES_REQUEST' }); },
    fetchStateSuccess: function (states) { return ({ type: 'GET_STATES_SUCCESS', states: states }); },
    fetchStatesFailed: function () { return ({ type: 'GET_STATES_FAILED' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'GET_STATES_SUCCESS':
            return Object.assign([], state, action.states);
        case 'GET_STATES_REQUEST':
        case 'GET_STATES_FAILED':
            return Object.assign([], null, null);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? [] : state;
};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_Prospect_ProspectApi__ = __webpack_require__(21);





function configureStore(history, initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_4__api_Prospect_ProspectApi__["a" /* errorHandler */], __WEBPACK_IMPORTED_MODULE_4__api_Prospect_ProspectApi__["b" /* ProspectMiddleWare */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history)), devToolsExtension ? devToolsExtension() : function (next) { return next; })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__ = __webpack_require__(30);

//import { Layout } from './components/Layout';
//import Home from './components/Home';
//import FetchData from './components/FetchData';
//import Counter from './components/Counter';

var routes = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__containers_ProspectContainer_ProspectEditContainer__["a" /* default */], null)));


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(132);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(140);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(142);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(144);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProspectMiddleWare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_Loader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_validationMessage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_Prospect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_States__ = __webpack_require__(36);
//import * as ProspectAction from '../../actions/ProspectAction';



//import * as ValidationMessage from '../../actions/ValidationMessageAction';





var advisorUrl = __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__["a" /* default */].advisorUrl;
var participantUrl = __WEBPACK_IMPORTED_MODULE_0__apiUrl_dev__["a" /* default */].participantUrl;
var ProspectMiddleWare = function (store) { return function (next) { return function (action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["a" /* GET_PROSPECT_REQUEST */]:
            //next(ProspectAction.loaderBegin());
            next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderBegin());
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(participantUrl + "prospect/" + action.id, {
                method: 'GET'
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                //console.log(data);
                var prospect = {};
                if (data !== undefined && data !== null) {
                    prospect.firstName = data.FirstName;
                    prospect.lastName = data.LastName;
                    prospect.ssn = data.Ssn;
                    prospect.isNew = true;
                    prospect.clientProspectId = data.Id;
                    if (data.Id > 0) {
                        prospect.isNew = false;
                    }
                    else {
                        prospect.isNew = true;
                    }
                    var homeAddressStreet1_1, homeAddressStreet2_1, homeAddressStreet3_1, homeAddressZipCode_1, homeAddressState_1, homeAddressCity_1;
                    var mailingAddressStreet1_1, mailingAddressStreet2_1, mailingAddressStreet3_1, mailingAddressZipCode_1, mailingAddressState_1, mailingAddressCity_1;
                    if (data.Addresses !== undefined && data.Addresses !== null) {
                        data.Addresses["$values"].forEach(function (address) {
                            //data.Addresses.forEach(function (address) {
                            if (address.AddressType === 0) {
                                homeAddressStreet1_1 = address.Street1;
                                homeAddressStreet2_1 = address.Street2;
                                homeAddressStreet3_1 = address.Street3;
                                homeAddressState_1 = address.State;
                                homeAddressCity_1 = address.City;
                                //homeAddressCountry = address.Country;
                                homeAddressZipCode_1 = address.Zip;
                            }
                            else if (address.AddressType === 2) {
                                mailingAddressStreet1_1 = address.Street1;
                                mailingAddressStreet2_1 = address.Street2;
                                mailingAddressStreet3_1 = address.Street3;
                                mailingAddressState_1 = address.State;
                                mailingAddressCity_1 = address.City;
                                //mailingAddressCountry = address.Country;
                                mailingAddressZipCode_1 = address.Zip;
                            }
                        });
                    }
                    var homePhoneNumber_1;
                    var workPhoneNumber_1;
                    var otherPhoneNumber_1;
                    if (data.PhoneNumbers !== null && data.PhoneNumbers !== undefined) {
                        data.PhoneNumbers["$values"].forEach(function (phone) {
                            //data.PhoneNumbers.forEach((phone) => {
                            if (phone.PhoneType === 0) {
                                homePhoneNumber_1 = phone.Number;
                            }
                            else if (phone.PhoneType === 1) {
                                workPhoneNumber_1 = phone.Number;
                            }
                            else if (phone.PhoneType === 5) {
                                otherPhoneNumber_1 = phone.Number;
                            }
                        });
                    }
                    var isReferral = false;
                    if (data.ReferralDate !== null && data.ReferralDate !== undefined && new Date(data.ReferralDate.toString()).getFullYear() > 1900) {
                        isReferral = true;
                    }
                    prospect.title = data.Title;
                    prospect.middleInitial = data.MiddleInitial !== null ? data.MiddleInitial : '';
                    prospect.dateOfBirth = data.DateOfBirth !== null && data.DateOfBirth !== undefined ? new Date(data.DateOfBirth.toString()).toISOString().substr(0, 10) : '';
                    prospect.gender = data.Gender !== null && data.Gender !== undefined ? data.Gender.toString() : '';
                    prospect.usCitizen = data.UsCitizenFlag !== null && data.UsCitizenFlag !== undefined ? data.UsCitizenFlag.toString() : '';
                    prospect.maritalStatus = data.MaritalStatus !== null && data.MaritalStatus !== undefined ? data.MaritalStatus.toString() : '';
                    prospect.homeAddressLine1 = homeAddressStreet1_1;
                    prospect.homeAddressLine2 = homeAddressStreet2_1;
                    prospect.homeAddressLine3 = homeAddressStreet3_1;
                    prospect.homeAddressCity = homeAddressCity_1;
                    prospect.homeAddressState = homeAddressState_1;
                    prospect.homeAddressZipCode = homeAddressZipCode_1;
                    prospect.mailingAddressLine1 = mailingAddressStreet1_1;
                    prospect.mailingAddressLine2 = mailingAddressStreet2_1;
                    prospect.mailingAddressLine3 = mailingAddressStreet3_1;
                    prospect.mailingAddressCity = mailingAddressCity_1;
                    prospect.mailingAddressState = mailingAddressState_1;
                    prospect.mailingAddressZipCode = mailingAddressZipCode_1;
                    prospect.homePhone = homePhoneNumber_1;
                    prospect.workPhone = workPhoneNumber_1;
                    prospect.otherPhone = otherPhoneNumber_1;
                    prospect.referral = isReferral;
                    prospect.emailAddress = data.Email;
                    if (data.ProspectInvestorProfile !== null && data.ProspectInvestorProfile !== undefined) {
                        prospect.previousFunds = data.ProspectInvestorProfile.InvestmentExperience_Flag !== undefined && data.ProspectInvestorProfile.InvestmentExperience_Flag !== null ? data.ProspectInvestorProfile.InvestmentExperience_Flag.toString() : '';
                        prospect.FINRA = data.ProspectInvestorProfile.Finra_Flag !== undefined && data.ProspectInvestorProfile.Finra_Flag !== null ? data.ProspectInvestorProfile.Finra_Flag.toString() : '';
                        prospect.investmentObjective = data.ProspectInvestorProfile.InvestmentObjective;
                        prospect.riskProfile = data.ProspectInvestorProfile.RiskProfile;
                        prospect.annualHouseholdIncomeRange = data.ProspectInvestorProfile.HouseholdIncomeRange;
                        prospect.netWorthRange = data.ProspectInvestorProfile.NetWorthRange;
                        prospect.lifeInsuranceRange = data.ProspectInvestorProfile.LifeInsuranceRange;
                        prospect.taxBracket = data.ProspectInvestorProfile.TaxBracketNumber;
                        prospect.dependentsNo = data.ProspectInvestorProfile.DepedentNumber;
                        prospect.ages = data.ProspectInvestorProfile.Ages;
                        prospect.currentEmployer = data.ProspectInvestorProfile.CurrentEmployer;
                        prospect.employmentStatus = data.ProspectInvestorProfile.EmploymentStatus;
                        prospect.occupation = data.ProspectInvestorProfile.Occupation;
                        prospect.employerAddress = data.ProspectInvestorProfile.EmployerAddress;
                        prospect.employerCity = data.ProspectInvestorProfile.EmployerCity;
                        prospect.employerState = data.ProspectInvestorProfile.EmployerState;
                        prospect.employerZipCode = data.ProspectInvestorProfile.EmployerZipCode;
                        prospect.employerSalary = data.ProspectInvestorProfile.Salary;
                        prospect.hireDate = data.ProspectInvestorProfile.HireDate !== null && data.ProspectInvestorProfile.HireDate !== undefined ? new Date(data.ProspectInvestorProfile.HireDate.toString()).toISOString().substr(0, 10) : '';
                        prospect.expectedAnnuityDate = data.ProspectInvestorProfile.ExpectedAnnuityDate !== null && data.ProspectInvestorProfile.ExpectedAnnuityDate !== undefined ? new Date(data.ProspectInvestorProfile.ExpectedAnnuityDate.toString()).toISOString().substr(0, 10) : '';
                        prospect.isInvestorProfileNew = false;
                    }
                    else {
                        prospect.isInvestorProfileNew = true;
                    }
                    if (data.ProspectIncomeSource !== undefined && data.ProspectIncomeSource !== null) {
                        prospect.incomeAccountSalary = data.ProspectIncomeSource.Salary;
                        prospect.socialSecurity = data.ProspectIncomeSource.SocialSecurity;
                        prospect.pensionBenefits = data.ProspectIncomeSource.PensionBenefits;
                        prospect.investmentIncome = data.ProspectIncomeSource.InvestmentIncome;
                        prospect.rmd = data.ProspectIncomeSource.RMD;
                        prospect.other = data.ProspectIncomeSource.Other;
                        prospect.expensesAmount = data.ProspectIncomeSource.ExpensesAmount;
                        prospect.isIncomeSourceNew = false;
                    }
                    else {
                        prospect.isIncomeSourceNew = true;
                    }
                }
                else {
                    prospect.isNew = true;
                }
                //next(ProspectAction.fetchProspectSuccess(prospect))
                //next(ProspectAction.loaderComplete());
                next(__WEBPACK_IMPORTED_MODULE_6__store_Prospect__["a" /* actionCreators */].fetchProspectSuccess(prospect));
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                //return Promise.resolve();
            })
                .catch(function (error) {
                // next(ValidationMessage.AddErrorMessage('', "Unable to get prospect"));
                //next(ProspectAction.fetchProspectFailed());
                //next(ProspectAction.loaderComplete());
                next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to get prospect"));
                next(__WEBPACK_IMPORTED_MODULE_6__store_Prospect__["a" /* actionCreators */].fetchProspectFailed());
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                //console.log(error);
                //return Promise.resolve();
            });
        //break;
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["b" /* GET_STATES_REQUEST */]:
            //next(ProspectAction.loaderBegin());
            next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderBegin());
            return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(advisorUrl + "advisor/states")
                .then(function (response) { return response.json(); })
                .then(function (json) {
                //next(ProspectAction.fetchStatesSuccess(json["$values"]))
                //next(ProspectAction.loaderComplete());
                next(__WEBPACK_IMPORTED_MODULE_7__store_States__["a" /* actionCreators */].fetchStateSuccess(json["$values"]));
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
            })
                .catch(function (error) {
                console.log('request states failed', error);
                //next(ProspectAction.loaderComplete());
                //next(ValidationMessage.AddErrorMessage('', "Unable to get states"));
                //next(ProspectAction.fetchStatesFailed());
                next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to get states"));
                next(__WEBPACK_IMPORTED_MODULE_7__store_States__["a" /* actionCreators */].fetchStatesFailed());
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                //throw error;
                //return error;
            });
        //break;
        case __WEBPACK_IMPORTED_MODULE_3__constants_ActionTypes__["c" /* UPDATE_PROSPECT_REQUEST */]:
            var state = store.getState();
            var prospect = state.ProspectDetail;
            //next(ProspectAction.loaderBegin());
            next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderBegin());
            var validForm_1 = true;
            state.errors.forEach(function (error, index) {
                if (error.errorMessage !== "") {
                    validForm_1 = false;
                }
            });
            //console.log(validForm);
            if (validForm_1 != false) {
                var plainSSN = prospect.ssn;
                console.log(plainSSN);
                plainSSN = plainSSN.split('-').join('').split('_').join('');
                var referral;
                if (prospect.referral === true) {
                    referral = new Date().toUTCString();
                }
                var homeAddress = {};
                homeAddress.Street1 = prospect.homeAddressLine1;
                homeAddress.Street2 = prospect.homeAddressLine2;
                homeAddress.Street3 = prospect.homeAddressLine3;
                homeAddress.City = prospect.homeAddressCity;
                homeAddress.State = prospect.homeAddressState;
                homeAddress.Zip = prospect.homeAddressZipCode;
                homeAddress.AddressType = 0;
                var address = [];
                address.push(homeAddress);
                var mailingAddress = {};
                mailingAddress.Street1 = prospect.mailingAddressLine1;
                mailingAddress.Street2 = prospect.mailingAddressLine2;
                mailingAddress.Street3 = prospect.mailingAddressLine3;
                mailingAddress.City = prospect.mailingAddressCity;
                mailingAddress.State = prospect.mailingAddressState;
                mailingAddress.Zip = prospect.mailingAddressZipCode;
                mailingAddress.AddressType = 2;
                address.push(mailingAddress);
                var phoneNumbers = [];
                var homePhone = {};
                homePhone.Number = prospect.homePhone !== undefined ? prospect.homePhone.split('-').join('').split('(').join('').split(')').join('').split('_').join('') : '';
                homePhone.PhoneType = 0;
                phoneNumbers.push(homePhone);
                var workPhone = {};
                workPhone.Number = prospect.workPhone !== undefined ? prospect.workPhone.split('-').join('').split('(').join('').split(')').join('').split('_').join('') : '';
                workPhone.PhoneType = 1;
                phoneNumbers.push(workPhone);
                var otherPhone = {};
                otherPhone.Number = prospect.otherPhone !== undefined ? prospect.otherPhone.split('-').join('').split('(').join('').split(')').join('').split('_').join('') : '';
                otherPhone.PhoneType = 5;
                phoneNumbers.push(otherPhone);
                var incomeSource = {};
                incomeSource.SocialSecurity = prospect.socialSecurity;
                incomeSource.Salary = prospect.incomeAccountSalary;
                incomeSource.PensionBenefits = prospect.pensionBenefits;
                incomeSource.InvestmentIncome = prospect.investmentIncome;
                incomeSource.RMD = prospect.rmd;
                incomeSource.Other = prospect.other;
                incomeSource.ExpensesAmount = prospect.expensesAmount;
                incomeSource.ClientProspectId = prospect.clientProspectId;
                var investorProfile = {};
                investorProfile.InvestmentExperience_Flag = prospect.previousFunds;
                investorProfile.Finra_Flag = prospect.FINRA;
                investorProfile.InvestmentObjective = prospect.investmentObjective;
                investorProfile.RiskProfile = prospect.riskProfile;
                investorProfile.HouseholdIncomeRange = prospect.annualHouseholdIncomeRange;
                investorProfile.NetWorthRange = prospect.netWorthRange;
                investorProfile.LifeInsuranceRange = prospect.lifeInsuranceRange;
                investorProfile.TaxBracketNumber = prospect.taxBracket;
                investorProfile.DepedentNumber = prospect.dependentsNo;
                investorProfile.Ages = prospect.ages;
                investorProfile.CurrentEmployer = prospect.currentEmployer;
                investorProfile.EmploymentStatus = prospect.employmentStatus;
                investorProfile.Occupation = prospect.occupation;
                investorProfile.EmployerAddress = prospect.employerAddress;
                investorProfile.EmployerCity = prospect.employerCity;
                investorProfile.EmployerState = prospect.employerState;
                investorProfile.EmployerZipCode = prospect.employerZipCode;
                investorProfile.HireDate = prospect.hireDate;
                investorProfile.ExpectedAnnuityDate = prospect.expectedAnnuityDate;
                investorProfile.Salary = prospect.employerSalary;
                investorProfile.ClientId = prospect.clientProspectId;
                var prospectData = {
                    Id: prospect.clientProspectId, FirstName: prospect.firstName, Title: prospect.title, MiddleInitial: prospect.middleInitial,
                    LastName: prospect.lastName, Ssn: plainSSN, DateOfBirth: prospect.dateOfBirth, MaritalStatus: prospect.maritalStatus, ReferralDate: referral, Addresses: address,
                    PhoneNumbers: phoneNumbers, Gender: prospect.gender, Email: prospect.emailAddress, ProspectIncomeSource: incomeSource,
                    ProspectInvestorProfile: investorProfile, UsCitizenFlag: prospect.usCitizen
                };
                return __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(participantUrl + "prospect/update", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(prospectData)
                })
                    .then(function (response) {
                    //next(ProspectAction.loaderComplete());
                    next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                    if (response.status >= 200 && response.status < 300) {
                        window.location = __WEBPACK_IMPORTED_MODULE_2__constants_index__["a" /* agileneturl */] + "/Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
                    }
                    else {
                        var error = new Error(response.statusText);
                        error.response = response;
                        throw error;
                    }
                })
                    .catch(function (error) {
                    //next(ValidationMessage.AddErrorMessage('', "Unable to update prospect"));
                    //next(ProspectAction.loaderComplete());
                    next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to update prospect"));
                    next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
                });
            }
            else {
                next(__WEBPACK_IMPORTED_MODULE_5__store_validationMessage__["a" /* actionCreators */].addErrorMessage('', "Unable to update prospect"));
                next(__WEBPACK_IMPORTED_MODULE_4__store_Loader__["a" /* actionCreators */].loaderEnd());
            }
            break;
        default:
            //console.log(action);
            next(action);
            break;
    }
}; }; };
var errorHandler = function (state) { return function (next) { return function (action) {
    try {
        next(action);
    }
    catch (err) {
        console.log("error caught");
    }
}; }; };


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ApiUrl = /** @class */ (function () {
    function ApiUrl() {
    }
    ApiUrl.participantUrl = 'https://dev.valic.com/react/participantservice/api/';
    ApiUrl.advisorUrl = 'https://dev.valic.com/Services/Advisor/api/';
    return ApiUrl;
}());
/* harmony default export */ __webpack_exports__["a"] = (ApiUrl);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_history__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(15);









/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_aspnet_prerendering__["createServerRenderer"])(function (params) {
    return new Promise(function (resolve, reject) {
        // Prepare Redux store with in-memory history, and dispatch a navigation event
        // corresponding to the incoming URL
        var basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash
        var urlAfterBasename = params.url.substring(basename.length);
        var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_history__["createMemoryHistory"])());
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_redux__["replace"])(urlAfterBasename));
        // Prepare an instance of the application and perform an inital render that will
        // cause any async tasks (e.g., data access) to begin
        var routerContext = {};
        var app = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_redux__["Provider"], { store: store },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { basename: basename, context: routerContext, location: params.location.path, children: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* routes */] })));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app);
        // If there's a redirection, just send this information back to the host application
        if (routerContext.url) {
            resolve({ redirectUrl: routerContext.url });
            return;
        }
        // Once any async tasks are done, we can perform the final render
        // We also send the redux store state, so the client can continue execution where the server left off
        params.domainTasks.then(function () {
            resolve({
                html: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(app),
                globals: { initialReduxState: store.getState() }
            });
        }, reject); // Also propagate any errors back into the host application
    });
}));


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*export interface IIncomeSourceProps {
incomeAccountSalary?:string;
socialSecurity?:string;
pensionBenefits?: string;
investmentIncome?: string;
rmd?:string;
other?:string;
expensesAmount?: string;
onChange: Function;
}*/
var IncomeSource = /** @class */ (function (_super) {
    __extends(IncomeSource, _super);
    function IncomeSource(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUserInput = _this.handleUserInput.bind(_this);
        return _this;
    }
    IncomeSource.prototype.handleUserInput = function (e) {
        var onChange = this.props.onChange;
        onChange(e);
    };
    IncomeSource.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, "Annual Household")),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" }, "Income Account From:"),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "incomeAccountSalary" }, "Salary"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "incomeAccountSalary", onChange: this.handleUserInput, value: this.props.incomeAccountSalary })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "socialSecurity" }, "Social Security"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "socialSecurity", onChange: this.handleUserInput, value: this.props.socialSecurity })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "pensionBenefits" }, "Pension Benefits"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "pensionBenefits", onChange: this.handleUserInput, value: this.props.pensionBenefits }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "investmentIncome" }, "Investment Income"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "investmentIncome", onChange: this.handleUserInput, value: this.props.investmentIncome })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "rmd" }, "RMD"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "rmd", onChange: this.handleUserInput, value: this.props.rmd })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "other" }, "Other"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "other", min: "0", onChange: this.handleUserInput, value: this.props.other }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-4 form-group" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "expensesAmount" }, "Expenses Amount"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", className: "form-control", name: "expensesAmount", onChange: this.handleUserInput, value: this.props.expensesAmount })))));
    };
    return IncomeSource;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (IncomeSource);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__ = __webpack_require__(9);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/*export interface IInvestorProfileProps{
//states?: IState[];
states?: any[];
onChange: ()=> void;
previousFunds?: string;
FINRA?: string;
investmentObjective?:string;
riskProfile?:string;
annualHouseholdIncomeRange?:string;
netWorthRange?:string;
lifeInsuranceRange?: string;
taxBracket?:string;
dependentsNo?:string;
ages?:string;
currentEmployer?:string;
employmentStatus?:string;
occupation?:string;
employerAddress?:string;
employerCity?:string;
employerState?:string;
employerZipCode?:string;
employerSalary?:string;
hireDate?:any;
expectedAnnuityDate?:any;
}

export interface IState{
Code:string;
}
*/
var InvestorProfile = /** @class */ (function (_super) {
    __extends(InvestorProfile, _super);
    function InvestorProfile(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUserInput = _this.handleUserInput.bind(_this);
        return _this;
    }
    InvestorProfile.prototype.handleUserInput = function (e) {
        var onChange = this.props.onChange;
        onChange(e);
    };
    InvestorProfile.prototype.render = function () {
        var states = this.props.states;
        var statesListDown;
        if (states !== undefined) {
            statesListDown = Object.keys(states).map(function (key, index) { return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { key: index, value: states[key].Code }, states[key].Code); });
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "previousFunds" }, "Previously purchased mutual funds or other securities?"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", checked: this.props.previousFunds === "1", name: "previousFunds", value: "1" }),
                            "Yes"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", value: "0", name: "previousFunds", checked: this.props.previousFunds === "0" }),
                            "No")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "FINRA" }, "Employed by or registered with a FINRA member firm?"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "FINRA", value: "1", checked: this.props.FINRA === "1" }),
                            "Yes"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "FINRA", value: "0", checked: this.props.FINRA === "0" }),
                            "No")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "investmentObjective" }, "Investment Objective"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "investmentObjective", value: "SP", checked: this.props.investmentObjective === "SP" }),
                            "Safety of Principal"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "investmentObjective", value: "LG", checked: this.props.investmentObjective === "LG" }),
                            "Long-Term Growth"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "investmentObjective", value: "IN", checked: this.props.investmentObjective === "IN" }),
                            "Income")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "riskProfile" }, "Risk Profile"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "riskProfile", value: this.props.riskProfile, onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "HR" }, "Higher Risk"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "AG" }, "Aggressive"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "MA" }, "Moderately Aggressive"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "MD" }, "Moderate"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "MC" }, "Moderately Conservative"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "CN" }, "Conservative"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "CA" }, "Cautious")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, " Financial Situation")),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "annualHouseholdIncomeRange" }, "Annual Household Income Range"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "annualHouseholdIncomeRange", value: "01", checked: this.props.annualHouseholdIncomeRange === "01" }),
                            "Under $50,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "annualHouseholdIncomeRange", value: "02", checked: this.props.annualHouseholdIncomeRange === "02" }),
                            "$50,000 - $100,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "annualHouseholdIncomeRange", value: "03", checked: this.props.annualHouseholdIncomeRange === "03" }),
                            "Over $100,000")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "netWorthRange" }, "Net Worth Range"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "netWorthRange", value: "1", checked: this.props.netWorthRange === "1" }),
                            "Under $50,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "netWorthRange", value: "2", checked: this.props.netWorthRange === "2" }),
                            "$50,000 - $100,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "netWorthRange", value: "3", checked: this.props.netWorthRange === "3" }),
                            "Over $100,000")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "lifeInsuranceRange" }, "Life Insurance Range"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "lifeInsuranceRange", value: "01", checked: this.props.lifeInsuranceRange === "01" }),
                            "Under $50,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "lifeInsuranceRange", value: "02", checked: this.props.lifeInsuranceRange === "02" }),
                            "$50,000 - $100,000"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "lifeInsuranceRange", value: "03", checked: this.props.lifeInsuranceRange === "03" }),
                            "Over $100,000")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "taxBracket" }, "Tax Bracket"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "number", min: "0", name: "taxBracket", className: "form-control", onChange: this.handleUserInput, value: this.props.taxBracket })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "dependentsNo" }, "Dependents:  Number"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "number", min: "0", name: "dependentsNo", className: "form-control", onChange: this.handleUserInput, value: this.props.dependentsNo })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "ages" }, "Ages"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "number", min: "0", name: "ages", className: "form-control", onChange: this.handleUserInput, value: this.props.ages }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "half-rule" })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "currentEmployer" }, "Current Employer"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "currentEmployer", className: "form-control", onChange: this.handleUserInput, value: this.props.currentEmployer })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-8" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "occupation" }, "Occupation"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "occupation", className: "form-control", onChange: this.handleUserInput, value: this.props.occupation }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "employmentStatus", value: "R", checked: this.props.employmentStatus === "R" }),
                            "Retired"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "employmentStatus", value: "U", checked: this.props.employmentStatus === "U" }),
                            "Unemployed")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerAddress" }, "Employer Address"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "employerAddress", className: "form-control", onChange: this.handleUserInput, value: this.props.employerAddress })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerCity" }, "City"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "employerCity", className: "form-control", onChange: this.handleUserInput, value: this.props.employerCity })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerState" }, "State"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "employerState", className: "form-control", onChange: this.handleUserInput, value: this.props.employerState },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                        statesListDown)),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerZipCode" }, "ZipCode"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", name: "employerZipCode", "max-length": "5", className: "form-control", onChange: this.handleUserInput, value: this.props.employerZipCode }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "employerSalary" }, "Salary"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "number", name: "employerSalary", className: "form-control", min: "0", onChange: this.handleUserInput, value: this.props.employerSalary })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "hireDate" }, "Hire Date"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "date", name: "hireDate", className: "form-control", onChange: this.handleUserInput, value: this.props.hireDate })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "expectedAnnuityDate" }, "Expected Annuity Date"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "date", name: "expectedAnnuityDate", className: "form-control", onChange: this.handleUserInput, value: this.props.expectedAnnuityDate })))));
    };
    return InvestorProfile;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (InvestorProfile);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utility_utility__ = __webpack_require__(10);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/*
export interface IStates{
Code:string;
}*/
var PersonalInformation = /** @class */ (function (_super) {
    __extends(PersonalInformation, _super);
    function PersonalInformation(props) {
        var _this = _super.call(this, props) || this;
        _this.handleUserInput = _this.handleUserInput.bind(_this);
        _this.valicInputChange = _this.valicInputChange.bind(_this);
        return _this;
    }
    PersonalInformation.prototype.valicInputChange = function (e) {
        var valicInputChange = this.props.valicInputChange;
        valicInputChange(e);
    };
    PersonalInformation.prototype.handleUserInput = function (e) {
        var onChange = this.props.onChange;
        onChange(e);
    };
    PersonalInformation.prototype.render = function () {
        var states = this.props.states;
        var statesListDown;
        if (states !== undefined) {
            statesListDown = Object.keys(states).map(function (key, index) { return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { key: index, value: states[key].Code }, states[key].Code); });
        }
        //= states !== undefined ? states.map((item, index) => { return <option key={index} value= {item.Code}>{item.Code}</option>}): '';				
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "title" }, "Title"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { className: "form-control", name: "title", value: this.props.title, onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Mr."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Mrs."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Ms."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Dr."),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", null, "Rev."))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4 " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utility_utility__["b" /* errorClass */])(this.props.errors, 'firstName') },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "firstName" }, "First Name"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", required: true, className: "form-control", name: "firstName", placeholder: "FirstName", value: this.props.firstName, onChange: this.handleUserInput })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-1" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "middleInitial" }, "MI"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "middleInitial", placeholder: "MI", value: this.props.middleInitial, "max-length": "1", onChange: this.handleUserInput })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-5 " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utility_utility__["b" /* errorClass */])(this.props.errors, 'lastName') },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "lastName" }, "Last Name"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", required: true, className: "form-control", name: "lastName", placeholder: "LastName", value: this.props.lastName, onChange: this.handleUserInput }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row formasm-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3 " + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__shared_utility_utility__["b" /* errorClass */])(this.props.errors, 'ssn') },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "ssn" }, "SSN"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "ssn", className: "form-control", name: "ssn", placeholder: "AAA-AA-AAAA", mask: "***\-**\-****", maskChar: "_", onChange: this.valicInputChange, required: true, value: this.props.ssn }),
                    "Only change SSN if you know the real value."),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "dateOfBirth" }, "Date Of Birth"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "date", className: "form-control", "data-datebirth": true, name: "dateOfBirth", value: this.props.dateOfBirth, onChange: this.handleUserInput })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "gender" }, "Gender"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", value: "1", name: "gender", checked: this.props.gender === "1" }),
                            "Male"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", value: "2", name: "gender", checked: this.props.gender === "2" }),
                            "Female"))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "usCitizen" }, "US Citizen"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "usCitizen", value: "1", checked: this.props.usCitizen === "1" }),
                            "Yes"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "radio-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "usCitizen", value: "0", checked: this.props.usCitizen === "0" }),
                            "No")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-8" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "maritalStatus" }, "Marital Status"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox", onChange: this.handleUserInput },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "maritalStatus", value: "1", checked: this.props.maritalStatus === "1" }),
                            "Married"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "maritalStatus", value: "0", checked: this.props.maritalStatus === "0" }),
                            "Not Married"),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "radio", name: "maritalStatus", value: "6", checked: this.props.maritalStatus !== "1" && this.props.maritalStatus !== "0" }),
                            "Civil Union")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "half-rule" })),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-6" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", null, "Home Address:"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressLine1" }, "Address Line 1"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressLine1", placeholder: "Address Line 1", onChange: this.handleUserInput, value: this.props.homeAddressLine1 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressLine2" }, "Address Line 2"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressLine2", placeholder: "Address Line 2", onChange: this.handleUserInput, value: this.props.homeAddressLine2 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressLine3" }, "Address Line 3"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressLine3", placeholder: "Address Line 3", onChange: this.handleUserInput, value: this.props.homeAddressLine3 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressCity" }, "City"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressCity", placeholder: "City", onChange: this.handleUserInput, value: this.props.homeAddressCity })),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressState" }, "State"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "homeAddressState", className: "form-control", onChange: this.handleUserInput, value: this.props.homeAddressState },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                                statesListDown)),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homeAddressZipCode" }, "Zip Code"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "homeAddressZipCode", placeholder: "ZipCode", "max-length": "5", onChange: this.handleUserInput, value: this.props.homeAddressZipCode })))),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-sm-6" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", null, "Mailing Address:"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressLine1" }, "Address Line 1"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressLine1", placeholder: "Address Line 1", onChange: this.handleUserInput, value: this.props.mailingAddressLine1 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressLine2" }, "Address Line 2"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressLine2", placeholder: "Address Line 2", onChange: this.handleUserInput, value: this.props.mailingAddressLine2 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-12" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressLine3" }, "Address Line 3"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressLine3", placeholder: "Address Line 3", onChange: this.handleUserInput, value: this.props.mailingAddressLine3 }))),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressCity" }, "City"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressCity", placeholder: "City", onChange: this.handleUserInput, value: this.props.mailingAddressCity })),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressState" }, "State"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", { name: "mailingAddressState", className: "form-control", onChange: this.handleUserInput, value: this.props.mailingAddressState },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", { value: "" }),
                                statesListDown)),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-4" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "mailingAddressZipCode" }, "Zip Code"),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "text", className: "form-control", name: "mailingAddressZipCode", placeholder: "ZipCode", "max-length": "5", onChange: this.handleUserInput, value: this.props.mailingAddressZipCode }))))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "homePhone" }, "Home Phone"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "phone", className: "form-control", name: "homePhone", mask: "\(999\)999\-9999", maskChar: "_", onChange: this.valicInputChange, value: this.props.homePhone })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "workPhone" }, "Work Phone"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "phone", className: "form-control", name: "workPhone", mask: "\(999\)999\-9999", maskChar: "_", onChange: this.valicInputChange, value: this.props.workPhone })),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "otherPhone" }, "Other Phone"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "phone", className: "form-control", name: "otherPhone", mask: "\(999\)999\-9999", maskChar: "_", onChange: this.valicInputChange, value: this.props.otherPhone }))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "checkbox col-sm-12" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { className: "checkbox-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", { type: "checkbox", name: "referral", onChange: this.handleUserInput, checked: this.props.referral }),
                            "Referral")))),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "row form-group" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "form-group col-sm-6" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { htmlFor: "emailAddress" }, "Email Address"),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__shared_ValicInputComponent_ValicInputComponent__["a" /* default */], { type: "email", className: "form-control", name: "emailAddress", onChange: this.valicInputChange, value: this.props.emailAddress })))));
    };
    PersonalInformation.propTypes = {
        onChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
        valicInputChange: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
    };
    return PersonalInformation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (PersonalInformation);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PROSPECT_REQUEST; });
/* unused harmony export GET_PROSPECT_FAILED */
/* unused harmony export GET_PROSPECT_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_PROSPECT_REQUEST; });
/* unused harmony export UPDATE_PROSPECT_FAILED */
/* unused harmony export UPDATE_PROSPECT_SUCCESS */
/* unused harmony export ADD_PROSPECT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_STATES_REQUEST; });
/* unused harmony export GET_STATES_FAILED */
/* unused harmony export GET_STATES_SUCCESS */
/* unused harmony export ON_INPUT_CHANGE */
/* unused harmony export ADD_VALIDATION_ERROR_MESSAGE */
/* unused harmony export LOADER_BEGIN */
/* unused harmony export LOADER_COMPLETE */
/* unused harmony export SET_AGENTCODE */
var GET_PROSPECT_REQUEST = 'GET_PROSPECT_REQUEST';
var GET_PROSPECT_FAILED = 'GET_PROSPECT_FAILED';
var GET_PROSPECT_SUCCESS = 'GET_PROSPECT';
var UPDATE_PROSPECT_REQUEST = 'UPDATE_PROSPECT_REQUEST';
var UPDATE_PROSPECT_FAILED = 'UPDATE_PROSPECT_FAILED';
var UPDATE_PROSPECT_SUCCESS = 'UPDATE_PROSPECT_SUCCESS';
var ADD_PROSPECT = 'ADD_PROSPECT';
//export const GET_STATES ='GET_STATES';
var GET_STATES_REQUEST = 'GET_STATES_REQUEST';
var GET_STATES_FAILED = 'GET_STATES_FAILED';
var GET_STATES_SUCCESS = 'GET_STATES_SUCCESS';
var ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
var ADD_VALIDATION_ERROR_MESSAGE = 'ADD_ERROR_MESSAGE';
var LOADER_BEGIN = 'LOADER_BEGIN';
var LOADER_COMPLETE = 'LOADER_END';
var SET_AGENTCODE = 'SET_AGENTCODE';


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomeSourceContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_ProspectComponent_IncomeSourceComponent__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PersonalInformationContainer__ = __webpack_require__(5);



var mapStateToProps = function (state) { return ({
    incomeAccountSalary: state.ProspectDetail.incomeAccountSalary,
    socialSecurity: state.ProspectDetail.socialSecurity,
    pensionBenefits: state.ProspectDetail.pensionBenefits,
    investmentIncome: state.ProspectDetail.investmentIncome,
    rmd: state.ProspectDetail.rmd,
    other: state.ProspectDetail.other,
    expensesAmount: state.ProspectDetail.expensesAmount
}); };
var IncomeSourceContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_2__PersonalInformationContainer__["b" /* mapDispatchToProps */])(__WEBPACK_IMPORTED_MODULE_0__components_ProspectComponent_IncomeSourceComponent__["a" /* default */]);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorProfileContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersonalInformationContainer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_InvestorProfileComponent__ = __webpack_require__(25);



var mapStateToProps = function (state) { return ({
    previousFunds: state.ProspectDetail.previousFunds,
    FINRA: state.ProspectDetail.FINRA,
    investmentObjective: state.ProspectDetail.investmentObjective,
    riskProfile: state.ProspectDetail.riskProfile,
    annualHouseholdIncomeRange: state.ProspectDetail.annualHouseholdIncomeRange,
    netWorthRange: state.ProspectDetail.netWorthRange,
    lifeInsuranceRange: state.ProspectDetail.lifeInsuranceRange,
    taxBracket: state.ProspectDetail.taxBracket,
    dependentsNo: state.ProspectDetail.dependentsNo,
    ages: state.ProspectDetail.ages,
    currentEmployer: state.ProspectDetail.currentEmployer,
    employmentStatus: state.ProspectDetail.employmentStatus,
    occupation: state.ProspectDetail.occupation,
    employerAddress: state.ProspectDetail.employerAddress,
    employerCity: state.ProspectDetail.employerCity,
    employerState: state.ProspectDetail.employerState,
    employerZipCode: state.ProspectDetail.employerZipCode,
    hireDate: state.ProspectDetail.hireDate,
    expectedAnnuityDate: state.ProspectDetail.expectedAnnuityDate,
    employerSalary: state.ProspectDetail.employerSalary,
    states: state.states
}); };
var InvestorProfileContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, __WEBPACK_IMPORTED_MODULE_1__PersonalInformationContainer__["b" /* mapDispatchToProps */])(__WEBPACK_IMPORTED_MODULE_2__components_ProspectComponent_InvestorProfileComponent__["a" /* default */]);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProspectEditContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_LoaderComponent_LoaderComponent__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utility_utility__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PersonalInformationContainer__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__InvestorProfileContainer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__IncomeSourceContainer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__constants__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ProspectEditContainer_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_prospect__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_states__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_loader__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_validationMessage__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

















var ProspectEditContainer = /** @class */ (function (_super) {
    __extends(ProspectEditContainer, _super);
    function ProspectEditContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProspectEditContainer.prototype.componentDidMount = function () {
        this.props.componentDidMount();
    };
    ProspectEditContainer.prototype.componentDidCatch = function (error, info) {
        //const {dispatch} = this.props;
        //dispatch()
        //console.log('componentcath');
    };
    ProspectEditContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, formErrors = _a.formErrors, isLoading = _a.isLoading;
        if (formErrors !== undefined && formErrors !== null && formErrors.length > 0) {
            var errors = formErrors.filter(function (error) { return error.errorMessage !== '' && error.fieldName === ''; });
            //console.log(errors);
            if (errors.length > 0) {
                //throw new Error("failed component")
                return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(AppError, { error: errors[0].errorMessage }));
            }
        }
        return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null,
            isLoading == true ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__shared_LoaderComponent_LoaderComponent__["a" /* default */], null) : '',
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__shared_ValicValidationMessageComponent_ValicValidationMessageComponent__["a" /* default */], { formErrors: formErrors, className: "form-errors" }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", null,
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["a" /* TabContainer */], null,
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["b" /* Tab */], { name: "Personal Information", isDefaultTab: true },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__PersonalInformationContainer__["a" /* PersonalInformationContainer */], null)),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["b" /* Tab */], { name: "Investor Profile" },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__InvestorProfileContainer__["a" /* InvestorProfileContainer */], null)),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__shared_TabContainerComponent_TabContainerComponent__["b" /* Tab */], { name: "Income Source" },
                        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__IncomeSourceContainer__["a" /* IncomeSourceContainer */], null))),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", { type: "submit", className: "btn btn-primary", onClick: function (e) {
                        e.preventDefault();
                        _this.props.saveProspect(e);
                    } }, "Save"),
                "\u00A0",
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", { type: "button", className: "btn btn-default", onClick: function (e) {
                        e.preventDefault();
                        _this.props.cancelProspect();
                    } }, "Cancel"))));
    };
    ProspectEditContainer.propTypes = {
        saveProspect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
        componentDidMount: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
        formErrors: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array.isRequired,
        isLoading: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired
    };
    return ProspectEditContainer;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]));

var mapStateToProps = function (state) { return ({
    formErrors: state.errors,
    isLoading: state.isLoading
}); };
var mapDispatchToProps = function (dispatch) { return ({
    saveProspect: function () {
        var inputs = document.getElementsByTagName('input');
        for (var index = 0; index < inputs.length; ++index) {
            var inputField = inputs[index];
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__shared_utility_utility__["a" /* validateFormField */])(inputField);
            if (inputField.isValid === false || inputField.isFormatValid === false) {
                //dispatch(AddErrorMessage(inputField.name, inputField.errorMessage));
                dispatch(__WEBPACK_IMPORTED_MODULE_16__store_validationMessage__["a" /* actionCreators */].addErrorMessage(inputField.name, inputField.errorMessage));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().addClass('has-error has-feedback');
            }
            else {
                //dispatch(AddErrorMessage(inputField.name, ''));
                dispatch(__WEBPACK_IMPORTED_MODULE_16__store_validationMessage__["a" /* actionCreators */].addErrorMessage(inputField.name, ''));
                __WEBPACK_IMPORTED_MODULE_4_jquery___default()(inputField).parent().removeClass('has-error has-feedback');
            }
        }
        dispatch(__WEBPACK_IMPORTED_MODULE_13__store_prospect__["a" /* actionCreators */].updateProspectRequest());
    },
    cancelProspect: function (e) {
        if (window.confirm('Are you sure want to cancel?')) {
            document.location = __WEBPACK_IMPORTED_MODULE_11__constants__["a" /* agileneturl */] + "Dashboard/Advisor/ClientProspectListing.aspx?agentId=03499";
        }
    },
    componentDidMount: function () {
        dispatch(__WEBPACK_IMPORTED_MODULE_15__store_loader__["a" /* actionCreators */].loaderBegin());
        dispatch(__WEBPACK_IMPORTED_MODULE_13__store_prospect__["b" /* actionCreatorsAgentCode */].setAgentCode(window.__agentCode__));
        dispatch(__WEBPACK_IMPORTED_MODULE_14__store_states__["a" /* actionCreators */].fetchStateRequest());
        dispatch(__WEBPACK_IMPORTED_MODULE_13__store_prospect__["a" /* actionCreators */].fetchProspectRequest(window.__PROSPECTID__));
    }
}); };
var AppError = function (props) {
    return (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", null,
        "Something went wrong!!! ",
        props.error));
};
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ProspectEditContainer));


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__loader_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loader.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "loadingStyle" },
            " ",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "loader" }),
            " "));
    };
    return Loader;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (Loader);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tab; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContainer_css__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContainer_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TabContainer_css__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var clearStyle = { clear: 'both', height: '20px' };
var TabContainer = /** @class */ (function (_super) {
    __extends(TabContainer, _super);
    function TabContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContainer.prototype.render = function () {
        var header = this.tabHeader();
        var customStyle = {
            height: "30px"
        };
        var mainStyle = {
            overflow: "auto"
        };
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "pad20 mainStyle" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "col-xs-12 col-sm-2 customStyle" }, header),
            this.props.children,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: clearStyle })));
    };
    TabContainer.prototype.tabHeader = function () {
        var count = 0;
        var headerLink = this.props.children.map(function (child, i) {
            var headerId = child.props.name.split(' ').join('');
            count = count + 1;
            return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabHeader, { key: i, id: headerId, headerName: child.props.name, isDefault: child.props.isDefaultTab, index: count }));
        });
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "nobr" },
            " ",
            headerLink,
            " "));
    };
    return TabContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));

var TabHeader = /** @class */ (function (_super) {
    __extends(TabHeader, _super);
    function TabHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.changeActive = function () {
            var xyz = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("[name='folderTab']");
            for (var i = 0; i < xyz.length; i++) {
                __WEBPACK_IMPORTED_MODULE_1_jquery___default()(xyz[i]).attr("class", "tabListItem react-tabHeader");
            }
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + _this.state.id).attr("class", "tabListItem activeTab  react-tabHeader");
            _this.setState({ currentTabIndex: _this.props.index });
            _this.showContent(_this.state.id);
        };
        _this.state = { id: _this.props.id + "Tab", index: _this.props.index, isDefault: _this.props.isDefault, currentTabIndex: 0 };
        _this.changeActive = _this.changeActive.bind(_this);
        return _this;
    }
    TabHeader.prototype.render = function () {
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", { className: "tabListItem activeTab", name: "folderTab", id: this.state.id, onClick: this.changeActive }, this.props.headerName));
    };
    TabHeader.prototype.showContent = function (x) {
        var conBoxes = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("[name='contentBox']");
        for (var i = 0; i < conBoxes.length; i++) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(conBoxes[i]).attr("class", "noShow react-tabContent");
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(conBoxes[i]).attr("style", "display:none");
        }
        var xParts = x.split('Tab');
        var whichBox = xParts[0];
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + whichBox + 'Box').attr("class", "show react-tabContent");
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + whichBox + 'Box').attr("style", "display:block");
    };
    TabHeader.prototype.componentDidMount = function () {
        if (this.state.isDefault) {
            this.changeActive();
        }
    };
    TabHeader.prototype.componentWillUpdate = function () {
    };
    return TabHeader;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tab.prototype.render = function () {
        var id = this.props.name.split(' ').join('');
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { id: id + "Box", name: "contentBox", className: "noShow react-tabContent" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { style: clearStyle }),
            this.props.children));
    };
    return Tab;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ValicValidationMessage = /** @class */ (function (_super) {
    __extends(ValicValidationMessage, _super);
    function ValicValidationMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValicValidationMessage.prototype.render = function () {
        var formErrors = this.props.formErrors;
        return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: 'form-errors' }, formErrors !== undefined && formErrors.length > 0 ? formErrors.map(function (field, i) {
            if (field.errorMessage !== "") {
                return (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", { key: i },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", { key: i, className: "tooltip-text form-error" },
                        field.errorMessage,
                        " ")));
            }
            else {
                return '';
            }
        }) : ''));
    };
    ValicValidationMessage.PropTypes = {
        formErrors: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
            fieldName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
            errorMessage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
        }).isRequired).isRequired
    };
    return ValicValidationMessage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component));
/* harmony default export */ __webpack_exports__["a"] = (ValicValidationMessage);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateFormField; });
/* unused harmony export errorClass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var isFieldValid = function (input) {
    var isValid = true;
    if (input.getAttribute('required') !== null && input.value === "") {
        isValid = false;
    }
    else {
        isValid = true;
    }
    return isValid;
};
var validateFormField = function (inputField) {
    var isValid = true;
    isValid = isFieldValid(inputField);
    inputField.isValid = isValid;
    if (isValid === false) {
        inputField.errorMessage = inputField.name + " is required";
    }
    else {
        if (validateFormat(inputField) === false) {
            inputField.errorMessage = inputField.name + " is invalid";
            inputField.isFormatValid = false;
        }
        else {
            inputField.errorMessage = '';
            inputField.isFormatValid = true;
        }
    }
};
/*
const validateAllField = (e) => {
    let inputs = document.getElementsByTagName('input');
    for (let index = 0; index < inputs.length; ++index) {
        validateFormField(inputs[index]);
    }
}*/
var validateFormat = function (input) {
    var isFormatValid = true;
    var format = "";
    if (input !== undefined) {
        if (input.type === "date") {
            //format =/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
            if (input.validity !== undefined && (input.validity.badInput === true || input.validity.valid === false)) {
                return false;
            }
            if (__WEBPACK_IMPORTED_MODULE_0_jquery___default()(input).attr('data-datebirth') !== undefined && input.value !== "" && input.valueAsDate >= new Date()) {
                return false;
            }
            if (input.value !== "" && (input.valueAsDate.getFullYear() >= 2099 || input.valueAsDate.getFullYear() <= 1900)) {
                return false;
            }
        }
        if (input.value !== "" && format !== "" && format.test(input.value) === false) {
            isFormatValid = false;
        }
    }
    return isFormatValid;
};
var errorClass = function (errors, fieldName) {
    if (errors !== undefined) {
        errors.forEach(function (error) {
            if (error.fieldName === fieldName && error.errorMessage !== "") {
                return 'has-error has-feedback';
            }
        });
    }
    return '';
};


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* unused harmony export reducer */
var actionCreators = {
    loaderBegin: function () { return ({ type: 'LOADER_BEGIN' }); },
    loaderEnd: function () { return ({ type: 'LOADER_END' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'LOADER_BEGIN':
            return true;
        case 'LOADER_END':
            return false;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? false : state;
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* unused harmony export reducer */
var actionCreators = {
    fetchStateRequest: function () { return ({ type: 'GET_STATES_REQUEST' }); },
    fetchStateSuccess: function (states) { return ({ type: 'GET_STATES_SUCCESS', states: states }); },
    fetchStatesFailed: function () { return ({ type: 'GET_STATES_FAILED' }); }
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'GET_STATES_SUCCESS':
            return Object.assign([], state, action.states);
        case 'GET_STATES_REQUEST':
        case 'GET_STATES_FAILED':
            return Object.assign([], null, null);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? [] : state;
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prospect__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validationMessage__ = __webpack_require__(4);
//import * as WeatherForecasts from './WeatherForecasts';
//import * as Counter from './Counter';




// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    isLoading: __WEBPACK_IMPORTED_MODULE_0__loader__["b" /* reducer */],
    states: __WEBPACK_IMPORTED_MODULE_2__states__["b" /* reducer */],
    ProspectDetail: __WEBPACK_IMPORTED_MODULE_1__prospect__["c" /* reducer */],
    errors: __WEBPACK_IMPORTED_MODULE_3__validationMessage__["b" /* reducer */],
    agentCode: __WEBPACK_IMPORTED_MODULE_1__prospect__["d" /* agentCodereducer */]
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultCharsRules = exports.defaultCharsRules = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};

var defaultMaskChar = exports.defaultMaskChar = '_';

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _parseMask = __webpack_require__(45);

var _parseMask2 = _interopRequireDefault(_parseMask);

var _environment = __webpack_require__(44);

var _string = __webpack_require__(46);

var _defer = __webpack_require__(43);

var _defer2 = _interopRequireDefault(_defer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // https://github.com/sanniassin/react-input-mask


var InputElement = function (_React$Component) {
  _inherits(InputElement, _React$Component);

  function InputElement(props) {
    _classCallCheck(this, InputElement);

    var _this = _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, props));

    _initialiseProps.call(_this);

    var mask = props.mask,
        maskChar = props.maskChar,
        formatChars = props.formatChars,
        defaultValue = props.defaultValue,
        value = props.value,
        alwaysShowMask = props.alwaysShowMask;


    _this.hasValue = value != null;
    _this.maskOptions = (0, _parseMask2.default)(mask, maskChar, formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }
    if (value == null) {
      value = defaultValue;
    }

    value = _this.getStringValue(value);

    if (_this.maskOptions.mask && (alwaysShowMask || value)) {
      value = (0, _string.formatValue)(_this.maskOptions, value);
    }

    _this.value = value;
    return _this;
  }

  return InputElement;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.lastCursorPos = null;
  this.focused = false;

  this.componentDidMount = function () {
    _this2.isAndroidBrowser = (0, _environment.isAndroidBrowser)();
    _this2.isWindowsPhoneBrowser = (0, _environment.isWindowsPhoneBrowser)();
    _this2.isAndroidFirefox = (0, _environment.isAndroidFirefox)();

    if (_this2.maskOptions.mask && _this2.getInputValue() !== _this2.value) {
      _this2.setInputValue(_this2.value);
    }
  };

  this.componentWillReceiveProps = function (nextProps) {
    var oldMaskOptions = _this2.maskOptions;

    _this2.hasValue = nextProps.value != null;
    _this2.maskOptions = (0, _parseMask2.default)(nextProps.mask, nextProps.maskChar, nextProps.formatChars);

    if (!_this2.maskOptions.mask) {
      _this2.backspaceOrDeleteRemoval = null;
      _this2.lastCursorPos = null;
      return;
    }

    var isMaskChanged = _this2.maskOptions.mask && _this2.maskOptions.mask !== oldMaskOptions.mask;
    var showEmpty = nextProps.alwaysShowMask || _this2.isFocused();
    var newValue = _this2.hasValue ? _this2.getStringValue(nextProps.value) : _this2.value;

    if (!oldMaskOptions.mask && !_this2.hasValue) {
      newValue = _this2.getInputDOMNode().value;
    }

    if (isMaskChanged || _this2.maskOptions.mask && (newValue || showEmpty)) {
      newValue = (0, _string.formatValue)(_this2.maskOptions, newValue);

      if (isMaskChanged) {
        var pos = _this2.lastCursorPos;
        var filledLen = (0, _string.getFilledLength)(_this2.maskOptions, newValue);
        if (pos === null || filledLen < pos) {
          if ((0, _string.isFilled)(_this2.maskOptions, newValue)) {
            pos = filledLen;
          } else {
            pos = _this2.getRightEditablePos(filledLen);
          }
          _this2.setCursorPos(pos);
        }
      }
    }

    if (_this2.maskOptions.mask && (0, _string.isEmpty)(_this2.maskOptions, newValue) && !showEmpty && (!_this2.hasValue || !nextProps.value)) {
      newValue = '';
    }

    _this2.value = newValue;
  };

  this.componentDidUpdate = function () {
    if (_this2.maskOptions.mask && _this2.getInputValue() !== _this2.value) {
      _this2.setInputValue(_this2.value);
    }
  };

  this.isDOMElement = function (element) {
    return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? element instanceof HTMLElement // DOM2
    : element.nodeType === 1 && typeof element.nodeName === 'string';
  };

  this.getInputDOMNode = function () {
    var input = _this2.input;
    if (!input) {
      return null;
    }

    if (_this2.isDOMElement(input)) {
      return input;
    }

    // React 0.13
    return _react2.default.findDOMNode(input);
  };

  this.getInputValue = function () {
    var input = _this2.getInputDOMNode();
    if (!input) {
      return null;
    }

    return input.value;
  };

  this.setInputValue = function (value) {
    var input = _this2.getInputDOMNode();
    if (!input) {
      return;
    }

    _this2.value = value;
    input.value = value;
  };

  this.getLeftEditablePos = function (pos) {
    for (var i = pos; i >= 0; --i) {
      if (!(0, _string.isPermanentChar)(_this2.maskOptions, i)) {
        return i;
      }
    }
    return null;
  };

  this.getRightEditablePos = function (pos) {
    var mask = _this2.maskOptions.mask;

    for (var i = pos; i < mask.length; ++i) {
      if (!(0, _string.isPermanentChar)(_this2.maskOptions, i)) {
        return i;
      }
    }
    return null;
  };

  this.setCursorToEnd = function () {
    var filledLen = (0, _string.getFilledLength)(_this2.maskOptions, _this2.value);
    var pos = _this2.getRightEditablePos(filledLen);
    if (pos !== null) {
      _this2.setCursorPos(pos);
    }
  };

  this.setSelection = function (start) {
    var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var input = _this2.getInputDOMNode();
    if (!input) {
      return;
    }

    var end = start + len;
    if ('selectionStart' in input && 'selectionEnd' in input) {
      input.selectionStart = start;
      input.selectionEnd = end;
    } else {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();
    }
  };

  this.getSelection = function () {
    var input = _this2.getInputDOMNode();
    var start = 0;
    var end = 0;

    if ('selectionStart' in input && 'selectionEnd' in input) {
      start = input.selectionStart;
      end = input.selectionEnd;
    } else {
      var range = document.selection.createRange();
      if (range.parentElement() === input) {
        start = -range.moveStart('character', -input.value.length);
        end = -range.moveEnd('character', -input.value.length);
      }
    }

    return {
      start: start,
      end: end,
      length: end - start
    };
  };

  this.getCursorPos = function () {
    return _this2.getSelection().start;
  };

  this.setCursorPos = function (pos) {
    _this2.setSelection(pos, 0);

    (0, _defer2.default)(function () {
      _this2.setSelection(pos, 0);
    });

    _this2.lastCursorPos = pos;
  };

  this.isFocused = function () {
    return _this2.focused;
  };

  this.getStringValue = function (value) {
    return !value && value !== 0 ? '' : value + '';
  };

  this.onKeyDown = function (event) {
    _this2.backspaceOrDeleteRemoval = null;

    if (typeof _this2.props.onKeyDown === 'function') {
      _this2.props.onKeyDown(event);
    }

    var key = event.key,
        ctrlKey = event.ctrlKey,
        metaKey = event.metaKey,
        defaultPrevented = event.defaultPrevented;

    if (ctrlKey || metaKey || defaultPrevented) {
      return;
    }

    if (key === 'Backspace' || key === 'Delete') {
      var selection = _this2.getSelection();
      var canRemove = key === 'Backspace' && selection.end > 0 || key === 'Delete' && _this2.value.length > selection.start;

      if (!canRemove) {
        return;
      }

      _this2.backspaceOrDeleteRemoval = {
        key: key,
        selection: _this2.getSelection()
      };
    }
  };

  this.onChange = function (event) {
    var paste = _this2.paste;
    var _maskOptions = _this2.maskOptions,
        mask = _maskOptions.mask,
        maskChar = _maskOptions.maskChar,
        lastEditablePos = _maskOptions.lastEditablePos,
        prefix = _maskOptions.prefix;


    var value = _this2.getInputValue();
    var oldValue = _this2.value;

    if (paste) {
      _this2.paste = null;
      _this2.pasteText(paste.value, value, paste.selection, event);
      return;
    }

    var selection = _this2.getSelection();
    var cursorPos = selection.end;
    var maskLen = mask.length;
    var valueLen = value.length;
    var oldValueLen = oldValue.length;

    var clearedValue;
    var enteredString;

    if (_this2.backspaceOrDeleteRemoval) {
      var deleteFromRight = _this2.backspaceOrDeleteRemoval.key === 'Delete';
      value = _this2.value;
      selection = _this2.backspaceOrDeleteRemoval.selection;
      cursorPos = selection.start;

      _this2.backspaceOrDeleteRemoval = null;

      if (selection.length) {
        value = (0, _string.clearRange)(_this2.maskOptions, value, selection.start, selection.length);
      } else if (selection.start < prefix.length || !deleteFromRight && selection.start === prefix.length) {
        cursorPos = prefix.length;
      } else {
        var editablePos = deleteFromRight ? _this2.getRightEditablePos(cursorPos) : _this2.getLeftEditablePos(cursorPos - 1);

        if (editablePos !== null) {
          value = (0, _string.clearRange)(_this2.maskOptions, value, editablePos, 1);
          cursorPos = editablePos;
        }
      }
    } else if (valueLen > oldValueLen) {
      var enteredStringLen = valueLen - oldValueLen;
      var startPos = selection.end - enteredStringLen;
      enteredString = value.substr(startPos, enteredStringLen);

      if (startPos < lastEditablePos && (enteredStringLen !== 1 || enteredString !== mask[startPos])) {
        cursorPos = _this2.getRightEditablePos(startPos);
      } else {
        cursorPos = startPos;
      }

      value = value.substr(0, startPos) + value.substr(startPos + enteredStringLen);

      clearedValue = (0, _string.clearRange)(_this2.maskOptions, value, startPos, maskLen - startPos);
      clearedValue = (0, _string.insertString)(_this2.maskOptions, clearedValue, enteredString, cursorPos);

      value = (0, _string.insertString)(_this2.maskOptions, oldValue, enteredString, cursorPos);

      if (enteredStringLen !== 1 || cursorPos >= prefix.length && cursorPos < lastEditablePos) {
        cursorPos = Math.max((0, _string.getFilledLength)(_this2.maskOptions, clearedValue), cursorPos);
        if (cursorPos < lastEditablePos) {
          cursorPos = _this2.getRightEditablePos(cursorPos);
        }
      } else if (cursorPos < lastEditablePos) {
        cursorPos++;
      }
    } else if (valueLen < oldValueLen) {
      var removedLen = maskLen - valueLen;
      enteredString = value.substr(0, selection.end);
      var clearOnly = enteredString === oldValue.substr(0, selection.end);

      clearedValue = (0, _string.clearRange)(_this2.maskOptions, oldValue, selection.end, removedLen);

      if (maskChar) {
        value = (0, _string.insertString)(_this2.maskOptions, clearedValue, enteredString, 0);
      }

      clearedValue = (0, _string.clearRange)(_this2.maskOptions, clearedValue, selection.end, maskLen - selection.end);
      clearedValue = (0, _string.insertString)(_this2.maskOptions, clearedValue, enteredString, 0);

      if (!clearOnly) {
        cursorPos = Math.max((0, _string.getFilledLength)(_this2.maskOptions, clearedValue), cursorPos);
        if (cursorPos < lastEditablePos) {
          cursorPos = _this2.getRightEditablePos(cursorPos);
        }
      } else if (cursorPos < prefix.length) {
        cursorPos = prefix.length;
      }
    }
    value = (0, _string.formatValue)(_this2.maskOptions, value);

    _this2.setInputValue(value);

    if (typeof _this2.props.onChange === 'function') {
      _this2.props.onChange(event);
    }

    if (_this2.isWindowsPhoneBrowser) {
      (0, _defer2.default)(function () {
        _this2.setSelection(cursorPos, 0);
      });
    } else {
      _this2.setCursorPos(cursorPos);
    }
  };

  this.onFocus = function (event) {
    _this2.focused = true;

    if (_this2.maskOptions.mask) {
      if (!_this2.value) {
        var prefix = _this2.maskOptions.prefix;
        var value = (0, _string.formatValue)(_this2.maskOptions, prefix);
        var inputValue = (0, _string.formatValue)(_this2.maskOptions, value);

        // do not use this.getInputValue and this.setInputValue as this.input
        // can be undefined at this moment if autoFocus attribute is set
        var isInputValueChanged = inputValue !== event.target.value;

        if (isInputValueChanged) {
          event.target.value = inputValue;
        }

        _this2.value = inputValue;

        if (isInputValueChanged && typeof _this2.props.onChange === 'function') {
          _this2.props.onChange(event);
        }

        _this2.setCursorToEnd();
      } else if ((0, _string.getFilledLength)(_this2.maskOptions, _this2.value) < _this2.maskOptions.mask.length) {
        _this2.setCursorToEnd();
      }
    }

    if (typeof _this2.props.onFocus === 'function') {
      _this2.props.onFocus(event);
    }
  };

  this.onBlur = function (event) {
    _this2.focused = false;

    if (_this2.maskOptions.mask && !_this2.props.alwaysShowMask && (0, _string.isEmpty)(_this2.maskOptions, _this2.value)) {
      var inputValue = '';
      var isInputValueChanged = inputValue !== _this2.getInputValue();

      if (isInputValueChanged) {
        _this2.setInputValue(inputValue);
      }

      if (isInputValueChanged && typeof _this2.props.onChange === 'function') {
        _this2.props.onChange(event);
      }
    }

    if (typeof _this2.props.onBlur === 'function') {
      _this2.props.onBlur(event);
    }
  };

  this.onPaste = function (event) {
    if (typeof _this2.props.onPaste === 'function') {
      _this2.props.onPaste(event);
    }

    if (_this2.isAndroidBrowser && !event.defaultPrevented) {
      _this2.paste = {
        value: _this2.getInputValue(),
        selection: _this2.getSelection()
      };
      _this2.setInputValue('');
    }
  };

  this.pasteText = function (value, text, selection, event) {
    var cursorPos = selection.start;
    if (selection.length) {
      value = (0, _string.clearRange)(_this2.maskOptions, value, cursorPos, selection.length);
    }
    var textLen = (0, _string.getInsertStringLength)(_this2.maskOptions, value, text, cursorPos);
    value = (0, _string.insertString)(_this2.maskOptions, value, text, cursorPos);
    cursorPos += textLen;
    cursorPos = _this2.getRightEditablePos(cursorPos) || cursorPos;

    if (value !== _this2.getInputValue()) {
      _this2.setInputValue(value);
      if (event && typeof _this2.props.onChange === 'function') {
        _this2.props.onChange(event);
      }
    }

    _this2.setCursorPos(cursorPos);
  };

  this.render = function () {
    var _props = _this2.props,
        mask = _props.mask,
        alwaysShowMask = _props.alwaysShowMask,
        maskChar = _props.maskChar,
        formatChars = _props.formatChars,
        props = _objectWithoutProperties(_props, ['mask', 'alwaysShowMask', 'maskChar', 'formatChars']);

    if (_this2.maskOptions.mask) {
      if (!props.disabled && !props.readOnly) {
        var handlersKeys = ['onChange', 'onKeyDown', 'onPaste'];
        handlersKeys.forEach(function (key) {
          props[key] = _this2[key];
        });
      }

      if (props.value != null) {
        props.value = _this2.value;
      }
    }

    return _react2.default.createElement('input', _extends({ ref: function ref(_ref) {
        return _this2.input = _ref;
      } }, props, { onFocus: _this2.onFocus, onBlur: _this2.onBlur }));
  };
};

exports.default = InputElement;
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
            value: true
});

exports.default = function (fn) {
            var defer = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function () {
                        return setTimeout(fn, 0);
            };

            return defer(fn);
};

module.exports = exports["default"];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAndroidBrowser = isAndroidBrowser;
exports.isWindowsPhoneBrowser = isWindowsPhoneBrowser;
exports.isAndroidFirefox = isAndroidFirefox;
exports.isIOS = isIOS;
function isAndroidBrowser() {
  var windows = new RegExp('windows', 'i');
  var firefox = new RegExp('firefox', 'i');
  var android = new RegExp('android', 'i');
  var ua = navigator.userAgent;
  return !windows.test(ua) && !firefox.test(ua) && android.test(ua);
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isAndroidFirefox() {
  var windows = new RegExp('windows', 'i');
  var firefox = new RegExp('firefox', 'i');
  var android = new RegExp('android', 'i');
  var ua = navigator.userAgent;
  return !windows.test(ua) && firefox.test(ua) && android.test(ua);
}

function isIOS() {
  var windows = new RegExp('windows', 'i');
  var ios = new RegExp('(ipod|iphone|ipad)', 'i');
  var ua = navigator.userAgent;
  return !windows.test(ua) && ios.test(ua);
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (mask, maskChar, charsRules) {
  if (maskChar === undefined) {
    maskChar = _constants.defaultMaskChar;
  }
  if (charsRules == null) {
    charsRules = _constants.defaultCharsRules;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      charsRules: charsRules,
      mask: null,
      prefix: null,
      lastEditablePos: null,
      permanents: []
    };
  }
  var str = '';
  var prefix = '';
  var permanents = [];
  var isPermanent = false;
  var lastEditablePos = null;

  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !charsRules[character]) {
        permanents.push(str.length);
        if (str.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePos = str.length + 1;
      }
      str += character;
      isPermanent = false;
    }
  });

  return {
    maskChar: maskChar,
    charsRules: charsRules,
    prefix: prefix,
    mask: str,
    lastEditablePos: lastEditablePos,
    permanents: permanents
  };
};

var _constants = __webpack_require__(41);

module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPermanentChar = isPermanentChar;
exports.isAllowedChar = isAllowedChar;
exports.isEmpty = isEmpty;
exports.getFilledLength = getFilledLength;
exports.isFilled = isFilled;
exports.formatValue = formatValue;
exports.clearRange = clearRange;
exports.insertString = insertString;
exports.getInsertStringLength = getInsertStringLength;
function isPermanentChar(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}

function isAllowedChar(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      charsRules = maskOptions.charsRules;


  if (!character) {
    return false;
  }

  if (isPermanentChar(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = charsRules[ruleChar];

  return new RegExp(charRule).test(character);
}

function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentChar(maskOptions, i) || !isAllowedChar(maskOptions, i, character);
  });
}

function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;


  if (!maskChar) {
    while (value.length > prefix.length && isPermanentChar(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }
    return value.length;
  }

  var filledLength = prefix.length;
  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentChar(maskOptions, i) && isAllowedChar(maskOptions, i, character);
    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}

function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}

function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;


  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);
    value = value.slice(0, getFilledLength(maskOptions, value));

    if (value.length < prefix.length) {
      value = prefix;
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentChar(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}

function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  var arrayValue = value.split('');

  if (!maskChar) {
    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');

    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }
    if (isPermanentChar(maskOptions, i)) {
      return mask[i];
    }
    return maskChar;
  }).join('');
}

function insertString(maskOptions, value, insertStr, insertPos) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentChar(maskOptions, pos) || character === mask[pos];
  };
  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentChar(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPos > value.length) {
    value += mask.slice(value.length, insertPos);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPos, insertCharacter)) {
      if (insertPos >= value.length) {
        value += mask[insertPos];
      }

      if (!isUsableCharacter(insertCharacter, insertPos)) {
        return true;
      }

      insertPos++;

      // stop iteration if maximum value length reached
      if (insertPos >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedChar(maskOptions, insertPos, insertCharacter) || insertCharacter === maskChar;
    if (!isAllowed) {
      return true;
    }

    if (insertPos < value.length) {
      if (maskChar || isInputFilled || insertPos < prefix.length) {
        value = value.slice(0, insertPos) + insertCharacter + value.slice(insertPos + 1);
      } else {
        value = value.slice(0, insertPos) + insertCharacter + value.slice(insertPos);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPos++;

    // stop iteration if maximum value length reached
    return insertPos < mask.length;
  });

  return value;
}

function getInsertStringLength(maskOptions, value, insertStr, insertPos) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;

  var arrayInsertStr = insertStr.split('');
  var initialInsertPos = insertPos;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentChar(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPos, insertCharacter)) {
      insertPos++;

      // stop iteration if maximum value length reached
      if (insertPos >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedChar(maskOptions, insertPos, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPos++;
    }

    // stop iteration if maximum value length reached
    return insertPos < mask.length;
  });

  return insertPos - initialInsertPos;
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(146);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(199);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(71);

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDY4ZmY0ZjlkOTQ3ODQ3NTIyNzkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiLi92ZW5kb3JcIiIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9QZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItcmVkdXgvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9WYWxpY0lucHV0Q29tcG9uZW50L1ZhbGljSW5wdXRDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXRpbGl0eS91dGlsaXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9Qcm9zcGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9wcm9zcGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25maWd1cmVTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FzcG5ldC1wcmVyZW5kZXJpbmcvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvaGlzdG9yeS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL3NyYy9hcGkvUHJvc3BlY3QvUHJvc3BlY3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGlVcmwuZGV2LnRzIiwid2VicGFjazovLy8uL3NyYy9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW5jb21lU291cmNlQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbnZlc3RvclByb2ZpbGVDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L1BlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvQWN0aW9uVHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvSW5jb21lU291cmNlQ29udGFpbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL0ludmVzdG9yUHJvZmlsZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L0xvYWRlckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlsaXR5L1V0aWxpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0xvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvU3RhdGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L2xvYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyLmNzcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWlucHV0LW1hc2svbGliL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWlucHV0LW1hc2svbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZGVmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3BhcnNlTWFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLHFDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FB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cUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SCxFQUFFOzs7QUFHOWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUE0RDtBQUM1RDtBQUNBLE9BQU8sRUFBRSxVQUFVLGlEQUFpRDtBQUNwRTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUN6aEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDckNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0M7Ozs7Ozs7QUMzREE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDOzs7Ozs7QUNsT0EsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw4QyIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDY4ZmY0ZjlkOTQ3ODQ3NTIyNzkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3ZlbmRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIi4vdmVuZG9yXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0L3JlYWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcydcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9ObWVzc2FnZVN0YXRlIHtcclxuICAgIGVycm9yczogRXJyb3JNZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yTWVzc2FnZSB7XHJcbiAgICBmaWVsZE5hbWU6IHN0cmluZztcclxuICAgIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIEFkZEVycm9yTWVzc2FnZSB7IHR5cGU6ICdBRERfRVJST1JfTUVTU0FHRScsIGZpZWxkTmFtZSwgZXJyb3JNZXNzYWdlIH1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGFkZEVycm9yTWVzc2FnZTogKGZpZWxkTmFtZTogc3RyaW5nLCBlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gPEFkZEVycm9yTWVzc2FnZT57IHR5cGU6ICdBRERfRVJST1JfTUVTU0FHRScgLGZpZWxkTmFtZSwgZXJyb3JNZXNzYWdlfSxcclxuICAgXHJcbn07XHJcbnR5cGUgS25vd25BY3Rpb24gPSBBZGRFcnJvck1lc3NhZ2VcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFZhbGlkYXRpb05tZXNzYWdlU3RhdGVbXT4gPSAoc3RhdGU6IFZhbGlkYXRpb05tZXNzYWdlU3RhdGVbXSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgY2FzZSBcIkFERF9FUlJPUl9NRVNTQUdFXCI6XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld29iaiA9IHN0YXRlLm1hcCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5maWVsZE5hbWUgPT09IGFjdGlvbi5maWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNFeGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBlcnJvciwgeyBlcnJvck1lc3NhZ2U6IGFjdGlvbi5lcnJvck1lc3NhZ2UgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRXhpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lOiBhY3Rpb24uZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3b2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZTogYWN0aW9uLmZpZWxkTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBhY3Rpb24uZXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgPT09IHVuZGVmaW5lZCA/IFtdIDogc3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZS50cyIsIiAgICBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGVyc29uYWxJbmZvcm1hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L1BlcnNvbmFsSW5mb3JtYXRpb25Db21wb25lbnQnO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm1GaWVsZCB9IGZyb20gJy4uLy4uL3NoYXJlZC91dGlsaXR5L1V0aWxpdHknO1xyXG4vL2ltcG9ydCB7IG9uSW5wdXRDaGFuZ2UgYXMgb25DaGFuZ2UgfSBmcm9tICcuLi8uLi9hY3Rpb25zL1Byb3NwZWN0QWN0aW9uJztcclxuaW1wb3J0ICogYXMgIFByb3NwZWN0QWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL1Byb3NwZWN0JztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ0FjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZSc7XHJcbi8vaW1wb3J0IHsgQWRkRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9WYWxpZGF0aW9uTWVzc2FnZUFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgdmFsaWNJbnB1dENoYW5nZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGxldCBpbnB1dEZpZWxkID0gZS50YXJnZXQ7XHJcbiAgICAgICAgLy9kaXNwYXRjaChvbkNoYW5nZShuYW1lLCB2YWx1ZSkpO1xyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0QWN0aW9uLmFjdGlvbkNyZWF0b3JzLm9uSW5wdXRDaGFuZ2UobmFtZSwgdmFsdWUpKTtcclxuICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCcgPyBlLnRhcmdldC5jaGVja2VkIDogZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgbGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuICAgICAgICAvL2Rpc3BhdGNoKG9uQ2hhbmdlKG5hbWUsIHZhbHVlKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goUHJvc3BlY3RBY3Rpb24uYWN0aW9uQ3JlYXRvcnMub25JbnB1dENoYW5nZShuYW1lLCB2YWx1ZSkpO1xyXG4gICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0RmllbGQpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vZGlzcGF0Y2goQWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFZhbGlkYXRpb25NZXNzYWdBY3Rpb24uYWN0aW9uQ3JlYXRvcnMuYWRkRXJyb3JNZXNzYWdlKG5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn0pXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIHNzbjogc3RhdGUuUHJvc3BlY3REZXRhaWwuc3NuLFxyXG4gICAgdGl0bGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnRpdGxlLFxyXG4gICAgZmlyc3ROYW1lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5maXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubGFzdE5hbWUsXHJcbiAgICBtaWRkbGVJbml0aWFsOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5taWRkbGVJbml0aWFsLFxyXG4gICAgZGF0ZU9mQmlydGg6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmRhdGVPZkJpcnRoLFxyXG4gICAgZ2VuZGVyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5nZW5kZXIsXHJcbiAgICB1c0NpdGl6ZW46IHN0YXRlLlByb3NwZWN0RGV0YWlsLnVzQ2l0aXplbixcclxuICAgIG1hcml0YWxTdGF0dXM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1hcml0YWxTdGF0dXMsXHJcbiAgICBob21lQWRkcmVzc0xpbmUxOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lQWRkcmVzc0xpbmUxLFxyXG4gICAgaG9tZUFkZHJlc3NMaW5lMjogc3RhdGUuUHJvc3BlY3REZXRhaWwuaG9tZUFkZHJlc3NMaW5lMixcclxuICAgIGhvbWVBZGRyZXNzTGluZTM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzTGluZTMsXHJcbiAgICBob21lQWRkcmVzc0NpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzQ2l0eSxcclxuICAgIGhvbWVBZGRyZXNzU3RhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzU3RhdGUsXHJcbiAgICBob21lQWRkcmVzc1ppcENvZGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmhvbWVBZGRyZXNzWmlwQ29kZSxcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTE6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm1haWxpbmdBZGRyZXNzTGluZTEsXHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5tYWlsaW5nQWRkcmVzc0xpbmUyLFxyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMzogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NMaW5lMyxcclxuICAgIG1haWxpbmdBZGRyZXNzQ2l0eTogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NDaXR5LFxyXG4gICAgbWFpbGluZ0FkZHJlc3NTdGF0ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NTdGF0ZSxcclxuICAgIG1haWxpbmdBZGRyZXNzWmlwQ29kZTogc3RhdGUuUHJvc3BlY3REZXRhaWwubWFpbGluZ0FkZHJlc3NaaXBDb2RlLFxyXG4gICAgaG9tZVBob25lOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5ob21lUGhvbmUsXHJcbiAgICB3b3JrUGhvbmU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLndvcmtQaG9uZSxcclxuICAgIG90aGVyUGhvbmU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm90aGVyUGhvbmUsXHJcbiAgICByZWZlcnJhbDogc3RhdGUuUHJvc3BlY3REZXRhaWwucmVmZXJyYWwsXHJcbiAgICBlbWFpbEFkZHJlc3M6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtYWlsQWRkcmVzcyxcclxuICAgIHN0YXRlczogc3RhdGUuc3RhdGVzXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFBlcnNvbmFsSW5mb3JtYXRpb24pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9QZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyLnRzIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoNyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0NSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1yZWR1eC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IHByb3NwZWN0SWQgPSAxOTYzO1xyXG5leHBvcnQgY29uc3QgYWdpbGVuZXR1cmwgPSdodHRwczovL2Q0LnZhbGljLmNvbS9hZ2lsZW5ldDUvJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy9pbmRleC50cyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzayc7XHJcbmludGVyZmFjZSBWYWxpY0lucHV0UHJvcHMge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgb25DaGFuZ2U6IChlKSA9PiB2b2lkO1xyXG4gICAgbWluPzogc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIG1hc2s/OiBzdHJpbmc7XHJcbiAgICBtYXNrQ2hhcj86IHN0cmluZztcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgcmVxdWlyZWQ/OiBhbnk7XHJcbn1cclxuY2xhc3MgVmFsaWNJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxWYWxpY0lucHV0UHJvcHM+IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0XHJcblx0XHR0aGlzLm9uQ2hhbmdlRW1haWwgPSB0aGlzLm9uQ2hhbmdlRW1haWwuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VQaG9uZU51bWJlciA9IHRoaXMub25DaGFuZ2VQaG9uZU51bWJlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5vbkNoYW5nZVNTTiA9IHRoaXMub25DaGFuZ2VTU04uYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VUZXh0ID0gdGhpcy5vbkNoYW5nZVRleHQuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMub25DaGFuZ2VOdW1iZXIgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlVGV4dChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG9uQ2hhbmdlTnVtYmVyKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlRW1haWwoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9ICcnO1xyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdC8vdGhpcy5hZGRFcnJvcih0aGlzLnN0YXRlLGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIik7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVFbWFpbEZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArICcgaXMgaW52YWxpZCc7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHQvLyQoaW5wdXRGaWVsZCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTsgICAgICAgXHJcblx0XHRcdFx0Ly90aGlzLmFkZEVycm9yKHRoaXMucHJvcHMuc3RhdGUsaW5wdXRGaWVsZC5uYW1lLCBcIlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcclxuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UoZSk7XHJcblx0fVxyXG5cdG9uQ2hhbmdlUGhvbmVOdW1iZXIoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblxyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdC8vdGhpcy5hZGRFcnJvcih0aGlzLnN0YXRlLGlucHV0RmllbGQubmFtZSwgaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIik7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVQaG9uZU51bWJlckZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHQvLyQoaW5wdXRGaWVsZCkucGFyZW50KCkuYWRkQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZmVlZGJhY2snKTsgICAgICAgXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgJyBpcyBpbnZhbGlkJztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gJyc7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZShlKTtcclxuXHR9XHJcblx0b25DaGFuZ2VTU04oZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0bGV0IGlucHV0RmllbGQgPSBlLnRhcmdldDtcclxuXHRcdGlzVmFsaWQgPSB0aGlzLmlzVmFsaWQoaW5wdXRGaWVsZCk7XHJcblxyXG5cdFx0aWYgKGlzVmFsaWQgPT09IGZhbHNlKSB7XHJcblx0XHRcdGlucHV0RmllbGQuaXNWYWxpZCA9IGZhbHNlO1xyXG5cdFx0XHRpbnB1dEZpZWxkLmVycm9yTWVzc2FnZSA9IGlucHV0RmllbGQubmFtZSArIFwiIGlzIHJlcXVpcmVkXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aW5wdXRGaWVsZC5pc1ZhbGlkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMudmFsaWRhdGVTU05Gb3JtYXQoaW5wdXRGaWVsZCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyAnIGlzIGludmFsaWQnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRcdFx0aW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGUpO1xyXG5cdH1cclxuXHR2YWxpZGF0ZUVtYWlsRm9ybWF0KGlucHV0KSB7XHJcblx0XHRsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgZm9ybWF0ID0gL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvO1xyXG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdC50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcblx0fVxyXG5cdHZhbGlkYXRlU1NORm9ybWF0KGlucHV0KSB7XHJcblx0XHRsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcblx0XHRsZXQgZm9ybWF0ID0gL15bMC05QS1aXXszfS1bMC05QS1aXXsyfS1bMC05QS1aXXs0fSQvO1xyXG5cdFx0aWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdC50ZXN0KGlucHV0LnZhbHVlKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0aXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRm9ybWF0VmFsaWQ7XHJcblx0fVxyXG5cdHZhbGlkYXRlUGhvbmVOdW1iZXJGb3JtYXQoaW5wdXQpIHtcclxuXHRcdGxldCBpc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuXHRcdGxldCBmb3JtYXQgPSAvKD86XFwoXFxkezN9XFwpfFxcZHszfSlbLSBdP1xcZHszfVstIF0/XFxkezR9LztcclxuXHRcdGlmIChpbnB1dC52YWx1ZSAhPT0gXCJcIiAgJiYgZm9ybWF0LnRlc3QoaW5wdXQudmFsdWUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRpc0Zvcm1hdFZhbGlkID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxuXHR9XHJcblx0aXNWYWxpZChpbnB1dCkge1xyXG5cdFx0bGV0IGlzVmFsaWQgPSB0cnVlO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhpbnB1dClcclxuXHRcdGlmIChpbnB1dC5nZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJykgIT09IG51bGwgJiYgaW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuXHRcdFx0Ly8kKGlucHV0KS5wYXJlbnQoKS5hZGRDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpOyAgICAgICAgICAgXHJcblx0XHRcdGlzVmFsaWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHQvLyAkKGlucHV0KS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1mZWVkYmFjaycpO1xyXG5cdFx0XHQvL2lucHV0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHRcdFx0aXNWYWxpZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNWYWxpZDtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IGlucHV0VHlwZSA9IHRoaXMucHJvcHMudHlwZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHMudHlwZSAhPT0gbnVsbCA/IHRoaXMucHJvcHMudHlwZSA6IFwidGV4dFwiO1xyXG5cdFx0bGV0IGlucHV0Q29udHJvbDtcclxuXHRcdGNvbnN0IHByb3BzID0geyAuLi50aGlzLnByb3BzIH07XHJcblxyXG5cdFx0c3dpdGNoIChpbnB1dFR5cGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XHJcblx0XHRcdGNhc2UgXCJwaG9uZVwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxJbnB1dE1hc2sgIHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VQaG9uZU51bWJlcn0gLz47XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJudW1iZXJcIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VOdW1iZXJ9IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiZW1haWxcIjpcclxuXHRcdFx0XHRpbnB1dENvbnRyb2wgPSA8aW5wdXQgey4uLnByb3BzfSB0eXBlPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUVtYWlsfSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInNzblwiOlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxJbnB1dE1hc2sgIHsuLi5wcm9wc30gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTU059IC8+O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGlucHV0Q29udHJvbCA9IDxpbnB1dCB7Li4ucHJvcHN9IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VUZXh0fSAvPjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBpbnB1dENvbnRyb2w7XHJcblx0fVx0XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWNJbnB1dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudC50c3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5jb25zdCBpc0ZpZWxkVmFsaWQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpICE9PSBudWxsICYmIGlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGb3JtRmllbGQgPSAoaW5wdXRGaWVsZDogYW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpc1ZhbGlkID0gaXNGaWVsZFZhbGlkKGlucHV0RmllbGQpO1xyXG4gICAgaW5wdXRGaWVsZC5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgIGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyBpbnZhbGlkXCI7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLypcclxuY29uc3QgdmFsaWRhdGVBbGxGaWVsZCA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0c1tpbmRleF0pO1xyXG4gICAgfVxyXG59Ki9cclxuY29uc3QgdmFsaWRhdGVGb3JtYXQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcbiAgICBsZXQgZm9ybWF0ID0gXCJcIjtcclxuICAgIGlmIChpbnB1dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIC8vZm9ybWF0ID0vXigwWzEtOV18MVswLTJdKVxcLygwWzEtOV18MVxcZHwyXFxkfDNbMDFdKVxcLygxOXwyMClcXGR7Mn0kLztcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbGlkaXR5ICE9PSB1bmRlZmluZWQgJiYgKGlucHV0LnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlIHx8IGlucHV0LnZhbGlkaXR5LnZhbGlkID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChpbnB1dCkuYXR0cignZGF0YS1kYXRlYmlydGgnKSAhPT0gdW5kZWZpbmVkICYmIGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGlucHV0LnZhbHVlQXNEYXRlID49IG5ldyBEYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgKGlucHV0LnZhbHVlQXNEYXRlLmdldEZ1bGxZZWFyKCkgPj0gMjA5OSB8fCBpbnB1dC52YWx1ZUFzRGF0ZS5nZXRGdWxsWWVhcigpIDw9IDE5MDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdCAhPT0gXCJcIiAmJiAoZm9ybWF0IGFzIGFueSkudGVzdChpbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgZXJyb3JDbGFzcyA9IChlcnJvcnM6IGFueSwgZmllbGROYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChlcnJvcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSAmJiBlcnJvci5lcnJvck1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaGFzLWVycm9yIGhhcy1mZWVkYmFjayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvdXRpbGl0eS91dGlsaXR5LnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvc3BlY3RTdGF0ZSB7XHJcbiAgICBQcm9zcGVjdERldGFpbDogUHJvc3BlY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvc3BlY3Qge1xyXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XHJcbiAgICBzc24/OiBzdHJpbmc7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIG1pZGRsZUluaXRpYWw/OiBzdHJpbmc7XHJcbiAgICBkYXRlT2ZCaXJ0aD86IERhdGU7XHJcbiAgICBnZW5kZXI/OiBzdHJpbmc7XHJcbiAgICB1c0NpdGl6ZW4/OiBzdHJpbmc7XHJcbiAgICBtYXJpdGFsU3RhdHVzPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NMaW5lMT86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzTGluZTI/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0xpbmUzPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NDaXR5Pzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NTdGF0ZT86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzWmlwQ29kZT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTE/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUyPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMz86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzQ2l0eT86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzU3RhdGU/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGU/OiBzdHJpbmc7XHJcbiAgICBob21lUGhvbmU/OiBzdHJpbmc7XHJcbiAgICB3b3JrUGhvbmU/OiBzdHJpbmc7XHJcbiAgICBvdGhlclBob25lPzogc3RyaW5nO1xyXG4gICAgcmVmZXJyYWw/OiBib29sZWFuO1xyXG4gICAgZW1haWxBZGRyZXNzPzogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNGdW5kcz86IHN0cmluZztcclxuICAgIEZJTlJBPzogc3RyaW5nO1xyXG4gICAgaW52ZXN0bWVudE9iamVjdGl2ZT86IHN0cmluZztcclxuICAgIHJpc2tQcm9maWxlPzogc3RyaW5nO1xyXG4gICAgYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2U/OiBzdHJpbmc7XHJcbiAgICBuZXRXb3J0aFJhbmdlPzogc3RyaW5nO1xyXG4gICAgbGlmZUluc3VyYW5jZVJhbmdlPzogc3RyaW5nO1xyXG4gICAgdGF4QnJhY2tldD86IHN0cmluZztcclxuICAgIGRlcGVuZGVudHNObz86IHN0cmluZztcclxuICAgIGFnZXM/OiBzdHJpbmc7XHJcbiAgICBjdXJyZW50RW1wbG95ZXI/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3ltZW50U3RhdHVzPzogc3RyaW5nO1xyXG4gICAgb2NjdXBhdGlvbj86IHN0cmluZztcclxuICAgIGVtcGxveWVyQWRkcmVzcz86IHN0cmluZztcclxuICAgIGVtcGxveWVyQ2l0eT86IHN0cmluZztcclxuICAgIGVtcGxveWVyU3RhdGU/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llclppcENvZGU/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llclNhbGFyeT86IHN0cmluZztcclxuICAgIGhpcmVEYXRlPzogRGF0ZTtcclxuICAgIGV4cGVjdGVkQW5udWl0eURhdGU/OiBEYXRlO1xyXG4gICAgaW5jb21lQWNjb3VudFNhbGFyeT86IHN0cmluZztcclxuICAgIHNvY2lhbFNlY3VyaXR5Pzogc3RyaW5nO1xyXG4gICAgcGVuc2lvbkJlbmVmaXRzPzogc3RyaW5nO1xyXG4gICAgaW52ZXN0bWVudEluY29tZT86IHN0cmluZztcclxuICAgIHJtZD86IHN0cmluZztcclxuICAgIG90aGVyPzogc3RyaW5nO1xyXG4gICAgZXhwZW5zZXNBbW91bnQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgIENvZGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgRmV0Y2hQcm9zcGVjdFJlcXVlc3QgeyB0eXBlOiAnR0VUX1BST1NQRUNUX1JFUVVFU1QnLCBpZDogc3RyaW5nIH1cclxuaW50ZXJmYWNlIEZldGNoUHJvc3BlY3RTdWNjZXNzIHsgdHlwZTogJ0dFVF9QUk9TUEVDVCcsIHByb3NwZWN0OmFueSB9XHJcbmludGVyZmFjZSBGZXRjaFByb3NwZWN0RmFpbGVkIHsgdHlwZTogJ0dFVF9QUk9TUEVDVF9GQUlMRUQnIH1cclxuaW50ZXJmYWNlIFVwZGF0ZVByb3NwZWN0UmVxdWVzdCB7IHR5cGU6ICdVUERBVEVfUFJPU1BFQ1RfUkVRVUVTVCcgfVxyXG5pbnRlcmZhY2UgT25JbnB1dENoYW5nZSB7IHR5cGU6ICdPTl9JTlBVVF9DSEFOR0UnICwgbmFtZTpzdHJpbmcsIHZhbHVlOnN0cmluZ31cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBGZXRjaFByb3NwZWN0U3VjY2VzcyB8IEZldGNoUHJvc3BlY3RGYWlsZWQgfCBPbklucHV0Q2hhbmdlO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgZmV0Y2hQcm9zcGVjdFJlcXVlc3Q6IChpZDogc3RyaW5nKSA9PiA8RmV0Y2hQcm9zcGVjdFJlcXVlc3Q+eyB0eXBlOiAnR0VUX1BST1NQRUNUX1JFUVVFU1QnLCBpZCB9LFxyXG4gICAgZmV0Y2hQcm9zcGVjdFN1Y2Nlc3M6IChwcm9zcGVjdDphbnkpID0+IDxGZXRjaFByb3NwZWN0U3VjY2Vzcz57IHR5cGU6ICdHRVRfUFJPU1BFQ1QnLCBwcm9zcGVjdCB9LFxyXG4gICAgZmV0Y2hQcm9zcGVjdEZhaWxlZDogKCkgPT4gPEZldGNoUHJvc3BlY3RGYWlsZWQ+eyB0eXBlOiAnR0VUX1BST1NQRUNUX0ZBSUxFRCcgfSxcclxuICAgIG9uSW5wdXRDaGFuZ2U6IChuYW1lLCB2YWx1ZSkgPT4gPE9uSW5wdXRDaGFuZ2U+eyB0eXBlOiAnT05fSU5QVVRfQ0hBTkdFJywgbmFtZSwgdmFsdWUgfSxcclxuICAgIHVwZGF0ZVByb3NwZWN0UmVxdWVzdDogKCkgPT4gPFVwZGF0ZVByb3NwZWN0UmVxdWVzdD57IHR5cGU6ICdVUERBVEVfUFJPU1BFQ1RfUkVRVUVTVCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFByb3NwZWN0U3RhdGU+ID0gKHN0YXRlOiBQcm9zcGVjdFN0YXRlLCBhY3Rpb246IEtub3duQWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIk9OX0lOUFVUX0NIQU5HRVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgW2FjdGlvbi5uYW1lXTogYWN0aW9uLnZhbHVlIH0pO1xyXG4gICAgICAgIGNhc2VcIkdFVF9QUk9TUEVDVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLnByb3NwZWN0KTtcclxuICAgICAgICBjYXNlIFwiR0VUX1BST1NQRUNUX0ZBSUxFRFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbnVsbCwgbnVsbCk7XHJcbiAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlID09PSB1bmRlZmluZWQgPyB7fSA6IHN0YXRlO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWdlbnRDb2RlU3RhdGUge1xyXG4gICAgYWdlbnRDb2RlOiBzdHJpbmc7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgQWdlbnRDb2RlIHsgdHlwZTogJ1NFVF9BR0VOVENPREUnLCBhZ2VudENvZGUgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzQWdlbnRDb2RlID0ge1xyXG4gICAgc2V0QWdlbnRDb2RlOiAoYWdlbnRDb2RlOiBzdHJpbmcpID0+IDxBZ2VudENvZGU+eyB0eXBlOiAnU0VUX0FHRU5UQ09ERScsIGFnZW50Q29kZSB9XHJcblxyXG59O1xyXG5cclxudHlwZSBLbm93bkFjdGlvbkFnZW50Q29kZSA9IEFnZW50Q29kZVxyXG5cclxuZXhwb3J0IGNvbnN0IGFnZW50Q29kZXJlZHVjZXI6IFJlZHVjZXI8QWdlbnRDb2RlU3RhdGU+ID0gKHN0YXRlOiBBZ2VudENvZGVTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbkFnZW50Q29kZSkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJTRVRfQUdFTlRDT0RFXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24uYWdlbnRDb2RlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvUHJvc3BlY3QudHMiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuZXhwb3J0IGludGVyZmFjZSBMb2FkZXJTdGF0ZSB7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBMb2FkZXJCZWdpbiB7IHR5cGU6ICdMT0FERVJfQkVHSU4nIH1cclxuaW50ZXJmYWNlIExvYWRlckVuZCB7IHR5cGU6ICdMT0FERVJfRU5EJyB9XHJcblxyXG5cclxuXHJcbnR5cGUgS25vd25BY3Rpb24gPSBMb2FkZXJCZWdpbiB8IExvYWRlckVuZDtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGxvYWRlckJlZ2luOiAoKSA9PiA8TG9hZGVyQmVnaW4+eyB0eXBlOiAnTE9BREVSX0JFR0lOJyB9LFxyXG4gICAgbG9hZGVyRW5kOiAoKSA9PiA8TG9hZGVyRW5kPnsgdHlwZTogJ0xPQURFUl9FTkQnIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxib29sZWFuPiA9IChzdGF0ZTogYm9vbGVhbiwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0xPQURFUl9CRUdJTic6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlIDtcclxuICAgICAgICBjYXNlICdMT0FERVJfRU5EJzpcclxuICAgICAgICAgICAgcmV0dXJuICBmYWxzZSA7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSA9PT0gdW5kZWZpbmVkID9mYWxzZSAgOiBzdGF0ZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL2xvYWRlci50cyIsImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcydcclxuaW1wb3J0IHsgQWN0aW9uLCBSZWR1Y2VyIH0gZnJvbSAncmVkdXgnO1xyXG5leHBvcnQgaW50ZXJmYWNlIFByb3NwZWN0U3RhdGUge1xyXG4gICAgUHJvc3BlY3REZXRhaWw6IFByb3NwZWN0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3NwZWN0IHtcclxuICAgIGZpcnN0TmFtZT86IHN0cmluZztcclxuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgc3NuPzogc3RyaW5nO1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBtaWRkbGVJbml0aWFsPzogc3RyaW5nO1xyXG4gICAgZGF0ZU9mQmlydGg/OiBEYXRlO1xyXG4gICAgZ2VuZGVyPzogc3RyaW5nO1xyXG4gICAgdXNDaXRpemVuPzogc3RyaW5nO1xyXG4gICAgbWFyaXRhbFN0YXR1cz86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzTGluZTE/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc0xpbmUyPzogc3RyaW5nO1xyXG4gICAgaG9tZUFkZHJlc3NMaW5lMz86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzQ2l0eT86IHN0cmluZztcclxuICAgIGhvbWVBZGRyZXNzU3RhdGU/OiBzdHJpbmc7XHJcbiAgICBob21lQWRkcmVzc1ppcENvZGU/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc0xpbmUxPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NMaW5lMj86IHN0cmluZztcclxuICAgIG1haWxpbmdBZGRyZXNzTGluZTM/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc0NpdHk/OiBzdHJpbmc7XHJcbiAgICBtYWlsaW5nQWRkcmVzc1N0YXRlPzogc3RyaW5nO1xyXG4gICAgbWFpbGluZ0FkZHJlc3NaaXBDb2RlPzogc3RyaW5nO1xyXG4gICAgaG9tZVBob25lPzogc3RyaW5nO1xyXG4gICAgd29ya1Bob25lPzogc3RyaW5nO1xyXG4gICAgb3RoZXJQaG9uZT86IHN0cmluZztcclxuICAgIHJlZmVycmFsPzogYm9vbGVhbjtcclxuICAgIGVtYWlsQWRkcmVzcz86IHN0cmluZztcclxuICAgIHByZXZpb3VzRnVuZHM/OiBzdHJpbmc7XHJcbiAgICBGSU5SQT86IHN0cmluZztcclxuICAgIGludmVzdG1lbnRPYmplY3RpdmU/OiBzdHJpbmc7XHJcbiAgICByaXNrUHJvZmlsZT86IHN0cmluZztcclxuICAgIGFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlPzogc3RyaW5nO1xyXG4gICAgbmV0V29ydGhSYW5nZT86IHN0cmluZztcclxuICAgIGxpZmVJbnN1cmFuY2VSYW5nZT86IHN0cmluZztcclxuICAgIHRheEJyYWNrZXQ/OiBzdHJpbmc7XHJcbiAgICBkZXBlbmRlbnRzTm8/OiBzdHJpbmc7XHJcbiAgICBhZ2VzPzogc3RyaW5nO1xyXG4gICAgY3VycmVudEVtcGxveWVyPzogc3RyaW5nO1xyXG4gICAgZW1wbG95bWVudFN0YXR1cz86IHN0cmluZztcclxuICAgIG9jY3VwYXRpb24/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llckFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llckNpdHk/OiBzdHJpbmc7XHJcbiAgICBlbXBsb3llclN0YXRlPzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJaaXBDb2RlPzogc3RyaW5nO1xyXG4gICAgZW1wbG95ZXJTYWxhcnk/OiBzdHJpbmc7XHJcbiAgICBoaXJlRGF0ZT86IERhdGU7XHJcbiAgICBleHBlY3RlZEFubnVpdHlEYXRlPzogRGF0ZTtcclxuICAgIGluY29tZUFjY291bnRTYWxhcnk/OiBzdHJpbmc7XHJcbiAgICBzb2NpYWxTZWN1cml0eT86IHN0cmluZztcclxuICAgIHBlbnNpb25CZW5lZml0cz86IHN0cmluZztcclxuICAgIGludmVzdG1lbnRJbmNvbWU/OiBzdHJpbmc7XHJcbiAgICBybWQ/OiBzdHJpbmc7XHJcbiAgICBvdGhlcj86IHN0cmluZztcclxuICAgIGV4cGVuc2VzQW1vdW50Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICBDb2RlOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIEZldGNoUHJvc3BlY3RSZXF1ZXN0IHsgdHlwZTogJ0dFVF9QUk9TUEVDVF9SRVFVRVNUJywgaWQ6IHN0cmluZyB9XHJcbmludGVyZmFjZSBGZXRjaFByb3NwZWN0U3VjY2VzcyB7IHR5cGU6ICdHRVRfUFJPU1BFQ1QnLCBwcm9zcGVjdDphbnkgfVxyXG5pbnRlcmZhY2UgRmV0Y2hQcm9zcGVjdEZhaWxlZCB7IHR5cGU6ICdHRVRfUFJPU1BFQ1RfRkFJTEVEJyB9XHJcbmludGVyZmFjZSBVcGRhdGVQcm9zcGVjdFJlcXVlc3QgeyB0eXBlOiAnVVBEQVRFX1BST1NQRUNUX1JFUVVFU1QnIH1cclxuaW50ZXJmYWNlIE9uSW5wdXRDaGFuZ2UgeyB0eXBlOiAnT05fSU5QVVRfQ0hBTkdFJyAsIG5hbWU6c3RyaW5nLCB2YWx1ZTpzdHJpbmd9XHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gRmV0Y2hQcm9zcGVjdFN1Y2Nlc3MgfCBGZXRjaFByb3NwZWN0RmFpbGVkIHwgT25JbnB1dENoYW5nZTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgIGZldGNoUHJvc3BlY3RSZXF1ZXN0OiAoaWQ6IHN0cmluZykgPT4gPEZldGNoUHJvc3BlY3RSZXF1ZXN0PnsgdHlwZTogJ0dFVF9QUk9TUEVDVF9SRVFVRVNUJywgaWQgfSxcclxuICAgIGZldGNoUHJvc3BlY3RTdWNjZXNzOiAocHJvc3BlY3Q6YW55KSA9PiA8RmV0Y2hQcm9zcGVjdFN1Y2Nlc3M+eyB0eXBlOiAnR0VUX1BST1NQRUNUJywgcHJvc3BlY3QgfSxcclxuICAgIGZldGNoUHJvc3BlY3RGYWlsZWQ6ICgpID0+IDxGZXRjaFByb3NwZWN0RmFpbGVkPnsgdHlwZTogJ0dFVF9QUk9TUEVDVF9GQUlMRUQnIH0sXHJcbiAgICBvbklucHV0Q2hhbmdlOiAobmFtZSwgdmFsdWUpID0+IDxPbklucHV0Q2hhbmdlPnsgdHlwZTogJ09OX0lOUFVUX0NIQU5HRScsIG5hbWUsIHZhbHVlIH0sXHJcbiAgICB1cGRhdGVQcm9zcGVjdFJlcXVlc3Q6ICgpID0+IDxVcGRhdGVQcm9zcGVjdFJlcXVlc3Q+eyB0eXBlOiAnVVBEQVRFX1BST1NQRUNUX1JFUVVFU1QnIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlcjogUmVkdWNlcjxQcm9zcGVjdFN0YXRlPiA9IChzdGF0ZTogUHJvc3BlY3RTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJPTl9JTlBVVF9DSEFOR0VcIjpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IFthY3Rpb24ubmFtZV06IGFjdGlvbi52YWx1ZSB9KTtcclxuICAgICAgICBjYXNlXCJHRVRfUFJPU1BFQ1RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5wcm9zcGVjdCk7XHJcbiAgICAgICAgY2FzZSBcIkdFVF9QUk9TUEVDVF9GQUlMRURcIjpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG51bGwsIG51bGwpO1xyXG4gICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aGF1c3RpdmVDaGVjazogbmV2ZXIgPSBhY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHVucmVjb2duaXplZCBhY3Rpb25zIChvciBpbiBjYXNlcyB3aGVyZSBhY3Rpb25zIGhhdmUgbm8gZWZmZWN0KSwgbXVzdCByZXR1cm4gdGhlIGV4aXN0aW5nIHN0YXRlXHJcbiAgICAvLyAgKG9yIGRlZmF1bHQgaW5pdGlhbCBzdGF0ZSBpZiBub25lIHdhcyBzdXBwbGllZClcclxuICAgIHJldHVybiBzdGF0ZSA9PT0gdW5kZWZpbmVkID8ge30gOiBzdGF0ZTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFnZW50Q29kZVN0YXRlIHtcclxuICAgIGFnZW50Q29kZTogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIEFnZW50Q29kZSB7IHR5cGU6ICdTRVRfQUdFTlRDT0RFJywgYWdlbnRDb2RlIH1cclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9yc0FnZW50Q29kZSA9IHtcclxuICAgIHNldEFnZW50Q29kZTogKGFnZW50Q29kZTogc3RyaW5nKSA9PiA8QWdlbnRDb2RlPnsgdHlwZTogJ1NFVF9BR0VOVENPREUnLCBhZ2VudENvZGUgfVxyXG5cclxufTtcclxuXHJcbnR5cGUgS25vd25BY3Rpb25BZ2VudENvZGUgPSBBZ2VudENvZGVcclxuXHJcbmV4cG9ydCBjb25zdCBhZ2VudENvZGVyZWR1Y2VyOiBSZWR1Y2VyPEFnZW50Q29kZVN0YXRlPiA9IChzdGF0ZTogQWdlbnRDb2RlU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb25BZ2VudENvZGUpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU0VUX0FHRU5UQ09ERVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLmFnZW50Q29kZTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL3Byb3NwZWN0LnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVzU3RhdGUge1xyXG4gICAgc3RhdGVzOiBTdGF0ZVtdO1xyXG59XHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBDb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGZXRjaFN0YXRlUmVxdWVzdCB7IHR5cGU6ICdHRVRfU1RBVEVTX1JFUVVFU1QnIH1cclxuaW50ZXJmYWNlIEZldGNoU3RhdGVTdWNjZXNzIHsgdHlwZTogJ0dFVF9TVEFURVNfU1VDQ0VTUycsIHN0YXRlcyB9XHJcbmludGVyZmFjZSBGZXRjaFN0YXRlc0ZhaWxlZCB7IHR5cGU6ICdHRVRfU1RBVEVTX0ZBSUxFRCcgfVxyXG50eXBlIEtub3duQWN0aW9uID0gRmV0Y2hTdGF0ZVN1Y2Nlc3MgfCBGZXRjaFN0YXRlUmVxdWVzdCB8IEZldGNoU3RhdGVzRmFpbGVkO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgZmV0Y2hTdGF0ZVJlcXVlc3Q6ICgpID0+IDxGZXRjaFN0YXRlUmVxdWVzdD57IHR5cGU6ICdHRVRfU1RBVEVTX1JFUVVFU1QnIH0sXHJcbiAgICBmZXRjaFN0YXRlU3VjY2VzczogKHN0YXRlcykgPT4gPEZldGNoU3RhdGVTdWNjZXNzPnsgdHlwZTogJ0dFVF9TVEFURVNfU1VDQ0VTUycsIHN0YXRlcyB9LFxyXG4gICAgZmV0Y2hTdGF0ZXNGYWlsZWQ6ICgpID0+IDxGZXRjaFN0YXRlc0ZhaWxlZD57IHR5cGU6ICdHRVRfU1RBVEVTX0ZBSUxFRCcgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPFN0YXRlc1N0YXRlPiA9IChzdGF0ZTogU3RhdGVzU3RhdGUsIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdHRVRfU1RBVEVTX1NVQ0NFU1MnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgc3RhdGUsIGFjdGlvbi5zdGF0ZXMpOyAgICAgIFxyXG4gICAgICAgIGNhc2UgJ0dFVF9TVEFURVNfUkVRVUVTVCc6XHJcbiAgICAgICAgY2FzZSAnR0VUX1NUQVRFU19GQUlMRUQnOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgbnVsbCxudWxsKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGxpbmUgZ3VhcmFudGVlcyB0aGF0IGV2ZXJ5IGFjdGlvbiBpbiB0aGUgS25vd25BY3Rpb24gdW5pb24gaGFzIGJlZW4gY292ZXJlZCBieSBhIGNhc2UgYWJvdmVcclxuICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdW5yZWNvZ25pemVkIGFjdGlvbnMgKG9yIGluIGNhc2VzIHdoZXJlIGFjdGlvbnMgaGF2ZSBubyBlZmZlY3QpLCBtdXN0IHJldHVybiB0aGUgZXhpc3Rpbmcgc3RhdGVcclxuICAgIC8vICAob3IgZGVmYXVsdCBpbml0aWFsIHN0YXRlIGlmIG5vbmUgd2FzIHN1cHBsaWVkKVxyXG4gICAgcmV0dXJuIHN0YXRlID09PSB1bmRlZmluZWQgPyBbXSA6IHN0YXRlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvc3RhdGVzLnRzIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY29tYmluZVJlZHVjZXJzLCBHZW5lcmljU3RvcmVFbmhhbmNlciwgU3RvcmUsIFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3IsIFJlZHVjZXJzTWFwT2JqZWN0IH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyLCByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4JztcclxuaW1wb3J0ICogYXMgU3RvcmVNb2R1bGUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUsIHJlZHVjZXJzIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgUHJvc3BlY3RNaWRkbGVXYXJlLCBlcnJvckhhbmRsZXIgfSBmcm9tICcuL2FwaS9Qcm9zcGVjdC9Qcm9zcGVjdEFwaSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShoaXN0b3J5OiBIaXN0b3J5LCBpbml0aWFsU3RhdGU/OiBBcHBsaWNhdGlvblN0YXRlKSB7XHJcbiAgICAvLyBCdWlsZCBtaWRkbGV3YXJlLiBUaGVzZSBhcmUgZnVuY3Rpb25zIHRoYXQgY2FuIHByb2Nlc3MgdGhlIGFjdGlvbnMgYmVmb3JlIHRoZXkgcmVhY2ggdGhlIHN0b3JlLlxyXG4gICAgY29uc3Qgd2luZG93SWZEZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogd2luZG93IGFzIGFueTtcclxuICAgIC8vIElmIGRldlRvb2xzIGlzIGluc3RhbGxlZCwgY29ubmVjdCB0byBpdFxyXG4gICAgY29uc3QgZGV2VG9vbHNFeHRlbnNpb24gPSB3aW5kb3dJZkRlZmluZWQgJiYgd2luZG93SWZEZWZpbmVkLmRldlRvb2xzRXh0ZW5zaW9uIGFzICgpID0+IEdlbmVyaWNTdG9yZUVuaGFuY2VyO1xyXG4gICAgY29uc3QgY3JlYXRlU3RvcmVXaXRoTWlkZGxld2FyZSA9IGNvbXBvc2UoXHJcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBlcnJvckhhbmRsZXIsIFByb3NwZWN0TWlkZGxlV2FyZSwgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSksXHJcbiAgICAgICAgZGV2VG9vbHNFeHRlbnNpb24gPyBkZXZUb29sc0V4dGVuc2lvbigpIDogPFM+KG5leHQ6IFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3I8Uz4pID0+IG5leHRcclxuICAgICkoY3JlYXRlU3RvcmUpO1xyXG5cclxuICAgIC8vIENvbWJpbmUgYWxsIHJlZHVjZXJzIGFuZCBpbnN0YW50aWF0ZSB0aGUgYXBwLXdpZGUgc3RvcmUgaW5zdGFuY2VcclxuICAgIGNvbnN0IGFsbFJlZHVjZXJzID0gYnVpbGRSb290UmVkdWNlcihyZWR1Y2Vycyk7XHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUoYWxsUmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkgYXMgU3RvcmU8QXBwbGljYXRpb25TdGF0ZT47XHJcblxyXG4gICAgLy8gRW5hYmxlIFdlYnBhY2sgaG90IG1vZHVsZSByZXBsYWNlbWVudCBmb3IgcmVkdWNlcnNcclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc3RvcmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSb290UmVkdWNlciA9IHJlcXVpcmU8dHlwZW9mIFN0b3JlTW9kdWxlPignLi9zdG9yZScpO1xyXG4gICAgICAgICAgICBzdG9yZS5yZXBsYWNlUmVkdWNlcihidWlsZFJvb3RSZWR1Y2VyKG5leHRSb290UmVkdWNlci5yZWR1Y2VycykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oT2JqZWN0LmFzc2lnbih7fSwgYWxsUmVkdWNlcnMsIHsgcm91dGluZzogcm91dGVyUmVkdWNlciB9KSk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZ3VyZVN0b3JlLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vL2ltcG9ydCB7IExheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG4vL2ltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcclxuLy9pbXBvcnQgRmV0Y2hEYXRhIGZyb20gJy4vY29tcG9uZW50cy9GZXRjaERhdGEnO1xyXG4vL2ltcG9ydCBDb3VudGVyIGZyb20gJy4vY29tcG9uZW50cy9Db3VudGVyJztcclxuaW1wb3J0IFByb3NwZWN0RWRpdENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lcnMvUHJvc3BlY3RDb250YWluZXIvUHJvc3BlY3RFZGl0Q29udGFpbmVyJztcclxuICAgIFxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gKDxkaXY+XHJcbiAgICAgICAgICAgIFxyXG48UHJvc3BlY3RFZGl0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMudHN4IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2hpc3RvcnkvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxNDIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vc2VydmVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMTQ0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vaW1wb3J0ICogYXMgUHJvc3BlY3RBY3Rpb24gZnJvbSAnLi4vLi4vYWN0aW9ucy9Qcm9zcGVjdEFjdGlvbic7XHJcbmltcG9ydCBBcGlVcmwgZnJvbSAnLi4vYXBpVXJsLmRldic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgYWdpbGVuZXR1cmwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvaW5kZXgnO1xyXG4vL2ltcG9ydCAqIGFzIFZhbGlkYXRpb25NZXNzYWdlIGZyb20gJy4uLy4uL2FjdGlvbnMvVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24nO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgKiBhcyBMb2FkZXJBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvTG9hZGVyJztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ2VBY3Rpb24gZnJvbSAnLi4vLi4vc3RvcmUvdmFsaWRhdGlvbk1lc3NhZ2UnO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdEFjdGlvbiBmcm9tICcuLi8uLi9zdG9yZS9Qcm9zcGVjdCc7XHJcbmltcG9ydCAqIGFzIFN0YXRlQWN0aW9uIGZyb20gJy4uLy4uL3N0b3JlL1N0YXRlcyc7XHJcblxyXG4vL2ltcG9ydCBlcnJvcmhhbmRsZXIgZnJvbSAnZXJyb3JoYW5kbGVyJztcclxuLy9pbXBvcnQgY29ubmVjdCBmcm9tICdjb25uZWN0JztcclxuaW50ZXJmYWNlIFByb3NwZWN0e1xyXG5GaXJzdE5hbWU6c3RyaW5nO1xyXG5MYXN0TmFtZTpzdHJpbmc7XHJcblNzbjpzdHJpbmc7XHJcbklkOm51bWJlcjtcclxuXHJcbn1cclxuY29uc3QgYWR2aXNvclVybCA9IEFwaVVybC5hZHZpc29yVXJsO1xyXG5jb25zdCBwYXJ0aWNpcGFudFVybCA9IEFwaVVybC5wYXJ0aWNpcGFudFVybDtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9zcGVjdE1pZGRsZVdhcmUgPSAoc3RvcmU6YW55KSA9PiAobmV4dDphbnkpID0+IChhY3Rpb246YW55KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlcy5HRVRfUFJPU1BFQ1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoKGAke3BhcnRpY2lwYW50VXJsfXByb3NwZWN0LyR7YWN0aW9uLmlkfWAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZTphbnkpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb3NwZWN0ID0ge30gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQgJiYgZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5maXJzdE5hbWUgPSBkYXRhLkZpcnN0TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QubGFzdE5hbWUgPSBkYXRhLkxhc3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5zc24gPSBkYXRhLlNzbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5jbGllbnRQcm9zcGVjdElkID0gZGF0YS5JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob21lQWRkcmVzc1N0cmVldDEsIGhvbWVBZGRyZXNzU3RyZWV0MiwgaG9tZUFkZHJlc3NTdHJlZXQzLCBob21lQWRkcmVzc1ppcENvZGUsIGhvbWVBZGRyZXNzU3RhdGUsIGhvbWVBZGRyZXNzQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1haWxpbmdBZGRyZXNzU3RyZWV0MSwgbWFpbGluZ0FkZHJlc3NTdHJlZXQyLCBtYWlsaW5nQWRkcmVzc1N0cmVldDMsIG1haWxpbmdBZGRyZXNzWmlwQ29kZSwgbWFpbGluZ0FkZHJlc3NTdGF0ZSwgbWFpbGluZ0FkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5BZGRyZXNzZXMgIT09IHVuZGVmaW5lZCAmJiBkYXRhLkFkZHJlc3NlcyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5BZGRyZXNzZXNbXCIkdmFsdWVzXCJdLmZvckVhY2goZnVuY3Rpb24gKGFkZHJlc3M6YW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhLkFkZHJlc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChhZGRyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3MuQWRkcmVzc1R5cGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NTdHJlZXQxID0gYWRkcmVzcy5TdHJlZXQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob21lQWRkcmVzc1N0cmVldDIgPSBhZGRyZXNzLlN0cmVldDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzU3RyZWV0MyA9IGFkZHJlc3MuU3RyZWV0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9tZUFkZHJlc3NTdGF0ZSA9IGFkZHJlc3MuU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzQ2l0eSA9IGFkZHJlc3MuQ2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ob21lQWRkcmVzc0NvdW50cnkgPSBhZGRyZXNzLkNvdW50cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzWmlwQ29kZSA9IGFkZHJlc3MuWmlwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhZGRyZXNzLkFkZHJlc3NUeXBlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzU3RyZWV0MSA9IGFkZHJlc3MuU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3NTdHJlZXQyID0gYWRkcmVzcy5TdHJlZXQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1N0cmVldDMgPSBhZGRyZXNzLlN0cmVldDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzU3RhdGUgPSBhZGRyZXNzLlN0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc0NpdHkgPSBhZGRyZXNzLkNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWFpbGluZ0FkZHJlc3NDb3VudHJ5ID0gYWRkcmVzcy5Db3VudHJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzc1ppcENvZGUgPSBhZGRyZXNzLlppcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob21lUGhvbmVOdW1iZXI7IGxldCB3b3JrUGhvbmVOdW1iZXI7IGxldCBvdGhlclBob25lTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5QaG9uZU51bWJlcnMgIT09IG51bGwgJiYgZGF0YS5QaG9uZU51bWJlcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5QaG9uZU51bWJlcnNbXCIkdmFsdWVzXCJdLmZvckVhY2goZnVuY3Rpb24gKHBob25lOmFueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGF0YS5QaG9uZU51bWJlcnMuZm9yRWFjaCgocGhvbmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGhvbmUuUGhvbmVUeXBlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvbWVQaG9uZU51bWJlciA9IHBob25lLk51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGhvbmUuUGhvbmVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtQaG9uZU51bWJlciA9IHBob25lLk51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGhvbmUuUGhvbmVUeXBlID09PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyUGhvbmVOdW1iZXIgPSBwaG9uZS5OdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNSZWZlcnJhbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5SZWZlcnJhbERhdGUgIT09IG51bGwgJiYgZGF0YS5SZWZlcnJhbERhdGUgIT09IHVuZGVmaW5lZCAmJiBuZXcgRGF0ZShkYXRhLlJlZmVycmFsRGF0ZS50b1N0cmluZygpKS5nZXRGdWxsWWVhcigpID4gMTkwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZlcnJhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QudGl0bGUgPSBkYXRhLlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5taWRkbGVJbml0aWFsID0gZGF0YS5NaWRkbGVJbml0aWFsICE9PSBudWxsID8gZGF0YS5NaWRkbGVJbml0aWFsIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmRhdGVPZkJpcnRoID0gZGF0YS5EYXRlT2ZCaXJ0aCAhPT0gbnVsbCAmJiBkYXRhLkRhdGVPZkJpcnRoICE9PSB1bmRlZmluZWQgPyBuZXcgRGF0ZShkYXRhLkRhdGVPZkJpcnRoLnRvU3RyaW5nKCkpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5nZW5kZXIgPSBkYXRhLkdlbmRlciAhPT0gbnVsbCAmJiBkYXRhLkdlbmRlciAhPT0gdW5kZWZpbmVkID8gZGF0YS5HZW5kZXIudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC51c0NpdGl6ZW4gPSBkYXRhLlVzQ2l0aXplbkZsYWcgIT09IG51bGwgJiYgZGF0YS5Vc0NpdGl6ZW5GbGFnICE9PSB1bmRlZmluZWQgPyBkYXRhLlVzQ2l0aXplbkZsYWcudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYXJpdGFsU3RhdHVzID0gZGF0YS5NYXJpdGFsU3RhdHVzICE9PSBudWxsICYmIGRhdGEuTWFyaXRhbFN0YXR1cyAhPT0gdW5kZWZpbmVkID8gZGF0YS5NYXJpdGFsU3RhdHVzLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMSA9IGhvbWVBZGRyZXNzU3RyZWV0MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMiA9IGhvbWVBZGRyZXNzU3RyZWV0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMyA9IGhvbWVBZGRyZXNzU3RyZWV0MztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NDaXR5ID0gaG9tZUFkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ob21lQWRkcmVzc1N0YXRlID0gaG9tZUFkZHJlc3NTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaG9tZUFkZHJlc3NaaXBDb2RlID0gaG9tZUFkZHJlc3NaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUxID0gbWFpbGluZ0FkZHJlc3NTdHJlZXQxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUyID0gbWFpbGluZ0FkZHJlc3NTdHJlZXQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUzID0gbWFpbGluZ0FkZHJlc3NTdHJlZXQzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0NpdHkgPSBtYWlsaW5nQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzU3RhdGUgPSBtYWlsaW5nQWRkcmVzc1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1ppcENvZGUgPSBtYWlsaW5nQWRkcmVzc1ppcENvZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhvbWVQaG9uZSA9IGhvbWVQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3Qud29ya1Bob25lID0gd29ya1Bob25lTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5vdGhlclBob25lID0gb3RoZXJQaG9uZU51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QucmVmZXJyYWwgPSBpc1JlZmVycmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbWFpbEFkZHJlc3MgPSBkYXRhLkVtYWlsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZSAhPT0gbnVsbCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnByZXZpb3VzRnVuZHMgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRFeHBlcmllbmNlX0ZsYWcgIT09IHVuZGVmaW5lZCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRFeHBlcmllbmNlX0ZsYWcgIT09IG51bGwgPyBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRFeHBlcmllbmNlX0ZsYWcudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuRklOUkEgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkZpbnJhX0ZsYWcgIT09IHVuZGVmaW5lZCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkZpbnJhX0ZsYWcgIT09IG51bGwgPyBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkZpbnJhX0ZsYWcudG9TdHJpbmcoKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuaW52ZXN0bWVudE9iamVjdGl2ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudE9iamVjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnJpc2tQcm9maWxlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5SaXNrUHJvZmlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5Ib3VzZWhvbGRJbmNvbWVSYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm5ldFdvcnRoUmFuZ2UgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLk5ldFdvcnRoUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5saWZlSW5zdXJhbmNlUmFuZ2UgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkxpZmVJbnN1cmFuY2VSYW5nZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LnRheEJyYWNrZXQgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLlRheEJyYWNrZXROdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5kZXBlbmRlbnRzTm8gPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkRlcGVkZW50TnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuYWdlcyA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuQWdlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmN1cnJlbnRFbXBsb3llciA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuQ3VycmVudEVtcGxveWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95bWVudFN0YXR1cyA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95bWVudFN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm9jY3VwYXRpb24gPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLk9jY3VwYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5lbXBsb3llckFkZHJlc3MgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQWRkcmVzcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyQ2l0eSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJDaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJTdGF0ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmVtcGxveWVyWmlwQ29kZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZW1wbG95ZXJTYWxhcnkgPSBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLlNhbGFyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmhpcmVEYXRlID0gZGF0YS5Qcm9zcGVjdEludmVzdG9yUHJvZmlsZS5IaXJlRGF0ZSAhPT0gbnVsbCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkhpcmVEYXRlICE9PSB1bmRlZmluZWQgPyBuZXcgRGF0ZShkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkhpcmVEYXRlLnRvU3RyaW5nKCkpLnRvSVNPU3RyaW5nKCkuc3Vic3RyKDAsIDEwKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvc3BlY3QuZXhwZWN0ZWRBbm51aXR5RGF0ZSA9IGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRXhwZWN0ZWRBbm51aXR5RGF0ZSAhPT0gbnVsbCAmJiBkYXRhLlByb3NwZWN0SW52ZXN0b3JQcm9maWxlLkV4cGVjdGVkQW5udWl0eURhdGUgIT09IHVuZGVmaW5lZCA/IG5ldyBEYXRlKGRhdGEuUHJvc3BlY3RJbnZlc3RvclByb2ZpbGUuRXhwZWN0ZWRBbm51aXR5RGF0ZS50b1N0cmluZygpKS50b0lTT1N0cmluZygpLnN1YnN0cigwLCAxMCkgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzSW52ZXN0b3JQcm9maWxlTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0ludmVzdG9yUHJvZmlsZU5ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UgIT09IHVuZGVmaW5lZCAmJiBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pbmNvbWVBY2NvdW50U2FsYXJ5ID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5TYWxhcnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5zb2NpYWxTZWN1cml0eSA9IGRhdGEuUHJvc3BlY3RJbmNvbWVTb3VyY2UuU29jaWFsU2VjdXJpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5wZW5zaW9uQmVuZWZpdHMgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLlBlbnNpb25CZW5lZml0cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmludmVzdG1lbnRJbmNvbWUgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLkludmVzdG1lbnRJbmNvbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5ybWQgPSBkYXRhLlByb3NwZWN0SW5jb21lU291cmNlLlJNRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0Lm90aGVyID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5PdGhlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmV4cGVuc2VzQW1vdW50ID0gZGF0YS5Qcm9zcGVjdEluY29tZVNvdXJjZS5FeHBlbnNlc0Ftb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzSW5jb21lU291cmNlTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9zcGVjdC5pc0luY29tZVNvdXJjZU5ldyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3NwZWN0LmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoUHJvc3BlY3RTdWNjZXNzKHByb3NwZWN0KSlcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChQcm9zcGVjdEFjdGlvbi5hY3Rpb25DcmVhdG9ycy5mZXRjaFByb3NwZWN0U3VjY2Vzcyhwcm9zcGVjdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gbmV4dChWYWxpZGF0aW9uTWVzc2FnZS5BZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIGdldCBwcm9zcGVjdFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmZldGNoUHJvc3BlY3RGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gZ2V0IHByb3NwZWN0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFByb3NwZWN0QWN0aW9uLmFjdGlvbkNyZWF0b3JzLmZldGNoUHJvc3BlY3RGYWlsZWQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZXMuR0VUX1NUQVRFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQmVnaW4oKSk7XHJcbiAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2goYCR7YWR2aXNvclVybH1hZHZpc29yL3N0YXRlc2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24uZmV0Y2hTdGF0ZXNTdWNjZXNzKGpzb25bXCIkdmFsdWVzXCJdKSlcclxuICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChTdGF0ZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5mZXRjaFN0YXRlU3VjY2Vzcyhqc29uW1wiJHZhbHVlc1wiXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN0YXRlcyBmYWlsZWQnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChWYWxpZGF0aW9uTWVzc2FnZS5BZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIGdldCBzdGF0ZXNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV4dChQcm9zcGVjdEFjdGlvbi5mZXRjaFN0YXRlc0ZhaWxlZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gZ2V0IHN0YXRlc1wiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dChTdGF0ZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5mZXRjaFN0YXRlc0ZhaWxlZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGVzLlVQREFURV9QUk9TUEVDVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBsZXQgcHJvc3BlY3QgPSBzdGF0ZS5Qcm9zcGVjdERldGFpbDtcclxuICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckJlZ2luKCkpO1xyXG4gICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICAgICAgbGV0IHZhbGlkRm9ybSA9IHRydWUgYXMgYW55O1xyXG5cclxuICAgICAgICAgICAgc3RhdGUuZXJyb3JzLmZvckVhY2goZnVuY3Rpb24gKGVycm9yLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmVycm9yTWVzc2FnZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkRm9ybSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWxpZEZvcm0pO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRGb3JtICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGxhaW5TU04gPSBwcm9zcGVjdC5zc247XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFpblNTTik7XHJcbiAgICAgICAgICAgICAgICBwbGFpblNTTiA9IHBsYWluU1NOLnNwbGl0KCctJykuam9pbignJykuc3BsaXQoJ18nKS5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmZXJyYWw7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvc3BlY3QucmVmZXJyYWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWZlcnJhbCA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBob21lQWRkcmVzcyA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLlN0cmVldDEgPSBwcm9zcGVjdC5ob21lQWRkcmVzc0xpbmUxO1xyXG4gICAgICAgICAgICAgICAgaG9tZUFkZHJlc3MuU3RyZWV0MiA9IHByb3NwZWN0LmhvbWVBZGRyZXNzTGluZTI7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5TdHJlZXQzID0gcHJvc3BlY3QuaG9tZUFkZHJlc3NMaW5lMztcclxuICAgICAgICAgICAgICAgIGhvbWVBZGRyZXNzLkNpdHkgPSBwcm9zcGVjdC5ob21lQWRkcmVzc0NpdHk7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5TdGF0ZSA9IHByb3NwZWN0LmhvbWVBZGRyZXNzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5aaXAgPSBwcm9zcGVjdC5ob21lQWRkcmVzc1ppcENvZGU7XHJcbiAgICAgICAgICAgICAgICBob21lQWRkcmVzcy5BZGRyZXNzVHlwZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcyA9IFtdIGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGFkZHJlc3MucHVzaChob21lQWRkcmVzcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFpbGluZ0FkZHJlc3MgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5TdHJlZXQxID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NMaW5lMTtcclxuICAgICAgICAgICAgICAgIG1haWxpbmdBZGRyZXNzLlN0cmVldDIgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc0xpbmUyO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuU3RyZWV0MyA9IHByb3NwZWN0Lm1haWxpbmdBZGRyZXNzTGluZTM7XHJcbiAgICAgICAgICAgICAgICBtYWlsaW5nQWRkcmVzcy5DaXR5ID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NDaXR5O1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuU3RhdGUgPSBwcm9zcGVjdC5tYWlsaW5nQWRkcmVzc1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuWmlwID0gcHJvc3BlY3QubWFpbGluZ0FkZHJlc3NaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgbWFpbGluZ0FkZHJlc3MuQWRkcmVzc1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYWRkcmVzcy5wdXNoKG1haWxpbmdBZGRyZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGhvbmVOdW1iZXJzID0gW10gYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgdmFyIGhvbWVQaG9uZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIGhvbWVQaG9uZS5OdW1iZXIgPSBwcm9zcGVjdC5ob21lUGhvbmUgIT09IHVuZGVmaW5lZCA/IHByb3NwZWN0LmhvbWVQaG9uZS5zcGxpdCgnLScpLmpvaW4oJycpLnNwbGl0KCcoJykuam9pbignJykuc3BsaXQoJyknKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpIDogJyc7XHJcbiAgICAgICAgICAgICAgICBob21lUGhvbmUuUGhvbmVUeXBlID0gMDtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVycy5wdXNoKGhvbWVQaG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmtQaG9uZSA9IHt9IGFzIGFueTtcclxuICAgICAgICAgICAgICAgIHdvcmtQaG9uZS5OdW1iZXIgPSBwcm9zcGVjdC53b3JrUGhvbmUgIT09IHVuZGVmaW5lZCA/IHByb3NwZWN0LndvcmtQaG9uZS5zcGxpdCgnLScpLmpvaW4oJycpLnNwbGl0KCcoJykuam9pbignJykuc3BsaXQoJyknKS5qb2luKCcnKS5zcGxpdCgnXycpLmpvaW4oJycpIDogJyc7XHJcbiAgICAgICAgICAgICAgICB3b3JrUGhvbmUuUGhvbmVUeXBlID0gMTtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVycy5wdXNoKHdvcmtQaG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG90aGVyUGhvbmUgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBvdGhlclBob25lLk51bWJlciA9IHByb3NwZWN0Lm90aGVyUGhvbmUgIT09IHVuZGVmaW5lZCA/IHByb3NwZWN0Lm90aGVyUGhvbmUuc3BsaXQoJy0nKS5qb2luKCcnKS5zcGxpdCgnKCcpLmpvaW4oJycpLnNwbGl0KCcpJykuam9pbignJykuc3BsaXQoJ18nKS5qb2luKCcnKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQaG9uZS5QaG9uZVR5cGUgPSA1O1xyXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJzLnB1c2gob3RoZXJQaG9uZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluY29tZVNvdXJjZSA9IHt9ICBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuU29jaWFsU2VjdXJpdHkgPSBwcm9zcGVjdC5zb2NpYWxTZWN1cml0eTtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5TYWxhcnkgPSBwcm9zcGVjdC5pbmNvbWVBY2NvdW50U2FsYXJ5O1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLlBlbnNpb25CZW5lZml0cyA9IHByb3NwZWN0LnBlbnNpb25CZW5lZml0cztcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5JbnZlc3RtZW50SW5jb21lID0gcHJvc3BlY3QuaW52ZXN0bWVudEluY29tZTtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5STUQgPSBwcm9zcGVjdC5ybWQ7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVTb3VyY2UuT3RoZXIgPSBwcm9zcGVjdC5vdGhlcjtcclxuICAgICAgICAgICAgICAgIGluY29tZVNvdXJjZS5FeHBlbnNlc0Ftb3VudCA9IHByb3NwZWN0LmV4cGVuc2VzQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgaW5jb21lU291cmNlLkNsaWVudFByb3NwZWN0SWQgPSBwcm9zcGVjdC5jbGllbnRQcm9zcGVjdElkO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnZlc3RvclByb2ZpbGUgPSB7fSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSW52ZXN0bWVudEV4cGVyaWVuY2VfRmxhZyA9IHByb3NwZWN0LnByZXZpb3VzRnVuZHM7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRmlucmFfRmxhZyA9IHByb3NwZWN0LkZJTlJBO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkludmVzdG1lbnRPYmplY3RpdmUgPSBwcm9zcGVjdC5pbnZlc3RtZW50T2JqZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLlJpc2tQcm9maWxlID0gcHJvc3BlY3Qucmlza1Byb2ZpbGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuSG91c2Vob2xkSW5jb21lUmFuZ2UgPSBwcm9zcGVjdC5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5OZXRXb3J0aFJhbmdlID0gcHJvc3BlY3QubmV0V29ydGhSYW5nZTtcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5MaWZlSW5zdXJhbmNlUmFuZ2UgPSBwcm9zcGVjdC5saWZlSW5zdXJhbmNlUmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuVGF4QnJhY2tldE51bWJlciA9IHByb3NwZWN0LnRheEJyYWNrZXQ7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRGVwZWRlbnROdW1iZXIgPSBwcm9zcGVjdC5kZXBlbmRlbnRzTm87XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuQWdlcyA9IHByb3NwZWN0LmFnZXM7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuQ3VycmVudEVtcGxveWVyID0gcHJvc3BlY3QuY3VycmVudEVtcGxveWVyO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveW1lbnRTdGF0dXMgPSBwcm9zcGVjdC5lbXBsb3ltZW50U3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLk9jY3VwYXRpb24gPSBwcm9zcGVjdC5vY2N1cGF0aW9uO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkVtcGxveWVyQWRkcmVzcyA9IHByb3NwZWN0LmVtcGxveWVyQWRkcmVzcztcclxuICAgICAgICAgICAgICAgIGludmVzdG9yUHJvZmlsZS5FbXBsb3llckNpdHkgPSBwcm9zcGVjdC5lbXBsb3llckNpdHk7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJTdGF0ZSA9IHByb3NwZWN0LmVtcGxveWVyU3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRW1wbG95ZXJaaXBDb2RlID0gcHJvc3BlY3QuZW1wbG95ZXJaaXBDb2RlO1xyXG4gICAgICAgICAgICAgICAgaW52ZXN0b3JQcm9maWxlLkhpcmVEYXRlID0gcHJvc3BlY3QuaGlyZURhdGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuRXhwZWN0ZWRBbm51aXR5RGF0ZSA9IHByb3NwZWN0LmV4cGVjdGVkQW5udWl0eURhdGU7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuU2FsYXJ5ID0gcHJvc3BlY3QuZW1wbG95ZXJTYWxhcnk7XHJcbiAgICAgICAgICAgICAgICBpbnZlc3RvclByb2ZpbGUuQ2xpZW50SWQgPSBwcm9zcGVjdC5jbGllbnRQcm9zcGVjdElkO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9zcGVjdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSWQ6IHByb3NwZWN0LmNsaWVudFByb3NwZWN0SWQsIEZpcnN0TmFtZTogcHJvc3BlY3QuZmlyc3ROYW1lLCBUaXRsZTogcHJvc3BlY3QudGl0bGUsIE1pZGRsZUluaXRpYWw6IHByb3NwZWN0Lm1pZGRsZUluaXRpYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgTGFzdE5hbWU6IHByb3NwZWN0Lmxhc3ROYW1lLCBTc246IHBsYWluU1NOLCBEYXRlT2ZCaXJ0aDogcHJvc3BlY3QuZGF0ZU9mQmlydGgsIE1hcml0YWxTdGF0dXM6IHByb3NwZWN0Lm1hcml0YWxTdGF0dXMsIFJlZmVycmFsRGF0ZTogcmVmZXJyYWwsIEFkZHJlc3NlczogYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICBQaG9uZU51bWJlcnM6IHBob25lTnVtYmVycywgR2VuZGVyOiBwcm9zcGVjdC5nZW5kZXIsIEVtYWlsOiBwcm9zcGVjdC5lbWFpbEFkZHJlc3MsIFByb3NwZWN0SW5jb21lU291cmNlOiBpbmNvbWVTb3VyY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvc3BlY3RJbnZlc3RvclByb2ZpbGU6IGludmVzdG9yUHJvZmlsZSwgVXNDaXRpemVuRmxhZzogcHJvc3BlY3QudXNDaXRpemVuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2goYCR7cGFydGljaXBhbnRVcmx9cHJvc3BlY3QvdXBkYXRlYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb3NwZWN0RGF0YSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOmFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL25leHQoUHJvc3BlY3RBY3Rpb24ubG9hZGVyQ29tcGxldGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQoTG9hZGVyQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmxvYWRlckVuZCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2luZG93IGFzIGFueSkubG9jYXRpb24gPSBhZ2lsZW5ldHVybCArIFwiL0Rhc2hib2FyZC9BZHZpc29yL0NsaWVudFByb3NwZWN0TGlzdGluZy5hc3B4P2FnZW50SWQ9MDM0OTlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpIGFzIGFueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFZhbGlkYXRpb25NZXNzYWdlLkFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gdXBkYXRlIHByb3NwZWN0XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9uZXh0KFByb3NwZWN0QWN0aW9uLmxvYWRlckNvbXBsZXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0KFZhbGlkYXRpb25NZXNzYWdlQWN0aW9uLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZSgnJywgXCJVbmFibGUgdG8gdXBkYXRlIHByb3NwZWN0XCIpKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dChMb2FkZXJBY3Rpb24uYWN0aW9uQ3JlYXRvcnMubG9hZGVyRW5kKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV4dChWYWxpZGF0aW9uTWVzc2FnZUFjdGlvbi5hY3Rpb25DcmVhdG9ycy5hZGRFcnJvck1lc3NhZ2UoJycsIFwiVW5hYmxlIHRvIHVwZGF0ZSBwcm9zcGVjdFwiKSk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KExvYWRlckFjdGlvbi5hY3Rpb25DcmVhdG9ycy5sb2FkZXJFbmQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICAgICAgICBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXIgPSBzdGF0ZSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBuZXh0KGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBjYXVnaHRcIik7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwaS9Qcm9zcGVjdC9Qcm9zcGVjdEFwaS50cyIsImNsYXNzIEFwaVVybHtcclxuICAgIHN0YXRpYyBwYXJ0aWNpcGFudFVybCA9J2h0dHBzOi8vZGV2LnZhbGljLmNvbS9yZWFjdC9wYXJ0aWNpcGFudHNlcnZpY2UvYXBpLyc7XHJcbiAgICBzdGF0aWMgYWR2aXNvclVybCA9J2h0dHBzOi8vZGV2LnZhbGljLmNvbS9TZXJ2aWNlcy9BZHZpc29yL2FwaS8nO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFwaVVybDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBpL2FwaVVybC5kZXYudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbW9yeUhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyUmVuZGVyZXIsIFJlbmRlclJlc3VsdCB9IGZyb20gJ2FzcG5ldC1wcmVyZW5kZXJpbmcnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKHBhcmFtcyA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gUHJlcGFyZSBSZWR1eCBzdG9yZSB3aXRoIGluLW1lbW9yeSBoaXN0b3J5LCBhbmQgZGlzcGF0Y2ggYSBuYXZpZ2F0aW9uIGV2ZW50XHJcbiAgICAgICAgLy8gY29ycmVzcG9uZGluZyB0byB0aGUgaW5jb21pbmcgVVJMXHJcbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBwYXJhbXMuYmFzZVVybC5zdWJzdHJpbmcoMCwgcGFyYW1zLmJhc2VVcmwubGVuZ3RoIC0gMSk7IC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxyXG4gICAgICAgIGNvbnN0IHVybEFmdGVyQmFzZW5hbWUgPSBwYXJhbXMudXJsLnN1YnN0cmluZyhiYXNlbmFtZS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoY3JlYXRlTWVtb3J5SGlzdG9yeSgpKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChyZXBsYWNlKHVybEFmdGVyQmFzZW5hbWUpKTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBhbiBpbnN0YW5jZSBvZiB0aGUgYXBwbGljYXRpb24gYW5kIHBlcmZvcm0gYW4gaW5pdGFsIHJlbmRlciB0aGF0IHdpbGxcclxuICAgICAgICAvLyBjYXVzZSBhbnkgYXN5bmMgdGFza3MgKGUuZy4sIGRhdGEgYWNjZXNzKSB0byBiZWdpblxyXG4gICAgICAgIGNvbnN0IHJvdXRlckNvbnRleHQ6IGFueSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IChcclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfT5cclxuICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgYmFzZW5hbWU9eyBiYXNlbmFtZSB9IGNvbnRleHQ9eyByb3V0ZXJDb250ZXh0IH0gbG9jYXRpb249eyBwYXJhbXMubG9jYXRpb24ucGF0aCB9IGNoaWxkcmVuPXsgcm91dGVzIH0gLz5cclxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJlbmRlclRvU3RyaW5nKGFwcCk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYSByZWRpcmVjdGlvbiwganVzdCBzZW5kIHRoaXMgaW5mb3JtYXRpb24gYmFjayB0byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgICAgIGlmIChyb3V0ZXJDb250ZXh0LnVybCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHsgcmVkaXJlY3RVcmw6IHJvdXRlckNvbnRleHQudXJsIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE9uY2UgYW55IGFzeW5jIHRhc2tzIGFyZSBkb25lLCB3ZSBjYW4gcGVyZm9ybSB0aGUgZmluYWwgcmVuZGVyXHJcbiAgICAgICAgLy8gV2UgYWxzbyBzZW5kIHRoZSByZWR1eCBzdG9yZSBzdGF0ZSwgc28gdGhlIGNsaWVudCBjYW4gY29udGludWUgZXhlY3V0aW9uIHdoZXJlIHRoZSBzZXJ2ZXIgbGVmdCBvZmZcclxuICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgaHRtbDogcmVuZGVyVG9TdHJpbmcoYXBwKSxcclxuICAgICAgICAgICAgICAgIGdsb2JhbHM6IHsgaW5pdGlhbFJlZHV4U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvblxyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYm9vdC1zZXJ2ZXIudHN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuLypleHBvcnQgaW50ZXJmYWNlIElJbmNvbWVTb3VyY2VQcm9wcyB7XHJcbmluY29tZUFjY291bnRTYWxhcnk/OnN0cmluZztcclxuc29jaWFsU2VjdXJpdHk/OnN0cmluZztcclxucGVuc2lvbkJlbmVmaXRzPzogc3RyaW5nO1xyXG5pbnZlc3RtZW50SW5jb21lPzogc3RyaW5nO1xyXG5ybWQ/OnN0cmluZztcclxub3RoZXI/OnN0cmluZztcclxuZXhwZW5zZXNBbW91bnQ/OiBzdHJpbmc7XHJcbm9uQ2hhbmdlOiBGdW5jdGlvbjtcclxufSovXHJcblxyXG5jbGFzcyBJbmNvbWVTb3VyY2UgZXh0ZW5kcyBDb21wb25lbnQ8YW55LGFueT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVVc2VySW5wdXQgPSB0aGlzLmhhbmRsZVVzZXJJbnB1dC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlVXNlcklucHV0KGUpIHtcclxuICAgICAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIG9uQ2hhbmdlKGUpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoPGRpdj48ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Bbm51YWwgSG91c2Vob2xkPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgSW5jb21lIEFjY291bnQgRnJvbTpcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmNvbWVBY2NvdW50U2FsYXJ5XCI+U2FsYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJpbmNvbWVBY2NvdW50U2FsYXJ5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5pbmNvbWVBY2NvdW50U2FsYXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNvY2lhbFNlY3VyaXR5XCI+U29jaWFsIFNlY3VyaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzb2NpYWxTZWN1cml0eVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuc29jaWFsU2VjdXJpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGVuc2lvbkJlbmVmaXRzXCI+UGVuc2lvbiBCZW5lZml0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGVuc2lvbkJlbmVmaXRzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5wZW5zaW9uQmVuZWZpdHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImludmVzdG1lbnRJbmNvbWVcIj5JbnZlc3RtZW50IEluY29tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaW52ZXN0bWVudEluY29tZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaW52ZXN0bWVudEluY29tZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJybWRcIj5STUQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInJtZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMucm1kfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyXCI+T3RoZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm90aGVyXCIgbWluPVwiMFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMub3RoZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGVuc2VzQW1vdW50XCI+RXhwZW5zZXMgQW1vdW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJleHBlbnNlc0Ftb3VudFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuZXhwZW5zZXNBbW91bnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmNvbWVTb3VyY2U7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvc3BlY3RDb21wb25lbnQvSW5jb21lU291cmNlQ29tcG9uZW50LnRzeCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWYWxpY0lucHV0IGZyb20gJy4uLy4uL3NoYXJlZC9WYWxpY0lucHV0Q29tcG9uZW50L1ZhbGljSW5wdXRDb21wb25lbnQnO1xyXG4vKmV4cG9ydCBpbnRlcmZhY2UgSUludmVzdG9yUHJvZmlsZVByb3Bze1xyXG4vL3N0YXRlcz86IElTdGF0ZVtdO1xyXG5zdGF0ZXM/OiBhbnlbXTtcclxub25DaGFuZ2U6ICgpPT4gdm9pZDtcclxucHJldmlvdXNGdW5kcz86IHN0cmluZztcclxuRklOUkE/OiBzdHJpbmc7XHJcbmludmVzdG1lbnRPYmplY3RpdmU/OnN0cmluZztcclxucmlza1Byb2ZpbGU/OnN0cmluZztcclxuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2U/OnN0cmluZztcclxubmV0V29ydGhSYW5nZT86c3RyaW5nO1xyXG5saWZlSW5zdXJhbmNlUmFuZ2U/OiBzdHJpbmc7XHJcbnRheEJyYWNrZXQ/OnN0cmluZztcclxuZGVwZW5kZW50c05vPzpzdHJpbmc7XHJcbmFnZXM/OnN0cmluZztcclxuY3VycmVudEVtcGxveWVyPzpzdHJpbmc7XHJcbmVtcGxveW1lbnRTdGF0dXM/OnN0cmluZztcclxub2NjdXBhdGlvbj86c3RyaW5nO1xyXG5lbXBsb3llckFkZHJlc3M/OnN0cmluZztcclxuZW1wbG95ZXJDaXR5PzpzdHJpbmc7XHJcbmVtcGxveWVyU3RhdGU/OnN0cmluZztcclxuZW1wbG95ZXJaaXBDb2RlPzpzdHJpbmc7XHJcbmVtcGxveWVyU2FsYXJ5PzpzdHJpbmc7XHJcbmhpcmVEYXRlPzphbnk7XHJcbmV4cGVjdGVkQW5udWl0eURhdGU/OmFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGV7XHJcbkNvZGU6c3RyaW5nO1xyXG59XHJcbiovXHJcbmNsYXNzIEludmVzdG9yUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudDxhbnksYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVVzZXJJbnB1dCA9IHRoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2UoZSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHsgc3RhdGVzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBzdGF0ZXNMaXN0RG93bjtcclxuICAgICAgICBpZiAoc3RhdGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RhdGVzTGlzdERvd24gPSBPYmplY3Qua2V5cyhzdGF0ZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17c3RhdGVzW2tleV0uQ29kZX0gPntzdGF0ZXNba2V5XS5Db2RlfTwvb3B0aW9uPiB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmV2aW91c0Z1bmRzXCI+UHJldmlvdXNseSBwdXJjaGFzZWQgbXV0dWFsIGZ1bmRzIG9yIG90aGVyIHNlY3VyaXRpZXM/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjaGVja2VkPXt0aGlzLnByb3BzLnByZXZpb3VzRnVuZHMgPT09IFwiMVwifSBuYW1lPVwicHJldmlvdXNGdW5kc1wiIHZhbHVlPVwiMVwiIC8+WWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCIwXCIgbmFtZT1cInByZXZpb3VzRnVuZHNcIiBjaGVja2VkPXt0aGlzLnByb3BzLnByZXZpb3VzRnVuZHMgPT09IFwiMFwifSAvPk5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkZJTlJBXCI+RW1wbG95ZWQgYnkgb3IgcmVnaXN0ZXJlZCB3aXRoIGEgRklOUkEgbWVtYmVyIGZpcm0/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiRklOUkFcIiB2YWx1ZT1cIjFcIiBjaGVja2VkPXt0aGlzLnByb3BzLkZJTlJBID09PSBcIjFcIn0gLz5ZZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiRklOUkFcIiB2YWx1ZT1cIjBcIiBjaGVja2VkPXt0aGlzLnByb3BzLkZJTlJBID09PSBcIjBcIn0gLz5Ob1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW52ZXN0bWVudE9iamVjdGl2ZVwiPkludmVzdG1lbnQgT2JqZWN0aXZlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiaW52ZXN0bWVudE9iamVjdGl2ZVwiIHZhbHVlPVwiU1BcIiBjaGVja2VkPXt0aGlzLnByb3BzLmludmVzdG1lbnRPYmplY3RpdmUgPT09IFwiU1BcIn0gLz5TYWZldHkgb2YgUHJpbmNpcGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImludmVzdG1lbnRPYmplY3RpdmVcIiB2YWx1ZT1cIkxHXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5pbnZlc3RtZW50T2JqZWN0aXZlID09PSBcIkxHXCJ9IC8+TG9uZy1UZXJtIEdyb3d0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJpbnZlc3RtZW50T2JqZWN0aXZlXCIgdmFsdWU9XCJJTlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuaW52ZXN0bWVudE9iamVjdGl2ZSA9PT0gXCJJTlwifSAvPkluY29tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyaXNrUHJvZmlsZVwiPlJpc2sgUHJvZmlsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicmlza1Byb2ZpbGVcIiB2YWx1ZT17dGhpcy5wcm9wcy5yaXNrUHJvZmlsZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSFJcIj5IaWdoZXIgUmlzazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUdcIj5BZ2dyZXNzaXZlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNQVwiPk1vZGVyYXRlbHkgQWdncmVzc2l2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTURcIj5Nb2RlcmF0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTUNcIj5Nb2RlcmF0ZWx5IENvbnNlcnZhdGl2ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ05cIj5Db25zZXJ2YXRpdmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBXCI+Q2F1dGlvdXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiBGaW5hbmNpYWwgU2l0dWF0aW9uPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCI+QW5udWFsIEhvdXNlaG9sZCBJbmNvbWUgUmFuZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZVwiIHZhbHVlPVwiMDFcIiBjaGVja2VkPXt0aGlzLnByb3BzLmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlID09PSBcIjAxXCJ9IC8+VW5kZXIgJDUwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZVwiIHZhbHVlPVwiMDJcIiBjaGVja2VkPXt0aGlzLnByb3BzLmFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlID09PSBcIjAyXCJ9IC8+JDUwLDAwMCAtICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlXCIgdmFsdWU9XCIwM1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMuYW5udWFsSG91c2Vob2xkSW5jb21lUmFuZ2UgPT09IFwiMDNcIn0gLz5PdmVyICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ldFdvcnRoUmFuZ2VcIj5OZXQgV29ydGggUmFuZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXRXb3J0aFJhbmdlXCIgdmFsdWU9XCIxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5uZXRXb3J0aFJhbmdlID09PSBcIjFcIn0gLz5VbmRlciAkNTAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm5ldFdvcnRoUmFuZ2VcIiB2YWx1ZT1cIjJcIiBjaGVja2VkPXt0aGlzLnByb3BzLm5ldFdvcnRoUmFuZ2UgPT09IFwiMlwifSAvPiQ1MCwwMDAgLSAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJuZXRXb3J0aFJhbmdlXCIgdmFsdWU9XCIzXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5uZXRXb3J0aFJhbmdlID09PSBcIjNcIn0gLz5PdmVyICQxMDAsMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxpZmVJbnN1cmFuY2VSYW5nZVwiPkxpZmUgSW5zdXJhbmNlIFJhbmdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibGlmZUluc3VyYW5jZVJhbmdlXCIgdmFsdWU9XCIwMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubGlmZUluc3VyYW5jZVJhbmdlID09PSBcIjAxXCJ9IC8+VW5kZXIgJDUwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJsaWZlSW5zdXJhbmNlUmFuZ2VcIiB2YWx1ZT1cIjAyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5saWZlSW5zdXJhbmNlUmFuZ2UgPT09IFwiMDJcIn0gLz4kNTAsMDAwIC0gJDEwMCwwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibGlmZUluc3VyYW5jZVJhbmdlXCIgdmFsdWU9XCIwM1wiIGNoZWNrZWQ9e3RoaXMucHJvcHMubGlmZUluc3VyYW5jZVJhbmdlID09PSBcIjAzXCJ9IC8+T3ZlciAkMTAwLDAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRheEJyYWNrZXRcIj5UYXggQnJhY2tldDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBuYW1lPVwidGF4QnJhY2tldFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMudGF4QnJhY2tldH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXBlbmRlbnRzTm9cIj5EZXBlbmRlbnRzOiAgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG5hbWU9XCJkZXBlbmRlbnRzTm9cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmRlcGVuZGVudHNOb30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VzXCI+QWdlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFZhbGljSW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBuYW1lPVwiYWdlc1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuYWdlc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoYWxmLXJ1bGVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VycmVudEVtcGxveWVyXCI+Q3VycmVudCBFbXBsb3llcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImN1cnJlbnRFbXBsb3llclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuY3VycmVudEVtcGxveWVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9jY3VwYXRpb25cIj5PY2N1cGF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwib2NjdXBhdGlvblwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMub2NjdXBhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZW1wbG95bWVudFN0YXR1c1wiIHZhbHVlPVwiUlwiIGNoZWNrZWQ9e3RoaXMucHJvcHMuZW1wbG95bWVudFN0YXR1cyA9PT0gXCJSXCJ9IC8+UmV0aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJlbXBsb3ltZW50U3RhdHVzXCIgdmFsdWU9XCJVXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5lbXBsb3ltZW50U3RhdHVzID09PSBcIlVcIn0gLz5VbmVtcGxveWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyQWRkcmVzc1wiPkVtcGxveWVyIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbXBsb3llckFkZHJlc3NcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyQWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbXBsb3llckNpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1wbG95ZXJDaXR5XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llckNpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJTdGF0ZVwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJlbXBsb3llclN0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llclN0YXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGVzTGlzdERvd259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1wbG95ZXJaaXBDb2RlXCI+WmlwQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtcGxveWVyWmlwQ29kZVwiIG1heC1sZW5ndGg9XCI1XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5lbXBsb3llclppcENvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtcGxveWVyU2FsYXJ5XCI+U2FsYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJlbXBsb3llclNhbGFyeVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG1pbj1cIjBcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmVtcGxveWVyU2FsYXJ5fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhpcmVEYXRlXCI+SGlyZSBEYXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiaGlyZURhdGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhpcmVEYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4cGVjdGVkQW5udWl0eURhdGVcIj5FeHBlY3RlZCBBbm51aXR5IERhdGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJleHBlY3RlZEFubnVpdHlEYXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5leHBlY3RlZEFubnVpdHlEYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEludmVzdG9yUHJvZmlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbnZlc3RvclByb2ZpbGVDb21wb25lbnQudHN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFZhbGljSW5wdXQgZnJvbSAnLi4vLi4vc2hhcmVkL1ZhbGljSW5wdXRDb21wb25lbnQvVmFsaWNJbnB1dENvbXBvbmVudCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7ZXJyb3JDbGFzc30gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvdXRpbGl0eSc7XHJcblxyXG4vKlxyXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZXN7XHJcbkNvZGU6c3RyaW5nO1xyXG59Ki9cclxuXHJcbmNsYXNzIFBlcnNvbmFsSW5mb3JtYXRpb24gZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVXNlcklucHV0ID0gdGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnZhbGljSW5wdXRDaGFuZ2UgPSB0aGlzLnZhbGljSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHZhbGljSW5wdXRDaGFuZ2UoZSl7XHJcbiAgICAgICAgY29uc3QgeyB2YWxpY0lucHV0Q2hhbmdlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHZhbGljSW5wdXRDaGFuZ2UoZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVVc2VySW5wdXQoZSkge1xyXG4gICAgICAgIGNvbnN0IHsgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgb25DaGFuZ2UoZSk7XHJcbiAgICB9ICAgXHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgeyBzdGF0ZXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHN0YXRlc0xpc3REb3duO1xyXG4gICAgICAgIGlmIChzdGF0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgc3RhdGVzTGlzdERvd24gPSBPYmplY3Qua2V5cyhzdGF0ZXMpLm1hcCgoa2V5LCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17c3RhdGVzW2tleV0uQ29kZX0gPntzdGF0ZXNba2V5XS5Db2RlfTwvb3B0aW9uPiB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLz0gc3RhdGVzICE9PSB1bmRlZmluZWQgPyBzdGF0ZXMubWFwKChpdGVtLCBpbmRleCkgPT4geyByZXR1cm4gPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT0ge2l0ZW0uQ29kZX0+e2l0ZW0uQ29kZX08L29wdGlvbj59KTogJyc7XHRcdFx0XHRcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPXt0aGlzLnByb3BzLnRpdGxlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TXIuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1ycy48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TXMuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRyLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5SZXYuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtc20tNCAke2Vycm9yQ2xhc3ModGhpcy5wcm9wcy5lcnJvcnMsICdmaXJzdE5hbWUnKX1gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1pZGRsZUluaXRpYWxcIj5NSTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtaWRkbGVJbml0aWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTUlcIiB2YWx1ZT17dGhpcy5wcm9wcy5taWRkbGVJbml0aWFsfSBtYXgtbGVuZ3RoPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgY29sLXNtLTUgJHtlcnJvckNsYXNzKHRoaXMucHJvcHMuZXJyb3JzLCAnbGFzdE5hbWUnKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtYXNtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwIGNvbC1zbS0zICR7ZXJyb3JDbGFzcyh0aGlzLnByb3BzLmVycm9ycywgJ3NzbicpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNzblwiPlNTTjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJzc25cIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic3NuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQUFBLUFBLUFBQUFcIiBtYXNrPVwiKioqXFwtKipcXC0qKioqXCIgbWFza0NoYXI9XCJfXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gcmVxdWlyZWQgdmFsdWU9e3RoaXMucHJvcHMuc3NufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPbmx5IGNoYW5nZSBTU04gaWYgeW91IGtub3cgdGhlIHJlYWwgdmFsdWUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRhdGVPZkJpcnRoXCI+RGF0ZSBPZiBCaXJ0aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRhdGEtZGF0ZWJpcnRoIG5hbWU9XCJkYXRlT2ZCaXJ0aFwiIHZhbHVlPXt0aGlzLnByb3BzLmRhdGVPZkJpcnRofSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZ2VuZGVyXCI+R2VuZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjFcIiBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5nZW5kZXIgPT09IFwiMVwifSAvPk1hbGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIjJcIiBuYW1lPVwiZ2VuZGVyXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5nZW5kZXIgPT09IFwiMlwifSAvPkZlbWFsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c0NpdGl6ZW5cIj5VUyBDaXRpemVuPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidXNDaXRpemVuXCIgdmFsdWU9XCIxXCIgY2hlY2tlZD17dGhpcy5wcm9wcy51c0NpdGl6ZW4gPT09IFwiMVwifSAvPlllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInVzQ2l0aXplblwiIHZhbHVlPVwiMFwiIGNoZWNrZWQ9e3RoaXMucHJvcHMudXNDaXRpemVuID09PSBcIjBcIn0gLz5Ob1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFyaXRhbFN0YXR1c1wiPk1hcml0YWwgU3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94LWlubGluZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwibWFyaXRhbFN0YXR1c1wiIHZhbHVlPVwiMVwiIGNoZWNrZWQ9e3RoaXMucHJvcHMubWFyaXRhbFN0YXR1cyA9PT0gXCIxXCJ9IC8+TWFycmllZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJtYXJpdGFsU3RhdHVzXCIgdmFsdWU9XCIwXCIgY2hlY2tlZD17dGhpcy5wcm9wcy5tYXJpdGFsU3RhdHVzID09PSBcIjBcIn0gLz5Ob3QgTWFycmllZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJtYXJpdGFsU3RhdHVzXCIgdmFsdWU9XCI2XCIgY2hlY2tlZD17dGhpcy5wcm9wcy5tYXJpdGFsU3RhdHVzICE9PSBcIjFcIiAmJiB0aGlzLnByb3BzLm1hcml0YWxTdGF0dXMgIT09IFwiMFwifSAvPkNpdmlsIFVuaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJoYWxmLXJ1bGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SG9tZSBBZGRyZXNzOjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NMaW5lMVwiPkFkZHJlc3MgTGluZSAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NMaW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLmhvbWVBZGRyZXNzTGluZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc0xpbmUyXCI+QWRkcmVzcyBMaW5lIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJob21lQWRkcmVzc0xpbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZUFkZHJlc3NMaW5lMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVBZGRyZXNzTGluZTNcIj5BZGRyZXNzIExpbmUgMzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzTGluZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc0xpbmUzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc0NpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZUFkZHJlc3NDaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc0NpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaG9tZUFkZHJlc3NTdGF0ZVwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJob21lQWRkcmVzc1N0YXRlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc1N0YXRlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiA+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZXNMaXN0RG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob21lQWRkcmVzc1ppcENvZGVcIj5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImhvbWVBZGRyZXNzWmlwQ29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWmlwQ29kZVwiIG1heC1sZW5ndGg9XCI1XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5ob21lQWRkcmVzc1ppcENvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1haWxpbmcgQWRkcmVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NMaW5lMVwiPkFkZHJlc3MgTGluZSAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NMaW5lMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDFcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySW5wdXR9IHZhbHVlPXt0aGlzLnByb3BzLm1haWxpbmdBZGRyZXNzTGluZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc0xpbmUyXCI+QWRkcmVzcyBMaW5lIDI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJtYWlsaW5nQWRkcmVzc0xpbmUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIExpbmUgMlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NMaW5lMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1haWxpbmdBZGRyZXNzTGluZTNcIj5BZGRyZXNzIExpbmUgMzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzTGluZTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgTGluZSAzXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc0xpbmUzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc0NpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibWFpbGluZ0FkZHJlc3NDaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc0NpdHl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFpbGluZ0FkZHJlc3NTdGF0ZVwiPlN0YXRlPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwibWFpbGluZ0FkZHJlc3NTdGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gdmFsdWU9e3RoaXMucHJvcHMubWFpbGluZ0FkZHJlc3NTdGF0ZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZXNMaXN0RG93bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYWlsaW5nQWRkcmVzc1ppcENvZGVcIj5aaXAgQ29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm1haWxpbmdBZGRyZXNzWmlwQ29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWmlwQ29kZVwiIG1heC1sZW5ndGg9XCI1XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklucHV0fSB2YWx1ZT17dGhpcy5wcm9wcy5tYWlsaW5nQWRkcmVzc1ppcENvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhvbWVQaG9uZVwiPkhvbWUgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiaG9tZVBob25lXCIgbWFzaz1cIlxcKDk5OVxcKTk5OVxcLTk5OTlcIiBtYXNrQ2hhcj1cIl9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMuaG9tZVBob25lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIndvcmtQaG9uZVwiPldvcmsgUGhvbmU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwicGhvbmVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwid29ya1Bob25lXCIgbWFzaz1cIlxcKDk5OVxcKTk5OVxcLTk5OTlcIiBtYXNrQ2hhcj1cIl9cIiBvbkNoYW5nZT17dGhpcy52YWxpY0lucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy53b3JrUGhvbmV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyUGhvbmVcIj5PdGhlciBQaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxWYWxpY0lucHV0IHR5cGU9XCJwaG9uZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJvdGhlclBob25lXCIgbWFzaz1cIlxcKDk5OVxcKTk5OVxcLTk5OTlcIiBtYXNrQ2hhcj1cIl9cIiBvbkNoYW5nZT17dGhpcy52YWxpY0lucHV0Q2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy5vdGhlclBob25lfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3ggY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3gtaW5saW5lXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZWZlcnJhbFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJbnB1dH0gY2hlY2tlZD17dGhpcy5wcm9wcy5yZWZlcnJhbH0gLz5SZWZlcnJhbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsQWRkcmVzc1wiPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VmFsaWNJbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZW1haWxBZGRyZXNzXCIgb25DaGFuZ2U9e3RoaXMudmFsaWNJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmVtYWlsQWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuc3RhdGljIHByb3BUeXBlcyA9IHtcclxuXHRcdCBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHZhbGljSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvcm1hdGlvbjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9QZXJzb25hbEluZm9ybWF0aW9uQ29tcG9uZW50LnRzeCIsImV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfUkVRVUVTVCA9ICdHRVRfUFJPU1BFQ1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBHRVRfUFJPU1BFQ1RfRkFJTEVEID0gJ0dFVF9QUk9TUEVDVF9GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST1NQRUNUX1NVQ0NFU1MgPSAnR0VUX1BST1NQRUNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9SRVFVRVNUID0gJ1VQREFURV9QUk9TUEVDVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9TUEVDVF9GQUlMRUQgPSAnVVBEQVRFX1BST1NQRUNUX0ZBSUxFRCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyA9ICdVUERBVEVfUFJPU1BFQ1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUFJPU1BFQ1QgPSAnQUREX1BST1NQRUNUJztcclxuLy9leHBvcnQgY29uc3QgR0VUX1NUQVRFUyA9J0dFVF9TVEFURVMnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19SRVFVRVNUID0nR0VUX1NUQVRFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEdFVF9TVEFURVNfRkFJTEVEID0nR0VUX1NUQVRFU19GQUlMRUQnO1xyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRFU19TVUNDRVNTID0nR0VUX1NUQVRFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE9OX0lOUFVUX0NIQU5HRSA9J09OX0lOUFVUX0NIQU5HRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfVkFMSURBVElPTl9FUlJPUl9NRVNTQUdFID0gJ0FERF9FUlJPUl9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IExPQURFUl9CRUdJTiA9J0xPQURFUl9CRUdJTic7XHJcbmV4cG9ydCBjb25zdCBMT0FERVJfQ09NUExFVEUgPSdMT0FERVJfRU5EJztcclxuZXhwb3J0IGNvbnN0IFNFVF9BR0VOVENPREUgPSdTRVRfQUdFTlRDT0RFJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzIiwiaW1wb3J0IEluY29tZVNvdXJjZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb3NwZWN0Q29tcG9uZW50L0luY29tZVNvdXJjZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7bWFwRGlzcGF0Y2hUb1Byb3BzfSBmcm9tICcuL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXInO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyAgICAgICBcclxuICAgIGluY29tZUFjY291bnRTYWxhcnk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmluY29tZUFjY291bnRTYWxhcnksXHJcbiAgICBzb2NpYWxTZWN1cml0eTogc3RhdGUuUHJvc3BlY3REZXRhaWwuc29jaWFsU2VjdXJpdHksXHJcbiAgICBwZW5zaW9uQmVuZWZpdHM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnBlbnNpb25CZW5lZml0cyxcclxuICAgIGludmVzdG1lbnRJbmNvbWU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmludmVzdG1lbnRJbmNvbWUsXHJcbiAgICBybWQ6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnJtZCxcclxuICAgIG90aGVyOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5vdGhlcixcclxuICAgIGV4cGVuc2VzQW1vdW50OiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5leHBlbnNlc0Ftb3VudCAgICBcclxufSk7XHJcbmV4cG9ydCBjb25zdCBJbmNvbWVTb3VyY2VDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmNvbWVTb3VyY2UpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL0luY29tZVNvdXJjZUNvbnRhaW5lci50cyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IG1hcERpc3BhdGNoVG9Qcm9wcyB9IGZyb20gJy4vUGVyc29uYWxJbmZvcm1hdGlvbkNvbnRhaW5lcic7XHJcbmltcG9ydCBJbnZlc3RvclByb2ZpbGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9zcGVjdENvbXBvbmVudC9JbnZlc3RvclByb2ZpbGVDb21wb25lbnQnO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoeyAgICAgICAgICAgXHJcbiAgICBwcmV2aW91c0Z1bmRzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5wcmV2aW91c0Z1bmRzLFxyXG4gICAgRklOUkE6IHN0YXRlLlByb3NwZWN0RGV0YWlsLkZJTlJBLFxyXG4gICAgaW52ZXN0bWVudE9iamVjdGl2ZTogc3RhdGUuUHJvc3BlY3REZXRhaWwuaW52ZXN0bWVudE9iamVjdGl2ZSxcclxuICAgIHJpc2tQcm9maWxlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5yaXNrUHJvZmlsZSxcclxuICAgIGFubnVhbEhvdXNlaG9sZEluY29tZVJhbmdlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5hbm51YWxIb3VzZWhvbGRJbmNvbWVSYW5nZSxcclxuICAgIG5ldFdvcnRoUmFuZ2U6IHN0YXRlLlByb3NwZWN0RGV0YWlsLm5ldFdvcnRoUmFuZ2UsXHJcbiAgICBsaWZlSW5zdXJhbmNlUmFuZ2U6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmxpZmVJbnN1cmFuY2VSYW5nZSxcclxuICAgIHRheEJyYWNrZXQ6IHN0YXRlLlByb3NwZWN0RGV0YWlsLnRheEJyYWNrZXQsXHJcbiAgICBkZXBlbmRlbnRzTm86IHN0YXRlLlByb3NwZWN0RGV0YWlsLmRlcGVuZGVudHNObyxcclxuICAgIGFnZXM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmFnZXMsXHJcbiAgICBjdXJyZW50RW1wbG95ZXI6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmN1cnJlbnRFbXBsb3llcixcclxuICAgIGVtcGxveW1lbnRTdGF0dXM6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveW1lbnRTdGF0dXMsXHJcbiAgICBvY2N1cGF0aW9uOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5vY2N1cGF0aW9uLFxyXG4gICAgZW1wbG95ZXJBZGRyZXNzOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5lbXBsb3llckFkZHJlc3MsXHJcbiAgICBlbXBsb3llckNpdHk6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyQ2l0eSxcclxuICAgIGVtcGxveWVyU3RhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyU3RhdGUsXHJcbiAgICBlbXBsb3llclppcENvZGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmVtcGxveWVyWmlwQ29kZSxcclxuICAgIGhpcmVEYXRlOiBzdGF0ZS5Qcm9zcGVjdERldGFpbC5oaXJlRGF0ZSxcclxuICAgIGV4cGVjdGVkQW5udWl0eURhdGU6IHN0YXRlLlByb3NwZWN0RGV0YWlsLmV4cGVjdGVkQW5udWl0eURhdGUsXHJcbiAgICBlbXBsb3llclNhbGFyeTogc3RhdGUuUHJvc3BlY3REZXRhaWwuZW1wbG95ZXJTYWxhcnksXHJcbiAgICBzdGF0ZXM6IHN0YXRlLnN0YXRlc1xyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgSW52ZXN0b3JQcm9maWxlQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW52ZXN0b3JQcm9maWxlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9JbnZlc3RvclByb2ZpbGVDb250YWluZXIudHMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rLCBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IFRhYkNvbnRhaW5lciwgVGFiIH0gZnJvbSAnLi4vLi4vc2hhcmVkL1RhYkNvbnRhaW5lckNvbXBvbmVudC9UYWJDb250YWluZXJDb21wb25lbnQnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBmcm9tICcuLi8uLi9zaGFyZWQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC9WYWxpY1ZhbGlkYXRpb25NZXNzYWdlQ29tcG9uZW50JztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9zaGFyZWQvTG9hZGVyQ29tcG9uZW50L0xvYWRlckNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHZhbGlkYXRlRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxpdHkvdXRpbGl0eSc7XHJcbmltcG9ydCB7IFBlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXIgfSBmcm9tICcuL1BlcnNvbmFsSW5mb3JtYXRpb25Db250YWluZXInO1xyXG5pbXBvcnQgeyBJbnZlc3RvclByb2ZpbGVDb250YWluZXIgfSBmcm9tICcuL0ludmVzdG9yUHJvZmlsZUNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEluY29tZVNvdXJjZUNvbnRhaW5lciB9IGZyb20gJy4vSW5jb21lU291cmNlQ29udGFpbmVyJztcclxuaW1wb3J0IHsgYWdpbGVuZXR1cmwgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgJy4vUHJvc3BlY3RFZGl0Q29udGFpbmVyLmNzcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCAqIGFzIFByb3NwZWN0U3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvcHJvc3BlY3QnXHJcbmltcG9ydCAqIGFzIFN0YXRlU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RhdGVzJztcclxuaW1wb3J0ICogYXMgTG9hZGVyU3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvbG9hZGVyJztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ2VTdG9yZSBmcm9tICcuLi8uLi9zdG9yZS92YWxpZGF0aW9uTWVzc2FnZSc7XHJcblxyXG50eXBlIFByb3NwZWN0RWRpdFByb3BzID0gUHJvc3BlY3RTdG9yZS5Qcm9zcGVjdFN0YXRlXHJcbiAgICAmIHR5cGVvZiBQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIHR5cGVvZiBQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzQWdlbnRDb2RlXHJcbiAgICAmIHR5cGVvZiBTdGF0ZVN0b3JlLmFjdGlvbkNyZWF0b3JzXHJcbiAgICAmIHR5cGVvZiBMb2FkZXJTdG9yZS5hY3Rpb25DcmVhdG9yc1xyXG4gICAgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PlxyXG4gICAgJiBwcm9zcGVjdFByb3BzXHJcbiAgICA7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvc3BlY3RFZGl0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNvbXBvbmVudERpZE1vdW50KCk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xyXG4gICAgICAgIC8vY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgLy9kaXNwYXRjaCgpXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnY29tcG9uZW50Y2F0aCcpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZm9ybUVycm9ycywgaXNMb2FkaW5nIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmIChmb3JtRXJyb3JzICE9PSB1bmRlZmluZWQgJiYgZm9ybUVycm9ycyAhPT0gbnVsbCAmJiBmb3JtRXJyb3JzLmxlbmd0aCA+MCkge1xyXG4gICAgICAgICAgICBsZXQgZXJyb3JzID0gZm9ybUVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IuZXJyb3JNZXNzYWdlICE9PSAnJyAmJiBlcnJvci5maWVsZE5hbWUgPT09ICcnKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKFwiZmFpbGVkIGNvbXBvbmVudFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8QXBwRXJyb3IgZXJyb3I9e2Vycm9yc1swXS5lcnJvck1lc3NhZ2V9IC8+KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID09IHRydWUgPyA8TG9hZGVyIC8+IDogJyd9XHJcbiAgICAgICAgICAgICAgICA8VmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBmb3JtRXJyb3JzPXtmb3JtRXJyb3JzfSBjbGFzc05hbWU9XCJmb3JtLWVycm9yc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFiQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJQZXJzb25hbCBJbmZvcm1hdGlvblwiIGlzRGVmYXVsdFRhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb25hbEluZm9ybWF0aW9uQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJJbnZlc3RvciBQcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW52ZXN0b3JQcm9maWxlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIG5hbWU9XCJJbmNvbWUgU291cmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5jb21lU291cmNlQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zYXZlUHJvc3BlY3QoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX0gPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDs8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2FuY2VsUHJvc3BlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSA+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHNhdmVQcm9zcGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBjb21wb25lbnREaWRNb3VudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBmb3JtRXJyb3JzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgICAgICBpc0xvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWRcclxuICAgIH1cclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+ICh7XHJcbiAgICBmb3JtRXJyb3JzOiBzdGF0ZS5lcnJvcnMsXHJcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZ1xyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBzYXZlUHJvc3BlY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JykgYXMgYW55O1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyArK2luZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dEZpZWxkID0gaW5wdXRzW2luZGV4XTtcclxuICAgICAgICAgICAgdmFsaWRhdGVGb3JtRmllbGQoaW5wdXRGaWVsZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZC5pc1ZhbGlkID09PSBmYWxzZSB8fCBpbnB1dEZpZWxkLmlzRm9ybWF0VmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnZVN0b3JlLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLmFkZENsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoKEFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChWYWxpZGF0aW9uTWVzc2FnZVN0b3JlLmFjdGlvbkNyZWF0b3JzLmFkZEVycm9yTWVzc2FnZShpbnB1dEZpZWxkLm5hbWUsICcnKSk7XHJcbiAgICAgICAgICAgICAgICAkKGlucHV0RmllbGQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3IgaGFzLWZlZWRiYWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKFByb3NwZWN0U3RvcmUuYWN0aW9uQ3JlYXRvcnMudXBkYXRlUHJvc3BlY3RSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGNhbmNlbFByb3NwZWN0OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHdhbnQgdG8gY2FuY2VsPycpKSB7XHJcbiAgICAgICAgICAgIChkb2N1bWVudCBhcyBhbnkpLmxvY2F0aW9uID0gYWdpbGVuZXR1cmwgKyBcIkRhc2hib2FyZC9BZHZpc29yL0NsaWVudFByb3NwZWN0TGlzdGluZy5hc3B4P2FnZW50SWQ9MDM0OTlcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBkaXNwYXRjaChMb2FkZXJTdG9yZS5hY3Rpb25DcmVhdG9ycy5sb2FkZXJCZWdpbigpKTtcclxuICAgICAgICBkaXNwYXRjaChQcm9zcGVjdFN0b3JlLmFjdGlvbkNyZWF0b3JzQWdlbnRDb2RlLnNldEFnZW50Q29kZSgod2luZG93IGFzIGFueSkuX19hZ2VudENvZGVfXykpO1xyXG4gICAgICAgIGRpc3BhdGNoKFN0YXRlU3RvcmUuYWN0aW9uQ3JlYXRvcnMuZmV0Y2hTdGF0ZVJlcXVlc3QoKSk7XHJcbiAgICAgICAgZGlzcGF0Y2goUHJvc3BlY3RTdG9yZS5hY3Rpb25DcmVhdG9ycy5mZXRjaFByb3NwZWN0UmVxdWVzdCgod2luZG93IGFzIGFueSkuX19QUk9TUEVDVElEX18pKTsgICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuaW50ZXJmYWNlIHByb3NwZWN0UHJvcHMge1xyXG4gICAgY2FuY2VsUHJvc3BlY3Q6ICgpID0+IHZvaWQ7XHJcbiAgICBzYXZlUHJvc3BlY3Q6ICgpID0+IHZvaWQ7XHJcbiAgICBmb3JtRXJyb3JzOiBhbnk7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBjb21wb25lbnREaWRNb3VudDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBBcHBFcnJvciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgU29tZXRoaW5nIHdlbnQgd3JvbmchISEge3Byb3BzLmVycm9yfVxyXG4gICAgPC9kaXY+KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9zcGVjdEVkaXRDb250YWluZXIpIGFzIHR5cGVvZiBQcm9zcGVjdEVkaXRDb250YWluZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1Byb3NwZWN0Q29udGFpbmVyL1Byb3NwZWN0RWRpdENvbnRhaW5lci50c3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbG9hZGVyLmNzcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRyZW5kZXIoKXtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1N0eWxlXCI+IDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+PC9kaXY+IDwvZGl2Pik7XHJcblx0fVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL0xvYWRlckNvbXBvbmVudC9Mb2FkZXJDb21wb25lbnQudHN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICcuL1RhYkNvbnRhaW5lci5jc3MnO1xyXG5jb25zdCBjbGVhclN0eWxlID0geyBjbGVhcjogJ2JvdGgnLCBoZWlnaHQ6ICcyMHB4JyB9O1xyXG5pbnRlcmZhY2UgVGFiQ29udGFpbmVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFRhYjsgICAgXHJcbn1cclxuZXhwb3J0IGNsYXNzIFRhYkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxUYWJDb250YWluZXJQcm9wcz4geyAgICAgICBcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMudGFiSGVhZGVyKCk7XHJcbiAgICAgICAgdmFyIGN1c3RvbVN0eWxlID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMzBweFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbWFpblN0eWxlID0ge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFkMjAgbWFpblN0eWxlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0yIGN1c3RvbVN0eWxlXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cdFx0XHJcblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y2xlYXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHRcdFx0XHRcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGFiSGVhZGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlckxpbmsgPSB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsaSkgPT4geyAgICAgICAgICAgIFxyXG5cdFx0XHRcdFx0XHRsZXQgaGVhZGVySWQgPSBjaGlsZC5wcm9wcy5uYW1lLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8VGFiSGVhZGVyIGtleT17aX0gaWQgPXtoZWFkZXJJZH0gaGVhZGVyTmFtZSA9IHtjaGlsZC5wcm9wcy5uYW1lfSAgaXNEZWZhdWx0ID0ge2NoaWxkLnByb3BzLmlzRGVmYXVsdFRhYn0gaW5kZXggPSB7Y291bnR9IC8+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoPHNwYW4gY2xhc3NOYW1lPVwibm9iclwiPiB7aGVhZGVyTGlua30gPC9zcGFuPik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbmRlY2xhcmUgbmFtZXNwYWNlIEpTWCB7XHJcbiAgICBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHMge1xyXG4gICAgICAgIG5vYnI6IGFueVxyXG4gICAgfVxyXG59Ki9cclxuaW50ZXJmYWNlIFRhYkhlYWRlclByb3BzIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBpbmRleDogbnVtYmVyO1xyXG4gICAgaXNEZWZhdWx0PzogYm9vbGVhbjtcclxufVxyXG5cclxuY2xhc3MgVGFiSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYkhlYWRlclByb3BzPntcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9eyBpZDogdGhpcy5wcm9wcy5pZCArIFwiVGFiXCIsaW5kZXggOiB0aGlzLnByb3BzLmluZGV4LCBpc0RlZmF1bHQ6IHRoaXMucHJvcHMuaXNEZWZhdWx0LCBjdXJyZW50VGFiSW5kZXg6IDAgfTtcclxuICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZSA9IHRoaXMuY2hhbmdlQWN0aXZlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKDxsaSBjbGFzc05hbWUgPSBcInRhYkxpc3RJdGVtIGFjdGl2ZVRhYlwiIG5hbWUgPSBcImZvbGRlclRhYlwiIGlkID0ge3RoaXMuc3RhdGUuaWR9IG9uQ2xpY2sgPSB7dGhpcy5jaGFuZ2VBY3RpdmV9ID4gXHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyTmFtZX0gXHJcbiAgICAgICAgICAgICAgICA8L2xpPik7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VBY3RpdmUgPSAoKSA9PiB7ICAgICAgICBcclxuICAgICAgICB2YXIgeHl6ID0gJChcIltuYW1lPSdmb2xkZXJUYWInXVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHh5ei5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkKHh5eltpXSkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gcmVhY3QtdGFiSGVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI1wiICsgdGhpcy5zdGF0ZS5pZCkuYXR0cihcImNsYXNzXCIsIFwidGFiTGlzdEl0ZW0gYWN0aXZlVGFiICByZWFjdC10YWJIZWFkZXJcIik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUYWJJbmRleDogdGhpcy5wcm9wcy5pbmRleH0pO1xyXG4gICAgICAgIHRoaXMuc2hvd0NvbnRlbnQodGhpcy5zdGF0ZS5pZCk7XHJcbiAgICB9XHJcbiAgICBzaG93Q29udGVudCh4KSB7XHRcdFxyXG4gICAgICAgIHZhciBjb25Cb3hlcyA9ICQoXCJbbmFtZT0nY29udGVudEJveCddXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uQm94ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChjb25Cb3hlc1tpXSkuYXR0cihcImNsYXNzXCIsIFwibm9TaG93IHJlYWN0LXRhYkNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICQoY29uQm94ZXNbaV0pLmF0dHIoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHhQYXJ0cyA9IHguc3BsaXQoJ1RhYicpO1xyXG4gICAgICAgIGxldCB3aGljaEJveCA9IHhQYXJ0c1swXTtcclxuICAgICAgICAkKFwiI1wiICsgd2hpY2hCb3ggKyAnQm94JykuYXR0cihcImNsYXNzXCIsIFwic2hvdyByZWFjdC10YWJDb250ZW50XCIpO1xyXG4gICAgICAgICQoXCIjXCIgKyB3aGljaEJveCArICdCb3gnKS5hdHRyKFwic3R5bGVcIiwgXCJkaXNwbGF5OmJsb2NrXCIpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0RlZmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCl7XHJcbiAgICB9XHJcbn1cclxuaW50ZXJmYWNlIFRhYlByb3BzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlzRGVmYXVsdFRhYj86IGJvb2xlYW47XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFiIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFRhYlByb3BzPiB7XHJcbiAgIHJlbmRlcigpe1xyXG5cdFx0bGV0IGlkID0gdGhpcy5wcm9wcy5uYW1lLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgICAgICAgcmV0dXJuICg8ZGl2IGlkID0ge2lkICsgXCJCb3hcIn0gbmFtZSA9IFwiY29udGVudEJveFwiIGNsYXNzTmFtZSA9IFwibm9TaG93IHJlYWN0LXRhYkNvbnRlbnRcIiA+IFxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17Y2xlYXJTdHlsZX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59IFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9UYWJDb250YWluZXJDb21wb25lbnQvVGFiQ29udGFpbmVyQ29tcG9uZW50LnRzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmludGVyZmFjZSBWYWxpY1ZhbGlkYXRpb25NZXNzYWdlUHJvcHMge1xyXG4gICAgZm9ybUVycm9yczogRXJyb3JNZXNzYWdlW107XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIEVycm9yTWVzc2FnZSB7XHJcbiAgICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICAgIGZpZWxkTmFtZTogc3RyaW5nOyAgICBcclxufVxyXG5cclxuY2xhc3MgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxWYWxpY1ZhbGlkYXRpb25NZXNzYWdlUHJvcHMsIHt9PnsgICBcclxuICAgIHJlbmRlcigpeyAgICAgIFxyXG4gICAgICAgIGNvbnN0IHtmb3JtRXJyb3JzfSAgID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdmb3JtLWVycm9ycyc+XHJcbiAgICAgICAgICAgIHtmb3JtRXJyb3JzICE9PSB1bmRlZmluZWQgJiYgZm9ybUVycm9ycy5sZW5ndGggPjAgPyBmb3JtRXJyb3JzLm1hcCgoZmllbGQsIGkpID0+IHtcclxuICAgICAgaWYoZmllbGQuZXJyb3JNZXNzYWdlICE9PSBcIlwiKXtcclxuICAgICAgICByZXR1cm4gKCAgICAgICAgICBcclxuXHRcdCAgPHAgIGtleT17aX0+PGxhYmVsIGtleT17aX0gY2xhc3NOYW1lPVwidG9vbHRpcC10ZXh0IGZvcm0tZXJyb3JcIj57IGZpZWxkLmVycm9yTWVzc2FnZX0gPC9sYWJlbD48L3A+XHJcbiAgICAgICAgKSAgICAgICAgXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTonJ31cclxuICA8L2Rpdj4pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIFByb3BUeXBlcyA9IHtcclxuICAgICAgICBmb3JtRXJyb3JzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgICAgICB9KS5pc1JlcXVpcmVkKS5pc1JlcXVpcmVkICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsaWNWYWxpZGF0aW9uTWVzc2FnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL1ZhbGljVmFsaWRhdGlvbk1lc3NhZ2VDb21wb25lbnQvVmFsaWNWYWxpZGF0aW9uTWVzc2FnZUNvbXBvbmVudC50c3giLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5jb25zdCBpc0ZpZWxkVmFsaWQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpICE9PSBudWxsICYmIGlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGb3JtRmllbGQgPSAoaW5wdXRGaWVsZDogYW55KSA9PiB7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBpc1ZhbGlkID0gaXNGaWVsZFZhbGlkKGlucHV0RmllbGQpO1xyXG4gICAgaW5wdXRGaWVsZC5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgIGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGlucHV0RmllbGQuZXJyb3JNZXNzYWdlID0gaW5wdXRGaWVsZC5uYW1lICsgXCIgaXMgcmVxdWlyZWRcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh2YWxpZGF0ZUZvcm1hdChpbnB1dEZpZWxkKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSBpbnB1dEZpZWxkLm5hbWUgKyBcIiBpcyBpbnZhbGlkXCI7XHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuaXNGb3JtYXRWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5lcnJvck1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgaW5wdXRGaWVsZC5pc0Zvcm1hdFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLypcclxuY29uc3QgdmFsaWRhdGVBbGxGaWVsZCA9IChlKSA9PiB7XHJcbiAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgKytpbmRleCkge1xyXG4gICAgICAgIHZhbGlkYXRlRm9ybUZpZWxkKGlucHV0c1tpbmRleF0pO1xyXG4gICAgfVxyXG59Ki9cclxuY29uc3QgdmFsaWRhdGVGb3JtYXQgPSAoaW5wdXQ6YW55KSA9PiB7XHJcbiAgICBsZXQgaXNGb3JtYXRWYWxpZCA9IHRydWU7XHJcbiAgICBsZXQgZm9ybWF0ID0gXCJcIjtcclxuICAgIGlmIChpbnB1dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwiZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIC8vZm9ybWF0ID0vXigwWzEtOV18MVswLTJdKVxcLygwWzEtOV18MVxcZHwyXFxkfDNbMDFdKVxcLygxOXwyMClcXGR7Mn0kLztcclxuICAgICAgICAgICAgaWYgKGlucHV0LnZhbGlkaXR5ICE9PSB1bmRlZmluZWQgJiYgKGlucHV0LnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlIHx8IGlucHV0LnZhbGlkaXR5LnZhbGlkID09PSBmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoJChpbnB1dCkuYXR0cignZGF0YS1kYXRlYmlydGgnKSAhPT0gdW5kZWZpbmVkICYmIGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGlucHV0LnZhbHVlQXNEYXRlID49IG5ldyBEYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIgJiYgKGlucHV0LnZhbHVlQXNEYXRlLmdldEZ1bGxZZWFyKCkgPj0gMjA5OSB8fCBpbnB1dC52YWx1ZUFzRGF0ZS5nZXRGdWxsWWVhcigpIDw9IDE5MDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlICE9PSBcIlwiICYmIGZvcm1hdCAhPT0gXCJcIiAmJiAoZm9ybWF0IGFzIGFueSkudGVzdChpbnB1dC52YWx1ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGlzRm9ybWF0VmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNGb3JtYXRWYWxpZDtcclxufVxyXG5leHBvcnQgY29uc3QgZXJyb3JDbGFzcyA9IChlcnJvcnM6IGFueSwgZmllbGROYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChlcnJvcnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVycm9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSAmJiBlcnJvci5lcnJvck1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaGFzLWVycm9yIGhhcy1mZWVkYmFjayc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvdXRpbGl0eS9VdGlsaXR5LnRzIiwiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tICdyZWR1eCc7XHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVyU3RhdGUge1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTG9hZGVyQmVnaW4geyB0eXBlOiAnTE9BREVSX0JFR0lOJyB9XHJcbmludGVyZmFjZSBMb2FkZXJFbmQgeyB0eXBlOiAnTE9BREVSX0VORCcgfVxyXG5cclxuXHJcblxyXG50eXBlIEtub3duQWN0aW9uID0gTG9hZGVyQmVnaW4gfCBMb2FkZXJFbmQ7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBsb2FkZXJCZWdpbjogKCkgPT4gPExvYWRlckJlZ2luPnsgdHlwZTogJ0xPQURFUl9CRUdJTicgfSxcclxuICAgIGxvYWRlckVuZDogKCkgPT4gPExvYWRlckVuZD57IHR5cGU6ICdMT0FERVJfRU5EJyB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8Ym9vbGVhbj4gPSAoc3RhdGU6IGJvb2xlYW4sIGFjdGlvbjogS25vd25BY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdMT0FERVJfQkVHSU4nOlxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSA7XHJcbiAgICAgICAgY2FzZSAnTE9BREVSX0VORCc6XHJcbiAgICAgICAgICAgIHJldHVybiAgZmFsc2UgO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgPT09IHVuZGVmaW5lZCA/ZmFsc2UgIDogc3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9Mb2FkZXIudHMiLCJpbXBvcnQgKiBhcyBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnXHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gJ3JlZHV4JztcclxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZXNTdGF0ZSB7XHJcbiAgICBzdGF0ZXM6IFN0YXRlW107XHJcbn1cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICAgIENvZGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEZldGNoU3RhdGVSZXF1ZXN0IHsgdHlwZTogJ0dFVF9TVEFURVNfUkVRVUVTVCcgfVxyXG5pbnRlcmZhY2UgRmV0Y2hTdGF0ZVN1Y2Nlc3MgeyB0eXBlOiAnR0VUX1NUQVRFU19TVUNDRVNTJywgc3RhdGVzIH1cclxuaW50ZXJmYWNlIEZldGNoU3RhdGVzRmFpbGVkIHsgdHlwZTogJ0dFVF9TVEFURVNfRkFJTEVEJyB9XHJcbnR5cGUgS25vd25BY3Rpb24gPSBGZXRjaFN0YXRlU3VjY2VzcyB8IEZldGNoU3RhdGVSZXF1ZXN0IHwgRmV0Y2hTdGF0ZXNGYWlsZWQ7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XHJcbiAgICBmZXRjaFN0YXRlUmVxdWVzdDogKCkgPT4gPEZldGNoU3RhdGVSZXF1ZXN0PnsgdHlwZTogJ0dFVF9TVEFURVNfUkVRVUVTVCcgfSxcclxuICAgIGZldGNoU3RhdGVTdWNjZXNzOiAoc3RhdGVzKSA9PiA8RmV0Y2hTdGF0ZVN1Y2Nlc3M+eyB0eXBlOiAnR0VUX1NUQVRFU19TVUNDRVNTJywgc3RhdGVzIH0sXHJcbiAgICBmZXRjaFN0YXRlc0ZhaWxlZDogKCkgPT4gPEZldGNoU3RhdGVzRmFpbGVkPnsgdHlwZTogJ0dFVF9TVEFURVNfRkFJTEVEJyB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXI6IFJlZHVjZXI8U3RhdGVzU3RhdGU+ID0gKHN0YXRlOiBTdGF0ZXNTdGF0ZSwgYWN0aW9uOiBLbm93bkFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0dFVF9TVEFURVNfU1VDQ0VTUyc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCBzdGF0ZSwgYWN0aW9uLnN0YXRlcyk7ICAgICAgXHJcbiAgICAgICAgY2FzZSAnR0VUX1NUQVRFU19SRVFVRVNUJzpcclxuICAgICAgICBjYXNlICdHRVRfU1RBVEVTX0ZBSUxFRCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCBudWxsLG51bGwpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvciB1bnJlY29nbml6ZWQgYWN0aW9ucyAob3IgaW4gY2FzZXMgd2hlcmUgYWN0aW9ucyBoYXZlIG5vIGVmZmVjdCksIG11c3QgcmV0dXJuIHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgLy8gIChvciBkZWZhdWx0IGluaXRpYWwgc3RhdGUgaWYgbm9uZSB3YXMgc3VwcGxpZWQpXHJcbiAgICByZXR1cm4gc3RhdGUgPT09IHVuZGVmaW5lZCA/IFtdIDogc3RhdGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9TdGF0ZXMudHMiLCIvL2ltcG9ydCAqIGFzIFdlYXRoZXJGb3JlY2FzdHMgZnJvbSAnLi9XZWF0aGVyRm9yZWNhc3RzJztcclxuLy9pbXBvcnQgKiBhcyBDb3VudGVyIGZyb20gJy4vQ291bnRlcic7XHJcblxyXG5pbXBvcnQgKiBhcyBMb2FkZXIgZnJvbSAnLi9sb2FkZXInO1xyXG5pbXBvcnQgKiBhcyBQcm9zcGVjdCBmcm9tICcuL3Byb3NwZWN0JztcclxuaW1wb3J0ICogYXMgU3RhdGVzIGZyb20gJy4vc3RhdGVzJztcclxuaW1wb3J0ICogYXMgVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi92YWxpZGF0aW9uTWVzc2FnZSc7XHJcblxyXG4vLy8vIFRoZSB0b3AtbGV2ZWwgc3RhdGUgb2JqZWN0XHJcbi8vZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuLy8gICAgY291bnRlcjogQ291bnRlci5Db3VudGVyU3RhdGU7XHJcbi8vICAgIHdlYXRoZXJGb3JlY2FzdHM6IFdlYXRoZXJGb3JlY2FzdHMuV2VhdGhlckZvcmVjYXN0c1N0YXRlO1xyXG4vL31cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgUHJvc3BlY3REZXRhaWw6IFByb3NwZWN0LlByb3NwZWN0U3RhdGU7XHJcbiAgICBpc0xvYWRpbmc6IExvYWRlci5Mb2FkZXJTdGF0ZTtcclxuICAgIHN0YXRlczogU3RhdGVzLlN0YXRlc1N0YXRlO1xyXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uTWVzc2FnZS5WYWxpZGF0aW9ObWVzc2FnZVN0YXRlW107XHJcbiAgICBhZ2VudENvZGU6IFByb3NwZWN0LkFnZW50Q29kZVN0YXRlO1xyXG59XHJcbi8vIFdoZW5ldmVyIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLCBSZWR1eCB3aWxsIHVwZGF0ZSBlYWNoIHRvcC1sZXZlbCBhcHBsaWNhdGlvbiBzdGF0ZSBwcm9wZXJ0eSB1c2luZ1xyXG4vLyB0aGUgcmVkdWNlciB3aXRoIHRoZSBtYXRjaGluZyBuYW1lLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZSBuYW1lcyBtYXRjaCBleGFjdGx5LCBhbmQgdGhhdCB0aGUgcmVkdWNlclxyXG4vLyBhY3RzIG9uIHRoZSBjb3JyZXNwb25kaW5nIEFwcGxpY2F0aW9uU3RhdGUgcHJvcGVydHkgdHlwZS5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xyXG4gICAgaXNMb2FkaW5nOiBMb2FkZXIucmVkdWNlcixcclxuICAgIHN0YXRlczogU3RhdGVzLnJlZHVjZXIsXHJcbiAgICBQcm9zcGVjdERldGFpbDogUHJvc3BlY3QucmVkdWNlcixcclxuICAgIGVycm9yczogVmFsaWRhdGlvbk1lc3NhZ2UucmVkdWNlcixcclxuICAgIGFnZW50Q29kZTogUHJvc3BlY3QuYWdlbnRDb2RlcmVkdWNlclxyXG59O1xyXG5cclxuLy8gVGhpcyB0eXBlIGNhbiBiZSB1c2VkIGFzIGEgaGludCBvbiBhY3Rpb24gY3JlYXRvcnMgc28gdGhhdCBpdHMgJ2Rpc3BhdGNoJyBhbmQgJ2dldFN0YXRlJyBwYXJhbXMgYXJlXHJcbi8vIGNvcnJlY3RseSB0eXBlZCB0byBtYXRjaCB5b3VyIHN0b3JlLlxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcFRodW5rQWN0aW9uPFRBY3Rpb24+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpOiB2b2lkO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9pbmRleC50cyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udGFpbmVycy9Qcm9zcGVjdENvbnRhaW5lci9Qcm9zcGVjdEVkaXRDb250YWluZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYXJlZC9Mb2FkZXJDb21wb25lbnQvbG9hZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFyZWQvVGFiQ29udGFpbmVyQ29tcG9uZW50L1RhYkNvbnRhaW5lci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBkZWZhdWx0Q2hhcnNSdWxlcyA9IGV4cG9ydHMuZGVmYXVsdENoYXJzUnVsZXMgPSB7XG4gICc5JzogJ1swLTldJyxcbiAgJ2EnOiAnW0EtWmEtel0nLFxuICAnKic6ICdbQS1aYS16MC05XSdcbn07XG5cbnZhciBkZWZhdWx0TWFza0NoYXIgPSBleHBvcnRzLmRlZmF1bHRNYXNrQ2hhciA9ICdfJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaW5wdXQtbWFzay9saWIvY29uc3RhbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3BhcnNlTWFzayA9IHJlcXVpcmUoJy4vdXRpbHMvcGFyc2VNYXNrJyk7XG5cbnZhciBfcGFyc2VNYXNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlTWFzayk7XG5cbnZhciBfZW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL3V0aWxzL2Vudmlyb25tZW50Jyk7XG5cbnZhciBfc3RyaW5nID0gcmVxdWlyZSgnLi91dGlscy9zdHJpbmcnKTtcblxudmFyIF9kZWZlciA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmZXInKTtcblxudmFyIF9kZWZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrXG5cblxudmFyIElucHV0RWxlbWVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJbnB1dEVsZW1lbnQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIElucHV0RWxlbWVudChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dEVsZW1lbnQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKElucHV0RWxlbWVudC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElucHV0RWxlbWVudCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgbWFzayA9IHByb3BzLm1hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gcHJvcHMubWFza0NoYXIsXG4gICAgICAgIGZvcm1hdENoYXJzID0gcHJvcHMuZm9ybWF0Q2hhcnMsXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBwcm9wcy5hbHdheXNTaG93TWFzaztcblxuXG4gICAgX3RoaXMuaGFzVmFsdWUgPSB2YWx1ZSAhPSBudWxsO1xuICAgIF90aGlzLm1hc2tPcHRpb25zID0gKDAsIF9wYXJzZU1hc2syLmRlZmF1bHQpKG1hc2ssIG1hc2tDaGFyLCBmb3JtYXRDaGFycyk7XG5cbiAgICBpZiAoZGVmYXVsdFZhbHVlID09IG51bGwpIHtcbiAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBfdGhpcy5nZXRTdHJpbmdWYWx1ZSh2YWx1ZSk7XG5cbiAgICBpZiAoX3RoaXMubWFza09wdGlvbnMubWFzayAmJiAoYWx3YXlzU2hvd01hc2sgfHwgdmFsdWUpKSB7XG4gICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpcy5tYXNrT3B0aW9ucywgdmFsdWUpO1xuICAgIH1cblxuICAgIF90aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgcmV0dXJuIElucHV0RWxlbWVudDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdGhpcy5sYXN0Q3Vyc29yUG9zID0gbnVsbDtcbiAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG5cbiAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczIuaXNBbmRyb2lkQnJvd3NlciA9ICgwLCBfZW52aXJvbm1lbnQuaXNBbmRyb2lkQnJvd3NlcikoKTtcbiAgICBfdGhpczIuaXNXaW5kb3dzUGhvbmVCcm93c2VyID0gKDAsIF9lbnZpcm9ubWVudC5pc1dpbmRvd3NQaG9uZUJyb3dzZXIpKCk7XG4gICAgX3RoaXMyLmlzQW5kcm9pZEZpcmVmb3ggPSAoMCwgX2Vudmlyb25tZW50LmlzQW5kcm9pZEZpcmVmb3gpKCk7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2sgJiYgX3RoaXMyLmdldElucHV0VmFsdWUoKSAhPT0gX3RoaXMyLnZhbHVlKSB7XG4gICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShfdGhpczIudmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgdmFyIG9sZE1hc2tPcHRpb25zID0gX3RoaXMyLm1hc2tPcHRpb25zO1xuXG4gICAgX3RoaXMyLmhhc1ZhbHVlID0gbmV4dFByb3BzLnZhbHVlICE9IG51bGw7XG4gICAgX3RoaXMyLm1hc2tPcHRpb25zID0gKDAsIF9wYXJzZU1hc2syLmRlZmF1bHQpKG5leHRQcm9wcy5tYXNrLCBuZXh0UHJvcHMubWFza0NoYXIsIG5leHRQcm9wcy5mb3JtYXRDaGFycyk7XG5cbiAgICBpZiAoIV90aGlzMi5tYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICBfdGhpczIuYmFja3NwYWNlT3JEZWxldGVSZW1vdmFsID0gbnVsbDtcbiAgICAgIF90aGlzMi5sYXN0Q3Vyc29yUG9zID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNNYXNrQ2hhbmdlZCA9IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICE9PSBvbGRNYXNrT3B0aW9ucy5tYXNrO1xuICAgIHZhciBzaG93RW1wdHkgPSBuZXh0UHJvcHMuYWx3YXlzU2hvd01hc2sgfHwgX3RoaXMyLmlzRm9jdXNlZCgpO1xuICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzMi5oYXNWYWx1ZSA/IF90aGlzMi5nZXRTdHJpbmdWYWx1ZShuZXh0UHJvcHMudmFsdWUpIDogX3RoaXMyLnZhbHVlO1xuXG4gICAgaWYgKCFvbGRNYXNrT3B0aW9ucy5tYXNrICYmICFfdGhpczIuaGFzVmFsdWUpIHtcbiAgICAgIG5ld1ZhbHVlID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpc01hc2tDaGFuZ2VkIHx8IF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmIChuZXdWYWx1ZSB8fCBzaG93RW1wdHkpKSB7XG4gICAgICBuZXdWYWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKGlzTWFza0NoYW5nZWQpIHtcbiAgICAgICAgdmFyIHBvcyA9IF90aGlzMi5sYXN0Q3Vyc29yUG9zO1xuICAgICAgICB2YXIgZmlsbGVkTGVuID0gKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKHBvcyA9PT0gbnVsbCB8fCBmaWxsZWRMZW4gPCBwb3MpIHtcbiAgICAgICAgICBpZiAoKDAsIF9zdHJpbmcuaXNGaWxsZWQpKF90aGlzMi5tYXNrT3B0aW9ucywgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICBwb3MgPSBmaWxsZWRMZW47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGZpbGxlZExlbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzMi5zZXRDdXJzb3JQb3MocG9zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiAoMCwgX3N0cmluZy5pc0VtcHR5KShfdGhpczIubWFza09wdGlvbnMsIG5ld1ZhbHVlKSAmJiAhc2hvd0VtcHR5ICYmICghX3RoaXMyLmhhc1ZhbHVlIHx8ICFuZXh0UHJvcHMudmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIF90aGlzMi52YWx1ZSA9IG5ld1ZhbHVlO1xuICB9O1xuXG4gIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczIubWFza09wdGlvbnMubWFzayAmJiBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpICE9PSBfdGhpczIudmFsdWUpIHtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKF90aGlzMi52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaXNET01FbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoSFRNTEVsZW1lbnQpKSA9PT0gJ29iamVjdCcgPyBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgLy8gRE9NMlxuICAgIDogZWxlbWVudC5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2YgZWxlbWVudC5ub2RlTmFtZSA9PT0gJ3N0cmluZyc7XG4gIH07XG5cbiAgdGhpcy5nZXRJbnB1dERPTU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmlucHV0O1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChfdGhpczIuaXNET01FbGVtZW50KGlucHV0KSkge1xuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIC8vIFJlYWN0IDAuMTNcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmZpbmRET01Ob2RlKGlucHV0KTtcbiAgfTtcblxuICB0aGlzLmdldElucHV0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfTtcblxuICB0aGlzLnNldElucHV0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIF90aGlzMi52YWx1ZSA9IHZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XG4gIH07XG5cbiAgdGhpcy5nZXRMZWZ0RWRpdGFibGVQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgZm9yICh2YXIgaSA9IHBvczsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIGlmICghKDAsIF9zdHJpbmcuaXNQZXJtYW5lbnRDaGFyKShfdGhpczIubWFza09wdGlvbnMsIGkpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLmdldFJpZ2h0RWRpdGFibGVQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgdmFyIG1hc2sgPSBfdGhpczIubWFza09wdGlvbnMubWFzaztcblxuICAgIGZvciAodmFyIGkgPSBwb3M7IGkgPCBtYXNrLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoISgwLCBfc3RyaW5nLmlzUGVybWFuZW50Q2hhcikoX3RoaXMyLm1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgdGhpcy5zZXRDdXJzb3JUb0VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsbGVkTGVuID0gKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIF90aGlzMi52YWx1ZSk7XG4gICAgdmFyIHBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGZpbGxlZExlbik7XG4gICAgaWYgKHBvcyAhPT0gbnVsbCkge1xuICAgICAgX3RoaXMyLnNldEN1cnNvclBvcyhwb3MpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnNldFNlbGVjdGlvbiA9IGZ1bmN0aW9uIChzdGFydCkge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG5cbiAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBzdGFydCArIGxlbjtcbiAgICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCAmJiAnc2VsZWN0aW9uRW5kJyBpbiBpbnB1dCkge1xuICAgICAgaW5wdXQuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgICAgIGlucHV0LnNlbGVjdGlvbkVuZCA9IGVuZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJhbmdlID0gaW5wdXQuY3JlYXRlVGV4dFJhbmdlKCk7XG4gICAgICByYW5nZS5jb2xsYXBzZSh0cnVlKTtcbiAgICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgc3RhcnQpO1xuICAgICAgcmFuZ2UubW92ZUVuZCgnY2hhcmFjdGVyJywgZW5kIC0gc3RhcnQpO1xuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0U2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKTtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIHZhciBlbmQgPSAwO1xuXG4gICAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gaW5wdXQgJiYgJ3NlbGVjdGlvbkVuZCcgaW4gaW5wdXQpIHtcbiAgICAgIHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBlbmQgPSBpbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpO1xuICAgICAgaWYgKHJhbmdlLnBhcmVudEVsZW1lbnQoKSA9PT0gaW5wdXQpIHtcbiAgICAgICAgc3RhcnQgPSAtcmFuZ2UubW92ZVN0YXJ0KCdjaGFyYWN0ZXInLCAtaW5wdXQudmFsdWUubGVuZ3RoKTtcbiAgICAgICAgZW5kID0gLXJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC1pbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBlbmQ6IGVuZCxcbiAgICAgIGxlbmd0aDogZW5kIC0gc3RhcnRcbiAgICB9O1xuICB9O1xuXG4gIHRoaXMuZ2V0Q3Vyc29yUG9zID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczIuZ2V0U2VsZWN0aW9uKCkuc3RhcnQ7XG4gIH07XG5cbiAgdGhpcy5zZXRDdXJzb3JQb3MgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgX3RoaXMyLnNldFNlbGVjdGlvbihwb3MsIDApO1xuXG4gICAgKDAsIF9kZWZlcjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnNldFNlbGVjdGlvbihwb3MsIDApO1xuICAgIH0pO1xuXG4gICAgX3RoaXMyLmxhc3RDdXJzb3JQb3MgPSBwb3M7XG4gIH07XG5cbiAgdGhpcy5pc0ZvY3VzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5mb2N1c2VkO1xuICB9O1xuXG4gIHRoaXMuZ2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gIXZhbHVlICYmIHZhbHVlICE9PSAwID8gJycgOiB2YWx1ZSArICcnO1xuICB9O1xuXG4gIHRoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbktleURvd24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBldmVudC5rZXksXG4gICAgICAgIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5LFxuICAgICAgICBtZXRhS2V5ID0gZXZlbnQubWV0YUtleSxcbiAgICAgICAgZGVmYXVsdFByZXZlbnRlZCA9IGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQ7XG5cbiAgICBpZiAoY3RybEtleSB8fCBtZXRhS2V5IHx8IGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyB8fCBrZXkgPT09ICdEZWxldGUnKSB7XG4gICAgICB2YXIgc2VsZWN0aW9uID0gX3RoaXMyLmdldFNlbGVjdGlvbigpO1xuICAgICAgdmFyIGNhblJlbW92ZSA9IGtleSA9PT0gJ0JhY2tzcGFjZScgJiYgc2VsZWN0aW9uLmVuZCA+IDAgfHwga2V5ID09PSAnRGVsZXRlJyAmJiBfdGhpczIudmFsdWUubGVuZ3RoID4gc2VsZWN0aW9uLnN0YXJ0O1xuXG4gICAgICBpZiAoIWNhblJlbW92ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBzZWxlY3Rpb246IF90aGlzMi5nZXRTZWxlY3Rpb24oKVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwYXN0ZSA9IF90aGlzMi5wYXN0ZTtcbiAgICB2YXIgX21hc2tPcHRpb25zID0gX3RoaXMyLm1hc2tPcHRpb25zLFxuICAgICAgICBtYXNrID0gX21hc2tPcHRpb25zLm1hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX21hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgICBsYXN0RWRpdGFibGVQb3MgPSBfbWFza09wdGlvbnMubGFzdEVkaXRhYmxlUG9zLFxuICAgICAgICBwcmVmaXggPSBfbWFza09wdGlvbnMucHJlZml4O1xuXG5cbiAgICB2YXIgdmFsdWUgPSBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpO1xuICAgIHZhciBvbGRWYWx1ZSA9IF90aGlzMi52YWx1ZTtcblxuICAgIGlmIChwYXN0ZSkge1xuICAgICAgX3RoaXMyLnBhc3RlID0gbnVsbDtcbiAgICAgIF90aGlzMi5wYXN0ZVRleHQocGFzdGUudmFsdWUsIHZhbHVlLCBwYXN0ZS5zZWxlY3Rpb24sIGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uID0gX3RoaXMyLmdldFNlbGVjdGlvbigpO1xuICAgIHZhciBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uZW5kO1xuICAgIHZhciBtYXNrTGVuID0gbWFzay5sZW5ndGg7XG4gICAgdmFyIHZhbHVlTGVuID0gdmFsdWUubGVuZ3RoO1xuICAgIHZhciBvbGRWYWx1ZUxlbiA9IG9sZFZhbHVlLmxlbmd0aDtcblxuICAgIHZhciBjbGVhcmVkVmFsdWU7XG4gICAgdmFyIGVudGVyZWRTdHJpbmc7XG5cbiAgICBpZiAoX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbCkge1xuICAgICAgdmFyIGRlbGV0ZUZyb21SaWdodCA9IF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwua2V5ID09PSAnRGVsZXRlJztcbiAgICAgIHZhbHVlID0gX3RoaXMyLnZhbHVlO1xuICAgICAgc2VsZWN0aW9uID0gX3RoaXMyLmJhY2tzcGFjZU9yRGVsZXRlUmVtb3ZhbC5zZWxlY3Rpb247XG4gICAgICBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uc3RhcnQ7XG5cbiAgICAgIF90aGlzMi5iYWNrc3BhY2VPckRlbGV0ZVJlbW92YWwgPSBudWxsO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHNlbGVjdGlvbi5zdGFydCwgc2VsZWN0aW9uLmxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHNlbGVjdGlvbi5zdGFydCA8IHByZWZpeC5sZW5ndGggfHwgIWRlbGV0ZUZyb21SaWdodCAmJiBzZWxlY3Rpb24uc3RhcnQgPT09IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlZGl0YWJsZVBvcyA9IGRlbGV0ZUZyb21SaWdodCA/IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKGN1cnNvclBvcykgOiBfdGhpczIuZ2V0TGVmdEVkaXRhYmxlUG9zKGN1cnNvclBvcyAtIDEpO1xuXG4gICAgICAgIGlmIChlZGl0YWJsZVBvcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgZWRpdGFibGVQb3MsIDEpO1xuICAgICAgICAgIGN1cnNvclBvcyA9IGVkaXRhYmxlUG9zO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA+IG9sZFZhbHVlTGVuKSB7XG4gICAgICB2YXIgZW50ZXJlZFN0cmluZ0xlbiA9IHZhbHVlTGVuIC0gb2xkVmFsdWVMZW47XG4gICAgICB2YXIgc3RhcnRQb3MgPSBzZWxlY3Rpb24uZW5kIC0gZW50ZXJlZFN0cmluZ0xlbjtcbiAgICAgIGVudGVyZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHIoc3RhcnRQb3MsIGVudGVyZWRTdHJpbmdMZW4pO1xuXG4gICAgICBpZiAoc3RhcnRQb3MgPCBsYXN0RWRpdGFibGVQb3MgJiYgKGVudGVyZWRTdHJpbmdMZW4gIT09IDEgfHwgZW50ZXJlZFN0cmluZyAhPT0gbWFza1tzdGFydFBvc10pKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IF90aGlzMi5nZXRSaWdodEVkaXRhYmxlUG9zKHN0YXJ0UG9zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnNvclBvcyA9IHN0YXJ0UG9zO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cigwLCBzdGFydFBvcykgKyB2YWx1ZS5zdWJzdHIoc3RhcnRQb3MgKyBlbnRlcmVkU3RyaW5nTGVuKTtcblxuICAgICAgY2xlYXJlZFZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgc3RhcnRQb3MsIG1hc2tMZW4gLSBzdGFydFBvcyk7XG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCBjdXJzb3JQb3MpO1xuXG4gICAgICB2YWx1ZSA9ICgwLCBfc3RyaW5nLmluc2VydFN0cmluZykoX3RoaXMyLm1hc2tPcHRpb25zLCBvbGRWYWx1ZSwgZW50ZXJlZFN0cmluZywgY3Vyc29yUG9zKTtcblxuICAgICAgaWYgKGVudGVyZWRTdHJpbmdMZW4gIT09IDEgfHwgY3Vyc29yUG9zID49IHByZWZpeC5sZW5ndGggJiYgY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgIGN1cnNvclBvcyA9IE1hdGgubWF4KCgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBjbGVhcmVkVmFsdWUpLCBjdXJzb3JQb3MpO1xuICAgICAgICBpZiAoY3Vyc29yUG9zIDwgbGFzdEVkaXRhYmxlUG9zKSB7XG4gICAgICAgICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgY3Vyc29yUG9zKys7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh2YWx1ZUxlbiA8IG9sZFZhbHVlTGVuKSB7XG4gICAgICB2YXIgcmVtb3ZlZExlbiA9IG1hc2tMZW4gLSB2YWx1ZUxlbjtcbiAgICAgIGVudGVyZWRTdHJpbmcgPSB2YWx1ZS5zdWJzdHIoMCwgc2VsZWN0aW9uLmVuZCk7XG4gICAgICB2YXIgY2xlYXJPbmx5ID0gZW50ZXJlZFN0cmluZyA9PT0gb2xkVmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvbi5lbmQpO1xuXG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5jbGVhclJhbmdlKShfdGhpczIubWFza09wdGlvbnMsIG9sZFZhbHVlLCBzZWxlY3Rpb24uZW5kLCByZW1vdmVkTGVuKTtcblxuICAgICAgaWYgKG1hc2tDaGFyKSB7XG4gICAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuaW5zZXJ0U3RyaW5nKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSwgZW50ZXJlZFN0cmluZywgMCk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyZWRWYWx1ZSA9ICgwLCBfc3RyaW5nLmNsZWFyUmFuZ2UpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBzZWxlY3Rpb24uZW5kLCBtYXNrTGVuIC0gc2VsZWN0aW9uLmVuZCk7XG4gICAgICBjbGVhcmVkVmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgY2xlYXJlZFZhbHVlLCBlbnRlcmVkU3RyaW5nLCAwKTtcblxuICAgICAgaWYgKCFjbGVhck9ubHkpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gTWF0aC5tYXgoKDAsIF9zdHJpbmcuZ2V0RmlsbGVkTGVuZ3RoKShfdGhpczIubWFza09wdGlvbnMsIGNsZWFyZWRWYWx1ZSksIGN1cnNvclBvcyk7XG4gICAgICAgIGlmIChjdXJzb3JQb3MgPCBsYXN0RWRpdGFibGVQb3MpIHtcbiAgICAgICAgICBjdXJzb3JQb3MgPSBfdGhpczIuZ2V0UmlnaHRFZGl0YWJsZVBvcyhjdXJzb3JQb3MpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnNvclBvcyA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgY3Vyc29yUG9zID0gcHJlZml4Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSk7XG5cbiAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XG5cbiAgICBpZiAodHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLmlzV2luZG93c1Bob25lQnJvd3Nlcikge1xuICAgICAgKDAsIF9kZWZlcjIuZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczIuc2V0U2VsZWN0aW9uKGN1cnNvclBvcywgMCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMyLnNldEN1cnNvclBvcyhjdXJzb3JQb3MpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczIuZm9jdXNlZCA9IHRydWU7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2spIHtcbiAgICAgIGlmICghX3RoaXMyLnZhbHVlKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBfdGhpczIubWFza09wdGlvbnMucHJlZml4O1xuICAgICAgICB2YXIgdmFsdWUgPSAoMCwgX3N0cmluZy5mb3JtYXRWYWx1ZSkoX3RoaXMyLm1hc2tPcHRpb25zLCBwcmVmaXgpO1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9ICgwLCBfc3RyaW5nLmZvcm1hdFZhbHVlKShfdGhpczIubWFza09wdGlvbnMsIHZhbHVlKTtcblxuICAgICAgICAvLyBkbyBub3QgdXNlIHRoaXMuZ2V0SW5wdXRWYWx1ZSBhbmQgdGhpcy5zZXRJbnB1dFZhbHVlIGFzIHRoaXMuaW5wdXRcbiAgICAgICAgLy8gY2FuIGJlIHVuZGVmaW5lZCBhdCB0aGlzIG1vbWVudCBpZiBhdXRvRm9jdXMgYXR0cmlidXRlIGlzIHNldFxuICAgICAgICB2YXIgaXNJbnB1dFZhbHVlQ2hhbmdlZCA9IGlucHV0VmFsdWUgIT09IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIudmFsdWUgPSBpbnB1dFZhbHVlO1xuXG4gICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkICYmIHR5cGVvZiBfdGhpczIucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLnNldEN1cnNvclRvRW5kKCk7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfc3RyaW5nLmdldEZpbGxlZExlbmd0aCkoX3RoaXMyLm1hc2tPcHRpb25zLCBfdGhpczIudmFsdWUpIDwgX3RoaXMyLm1hc2tPcHRpb25zLm1hc2subGVuZ3RoKSB7XG4gICAgICAgIF90aGlzMi5zZXRDdXJzb3JUb0VuZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uRm9jdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBfdGhpczIuZm9jdXNlZCA9IGZhbHNlO1xuXG4gICAgaWYgKF90aGlzMi5tYXNrT3B0aW9ucy5tYXNrICYmICFfdGhpczIucHJvcHMuYWx3YXlzU2hvd01hc2sgJiYgKDAsIF9zdHJpbmcuaXNFbXB0eSkoX3RoaXMyLm1hc2tPcHRpb25zLCBfdGhpczIudmFsdWUpKSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgdmFyIGlzSW5wdXRWYWx1ZUNoYW5nZWQgPSBpbnB1dFZhbHVlICE9PSBfdGhpczIuZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICBpZiAoaXNJbnB1dFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQgJiYgdHlwZW9mIF90aGlzMi5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uQmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgX3RoaXMyLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25QYXN0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICh0eXBlb2YgX3RoaXMyLnByb3BzLm9uUGFzdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF90aGlzMi5wcm9wcy5vblBhc3RlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoX3RoaXMyLmlzQW5kcm9pZEJyb3dzZXIgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIF90aGlzMi5wYXN0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRJbnB1dFZhbHVlKCksXG4gICAgICAgIHNlbGVjdGlvbjogX3RoaXMyLmdldFNlbGVjdGlvbigpXG4gICAgICB9O1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoJycpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnBhc3RlVGV4dCA9IGZ1bmN0aW9uICh2YWx1ZSwgdGV4dCwgc2VsZWN0aW9uLCBldmVudCkge1xuICAgIHZhciBjdXJzb3JQb3MgPSBzZWxlY3Rpb24uc3RhcnQ7XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gKDAsIF9zdHJpbmcuY2xlYXJSYW5nZSkoX3RoaXMyLm1hc2tPcHRpb25zLCB2YWx1ZSwgY3Vyc29yUG9zLCBzZWxlY3Rpb24ubGVuZ3RoKTtcbiAgICB9XG4gICAgdmFyIHRleHRMZW4gPSAoMCwgX3N0cmluZy5nZXRJbnNlcnRTdHJpbmdMZW5ndGgpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHRleHQsIGN1cnNvclBvcyk7XG4gICAgdmFsdWUgPSAoMCwgX3N0cmluZy5pbnNlcnRTdHJpbmcpKF90aGlzMi5tYXNrT3B0aW9ucywgdmFsdWUsIHRleHQsIGN1cnNvclBvcyk7XG4gICAgY3Vyc29yUG9zICs9IHRleHRMZW47XG4gICAgY3Vyc29yUG9zID0gX3RoaXMyLmdldFJpZ2h0RWRpdGFibGVQb3MoY3Vyc29yUG9zKSB8fCBjdXJzb3JQb3M7XG5cbiAgICBpZiAodmFsdWUgIT09IF90aGlzMi5nZXRJbnB1dFZhbHVlKCkpIHtcbiAgICAgIF90aGlzMi5zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgIGlmIChldmVudCAmJiB0eXBlb2YgX3RoaXMyLnByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMyLnNldEN1cnNvclBvcyhjdXJzb3JQb3MpO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgIG1hc2sgPSBfcHJvcHMubWFzayxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBfcHJvcHMuYWx3YXlzU2hvd01hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX3Byb3BzLm1hc2tDaGFyLFxuICAgICAgICBmb3JtYXRDaGFycyA9IF9wcm9wcy5mb3JtYXRDaGFycyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ21hc2snLCAnYWx3YXlzU2hvd01hc2snLCAnbWFza0NoYXInLCAnZm9ybWF0Q2hhcnMnXSk7XG5cbiAgICBpZiAoX3RoaXMyLm1hc2tPcHRpb25zLm1hc2spIHtcbiAgICAgIGlmICghcHJvcHMuZGlzYWJsZWQgJiYgIXByb3BzLnJlYWRPbmx5KSB7XG4gICAgICAgIHZhciBoYW5kbGVyc0tleXMgPSBbJ29uQ2hhbmdlJywgJ29uS2V5RG93bicsICdvblBhc3RlJ107XG4gICAgICAgIGhhbmRsZXJzS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBwcm9wc1trZXldID0gX3RoaXMyW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBwcm9wcy52YWx1ZSA9IF90aGlzMi52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgX2V4dGVuZHMoeyByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIuaW5wdXQgPSBfcmVmO1xuICAgICAgfSB9LCBwcm9wcywgeyBvbkZvY3VzOiBfdGhpczIub25Gb2N1cywgb25CbHVyOiBfdGhpczIub25CbHVyIH0pKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0RWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pbnB1dC1tYXNrL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHZhciBkZWZlciA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBkZWZlcihmbik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9kZWZlci5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc0FuZHJvaWRCcm93c2VyID0gaXNBbmRyb2lkQnJvd3NlcjtcbmV4cG9ydHMuaXNXaW5kb3dzUGhvbmVCcm93c2VyID0gaXNXaW5kb3dzUGhvbmVCcm93c2VyO1xuZXhwb3J0cy5pc0FuZHJvaWRGaXJlZm94ID0gaXNBbmRyb2lkRmlyZWZveDtcbmV4cG9ydHMuaXNJT1MgPSBpc0lPUztcbmZ1bmN0aW9uIGlzQW5kcm9pZEJyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBmaXJlZm94ID0gbmV3IFJlZ0V4cCgnZmlyZWZveCcsICdpJyk7XG4gIHZhciBhbmRyb2lkID0gbmV3IFJlZ0V4cCgnYW5kcm9pZCcsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiAhd2luZG93cy50ZXN0KHVhKSAmJiAhZmlyZWZveC50ZXN0KHVhKSAmJiBhbmRyb2lkLnRlc3QodWEpO1xufVxuXG5mdW5jdGlvbiBpc1dpbmRvd3NQaG9uZUJyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBwaG9uZSA9IG5ldyBSZWdFeHAoJ3Bob25lJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHdpbmRvd3MudGVzdCh1YSkgJiYgcGhvbmUudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzQW5kcm9pZEZpcmVmb3goKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBmaXJlZm94ID0gbmV3IFJlZ0V4cCgnZmlyZWZveCcsICdpJyk7XG4gIHZhciBhbmRyb2lkID0gbmV3IFJlZ0V4cCgnYW5kcm9pZCcsICdpJyk7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIHJldHVybiAhd2luZG93cy50ZXN0KHVhKSAmJiBmaXJlZm94LnRlc3QodWEpICYmIGFuZHJvaWQudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzSU9TKCkge1xuICB2YXIgd2luZG93cyA9IG5ldyBSZWdFeHAoJ3dpbmRvd3MnLCAnaScpO1xuICB2YXIgaW9zID0gbmV3IFJlZ0V4cCgnKGlwb2R8aXBob25lfGlwYWQpJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuICF3aW5kb3dzLnRlc3QodWEpICYmIGlvcy50ZXN0KHVhKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaW5wdXQtbWFzay9saWIvdXRpbHMvZW52aXJvbm1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG1hc2ssIG1hc2tDaGFyLCBjaGFyc1J1bGVzKSB7XG4gIGlmIChtYXNrQ2hhciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFza0NoYXIgPSBfY29uc3RhbnRzLmRlZmF1bHRNYXNrQ2hhcjtcbiAgfVxuICBpZiAoY2hhcnNSdWxlcyA9PSBudWxsKSB7XG4gICAgY2hhcnNSdWxlcyA9IF9jb25zdGFudHMuZGVmYXVsdENoYXJzUnVsZXM7XG4gIH1cblxuICBpZiAoIW1hc2sgfHwgdHlwZW9mIG1hc2sgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1hc2tDaGFyOiBtYXNrQ2hhcixcbiAgICAgIGNoYXJzUnVsZXM6IGNoYXJzUnVsZXMsXG4gICAgICBtYXNrOiBudWxsLFxuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgbGFzdEVkaXRhYmxlUG9zOiBudWxsLFxuICAgICAgcGVybWFuZW50czogW11cbiAgICB9O1xuICB9XG4gIHZhciBzdHIgPSAnJztcbiAgdmFyIHByZWZpeCA9ICcnO1xuICB2YXIgcGVybWFuZW50cyA9IFtdO1xuICB2YXIgaXNQZXJtYW5lbnQgPSBmYWxzZTtcbiAgdmFyIGxhc3RFZGl0YWJsZVBvcyA9IG51bGw7XG5cbiAgbWFzay5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgaWYgKCFpc1Blcm1hbmVudCAmJiBjaGFyYWN0ZXIgPT09ICdcXFxcJykge1xuICAgICAgaXNQZXJtYW5lbnQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNQZXJtYW5lbnQgfHwgIWNoYXJzUnVsZXNbY2hhcmFjdGVyXSkge1xuICAgICAgICBwZXJtYW5lbnRzLnB1c2goc3RyLmxlbmd0aCk7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID09PSBwZXJtYW5lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBwcmVmaXggKz0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0RWRpdGFibGVQb3MgPSBzdHIubGVuZ3RoICsgMTtcbiAgICAgIH1cbiAgICAgIHN0ciArPSBjaGFyYWN0ZXI7XG4gICAgICBpc1Blcm1hbmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYXNrQ2hhcjogbWFza0NoYXIsXG4gICAgY2hhcnNSdWxlczogY2hhcnNSdWxlcyxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBtYXNrOiBzdHIsXG4gICAgbGFzdEVkaXRhYmxlUG9zOiBsYXN0RWRpdGFibGVQb3MsXG4gICAgcGVybWFuZW50czogcGVybWFuZW50c1xuICB9O1xufTtcblxudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWlucHV0LW1hc2svbGliL3V0aWxzL3BhcnNlTWFzay5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5pc1Blcm1hbmVudENoYXIgPSBpc1Blcm1hbmVudENoYXI7XG5leHBvcnRzLmlzQWxsb3dlZENoYXIgPSBpc0FsbG93ZWRDaGFyO1xuZXhwb3J0cy5pc0VtcHR5ID0gaXNFbXB0eTtcbmV4cG9ydHMuZ2V0RmlsbGVkTGVuZ3RoID0gZ2V0RmlsbGVkTGVuZ3RoO1xuZXhwb3J0cy5pc0ZpbGxlZCA9IGlzRmlsbGVkO1xuZXhwb3J0cy5mb3JtYXRWYWx1ZSA9IGZvcm1hdFZhbHVlO1xuZXhwb3J0cy5jbGVhclJhbmdlID0gY2xlYXJSYW5nZTtcbmV4cG9ydHMuaW5zZXJ0U3RyaW5nID0gaW5zZXJ0U3RyaW5nO1xuZXhwb3J0cy5nZXRJbnNlcnRTdHJpbmdMZW5ndGggPSBnZXRJbnNlcnRTdHJpbmdMZW5ndGg7XG5mdW5jdGlvbiBpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykge1xuICByZXR1cm4gbWFza09wdGlvbnMucGVybWFuZW50cy5pbmRleE9mKHBvcykgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBwb3MsIGNoYXJhY3Rlcikge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBjaGFyc1J1bGVzID0gbWFza09wdGlvbnMuY2hhcnNSdWxlcztcblxuXG4gIGlmICghY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSkge1xuICAgIHJldHVybiBtYXNrW3Bvc10gPT09IGNoYXJhY3RlcjtcbiAgfVxuXG4gIHZhciBydWxlQ2hhciA9IG1hc2tbcG9zXTtcbiAgdmFyIGNoYXJSdWxlID0gY2hhcnNSdWxlc1tydWxlQ2hhcl07XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoY2hhclJ1bGUpLnRlc3QoY2hhcmFjdGVyKTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KCcnKS5ldmVyeShmdW5jdGlvbiAoY2hhcmFjdGVyLCBpKSB7XG4gICAgcmV0dXJuIGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkgfHwgIWlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG5cbiAgaWYgKCFtYXNrQ2hhcikge1xuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPiBwcmVmaXgubGVuZ3RoICYmIGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgdmFsdWUubGVuZ3RoIC0gMSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5sZW5ndGg7XG4gIH1cblxuICB2YXIgZmlsbGVkTGVuZ3RoID0gcHJlZml4Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IHZhbHVlLmxlbmd0aDsgaSA+PSBwcmVmaXgubGVuZ3RoOyBpLS0pIHtcbiAgICB2YXIgY2hhcmFjdGVyID0gdmFsdWVbaV07XG4gICAgdmFyIGlzRW50ZXJlZENoYXJhY3RlciA9ICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpICYmIGlzQWxsb3dlZENoYXIobWFza09wdGlvbnMsIGksIGNoYXJhY3Rlcik7XG4gICAgaWYgKGlzRW50ZXJlZENoYXJhY3Rlcikge1xuICAgICAgZmlsbGVkTGVuZ3RoID0gaSArIDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsbGVkTGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBpc0ZpbGxlZChtYXNrT3B0aW9ucywgdmFsdWUpIHtcbiAgcmV0dXJuIGdldEZpbGxlZExlbmd0aChtYXNrT3B0aW9ucywgdmFsdWUpID09PSBtYXNrT3B0aW9ucy5tYXNrLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG5cblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgdmFsdWUgPSBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsICcnLCB2YWx1ZSwgMCk7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSk7XG5cbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgcHJlZml4Lmxlbmd0aCkge1xuICAgICAgdmFsdWUgPSBwcmVmaXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFyIGVtcHR5VmFsdWUgPSBmb3JtYXRWYWx1ZShtYXNrT3B0aW9ucywgJycpO1xuICAgIHJldHVybiBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIGVtcHR5VmFsdWUsIHZhbHVlLCAwKTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIGkpKSB7XG4gICAgICB2YWx1ZSArPSBtYXNrW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBtYXNrQ2hhcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUmFuZ2UobWFza09wdGlvbnMsIHZhbHVlLCBzdGFydCwgbGVuKSB7XG4gIHZhciBlbmQgPSBzdGFydCArIGxlbjtcbiAgdmFyIG1hc2tDaGFyID0gbWFza09wdGlvbnMubWFza0NoYXIsXG4gICAgICBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcblxuICB2YXIgYXJyYXlWYWx1ZSA9IHZhbHVlLnNwbGl0KCcnKTtcblxuICBpZiAoIW1hc2tDaGFyKSB7XG4gICAgc3RhcnQgPSBNYXRoLm1heChwcmVmaXgubGVuZ3RoLCBzdGFydCk7XG4gICAgYXJyYXlWYWx1ZS5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0KTtcbiAgICB2YWx1ZSA9IGFycmF5VmFsdWUuam9pbignJyk7XG5cbiAgICByZXR1cm4gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiBhcnJheVZhbHVlLm1hcChmdW5jdGlvbiAoY2hhcmFjdGVyLCBpKSB7XG4gICAgaWYgKGkgPCBzdGFydCB8fCBpID49IGVuZCkge1xuICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICB9XG4gICAgaWYgKGlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgaSkpIHtcbiAgICAgIHJldHVybiBtYXNrW2ldO1xuICAgIH1cbiAgICByZXR1cm4gbWFza0NoYXI7XG4gIH0pLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIHZhbHVlLCBpbnNlcnRTdHIsIGluc2VydFBvcykge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG4gIHZhciBhcnJheUluc2VydFN0ciA9IGluc2VydFN0ci5zcGxpdCgnJyk7XG4gIHZhciBpc0lucHV0RmlsbGVkID0gaXNGaWxsZWQobWFza09wdGlvbnMsIHZhbHVlKTtcblxuICB2YXIgaXNVc2FibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIGlzVXNhYmxlUG9zaXRpb24ocG9zLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgPT09IG1hc2tbcG9zXTtcbiAgfTtcbiAgdmFyIGlzVXNhYmxlQ2hhcmFjdGVyID0gZnVuY3Rpb24gaXNVc2FibGVDaGFyYWN0ZXIoY2hhcmFjdGVyLCBwb3MpIHtcbiAgICByZXR1cm4gIW1hc2tDaGFyIHx8ICFpc1Blcm1hbmVudENoYXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyICE9PSBtYXNrQ2hhcjtcbiAgfTtcblxuICBpZiAoIW1hc2tDaGFyICYmIGluc2VydFBvcyA+IHZhbHVlLmxlbmd0aCkge1xuICAgIHZhbHVlICs9IG1hc2suc2xpY2UodmFsdWUubGVuZ3RoLCBpbnNlcnRQb3MpO1xuICB9XG5cbiAgYXJyYXlJbnNlcnRTdHIuZXZlcnkoZnVuY3Rpb24gKGluc2VydENoYXJhY3Rlcikge1xuICAgIHdoaWxlICghaXNVc2FibGVQb3NpdGlvbihpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikpIHtcbiAgICAgIGlmIChpbnNlcnRQb3MgPj0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhbHVlICs9IG1hc2tbaW5zZXJ0UG9zXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1VzYWJsZUNoYXJhY3RlcihpbnNlcnRDaGFyYWN0ZXIsIGluc2VydFBvcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGluc2VydFBvcysrO1xuXG4gICAgICAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG4gICAgICBpZiAoaW5zZXJ0UG9zID49IG1hc2subGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaXNBbGxvd2VkID0gaXNBbGxvd2VkQ2hhcihtYXNrT3B0aW9ucywgaW5zZXJ0UG9zLCBpbnNlcnRDaGFyYWN0ZXIpIHx8IGluc2VydENoYXJhY3RlciA9PT0gbWFza0NoYXI7XG4gICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpbnNlcnRQb3MgPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmIChtYXNrQ2hhciB8fCBpc0lucHV0RmlsbGVkIHx8IGluc2VydFBvcyA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbnNlcnRQb3MpICsgaW5zZXJ0Q2hhcmFjdGVyICsgdmFsdWUuc2xpY2UoaW5zZXJ0UG9zICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluc2VydFBvcykgKyBpbnNlcnRDaGFyYWN0ZXIgKyB2YWx1ZS5zbGljZShpbnNlcnRQb3MpO1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghbWFza0NoYXIpIHtcbiAgICAgIHZhbHVlICs9IGluc2VydENoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBpbnNlcnRQb3MrKztcblxuICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICByZXR1cm4gaW5zZXJ0UG9zIDwgbWFzay5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5zZXJ0U3RyaW5nTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSwgaW5zZXJ0U3RyLCBpbnNlcnRQb3MpIHtcbiAgdmFyIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcjtcblxuICB2YXIgYXJyYXlJbnNlcnRTdHIgPSBpbnNlcnRTdHIuc3BsaXQoJycpO1xuICB2YXIgaW5pdGlhbEluc2VydFBvcyA9IGluc2VydFBvcztcblxuICB2YXIgaXNVc2FibGVQb3NpdGlvbiA9IGZ1bmN0aW9uIGlzVXNhYmxlUG9zaXRpb24ocG9zLCBjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gIWlzUGVybWFuZW50Q2hhcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgPT09IG1hc2tbcG9zXTtcbiAgfTtcblxuICBhcnJheUluc2VydFN0ci5ldmVyeShmdW5jdGlvbiAoaW5zZXJ0Q2hhcmFjdGVyKSB7XG4gICAgd2hpbGUgKCFpc1VzYWJsZVBvc2l0aW9uKGluc2VydFBvcywgaW5zZXJ0Q2hhcmFjdGVyKSkge1xuICAgICAgaW5zZXJ0UG9zKys7XG5cbiAgICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICAgIGlmIChpbnNlcnRQb3MgPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0FsbG93ZWQgPSBpc0FsbG93ZWRDaGFyKG1hc2tPcHRpb25zLCBpbnNlcnRQb3MsIGluc2VydENoYXJhY3RlcikgfHwgaW5zZXJ0Q2hhcmFjdGVyID09PSBtYXNrQ2hhcjtcblxuICAgIGlmIChpc0FsbG93ZWQpIHtcbiAgICAgIGluc2VydFBvcysrO1xuICAgIH1cblxuICAgIC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcbiAgICByZXR1cm4gaW5zZXJ0UG9zIDwgbWFzay5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiBpbnNlcnRQb3MgLSBpbml0aWFsSW5zZXJ0UG9zO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pbnB1dC1tYXNrL2xpYi91dGlscy9zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE0Nik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMCkpKDE5OSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLW5vZGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSg3MSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=