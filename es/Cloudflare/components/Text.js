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
    viewBox: "0 0 242 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M28.4 2.395h5.386v14.606h9.326v4.736H28.4V2.395zM16.71 14.369c-.787 1.71-2.363 2.894-4.465 2.894-2.89 0-4.86-2.368-4.86-5.263 0-2.764 1.97-5.132 4.86-5.132 2.232 0 3.81 1.316 4.597 3.158h5.647C21.571 5.421 17.5 2 12.377 2 6.467 2 2 6.474 2 12s4.335 10 10.377 10c5.122 0 9.062-3.289 10.112-7.763H16.71v.132zM224.37 2.395h15.499v4.606h-10.114v2.894h9.194v4.21h-9.194v3.027H240v4.605h-15.63V2.395zm-24.693 0h9.062c2.89 0 4.991.79 6.305 2.105 1.182 1.052 1.708 2.632 1.708 4.474 0 2.894-1.576 4.868-3.94 5.921l4.596 6.71h-6.174l-3.939-5.79h-2.365v5.79h-5.386V2.395h.133zm8.8 9.211c1.838 0 2.889-.921 2.889-2.238 0-1.579-1.05-2.237-2.89-2.237l-3.546.001v4.605h3.547v-.13zm-29.028-9.343h5.122l8.144 19.474h-5.78l-1.444-3.421h-7.486l-1.315 3.42h-5.516l8.275-19.473zm4.598 11.842l-2.103-5.526-2.232 5.526h4.335zm-33.232-11.71h5.386v14.606h9.325v4.736h-14.711V2.395zm-22.854 0h15.367v4.737h-9.981v3.158h9.062v4.474h-9.062v6.973h-5.386V2.395zm-26.007 0h7.488c6.829 0 10.9 3.947 10.9 9.473 0 5.526-4.071 9.737-11.032 9.737h-7.356V2.395zm7.488 14.606c3.151 0 5.253-1.712 5.253-4.87 0-3.025-2.102-4.868-5.253-4.868h-2.233v9.87h2.233V17zm-33.625-3.816V2.395H81.2v10.658c0 2.763 1.445 4.078 3.547 4.078 2.101 0 3.547-1.315 3.547-3.946V2.263h5.385v10.659c0 6.183-3.548 8.946-9.063 8.946-5.386.132-8.8-2.63-8.8-8.683zm-27.19-1.053C48.628 6.474 53.095 2 59.006 2c5.91 0 10.375 4.474 10.375 10s-4.465 10-10.375 10c-6.042 0-10.377-4.342-10.377-9.868zm15.237 0c0-2.896-1.97-5.264-4.99-5.264-2.891 0-4.861 2.368-4.861 5.132s1.97 5.263 4.86 5.263c3.02 0 4.99-2.368 4.99-5.131z"
    })]
  }));
});
export default Icon;