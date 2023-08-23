import Activity from "../../models/Activity.js";

export default async (req,res,next) => {
    try {
        let updateActivity = await Activity.findByIdAndUpdate(
            req.params.a_id,
            req.body,
            {new: true}
        ).select('name photo')
        return res.status(200).json({
            succes:true,
            message:'city updated',
            response: updateActivity
        })
    } catch (error) {
        next(error)
    }
}