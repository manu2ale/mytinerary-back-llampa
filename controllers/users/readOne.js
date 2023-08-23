import User from '../../models/User.js'

export default async (req,res,next) => {
    try {
        // let oneUser = await User.findOne({_id:req.params.id}).select('mail photo -_id');
        let oneUserId = await User.findById(req.params.id).select('mail photo -_id');
        return res.status(200).json({
            success: true,
            message: 'user found',
            response: oneUserId
        })
    } catch (error) {
        next(error)
    }
}