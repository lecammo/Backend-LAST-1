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
exports.findAll =async(req, res, next)=> {
    let documents=[];
    try {
        const { name }= req.query;
        if (name){
            documents = await contactService.findByName(name);
        }
        else{
            documents = await contactService.find({});
           }
        class ContactService {
        async find(filter) { 
         const cursor = await this.Contact.find(filter); 
         return await cursor.toArray();
         }
         async findByName(name) { 
            return await this.find({ 
                name: { $regex: new RegExp(name), $options: "i" },
             });
             } 
            }
        
        } catch (error){
        return next(
            new ApiErro(500,"An erro occured while retieving contacts")
        );
      }
    return res.send(documents);
};
res.send({message:"findAll handler"});
exports.findOne = async (req, res,next)=> {
try {

    const document = await contactService.findById(req.params.id);
    if (!document){
    return next(new ApiErro(404,"Contact not found"));
}
return res.send(document);
} catch(error){
    return next(
        new ApiErro(
            500/
            `Erro retrieving contact with id=${req.params.id}`
        )
    );
}class ContactService {
   
async findById(id) { 
    return await this.Contact.findOne({
         _id: ObjectId.isValid(id) ?new ObjectId(id) : null,
         });
     }
  }
};
exqorts.update = async(req, res, next)=> {
    if (Object.keys(req.body).length==0)  {
        return next(new ApiErro(400,"Data to update can not be empty"));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.update(req.params.id,req.body);
        if(!document){
            return next(new ApiErro(404,"Contact not found"));
        }
        return res.send({message:"Contact was update successfully"});
    }catch (erro){
        return next(
            new ApiErro(500,`Error updating contact with id=${req.params.id}`)
        );
    }
    class ContactService {
    async update(id, payload) {
         const filter = { 
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
         };
         const update = this.extractConactData(payload);
         const result = await this.Contact.findOneAndUpdate(
             filter,
              { $set: update },
              { returnDocument: "after" } 
              );
              return result.value;
             } 
            }
};
exqorts.delete = async(req, res, next)=> {
    try{
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.delete(req.params.id);
        if(!document){
            return next(new ApiErro(404,"Contact not found"));
        }
        return res.send({message:"Contact was delete successfully"});
    }catch (erro){
        return next(
            new ApiErro(
                500,`Could not delete contact with id=${req.params.id}`
            )
        );
    }
    class ContactService {
        async delete(id) { 
            const result = await this.Contact.findOneAndDelete({
                 _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
                 }); 
                 return result.value; 
                } 
            }
    res.send({message:"delete  handler"});
};
exqorts.deleteAll =async(req, res, next)=> {
    try{
        const contactService = new contactService(MongoDB.client);
        const documents = await contactService.deleteAll();
        return res.send({
                     message:`${deletedCount} contacts were deleted successfully`,

        });
    }catch(erro){
        return next(
        new ApiErro(
            500,"An error occured while removing all contacts")

        );
    }

    class ContactService {
        async findFavorite() {
             return await this.find({ favorite: true }); 
    }
     }    
    res.send({message:"deleteAll  handler"});
};
exports.findAllFavourite =async(req, res, next)=> {
    try{
        const contactService = new contactService(MongoDB.client);
        const documents = await contactService.findFavorite();
        return res.send(documents);
    }catch(erro){
        return next(
        new ApiErro(
            500,"An error occured while retrieving favorite contacts"
        )
        );
    }
    class ContactService {
        async deleteAll() { 
            const result = await this.Contact.deleteMany({}); return result.deletedCount; 
        } 
    }
            res.send({message:"findAllFavourite handler"});
};