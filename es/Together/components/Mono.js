import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "style"];
import { forwardRef } from 'react';
import { TITLE } from "../style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Icon = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? '1em' : _ref$size,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs("svg", _objectSpread(_objectSpread({
    fill: "currentColor",
    fillRule: "evenodd",
    height: size,
    ref: ref,
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    viewBox: "0 0 24 24",
    width: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsxs("g", {
      children: [/*#__PURE__*/_jsx("path", {
        d: "M17.385 11.23a4.615 4.615 0 100-9.23 4.615 4.615 0 000 9.23zm0 10.77a4.615 4.615 0 100-9.23 4.615 4.615 0 000 9.23zm-10.77 0a4.615 4.615 0 100-9.23 4.615 4.615 0 000 9.23z",
        opacity: ".2"
      }), /*#__PURE__*/_jsx("circle", {
        cx: "6.615",
        cy: "6.615",
        r: "4.615"
      })]
    })]
  }));
});
export default Icon;