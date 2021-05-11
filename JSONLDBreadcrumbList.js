'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JSONLDBreadcrumbList = function JSONLDBreadcrumbList(_ref) {
  var children = _ref.children;

  var listItems = [];
  _react.Children.map(children, function (child, index) {
    var _child$props = child.props,
        url = _child$props.url,
        children = _child$props.children,
        _child$props$type = _child$props.type,
        type = _child$props$type === undefined ? 'Thing' : _child$props$type;

    listItems.push({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": url,
        "@type": type,
        "name": children
      }
    });
  });

  var breadcrumbList = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': listItems
  };

  return _react2.default.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: '\n' + JSON.stringify(breadcrumbList, null, 2) + '\n'
    } });
};

exports.default = JSONLDBreadcrumbList;