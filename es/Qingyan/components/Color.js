import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "style"];
import { forwardRef } from 'react';
import { TITLE } from "../style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Icon = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
    size = _ref$size === void 0 ? '1em' : _ref$size,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded);
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
    }), /*#__PURE__*/_jsxs("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/_jsx("path", {
        d: "M6.075 10.494C7.6 9.446 9.768 8.759 12.222 8.759c2.453 0 4.622.687 6.147 1.735.77.53 1.352 1.133 1.74 1.77C20 10 20 10 20.687 9.362a9.276 9.276 0 00-1.008-.8c-1.958-1.347-4.598-2.143-7.457-2.143-2.858 0-5.499.796-7.457 2.144-1.955 1.345-3.325 3.322-3.325 5.647 0 2.326 1.37 4.303 3.322 5.646C6.721 21.205 9.362 22 12.22 22c2.859 0 5.5-.795 7.457-2.144C21.63 18.513 23 16.538 23 14.21c0-1.48-.554-2.817-1.46-3.94-.046 1.036-.41 2.03-1.012 2.937.099.325.149.663.15 1.003 0 1.33-.782 2.664-2.313 3.717-1.524 1.048-3.692 1.735-6.146 1.735-2.453 0-4.623-.687-6.147-1.735C4.544 16.874 3.76 15.54 3.76 14.21c.003-1.33.785-2.663 2.315-3.716z",
        fill: "#3762FF"
      }), /*#__PURE__*/_jsx("path", {
        d: "M3.747 11.494c-.62 1.77-.473 3.365.332 4.51.806 1.144 2.254 1.813 4.117 1.813 1.86 0 4.029-.68 6.021-2.1 1.993-1.42 3.35-3.251 3.967-5.017.62-1.769.473-3.364-.332-4.51-.806-1.143-2.254-1.812-4.117-1.812-1.86 0-4.029.68-6.021 2.099-1.993 1.42-3.35 3.252-3.967 5.017zm-2.228-.79c.8-2.28 2.487-4.498 4.83-6.167C8.691 2.866 11.33 2 13.734 2c2.4 0 4.678.874 6.045 2.817 1.366 1.943 1.431 4.394.633 6.674-.8 2.282-2.487 4.499-4.83 6.168-2.344 1.67-4.981 2.536-7.387 2.537-2.4 0-4.678-.874-6.045-2.817-1.368-1.943-1.431-4.396-.633-6.674h.002z",
        fill: "#1041F3"
      })]
    })]
  }));
});
export default Icon;