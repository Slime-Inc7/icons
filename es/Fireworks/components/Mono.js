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
      lineHeight: 1
    }, style),
    viewBox: "0 0 24 24",
    width: size,
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), {}, {
    children: [/*#__PURE__*/_jsx("title", {
      children: TITLE
    }), /*#__PURE__*/_jsx("path", {
      d: "M7.394 8.253l-.08-.046a.543.543 0 00-.752.203.562.562 0 00.2.764l.08.045a.545.545 0 00.752-.202.562.562 0 00-.157-.736l-.043-.028zm-2.293-.065l.08.046a.534.534 0 00.276.075.562.562 0 00.276-1.041l-.08-.046a.546.546 0 00-.751.202.562.562 0 00.156.736l.043.028zM4.388 7.13a.565.565 0 00-.2-.763L3.16 5.759a.543.543 0 00-.751.203.565.565 0 00.199.764l1.028.607a.544.544 0 00.724-.16l.028-.043zm.639 5.739a.55.55 0 00-.636-.454l-.09.016a.558.558 0 00-.447.646c.045.271.28.464.54.464.032 0 .061 0 .093-.01l.09-.016a.557.557 0 00.453-.599l-.006-.047h.003zm.723-.128c.045.271.28.464.54.464.031 0 .064 0 .093-.01l.09-.016a.558.558 0 00.446-.647.55.55 0 00-.636-.453l-.09.016a.555.555 0 00-.453.598l.006.048h.004zm-3.123-.003l-1.172.206a.558.558 0 00-.447.646c.045.27.28.463.54.463.032 0 .06 0 .093-.006l1.172-.206a.558.558 0 00.447-.646.551.551 0 00-.589-.46l-.047.006.003-.003zm5.233 3l-.058.071a.565.565 0 00.065.787.547.547 0 00.774-.069l.058-.071a.565.565 0 00-.065-.787.543.543 0 00-.738.026l-.036.04v.003zm-1.243 1.494l-.058.072a.562.562 0 00.068.787.547.547 0 00.774-.069l.058-.071a.562.562 0 00-.068-.787.54.54 0 00-.738.029l-.036.04zm-1.153 1.404l-.768.924a.565.565 0 00.064.786.547.547 0 00.774-.069l.768-.923a.565.565 0 00-.064-.787.543.543 0 00-.738.026l-.036.04v.003zm6.46.111h-.003c-.302 0-.578.415-.578.721v.095c0 .29.245.505.53.527l.048.002a.507.507 0 00.523-.526v-.094c0-.307-.218-.725-.52-.725zm.003-1.792a.553.553 0 00-.55.555v.16c0 .294.221.595.502.624l.045.003c.302 0 .517-.34.517-.647v-.068c0-.307-.212-.627-.514-.627zm-.01 3.81v-.004a.548.548 0 00-.549.552v1.168c-.003.29.216.496.499.517l.047.002c.302 0 .55-.212.55-.519v-1.182a.527.527 0 00-.499-.533l-.047-.002zm5.414-3.333l-.058-.072a.547.547 0 00-.774-.072.565.565 0 00-.071.787l.058.071a.54.54 0 00.77.072.564.564 0 00.103-.743l-.032-.043h.004zm-1.292-1.57a.547.547 0 00-.774-.072.565.565 0 00-.07.786l.057.072c.11.134.267.203.424.203a.532.532 0 00.35-.131.565.565 0 00.071-.787l-.058-.071zm2.38 2.914a.547.547 0 00-.774-.071.565.565 0 00-.07.786l.761.927a.537.537 0 00.771.069.568.568 0 00.07-.787l-.757-.924zm-1.336-6.06a.558.558 0 00.444.649l.09.016a.552.552 0 00.636-.45.558.558 0 00-.444-.65l-.09-.016a.548.548 0 00-.626.403l-.01.047zm2.618-.092l-.09-.017a.549.549 0 00-.636.45.558.558 0 00.444.65l.09.017a.552.552 0 00.636-.45.56.56 0 00-.397-.64l-.047-.01zm2.85.538l-1.17-.212a.558.558 0 00-.196 1.1l1.17.212a.552.552 0 00.636-.45.56.56 0 00-.397-.64l-.046-.01h.003zm-5.545-3.708a.523.523 0 00.273-.075l.08-.045a.56.56 0 00.203-.76.543.543 0 00-.749-.207l-.08.046a.56.56 0 00.228 1.04l.045.001zm1.667-.972a.523.523 0 00.273-.075l.08-.046a.56.56 0 00.203-.76.543.543 0 00-.748-.206l-.08.045a.56.56 0 00.225 1.04l.047.002zm3.068-2.324a.543.543 0 00-.748-.206l-1.031.6a.56.56 0 00-.203.761c.103.18.286.28.476.28a.523.523 0 00.273-.074l1.03-.6a.56.56 0 00.226-.716l-.023-.045zm-7.465-.474a.551.551 0 00-.707.333l-.032.088c-.106.291.041.61.327.719a.553.553 0 00.707-.333l.032-.089a.563.563 0 00-.28-.699l-.044-.019h-.003zm.957-1.028l.032-.088a.558.558 0 00-.324-.715.551.551 0 00-.707.333l-.032.088a.556.556 0 00.517.748.552.552 0 00.497-.319l.02-.047h-.003zm.71-3.544a.543.543 0 00-.704.332l-.41 1.133a.556.556 0 00.516.748c.225 0 .434-.14.518-.366l.408-1.133a.559.559 0 00-.281-.696l-.044-.018h-.003zm-5.927 3.094l-.032-.088a.547.547 0 00-.704-.337.56.56 0 00-.33.715l.031.088a.549.549 0 00.704.337.56.56 0 00.345-.67l-.014-.045zm.62 1.75a.547.547 0 00-.704-.337.56.56 0 00-.33.715l.032.088a.549.549 0 00.703.336.56.56 0 00.331-.715l-.032-.088zm-1.22-3.45L9.01 1.368a.547.547 0 00-.703-.336.56.56 0 00-.331.715l.405 1.136a.549.549 0 00.703.336.56.56 0 00.345-.669l-.014-.046z"
    })]
  }));
});
export default Icon;