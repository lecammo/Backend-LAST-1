const app = require("./app");
const config = require("./app/config");
const config = require("./app/config");
async function starServer(){
    try {
        awaitMongoDB.connect(config.db.uri);
        console.log("Connect to the database!");
        const PORT = config.app.port;
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    }catch(error){
            console.log("Cannot connect to the database!", error);
            process.exit();
            }
}
starServer();
