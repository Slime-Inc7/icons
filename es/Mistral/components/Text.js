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
    viewBox: "0 0 52 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M2.57 2.14h1.796l.74 2.693.255 1.051h.047l.25-1.05.745-2.694h1.796v7.6H6.75V7.265c.013-.9.153-2.624.229-3.408h-.035l-.58 2.04-.589 1.83h-.83l-.6-1.83-.54-2.04h-.04l.018.182c.087.888.21 2.551.21 3.349V9.74H2.57v-7.6zm7.156 6.158h1.767V3.582H9.726V2.14h5.245v1.442h-1.766v4.716h1.766v1.443H9.726V8.298zm6.69.485l.982-1.182c.572.471 1.278.794 2.01.794.727 0 1.063-.283 1.063-.655 0-.547-.45-.68-1.165-.98l-.986-.423c-.838-.32-1.603-.966-1.603-2.072C16.717 3.006 17.845 2 19.489 2c.91 0 1.829.343 2.512.995l-.862 1.084c-.533-.384-1.005-.593-1.744-.593-.563 0-.946.235-.946.678 0 .458.507.625 1.232.898l.926.394c.99.373 1.616.994 1.616 2.067 0 1.263-1.055 2.357-2.928 2.357a4.346 4.346 0 01-2.88-1.097zm9.005-5.2h-2.268V2.14H29.4v1.442h-2.267v6.159h-1.712V3.582zm6.86-.078h.834c.899 0 1.381.252 1.381 1.003 0 .744-.482 1.133-1.381 1.133h-.835V3.505zm4.257 6.236L34.827 6.7c.808-.367 1.348-1.075 1.348-2.192 0-1.79-1.292-2.357-2.873-2.368h-2.737v7.6h1.715V7.007h.899l1.444 2.735h1.915zm2.841-3.148l.18-.7.586-2.452h.047c.086.382.184.784.283 1.182l.498 1.97H39.38zm2.393 3.147h1.815l-2.356-7.6H39.18l-2.356 7.6h1.752l.462-1.807h2.276l.46 1.807zm3.152-7.6h1.709v6.158H50V9.74h-5.076v-7.6zM4.56 18.786l.179-.7.586-2.452h.047c.086.382.184.784.283 1.182l.498 1.97H4.56zm2.392 3.15h1.815L6.41 14.333H4.357L2 21.936h1.752l.463-1.808h2.277l.459 1.808zm2.775-1.445h1.767v-4.716H9.726v-1.442h5.245v1.442h-1.766v4.716h1.766v1.443H9.726V20.49zm6.767 2.199h5.603V24h-5.603v-1.31z"
    })]
  }));
});
export default Icon;