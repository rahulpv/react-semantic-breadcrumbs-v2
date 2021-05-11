'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HTML5ListItem = require('./HTML5ListItem');

var _HTML5ListItem2 = _interopRequireDefault(_HTML5ListItem);

var _mapListItems = require('./mapListItems');

var _mapListItems2 = _interopRequireDefault(_mapListItems);

var _filterListProps = require('./filterListProps');

var _filterListProps2 = _interopRequireDefault(_filterListProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HTML5BreadcrumbList = function HTML5BreadcrumbList(props) {
  return _react2.default.createElement(
    'nav',
    _extends({
      'aria-label': 'breadcrumb',
      role: 'navigation'
    }, (0, _filterListProps2.default)(props)),
    _react2.default.createElement(
      'ul',
      null,
      (0, _mapListItems2.default)(props, _HTML5ListItem2.default)
    )
  );
};

exports.default = HTML5BreadcrumbList;