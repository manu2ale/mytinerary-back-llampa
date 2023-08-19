import City from "../../models/City.js";

export default async (req, res) => {
    try {
    let newCity = await City.create(req.body);
    return res.status(201).json({
      succes: true,
      message: 'user created',
      response: newCity
    })
  } catch (error){
    return res.status(400).json({
      success:false,
      message: 'not created',
      response: null
    })
  }
}