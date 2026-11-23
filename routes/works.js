var express = require('express');
// import express from "express";
var router = express.Router();
var {Work} = require("../model/work_schema.js");

router.get('/', async function (req, res) {
    let works = await Work.find().sort('-created');
    const filter = req.query.filter ?? null;
    const filterType = filter ? req.query.filterType : null;
    const totalWorksCount = works.length ?? 0;
    works = filterWorks(works, filterType, filter);
    res.render('works', {filter, filterType, totalWorksCount, works});
})
/* GET home page. */
router.get('/manual', function(req, res, next) {
    res.render('works', { filter: null, works: [{title: "Won't you stay with me? (My darling)", author: "echoeofalostpairofkeys",
            fandoms: ["Sky"], relationships: ["OC/OC", "Storm/Ember"], tags: ["fluff", "hurt/confort", "secrets"], summary: "Ember finds out about the book."
        }, {title: "Under Lonely Stars", author: "odetoalostpairofkeys",
            fandoms: ["Sky"], relationships: ["Pix & Flix & Trix"], tags: ["fluff", "dissociation", "new friends", "Actually beta read for once"], summary: "Trix meets Pix and Flix"
        }], totalWorksCount : 2, filterType: "title"});
});


const filterWorks = (works, filterType, filter) => {
    if (!filter) return works;
    if (filterType === "title") {
        works = works.filter(work => work.title.toLowerCase().includes(filter.toLowerCase()));
    }else if (filterType === "author") {
        works = works.filter(work => work.author.toLowerCase().includes(filter.toLowerCase()));
    }else if (filterType === "fandom") {
        works = works.filter(work => work.fandoms.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));
    }else if (filterType === "relationship") {
        works = works.filter(work => work.relationships.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));
    }else if (filterType === "tag") {
        works = works.filter(work => work.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));
    }
    return works;
}

module.exports = router;