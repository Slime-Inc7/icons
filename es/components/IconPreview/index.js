import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _excluded = ["className", "children"];
var _templateObject, _templateObject2, _templateObject3;
import { createStyles } from 'antd-style';
import { memo, useRef } from 'react';
import { Flexbox } from 'react-layout-kit';
import DownloadButton from "../DownloadButton";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token,
    cx = _ref.cx;
  return {
    btn: cx('copy-button', css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        position: absolute;\n        top: 4px;\n        right: 4px;\n        opacity: 0;\n      "])))),
    container: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: relative;\n\n      flex: none;\n\n      padding: 12px;\n\n      line-height: 1;\n\n      background: ", ";\n      border: 1px solid ", ";\n      border-radius: ", "px;\n\n      &:hover {\n        .copy-button {\n          opacity: 1;\n        }\n      }\n    "])), token.colorBgContainer, token.colorBorder, token.borderRadius),
    inner: css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      display: flex;\n      flex: none;\n      align-items: center;\n      justify-content: center;\n\n      width: auto;\n      min-width: 72px;\n      height: 72px;\n\n      font-size: 72px;\n      line-height: 1;\n    "])))
  };
});
var IconPreview = /*#__PURE__*/memo(function (_ref2) {
  var className = _ref2.className,
    children = _ref2.children,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _useStyles = useStyles(),
    cx = _useStyles.cx,
    styles = _useStyles.styles;
  var ref = useRef(null);
  var isString = typeof children === 'string';
  return /*#__PURE__*/_jsxs(Flexbox, _objectSpread(_objectSpread({
    align: 'center',
    className: cx(styles.container, className),
    flex: 'none',
    justify: 'center'
  }, rest), {}, {
    children: [isString ? /*#__PURE__*/_jsx("div", {
      className: styles.inner,
      dangerouslySetInnerHTML: {
        __html: children
      },
      ref: ref
    }) : /*#__PURE__*/_jsx("div", {
      className: styles.inner,
      ref: ref,
      children: children
    }), /*#__PURE__*/_jsx(DownloadButton, {
      className: styles.btn,
      onClick: function onClick() {
        var _ref$current;
        var svgString = String(ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 || (_ref$current = _ref$current.querySelector('svg')) === null || _ref$current === void 0 ? void 0 : _ref$current.outerHTML);
        var blob = new Blob([svgString], {
          type: 'image/svg+xml;charset=utf-8'
        });
        var url = URL.createObjectURL(blob);
        var downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'icon.svg';
        document.body.append(downloadLink);
        downloadLink.click();
        downloadLink.remove();
        URL.revokeObjectURL(url);
      }
    })]
  }));
});
export default IconPreview;