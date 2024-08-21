const Joi = require('joi');

const actorSchema = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string().valid('Male', 'Female', 'Other').required(),
    dob: Joi.date().required(),
    bio: Joi.string().allow('')
});

module.exports = actorSchema;