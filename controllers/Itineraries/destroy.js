import Itinerary from '../../models/Itinerary.js'

export default async (req,res,next) => {
    try {
        let deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes:true,
            message:'itinerary deleted',
            response: deleteItinerary
        })
    } catch (error) {
        next(error)
    }
}