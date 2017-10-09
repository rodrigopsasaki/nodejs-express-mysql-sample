// NPM packages
const restify = require('restify');

// Module packages
const UserManagementServer = require('./lib/user_management_server');
const Validations = require('./lib/validations');

const server = restify.createServer({
  name: 'UserManagementServer',
  version: '1.0.0',
});

server.use(restify.plugins.acceptParser(['application/json']));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(Validations.enforceContentType);

server.get('/users', UserManagementServer.listAll);
server.post('/users', UserManagementServer.createUser);
server.put('/users/:userId', UserManagementServer.updateUser);
server.del('/users/:userId', UserManagementServer.deleteUser);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
