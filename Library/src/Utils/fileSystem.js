const fs = require('fs');

function readPublicFile(fileName) {
    try {
        if(!fileName.includes(".html")) {
            fileName += ".html";
        }
        const data = fs.readFileSync("./public/" + fileName, 'utf8');
        return data;   
    } 
    catch (error) {
        return ("Error: " + error.message);
    }
}

module.exports = {
    readPublicFile
};