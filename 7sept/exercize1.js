

//global scope

function outerFunction() {
	let outerVar = "I'm outside!";
// function scope
	function innerFunction() {
		// function scope
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar?
		console.log(innerVar); // Can we access innerVar?
	}

	innerFunction();
}

outerFunction();//global scope
