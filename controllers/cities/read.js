import City from '../../models/City.js';

export default async (req,res,next) => {
    try {
        // let searchObj = { admin_id:'64dc61e97cd0faf3e0d6381a'}
        let searchObj =  {};
        let orderObj = {};
        if (req.query.admin_id) {
            searchObj.admin_id = req.query.admin_id
        };

        if (req.query.sort) {
            orderObj.city = req.query.sort
            //Agrego la propiedad por la cual quiero ordenar, 1 asc, -1 desc
        };
        
        if (req.query.city) {
            searchObj.city = new RegExp ('^'+req.query.city,'i')
        };

        let allCities = await City
            .find(searchObj,'country photo city smalldescription admin_id')
            .populate('admin_id','name mail photo')
            .sort(orderObj);
        // let allCities = await City.find().select('country city photo smaldescription admin_id').populate('admin_id','name mail photo')
        if (allCities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'cities found',
                response: allCities
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}