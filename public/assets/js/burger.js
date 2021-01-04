$(function() {
  $(".create-form").on("submit", function(event) {
      console.log("button clicked")
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: "0"
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".devourButton").on("click", function(event) {
    console.log("clicked!!!!!!!!")
    event.preventDefault();
    var id = $(this).data("id");
    var eatBurger = $(this).data("devoured");

    var devouredBurger = {
        devoured: eatBurger
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
    }).then(function () {
        console.log("burger devoured: ", eatBurger);
        location.reload();
    }
  );
});
});