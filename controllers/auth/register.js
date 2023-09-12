import User from '../../models/User.js'

export default async (req,res,next) =>{
  try {
        let user = await User.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'user created',
            response: user._id
        })
  } catch (error) {
        next(error)
  }
}
