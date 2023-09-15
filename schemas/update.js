import joi from "joi";

let updateSchema = joi.object({
    name: joi.string().min(3).max(20).messages({
        'string.min': "Name must be at least 3 characters",
        'string.max': "Name must be less than 20 characters",
    }),
    lastName: joi.string().min(2).max(30).messages({
        'string.min': "Last name must be at least 2 characters",
        'string.max': "Last name must be less than 30 characters"
    }),
    photo: joi.string().uri().min(5).max(16384).messages({
        'string.min': "Photo must be at least 5 characters",
        'string.max': "Photo must be less than 2048 characters",
        'string.uri': 'Invalid url'
    }),
    password: joi.string().min(8).max(20).messages({
        'string.min': "Password must be at least 8 characters",
        'string.max': "Password must be less than 20 characters",
    }),
    country: joi.string().min(3).max(60).messages({
        'string.min': "Country must be at least 3 characters",
        'string.max': "Country must be less than 60 characters",
    })
})

export default updateSchema;