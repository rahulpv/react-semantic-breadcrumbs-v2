"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var listProps = Object.assign({}, props);
  delete listProps.children;
  delete listProps.separator;
  delete listProps.clickHandler;
  return listProps;
};