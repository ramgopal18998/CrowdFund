'use strict';

var routes = require('next-routes')();
//this file is built to add the custom routes and notify next.js about it
routes.add('/campaigns/new', '/campaigns/new') //to override the below one
.add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/requests/index').add('/campaigns/:address/requests/new', '/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBO0FBQ0EsT0FDTyxBQURQLElBQ1csQUFEWCxrQkFDNEIsQUFENUIsa0JBQ2lELEFBRGpEO0NBRU8sQUFGUCxJQUVXLEFBRlgsdUJBRWlDLEFBRmpDLG1CQUdPLEFBSFAsSUFHVyxBQUhYLGdDQUcwQyxBQUgxQyxtQkFJTyxBQUpQLElBSVcsQUFKWCxvQ0FJOEMsQUFKOUM7QUFLQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3JhbWdvcGFsL0Rlc2t0b3AvZXRoZXJpdW0va2lja3N0YXJ0In0=