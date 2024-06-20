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
        d: "M0 10h4.8v5H0z",
        opacity: ".08"
      }), /*#__PURE__*/_jsx("path", {
        d: "M4.8 10h4.8v5H4.8z",
        opacity: ".2"
      }), /*#__PURE__*/_jsx("path", {
        d: "M9.6 10h4.8v5H9.6z",
        opacity: ".3"
      }), /*#__PURE__*/_jsx("path", {
        d: "M14.4 10h4.8v5h-4.8z",
        opacity: ".5"
      }), /*#__PURE__*/_jsx("path", {
        d: "M19.2 10H24v5h-4.8z",
        opacity: ".6"
      })]
    })]
  }));
});
export default Icon;