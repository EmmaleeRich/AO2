var express = require('express');
var router = express.Router();
var Work = require('../model/work_schema.js');

router.get('/', async function (req, res, next) {
    try {
        const work = await Work.findById(
            '6b0465bd499cf339515faaf8' ,
            'title chapters -_id'
        ).lean();
        const chapter_array = work.chapters;

        res.render('work', {
            pageTitle: work.title,
            story_name: work.title,
            author: work.authorId,
            text_array: chapter_array
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;