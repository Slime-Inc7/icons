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
    viewBox: "0 0 26 25",
    width: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M12.57.982H.908v11.386h11.664V.982z"
    }), /*#__PURE__*/_jsx("path", {
      d: "M25.462.982H13.8v11.386h11.663V.982z"
    }), /*#__PURE__*/_jsx("path", {
      d: "M12.57 13.565H.908V24.95h11.664V13.565z"
    }), /*#__PURE__*/_jsx("path", {
      d: "M25.463 13.565H13.8V24.95h11.663V13.565z"
    })]
  }));
});
export default Icon;