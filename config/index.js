var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname +':'+ configValues.pwd + '@ds149132.mlab.com:49132/nodetodosample';
    }
}