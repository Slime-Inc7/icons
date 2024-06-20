import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["background", "size"];
import { memo } from 'react';
import IconAvatar from "../../IconAvatar";
import { COLOR_GRADIENT, TITLE } from "../style";
import Mono from "./Mono";
import { jsx as _jsx } from "react/jsx-runtime";
var Avatar = /*#__PURE__*/memo(function (_ref) {
  var background = _ref.background,
    size = _ref.size,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(IconAvatar, _objectSpread({
    Icon: Mono,
    "aria-label": TITLE,
    background: background || COLOR_GRADIENT,
    iconStyle: {
      marginLeft: -size * 0.05
    },
    size: size
  }, rest));
});
export default Avatar;