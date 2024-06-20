import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "style"];
import { forwardRef } from 'react';
import { useFillId } from "../../hooks/useFillId";
import { TITLE } from "../style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Icon = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? '1em' : _ref$size,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useFillId = useFillId(TITLE),
    id = _useFillId.id,
    fill = _useFillId.fill;
  return /*#__PURE__*/_jsxs("svg", _objectSpread(_objectSpread({
    height: size,
    ref: ref,
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1
    }, style),
    viewBox: "0 0 24 24",
    width: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("defs", {
      children: /*#__PURE__*/_jsxs("linearGradient", {
        id: id,
        x1: "0%",
        x2: "68.73%",
        y1: "100%",
        y2: "30.395%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#1C7DFF"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "52.021%",
          stopColor: "#1C69FF"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#F0DCD6"
        })]
      })
    }), /*#__PURE__*/_jsx("path", {
      d: "M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12",
      fill: fill,
      fillRule: "nonzero"
    })]
  }));
});
export default Icon;