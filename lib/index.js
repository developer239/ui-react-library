import { createElement, useState } from 'react';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

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

var createGlobalStyles = function () { return createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);\n\n  html {\n    height: 100%;\n    font-size: 62.5%;\n  }\n\n  body {\n    min-height: 100%;\n    min-width: 326px;\n  }\n"], ["\n  @import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);\n\n  html {\n    height: 100%;\n    font-size: 62.5%;\n  }\n\n  body {\n    min-height: 100%;\n    min-width: 326px;\n  }\n"]))); };
var templateObject_1;

var animation = {
    fadeIn: keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  "], ["\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  "]))),
};
var templateObject_1$1;

var mediaQueries = {
    md: "@media (min-width: " + 768 / 16 + "em)",
    lg: "@media (min-width: " + 1224 / 16 + "em)",
};

var theme = {
    fontFamily: 'Roboto',
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

var alertColorsMixin = function (color, borderColor, bgColor) { return css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n"], ["\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n"])), color, hexToRgb(borderColor || color, 0.15), hexToRgb(bgColor || color, 0.15)); };
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 1.1rem 3.2rem 1.3rem;\n  animation: ", " 300ms linear;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 1.1rem 3.2rem 1.3rem;\n  animation: ", " 300ms linear;\n\n  ",
    "\n\n  ",
    "\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.fontFamily;
}, animation.fadeIn, function (_a) {
    var color = _a.theme.color;
    return alertColorsMixin(color.black, color.interface, color.interface);
}, function (_a) {
    var isSuccess = _a.isSuccess, color = _a.theme.color;
    return isSuccess && alertColorsMixin(color.success);
}, function (_a) {
    var isWarning = _a.isWarning, color = _a.theme.color;
    return isWarning && alertColorsMixin(color.warning);
}, function (_a) {
    var isError = _a.isError, color = _a.theme.color;
    return isError && alertColorsMixin(color.error);
});
var templateObject_1$2, templateObject_2;

var Alert = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (createElement(Container, __assign({}, props), children));
};

var BaseButton = styled.button(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  font-family: ", ";\n  transition: all 300ms linear;\n  padding: 0.5em 1em;\n  font-size: 1.4rem;\n  line-height: 2.1rem;\n  background-color: ", ";\n  color: ", ";\n  opacity: ", ";\n  border: none;\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  font-family: ", ";\n  transition: all 300ms linear;\n  padding: 0.5em 1em;\n  font-size: 1.4rem;\n  line-height: 2.1rem;\n  background-color: ", ";\n  color: ", ";\n  opacity: ", ";\n  border: none;\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n\n  &:hover {\n    background-color: ",
    ";\n  }\n\n  &:active {\n    background-color: ",
    ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme, type = _a.type;
    return theme.color[type || 'interface'];
}, function (_a) {
    var theme = _a.theme, type = _a.type;
    return theme.color[type ? 'white' : 'black'];
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? '0.6' : '1');
}, function (_a) {
    var theme = _a.theme, type = _a.type, disabled = _a.disabled;
    return darkenLighten(theme.color[type || 'interface'], disabled ? 0 : -20);
}, function (_a) {
    var theme = _a.theme, type = _a.type, disabled = _a.disabled;
    return darkenLighten(theme.color[type || 'interface'], disabled ? 0 : 20);
});
var templateObject_1$3;

var Button = function (_a) {
    var children = _a.children, isLoading = _a.isLoading, disabled = _a.disabled, rest = __rest(_a, ["children", "isLoading", "disabled"]);
    return (createElement(BaseButton, __assign({}, rest, { disabled: disabled || isLoading }), isLoading ? '...' : children));
};

var StyledInput = styled.input(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  font-family: ", ";\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n\n  ", "\n\n  &:focus {\n    outline: 0;\n    border-color: ", "\n      ", ";\n  }\n\n  ", "\n"], ["\n  font-family: ", ";\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n\n  ",
    "\n\n  &:focus {\n    outline: 0;\n    border-color: ", "\n      ",
    ";\n  }\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.interfaceDark;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.black;
}, function (_a) {
    var error = _a.error, color = _a.theme.color;
    return error &&
        "\n    color: " + color.error + ";\n    border-color: " + color.error + ";\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.color.primary;
}, function (_a) {
    var error = _a.error, color = _a.theme.color;
    return error &&
        "\n      border-color: " + color.error + ";\n    ";
}, function (_a) {
    var disabled = _a.disabled, color = _a.theme.color;
    return disabled &&
        "\n    cursor: not-allowed;\n    background-color: " + color.disabledBackground + ";\n    color: " + color.disabledColor + ";\n  ";
});
var templateObject_1$4;

