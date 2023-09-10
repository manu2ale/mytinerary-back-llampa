import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name must be at least 3 characters",
        'string.max': "name must be less than 20 characters",
        'any.required': "name is required",
        'string.empty': "name is required"
    }),
    lastName: joi.string().empty('').min(2).max(30).messages({
        'string.min': "last name must be at least 2 characters",
        'string.max': "last name must be less than 30 characters"
    }),
    mail: joi.string().email({tlds: { allow: true }}).required().min(8).max(30).messages({
        'string.min': "mail must be at least 8 characters",
        'string.max': "mail must be less than 30 characters",
        'any.required': "mail required", //para cuando no se envia el dato
        'string.empty': "mail required", //para cuando se envia vacio
        "string.email": "invalid email"
    }),
    photo: joi.string().uri().empty('').min(5).max(16384).messages({
        'string.min': "photo must be at least 5 characters",
        'string.max': "photo must be less than 2048 characters",
        "string.uri": 'invalid url'
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must be at least 8 characters",
        'string.max': "password must be less than 20 characters",
        'any.required': "password is required", //para cuando no se envia el dato
        'string.empty': "password is required" //para cuando se envia vacio
        }),
    country: joi.string().required().min(3).max(60).messages({
        'string.min': "country must be at least 3 characters",
        'string.max': "country must be less than 60 characters",
        'any.required': "country required", //para cuando no se envia el dato
        'string.empty': "country required" //para cuando se envia vacio
    })
})

export default registerSchema;