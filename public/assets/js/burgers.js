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
            let newEaten = $(event.target).data("neweaten");
            console.log(newEaten);
        
            let newEatenState = {
                isEaten: newEaten
            };
            $.ajax("/api/burgers/" + id, {
                type: "PUT",
                data: newEatenState
            }).then(
                function(data) {
                    console.log(data);
                    //debugger;
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
