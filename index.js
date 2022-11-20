/**
 First grab the element you want to add the listener to.
 Then create a function that modifies it.
 This function when called should do the entire process.

 There are two ways of going about it:
	One is using a defined inner function and another is by
	using an anonymous inner function.

	The method that uses an anonymous function is commented out
	below my submitted answer.

	I prefer a defined function because it is cleaner when calling
	it on the outer function. And also reusable hence potentially
	less code in future.
 */

const input = document.getElementById("button");

function clickAlert() {
	alert("I was clicked!");
}

function addingEventListener() {
	input.addEventListener("click", clickAlert);
}

/**
	const input = document.getElementById("button");

	function addingEventListener() {

	input.addEventListener("click", function () {
		alert("I was clicked!");
	});
}
 */
