let require = require("../models/burger")
let require = require("express");

let burger = require("../models/burger");

router.get("/", function(req, res){
    burger.all(function(data){
        let burgObject = {
            burgers: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    })
})