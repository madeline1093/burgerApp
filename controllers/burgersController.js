
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
    //debugger;
    console.log(req.body);
    burger.create([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function(result) {
        console.log(req.body.name)
        res.json(result);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    let condition = "id =" + req.params.id;
    console.log('controller' + req.body.isEaten);
    burger.update({
        isEaten: req.body.isEaten
    }, condition, function(smthg){
        res.json(smthg);
    });
});

module.exports =router;