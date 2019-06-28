import { createElement, useState } from 'react';
import styled, { css, createGlobalStyle, keyframes } from 'styled-components';

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
var __assign = function () {
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

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var styledIf = function styledIf(method, condition) {
  return function () {
    for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++) {
      names[_key] = arguments[_key];
    }

    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return function (props) {
        return (method === 'match' ? props[names[0]] === names[1] : names[method](function (name) {
          return Boolean(props[name]) === condition;
        })) && css.apply(void 0, _toConsumableArray(handleFunctions(args, props)));
      };
    };
  };
};

var handleFunctions = function handleFunctions(args, props) {
  var css = '';

  for (var i = 1; i < args.length; i++) {
    if (typeof args[i] === 'function') {
      var output = args[i](props);

      if (typeof output === "string" && output.includes(':')) {
        css += output;
      }
    }
  }

  if (css) {
    var newArgs = args.slice(0);
    var argCss = args[0].slice(1);
    argCss.unshift(css + newArgs[0][0]);
    newArgs[0] = argCss;
    return newArgs;
  }

  return args;
};

var is = styledIf('every', true);

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */

var path =
/*#__PURE__*/
_curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;

  while (idx < paths.length) {
    if (val == null) {
      return;
    }

    val = val[paths[idx]];
    idx += 1;
  }

  return val;
});

var createGlobalStyles = function () { return createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');\n\n  html {\n    height: 100%;\n    font-size: 62.5%;\n  }\n\n  body {\n    min-height: 100%;\n    min-width: 326px;\n  }\n"], ["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');\n\n  html {\n    height: 100%;\n    font-size: 62.5%;\n  }\n\n  body {\n    min-height: 100%;\n    min-width: 326px;\n  }\n"]))); };
var templateObject_1;

var animation = {
    fadeIn: keyframes(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  "], ["\n    from {\n      opacity: 0;\n    }\n\n    to {\n      opacity: 1;\n    }\n  "]))),
    spin: keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    to { -webkit-transform: rotate(360deg); }\n "], ["\n    to { -webkit-transform: rotate(360deg); }\n "]))),
};
var templateObject_1$1, templateObject_2;

var mediaQueries = {
    md: "@media (min-width: " + 768 / 16 + "rem)",
    lg: "@media (min-width: " + 1224 / 16 + "rem)",
};

var theme = {
    fontFamily: 'Roboto',
    color: {
        text: '#000000',
        primary: '#2d98da',
        secondary: '#45aaf2',
        success: '#20bf6b',
        warning: '#fd9644',
        error: '#fc5c65',
        white: '#ffffff',
        black: '#000000',
        interface: '#d1d8e0',
        interfaceDark: '#a5b1c2',
        disabledBackground: '#d1d8e0',
        disabledColor: '#ffffff',
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
    return css(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n"], ["\n  color: ", ";\n  background-color: ", ";\n"])), color.white, hexToRgb(color[type], 0.6));
}; };
var Container = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 0.4rem;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 1.5rem 2rem;\n  animation: ", " 300ms linear;\n  font-family: ", ";\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n  font-weight: 300;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  border-radius: 0.4rem;\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  padding: 1.5rem 2rem;\n  animation: ", " 300ms linear;\n  font-family: ", ";\n  color: ", ";\n  border: 0.1rem solid ", ";\n  background-color: ", ";\n  font-weight: 300;\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), animation.fadeIn, path(['theme', 'fontFamily']), path(['theme', 'color', 'black']), function (_a) {
    var theme = _a.theme;
    return hexToRgb(theme.color.interface, 0.15);
}, function (_a) {
    var theme = _a.theme;
    return hexToRgb(theme.color.interface, 0.15);
}, is('isSuccess')(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), alertColorsMixin('success')), is('isWarning')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), alertColorsMixin('warning')), is('isError')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), alertColorsMixin('error')));
var templateObject_1$2, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5;

var Alert = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (createElement(Container, __assign({}, props), children));
};

