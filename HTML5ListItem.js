'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterListItemProps = require('./filterListItemProps');

var _filterListItemProps2 = _interopRequireDefault(_filterListItemProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML5ListItem = function HTML5ListItem(props) {
  var url = props.url,
      position = props.position,
      children = props.children,
      _props$separator = props.separator,
      separator = _props$separator === undefined ? null : _props$separator,
      _props$clickHandler = props.clickHandler,
      clickHandler = _props$clickHandler === undefined ? null : _props$clickHandler;


  return _react2.default.createElement(
    'li',
    (0, _filterListItemProps2.default)(props),
    _react2.default.createElement(
      'a',
      { 'aria-level': position, href: url, onClick: clickHandler },
      children
    ),
    separator
  );
};

exports.default = HTML5ListItem;