import Service from "../model/Service.js"

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        if (services.length < 1) {
            return res.status(404).json(`Services not found`);
        }
        return res.status(200).json(services);
    } catch (err) {
        console.log(err);
        return res.status(500).json(`Internal Service Error`);
    }
};

export const createService = async (req, res) => {
    console.log(req.body)
    try{
        const newService = await Service.create(req.body)
        if(newService){
            return res.status(201).json(`Services Created`)
        }

    }
    catch(err){
        console.log(err)
        return res.status(500).json(`Internal Service Error`)

    }
}