var express = require('express');
var router = express.Router();

var bugsList = [
    {title : 'Unable to login', isClosed : false},
    {title : 'Data not persisting', isClosed : false},
    {title : 'Application shuts down frequentyle', isClosed : true},
    {title : 'New bugs are not saved', isClosed : false},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    var viewData = { bugs : bugsList };
    res.render('bugs/index', viewData);
});

module.exports = router;
