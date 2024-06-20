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
      fill: "#E00054",
      fillRule: "nonzero",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M8.462 3.5h2.924l8.33 17h-1.46L10.617 4.942l-1.442.001z",
        opacity: ".8"
      }), /*#__PURE__*/_jsx("path", {
        d: "M5.474 20.5l2.817-5.366 2.873 5.366h5.541l-8.362-17L0 20.5z"
      }), /*#__PURE__*/_jsx("path", {
        d: "M12.768 3.501L21.113 20.5h1.46L14.238 3.504z",
        opacity: ".4"
      }), /*#__PURE__*/_jsx("path", {
        d: "M14.195 3.501L22.54 20.5H24L15.666 3.504z",
        opacity: ".2"
      }), /*#__PURE__*/_jsx("path", {
        d: "M11.34 3.501L19.683 20.5h1.464L12.81 3.504z",
        opacity: ".6"
      })]
    })]
  }));
});
export default Icon;