var Container$1 = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject([""], [""])));
var Label = styled.label(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 1.4rem;\n  display: block;\n  text-align: left;\n  margin: 0 0 0.4em 0;\n"], ["\n  font-family: ", ";\n  font-size: 1.4rem;\n  display: block;\n  text-align: left;\n  margin: 0 0 0.4em 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
});
var Error = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-size: 1.4rem;\n  display: block;\n  text-align: left;\n  margin: 0.4rem 0 0 0;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-size: 1.4rem;\n  display: block;\n  text-align: left;\n  margin: 0.4rem 0 0 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.error;
});
var templateObject_1$5, templateObject_2$1, templateObject_3;

var FormElement = function (_a) {
    var id = _a.id, label = _a.label, error = _a.error, children = _a.children;
    return (createElement(Container$1, null,
        label && createElement(Label, { for: id }, label),
        children,
        error && createElement(Error, null, error)));
};

var Input = function (_a) {
    var id = _a.id, error = _a.error, label = _a.label, rest = __rest(_a, ["id", "error", "label"]);
    return (createElement(FormElement, { id: id, error: error, label: label },
        createElement(StyledInput, __assign({ id: id, error: error }, rest))));
};

var Layout = styled.main(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n"])));
var templateObject_1$6;

var HamburgerComponent = styled.svg(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: block;\n  cursor: pointer;\n  margin-left: 1.5rem;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  cursor: pointer;\n  margin-left: 1.5rem;\n\n  ", " {\n    display: none;\n  }\n"])), mediaQueries.md);
var ToggleComponent = styled.g(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  fill: ", ";\n  pointer-events: all;\n  cursor: pointer;\n"], ["\n  fill: ", ";\n  pointer-events: all;\n  cursor: pointer;\n"])), function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.color.white;
});
var Bar = styled.path(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  transform: rotate(0);\n  opacity: 1;\n  transform-origin: 2rem 1rem;\n  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;\n\n  &:nth-of-type(1) {\n    transform-origin: 2rem 1rem;\n\n    ", ";\n  }\n\n  &:nth-of-type(2) {\n    ", ";\n  }\n\n  &:nth-of-type(3) {\n    transform-origin: 2rem 2rem;\n\n    ", ";\n  }\n"], ["\n  transform: rotate(0);\n  opacity: 1;\n  transform-origin: 2rem 1rem;\n  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;\n\n  &:nth-of-type(1) {\n    transform-origin: 2rem 1rem;\n\n    ",
    ";\n  }\n\n  &:nth-of-type(2) {\n    ",
    ";\n  }\n\n  &:nth-of-type(3) {\n    transform-origin: 2rem 2rem;\n\n    ",
    ";\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen &&
        "\n      transform:rotate(-45deg) translateY(0) translateX(0);\n    ";
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen &&
        "\n      opacity: 0;\n    ";
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen &&
        "\n      transform: rotate(45deg) translateY(0em) translateX(0em);\n    ";
});
var templateObject_1$7, templateObject_2$2, templateObject_3$1;

var Hamburger = function (_a) {
    var isOpen = _a.isOpen, toggleOpen = _a.toggleOpen;
    return (createElement(HamburgerComponent, { width: "72px", height: "49.5px", viewBox: "0 0 48 34", onClick: toggleOpen },
        createElement("title", null, "Mobile Menu"),
        createElement(ToggleComponent, null,
            createElement(Bar, { isOpen: isOpen, d: "M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0\n        c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z" }),
            createElement(Bar, { isOpen: isOpen, d: "M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0\n        c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z" }),
            createElement(Bar, { isOpen: isOpen, d: "M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0\n        c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z" }))));
};

var Container$2 = styled.nav(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  background-color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  background-color: ", ";\n"])), function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.color.secondary;
});
var LinksContainer = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: none;\n  flex-direction: column;\n  width: 100%;\n\n  ", ";\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n  }\n"], ["\n  display: none;\n  flex-direction: column;\n  width: 100%;\n\n  ",
    ";\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen &&
        "\n    display: flex;\n  ";
}, mediaQueries.md);
var StyledLink = styled.a(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 1.7rem;\n  border-bottom: 0.1rem solid ", ";\n  padding: 2.2rem 1.6rem;\n  width: 100%;\n  cursor: pointer;\n  transition: all 250ms linear;\n  text-decoration: none;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", " {\n    border-bottom: none;\n    width: auto;\n    font-family: ", ";\n    font-size: 1.6rem;\n    line-height: 1.7rem;\n    text-transform: uppercase;\n  }\n\n  ", ";\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 1.7rem;\n  border-bottom: 0.1rem solid ", ";\n  padding: 2.2rem 1.6rem;\n  width: 100%;\n  cursor: pointer;\n  transition: all 250ms linear;\n  text-decoration: none;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", " {\n    border-bottom: none;\n    width: auto;\n    font-family: ", ";\n    font-size: 1.6rem;\n    line-height: 1.7rem;\n    text-transform: uppercase;\n  }\n\n  ",
    ";\n"])), function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.color.white;
}, function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.fontFamily;
}, function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.color.white;
}, function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.color.primary;
}, function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.color.white;
}, mediaQueries.md, function (_a) {
    var theme$$1 = _a.theme;
    return theme$$1.fontFamily;
}, function (_a) {
    var isActive = _a.isActive, theme$$1 = _a.theme;
    return isActive &&
        "\n    color: " + theme$$1.color.primary + ";\n\n    &:visited {\n      color: " + theme$$1.color.primary + ";\n    }\n  ";
});
var templateObject_1$8, templateObject_2$3, templateObject_3$2;

