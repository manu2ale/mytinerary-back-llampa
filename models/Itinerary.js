import { model,Schema,Types} from 'mongoose'

let collection = "itineraries"

let schema = new Schema({
    name: { type:String, required:true },
    city_id: { type:Types.ObjectId, required:true, ref:'cities' },
    price: { type:Number, required:true },
    duration: { type:Number, required:true },
    tags: { type:Array, required:true },
    photo: { type:String, required:true },
    likes: { type:Number, required:true, default:0 },
    comments: { type:Array, required:true, default:[]}
},{
    timestamps: true
}    
)

let Itinerary = model(collection,schema)
export default Itinerary