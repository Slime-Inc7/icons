import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "style"];
import { forwardRef } from 'react';
import { useFillIds } from "../../hooks/useFillId";
import { TITLE } from "../style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Icon = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? '1em' : _ref$size,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useFillIds = useFillIds(TITLE, 2),
    _useFillIds2 = _slicedToArray(_useFillIds, 2),
    a = _useFillIds2[0],
    b = _useFillIds2[1];
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
    }), /*#__PURE__*/_jsxs("defs", {
      children: [/*#__PURE__*/_jsxs("linearGradient", {
        id: a.id,
        x1: "34.383%",
        x2: "57.623%",
        y1: "37.415%",
        y2: "59.204%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#6595F1"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#336BD7"
        })]
      }), /*#__PURE__*/_jsxs("linearGradient", {
        id: b.id,
        x1: "50%",
        x2: "50%",
        y1: "0%",
        y2: "100%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#6595F1"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#336BD7"
        })]
      })]
    }), /*#__PURE__*/_jsxs("g", {
      fill: "none",
      fillRule: "nonzero",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M2.169 8.748l.1-.695C2.513 6.4 3.19 4.94 4.262 3.65a9.76 9.76 0 013.383-2.646C8.812.454 10.04.102 11.35.022c1.136-.07 2.241.029 3.333.324a8.45 8.45 0 011.665.644c.695.358.793.911.229 1.438a22.639 22.639 0 01-4.309 3.188 23.433 23.433 0 01-3.986 1.786 27.94 27.94 0 01-3.64.957c-.449.088-1.274.218-2.474.39z",
        fill: a.fill
      }), /*#__PURE__*/_jsx("path", {
        d: "M4.148 9.181c1.759.41 3.544.66 5.343.789 1.572.113 3.15.11 4.727.036 1.571-.073 3.118-.286 4.658-.569.536-.098 1.055-.262 1.613-.247 1.145.029 1.934.635 2.208 1.715.395 1.551.415 3.105-.007 4.646a9.535 9.535 0 01-2.305 4.101 11.066 11.066 0 01-4.22 2.786c-1.715.64-3.493.846-5.32.68a8.637 8.637 0 01-1.4-.224.36.36 0 00-.292.053C7.93 23.669 6.6 24.01 5.176 24a7.643 7.643 0 01-1.198-.114c-.77-.126-1.044-.823-.568-1.43.26-.33.496-.67.642-1.064.067-.18.13-.361.184-.546a.698.698 0 00-.197-.75c-.886-.861-1.628-1.83-2.143-2.946-1.078-2.334-1.19-4.717-.302-7.136a9.826 9.826 0 01.584-1.275l.072.011c.921.207 1.554.351 1.898.431z",
        fill: b.fill
      })]
    })]
  }));
});
export default Icon;