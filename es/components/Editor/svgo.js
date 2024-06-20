import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
// @ts-ignore
import getSvgoInstance from 'svgo-browser/lib/get-svgo-instance';
export var defaultPlugins = {
  cleanupAttrs: true,
  cleanupEnableBackground: true,
  cleanupIDs: true,
  cleanupNumericValues: true,
  collapseGroups: true,
  convertColors: true,
  convertPathData: true,
  convertShapeToPath: true,
  convertStyleToAttrs: true,
  convertTransform: true,
  mergePaths: true,
  moveGroupAttrsToElems: true,
  removeComments: true,
  removeDesc: true,
  removeDimensions: true,
  removeDoctype: true,
  removeEditorsNSData: true,
  removeEmptyAttrs: true,
  removeEmptyContainers: true,
  removeEmptyText: true,
  removeHiddenElems: true,
  removeMetadata: true,
  removeNonInheritableGroupAttrs: true,
  removeRasterImages: false,
  removeTitle: true,
  removeUnknownsAndDefaults: true,
  removeUnusedNS: true,
  removeUselessDefs: true,
  removeUselessStrokeAndFill: true,
  removeViewBox: false,
  removeXMLProcInst: true,
  sortAttrs: true
};
var SVGO = /*#__PURE__*/function () {
  function SVGO(config) {
    _classCallCheck(this, SVGO);
    _defineProperty(this, "app", void 0);
    this.app = getSvgoInstance(_objectSpread(_objectSpread({}, defaultPlugins), config));
  }
  _createClass(SVGO, [{
    key: "optimize",
    value: function () {
      var _optimize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(svgData) {
        var _yield$this$app$optim, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.app.optimize(svgData);
            case 2:
              _yield$this$app$optim = _context.sent;
              data = _yield$this$app$optim.data;
              return _context.abrupt("return", data);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function optimize(_x) {
        return _optimize.apply(this, arguments);
      }
      return optimize;
    }()
  }]);
  return SVGO;
}();
export { SVGO as default };