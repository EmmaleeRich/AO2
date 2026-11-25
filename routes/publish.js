var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('publish',{ pageTitle: "Publish",
        chapters: [{title: "Chapter 1", text: "testtesetestest"}, {title: "Chapter 1", text: "testtesetestest"}, {title: "Chapter 1", text: "testtesetestest"}],
        workID: null
    })
});


module.exports = router;