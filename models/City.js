import { model,Schema,Types } from 'mongoose';

let collection = "cities"

let schema = new Schema({
    country: { type:String, required:true },
    fundation: { type:Date, required:true },
    population: { type:Number },
    photo: { type:String, required:true },
    city: { type:String, required:true },
    description: { type:String, default:"edit later"},
    smaldescription: { type:String, default:"edit later"},
    featuredLocation: { type:String, default:"edit later"},
    admin_id: { type:Types.ObjectId, required:true, ref:'users' }
    //Para relacionar datos en mongo es necesario REFERENCIAR el dato hacia la COLECCION que necesito relacionarme
},{
    timestamps: true
} )

let City = model(collection,schema)
export default City