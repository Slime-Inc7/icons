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
    viewBox: "0 0 98 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M21.186 12.67c0 2.649-.786 4.759-2.359 6.33-1.766 1.87-4.09 2.806-6.969 2.806-2.756 0-5.088-.953-6.996-2.86C2.954 17.04 2 14.693 2 11.904c0-2.789.954-5.137 2.862-7.043C6.77 2.953 9.102 2 11.858 2c1.396 0 2.712.247 3.949.741 1.236.495 2.252 1.192 3.047 2.092l-1.749 1.748c-.583-.706-1.338-1.258-2.266-1.655a7.49 7.49 0 00-2.981-.596c-2.067 0-3.816.715-5.247 2.145-1.413 1.448-2.12 3.257-2.12 5.428s.707 3.98 2.12 5.428c1.431 1.43 3.18 2.145 5.247 2.145 1.89 0 3.463-.53 4.717-1.588 1.254-1.06 1.979-2.516 2.173-4.37h-6.89v-2.277h9.196c.088.495.132.971.132 1.43m7.652-4.633c1.946 0 3.494.629 4.645 1.886 1.15 1.257 1.726 3.018 1.726 5.282l-.027.268H24.877c.036 1.284.464 2.318 1.285 3.102.82.785 1.802 1.177 2.944 1.177 1.57 0 2.802-.784 3.694-2.354l2.195 1.07a6.54 6.54 0 01-2.45 2.595C31.503 21.688 30.32 22 29 22c-1.927 0-3.516-.66-4.765-1.98-1.249-1.319-1.873-2.986-1.873-5.001 0-1.997.606-3.66 1.82-4.988 1.213-1.329 2.766-1.993 4.657-1.993m-.053 2.247c-.928 0-1.727.285-2.396.856-.67.57-1.11 1.337-1.325 2.3h7.522c-.071-.91-.442-1.663-1.111-2.26-.67-.598-1.566-.896-2.69-.896M39.247 21.53h-2.455V8.465h2.348v1.813h.107c.374-.64.947-1.173 1.721-1.6.774-.427 1.544-.64 2.309-.64.96 0 1.806.222 2.535.667a3.931 3.931 0 011.601 1.84c1.085-1.671 2.589-2.507 4.51-2.507 1.513 0 2.678.462 3.496 1.387.819.924 1.228 2.24 1.228 3.946v8.16h-2.455v-7.786c0-1.227-.223-2.112-.668-2.654-.444-.542-1.192-.813-2.241-.813-.943 0-1.735.4-2.375 1.2-.64.8-.961 1.742-.961 2.826v7.227h-2.455v-7.786c0-1.227-.223-2.112-.668-2.654-.444-.542-1.191-.813-2.241-.813-.943 0-1.735.4-2.375 1.2-.64.8-.961 1.742-.961 2.826v7.227zM61.911 3.93c0 .48-.17.89-.508 1.228a1.675 1.675 0 01-1.23.508c-.48 0-.89-.17-1.229-.508a1.673 1.673 0 01-.508-1.228c0-.481.17-.89.508-1.229a1.675 1.675 0 011.23-.508c.48 0 .89.17 1.23.508.338.338.507.748.507 1.228m-.11 4.514v13.088h-2.857V8.443h2.857zM80 3.93c0 .48-.17.89-.508 1.228a1.675 1.675 0 01-1.23.508c-.48 0-.89-.17-1.229-.508a1.673 1.673 0 01-.508-1.228c0-.481.17-.89.508-1.229a1.675 1.675 0 011.23-.508c.48 0 .89.17 1.23.508.338.338.507.748.507 1.228m-.11 4.514v13.088h-2.857V8.443h2.857zm-16.343.022h2.349v1.813h.107c.373-.64.947-1.173 1.721-1.6a4.935 4.935 0 012.415-.64c1.601 0 2.833.458 3.696 1.373.863.916 1.294 2.218 1.294 3.907v8.213h-2.455v-8.053c-.053-2.133-1.13-3.2-3.229-3.2-.978 0-1.797.395-2.455 1.187-.658.79-.987 1.737-.987 2.84v7.226h-2.456V8.465z"
    })]
  }));
});
export default Icon;