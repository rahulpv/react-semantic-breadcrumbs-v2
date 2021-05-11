'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapListItems = function mapListItems(_ref, ListItem) {
  var children = _ref.children,
      separator = _ref.separator,
      _ref$clickHandler = _ref.clickHandler,
      clickHandler = _ref$clickHandler === undefined ? null : _ref$clickHandler;

  return _react.Children.map(children, function (child, index) {
    var isLastItem = _react.Children.count(children) === index + 1;
    var itemProps = Object.assign({}, child.props, {
      position: index + 1,
      separator: isLastItem ? null : separator,
      clickHandler: child.props.clickHandler || clickHandler
    });

    return _react2.default.createElement(ListItem, itemProps);
  });
};

exports.default = mapListItems;