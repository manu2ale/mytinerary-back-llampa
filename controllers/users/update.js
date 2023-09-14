import User from "../../models/User.js";

export default async (req,res,next) => {
    try {
        let updateUser = await User.findOneAndUpdate(
            {mail: req.user.mail},
            req.body,
            {new: true}
        ).select('-_id -__v -password')
        return res.status(200).json({
            succes:true,
            message:'user updated',
            response: updateUser
        })
    } catch (error) {
        next(error)
    }
}