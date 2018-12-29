'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var is = _interopDefault(require('styled-is'));
var ramda = require('ramda');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var createGlobalStyles = function () { return styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html {\n    height: 100%;\n    font-size: 62.5%;\n  }\n\n  body {\n    min-height: 100%;\n    min-width: 326px;\n  }\n"], ["\n  html {\n    height: 100%;\n    font-size: 62.5%;\n  }\n\n  body {\n    min-height: 100%;\n    min-width: 326px;\n  }\n"]))); };
var templateObject_1;

var animation = {
    fadeIn: styled.keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  "], ["\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  "]))),
    spin: styled.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    to { -webkit-transform: rotate(360deg); }\n "], ["\n    to { -webkit-transform: rotate(360deg); }\n "]))),
};
var templateObject_1$1, templateObject_2;

var mediaQueries = {
    md: "@media (min-width: " + 768 / 16 + "rem)",
    lg: "@media (min-width: " + 1224 / 16 + "rem)",
};

var theme = {
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: {
        text: '#606c76',
        primary: '#1f8dd6',
        secondary: '#2d3e50',
        success: '#5eb95e',
        warning: '#f37b1d',
        error: '#dd514c',
        white: 'white',
        black: 'black',
        interface: '#E6E6E6',
        interfaceDark: '#ccc',
        disabledBackground: '#eaeded',
        disabledColor: '#cad2d3',
    },
};

var darkenLighten = function (color, amt) {
    var hasHash = color[0] === '#';
    var usePound = hasHash;
    var normalizedColor = hasHash ? color.slice(1) : color;
    var num = parseInt(normalizedColor, 16);
    var r = (num >> 16) + amt;
    if (r > 255) {
        r = 255;
    }
    else if (r < 0) {
        r = 0;
    }
    var b = ((num >> 8) & 0x00ff) + amt;
    if (b > 255) {
        b = 255;
    }
    else if (b < 0) {
        b = 0;
    }
    var g = (num & 0x0000ff) + amt;
    if (g > 255) {
        g = 255;
    }
    else if (g < 0) {
        g = 0;
    }
    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};
var hexToRgb = function (inputHex, opacity, lightenDarken) {
    if (lightenDarken === void 0) { lightenDarken = {}; }
    var hexToNormalize = inputHex.trim();
    var hex = hexToNormalize[0] === '#' ? hexToNormalize.substr(1) : hexToNormalize;
    var bigint = parseInt(hex, 16);
    var h = [];
    if (hex.length === 3) {
        h.push((bigint >> 4) & 255);
        h.push((bigint >> 2) & 255);
    }
    else {
        h.push((bigint >> 16) & 255);
        h.push((bigint >> 8) & 255);
    }
    h.push(bigint & 255);
    h[0] += lightenDarken.r || 0;
    h[1] += lightenDarken.g || 0;
    h[2] += lightenDarken.b || 0;
    if (opacity) {
        h.push(opacity);
        return "rgba(" + h.join() + ")";
    }
    return "rgb(" + h.join() + ")";
};

var alertColorsMixin = function (type) { return function (_a) {
    var color = _a.theme.color;
    return styled.css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n"], ["\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n"])), color[type], hexToRgb(color[type], 0.15), hexToRgb(color[type], 0.15));
}; };
var Container = styled__default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 1.5rem 2rem;\n  animation: ", " 300ms linear;\n  font-family: ", ";\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 1.5rem 2rem;\n  animation: ", " 300ms linear;\n  font-family: ", ";\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), animation.fadeIn, ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'black']), function (_a) {
    var theme$$1 = _a.theme;
    return hexToRgb(theme$$1.color.interface, 0.15);
}, function (_a) {
    var theme$$1 = _a.theme;
    return hexToRgb(theme$$1.color.interface, 0.15);
}, is('isSuccess')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), alertColorsMixin('success')), is('isWarning')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), alertColorsMixin('warning')), is('isError')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), alertColorsMixin('error')));
var templateObject_1$2, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5;

var Alert = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Container, __assign({}, props), children));
};

