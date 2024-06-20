import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import { memo } from 'react';
import IconCombine from "../../IconCombine";
import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from "../style";
import Mono from "./Mono";
import Text from "./Text";
import { jsx as _jsx } from "react/jsx-runtime";
var Combine = /*#__PURE__*/memo(function (_ref) {
  var rest = Object.assign({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_jsx(IconCombine, _objectSpread({
    Icon: Mono,
    Text: Text,
    "aria-label": TITLE,
    spaceMultiple: SPACE_MULTIPLE,
    textMultiple: TEXT_MULTIPLE
  }, rest));
});
export default Combine;