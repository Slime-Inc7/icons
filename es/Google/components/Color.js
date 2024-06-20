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
        d: "M24 12.267c0-.987-.082-1.707-.258-2.454H12.245v4.454h6.748c-.136 1.106-.87 2.773-2.503 3.893l-.023.149 3.635 2.76.252.024C22.667 19 24 15.92 24 12.267",
        fill: "#4285F4"
      }), /*#__PURE__*/_jsx("path", {
        d: "M12.245 24c3.306 0 6.081-1.067 8.109-2.907L16.49 18.16c-1.034.707-2.422 1.2-4.245 1.2a7.358 7.358 0 01-6.966-4.987l-.144.012-3.78 2.867-.049.135C3.32 21.307 7.456 24 12.245 24",
        fill: "#34A853"
      }), /*#__PURE__*/_jsx("path", {
        d: "M5.279 14.373A7.254 7.254 0 014.87 12c0-.827.15-1.627.394-2.373l-.007-.16-3.827-2.912-.125.058A11.816 11.816 0 000 12c0 1.933.476 3.76 1.306 5.387l3.973-3.014",
        fill: "#FBBC05"
      }), /*#__PURE__*/_jsx("path", {
        d: "M12.245 4.64c2.3 0 3.85.973 4.735 1.787l3.455-3.307C18.313 1.187 15.551 0 12.245 0 7.455 0 3.32 2.693 1.306 6.613l3.96 3.014c.993-2.894 3.74-4.987 6.979-4.987",
        fill: "#EB4335"
      })]
    })]
  }));
});
export default Icon;