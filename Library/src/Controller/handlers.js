function indexHandler(request, response) {
    response.send({
        "method": "Done",
    });
}

function otherHandler(request, response) {
    try {
        const path = request.params[0];
        response.send({
            "method": path
        });
    } 
    catch (error) {
        response.send({
            "error": error.message
        });
    }
}

module.exports = {
    indexHandler,
    otherHandler,
}