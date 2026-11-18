var express = require('express');
var router = express.Router();

var chapter_array = ["I am going to end the world. One step at a time", "This will wake a long time"];

router.get('/', function(req, res, next) {
    res.render('work',{ title: 'Work', story_name: "Work Rendered", author: "Steve", chapter_name: "Save Me",
        text_array: chapter_array} );
});

module.exports = router;
