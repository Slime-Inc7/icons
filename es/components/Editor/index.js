import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { useEffect, useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useSvgo } from "./useSvgo";
import Color from "./Color";
import Mono from "./Mono";
import Preview from "./Preview";
import Text from "./Text";
import { svgIcon } from "./data";
import { defaultPlugins } from "./svgo";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var useStyles = createStyles(function (_ref) {
  var css = _ref.css,
    token = _ref.token;
  return {
    container: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      border: 1px solid ", ";\n      border-radius: ", "px;\n    "])), token.colorBorder, token.borderRadius)
  };
});
export default (function () {
  var colorRef = useRef(null);
  var monoRef = useRef(null);
  var _useState = useState('0 0 24 24'),
    _useState2 = _slicedToArray(_useState, 2),
    viewbox = _useState2[0],
    setViewbox = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    colorSvg = _useState4[0],
    setColorSvg = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    monoSvg = _useState6[0],
    setMonoSvg = _useState6[1];
  var _useStyles = useStyles(),
    styles = _useStyles.styles;
  var levaStore = useCreateStore();
  var _useControls = useControls({
      svg: {
        rows: true,
        value: svgIcon
      },
      text: false
    }, {
      store: levaStore
    }),
    svg = _useControls.svg,
    text = _useControls.text;
  var config = useControls('Config', defaultPlugins, {
    collapsed: true
  }, {
    store: levaStore
  });
  var removeColor = {
    addAttributesToSVGElement: {
      attribute: {
        'fill': 'currentColor',
        'fill-rule': 'evenodd'
      }
    },
    collapseGroups: true,
    removeAttrs: {
      attrs: ['fill', 'color', 'stroke', 'stroke-width', 'fill-rule']
    }
  };
  var compression = useSvgo(svg, config);
  var mono = useSvgo(svg, _objectSpread(_objectSpread({}, config), removeColor));
  useEffect(function () {
    var _monoRef$current;
    if (mono.isLoading) return setMonoSvg('loading...');
    setMonoSvg((monoRef === null || monoRef === void 0 || (_monoRef$current = monoRef.current) === null || _monoRef$current === void 0 || (_monoRef$current = _monoRef$current.querySelector('svg')) === null || _monoRef$current === void 0 ? void 0 : _monoRef$current.innerHTML) || '');
  }, [mono]);
  useEffect(function () {
    var _colorRef$current, _colorRef$current2;
    if (compression.isLoading) return setColorSvg('loading...');
    setColorSvg((colorRef === null || colorRef === void 0 || (_colorRef$current = colorRef.current) === null || _colorRef$current === void 0 || (_colorRef$current = _colorRef$current.querySelector('svg')) === null || _colorRef$current === void 0 ? void 0 : _colorRef$current.innerHTML) || '');
    var viewBox = colorRef === null || colorRef === void 0 || (_colorRef$current2 = colorRef.current) === null || _colorRef$current2 === void 0 || (_colorRef$current2 = _colorRef$current2.querySelector('svg')) === null || _colorRef$current2 === void 0 ? void 0 : _colorRef$current2.viewBox.baseVal;
    if (viewBox) {
      setViewbox("".concat(viewBox.x, " ").concat(viewBox.y, " ").concat(viewBox.width, " ").concat(viewBox.height));
    }
  }, [compression]);
  return /*#__PURE__*/_jsx(StoryBook, {
    className: styles.container,
    levaStore: levaStore,
    style: {
      position: 'relative'
    },
    children: /*#__PURE__*/_jsxs(Flexbox, {
      gap: 32,
      style: {
        overflow: 'hidden',
        width: '100%'
      },
      children: [/*#__PURE__*/_jsx(Preview, {
        svg: svg,
        title: 'Original'
      }), /*#__PURE__*/_jsx(Preview, {
        precent: compression.precent,
        ref: colorRef,
        svg: compression.svg,
        title: 'Compression'
      }), /*#__PURE__*/_jsx(Preview, {
        precent: mono.precent,
        ref: monoRef,
        svg: mono.svg,
        title: 'Monochrome'
      }), text ? /*#__PURE__*/_jsx(Text, {
        svg: monoSvg,
        title: 'Text',
        viewbox: viewbox
      }) : /*#__PURE__*/_jsx(Mono, {
        svg: monoSvg,
        title: 'Mono',
        viewbox: viewbox
      }), /*#__PURE__*/_jsx(Color, {
        svg: colorSvg,
        title: 'Color',
        viewbox: viewbox
      })]
    })
  });
});