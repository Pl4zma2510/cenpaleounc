const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')
const router = express.Router();


// funcção para gerar o token, tanto para o login quanto para o register
        function generateToken(params = {}){
            return jwt.sign(params, authConfig.secret, { expiresIn : 86400 } ) 
        }

//Essa é a rota utilizada para criar um novo usuario
//ela retorna o token como se apos o cadastro ele ja estivesse logado no sistema
//mas isso pode ser removido ao apagar o generateToken({id: user.id}) da linha 28
router.post('/register', async (req,res) =>{
try {
const { email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).send( {error : 'Erro, o Email ja foi cadastrado'})
    }

    const user = await User.create(req.body);
        return res.send({user ,  token : generateToken({ id: user.id })
    });
}catch (err) {
    return res.status(400).send({ error : 'Erro ao cadastrar usuario' })
}
});

//Essa é a rota usada para autenticar um usuario que ja existe no sistema,
//ela apenas busca no mongo um usuario por um email e compara senhas
//ela tambem retonas o token de acesso ao usuario 
router.post('/authenticate', async (req,res) =>{
    const { email, password } = req.body

    const user = await User.findOne({ email })
        if(!user)
            return res.status(400).send({error : 'Erro, usuario não encontrado'})
        
    
        if(!await bcrypt.compare(password, user.password))
             return res.status(400).send({error : 'Senha invalida'})

    
     const token = jwt.sign({ id : user.id }, authConfig.secret, { expiresIn : 86400 })       

    //retornando o user, caso queira usar algum dado dele no front
    res.send({user,token : generateToken({ id: user.id }),
    });
             
    });

//Essa rota é usada apenas para resetar a senha pelo email e nodemailer(lib)
//ela busca um e amail e manda uma mensagem de recuperação de senha.
router.post('/forgot_password', async (req,res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user)
        return res.status(400).send({error : 'Erro, usuario não encontrado'})

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date;
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id, {
            '$set' : {
                passwordResetToken : token,
                passwordResetExpires : now
            }
        })


        mailer.sendMail({
            from: 'UNC@server.br',
            to: 'user@email.com',
            subject: 'Mensagem de recuperação de senha',
             text: 'Recupere sua senha',
             html: '<p style="color:red">Ok, utilize o token a seguir para resetar a senha</p>' + token
        }, (err) => {
            if (err)
                return res.status(400).send({error : 'Erro ao enviar email'});
        });

        res.send({ok : true});

    } catch (err) {
        console.log(err);
        
        return res.status(400).send({error : 'Erro ao solicitar nova senha'})
    }
});
//Essa rota é complementar a anterior, ja que o usuario so tera acesso a ela se clicar no link do email
//ela apenas transcreve a senha comparando o token / link que foi passado para o usuario no momento 
//em que foi solicirado a troca de senha, se conferir a senha e sobreposta criando uma nova.
//é necessario que voce redirecione o usuario a uma pagina com o token corrte no momento que lhe é enviado um email 
//Ela retorna uma mensagem de sucesso que pode ser passsada para o frontend
router.post('/reset_password', async (req,res) => {
    const {email, token, password} = req.body;

    try {
        const user = await User.findOne({ email }).select('+passwordResetToken passwordResetExpires');

        if(!user)
        return res.status(400).send({error : 'Erro, usuario não encontrado'})


        if(token !== user.passwordResetToken)
            return res.status(400).send({ error : 'Os tokens não conferem' })

            const now =  new Date();

            if(now > user.passwordResetExpires)
                res.status(400).send({error : 'O token expirado, tente novamente'})
            
        
        user.password = password;
        
        await user.save();

        //
        res.send({'message' : 'Senha resetada com sucesso'})



    } catch (err) {
        return res.status(400).send({error : 'Erro ao resetar a senha'})
    }



});

module.exports = app => app.use('/auth', router)