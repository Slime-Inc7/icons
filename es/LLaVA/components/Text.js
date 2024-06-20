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
    viewBox: "0 0 82 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M2 21.604V0h3.3v18.8h9.205v2.804H2zm15.549 0V0h3.3v18.8h9.205v2.804H17.549zM39.037 5.08c1.32 0 2.408.275 3.266.825.858.55 1.496 1.33 1.914 2.342.418 1.011.627 2.232.627 3.661v9.697h-2.706l-.23-1.847h-.133a13.662 13.662 0 01-2.392 1.583c-.847.44-1.765.66-2.755.66-.923 0-1.743-.187-2.458-.56a4.106 4.106 0 01-1.682-1.617c-.407-.704-.61-1.528-.61-2.474 0-1.825.775-3.2 2.325-4.123 1.551-.923 4.009-1.572 7.374-1.946 0-.593-.093-1.16-.28-1.698a2.53 2.53 0 00-.973-1.287c-.462-.318-1.09-.478-1.881-.478-.858 0-1.677.154-2.458.462-.78.308-1.523.682-2.227 1.121l-1.22-2.243a16.02 16.02 0 011.847-1.006 12.302 12.302 0 012.194-.775 9.97 9.97 0 012.458-.297zm2.54 8.51c-1.627.198-2.92.456-3.876.775-.957.32-1.64.704-2.046 1.155-.407.45-.61.984-.61 1.6 0 .791.247 1.357.742 1.698.495.34 1.105.511 1.831.511.704 0 1.37-.16 1.996-.478.627-.319 1.282-.786 1.963-1.402V13.59zM45.645 0h3.497l3.81 13.672.628 2.276c.209.758.434 1.555.676 2.39h.132c.181-.626.354-1.23.516-1.814l.478-1.714.84-2.929.179-.634L59.766 0h3.365l-6.928 21.604h-3.86L45.644 0zm27.162 0L80 21.604h-3.497l-1.86-6.201H67.06l-1.875 6.201H61.82L69.013 0h3.794zm-1.88 2.606h-.132a117.461 117.461 0 01-.974 3.644c-.34 1.199-.698 2.392-1.072 3.58l-.899 2.967h6.011l-.889-2.968a102.44 102.44 0 01-1.055-3.579c-.33-1.198-.66-2.413-.99-3.644z"
    })]
  }));
});
export default Icon;