var BaseButton = styled.button(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  position: relative;\n  font-family: ", ";\n  transition: all 300ms linear;\n  padding: 1rem 1.25rem;\n  font-size: 1.6rem;\n  line-height: 2.1rem;\n  background-color: ", ";\n  color: ", ";\n  opacity: 1;\n  border: none;\n  border-radius: 0.4rem;\n  font-weight: 300;\n\n  ", ";\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  font-family: ", ";\n  transition: all 300ms linear;\n  padding: 1rem 1.25rem;\n  font-size: 1.6rem;\n  line-height: 2.1rem;\n  background-color: ",
    ";\n  color: ", ";\n  opacity: 1;\n  border: none;\n  border-radius: 0.4rem;\n  font-weight: 300;\n\n  ",
    ";\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: ",
    ";\n  }\n\n  &:active {\n    background-color: ",
    ";\n  }\n"])), path(['theme', 'fontFamily']), function (_a) {
    var theme = _a.theme, bgType = _a.bgType;
    return theme.color[bgType || 'interface'];
}, function (_a) {
    var theme = _a.theme, bgType = _a.bgType;
    return theme.color[bgType ? 'white' : 'black'];
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
    return (createElement(BaseButton, __assign({}, rest, { disabled: disabled || isLoading }), isLoading ? '...' : children));
};

var inputMixin = function () { return css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: 0.4rem;\n  font-family: ", ";\n  display: inline-block;\n  font-size: 1.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem 2rem 1rem 1.25rem;\n  color: ", ";\n  border: 1px solid ", ";\n  font-weight: 300;\n\n  &:focus {\n    outline: 0;\n    border-color: ", ";\n\n    ", "\n  }\n\n  ", "\n\n  ", "\n"], ["\n  border-radius: 0.4rem;\n  font-family: ", ";\n  display: inline-block;\n  font-size: 1.4rem;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem 2rem 1rem 1.25rem;\n  color: ", ";\n  border: 1px solid ", ";\n  font-weight: 300;\n\n  &:focus {\n    outline: 0;\n    border-color: ", ";\n\n    ",
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
}, is('error')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n      border-color: ", ";\n    "], ["\n      border-color: ", ";\n    "])), path(['theme', 'color', 'error'])), is('error')(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n    color: ", ";\n    border-color: ", ";\n  "], ["\n    color: ", ";\n    border-color: ", ";\n  "])), path(['theme', 'color', 'error']), path(['theme', 'color', 'error'])), is('disabled')(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n    cursor: not-allowed;\n    background-color: ", ";\n    color: ", ";\n  "], ["\n    cursor: not-allowed;\n    background-color: ", ";\n    color: ", ";\n  "])), path(['theme', 'color', 'disabledBackground']), path(['theme', 'color', 'black']))); };
var templateObject_1$4, templateObject_2$3, templateObject_3$1, templateObject_4$1;

var StyledInput = styled.input(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), inputMixin());
var templateObject_1$5;

var Container$1 = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject([""], [""])));
var Label = styled.label(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: 1.6rem;\n  display: block;\n  text-align: left;\n  margin-bottom: 0.5rem;\n  font-weight: 300;\n"], ["\n  font-family: ", ";\n  font-size: 1.6rem;\n  display: block;\n  text-align: left;\n  margin-bottom: 0.5rem;\n  font-weight: 300;\n"])), path(['theme', 'fontFamily']));
var Error = styled.span(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  border-radius: 0.4rem;\n  font-family: ", ";\n  color: ", ";\n  font-size: 1.4rem;\n  font-weight: 300;\n  display: block;\n  text-align: left;\n  margin-top: 0.5rem;\n  padding: 1rem 1.2rem;\n  background-color: ", ";\n"], ["\n  border-radius: 0.4rem;\n  font-family: ", ";\n  color: ", ";\n  font-size: 1.4rem;\n  font-weight: 300;\n  display: block;\n  text-align: left;\n  margin-top: 0.5rem;\n  padding: 1rem 1.2rem;\n  background-color: ", ";\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'white']), path(['theme', 'color', 'error']));
var templateObject_1$6, templateObject_2$4, templateObject_3$2;

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

