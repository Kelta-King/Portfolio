const fileSystem = require("../Utils/fileSystem");

function indexHandler(request, response) {
    var ret = fileSystem.readPublicFile("index.html");
    if(ret.substring(0, 6) == "Error:") {
        console.log(ret);
        response.statusCode = 500;
        response.send(ret);        
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