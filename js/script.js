$(document).ready(function() {
	
	$("button").on("click", function() {

		$(".output").empty();
		var someNumber = document.getElementById('someNumber').value; 

		var fizzbuzz = function (arg) {
		for (var i = 1; i <= arg; i++) {
			if (i % 5 === 0 && i % 3 === 0) { //check to see if i is divisible by 5 AND 3
				$(".area").append("FizzBuzz <br>");
				console.log("FizzBuzz");
			} else if (i % 5 === 0) { //check to see if i is divisible by 5
				$(".area").append("buzz <br>");
				console.log("buzz");
			} else if (i % 3 === 0) { //check to see if i is divisible by 3
				$(".area").append("fizz <br>");
				console.log("fizz");
			} else {
				$(".area").append(i + "<br>");
				console.log(i); //if i doesn't fall under the 3 cases below, print 
			}
		}
		}

	fizzbuzz(someNumber);

	});

	$("#someNumber").keypress(function(e){  //listens for enter keydown and calls the button click event
		if(e.which == 13) {
			$('button').click();
		}
	});
});