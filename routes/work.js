var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('work',{ title: 'Work', story_name: "Work Rendered", author: "Steve", chapter_name: "Save Me",
    text: "I am going to end the world. One step at a time"} );
});

module.exports = router;
