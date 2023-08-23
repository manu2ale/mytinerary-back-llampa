import City from '../../models/City.js'

export default async (req,res,next) => {
    try {
        // let oneUser = await User.findOne({_id:req.params.id});
        let oneCityId = await City.findById(req.params.id).select('city description photo');
        if (oneCityId) {
            return res.status(200).json({
                success: true,
                message: 'city found',
                response: oneCityId
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'city not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}