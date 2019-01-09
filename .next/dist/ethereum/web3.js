'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new _web2.default(window.web3.currentProvider); //if only metamask is used,this works
} else {
  //metamask is not there or ir is rendered on next server. we have to create our own provider
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/679a0676c1c2485aaa2ebd5fa02a4ab8  ');
  web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZQUFKO0FBQ0EsSUFBRyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQWxELEFBQTJEO1NBRWpELEFBQUksa0JBQUssT0FBQSxBQUFPLEtBRDFCLEFBQ0csQUFBTyxBQUFxQixpQkFEL0IsQUFDRyxDQUE2QyxBQUMvQztBQUhELE9BSUssQUFDSDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQ2YsQUFFRjtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBRWpCO0FBQ0Q7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JhbWdvcGFsL0Rlc2t0b3AvZXRoZXJpdW0va2lja3N0YXJ0In0=