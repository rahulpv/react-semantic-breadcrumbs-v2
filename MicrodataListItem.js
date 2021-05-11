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

var MicrodataListItem = function MicrodataListItem(props) {
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
      itemProp: 'itemListElement',
      itemScope: true,
      itemType: 'http://schema.org/ListItem'
    }, (0, _filterListItemProps2.default)(props)),
    _react2.default.createElement(
      'a',
      {
        itemProp: 'item',
        itemScope: true,
        itemType: 'http://schema.org/' + type,
        href: url,
        onClick: clickHandler },
      _react2.default.createElement(
        'span',
        { itemProp: 'name' },
        children
      )
    ),
    separator,
    _react2.default.createElement('meta', { itemProp: 'position', content: position })
  );
};

exports.default = MicrodataListItem;