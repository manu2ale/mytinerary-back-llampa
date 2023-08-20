import Itinerary from "../../models/Itinerary.js";

export default async (req,res) => {
    try {
        let updateItinerary = await Itinerary.findByIdAndUpdate(
            req.params.i_id,
            req.body,
            {new: true}
        ).select('name photo')
        return res.status(200).json({
            succes:true,
            message:'itinerary updated',
            response: updateItinerary
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not updated',
            response: null
        })
    }
}