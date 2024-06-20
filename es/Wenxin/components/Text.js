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
      lineHeight: 1,
      width: 'fit-content'
    }, style),
    viewBox: "0 0 47 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M14.205 2.235H10.59v1.878H2.149v2.28H4.75c1.415 4.332 3.262 7.642 5.478 10.077C8.038 17.998 5.307 19.063 2 19.635V22c3.878-.142 7.345-1.256 10.293-3.594 2.949 2.34 6.417 3.452 10.294 3.594v-2.365c-3.307-.572-6.038-1.637-8.229-3.165 2.217-2.435 4.064-5.745 5.478-10.076h2.75v-2.28h-8.382V2.234h.001zm-1.91 12.499c-2.137-2.165-3.541-4.958-4.26-8.339h8.522c-.718 3.38-2.123 6.174-4.26 8.339h-.002zm12.812-4.09c0 3.295-.491 7.58-.692 9.186h2.892c.227-1.867.67-5.916.67-9.186V6.173h-2.872v4.47h.002zm7.64-7.254v14.507c0 .804.436 1.377 1.396 1.377h1.244l6.023-.001v2.4h-7.202v-.026c-.338-.004-.74-.006-1.216-.006-2.554 0-3.313-.886-3.313-3.744V3.39h3.067zM43.89 6.06C44.453 9.666 45 14.418 45 19.275h-2.872c0-4.84-.582-9.655-1.153-13.213zM37.993 2c.36 2.315.733 5.556.733 9.034V16h-2.87v-4.967c0-3.5-.41-6.803-.774-9.034h2.911z"
    })]
  }));
});
export default Icon;