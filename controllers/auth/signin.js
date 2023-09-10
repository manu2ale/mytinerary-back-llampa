export default (req,res,next)=> {
    try {
        return res.status(200).json({
            success: true,
            message: 'user logged in',
            response: {
                user: req.user,
                token: req.token     //token + datos del usuario
            } 
        })
    } catch (error) {
        next(error)
    }
}