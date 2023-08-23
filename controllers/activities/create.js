import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
    let newActivity = await Activity.create(req.body);
    return res.status(201).json({
      succes: true,
      message: 'user created',
      response: newActivity
    })
  } catch (error){
    next(error)
  }
}