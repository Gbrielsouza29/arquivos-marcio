const swaggerAutogen = require('swagger-autogen')();//constante
const outputFile = './swagger/swagger_output.json';// indicativo de saida arquivo onde ficaa
const endpointsFiles = ['./route.js']; //indicativo de coleta
swaggerAutogen(outputFile, endpointsFiles);

// npm i swagger-ui-express