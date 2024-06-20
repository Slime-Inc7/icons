import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import * as Icons from "../..";
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import IconPreview from "../IconPreview";
import { jsx as _jsx } from "react/jsx-runtime";
var data = Object.values(Icons).filter(function (icon) {
  return icon === null || icon === void 0 ? void 0 : icon.colorPrimary;
});
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token;
  return {
    item: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 96px;\n    height: 96px;\n    background: ", ";\n    border: none;\n  "])), token.colorBgContainer)
  };
});
var Dashboard = /*#__PURE__*/memo(function () {
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  return /*#__PURE__*/_jsx(Flexbox, {
    align: 'center',
    gap: 4,
    horizontal: true,
    justify: 'center',
    style: {
      flexWrap: 'wrap',
      maxWidth: 960
    },
    children: data.map(function (Icon, index) {
      var IconRender = Icon.Color || Icon;
      return /*#__PURE__*/_jsx(IconPreview, {
        className: styles.item,
        children: /*#__PURE__*/_jsx(IconRender, {
          size: 48
        })
      }, index);
    })
  });
});
export default Dashboard;