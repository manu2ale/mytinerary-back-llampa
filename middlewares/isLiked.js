import Like from "../models/like.js";

export default async(req,res,next)=> {
    req.body.user_id = req.user._id
    let like = await Like.findOne(req.body)
    if (like) {
        req.isLiked = true
    } else {
        req.isLiked = false
    }
    return next()
}