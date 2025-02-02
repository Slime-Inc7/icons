import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { Highlighter } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css;
  return {
    code: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      pre {\n        padding: 8px !important;\n      }\n\n      code {\n        font-size: 12px;\n        text-wrap: initial;\n      }\n    "])))
  };
});
var Preview = /*#__PURE__*/memo(function (_ref2) {
  var svg = _ref2.svg,
    title = _ref2.title,
    viewbox = _ref2.viewbox;
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsxs(Flexbox, {
    flex: 'none',
    gap: 16,
    style: {
      position: 'relative',
      width: '100%'
    },
    children: [/*#__PURE__*/_jsx(Flexbox, {
      align: 'center',
      gap: 8,
      horizontal: true,
      children: /*#__PURE__*/_jsx("h2", {
        style: {
          lineHeight: 1,
          margin: 0
        },
        children: title
      })
    }), /*#__PURE__*/_jsx(Highlighter, {
      className: styles.code,
      language: 'tsx',
      type: 'ghost',
      children: "import { forwardRef } from 'react';\nimport type { IconType } from '@/types';\n\nimport { TITLE } from '../style';\n\nconst Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {\n  return (\n    <svg\n      fill=\"currentColor\"\n      fillRule=\"evenodd\"\n      height={size}\n      ref={ref}\n      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}\n      viewBox=\"".concat(viewbox, "\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      {...rest}\n    >\n      <title>{TITLE}</title>\n      ").concat(svg, "\n    </svg>\n  );\n});\n\nexport default Icon;\n")
    })]
  });
});
export default Preview;