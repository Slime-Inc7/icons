import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["iconProps"];
import { memo } from 'react';
import IconCombine from "../../IconCombine";
import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from "../style";
import Avatar from "./Avatar";
import Text from "./Text";
import { jsx as _jsx } from "react/jsx-runtime";
var Combine = /*#__PURE__*/memo(function (_ref) {
  var iconProps = _ref.iconProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(IconCombine, _objectSpread({
    Icon: Avatar,
    Text: Text,
    "aria-label": TITLE,
    iconProps: _objectSpread({
      shape: 'square'
    }, iconProps),
    spaceMultiple: SPACE_MULTIPLE,
    textMultiple: TEXT_MULTIPLE
  }, rest));
});
export default Combine;