$(document).ready(function(){
	
	for (var num = 1; num <= 100; num++){
	
	if (num % 5=== 0 && num % 3=== 0){
		//console.log("Fizz Buzz")
		$('.main').append("<p>Fizz Buzz</p>");
	}
	else if (num % 5 === 0){
		//console.log ("buzz");
		$('.main').append("<p>Buzz</p>");

	}
	else if (num % 3 === 0){
		//console.log ("fizz");
		$('.main').append("<p>Fizz</p>")
	}
	else {
		//console.log(i);
		$('.main').append("<p>" + num +"</p>");
	}

}
	});