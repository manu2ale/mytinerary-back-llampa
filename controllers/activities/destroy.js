import Activity from '../../models/Activity.js'

export default async (req,res) => {
    try {
        let deleteActivity = await Activity.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes:true,
            message:'activity deleted',
            response: deleteActivity
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    }
}