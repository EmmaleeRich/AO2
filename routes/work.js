var express = require('express');
var router = express.Router();
var Work = require('../model/work_schema.js');

router.get('/:id', async function (req, res, next) {
    try {
        console.log(req.params.id);
        const work = await Work.findById(
            req.params.id,
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