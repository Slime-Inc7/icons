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
    fill = _useFillId.fill,
    id = _useFillId.id;
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
        x1: "100%",
        x2: "0%",
        y1: "53.893%",
        y2: "53.893%",
        children: [/*#__PURE__*/_jsx("stop", {
          offset: "0%",
          stopColor: "#1D1A5C"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "49.586%",
          stopColor: "#3431C3"
        }), /*#__PURE__*/_jsx("stop", {
          offset: "100%",
          stopColor: "#7361F7"
        })]
      })
    }), /*#__PURE__*/_jsx("path", {
      d: "M15.127 21.824c.093.299.339.553.345.896.022.107-.051.417-.168.21-.249-.832-.33-.035-1.065-1.184-.158-.313-.429-.055-.663-.04-.694-.228-.49-.293-.905.3-.315.088-.049-.643.101-.724.29-.248.749-.086.917-.356.282-1.143-.64-2.567-1.158-3.55-.169-.264.013-.577-.025-.862-.15-.408-.188-.302-.049-.734-.227-.473-.863.266-1.22.255-.285.004-.523-.45-.893-.48-1.335.004-2.581.808-3.926.671a1.228 1.228 0 00-.681.215c-.414.222-.909.203-1.288.522-.119.095-.27.104-.414.098-.27.04-.477.37-.784.34-.312-.109-.566.079-.86.057-.34-.285-.781-.057-1.174.008a.286.286 0 01-.308-.05c-.09-.072-.264-.082-.324-.177-.03-.059.028-.145.1-.204.527-.405 1.137-.666 1.72-.974 1.146-.594 2.118-1.463 3.16-2.218.066-.05.085-.12-.035-.119-1.612.135-3.146 1.048-4.74 1.012-.176.023-.339.127-.522.15-.876-.185.65-1.16.954-1.261 1.704-.711 3.598-.843 5.184-1.836.188-.132-.17-.268-.004-.53.39-1.29 1.576-1.805 2.735-2.184.594-.231 1.137-.672 1.797-.679.325.016.634-.113.852-.36 1.163-1.071 2.442-2.012 3.674-2.999 1.413-1.783 2.282-5.175 5.216-3.656.92.395 1.974.365 2.807.976.297.189.857.765.236.85-1.702.291-2.552-.23-2.63 1.454-.03.39.064.75-.158 1.086-.014.694.352 1.508-.084 2.129-.364.63-.078 1.413-.38 2.047-.22.534-.65.93-1.049 1.323-1.304 1.63-2.266 3.476-2.589 5.572-.122.627-.478 1.56.097 2.056.607.612 1.25 1.458 2.18 1.012.306-.14.884-.189.84.274-.05.083-.258-.098-.371-.056-.16.102.072.316.029.465-.022.14-.134.12-.23.054-.281-.112-.685.002-1.005-.01-.258.045-.512.162-.762.05-.116-.049-.229-.1-.356-.103-.39-.022-.884.182-1.103-.147-.242-.454-.293-.104-.532.048-.235-.015-.067-.35.014-.46.249-.57 1.846.517 1.183-.432-2.29-2.01-.777-2.686-1.646-2.69-.17-.089-.103-.405-.366-.173-.335.35-.46-.098-.46-.4-.04-.175-.177-.3-.125-.479.022-.39-.496.085-.38.41.057.616-.132 1.225-.102 1.833.24 1.276.41 2.897 1.864 3.276.177.076.463.432.253.565-.093-.01-.16-.11-.243-.153-.116-.078-.257.009-.378.018-.034.008-.088.007-.1.046l-.003.002z",
      fill: fill,
      fillRule: "nonzero"
    })]
  }));
});
export default Icon;