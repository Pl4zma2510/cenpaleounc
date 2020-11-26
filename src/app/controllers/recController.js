const express = require('express')
const authMiddleware = require('../middleware/auth');
const router = express.Router();
const ISODate = require("isodate")
const Records = require('../models/records')
const Art = require('../models/artifacts');
const { query } = require('../Schema/artifactsSchema');

//definindo que as rotas deste controller necessitam autenticação
//router.use(authMiddleware)



//GET
router.get('/', async (req, res) => {

    try {
        const records = await Records.find().populate();
        
        return res.status(200).send({ records }); 
    } catch (error) {
        return res.status(404).send({'message' : 'Não foram encontrados dados históricos'})
    }
});

//GET num registro
router.get('/numRegistro/:numReg', async (req, res) => {
    try {
        const records = await Records.find({ "artefato.numCollection" : `${req.params.numReg}` })
        
        return res.status(200).send({records, message : 'OK' }); 
    } catch (error) {
        return res.status(404).send({'message' : 'Não foi encontrado registro em esta numeração'})
    }
});

//GET por collection
router.get('/collections/:collec', async (req, res) => {
    try {
        const records = await Records.find({ "artefato.collec" : `${req.params.collec}` })
        
        return res.status(200).send({records, message : 'OK' }); 
    } catch (error) {
        return res.status(404).send({'message' : 'Não foi encontrado registro em esta numeração'})
    }
});


//GET POR DATA
router.get('/findDate', async (req, res) => {

    console.log(req.query.fim);
    try {
        const records = await Records.find({ 
            date : {
                $gte: req.query.ini,
                $lt: req.query.fim
            }
        })
        
        return res.status(200).send({ records }); 
    } catch (error) {
        return res.status(404).send({'message' : 'Não doi encontrado registros para as datas informadas'})
    }
});

//aki




module.exports = app => app.use('/records', router)
