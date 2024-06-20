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
    viewBox: "0 0 88 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M23.88 8.552h10.607l4.019.023c1.244.024 1.467.07 1.64.164l.044.024c.192.117.437.36.555.551l.063.123c.09.213.126.58.14 2.023l.01 3.357v6.018h-4.696v-1.694h2.988l-.008-7.054c-.014-1.242-.05-1.504-.147-1.624l-.037-.037c-.157-.137-.537-.172-3.275-.179l-6.032-.001V22h-1.708l-.021-5.845-.032-5.856-2.05-.032-2.06-.021V8.552zm-6.083-.403c.256.413.277.932.053 1.345-.037.08-.259.323-.583.651l-.301.3c-.269.265-.578.561-.898.86l-1.025.96c-.38.36-.628.608-.64.639-.02.05 1.179.09 2.806.095h3.47v1.694h-7.045v7.095H7.55v-1.694h4.376v-5.4H2v-1.695h9.734l2.493-2.307c.77-.727 1.217-1.198 1.2-1.283l-.012-.025c-.104-.126-.877-.146-5.389-.176l-5.358-.021V7.493l9.663.006c3.125.023 3.151.133 3.466.65zm33.376-5.74c.266.117.544.35.672.551l.05.088c.099.193.138.441.154 1.381l.01 2v3.817H49.71v2.33h2.348v1.694H49.71l.005 2.69c.01.778.039 1.334.08 1.334l.085-.016c.164-.037.537-.13.935-.233l1.275-.344c.133-.044.17.006.18.477l.002 1.249-4.033 1.038-4.186 1.09v-1.779l.961-.233v-8.026h1.708v7.54l.384-.075a3.75 3.75 0 00.64-.159l.257-.106v-8.471h-3.31V2.198l4.487.004c1.41.013 1.675.059 1.993.208zm4.941-.317h1.708l-.002.707-.546 16.387c-.013.33-.023.544-.028.611-.096 1.25-.737 1.663-2.594 1.674h-1.206v-1.695h.683c.833 0 1.206-.127 1.345-.445l.009-.062c.005-.054.01-.139.018-.253l.12-2.473.365-9.452c.068-1.983.118-3.625.127-4.349l.001-.65zm4.697 0l.021 8.821.032 8.81 2.829.064v1.684h-4.59V2.092h1.708zm19.82.032c-.032.074-.085.466-.128.847l-.075.71 3.07.003c1.518.015 1.76.1 2.157.553l.345.418v16.71h-4.696V19.67h2.988l-.009-11.666c-.016-2.144-.06-2.342-.183-2.45-.16-.148-.442-.176-1.796-.179l-1.17.008c-.595.011-1.004.033-1.004.055l-2.092 15.323-.064.392H76.17l.088-.499 2.11-14.983.054-.296h-2.028V3.68h2.23l.065-.338c.032-.191.096-.562.138-.826l.086-.477L80.164 2c.406-.002.501.03.467.124zM75.54 7.916V9.61h-5.742l-.089.495-1.012 6.955c-.179 1.263-.308 2.199-.308 2.25 0 .127.395.149 2.23.149l1.34-.007c.774-.014.95-.055 1.122-.18l.324-.248V15.33h1.708l-.004 3.502c-.01 1.05-.045 1.319-.157 1.54l-.133.22c-.343.514-.675.558-3.893.562l-2.91-.005c-1.384-.011-1.629-.046-1.653-.154l-.002-.021c0-.196 1.485-10.206 1.644-11.069l.026-.14c.01-.142-.118-.153-.919-.153H65.72V7.915h9.82zm-20.887 2.442c.352.015.5.057.5.131l-.287 3.389-.3 3.25h-1.654v-.338c0-.12.046-.718.117-1.528l.417-4.667c0-.213.036-.24.667-.243l.54.006zm6.787-.006h1.708l.071.493c.086.752.394 3.99.523 5.453l.057.714c0 .065-.229.106-.658.115l-.196.002c-.47 0-.854-.032-.854-.064l-.587-6.205-.064-.508zm-15.038-6.46l.003 2.975c.01.909.037 1.585.071 1.61.032.043.929.075 1.975.075h1.9L50.35 5.57c-.004-1.227-.03-1.36-.196-1.482l-.038-.026c-.165-.118-.47-.159-1.435-.168l-2.28-.002zm7.578-.212l.353.007c.352.015.5.057.5.131l.188 1.737c.1.882.216 1.86.275 2.314l.082.577H53.67l-.09-.585c-.13-.943-.454-3.812-.454-4.011 0-.138.139-.17.854-.17zm9.713.17l-.048.524c-.094.918-.308 2.766-.407 3.487l-.09.585h-1.697l.15-1.139c.11-.898.265-2.25.34-2.964l.044-.472c0-.154.097-.185.668-.19h.186c.715 0 .854.031.854.169zM28.15 2.092v1.165h8.539V2.092h1.707v1.165h3.95V4.95h-3.95v2.436H36.7l-.064-2.383-4.237-.032-4.248-.02v2.435h-1.697l-.064-2.383-3.362-.063V3.257h3.415V2.092h1.708zm-15.903 0v1.154l5.938.055c1.598.026 1.8.07 2.056.22.568.337.736.719.756 1.879l.002 1.457H19.29v-.783c0-.63-.026-.787-.179-.912l-.056-.041c-.182-.127-.878-.16-5.22-.168L3.707 4.95v1.906H2v-3.6h8.539V2.092h1.708zm62.332.424V4.21h-7.898V2.516h7.898z"
    })]
  }));
});
export default Icon;