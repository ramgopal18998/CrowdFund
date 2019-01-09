'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ramgopal/Desktop/etherium/kickstart/components/ContributeForm.js';
// this will re render the page once the transaction is complete

var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      loading: false,
      errorMessage: '',
      updateContribution: 0
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var val, campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                val = _this.state.value;

                _this.setState({ loading: true, errorMessage: '' });
                event.preventDefault();
                console.log(_this.props.address);
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.prev = 5;
                _context.next = 8;
                return _web2.default.eth.getAccounts();

              case 8:
                accounts = _context.sent;

                console.log(accounts);
                _context.next = 12;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 12:
                _this.setState({ updateContribution: val });
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address); //replace route will not create stack like oushRoute does

                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context['catch'](5);

                _this.setState({ errorMessage: _context.t0.message });

              case 19:
                _this.setState({ loading: false });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 16]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, { label: 'ether', labelPosition: 'right', value: this.state.value, onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Contribute')), _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'you have contributed  ', eval(this.props.sum) + eval(this.state.updateContribution), ' ether'));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInVwZGF0ZUNvbnRyaWJ1dGlvbiIsIm9uU3VibWl0IiwiZXZlbnQiLCJ2YWwiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCIsImV2YWwiLCJzdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFTLEFBQU0sQUFBUzs7QUFDaEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWEsQTs7Ozs7QUFBWTs7SSxBQUMzQjs7Ozs7Ozs7Ozs7Ozs7OzROLEFBRU47YUFBUSxBQUNBLEFBQ047ZUFGTSxBQUVFLEFBQ1I7b0JBSE0sQUFHTyxBQUNiOzBCQUpNLEFBSWMsQTtBQUpkLEFBQ04sYUFLRixBOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjsyQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDSDtBQURHLHNCQUNHLE1BQUEsQUFBSyxNQURSLEFBQ2MsQUFDdkI7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLGNBQTVCLEFBQWMsQUFBMkIsQUFDekM7c0JBQUEsQUFBTSxBQUNOO3dCQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDakI7QUFMRywyQkFLUSx3QkFBUyxNQUFBLEFBQUssTUFMdEIsQUFLUSxBQUFvQjtnQ0FMNUI7Z0NBQUE7dUJBT2dCLGNBQUEsQUFBSyxJQVByQixBQU9nQixBQUFTOzttQkFBMUI7QUFQQyxvQ0FRUDs7d0JBQUEsQUFBUSxJQVJELEFBUVAsQUFBWTtnQ0FSTDtnQ0FTRCxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7d0JBQzdCLFNBRGtDLEFBQ2xDLEFBQVMsQUFDZDt5QkFBTSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BWDdCLEFBU0QsQUFBbUMsQUFFakMsQUFBa0M7QUFGRCxBQUN2QyxpQkFESTs7bUJBSU47c0JBQUEsQUFBSyxTQUFTLEVBQUMsb0JBQWYsQUFBYyxBQUFvQixBQUNsQzsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFkaEMsQUFjUCxBQUE2QyxVQWR0QyxBQWNpRDs7Z0NBZGpEO0FBQUE7O21CQUFBO2dDQUFBO2dEQW1CUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQW5CckIsQUFtQlAsQUFBYyxBQUFrQjs7bUJBRWxDO3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBckJOLEFBcUJULEFBQWMsQUFBUzs7bUJBckJkO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBd0JUO21CQUNFOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDQTtBQURBO3lCQUNDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDSTtBQURKO0FBQUEseUJBQ0ksY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREosQUFDSSxBQUNBLHlDQUFBLEFBQUMsd0NBQU0sT0FBUCxBQUFhLFNBQVEsZUFBckIsQUFBbUMsU0FBUSxPQUFPLEtBQUEsQUFBSyxNQUF2RCxBQUE2RCxPQUFPLFVBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLE1BQUEsQUFBTSxPQUFwQyxBQUFTLEFBQWMsQUFBb0I7QUFBekg7b0JBQUE7c0JBSEosQUFDQSxBQUVJLEFBRUY7QUFGRTsyQkFFRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUxGLEFBS0UsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQVBGLEFBQ0EsQUFNRSxBQUtGLGdDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUEyQiwrQkFBSyxLQUFBLEFBQUssTUFBVixBQUFnQixPQUFPLEtBQUssS0FBQSxBQUFLLE1BQTVELEFBQWtELEFBQWdCLHFCQWJwRSxBQUNFLEFBWUEsQUFHSDs7Ozs7QUFqRDBCLEEsQUFtRDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JhbWdvcGFsL0Rlc2t0b3AvZXRoZXJpdW0va2lja3N0YXJ0In0=