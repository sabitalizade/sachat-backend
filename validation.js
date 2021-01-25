//Validation
import Joi from '@hapi/joi'

export const registerValidation= data=>{
    const schema = {
        username:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
    }
    return Joi.validate(data, schema);
}
export  const loginValidation= data=>{
    const schema = {
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
    }
    return Joi.validate(data, schema);
}


// export registerValidation
// export loginValidation