var NavBar = function (_a) {
    var links = _a.links, activeRoute = _a.activeRoute;
    var _b = useState(true), isOpen = _b[0], setIsOpen = _b[1];
    var handleToggleIsOpen = function () { return setIsOpen(!isOpen); };
    return (createElement(Container$2, null,
        createElement(LinksContainer, { isOpen: isOpen }, links.map(function (_a) {
            var id = _a.id, label = _a.label, component = _a.component, restLink = __rest(_a, ["id", "label", "component"]);
            return (createElement(StyledLink, __assign({ key: id, isOpen: isOpen, as: component, isActive: (activeRoute.startsWith(restLink.to) && restLink.to.length > 1) ||
                    restLink.to === activeRoute }, restLink), label));
        })),
        createElement(Hamburger, { toggleOpen: handleToggleIsOpen, isOpen: isOpen })));
};

var Layout$1 = styled.section(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  padding: 0 2rem;\n  max-width: 80rem;\n\n  ", " {\n    padding: 0 2.4rem;\n  }\n"], ["\n  padding: 0 2rem;\n  max-width: 80rem;\n\n  ", " {\n    padding: 0 2.4rem;\n  }\n"])), mediaQueries.md);
var templateObject_1$9;

var StyledSelect = styled.select(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  font-family: ", ";\n  display: inline-block;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n  padding: 0.55rem 2rem 0.55rem 0.5rem;\n\n  ", "\n\n  &:focus {\n    outline: 0;\n    border-color: ", "\n      ", ";\n  }\n\n  ", "\n\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n  background-color: ", ";\n  background-image: linear-gradient(\n      45deg,\n      transparent 50%,\n      ", " 50%\n    ),\n    linear-gradient(\n      135deg,\n      ", " 50%,\n      transparent 50%\n    );\n  background-position: calc(100% - 10px) calc(1rem), calc(100% - 5px) calc(1rem);\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n"], ["\n  font-family: ", ";\n  display: inline-block;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n  padding: 0.55rem 2rem 0.55rem 0.5rem;\n\n  ",
    "\n\n  &:focus {\n    outline: 0;\n    border-color: ", "\n      ",
    ";\n  }\n\n  ",
    "\n\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n  background-color: ", ";\n  background-image: linear-gradient(\n      45deg,\n      transparent 50%,\n      ", " 50%\n    ),\n    linear-gradient(\n      135deg,\n      ", " 50%,\n      transparent 50%\n    );\n  background-position: calc(100% - 10px) calc(1rem), calc(100% - 5px) calc(1rem);\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.interfaceDark;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.black;
}, function (_a) {
    var error = _a.error, color = _a.theme.color;
    return error &&
        "\n    color: " + color.error + ";\n    border-color: " + color.error + ";\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.color.primary;
}, function (_a) {
    var error = _a.error, color = _a.theme.color;
    return error &&
        "\n      border-color: " + color.error + ";\n    ";
}, function (_a) {
    var disabled = _a.disabled, color = _a.theme.color;
    return disabled &&
        "\n    cursor: not-allowed;\n    background-color: " + color.disabledBackground + ";\n    color: " + color.disabledColor + ";\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.color.white;
}, function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.color.error : 'grey');
}, function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.color.error : 'grey');
});
var templateObject_1$a;

