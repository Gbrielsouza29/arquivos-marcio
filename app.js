const express = require('express');
const http = require('http');
const Config = require('config');
const reload = require('reload');

//const config = require('mysql/lib/ConnectionConfig');

const app = express();

app.use(require("./route"));
// rota swagger
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger_output.json');
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerFile));

const server = http.createServer(app);

server.listen(
    Config.get("api.porta"),
    () => {
        console.log(
            Config.get("api.msg") + ' _ ' +
            Config.get("api.caminho") + ' _ ' +
            Config.get("api.porta")
        )
    }
);


reload(app);

