import User from '../../models/User.js'

export default async (req,res) => {
    try {
        let deleteUser = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes:true,
            message:'user deleted',
            response: deleteUser._id
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })
    }
}