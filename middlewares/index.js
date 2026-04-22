//const defaultMiddleware = require("./default");
import defaultMiddleware from "./default.js";

//register all middleware
export default function registerMiddlewares(server){
    defaultMiddleware(server);
};
/*module.exports = function registerMiddlewares(server){
    defaultMiddleware(server);
};*/