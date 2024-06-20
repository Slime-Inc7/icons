import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useCallback, useEffect, useRef, useState } from 'react';
import SvgoClient from "./svgo";
export var useSvgo = function useSvgo(svg, config) {
  var svgoInstance = useRef();
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var _useState3 = useState(svg),
    _useState4 = _slicedToArray(_useState3, 2),
    newSvg = _useState4[0],
    setNewSvg = _useState4[1];
  var compressionSvg = useCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (svgoInstance.current) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return");
        case 2:
          _context.next = 4;
          return svgoInstance.current.optimize(svg);
        case 4:
          data = _context.sent;
          setNewSvg(data);
          setIsLoading(false);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), [svg]);
  useEffect(function () {
    svgoInstance.current = new SvgoClient(config);
  }, [config]);
  useEffect(function () {
    setIsLoading(false);
    compressionSvg();
  }, [config, svg]);
  return {
    isLoading: isLoading,
    precent: "".concat(-Math.floor((1 - newSvg.length / svg.length) * 100), "%"),
    svg: newSvg
  };
};