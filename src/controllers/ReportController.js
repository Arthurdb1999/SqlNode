const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    async show(req, res) {
        //Encontrar todos os usuários que tem email que termina com @aluno.ifsc.edu.br
        //Desses usuários eu quero buscar todos que moram na "rua Lauro Muller"
        //Desses usuários eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: { 
                email: { 
                    [Op.iLike]: '%@aluno.ifsc.edu.br'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Lauro Muller' } },     
                { 
                    association: 'techs', 
                    required: false,
                    where: { 
                        name: { 
                            [Op.iLike]: 'React%'
                        }
                     } 
                },
            ]
        })
        return res.json(users);
    }
}