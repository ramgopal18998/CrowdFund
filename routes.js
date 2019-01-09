const routes = require('next-routes')();
//this file is built to add the custom routes and notify next.js about it
routes
      .add('/campaigns/new','/campaigns/new')    //to override the below one
      .add('/campaigns/:address','/campaigns/show')
      .add('/campaigns/:address/requests','/requests/index')
      .add('/campaigns/:address/requests/new','/requests/new');
module.exports = routes;
