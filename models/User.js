import { model,Schema } from 'mongoose';

let collection = 'users'

let schema = new Schema({
    name: { type:String, required:true },
    lastName: { type:String },
    mail: { type:String, required:true, unique:true },
    photo: { type:String, default: 'Por defecto en caso de no encontrar'  },
    password: { type:String, required:true },
    country: { type:String, required:true },
})

// Para crear un modelo de datos utilizo el metodo model
// pasando como parametros DONDE tengo que crear los documentos y con que FORMA
let User = model(collection, schema)
export default User