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
      fill: "none",
      fillRule: "nonzero",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M15 6v4h-2V6h2zm4-4v4h-2V2h2zM3 2H1h2zM1 2h2v20H1V2zm8 12h2v4H9v-4zm8 0h2v8h-2v-8z",
        fill: "#000"
      }), /*#__PURE__*/_jsx("path", {
        d: "M19 2h4v4h-4V2zM3 2h4v4H3V2z",
        fill: "#F7D046"
      }), /*#__PURE__*/_jsx("path", {
        d: "M15 10V6h8v4h-8zM3 10V6h8v4H3z",
        fill: "#F2A73B"
      }), /*#__PURE__*/_jsx("path", {
        d: "M3 14v-4h20v4z",
        fill: "#EE792F"
      }), /*#__PURE__*/_jsx("path", {
        d: "M11 14h4v4h-4v-4zm8 0h4v4h-4v-4zM3 14h4v4H3v-4z",
        fill: "#EB5829"
      }), /*#__PURE__*/_jsx("path", {
        d: "M19 18h4v4h-4v-4zM3 18h4v4H3v-4z",
        fill: "#EA3326"
      })]
    })]
  }));
});
export default Icon;