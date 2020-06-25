const knex = require('../db')

module.exports = {
    
    async index (req, res) {
        const results = await knex('posts')
        return res.json(results)
    },
    
    async create(req, res){
        const {title, content} = req.body
        await knex('posts').insert({title, content})
        return res.status(200)
    }, 

    async delete(req, res){
        const {id} = req.body lo
        await knex('posts').where({id}).del()
        res.redirect("/all")
    }
}
