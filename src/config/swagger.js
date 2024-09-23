const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Documentation for My API',
        },
        tags: [
            {
              name: "Users",
              description: "Endpoints relacionados con usuarios",
            },
          ],
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Development Server',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = { swaggerUi, swaggerDocs };