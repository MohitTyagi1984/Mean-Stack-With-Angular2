const crypto = require('crypto').randomBytes(256).toString();

module.exports = {
uri: 'mongodb://localhost:27017/mean-angular-2' + this.db,
secret : crypto,
db : 'mean-angular-2'
}