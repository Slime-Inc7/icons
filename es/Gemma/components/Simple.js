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
    height: size,
    ref: ref,
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0Zm.031 4.5A14.281 14.281 0 0 1 9 9a14.742 14.742 0 0 1-4.5 3.063 14.281 14.281 0 0 1 4.5 3.03 14.281 14.281 0 0 1 3.031 4.5 14.742 14.742 0 0 1 3.063-4.5 14.281 14.281 0 0 1 4.5-3.03A14.742 14.742 0 0 1 15.094 9a14.74 14.74 0 0 1-3.063-4.5Z",
      fillRule: "evenodd"
    })]
  }));
});
export default Icon;