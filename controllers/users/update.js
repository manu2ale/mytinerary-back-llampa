import User from "../../models/User.js";

export default async (req,res,next) => {
    try {
        let updateUser = await User.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            {new: true}
        ).select('name photo mail')
        return res.status(200).json({
            succes:true,
            message:'user updated',
            response: updateUser
        })
    } catch (error) {
        next(error)
    }
}