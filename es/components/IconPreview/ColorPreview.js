import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2;
import { CopyButton } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token,
    cx = _ref.cx;
  return {
    btn: cx('copy-button', css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: absolute;\n        top: 4px;\n        right: 4px;\n        opacity: 0;\n      "])))),
    container: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: relative;\n\n      flex: none;\n\n      width: 98px;\n      height: 98px;\n\n      font-family: ", ";\n      line-height: 1;\n\n      background: ", ";\n      border: 1px solid ", ";\n      border-radius: ", "px;\n\n      &:hover {\n        .copy-button {\n          opacity: 1;\n        }\n      }\n    "])), token.fontFamilyCode, token.colorBgContainer, token.colorBorder, token.borderRadius)
  };
});
var IconPreview = /*#__PURE__*/memo(function (_ref2) {
  var color = _ref2.color;
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsxs(Flexbox, {
    align: 'center',
    className: styles.container,
    justify: 'center',
    style: {
      background: color
    },
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        color: '#fff'
      },
      children: color
    }), /*#__PURE__*/_jsx(CopyButton, {
      className: styles.btn,
      content: color
    })]
  });
});
export default IconPreview;