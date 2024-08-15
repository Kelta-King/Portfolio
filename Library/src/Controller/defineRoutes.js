const handlers = require("./handlers");

function defineRoutes(app) {
    try {
        const routes = [
            {
                method: 'GET',
                path: '/',
                handler: handlers.indexHandler
            },
            {
                method: 'GET',
                path: '/*',
                handler: handlers.otherHandler
            }
            // {
            //     method: 'POST',
            //     path: '/users',
            //     handler: (request, h) => {
            //         // Create a new user in the database
            //         const newUser = request.payload;
            //         return `Created user: ${JSON.stringify(newUser)}`;
            //     }
            // },
            // {
            //     method: 'PUT',
            //     path: '/users/{id}',
            //     handler: (request, h) => {
            //         // Update an existing user in the database
            //         const updatedUser = request.payload;
            //         return `Updated`
            //     }
            // }
        ];

        routes.forEach(route => {
            if(route.method === "GET") {
                app.get(route.path, route.handler);
            }
        });

        return null;
    } 
    catch (error) {
        return error;
    }
}

module.exports = defineRoutes;