$(document).ready(function() {

	// This function grabs uniRates2 from the database 
	function getUniRates2() {
	    $.get("/api/UniRates2", function(data) {
	      uniRates2 = data;
	      console.log(uniRates2);
	    });
	}

	// This function inserts a new uniRates2 into our database and then updates the view
  	function insertgetUniRates2(event) {
	    event.preventDefault();
	    var uniRates2 = {
	      category: 'Technical_Engineering',
	      location: 'RTP',
	      ed_level: 'Masters',
	      pay_minimum: 86000,
	      pay_maximum: 106000
	    };

	    $.post("/api/UniRates2", uniRates2, getUniRates2);
  	}

	// This function deletes a uniRates2 when the user clicks the delete button
  	function deleteUniRates2(event) {
	    event.stopPropagation();
	    var id = $(this).data("id");
	    $.ajax({
	      method: "DELETE",
	      url: "/api/UniRates2/" + id
	    }).done(getUniRates2);
  	}

  	// This function updates a uniRates2 in our database
  	function updateUniRates2(uniRates2) {
	    $.ajax({
	      method: "PUT",
	      url: "/api/UniRates2",
	      data: uniRates2
	    }).done(getUniRates2);
  	}

})