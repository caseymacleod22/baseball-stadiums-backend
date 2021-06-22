const Stadium = require('../models/stadium')

async function index(req, res) {
    try {
        const stadiums = await Stadium.find({})
        res.status(200).son(stadiums)
    } catch (error) {
        console.log(error)
        res.status(400).son({error: 'something went wrong'})
    }
}

async function create(req, res) {
    try {
        const stadium = await Skill.create(req.body)
        res.status(201).json(stadium)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}

module.exports = {
    index,
    create,
}