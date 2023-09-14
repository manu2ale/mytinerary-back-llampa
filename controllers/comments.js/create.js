import Comment from "../../models/Comment.js";

export default async(req,res,next)=>{
    try {
        let one = await Comment.create(req.body)
        return res.status(201).json({
            succes: true,
            message: 'comment created',
            response: one
          })
        } catch (error){
          next(error)
    }
}