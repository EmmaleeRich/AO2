var express = require('express');
var router = express.Router();
import { connDb } from '../db.js';
import {Work_Schema} from '/model/work_schema'

const db = connDb
const collection = db.collection(process.env.WORKS_COLLECTION);

const work = await Work_Schema.findOne({_id: })
const chapter_array = ["I am going to end the world. One step at a time", "This will wake a long time"];

router.get('/', function(req, res, next) {
    res.render('work',{ title: 'Work', story_name: "Work Rendered", author: "Steve", chapter_name: "Save Me",
        text_array: chapter_array} );
});

module.exports = router;
