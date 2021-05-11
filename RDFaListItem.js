'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterListItemProps = require('./filterListItemProps');

var _filterListItemProps2 = _interopRequireDefault(_filterListItemProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RDFaListItem = function RDFaListItem(props) {
  var url = props.url,
      position = props.position,
      children = props.children,
      _props$separator = props.separator,
      separator = _props$separator === undefined ? null : _props$separator,
      _props$type = props.type,
      type = _props$type === undefined ? 'Thing' : _props$type,
      _props$clickHandler = props.clickHandler,
      clickHandler = _props$clickHandler === undefined ? null : _props$clickHandler;


  return _react2.default.createElement(
    'li',
    _extends({
      property: 'itemListElement',
      'typeof': 'ListItem'
    }, (0, _filterListItemProps2.default)(props)),
    _react2.default.createElement(
      'a',
      { property: 'item', 'typeof': type, href: url, onClick: clickHandler },
      _react2.default.createElement(
        'span',
        { property: 'name' },
        children
      )
    ),
    separator,
    _react2.default.createElement('meta', { property: 'position', content: position })
  );
};

exports.default = RDFaListItem;