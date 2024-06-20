export var useFillId = function useFillId(namespace) {
  var id = "lobe-icons-".concat(namespace.toLowerCase(), "-fill");
  return {
    fill: "url(#".concat(id, ")"),
    id: id
  };
};
export var useFillIds = function useFillIds(namespace, length) {
  var ids = Array.from({
    length: length
  }, function (_, i) {
    var id = "lobe-icons-".concat(namespace.toLowerCase(), "-fill-").concat(i);
    return {
      fill: "url(#".concat(id, ")"),
      id: id
    };
  });
  return ids;
};