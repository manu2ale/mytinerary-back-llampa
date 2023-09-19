import Comment from "../../models/Comment.js";

export default async(req,res,next)=>{
    try {
        let queries = {};
        if (req.query.itinerary_id) {
            queries.itinerary_id = req.query.itinerary_id;
        }
        let all = await Comment.find(queries)
            .populate('itinerary_id','name')
            .populate('user_id','name lastName photo')
            .sort({ updatedAt:1 })
        if (all.length>0){
            return res.status(200).json({
                succes: true,
                message: 'comments read',
                response: all
              })
        } else {
            return res.status(404).json({
                succes: false,
                message: 'comments not found',
                response: null
              })
        }
    } catch (error) {
        next(error)
    }
}