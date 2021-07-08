const Stadium = require('../models/stadium')

async function index(req, res) {
    try {
        const stadiums = await Stadium.find({})
        res.status(200).json(stadiums)
    } catch (error) {
        console.log(error)
        res.status(400).son({error: 'something went wrong'})
    }
}

async function create(req, res) {
    try {
        const stadium = await Stadium.create(req.body)
        res.status(201).json(stadium)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}

async function show(req, res) {
    Stadium.findById(req.params.id, function(err, stadium) {
        res.render('stadiums/show', {
            stadium
        })
    })
}

async function deleteStadium(req, res) {
    res.json(await Stadium.findByIdAndRemove(req.params.id))
}

module.exports = {
    index,
    create,
    show,
    delete: deleteStadium,
}