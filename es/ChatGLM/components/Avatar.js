import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "background", "iconStyle"];
import { memo } from 'react';
import IconAvatar from "../../IconAvatar";
import { COLOR_GRADIENT, TITLE } from "../style";
import Mono from "./Mono";
import { jsx as _jsx } from "react/jsx-runtime";
var Avatar = /*#__PURE__*/memo(function (_ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    background = _ref.background,
    iconStyle = _ref.iconStyle,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(IconAvatar, _objectSpread({
    Icon: Mono,
    "aria-label": TITLE,
    background: background || COLOR_GRADIENT,
    iconStyle: _objectSpread({
      marginLeft: size * 0.1
    }, iconStyle),
    size: size
  }, rest));
});
export default Avatar;