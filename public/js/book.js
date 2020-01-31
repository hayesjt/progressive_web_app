// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-completed").on("click", function (event) {
      var id = $(this).data("id");
      var newComplete = $(this).data("newcompleted");
      
      console.log(id, newComplete);
      var newCompleteStatus = {
        complete: newComplete
      };

      console.log(newCompleteStatus.complete);
  
      if (newCompleteStatus.complete) {
        
        $.ajax("/api/ubooks/" + id, {
          type: "PUT",
          data: newCompleteStatus
        }).then(
          function () {
            console.log("changed status to", newComplete);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
      else {
        $.ajax("/api/cbooks/" + id, {
          type: "PUT",
          data: newCompleteStatus
        }).then(
          function () {
            console.log("changed status to", newComplete);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
    });
    

    $(".create-form").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBook = {
        book_title: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/books", {
        type: "POST",
        data: newBook
      }).then(
        function () {
          console.log("created new book");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-book").on("click", function (event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/books/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted book", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });