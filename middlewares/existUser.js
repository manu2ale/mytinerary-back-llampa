import User from "../models/User.js"

export default async(req,res,next)=> {
    try {
        let user = await User.findOne({mail:req.body.mail})
        if (user) {
            return res.status(400).json({
                success: false,
                message: 'invalid credentials',
                response: user._id
            })
        } else {
            return next()
        }
    } catch (error) {
        return next(error)
    }
}