var BaseButton = styled__default.button(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: relative;\n  font-family: ", ";\n  transition: all 300ms linear;\n  padding: 1rem 1.25rem;\n  font-size: 1.6rem;\n  line-height: 2.1rem;\n  background-color: ", ";\n  color: ", ";\n  opacity: 1;\n  border: none;\n\n  ", ";\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  font-family: ", ";\n  transition: all 300ms linear;\n  padding: 1rem 1.25rem;\n  font-size: 1.6rem;\n  line-height: 2.1rem;\n  background-color: ", ";\n  color: ", ";\n  opacity: 1;\n  border: none;\n\n  ",
    ";\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: ",
    ";\n  }\n\n  &:active {\n    background-color: ",
    ";\n  }\n"])), ramda.path(['theme', 'fontFamily']), function (_a) {
    var theme = _a.theme, type = _a.type;
    return theme.color[type || 'interface'];
}, function (_a) {
    var theme = _a.theme, type = _a.type;
    return theme.color[type ? 'white' : 'black'];
}, is('disabled')(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    opacity: 0.6;\n  "], ["\n    opacity: 0.6;\n  "]))), function (_a) {
    var theme = _a.theme, type = _a.type, disabled = _a.disabled;
    return darkenLighten(theme.color[type || 'interface'], disabled ? 0 : -20);
}, function (_a) {
    var theme = _a.theme, type = _a.type, disabled = _a.disabled;
    return darkenLighten(theme.color[type || 'interface'], disabled ? 0 : 15);
});
var templateObject_1$3, templateObject_2$2;

var Button = function (_a) {
    var children = _a.children, isLoading = _a.isLoading, disabled = _a.disabled, rest = __rest(_a, ["children", "isLoading", "disabled"]);
    return (React.createElement(BaseButton, __assign({}, rest, { disabled: disabled || isLoading }), isLoading ? '...' : children));
};

var inputMixin = function () { return styled.css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  font-family: ", ";\n  display: inline-block;\n  font-size: 1.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1.25rem 2rem 1.25rem 1.25rem;\n  color: ", ";\n  border: 1px solid ", ";\n\n  &:focus {\n    outline: 0;\n    border-color: ", ";\n\n    ", "\n  }\n\n  ", "\n\n  ", "\n"], ["\n  font-family: ", ";\n  display: inline-block;\n  font-size: 1.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1.25rem 2rem 1.25rem 1.25rem;\n  color: ", ";\n  border: 1px solid ", ";\n\n  &:focus {\n    outline: 0;\n    border-color: ", ";\n\n    ",
    "\n  }\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.black;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.interfaceDark;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.primary;
}, is('error')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), ramda.path(['theme', 'color', 'error'])), is('error')(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n    color: ", ";\n    border-color: ", ";\n  "], ["\n    color: ", ";\n    border-color: ", ";\n  "])), ramda.path(['theme', 'color', 'error']), ramda.path(['theme', 'color', 'error'])), is('disabled')(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    cursor: not-allowed;\n    background-color: ", ";\n    color: ", ";\n  "], ["\n    cursor: not-allowed;\n    background-color: ", ";\n    color: ", ";\n  "])), ramda.path(['theme', 'color', 'disabledBackground']), ramda.path(['theme', 'color', 'disabledColor']))); };
var templateObject_1$4, templateObject_2$3, templateObject_3$1, templateObject_4$1;

var StyledInput = styled__default.input(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), inputMixin());
var templateObject_1$5;

var Container$1 = styled__default.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject([""], [""])));
var Label = styled__default.label(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 1.6rem;\n  display: block;\n  text-align: left;\n  margin-bottom: 0.5rem;\n"], ["\n  font-family: ", ";\n  font-size: 1.6rem;\n  display: block;\n  text-align: left;\n  margin-bottom: 0.5rem;\n"])), ramda.path(['theme', 'fontFamily']));
var Error = styled__default.span(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-size: 1.4rem;\n  font-weight: 300;\n  display: block;\n  text-align: left;\n  margin-top: 0.5rem;\n  padding: 1rem;\n  background-color: ", ";\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-size: 1.4rem;\n  font-weight: 300;\n  display: block;\n  text-align: left;\n  margin-top: 0.5rem;\n  padding: 1rem;\n  background-color: ", ";\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'white']), ramda.path(['theme', 'color', 'error']));
var templateObject_1$6, templateObject_2$4, templateObject_3$2;

