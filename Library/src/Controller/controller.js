require('dotenv').config();
const defineRoutes = require("./defineRoutes");

function controller(app) {
    try {
        const ret = defineRoutes(app);
        if(ret !== null) {
            console.error(ret);
            throw new Error('Failed to define routes.');
        }
        app.listen(process.env.PORT, () => {
            console.log(`App listening at port:${process.env.PORT}`);
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = controller;