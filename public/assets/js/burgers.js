//functions
$(".create-form").on("submit", function(event){
    addNewBurger();
});

$(".change-eaten").on("click", function(event){
    burgerEaten();
})

//event handlers

function addNewBurger(){
    event.preventDefault();

    let newBurger = {
        name: $("burgerName").val().trim(),
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

};