var FormElement = function (_a) {
    var id = _a.id, label = _a.label, error = _a.error, children = _a.children;
    return (React.createElement(Container$1, null,
        label && React.createElement(Label, { for: id }, label),
        children,
        error && React.createElement(Error, null, error)));
};

var Input = function (_a) {
    var id = _a.id, error = _a.error, label = _a.label, rest = __rest(_a, ["id", "error", "label"]);
    return (React.createElement(FormElement, { id: id, error: error, label: label },
        React.createElement(StyledInput, __assign({ id: id, error: error }, rest))));
};

var Layout = styled__default.main(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n"])));
var templateObject_1$7;

var HamburgerComponent = styled__default.svg(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: block;\n  cursor: pointer;\n  margin-left: 1.5rem;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  cursor: pointer;\n  margin-left: 1.5rem;\n\n  ", " {\n    display: none;\n  }\n"])), mediaQueries.md);
var ToggleComponent = styled__default.g(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  fill: ", ";\n  pointer-events: all;\n  cursor: pointer;\n"], ["\n  fill: ", ";\n  pointer-events: all;\n  cursor: pointer;\n"])), ramda.path(['theme', 'color', 'white']));
var Bar = styled__default.path(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  transform: rotate(0);\n  opacity: 1;\n  transform-origin: 2rem 1rem;\n  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;\n\n  &:nth-of-type(1) {\n    transform-origin: 2rem 1rem;\n\n    ", ";\n  }\n\n  &:nth-of-type(2) {\n    ", ";\n  }\n\n  &:nth-of-type(3) {\n    transform-origin: 2rem 2rem;\n\n    ", ";\n  }\n"], ["\n  transform: rotate(0);\n  opacity: 1;\n  transform-origin: 2rem 1rem;\n  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;\n\n  &:nth-of-type(1) {\n    transform-origin: 2rem 1rem;\n\n    ",
    ";\n  }\n\n  &:nth-of-type(2) {\n    ",
    ";\n  }\n\n  &:nth-of-type(3) {\n    transform-origin: 2rem 2rem;\n\n    ",
    ";\n  }\n"])), is('isOpen')(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n      transform:rotate(-45deg) translateY(0) translateX(0);\n    "], ["\n      transform:rotate(-45deg) translateY(0) translateX(0);\n    "]))), is('isOpen')(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n      opacity: 0;\n    "], ["\n      opacity: 0;\n    "]))), is('isOpen')(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n      transform: rotate(45deg) translateY(0em) translateX(0em);\n    "], ["\n      transform: rotate(45deg) translateY(0em) translateX(0em);\n    "]))));
var templateObject_1$8, templateObject_2$5, templateObject_3$3, templateObject_4$2, templateObject_5$1, templateObject_6;

var Hamburger = function (_a) {
    var isOpen = _a.isOpen, toggleOpen = _a.toggleOpen;
    return (React.createElement(HamburgerComponent, { width: "72px", height: "49.5px", viewBox: "0 0 48 34", onClick: toggleOpen },
        React.createElement("title", null, "Mobile Menu"),
        React.createElement(ToggleComponent, null,
            React.createElement(Bar, { isOpen: isOpen, d: "M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0\n        c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z" }),
            React.createElement(Bar, { isOpen: isOpen, d: "M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0\n        c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z" }),
            React.createElement(Bar, { isOpen: isOpen, d: "M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0\n        c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z" }))));
};

var Container$2 = styled__default.nav(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  background-color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  background-color: ", ";\n"])), ramda.path(['theme', 'color', 'secondary']));
var LinksContainer = styled__default.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  display: none;\n  flex-direction: column;\n  width: 100%;\n\n  ", "\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n  }\n"], ["\n  display: none;\n  flex-direction: column;\n  width: 100%;\n\n  ",
    "\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n  }\n"])), is('isOpen')(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n    display: flex;\n  "], ["\n    display: flex;\n  "]))), mediaQueries.md);
var StyledLink = styled__default.a(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.5rem;\n  line-height: 1.6rem;\n  border-bottom: 0.1rem solid ", ";\n  padding: 2.2rem 2rem;\n  width: 100%;\n  cursor: pointer;\n  transition: all 250ms linear;\n  text-decoration: none;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", " {\n    border-bottom: none;\n    width: auto;\n    font-size: 1.5rem;\n    line-height: 1.6rem;\n    text-transform: uppercase;\n    padding: 2.2rem 2.4rem;\n  }\n\n  ", "\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.5rem;\n  line-height: 1.6rem;\n  border-bottom: 0.1rem solid ", ";\n  padding: 2.2rem 2rem;\n  width: 100%;\n  cursor: pointer;\n  transition: all 250ms linear;\n  text-decoration: none;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", " {\n    border-bottom: none;\n    width: auto;\n    font-size: 1.5rem;\n    line-height: 1.6rem;\n    text-transform: uppercase;\n    padding: 2.2rem 2.4rem;\n  }\n\n  ",
    "\n"])), ramda.path(['theme', 'color', 'white']), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'white']), ramda.path(['theme', 'color', 'primary']), ramda.path(['theme', 'color', 'white']), mediaQueries.md, is('isActive')(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n\n    &:visited {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n    background-color: ", ";\n\n    &:visited {\n      color: ", ";\n    }\n  "])), ramda.path(['theme', 'color', 'white']), ramda.path(['theme', 'color', 'primary']), ramda.path(['theme', 'color', 'white'])));
var templateObject_1$9, templateObject_2$6, templateObject_3$4, templateObject_4$3, templateObject_5$2;

var NavBar = function (_a) {
    var links = _a.links, activeRoute = _a.activeRoute;
    var _b = React.useState(true), isOpen = _b[0], setIsOpen = _b[1];
    var handleToggleIsOpen = function () { return setIsOpen(!isOpen); };
    return (React.createElement(Container$2, null,
        React.createElement(LinksContainer, { isOpen: isOpen }, links.map(function (_a) {
            var id = _a.id, label = _a.label, component = _a.component, restLink = __rest(_a, ["id", "label", "component"]);
            return (React.createElement(StyledLink, __assign({ key: id, onClick: handleToggleIsOpen, isOpen: isOpen, as: component, isActive: (activeRoute.startsWith(restLink.to) && restLink.to.length > 1) ||
                    restLink.to === activeRoute }, restLink), label));
        })),
        React.createElement(Hamburger, { toggleOpen: handleToggleIsOpen, isOpen: isOpen })));
};

var Layout$1 = styled__default.section(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  padding: 0 2rem;\n  max-width: 80rem;\n\n  ", " {\n    padding: 0 2.4rem;\n  }\n"], ["\n  padding: 0 2rem;\n  max-width: 80rem;\n\n  ", " {\n    padding: 0 2.4rem;\n  }\n"])), mediaQueries.md);
var templateObject_1$a;

var StyledSelect = styled__default.select(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n  background-color: ", ";\n  background-image: linear-gradient(\n      45deg,\n      transparent 50%,\n      ", " 50%\n    ),\n    linear-gradient(\n      135deg,\n      ", " 50%,\n      transparent 50%\n    );\n  background-position: calc(100% - 10px) calc(50%), calc(100% - 5px) calc(50%);\n  background-size: 5px 5px, 5px 5px, 1px 1.5rem;\n  background-repeat: no-repeat;\n"], ["\n  ", "\n\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n  background-color: ", ";\n  background-image: linear-gradient(\n      45deg,\n      transparent 50%,\n      ", " 50%\n    ),\n    linear-gradient(\n      135deg,\n      ", " 50%,\n      transparent 50%\n    );\n  background-position: calc(100% - 10px) calc(50%), calc(100% - 5px) calc(50%);\n  background-size: 5px 5px, 5px 5px, 1px 1.5rem;\n  background-repeat: no-repeat;\n"])), inputMixin(), function (_a) {
    var theme = _a.theme;
    return theme.color.white;
}, function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.color.error : 'grey');
}, function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.color.error : 'grey');
});
var templateObject_1$b;

