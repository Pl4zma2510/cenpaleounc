const express = require('express')
const authMiddleware = require('../middleware/auth');
const router = express.Router();

const Records = require('../models/records')
const Art = require('../models/artifacts')

//retirar as barras da linha abaixo para a authenticação ser requerida
//router.use(authMiddleware)

//GET
router.get('/', async (req, res) => {

    try {
        const artefatos = await Art.find().populate();
        
        return res.status(200).send({ artefatos }); 
    } catch (error) {
        return res.status(404).send({'message' : 'Nenhum artefato localizado'})
    }
});
//GET POR CATEGORIA OU NOME
router.get('/categoria/:cat', async (req, res) => {
    try {
        const artefatos = await Art.find({category : req.params.cat});
        
        if (artefatos == null){
            artefatos = ''
        }

            return res.status(200).send({artefatos})
    } catch (error) {
        return res.status(404).send({ error: 'Erro ao artefatos com essa categoria' })
    }
});
router.get('/nome/:nome', async (req, res) => {
    try {
        const artefatos = await Art.find({name : req.params.nome});
        
        if (artefatos == null){
            artefatos = ''
        }

            return res.status(200).send({artefatos})
    } catch (error) {
        return res.status(404).send({ error: 'Erro ao artefatos com esse nome' })
    }
});

router.get('/numCollec/:nmcollec', async (req, res) => {
    try {
        const artefatos = await Art.find({ numCollection: req.params.nmcollec});
        
        if (artefatos == null){
            artefatos = ''
        }

            return res.status(200).send({artefatos})
    } catch (error) {
        return res.status(404).send({ error: 'Erro ao artefatos com este numero' })
    }
});

router.get('/Collec/:collec', async (req, res) => {
    try {
        const artefatos = await Art.find({ collec: req.params.collec});
        
        if (artefatos == null){
            artefatos = ''
        }

            return res.status(200).send({artefatos})
    } catch (error) {
        return res.status(404).send({ error: 'Erro ao artefatos desta coleção' })
    }
});




//GETbyId
router.get('/:artId', async (req, res) => {
    try {
        const artefato = await Art.findById(req.params.artId);
        
        if (artefato == null){
            artefato = '';
        }
            return res.status(200).send({ artefato });
        
        
    } catch (error) {
        return res.status(404).send({ error: 'Erro ao localizar este artefato' })
    }
});


//Post
router.post('/', async (req, res) => {
    let message = 'Adicionando o artefato'
   try {
    const { 
        numCollection,
        name,
        image,
        collec,
        category,
        description,
        origin,
        cenpaleo,
        location_in_cenpaleo,
        collector } = req.body 
     
    
    const art = await Art.create({ 
            numCollection,
            name,
            image,
            collec,
            category,
            description,
            origin,
            cenpaleo,
            location_in_cenpaleo,
            collector })

    const rec = await Records.create({description : message, idArtifacts : art._id, artefato : art})

        return res.status(200).send({ art })
    }
    catch (error) {
        console.log(error);
}        return res.status(500).send({ 'message' : 'Erro ao cadastrar artefato' })
        
});

//Put
router.put('/:artId', async (req, res) => {
   try{
    const { 
        numCollection,
        name,
        image,
        collec,
        category,
        description,
        origin,
        cenpaleo,
        location_in_cenpaleo,
        collector,
        description_r } = req.body 


    const art = await Art.findByIdAndUpdate(req.params.artId, { 
        numCollection,
        name,
        image,
        collec,
        category,
        description,
        origin,
        cenpaleo,
        location_in_cenpaleo,
        collector }, {new : true})
    const rec = await Records.create({description : description_r, idArtifacts : art._id})

    return res.status(200).send({ art })
}catch (error) {
    return res.status(500).send({ 'message' : 'Erro ao atualizar artefato' })
}

});

//delete
 router.delete('/:artId', async (req, res) => {
    try {
        const { description_r } = req.body 
        
        const artefato = await Art.findById(req.params.artId);

        const rec = await Records.create({description : description_r,
                                         idArtifacts : req.params.artId,
                                         artefato : artefato})

        await Art.findOneAndDelete(filter = $eq = { "_id" : req.params.artId });
        
       
        return res.status(200).send({'message':'O artefato foi excluido com sucesso'});
    } catch (error) {
        console.log(req.params.artId)
        return res.status(400).send({ error: error })
    }
});

module.exports = app => app.use('/', router)