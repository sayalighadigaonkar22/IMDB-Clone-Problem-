const Actor = require('../models/actorModels');

const allActors = async () => {
    try {
        return await Actor.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    allActors
};