var Select = function (_a) {
    var id = _a.id, error = _a.error, label = _a.label, value = _a.value, options = _a.options, rest = __rest(_a, ["id", "error", "label", "value", "options"]);
    return (React.createElement(FormElement, { id: id, error: error, label: label },
        React.createElement(StyledSelect, __assign({ id: id, error: error }, rest), options.map(function (_a) {
            var optionLabel = _a.label, optionValue = _a.value;
            return (React.createElement("option", { selected: value === optionValue, key: optionValue, value: optionValue }, optionLabel));
        }))));
};

var SpinnerComponent = styled__default.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 0.3rem solid ", ";\n  border-top-color: ", ";\n  animation: ", " 1.5s linear infinite;\n"], ["\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 0.3rem solid ", ";\n  border-top-color: ", ";\n  animation: ", " 1.5s linear infinite;\n"])), ramda.path(['theme', 'color', 'primary']), ramda.path(['theme', 'color', 'white']), animation.spin);
var Spinner = function () { return React.createElement(SpinnerComponent, null); };
var templateObject_1$c;

var StyledTextarea = styled__default.textarea(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  height: 10rem;\n\n  ", "\n"], ["\n  height: 10rem;\n\n  ", "\n"])), inputMixin());
var templateObject_1$d;

var Textarea = function (_a) {
    var id = _a.id, error = _a.error, label = _a.label, rest = __rest(_a, ["id", "error", "label"]);
    return (React.createElement(FormElement, { id: id, error: error, label: label },
        React.createElement(StyledTextarea, __assign({ id: id, error: error }, rest))));
};

var H1 = styled__default.h1(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 4.6rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 4.6rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'text']));
var H2 = styled__default.h2(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'text']));
var H3 = styled__default.h3(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.8rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.8rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'text']));
var H4 = styled__default.h4(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.2rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.2rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'text']));
var H5 = styled__default.h5(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'text']));
var H6 = styled__default.h6(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 1.4;\n  letter-spacing: 0;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 1.4;\n  letter-spacing: 0;\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'text']));
var P = styled__default.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n"])), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'text']));
var A = styled__default.a(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 300;\n  text-decoration: none;\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 300;\n  text-decoration: none;\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])), ramda.path(['theme', 'color', 'primary']), ramda.path(['theme', 'fontFamily']), ramda.path(['theme', 'color', 'primary']));
var index = {
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
    H6: H6,
    P: P,
    A: A,
};
var templateObject_1$e, templateObject_2$7, templateObject_3$5, templateObject_4$4, templateObject_5$3, templateObject_6$1, templateObject_7, templateObject_8;

