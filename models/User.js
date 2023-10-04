import { model, Schema } from 'mongoose';

let collection = 'users'

let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String },
    mail: { type: String, required: true, unique: true },
    photo: { type: String, default: 'https://i.im.ge/2023/09/28/N6umIh.guest.png' },
    password: { type: String, required: true },
    country: { type: String, required: true },
    google: { type: Boolean, default: false }
})

// Para crear un modelo de datos utilizo el metodo model
// pasando como parametros DONDE tengo que crear los documentos y con que FORMA
let User = model(collection, schema)
export default User