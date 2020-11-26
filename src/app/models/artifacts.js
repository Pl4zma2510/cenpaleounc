const mongoose = require('../../database')
const artifactsSchema = require('../Schema/artifactsSchema')



const Artifacts = mongoose.model('Artifacts', artifactsSchema);

module.exports = Artifacts;