var Layout = styled.main(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n"])));
var templateObject_1$7;

var HamburgerComponent = styled.svg(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: block;\n  cursor: pointer;\n  margin-left: 1.5rem;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  cursor: pointer;\n  margin-left: 1.5rem;\n\n  ", " {\n    display: none;\n  }\n"])), mediaQueries.md);
var ToggleComponent = styled.g(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  fill: ", ";\n  pointer-events: all;\n  cursor: pointer;\n"], ["\n  fill: ", ";\n  pointer-events: all;\n  cursor: pointer;\n"])), path(['theme', 'color', 'white']));
var Bar = styled.path(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  transform: rotate(0);\n  opacity: 1;\n  transform-origin: 2rem 1rem;\n  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;\n\n  &:nth-of-type(1) {\n    transform-origin: 2rem 1rem;\n\n    ", ";\n  }\n\n  &:nth-of-type(2) {\n    ", ";\n  }\n\n  &:nth-of-type(3) {\n    transform-origin: 2rem 2rem;\n\n    ", ";\n  }\n"], ["\n  transform: rotate(0);\n  opacity: 1;\n  transform-origin: 2rem 1rem;\n  transition: transform 0.4s ease-in-out, opacity 0.2s ease-in-out;\n\n  &:nth-of-type(1) {\n    transform-origin: 2rem 1rem;\n\n    ",
    ";\n  }\n\n  &:nth-of-type(2) {\n    ",
    ";\n  }\n\n  &:nth-of-type(3) {\n    transform-origin: 2rem 2rem;\n\n    ",
    ";\n  }\n"])), is('isOpen')(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n      transform:rotate(-45deg) translateY(0) translateX(0);\n    "], ["\n      transform:rotate(-45deg) translateY(0) translateX(0);\n    "]))), is('isOpen')(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n      opacity: 0;\n    "], ["\n      opacity: 0;\n    "]))), is('isOpen')(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n      transform: rotate(45deg) translateY(0em) translateX(0em);\n    "], ["\n      transform: rotate(45deg) translateY(0em) translateX(0em);\n    "]))));
var templateObject_1$8, templateObject_2$5, templateObject_3$3, templateObject_4$2, templateObject_5$1, templateObject_6;

var Hamburger = function (_a) {
    var isOpen = _a.isOpen, toggleOpen = _a.toggleOpen;
    return (createElement(HamburgerComponent, { width: "72px", height: "49.5px", viewBox: "0 0 48 34", onClick: toggleOpen },
        createElement("title", null, "Mobile Menu"),
        createElement(ToggleComponent, null,
            createElement(Bar, { isOpen: isOpen, d: "M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0\n        c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z" }),
            createElement(Bar, { isOpen: isOpen, d: "M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0\n        c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z" }),
            createElement(Bar, { isOpen: isOpen, d: "M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0\n        c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z" }))));
};

var Container$2 = styled.nav(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  background-color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  background-color: ", ";\n"])), path(['theme', 'color', 'primary']));
var LinksContainer = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  display: none;\n  flex-direction: column;\n  width: 100%;\n\n  ", "\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n  }\n"], ["\n  display: none;\n  flex-direction: column;\n  width: 100%;\n\n  ",
    "\n\n  ", " {\n    display: flex;\n    flex-direction: row;\n  }\n"])), is('isOpen')(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n    display: flex;\n  "], ["\n    display: flex;\n  "]))), mediaQueries.md);
var StyledLink = styled.a(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.5rem;\n  line-height: 1.6rem;\n  border-bottom: 0.1rem solid ", ";\n  padding: 2.2rem 2rem;\n  width: 100%;\n  cursor: pointer;\n  transition: all 250ms linear;\n  text-decoration: none;\n  font-weight: 300;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", " {\n    border-bottom: none;\n    width: auto;\n    font-size: 1.5rem;\n    line-height: 1.6rem;\n    text-transform: uppercase;\n    padding: 2.2rem 2.4rem;\n  }\n\n  ", "\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.5rem;\n  line-height: 1.6rem;\n  border-bottom: 0.1rem solid ", ";\n  padding: 2.2rem 2rem;\n  width: 100%;\n  cursor: pointer;\n  transition: all 250ms linear;\n  text-decoration: none;\n  font-weight: 300;\n\n  &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  ", " {\n    border-bottom: none;\n    width: auto;\n    font-size: 1.5rem;\n    line-height: 1.6rem;\n    text-transform: uppercase;\n    padding: 2.2rem 2.4rem;\n  }\n\n  ",
    "\n"])), path(['theme', 'color', 'white']), path(['theme', 'fontFamily']), path(['theme', 'color', 'white']), path(['theme', 'color', 'secondary']), path(['theme', 'color', 'white']), mediaQueries.md, is('isActive')(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n    color: ", ";\n    background-color: ", ";\n\n    &:visited {\n      color: ", ";\n    }\n  "], ["\n    color: ", ";\n    background-color: ", ";\n\n    &:visited {\n      color: ", ";\n    }\n  "])), path(['theme', 'color', 'white']), path(['theme', 'color', 'primary']), path(['theme', 'color', 'white'])));
var templateObject_1$9, templateObject_2$6, templateObject_3$4, templateObject_4$3, templateObject_5$2;

var NavBar = function (_a) {
    var links = _a.links, activeRoute = _a.activeRoute;
    var _b = useState(true), isOpen = _b[0], setIsOpen = _b[1];
    var handleToggleIsOpen = function () { return setIsOpen(!isOpen); };
    return (createElement(Container$2, null,
        createElement(LinksContainer, { isOpen: isOpen }, links.map(function (_a) {
            var id = _a.id, label = _a.label, component = _a.component, restLink = __rest(_a, ["id", "label", "component"]);
            return (createElement(StyledLink, __assign({ key: id, onClick: handleToggleIsOpen, isOpen: isOpen, as: component, isActive: (activeRoute.startsWith(restLink.to) && restLink.to.length > 1) ||
                    restLink.to === activeRoute }, restLink), label));
        })),
        createElement(Hamburger, { toggleOpen: handleToggleIsOpen, isOpen: isOpen })));
};

var Layout$1 = styled.section(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  padding: 0 2rem;\n  max-width: 80rem;\n\n  ", " {\n    padding: 0 2.4rem;\n  }\n"], ["\n  padding: 0 2rem;\n  max-width: 80rem;\n\n  ", " {\n    padding: 0 2.4rem;\n  }\n"])), mediaQueries.md);
var templateObject_1$a;

var StyledSelect = styled.select(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  ", "\n\n  -webkit-appearance: none;\n  background-color: ", ";\n  background-image: linear-gradient(\n      45deg,\n      transparent 50%,\n      ", " 50%\n    ),\n    linear-gradient(\n      135deg,\n      ", " 50%,\n      transparent 50%\n    );\n  background-position: calc(100% - 10px) calc(50%), calc(100% - 5px) calc(50%);\n  background-size: 5px 5px, 5px 5px, 1px 1.5rem;\n  background-repeat: no-repeat;\n"], ["\n  ", "\n\n  -webkit-appearance: none;\n  background-color: ", ";\n  background-image: linear-gradient(\n      45deg,\n      transparent 50%,\n      ", " 50%\n    ),\n    linear-gradient(\n      135deg,\n      ", " 50%,\n      transparent 50%\n    );\n  background-position: calc(100% - 10px) calc(50%), calc(100% - 5px) calc(50%);\n  background-size: 5px 5px, 5px 5px, 1px 1.5rem;\n  background-repeat: no-repeat;\n"])), inputMixin(), function (_a) {
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
    return (createElement(FormElement, { id: id, error: error, label: label },
        createElement(StyledSelect, __assign({ id: id, error: error }, rest), options.map(function (_a) {
            var optionLabel = _a.label, optionValue = _a.value;
            return (createElement("option", { selected: value === optionValue, key: optionValue, value: optionValue }, optionLabel));
        }))));
};

var SpinnerComponent = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 0.3rem solid ", ";\n  border-top-color: ", ";\n  animation: ", " 1.5s linear infinite;\n"], ["\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 0.3rem solid ", ";\n  border-top-color: ", ";\n  animation: ", " 1.5s linear infinite;\n"])), path(['theme', 'color', 'primary']), path(['theme', 'color', 'white']), animation.spin);
var Spinner = function () { return createElement(SpinnerComponent, null); };
var templateObject_1$c;

var StyledTextarea = styled.textarea(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  height: 10rem;\n\n  ", "\n"], ["\n  height: 10rem;\n\n  ", "\n"])), inputMixin());
var templateObject_1$d;

var Textarea = function (_a) {
    var id = _a.id, error = _a.error, label = _a.label, rest = __rest(_a, ["id", "error", "label"]);
    return (createElement(FormElement, { id: id, error: error, label: label },
        createElement(StyledTextarea, __assign({ id: id, error: error }, rest))));
};

var H1 = styled.h1(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 4.6rem;\n  line-height: 1.2;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 4.6rem;\n  line-height: 1.2;\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'text']));
var H2 = styled.h2(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 3.6rem;\n  line-height: 1.25;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 3.6rem;\n  line-height: 1.25;\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'text']));
var H3 = styled.h3(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.8rem;\n  line-height: 1.3;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.8rem;\n  line-height: 1.3;\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'text']));
var H4 = styled.h4(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.2rem;\n  line-height: 1.35;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 2.2rem;\n  line-height: 1.35;\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'text']));
var H5 = styled.h5(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.8rem;\n  line-height: 1.5;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.8rem;\n  line-height: 1.5;\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'text']));
var H6 = styled.h6(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 1.4;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n  line-height: 1.4;\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'text']));
var P = styled.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n"], ["\n  font-family: ", ";\n  color: ", ";\n  font-weight: 300;\n  font-size: 1.6rem;\n"])), path(['theme', 'fontFamily']), path(['theme', 'color', 'text']));
var A = styled.a(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 300;\n  text-decoration: none;\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  font-weight: 300;\n  text-decoration: none;\n\n  &:visited {\n    color: ", ";\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])), path(['theme', 'color', 'primary']), path(['theme', 'fontFamily']), path(['theme', 'color', 'primary']));
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

