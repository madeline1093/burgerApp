$(document).ready(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        console.log('hi');
        addNewBurger();
    });
    
    $(".change-eaten").on("click", function(event){
        burgerEaten();
    })
    
    //event handlers
    
    function addNewBurger(){
      
        console.log('got here');
        let newBurger = {
            burger_name: $("#burgerName").val().trim(),
            isEaten: false
        };
    
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log('new burger added');
            location.reload();
        });
    };
    
    function burgerEaten() {
        console.log('got here??');
        let id = $(this).data("id");
        let newEaten = $(this).data("newEaten");
    
        let newEatenState = {
            isEaten: newEaten
        };
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                conole.log("changed eaten to", newEaten);
                location.reload();
            }
        )
    };

});
