'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ramgopal/Desktop/etherium/kickstart/components/Header.js';

//menu.item is replaced with link tag because both styles overlap. so instead of menu.item we can use a tag with classname item inside link
exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "30px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('a', { className: 'item', style: { backgroundColor: "blue", fontWeight: "bold", fontSize: "16px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Crowdcoin')), _react2.default.createElement('h2', { style: { paddingLeft: "250px", fontFamily: "cursive" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, 'WHERE IDEAS COME INTO EXISTENCE'), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('a', { className: 'item', style: { backgroundColor: "blue", fontWeight: "bold" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Campaigns')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', { className: 'item', style: { backgroundColor: "orange", fontWeight: "bold", fontSize: "20px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, '+'))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nTGVmdCIsImZvbnRGYW1pbHkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFROztBQUNSLEFBQVEsQUFBVzs7Ozs7O0FBQ25CLEFBQ0E7a0JBQWUsWUFBTSxBQUNuQjt5QkFDRSxBQUFDLHVDQUFLLE9BQU8sRUFBQyxXQUFkLEFBQWEsQUFBWTtnQkFBekI7a0JBQUEsQUFDQTtBQURBO0dBQUEsa0JBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFBZ0I7QUFBaEI7cUJBQWdCLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFPLEVBQUMsaUJBQUQsQUFBaUIsUUFBUSxZQUF6QixBQUFvQyxRQUFPLFVBQXRFLEFBQTJCLEFBQW9EO2dCQUEvRTtrQkFBQTtBQUFBO0tBRGhCLEFBQ0EsQUFBZ0IsQUFDaEIsK0JBQUEsY0FBQSxRQUFJLE9BQU8sRUFBQyxhQUFELEFBQWEsU0FBUSxZQUFoQyxBQUFXLEFBQWdDO2dCQUEzQztrQkFBQTtBQUFBO0tBRkEsQUFFQSxBQUNBLG9EQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUFnQjtBQUFoQjtxQkFBZ0IsY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLE9BQU8sRUFBQyxpQkFBRCxBQUFpQixRQUFRLFlBQXBELEFBQTJCLEFBQW9DO2dCQUEvRDtrQkFBQTtBQUFBO0tBRGxCLEFBQ0UsQUFBZ0IsQUFDaEIsK0JBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFBNkI7QUFBN0I7cUJBQTZCLGNBQUEsT0FBRyxXQUFILEFBQWEsUUFBTyxPQUFPLEVBQUMsaUJBQUQsQUFBaUIsVUFBUyxZQUExQixBQUFxQyxRQUFPLFVBQXZFLEFBQTJCLEFBQXFEO2dCQUFoRjtrQkFBQTtBQUFBO0tBTmpDLEFBQ0UsQUFHQSxBQUVFLEFBQTZCLEFBSWxDO0FBWEQiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JhbWdvcGFsL0Rlc2t0b3AvZXRoZXJpdW0va2lja3N0YXJ0In0=