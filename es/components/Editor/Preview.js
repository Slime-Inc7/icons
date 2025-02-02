import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { Highlighter, Tag } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { forwardRef } from 'react';
import { Flexbox } from 'react-layout-kit';
import IconPreview from "../IconPreview";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css;
  return {
    code: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      flex: 1;\n      height: 96px;\n\n      pre {\n        padding: 8px !important;\n      }\n\n      code {\n        font-size: 12px;\n        text-wrap: initial;\n      }\n    "])))
  };
});
var Preview = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var svg = _ref2.svg,
    title = _ref2.title,
    precent = _ref2.precent;
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsxs(Flexbox, {
    flex: 'none',
    gap: 16,
    style: {
      position: 'relative',
      width: '100%'
    },
    children: [/*#__PURE__*/_jsxs(Flexbox, {
      align: 'center',
      gap: 8,
      horizontal: true,
      children: [/*#__PURE__*/_jsx("h2", {
        style: {
          lineHeight: 1,
          margin: 0
        },
        children: title
      }), precent && /*#__PURE__*/_jsx(Tag, {
        children: precent
      })]
    }), /*#__PURE__*/_jsxs(Flexbox, {
      gap: 8,
      horizontal: true,
      ref: ref,
      children: [/*#__PURE__*/_jsx(IconPreview, {
        children: svg
      }), /*#__PURE__*/_jsx(Highlighter, {
        className: styles.code,
        language: 'tsx',
        type: 'ghost',
        children: svg
      })]
    })]
  });
});
export default Preview;