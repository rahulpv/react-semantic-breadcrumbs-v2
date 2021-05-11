'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HTML5BreadcrumbList = require('./HTML5BreadcrumbList');

var _HTML5BreadcrumbList2 = _interopRequireDefault(_HTML5BreadcrumbList);

var _RDFaBreadcrumbList = require('./RDFaBreadcrumbList');

var _RDFaBreadcrumbList2 = _interopRequireDefault(_RDFaBreadcrumbList);

var _MicrodataBreadcrumbList = require('./MicrodataBreadcrumbList');

var _MicrodataBreadcrumbList2 = _interopRequireDefault(_MicrodataBreadcrumbList);

var _JSONLDBreadcrumbList = require('./JSONLDBreadcrumbList');

var _JSONLDBreadcrumbList2 = _interopRequireDefault(_JSONLDBreadcrumbList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BreadcrumbList = function BreadcrumbList(props) {
  var _props$format = props.format,
      format = _props$format === undefined ? '' : _props$format;


  var listProps = Object.assign({}, props);
  delete listProps.format;

  switch (format.toLowerCase()) {
    case 'rdfa':
      return _react2.default.createElement(_RDFaBreadcrumbList2.default, listProps);
      break;
    case 'microdata':
      return _react2.default.createElement(_MicrodataBreadcrumbList2.default, listProps);
      break;
    case 'json-ld':
      return _react2.default.createElement(_JSONLDBreadcrumbList2.default, listProps);
      break;
    default:
      return _react2.default.createElement(_HTML5BreadcrumbList2.default, listProps);
  }
};

exports.default = BreadcrumbList;