var Margin = styled__default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), is('isInline')(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n    display: inline;\n  "], ["\n    display: inline;\n  "]))), is('margin')(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n    margin: ", ";\n  "], ["\n    margin: ", ";\n  "])), ramda.path(['margin'])), is('horizontal')(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n    margin-right: ", "rem;\n    margin-left: ", "rem;\n  "], ["\n    margin-right: ", "rem;\n    margin-left: ", "rem;\n  "])), ramda.path(['horizontal']), ramda.path(['horizontal'])), is('vertical')(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n    margin-top: ", "rem;\n    margin-bototm: ", "rem;\n  "], ["\n    margin-top: ", "rem;\n    margin-bototm: ", "rem;\n  "])), ramda.path(['vertical']), ramda.path(['horizontal'])), is('top')(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n    margin-top: ", "rem;\n  "], ["\n    margin-top: ", "rem;\n  "])), ramda.path(['top'])), is('right')(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n    margin-right: ", "rem;\n  "], ["\n    margin-right: ", "rem;\n  "])), ramda.path(['right'])), is('bottom')(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n    margin-bottom: ", "rem;\n  "], ["\n    margin-bottom: ", "rem;\n  "])), ramda.path(['bottom'])), is('left')(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n    margin-left: ", "rem;\n  "], ["\n    margin-left: ", "rem;\n  "])), ramda.path(['left'])));
var templateObject_1$f, templateObject_2$8, templateObject_3$6, templateObject_4$5, templateObject_5$4, templateObject_6$2, templateObject_7$1, templateObject_8$1, templateObject_9;

exports.Alert = Alert;
exports.Button = Button;
exports.Input = Input;
exports.Layout = Layout;
exports.NavBar = NavBar;
exports.Section = Layout$1;
exports.Select = Select;
exports.Spinner = Spinner;
exports.Textarea = Textarea;
exports.Typography = index;
exports.Margin = Margin;
exports.animation = animation;
exports.global = createGlobalStyles;
exports.mq = mediaQueries;
exports.theme = theme;
//# sourceMappingURL=index.js.map
