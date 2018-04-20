const express               = require('express'),
      userManagementServer = require('./lib/user_management_server');
      logger               = require('./lib/log');

const app = express.createServer();

app.get('/users', userManagementServer.listAll);
app.post('/users', userManagementServer.createUser);
app.put('/users/:userId', userManagementServer.updateUser);
app.del('/users/:userId', userManagementServer.deleteUser);

app.listen(3000, function () {
  logger.info('Server is listening on port 3000', );
});
