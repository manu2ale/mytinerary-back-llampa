import Itinerary from '../../models/Itinerary.js'

export default async (req,res,next) => {
    try {
        let deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id)

        if (deleteItinerary){
            return res.status(200).json({
                succes:true,
                message:'itinerary deleted',
                response: deleteItinerary
            })
        } else  {
            return res.status(404).json({
                succes: false,
                message: 'itynerary not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}