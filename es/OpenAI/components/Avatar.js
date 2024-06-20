import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["background", "type"];
import { memo } from 'react';
import IconAvatar from "../../IconAvatar";
import { COLOR_GPT_3, COLOR_GPT_4, COLOR_PRIMARY, TITLE } from "../style";
import Mono from "./Mono";
import { jsx as _jsx } from "react/jsx-runtime";
var Avatar = /*#__PURE__*/memo(function (_ref) {
  var background = _ref.background,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'normal' : _ref$type,
    rest = _objectWithoutProperties(_ref, _excluded);
  var bg;
  switch (type) {
    case 'gpt3':
      {
        bg = COLOR_GPT_3;
        break;
      }
    case 'gpt4':
      {
        bg = COLOR_GPT_4;
        break;
      }
    default:
      {
        bg = background || COLOR_PRIMARY;
      }
  }
  return /*#__PURE__*/_jsx(IconAvatar, _objectSpread({
    Icon: Mono,
    "aria-label": TITLE,
    background: bg
  }, rest));
});
export default Avatar;