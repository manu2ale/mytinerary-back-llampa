import { model,Schema } from 'mongoose';

let collection = 'users'

let schema = new Schema({
    name: { type:String, required:true },
    lastName: { type:String },
    mail: { type:String, required:true, unique:true },
    photo: { type:String, default: 'https://w7.pngwing.com/pngs/867/694/png-transparent-user-profile-default-computer-icons-network-video-recorder-avatar-cartoon-maker-blue-text-logo.png' },
    password: { type:String, required:true },
    country: { type:String, required:true },
})

// Para crear un modelo de datos utilizo el metodo model
// pasando como parametros DONDE tengo que crear los documentos y con que FORMA
let User = model(collection, schema)
export default User