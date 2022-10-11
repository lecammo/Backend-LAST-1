const { MongoClient} = reqire("mongodb");

class MongoDB {
    static conect = async (uri)=>{
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };

}
module.exports = MongoDB;