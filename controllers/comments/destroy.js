import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
    try {
        let { comment_id } = req.params;
        await Comment.findByIdAndDelete(comment_id);
        return res.status(200).json({
            success: true,
            message: 'comment destroyed',
            response: null
        })
    } catch (error) {
        next(error)
    }
}