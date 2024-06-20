import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type"];
import { memo } from 'react';
import IconCombine from "../../IconCombine";
import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from "../style";
import Avatar from "./Avatar";
import Mono from "./Mono";
import Text from "./Text";
import { jsx as _jsx } from "react/jsx-runtime";
var Combine = /*#__PURE__*/memo(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'mono' : _ref$type,
    rest = _objectWithoutProperties(_ref, _excluded);
  var Icon = type === 'color' ? Avatar : Mono;
  return /*#__PURE__*/_jsx(IconCombine, _objectSpread({
    Icon: Icon,
    Text: Text,
    "aria-label": TITLE,
    iconProps: type === 'color' ? {
      shape: 'square'
    } : {},
    spaceMultiple: SPACE_MULTIPLE,
    textMultiple: TEXT_MULTIPLE
  }, rest));
});
export default Combine;