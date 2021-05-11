'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MicrodataListItem = require('./MicrodataListItem');

var _MicrodataListItem2 = _interopRequireDefault(_MicrodataListItem);

var _mapListItems = require('./mapListItems');

var _mapListItems2 = _interopRequireDefault(_mapListItems);

var _filterListProps = require('./filterListProps');

var _filterListProps2 = _interopRequireDefault(_filterListProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MicrodataBreadcrumbList = function MicrodataBreadcrumbList(props) {
  return _react2.default.createElement(
    'ol',
    _extends({
      itemScope: true,
      itemType: 'http://schema.org/BreadcrumbList'
    }, (0, _filterListProps2.default)(props)),
    (0, _mapListItems2.default)(props, _MicrodataListItem2.default)
  );
};

exports.default = MicrodataBreadcrumbList;