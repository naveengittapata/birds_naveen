var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/', function(req, res, next){
    axios.get('https://jsonplaceholder.typicode.com/birds/')
     .then(function (response){
        
        response.render('birds/birds',{birds:response.data});
      })
    
    });

    router.get('/create', function(req, res, next){
       res.render('birds/create');
        
        });

        router.post('/create', function (req,res,next){
            console.log("made it");
            console.log(req.body.content);
            console.log(req.body.type);
            res.redirect('/birds')
        });



router.get('/create', todosController.get_create_todo);

router.post('/create', todosController.post_create_todo);

module.exports = router;