var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('works', { filter: null, works: [{title: "Won't you stay with me? (My darling)", author: "echoeofalostpairofkeys",
            fandoms: ["Sky"], relationships: ["OC/OC", "Storm/Ember"], tags: ["fluff", "hurt/confort", "secrets"], summary: "Ember finds out about the book."
        }, {title: "Under Lonely Stars", author: "odetoalostpairofkeys",
            fandoms: ["Sky"], relationships: ["Pix & Flix & Trix"], tags: ["fluff", "dissociation", "new friends", "Actually beta read for once"], summary: "Trix meets Pix and Flix"
        }], totalWorksCount : 2, filterType: "title"});
});

module.exports = router;