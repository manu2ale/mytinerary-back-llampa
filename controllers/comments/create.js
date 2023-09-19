import Comment from "../../models/Comment.js";

export default async(req,res,next)=>{
    try {
      req.body.user_id=req.user._id;
        let comment = await Comment.create(req.body)
        return res.status(201).json({
            succes: true,
            message: 'comment created',
            response: comment
          })
        } catch (error){
          next(error)
    }
}