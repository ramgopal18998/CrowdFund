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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ramgopal/Desktop/etherium/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sum: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaign, account, total, sum;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(this.props.address);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                account = _context.sent;
                _context.next = 6;
                return campaign.methods.findSum(account[0]).call();

              case 6:
                total = _context.sent;

                console.log(total);
                console.log("sum");
                sum = _web2.default.utils.fromWei(total, 'ether');

                this.setState({ sum: sum });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'renderCards',
    value: function renderCards() {
      var items = [{
        header: this.props.manager,
        description: 'The manager created this contract and can create request to withdraw money',
        meta: 'Manager Address',
        style: { overflowWrap: 'break-word' }
      }, {
        header: this.props.minimumContribution,
        description: 'This is the minimum contribution required to become an approver',
        meta: 'Minimimum Contibution (Wei)'
      }, {
        header: this.props.requestsCount,
        description: 'These are total number of request for this campaign',
        meta: 'Total Requests'
      }, {
        header: this.props.approversCount,
        description: 'These are total number of approvers for this campaign',
        meta: 'Total Approvers'
      }, {
        header: _web2.default.utils.fromWei(this.props.balance, 'ether'),
        description: 'These are total balance for this campaign',
        meta: 'Balance (in ether)'
      }];
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Campaign Details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, sum: this.state.sum, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address); //props contains a query property which contains the url part. it extracts the address part mentioned in routes

                _context2.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context2.sent;
                return _context2.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]

                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FtcGFpZ24iLCJMYXlvdXQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJMaW5rIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnblNob3ciLCJzdGF0ZSIsInN1bSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50IiwibWV0aG9kcyIsImZpbmRTdW0iLCJjYWxsIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwidXRpbHMiLCJmcm9tV2VpIiwic2V0U3RhdGUiLCJpdGVtcyIsImhlYWRlciIsIm1hbmFnZXIiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJiYWxhbmNlIiwicmVuZGVyQ2FyZHMiLCJxdWVyeSIsImdldFN1bW1hcnkiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQUssQUFBSzs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFvQjs7Ozs7Ozs7O0ksQUFDckI7Ozs7Ozs7Ozs7Ozs7O3dOQW9CSixBO1dBQVEsQSxBQUNEO0FBREMsQUFDTjs7Ozs7Ozs7Ozs7bUJBSU07QSwyQkFBVyx3QkFBUyxLQUFBLEFBQUssTUFBZCxBLEFBQW9COzt1QkFDZixjQUFBLEFBQUssSUFBTCxBQUFTLEE7O21CQUF6QjtBOzt1QkFDYyxTQUFBLEFBQVMsUUFBVCxBQUFpQixRQUFRLFFBQXpCLEFBQXlCLEFBQVEsSUFBakMsQUFBcUMsQTs7bUJB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