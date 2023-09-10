import User from "../models/User.js"

export default async(req,res,next)=> {
    try {
        let user = await User.findOne({mail:req.body.mail},'-password -_id -__v')
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'user not registered',
                response: null
            })
        } else {
            req.user = user
            // console.log(req.user)
            return next()
        }
    } catch (error) {
        return next(error)
    }
}