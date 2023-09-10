export default (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'user logged in with token',
            response: {
                user: req.user,     //Datos del user que no vienen por form
                token: req.token     //Nuevo Token
            }
        })
    } catch (error) {
        next(error)
    }
}