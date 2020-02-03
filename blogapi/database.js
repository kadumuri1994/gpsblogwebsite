let mongoose = require('mongoose');

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect('mongodb://127.0.0.1:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error', err);
            });
    }
}

module.exports = new Database()