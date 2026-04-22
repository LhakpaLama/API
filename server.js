//const {server} =require("./config");
import {server} from "./config/index.js";

//const {rootRouter} from "./routes";
import {rootRouter} from "./routes/index.js";

//const registerMiddlewares =require("./middlewares");
import registerMiddlewares from "./middlewares/index.js";

async function main() {
    registerMiddlewares(server);
    server.all("/",(req,res)=>res.redirect("/v1"));
    server.use("/v1",rootRouter);
    
    server.listen();
}
/*
async function main() {
    registerMiddlewares(server);

    server.get("/",(req,res,next)=>{
        res.json({message:`Handling ${req.method} request`});
    });

    server.post("/",(req,res,next)=>{
        res.json({message:`Handling ${req.method} request`});
    });

    server.put("/",(req,res,next)=>{
        res.json({message:`Handling ${req.method} request`});
    });

    server.delete("/",(req,res,next)=>{
        res.json({message:`Handling ${req.method} request`});
    });
    
    server.listen();
}
*/
main();
