    const mongoose = require('mongoose')

        mongoose.connect('mongodb+srv://pet_unc:pet_unc@cluster0.jp4mq.gcp.mongodb.net/cenpaleo_db', { useUnifiedTopology: true, useCreateIndex : true, useNewUrlParser: true } )
        mongoose.Promise = global.Promise;


    module.exports = mongoose

