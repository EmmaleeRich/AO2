var express = require('express');
// import express from "express";
var router = express.Router();
var Work = require("../model/work_schema.js");

router.get('/', async function (req, res) {
    let works = await Work.find({}).lean();
    const filter = req.query.filter ?? null;
    const filterType = req.query.filterType ?? null;
    works = filterWorks(works, filterType, filter);
    const totalWorksCount = works.length ?? 0;
    res.render('works', {filter, filterType, totalWorksCount, works, pageTitle: 'Works'});
});


const filterWorks = (works, filterType, filter) => {
    if (!filter) return works;
    if (filterType === "title") {
        works = works.filter(work => work.title.toLowerCase().includes(filter.toLowerCase()));
    }else if (filterType === "author") {
        works = works.filter(work => work.author.toLowerCase().includes(filter.toLowerCase()));
    }else if (filterType === "fandom") {
        console.log(works)
        works = works.filter(work => work.fandomTags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));
    }else if (filterType === "relationship") {
        works = works.filter(work => work.relationshipTags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));
    }else if (filterType === "tag") {
        works = works.filter(work => work.generalTags.some(tag => tag.toLowerCase().includes(filter.toLowerCase())));
    }
    return works;
}

module.exports = router;