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
    fill: "currentColor",
    fillRule: "evenodd",
    height: size,
    ref: ref,
    style: _objectSpread({
      flex: 'none',
      lineHeight: 1,
      width: 'fit-content'
    }, style),
    viewBox: "0 0 64 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M37.925 2.039c4.142 0 7.509 3.368 7.509 7.528l-.004.244c-.128 4.047-3.437 7.284-7.505 7.284-4.15 0-7.509-3.368-7.509-7.528s3.36-7.528 7.509-7.528zm-11.144-.023c.26 0 .522.015.775.046l.015-.008a7.464 7.464 0 012.922.969L29.09 5.468a4.619 4.619 0 00-2.309-.6h-.253l-.253.016c-.338.03-.66.092-.982.177-.621.169-1.196.469-1.703.869a4.062 4.062 0 00-1.418 2.322l-.04.234-.03.235c-.007.077-.023.161-.023.238l-.014 2.713v2.593l-.016 2.522h-2.815l-.03-4.973V8.852c0-.139.015-.262.022-.392.023-.262.062-.523.115-.777.1-.523.269-1.03.491-1.515a6.998 6.998 0 011.948-2.484 7.465 7.465 0 012.754-1.391c.49-.131.99-.216 1.495-.254.123-.008.253-.023.376-.023h.376zM37.925 4.86a4.7 4.7 0 00-4.694 4.706 4.7 4.7 0 004.694 4.706 4.7 4.7 0 004.694-4.706l-.005-.216a4.7 4.7 0 00-4.689-4.49zM9.578 2C5.428 1.96 2.038 5.298 2 9.458c-.038 4.16 3.29 7.559 7.44 7.597h2.608v-2.822h-2.47c-2.592.031-4.717-2.053-4.748-4.652a4.7 4.7 0 014.64-4.76h.108c2.52 0 4.577 1.992 4.696 4.49l.005.216v6.936c0 2.576-2.093 4.676-4.655 4.706a4.663 4.663 0 01-3.267-1.376l-1.994 2A7.46 7.46 0 009.57 24h.1c4.096-.062 7.386-3.391 7.409-7.497V9.35c-.1-4.09-3.428-7.35-7.501-7.35zm44.929.038c-4.15 0-7.509 3.368-7.509 7.528s3.36 7.528 7.509 7.528h2.57v-2.822h-2.57a4.7 4.7 0 01-4.694-4.706 4.7 4.7 0 014.694-4.706A4.707 4.707 0 0159.16 8.94l.024.22v14.456H62V9.566c-.008-4.152-3.352-7.527-7.493-7.527z"
    })]
  }));
});
export default Icon;