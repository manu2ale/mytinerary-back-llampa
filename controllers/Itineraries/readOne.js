import Itinerary from '../../models/Itinerary.js'

export default async (req,res,next) => {
    try {
        // let oneUser = await User.findOne({_id:req.params.id});
        let oneItineraryId = await Itinerary.findById(req.params.id).select('name photo');
        return res.status(200).json({
            success: true,
            message: 'itinerary found',
            response: oneItineraryId
        })
    } catch (error) {
        next(error)
    }
}