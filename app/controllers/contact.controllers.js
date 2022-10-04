const { MongoAPIError } = require("mongodb");
const ContactService = require("../../services/contact.services");
const MongoDB = require("../utils/mongodb.until");
const ApiErro = require("../ap[i-error");
exports.create = async(req, res, next)=> {
    if(!req.body?.name){
    returnnext(new MongoAPIError(400, "Name cannot be emty"));

}
try{
    const ContactService= new ContactService(MongoDB.client);
    const document = await ContactService.create(req.body);
    return res.send(document);
}catch (error){
    return next(
        new MongoAPIError(500,"An error occurred whle creating the contact")
    )
}
};
exports.findAll =(req, res)=> {
    res.send({message:"findAll handler"});
};
exports.findOne =(req, res)=> {
    res.send({message:"findOne handler"});
};
exqorts.update =(req, res)=> {
    res.send({message:"update handler"});
};
exqorts.delete =(req, res)=> {
    res.send({message:"delete  handler"});
};
exqorts.deleteAll =(req, res)=> {
    res.send({message:"deleteAll  handler"});
};
exports.findAllFavourite =(req, res)=> {
    res.send({message:"findAllFavourite handler"});
};