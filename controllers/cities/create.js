import City from "../../models/City.js";

export default async (req, res,next) => {
    try {
    let newCity = await City.create(req.body);
    return res.status(201).json({
      succes: true,
      message: 'user created',
      response: newCity
    })
  } catch (error){
      next(error)
  }
}