import Itinerary from "../../models/Itinerary.js";

export default async (req,res,next) => {
    try {
        let updateItinerary = await Itinerary.findByIdAndUpdate(
            req.params.i_id,
            req.body,
            {new: true}
        ).select('name photo');

        if (updateItinerary) {
            return res.status(200).json({
                succes:true,
                message:'itinerary updated',
                response: updateItinerary

            })
        } else {
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