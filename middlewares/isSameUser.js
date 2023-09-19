import Comment from "../models/Comment.js";

export default async(req,res,next)=> {
    try {
        let { comment_id }=req.params;
        let userId = req.user._id;
        let comment = await Comment.findById(comment_id);
        let userIdComment = comment.user_id;
        if (userId.equals(userIdComment)) {
            return next()
        } else {
            return res.status(400).json({
                success: false,
                message: 'its not your comment',
                response: null
            })
        }
    } catch (error) {
        return next(error)
    }
}