
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
        "name", "eaten"
    ], [
        req.body.burger_name, req.body.isEaten
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id =" + req.params.id;

    burger.update({
        condition: req.body.condition
    }, condition, function(){
        res.redirect('/');
    });
});

module.exports =router;