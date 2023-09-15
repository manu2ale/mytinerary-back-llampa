export default (req,res,next) => {
    try {
        let liked = req.isLiked
        if (liked) {
            return res.status(200).json({
                success: true,
                message: 'liked',
                response: liked
            })
        } else {
            return res.status(200).json({
                success: true,
                message: 'not liked',
                response: liked
            })
        }
    } catch (error) {
        next(error)
    }
}
