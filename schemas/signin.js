import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(30).messages({
        'string.min': "Email must be at least 8 characters",
        'string.max': "Email must be less than 30 characters",
        'any.required': "Email is required", //para cuando no se envia el dato
        'string.empty': "Email is required" //para cuando se envia vacio
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "Password must be at least 8 characters",
        'string.max': "Password must be less than 20 characters",
        'any.required': "Password is required",
        'string.empty': "Password is required"
    })
})

export default signinSchema;