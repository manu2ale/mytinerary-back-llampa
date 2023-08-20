import Itinerary from '../../models/Itinerary.js'

export default async (req,res) => {
    try {
        let deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes:true,
            message:'itinerary deleted',
            response: deleteItinerary
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    }
}