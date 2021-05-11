"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var itemProps = Object.assign({}, props);
  delete itemProps.type;
  delete itemProps.children;
  delete itemProps.position;
  delete itemProps.url;
  delete itemProps.clickHandler;
  delete itemProps.separator;
  return itemProps;
};