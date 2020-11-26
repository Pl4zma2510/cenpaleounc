const Art = require('../models/artifacts')
const artifactsSchema = require('../Schema/artifactsSchema')
const mongoose = require('../../database')

const recordsSchema = new mongoose.Schema({
    
    date : {type : Date, required : true, default: Date.now},
    description : { type : String, required : false },
    idArtifacts : { 
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Artifacts',
                required : false
                }, 
    artefato : artifactsSchema
});


const Records = mongoose.model('Records', recordsSchema);

module.exports = Records;