var Margin = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), is('isInline')(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n    display: inline;\n  "], ["\n    display: inline;\n  "]))), is('margin')(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n    margin: ", ";\n  "], ["\n    margin: ", ";\n  "])), path(['margin'])), is('horizontal')(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n    margin-right: ", "rem;\n    margin-left: ", "rem;\n  "], ["\n    margin-right: ", "rem;\n    margin-left: ", "rem;\n  "])), path(['horizontal']), path(['horizontal'])), is('vertical')(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n    margin-top: ", "rem;\n    margin-bototm: ", "rem;\n  "], ["\n    margin-top: ", "rem;\n    margin-bototm: ", "rem;\n  "])), path(['vertical']), path(['horizontal'])), is('top')(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n    margin-top: ", "rem;\n  "], ["\n    margin-top: ", "rem;\n  "])), path(['top'])), is('right')(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n    margin-right: ", "rem;\n  "], ["\n    margin-right: ", "rem;\n  "])), path(['right'])), is('bottom')(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n    margin-bottom: ", "rem;\n  "], ["\n    margin-bottom: ", "rem;\n  "])), path(['bottom'])), is('left')(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n    margin-left: ", "rem;\n  "], ["\n    margin-left: ", "rem;\n  "])), path(['left'])));
var templateObject_1$f, templateObject_2$8, templateObject_3$6, templateObject_4$5, templateObject_5$4, templateObject_6$2, templateObject_7$1, templateObject_8$1, templateObject_9;

export { Alert, Button, Input, Layout, Margin, NavBar, Layout$1 as Section, Select, Spinner, Textarea, index as Typography, animation, createGlobalStyles as global, mediaQueries as mq, theme };
//# sourceMappingURL=index.es.js.map
