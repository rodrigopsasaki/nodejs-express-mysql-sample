const restifyErrors = require('restify-errors');

const Validations = {

  enforceContentType: function (req, res, next) {

    if (req.is('application/json')) {
      return next();
    }

    const err = new restifyErrors.UnsupportedMediaTypeError(`Unsupported Media Type: '${req.header('Content-Type')}'`);
    next(err);

  },

};

module.exports = Validations;
