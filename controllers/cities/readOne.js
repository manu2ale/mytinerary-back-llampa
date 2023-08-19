import City from '../../models/City.js'

export default async (req,res) => {
    try {
        // let oneUser = await User.findOne({_id:req.params.id});
        let oneCityId = await City.findById(req.params.id).select('city photo');
        return res.status(200).json({
            success: true,
            message: 'city found',
            response: oneCityId
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}