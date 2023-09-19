import Comment from "../../models/Comment.js";

export default async(req,res,next)=>{
    try {
        let { comment_id }=req.params;
        let data = req.body;
        let options = { new: true };
        let updateComment = await Comment.findByIdAndUpdate(comment_id,data,options)
            .populate('itinerary_id','name')
            .populate('user_id','name lastName photo')
        if (updateComment){
            return res.status(200).json({
                success:true,
                message: 'comment updated',
                response: updateComment
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'comment not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}