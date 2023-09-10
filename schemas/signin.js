import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(30).messages({
        'string.min': "mail must be at least 8 characters",
        'string.max': "mail must be less than 30 characters",
        'any.required': "mail is required", //para cuando no se envia el dato
        'string.empty': "mail is required" //para cuando se envia vacio
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must be at least 8 characters",
        'string.max': "password must be less than 20 characters",
        'any.required': "password is required",
        'string.empty': "password is required"
    })
})

export default signinSchema;