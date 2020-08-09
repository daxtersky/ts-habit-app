parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Dj05":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOMElements=void 0;var e=function(e){return document.querySelector(e)};exports.DOMElements={modalWrapper:e(".modal"),modalRegister:e(".modal__register"),navigateToLogin:e(".link-to-login"),modalLogin:e(".modal__login"),navigateToRegister:e(".link-to-register"),welcomePage:e(".welcome-page"),inputRegisterEmail:e(".modal__input--register-email"),inputRegisterPassword:e(".modal__input--register-password"),inputRegisterUsername:e(".modal__input--register-name"),inputLoginEmail:e(".modal__input--login-email"),inputLoginPassword:e(".modal__input--login-password"),buttonRegister:e(".button--auth--register"),buttonLogin:e(".button--auth--login"),registerErrorMessage:e(".modal__text--register-error"),loginErrorMessage:e(".modal__text--login-error"),habitsPage:e(".habits-page"),navigateToLogOut:e(".nav__item--log-out")};
},{}],"pESC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.View=void 0;var e=require("./dom-elems"),t=function(){function t(){var t=this;this.bindNavigateToLoginModalClick=function(){e.DOMElements.navigateToLogin.addEventListener("click",function(){e.DOMElements.modalRegister.style.display="none",e.DOMElements.modalLogin.style.display="initial"})},this.bindNavigateToRegisterModalClick=function(){e.DOMElements.navigateToRegister.addEventListener("click",function(){e.DOMElements.modalRegister.style.display="initial",e.DOMElements.modalLogin.style.display="none"})},this.bindRegisterClick=function(n){e.DOMElements.buttonRegister.addEventListener("click",function(){n({email:t.userRegisterMail,password:t.userRegisterPassword,username:t.userRegisterUsername})})},this.bindLoginClick=function(n){e.DOMElements.buttonLogin.addEventListener("click",function(){n({email:t.userLoginMail,password:t.userLoginPassword})})},this.bindNavigateLogOutClick=function(t){e.DOMElements.navigateToLogOut.addEventListener("click",function(){t()})},document.addEventListener("click",function(e){return e.preventDefault()}),e.DOMElements.inputRegisterEmail.select()}return Object.defineProperty(t.prototype,"userRegisterMail",{get:function(){return e.DOMElements.inputRegisterEmail.value},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userRegisterPassword",{get:function(){return e.DOMElements.inputRegisterPassword.value},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userRegisterUsername",{get:function(){return e.DOMElements.inputRegisterUsername.value},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLoginMail",{get:function(){return e.DOMElements.inputLoginEmail.value},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLoginPassword",{get:function(){return e.DOMElements.inputLoginPassword.value},enumerable:!1,configurable:!0}),t.prototype.showRegisterResult=function(t){e.DOMElements.registerErrorMessage.innerText=t?"":"Error! You need to put a correct email, 4-12 character password and 4-12 character username! :)"},t.prototype.showLoginResult=function(t){t?(e.DOMElements.loginErrorMessage.innerText="",console.log("TODO login!"),e.DOMElements.welcomePage.style.display="none",e.DOMElements.habitsPage.style.display="grid",e.DOMElements.modalWrapper.style.display="none",e.DOMElements.modalRegister.style.display="none",e.DOMElements.modalLogin.style.display="none"):e.DOMElements.loginErrorMessage.innerText="Login error!"},t.prototype.showLogoutResult=function(t){t||(e.DOMElements.welcomePage.style.display="grid",e.DOMElements.habitsPage.style.display="none",e.DOMElements.modalWrapper.style.display="initial",e.DOMElements.modalLogin.style.display="initial")},t}();exports.View=t;
},{"./dom-elems":"Dj05"}],"GTAk":[function(require,module,exports) {
"use strict";var e,o;Object.defineProperty(exports,"__esModule",{value:!0}),exports.HabitType=exports.ColorTheme=void 0,function(e){e[e.Light=1]="Light",e[e.Dark=2]="Dark"}(e=exports.ColorTheme||(exports.ColorTheme={})),function(e){e[e.Day=0]="Day",e[e.Week=1]="Week",e[e.Month=2]="Month",e[e.Year=3]="Year"}(o=exports.HabitType||(exports.HabitType={}));
},{}],"UyMs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Model=void 0;var e=require("./enums"),t=function(){return function(){var t=this;this.habits=[],this.isRegistered=!1,this.isLogged=!1,this.validateRegister=function(e){return t.isRegistered=t.authValidator(e)},this.validateLogin=function(e){return t.isLogged=t.authValidator(e)},this.authValidator=function(e){var t=Object.keys(e).map(function(t){return e[t]});return!(!/\S+@\S+\.\S+/.test(t[0])||t[1].length<4||t[1].length>12||t[2]&&(t[2].length<4||t[2].length>9))},this.onLogout=function(){return t.isLogged=!1},this.getDefaultColor=function(t){switch(t){case e.HabitType.Day:return"green";case e.HabitType.Week:return"pink";case e.HabitType.Month:return"blue";case e.HabitType.Year:return"yellow"}},this.habits=[{id:1,name:"Brush your teeth",order:1,habitType:e.HabitType.Day,description:"Brush your teeth twice everyday!",activiTyActual:0,activiTyGoal:2,habitColor:this.getDefaultColor(e.HabitType.Day)},{id:2,name:"Talk to a stranger",order:2,habitType:e.HabitType.Week,description:"Meet new people!",activiTyActual:0,activiTyGoal:1,habitColor:this.getDefaultColor(e.HabitType.Week)}]}}();exports.Model=t;
},{"./enums":"GTAk"}],"u4ph":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./view"),i=require("./model");document.addEventListener("DOMContentLoaded",function(){return new t(new e.View,new i.Model)});var t=function(){return function(e,i){var t=this;this.view=e,this.model=i,this.bindRegisterResult=function(e){t.view.showRegisterResult(e)},this.bindLoginResult=function(e){t.view.showLoginResult(e)},this.handleRegister=function(e){t.model.validateRegister(e),t.bindRegisterResult(t.model.isRegistered)},this.handleLogin=function(e){t.model.validateLogin(e),t.bindLoginResult(t.model.isLogged)},this.bindLogoutResult=function(e){t.view.showLogoutResult(e)},this.handleLogout=function(){t.model.onLogout(),t.bindLogoutResult(t.model.isLogged)},this.view.bindNavigateToLoginModalClick(),this.view.bindNavigateToRegisterModalClick(),this.view.bindRegisterClick(this.handleRegister),this.view.bindLoginClick(this.handleLogin),this.view.bindNavigateLogOutClick(this.handleLogout)}}();
},{"./view":"pESC","./model":"UyMs"}]},{},["u4ph"], null)
//# sourceMappingURL=/controller.6d19e24b.js.map