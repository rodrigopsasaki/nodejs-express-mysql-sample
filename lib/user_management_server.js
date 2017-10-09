// NPM packages
const restifyErrors = require('restify-errors');

// Module packages
const Database = require('./database')();

const UserManagementServer = {

  createUser: function (req, res, next) {

    if (!req.body.name) {
      return next(new restifyErrors.MissingParameterError(`missing parameter: 'name'`));
    }

    Database.createUser(req.body, (err, data) => {

      if (err) {
        console.log(`error creating new user, error=${err}`);
        return next(new restifyErrors.InternalServerError(`error creating new user, error=${err}`));
      } else {
        res.send(data);
        return next();
      }

    });

  },

  updateUser: function (req, res, next) {

    if (!req.body.name) {
      return next(new restifyErrors.MissingParameterError(`missing parameter: 'name'`));
    }

    req.body.id = req.params.userId;

    Database.updateUser(req.body, (err, data) => {

      if (err) {
        console.log(`error updating new user, error=${err}`);
        return next(new restifyErrors.InternalServerError(`error updating new user, error=${err}`));
      } else {
        res.send(data);
        return next();
      }

    });

  },

  deleteUser: function (req, res, next) {

    Database.deleteUser(req.params.userId, (err, data) => {

      if (err) {
        console.log(`error deleting new user, error=${err}`);
        return next(new restifyErrors.InternalServerError(`error creating deleting user, error=${err}`));
      } else {
        res.send(data);
        return next();
      }

    });

  },

  listAll: function (req, res, next) {

    Database.listAll((err, data) => {

      if (err) {
        console.log(`error deleting new user, error=${err}`);
        return next(new restifyErrors.InternalServerError(`error creating deleting user, error=${err}`));
      } else {
        res.send(data);
        return next();
      }

    });

  },

};

module.exports = UserManagementServer;
