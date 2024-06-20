import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "placement", "size", "onClick"];
import { ActionIcon } from '@lobehub/ui';
import { Download } from 'lucide-react';
import { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
var DownloadButton = /*#__PURE__*/memo(function (_ref) {
  var className = _ref.className,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'right' : _ref$placement,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'site' : _ref$size,
    onClick = _ref.onClick,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ActionIcon, _objectSpread(_objectSpread({}, rest), {}, {
    className: className,
    glass: true,
    icon: Download,
    onClick: onClick,
    placement: placement,
    size: size,
    title: 'Download'
  }));
});
export default DownloadButton;