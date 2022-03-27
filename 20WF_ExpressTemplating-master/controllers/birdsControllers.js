const axios = require('axios');

exports.get_todos = function(req, res) {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
      .then(function (response) {
        res.render('birds/birds', { birds: response.data });
      })
}

exports.get_create_todo = function(req, res) {
    res.render('birds/create');
}

exports.post_create_birds = function(req, res) {
      // format as json to save to databse:
    let newbirds = {
        content: req.body.content,
        type: req.body.type
    }

    // todo save these to a databse
    console.log(newbirds);

    // what next?
    res.redirect('/birds');
}