var Select = function (_a) {
    var id = _a.id, error = _a.error, label = _a.label, value = _a.value, options = _a.options, rest = __rest(_a, ["id", "error", "label", "value", "options"]);
    return (createElement(FormElement, { id: id, error: error, label: label },
        createElement(StyledSelect, __assign({ id: id, error: error }, rest), options.map(function (_a) {
            var optionLabel = _a.label, optionValue = _a.value;
            return (createElement("option", { selected: value === optionValue, key: optionValue, value: optionValue }, optionLabel));
        }))));
};

var StyledTextarea = styled.textarea(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  font-family: ", ";\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n\n  ", "\n\n  &:focus {\n    outline: 0;\n    border-color: ", "\n      ", ";\n  }\n\n  ", "\n"], ["\n  font-family: ", ";\n  padding: 0.5em 0.6em;\n  display: inline-block;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  color: ", ";\n\n  ",
    "\n\n  &:focus {\n    outline: 0;\n    border-color: ", "\n      ",
    ";\n  }\n\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.interfaceDark;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.black;
}, function (_a) {
    var error = _a.error, color = _a.theme.color;
    return error &&
        "\n    color: " + color.error + ";\n    border-color: " + color.error + ";\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.color.primary;
}, function (_a) {
    var error = _a.error, color = _a.theme.color;
    return error &&
        "\n      border-color: " + color.error + ";\n    ";
}, function (_a) {
    var disabled = _a.disabled, color = _a.theme.color;
    return disabled &&
        "\n    cursor: not-allowed;\n    background-color: " + color.disabledBackground + ";\n    color: " + color.disabledColor + ";\n  ";
});
var templateObject_1$b;

var Textarea = function (_a) {
    var id = _a.id, error = _a.error, label = _a.label, rest = __rest(_a, ["id", "error", "label"]);
    return (createElement(FormElement, { id: id, error: error, label: label },
        createElement(StyledTextarea, __assign({ id: id, error: error }, rest))));
};

var H1 = styled.h1(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 4.6rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 4.6rem;\n  line-height: 1.2;\n  letter-spacing: -0.1rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text;
});
var H2 = styled.h2(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -0.1rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text;
});
var H3 = styled.h3(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.8rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.8rem;\n  line-height: 1.3;\n  letter-spacing: -0.1rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text;
});
var H4 = styled.h4(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.2rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.2rem;\n  line-height: 1.35;\n  letter-spacing: -0.08rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text;
});
var H5 = styled.h5(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -0.05rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text;
});
var H6 = styled.h6(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 1.4;\n  letter-spacing: 0;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 1.4;\n  letter-spacing: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text;
});
var P = styled.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.fontFamily;
}, function (_a) {
    var theme = _a.theme;
    return theme.color.text;
});
var index = {
    H1: H1,
    H2: H2,
    H3: H3,
    H4: H4,
    H5: H5,
    H6: H6,
    P: P,
};
var templateObject_1$c, templateObject_2$4, templateObject_3$3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

export { Alert, Button, Input, Layout, NavBar, Layout$1 as Section, Select, Textarea, index as Typography, animation, createGlobalStyles as global, mediaQueries as mq, theme };
//# sourceMappingURL=index.js.map
