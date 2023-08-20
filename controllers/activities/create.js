import Activity from "../../models/Activity.js";

export default async (req, res) => {
    try {
    let newActivity = await Activity.create(req.body);
    return res.status(201).json({
      succes: true,
      message: 'user created',
      response: newActivity
    })
  } catch (error){
    return res.status(400).json({
      success:false,
      message: 'not created',
      response: null
    })
  }
}