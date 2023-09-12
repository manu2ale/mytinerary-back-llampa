import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "Name must be at least 3 characters",
        'string.max': "Name must be less than 20 characters",
        'any.required': "Name is required",
        'string.empty': "Name is required"
    }),
    lastName: joi.string().empty('').min(2).max(30).messages({
        'string.min': "Last name must be at least 2 characters",
        'string.max': "Last name must be less than 30 characters"
    }),
    mail: joi.string().email().required().min(8).max(30).messages({
        'string.min': "Email must be at least 8 characters",
        'string.max': "Email must be less than 30 characters",
        'any.required': "Email required", //para cuando no se envia el dato
        'string.empty': "Email required", //para cuando se envia vacio
        'string.email': "Invalid email"
    }),
    photo: joi.string().uri().empty('').min(5).max(16384).messages({
        'string.min': "Photo must be at least 5 characters",
        'string.max': "Photo must be less than 2048 characters",
        'string.uri': 'Invalid url'
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "Password must be at least 8 characters",
        'string.max': "Password must be less than 20 characters",
        'any.required': "Password is required", //para cuando no se envia el dato
        'string.empty': "Password is required" //para cuando se envia vacio
    }),
    country: joi.string().required().min(3).max(60).messages({
        'string.min': "Country must be at least 3 characters",
        'string.max': "Country must be less than 60 characters",
        'any.required': "Country is required", //para cuando no se envia el dato
        'string.empty': "Country is required" //para cuando se envia vacio
    })
})

export default registerSchema;