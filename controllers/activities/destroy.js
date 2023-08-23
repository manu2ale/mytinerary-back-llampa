import Activity from '../../models/Activity.js'

export default async (req,res,next) => {
    try {
        let deleteActivity = await Activity.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes:true,
            message:'activity deleted',
            response: deleteActivity
        })
    } catch (error) {
        next(error)
    }
}