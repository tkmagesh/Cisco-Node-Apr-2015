var express = require('express');
var router = express.Router();

var bugsList ;

/* GET users listing. */
router.get('/', function(req, res, next) {
    bugsList = req.session.bugsList;
    var viewData = { bugs : bugsList };
    res.render('bugs/index', viewData);
});

router.get('/new', function(req, res, next){
    res.render('bugs/new');
});

router.post('/new', function(req, res, next){
    bugsList = req.session.bugsList;
    bugsList.push({
        title : req.body.newBug,
        isClosed : false
    });
    res.redirect('/bugs');
});
module.exports = router;
