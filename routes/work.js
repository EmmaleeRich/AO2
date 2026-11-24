var express = require('express');
var router = express.Router();
var Work = require('../model/work_schema.js');

router.get('/', async function (req, res, next) {
    console.log(Work.db.name, Work.collection.name)
    console.log(await Work.countDocuments())
    try {
        const work = await Work.findOne(
            { _id: "6aff3dc9f77e28f031c31287" },
            { _id: 0, title: 1, chapters: 1 }
        ).lean();

        if (!work) {
            return res.status(404).send('Work not found');
        }

        const chapter_array = work.chapters;

        res.render('work', {
            story_name: work.title,
            author: "Steve",
            chapter_name: "Save Me",
            text_array: chapter_array   // pass the variable, not the string "chapter_array"
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;