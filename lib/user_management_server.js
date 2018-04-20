const logger   = require('winston');
      database = require('./database')();

const UserManagementServer = {

  createUser: function (req, res, next) {

    if (!req.body.name) {
      return res.status(422).send(`missing parameter: 'name'`);
    }

    database.createUser(req.body, (err, data) => {

      if (err) {
        logger.error(`error creating new user, error=${err}`);
        return next(`error creating new user, error=${err}`);
      } else {
        res.send(data);
        return next();
      }

    });

  },

  updateUser: function (req, res, next) {

    if (!req.body.name) {
      return res.status(422).send(`missing parameter: 'name'`);
    }

    req.body.id = req.params.userId;

    database.updateUser(req.body, (err, data) => {

      if (err) {
        logger.error(`error updating new user, error=${err}`);
        return res.status(500).send(`error updating new user, error=${err}`);
      } else {
        res.send(data);
        return next();
      }

    });

  },

  deleteUser: function (req, res, next) {

    database.deleteUser(req.params.userId, (err, data) => {

      if (err) {
        logger.error(`error deleting new user, error=${err}`);
        return res.status(500).send(`error creating deleting user, error=${err}`);
      } else {
        res.send(data);
        return next();
      }

    });

  },

  listAll: function (req, res, next) {

    database.listAll((err, data) => {

      if (err) {
        logger.error(`error deleting new user, error=${err}`);
        return res.status(500).send(`error creating deleting user, error=${err}`);
      } else {
        res.send(data);
        return next();
      }

    });

  },

};

module.exports = UserManagementServer;
