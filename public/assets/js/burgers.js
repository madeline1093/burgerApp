$(document).ready(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        console.log('hi');
        addNewBurger();
    });
    
    $(".change-eaten").on("click", function(event){
    
            console.log('got here??');
            console.log($(this));
            let id = $(this).data("id");
            let newEaten = $(this).data("neweaten");
        
            let newEatenState = {
                isEaten: newEaten
            };
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newEatenState
            }).then(
                function() {
                    conole.log("changed burger to", newEaten);
                    location.reload();
                }
            )
        
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
    


});
