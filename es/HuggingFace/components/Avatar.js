import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["background"];
import { memo } from 'react';
import IconAvatar from "../../IconAvatar";
import { COLOR_PRIMARY, TITLE } from "../style";
import Color from "./Color";
import { jsx as _jsx } from "react/jsx-runtime";
var Avatar = /*#__PURE__*/memo(function (_ref) {
  var background = _ref.background,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(IconAvatar, _objectSpread({
    Icon: Color,
    "aria-label": TITLE,
    background: background || COLOR_PRIMARY,
    color: '#3A3B45'
  }, rest));
});
export default Avatar;