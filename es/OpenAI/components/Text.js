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
    viewBox: "0 0 84 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M2 10.955c0 5.276 3.376 8.955 8.054 8.955 4.678 0 8.054-3.679 8.054-8.955S14.732 2 10.054 2C5.423 2 2.068 5.606 2 10.797L2 10.955zm13.021 0c0 3.775-2.05 6.22-4.967 6.22-2.918 0-4.968-2.445-4.968-6.22 0-3.776 2.05-6.22 4.968-6.22 2.917 0 4.967 2.444 4.967 6.22zm11.778 8.955c3.545 0 5.57-3.001 5.57-6.607 0-3.607-2.025-6.608-5.57-6.608-1.64 0-2.845.654-3.64 1.598V6.937h-2.894V24h2.893v-5.688c.796.944 2.002 1.598 3.641 1.598zm-3.713-6.97c0-2.397 1.35-3.703 3.135-3.703 2.097 0 3.23 1.645 3.23 4.066 0 2.42-1.133 4.066-3.23 4.066-1.785 0-3.135-1.332-3.135-3.68v-.75zM40.2 19.91c2.532 0 4.533-1.331 5.425-3.558l-2.483-.944c-.386 1.307-1.52 2.033-2.942 2.033-1.857 0-3.159-1.331-3.376-3.51h8.874v-.967c0-3.485-1.953-6.269-5.619-6.269-3.665 0-6.028 2.88-6.028 6.608 0 3.92 2.532 6.607 6.15 6.607zm-.145-10.77c1.833 0 2.701 1.21 2.725 2.614H36.97c.434-1.719 1.591-2.614 3.086-2.614zm7.814 10.504h2.894v-7.455c0-1.815 1.326-2.783 2.628-2.783 1.591 0 2.218 1.137 2.218 2.71v7.528h2.894V11.27c0-2.735-1.592-4.575-4.244-4.575-1.64 0-2.773.75-3.496 1.598V6.937h-2.894v12.707zM66.978 2.266l-6.56 17.378h3.063l1.471-3.97h7.475l1.495 3.97h3.11L70.475 2.266h-3.496zm1.687 3.437l2.75 7.26h-5.45l2.7-7.26zM82 2.317h-3.086v17.377H82V2.317z"
    })]
  }));
});
export default Icon;