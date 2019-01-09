//this file tells next to load this code instead of its defalut server script.here we can  customize next elements
const  {createServer} = require('http');
const routes = require('./routes');
const next = require('next');
const app = next({
  dev:process.env.NODE_ENV !=='production'
});

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(3000,(err) => {
    if(err) throw err;
    console.log('Ready on localhost');
  })
})