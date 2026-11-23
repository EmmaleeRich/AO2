var express = require('express');
var router = express.Router();
var Work = require('../model/work_schema.js');

const work = Work.findOne({_id: "6aff3dc9f77e28f031c31287"});
const chapter_array = work.chapters

router.get('/', function(req, res, next) {
    res.render('work',{ title: 'Work', story_name: "Work Rendered", author: "Steve", chapter_name: "Save Me",
        text_array: chapter_array} );
});

module.exports = router;
