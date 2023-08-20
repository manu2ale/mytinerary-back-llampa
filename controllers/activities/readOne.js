import Activity from '../../models/Activity.js'

export default async (req,res) => {
    try {
        // let oneUser = await User.findOne({_id:req.params.id});
        let oneActivityId = await Activity.findById(req.params.id).select('name photo');
        return res.status(200).json({
            success: true,
            message: 'activity found',
            response: oneActivityId
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}