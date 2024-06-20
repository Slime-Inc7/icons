import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { forwardRef } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
var IconAvatar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'circle' : _ref$shape,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#fff' : _ref$color,
    background = _ref.background,
    size = _ref.size,
    style = _ref.style,
    _ref$iconMultiple = _ref.iconMultiple,
    iconMultiple = _ref$iconMultiple === void 0 ? 0.75 : _ref$iconMultiple,
    Icon = _ref.Icon,
    iconStyle = _ref.iconStyle,
    iconClassName = _ref.iconClassName;
  return /*#__PURE__*/_jsx(Flexbox, {
    align: 'center',
    flex: 'none',
    justify: 'center',
    ref: ref,
    style: _objectSpread({
      background: background,
      borderRadius: shape === 'circle' ? '50%' : Math.floor(size * 0.1),
      color: color,
      height: size,
      width: size
    }, style),
    children: Icon && /*#__PURE__*/_jsx(Icon, {
      className: iconClassName,
      size: size * iconMultiple,
      style: iconStyle
    })
  });
});
export default IconAvatar;