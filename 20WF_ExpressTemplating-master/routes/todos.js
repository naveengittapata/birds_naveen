var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/', function(req, res, next){
    axios.get('https://jsonplaceholder.typicode.com/todos/')
     .then(function (response){
        console.log(response.data);
        response.render('todos/todos',{todos:response.data});
      })
    
    });

    router.get('/create', function(req, res, next){
       res.render('todos/create');
        
        });

router.get('/create', todosController.get_create_todo);

router.post('/create', todosController.post_create_todo);

module.exports = router;