import express from 'express';
var router = express.Router();
import {connDb} from '../db.js';
import {Work} from '../model/work_schema.js'

const collection = connDb.collection(process.env.WORKS_COLLECTION);

const work = collection.findOne({_id: "6aff3dc9f77e28f031c31287"});
const chapter_array = work.chapters

router.get('/', function(req, res, next) {
    res.render('work',{ title: 'Work', story_name: "Work Rendered", author: "Steve", chapter_name: "Save Me",
        text_array: chapter_array} );
});

module.exports = router;
