const fileSystem = require("../Utils/fileSystem");
const responses = require("../Utils/responses");

function indexHandler(request, response) {
    var ret = fileSystem.readPublicFile("index.html");
    if(ret.substring(0, 6) == "Error:") {
        console.error(ret);        
        responses.internalServerError(response, ret);
        return;
    }
    response.send(ret);
}

function otherHandler(request, response) {
    try {
        const path = request.params[0];
        response.send();
    } 
    catch (error) {
        response.send("Error: " + error.message);
    }
}

module.exports = {
    indexHandler,
    otherHandler,
}