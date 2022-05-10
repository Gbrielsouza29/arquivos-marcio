//const { Router, response } = require('express');
const express = require('express');
//const { append } = require('express/lib/response');
const router = express.Router();
const path = require('path');

const root = './';
router.get(
   "/", (request,response)=>{
       response.sendFile('dist/index.html', {root});
    }
);
// read
router.get(
    "/get", (request,response)=>{
        response.send("resposta.get");
    }
);



// create
router.post(
    "/post", (request, response) => {
        response.send("resposta post");

    }

);
// update
router.put(
    "/put", (request, response) => {
        response.send("resposta put");

    }

);

// delete 
router.delete(
    "/delete", (request, response) => {
        response.send("resposta delete");

    }

);

router.get(

    "/dados", (request, response) => {
        response.send("resposta get dados executada");
    }
);

module.exports = router;