import Itinerary from "../../models/Itinerary.js";

export default async (req, res) => {
    try {
    let newItinerary = await Itinerary.create(req.body);
    return res.status(201).json({
      succes: true,
      message: 'itinerary created',
      response: newItinerary
    })
  } catch (error){
    return res.status(400).json({
      success:false,
      message: 'not created',
      response: null
    })
  }
}