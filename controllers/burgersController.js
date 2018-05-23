
let express = require("express");
let router = express.Router();
let burger = require("../models/burger");

router.get("/", function(req, res){
    burger.all(function(data){
        let burgObject = {
            burgers: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "isEaten"
    ], [
        req.body.burger_name, req.body.isEaten
    ], function(result) {
        console.log(req.body.burger_name)
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    let condition = "id =" + req.params.id;

    burger.update({
        condition: req.body.condition
    }, condition, function(){
        res.redirect('/');
    });
});

module.exports =router;