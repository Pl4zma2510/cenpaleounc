const mongoose = require('../../database')

const artifactsSchema = new mongoose.Schema({
    
    numCollection : {type: String, required : true},
    name : {type: String, required : true},
    image : {type : String, required : true},
    category : {type : String, required : true},
    collec : { type : String, required : true},
    description : { type : String, required : true },
    origin : { type : String, required : false} ,
    cenpaleo : { type : String, required : false},
    collectionDate : { type : Date, required : true, default: Date.now},
    location_in_cenpaleo : { type : String, required : true},
    collector : { type : String, required : false},
    //Parametros para  api googleMaps
    latitude : { type : String, required : false},
    longitude : { type : String, required : false}
});


module.exports = artifactsSchema;