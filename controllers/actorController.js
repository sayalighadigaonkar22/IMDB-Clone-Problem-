const actorService = require('../services/actorService');

const getAllActors = async (req, res) => {
    try {
        const actors = await actorService.allActors();
        res.status(200).json(actors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllActors
};
