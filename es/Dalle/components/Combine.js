import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["extraStyle", "size"];
import { memo } from 'react';
import IconCombine from "../../IconCombine";
import Mono from "../../OpenAI/components/Mono";
import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from "../style";
import Text from "./Text";
import { jsx as _jsx } from "react/jsx-runtime";
var Combine = /*#__PURE__*/memo(function (_ref) {
  var extraStyle = _ref.extraStyle,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(IconCombine, _objectSpread({
    Icon: Mono,
    Text: Text,
    "aria-label": TITLE,
    extraStyle: _objectSpread({
      fontSize: size * 0.85,
      marginLeft: size * SPACE_MULTIPLE
    }, extraStyle),
    size: size,
    spaceMultiple: SPACE_MULTIPLE,
    textMultiple: TEXT_MULTIPLE
  }, rest));
});
export default Combine;