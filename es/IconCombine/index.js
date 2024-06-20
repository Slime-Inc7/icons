import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["Icon", "style", "Text", "color", "size", "spaceMultiple", "textMultiple", "extra", "extraStyle", "showText", "showLogo", "extraClassName", "iconProps"];
import { forwardRef } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var IconCombine = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var Icon = _ref.Icon,
    style = _ref.style,
    Text = _ref.Text,
    color = _ref.color,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 24 : _ref$size,
    _ref$spaceMultiple = _ref.spaceMultiple,
    spaceMultiple = _ref$spaceMultiple === void 0 ? 1 : _ref$spaceMultiple,
    _ref$textMultiple = _ref.textMultiple,
    textMultiple = _ref$textMultiple === void 0 ? 1 : _ref$textMultiple,
    extra = _ref.extra,
    extraStyle = _ref.extraStyle,
    _ref$showText = _ref.showText,
    showText = _ref$showText === void 0 ? true : _ref$showText,
    _ref$showLogo = _ref.showLogo,
    showLogo = _ref$showLogo === void 0 ? true : _ref$showLogo,
    extraClassName = _ref.extraClassName,
    iconProps = _ref.iconProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsxs(Flexbox, _objectSpread(_objectSpread({
    align: 'center',
    flex: 'none',
    horizontal: true,
    justify: 'flex-start',
    ref: ref,
    style: _objectSpread({
      color: color
    }, style)
  }, rest), {}, {
    children: [showLogo && /*#__PURE__*/_jsx(Icon, _objectSpread(_objectSpread({
      size: size
    }, iconProps), {}, {
      style: _objectSpread({
        marginRight: size * spaceMultiple
      }, iconProps === null || iconProps === void 0 ? void 0 : iconProps.style)
    })), showText && Text && /*#__PURE__*/_jsx(Text, {
      size: size * textMultiple
    }), extra && /*#__PURE__*/_jsx("span", {
      className: extraClassName,
      style: _objectSpread({
        fontSize: size * textMultiple * 0.95,
        lineHeight: 1
      }, extraStyle),
      children: extra
    })]
  }));
});
export default IconCombine;